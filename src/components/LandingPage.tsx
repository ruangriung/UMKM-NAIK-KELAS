import React from 'react';
import { BookOpen, Rocket, Target, TrendingUp, Users, Flag, Layers } from 'lucide-react';

interface LandingPageProps {
  onLogin: () => void;
  onNavigate: (view: 'landing' | 'privacy' | 'terms') => void;
}

export default function LandingPage({ onLogin, onNavigate }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-indigo-200 selection:text-indigo-900">
      {/* Header */}
      <header className="px-6 py-4 flex items-center justify-between border-b border-slate-200 bg-white sticky top-0 z-10">
        <div className="flex items-center gap-3 text-slate-900">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-md shadow-indigo-600/20">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <span className="font-extrabold text-xl tracking-tight hidden sm:inline-block">UMKM Naik Kelas</span>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={onLogin}
            className="bg-indigo-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-sm hover:shadow-md"
          >
            Masuk / Daftar
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 lg:p-24 text-center">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 font-semibold text-sm mb-6">
            <Rocket className="w-4 h-4" />
            <span>Panduan & Toolkit Praktis 2026</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-6 tracking-tight">
            Strategi Lengkap Membangun & Mengembangkan UMKM
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-4 max-w-2xl leading-relaxed">
            Kurikulum 14 Bab berjenjang berisikan panduan praktis, taktik psikologi harga, manajemen komplain, kemitraan B2B, hingga ekspansi digital global. Lengkap dengan alat bantu seperti Kanvas Bisnis dan Perencana Konten.
          </p>

          <p className="text-md md:text-lg text-slate-500 max-w-2xl mx-auto italic font-medium leading-relaxed mb-10">
            "Mulai dari apa yang ada, gunakan apa yang tersedia, dan lakukan sebaik mungkin."
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-20">
            <button 
              onClick={onLogin}
              className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl hover:shadow-indigo-600/30 hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <BookOpen className="w-5 h-5" />
              Mulai Belajar Sekarang (Gratis)
            </button>
          </div>

          <div className="w-full text-left mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Ringkasan Eksekutif</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-4">
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-2">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Ubah Keraguan Jadi Tindakan</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Platform ini didesain khusus bagi pemula yang selalu merasa <strong>"belum siap"</strong>. Kami akan memandu Anda mulai dari persiapan mental, menemukan ide, hingga strategi jualan tanpa modal besar.
                </p>
              </div>
              
              <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-4">
                <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center mb-2">
                  <Flag className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Hindari Kesalahan Klasik</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Menekan harga jual agar "asal laku" atau numpuk stok adalah penyakit pemula. Modul ini membimbing Anda memotong risiko-risiko bocor halus penimbul kebangkrutan.
                </p>
              </div>
              
              <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-4">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-2">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Framework Anti-Boncos</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Diajarkan langsung teknik pisah kas keuangan metode amplop dan pembukuan dua sisi, agar HPP bisa ketemu, margin laba tercapai, operasional tenang.
                </p>
              </div>
              
              <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-4">
                <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-2">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Alat Bantu & Evaluasi</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Gunakan Kanvas Model Bisnis, Kalkulator Laba, dan pelatihan interaktif terintegrasi untuk segera menguji kelayakan bisnis Anda secara mendalam.
                </p>
              </div>
            </div>
          </div>

          {/* Call to action */}
          <div className="w-full bg-slate-900 text-slate-100 rounded-3xl p-8 md:p-12 text-center shadow-xl relative overflow-hidden mb-12">
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Siap untuk Memulai Transformasi?</h2>
              <p className="text-slate-400 mb-8 md:mb-10 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                Eksekusi Langkah Praktis hari ini juga, manfaatkan Kupon Template-nya, dan Jangan biarkan ilmu ini sekadar menjadi wacana!
              </p>
              <button 
                onClick={onLogin}
                className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-colors shadow-lg"
              >
                Masuk untuk Memulai
              </button>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-500 text-sm border-t border-slate-200 bg-white">
        <p>&copy; 2026 UMKM Naik Kelas. Panduan Membangun Usaha Berkelanjutan.</p>
        <div className="mt-4 space-x-4">
          <button onClick={() => onNavigate('privacy')} className="hover:text-indigo-600 transition-colors">Privacy Policy</button>
          <span>&middot;</span>
          <button onClick={() => onNavigate('terms')} className="hover:text-indigo-600 transition-colors">Terms of Service</button>
        </div>
      </footer>
    </div>
  );
}
