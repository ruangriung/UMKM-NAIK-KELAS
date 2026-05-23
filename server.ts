import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import session from "express-session";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // For parsing application/json
  app.use(express.json());

  // Set up express-session (required for OAuth state and login state)
  app.use(session({
    secret: process.env.SESSION_SECRET || 'super-secret-key-1234',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === 'production', 
      sameSite: 'lax', // For production iframe might need 'none' if cross origin
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000 // 1 day
    }
  }));

  // Endpoint to get the auth URL
  app.get('/api/auth/url', (req, res) => {
    const protocol = req.headers['x-forwarded-proto'] || req.protocol;
    const host = req.headers['x-forwarded-host'] || req.headers.host;
    const redirectUri = process.env.APP_URL 
      ? `${process.env.APP_URL}/auth/callback`
      : `${protocol}://${host}/auth/callback`;

    const params = new URLSearchParams({
      client_id: process.env.GOOGLE_CLIENT_ID || '',
      redirect_uri: redirectUri,
      response_type: 'code',
      scope: 'openid email profile',
      access_type: 'online',
    });

    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?${params}`;
    res.json({ url: authUrl });
  });

  // OAuth Callback Route
  app.get('/auth/callback', async (req, res) => {
    const { code } = req.query;
    
    if (!code) {
      return res.status(400).send('No code provided');
    }

    try {
      const protocol = req.headers['x-forwarded-proto'] || req.protocol;
      const host = req.headers['x-forwarded-host'] || req.headers.host;
      const redirectUri = process.env.APP_URL 
        ? `${process.env.APP_URL}/auth/callback`
        : `${protocol}://${host}/auth/callback`;

      // 1. Exchange code for token
      const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          code: code as string,
          client_id: process.env.GOOGLE_CLIENT_ID || '',
          client_secret: process.env.GOOGLE_CLIENT_SECRET || '',
          redirect_uri: redirectUri,
          grant_type: 'authorization_code',
        }),
      });

      const tokenData = await tokenResponse.json();

      if (!tokenResponse.ok) {
        console.error('Token Error:', tokenData);
        throw new Error('Failed to exchange code');
      }

      // 2. Get user info
      const userResponse = await fetch('https://openidconnect.googleapis.com/v1/userinfo', {
        headers: { Authorization: `Bearer ${tokenData.access_token}` },
      });

      const userData = await userResponse.json();

      if (!userResponse.ok) {
        console.error('User Error:', userData);
        throw new Error('Failed to get user info');
      }

      const email = userData.email;
      let isAllowed = false;

      // Check D1 database if credentials are provided
      if (process.env.CLOUDFLARE_ACCOUNT_ID && process.env.CLOUDFLARE_D1_DATABASE_ID && process.env.CLOUDFLARE_API_TOKEN) {
        try {
          const d1Url = `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/d1/database/${process.env.CLOUDFLARE_D1_DATABASE_ID}/query`;
          const d1Response = await fetch(d1Url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${process.env.CLOUDFLARE_API_TOKEN}`
            },
            body: JSON.stringify({
              sql: "SELECT count(*) as count FROM users WHERE email = ? AND is_active = 1",
              params: [email]
            })
          });
          const d1Data = await d1Response.json();
          if (d1Data.success && d1Data.result && d1Data.result.length > 0 && d1Data.result[0].results && d1Data.result[0].results.length > 0) {
            isAllowed = d1Data.result[0].results[0].count > 0;
          }
        } catch (d1Error) {
          console.error("Cloudflare D1 error:", d1Error);
        }
      } else {
        // Fallback for development if D1 variables are missing
        console.warn("Cloudflare D1 credentials missing. Rejecting all by default unless added directly to env.");
        const fallbackAllowed = process.env.ALLOWED_TEST_EMAILS ? process.env.ALLOWED_TEST_EMAILS.split(',') : [];
        isAllowed = fallbackAllowed.includes(email);
      }

      // We send a postMessage to the parent window indicating success or error based on whether they are allowed
      res.send(`
        <html>
          <body>
            <script>
              if (window.opener) {
                window.opener.postMessage({ 
                  type: 'OAUTH_AUTH_SUCCESS', 
                  payload: { email: '${email}', isAllowed: ${isAllowed}, name: '${userData.name}' } 
                }, '*');
                window.close();
              } else {
                window.location.href = '/';
              }
            </script>
            <p>Authentication complete. This window should close automatically.</p>
          </body>
        </html>
      `);
    } catch (error) {
      console.error(error);
      res.send(`
        <html>
          <body>
            <script>
              if (window.opener) {
                window.opener.postMessage({ type: 'OAUTH_AUTH_ERROR' }, '*');
                window.close();
              }
            </script>
            <p>Authentication failed. You can close this window.</p>
          </body>
        </html>
      `);
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
