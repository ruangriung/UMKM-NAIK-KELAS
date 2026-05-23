import React, { useState, useEffect } from 'react';
import { ArrowLeft, Send } from 'lucide-react';

interface LoginFormProps {
  onBack: () => void;
  onSuccess: () => void;
}

export default function LoginForm({ onBack, onSuccess }: LoginFormProps) {
  const [rejectedEmail, setRejectedEmail] = useState<string | null>(null);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Basic security check, verify origin starts with http if not in same origin
      if (event.data?.type === 'OAUTH_AUTH_SUCCESS') {
        const payload = event.data.payload;
        if (payload?.isAllowed) {
          onSuccess();
        } else {
          setRejectedEmail(payload?.email || 'email-anda');
        }
        setIsAuthenticating(false);
      } else if (event.data?.type === 'OAUTH_AUTH_ERROR') {
        alert('Autentikasi gagal atau dibatalkan.');
        setIsAuthenticating(false);
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [onSuccess]);

  const handleGoogleLogin = async () => {
    setIsAuthenticating(true);
    setRejectedEmail(null);
    try {
      const response = await fetch('/api/auth/url');
      if (!response.ok) throw new Error('Failed to get auth URL');
      const { url } = await response.json();

      const authWindow = window.open(
        url,
        'oauth_popup',
        'width=600,height=700'
      );

      if (!authWindow) {
        alert('Mohon izinkan pop-up untuk login menggunakan Google.');
        setIsAuthenticating(false);
      }
    } catch (error) {
      console.error(error);
      alert('Terjadi kesalahan saat memulai proses login.');
      setIsAuthenticating(false);
    }
  };

  const getWaLink = () => {
    const text = `Halo Admin, saya ingin mendaftarkan akses untuk email ${rejectedEmail || 'saya'}. Bersama pesan ini saya lampirkan bukti pembayaran.`;
    return `https://wa.me/6281330763633?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-indigo-200 selection:text-indigo-900">
      <header className="px-6 py-4 flex items-center border-b border-slate-200 bg-white">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Kembali ke Beranda</span>
        </button>
      </header>

      <main className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-slate-100 p-8">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-2">Selamat Datang</h1>
            <p className="text-slate-500 text-sm">Masuk untuk menyimpan progres belajar dan data kanvas usaha Anda.</p>
          </div>

          {!rejectedEmail ? (
            <>
              <div className="space-y-4 mb-8">
                <button 
                  onClick={handleGoogleLogin}
                  disabled={isAuthenticating}
                  className="w-full h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center gap-3 hover:bg-slate-50 transition-all font-medium text-slate-700 shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  {isAuthenticating ? 'Memproses...' : 'Lanjutkan dengan Google'}
                </button>
              </div>

              <p className="mt-8 text-center text-sm text-slate-500 bg-slate-50 p-4 rounded-xl border border-slate-100">
                Akses ke platform ini terbatas. Hanya email yang telah didaftarkan yang dapat masuk dan mengakses materi.
              </p>
            </>
          ) : (
            <div className="space-y-6 animate-in slide-in-from-bottom-2 fade-in duration-300">
              <div className="bg-red-50 text-red-700 p-4 rounded-xl text-sm border border-red-100 text-center">
                Email <span className="font-bold">{rejectedEmail}</span> belum terdaftar di sistem kami.
              </div>

              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-center space-y-4 shadow-sm">
                <h3 className="font-bold text-slate-900">Cara Pendaftaran:</h3>
                <p className="text-sm text-slate-600">Scan QRIS di bawah ini untuk membayar biaya akses sebesar Rp 50.000.</p>
                
                <div className="w-48 h-48 mx-auto bg-white border-2 border-slate-200 rounded-xl p-2 flex items-center justify-center relative overflow-hidden group">
                   {/* Placeholder QRIS box */}
                   <div className="w-full h-full bg-slate-100 flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-slate-300">
                      <div className="w-8 h-8 flex flex-wrap gap-1 mb-2">
                         <div className="w-3.5 h-3.5 bg-indigo-600 rounded-sm"></div>
                         <div className="w-3.5 h-3.5 bg-indigo-600 rounded-sm"></div>
                         <div className="w-3.5 h-3.5 bg-indigo-600 rounded-sm"></div>
                         <div className="w-3.5 h-3.5 bg-indigo-500 rounded-sm"></div>
                      </div>
                      <span className="text-[10px] font-bold text-slate-500 tracking-widest">QRIS PAYMENT</span>
                   </div>
                </div>

                <ol className="text-sm text-slate-600 text-left list-decimal list-inside space-y-2 pt-2">
                  <li>Scan QRIS menggunakan aplikasi Bank / E-Wallet Anda.</li>
                  <li>Simpan tangkapan layar (screenshot) bukti pembayaran yang berhasil.</li>
                  <li>Klik tombol WhatsApp di bawah ini dan kirimkan bukti pembayaran Anda.</li>
                </ol>
              </div>

              <a 
                href={getWaLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-12 bg-green-600 text-white rounded-xl flex items-center justify-center gap-2 hover:bg-green-700 transition-all font-medium shadow-md hover:shadow-lg shadow-green-600/20"
              >
                <Send className="w-4 h-4" />
                Konfirmasi Pembayaran via WA
              </a>

              <button
                onClick={() => setRejectedEmail(null)}
                className="w-full h-10 text-slate-500 text-sm hover:text-slate-900 transition-colors"
              >
                Gunakan akun Google lain
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
