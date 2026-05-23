-- Schema for Cloudflare D1 Database
-- UMKM Naik Kelas Platform

-- Table to store allowed/registered users
CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  picture TEXT,
  phone_number TEXT,
  is_active INTEGER DEFAULT 0, -- 0 for pending payment, 1 for active
  payment_proof_url TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Table to store user progress on chapters
CREATE TABLE IF NOT EXISTS user_progress (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  chapter_id TEXT NOT NULL,
  is_completed INTEGER DEFAULT 0,
  last_accessed DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  UNIQUE(user_id, chapter_id)
);

-- Table to store user Lean Canvas data
CREATE TABLE IF NOT EXISTS lean_canvas (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  project_name TEXT NOT NULL,
  problem TEXT,
  solution TEXT,
  key_metrics TEXT,
  value_proposition TEXT,
  unfair_advantage TEXT,
  channels TEXT,
  customer_segments TEXT,
  cost_structure TEXT,
  revenue_streams TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Create an index to quickly lookup users by email
CREATE INDEX idx_users_email ON users(email);

-- Some initial mock data
INSERT INTO users (id, email, name, is_active) 
VALUES ('usr_1', 'martabakgresik@gmail.com', 'Admin', 1);
