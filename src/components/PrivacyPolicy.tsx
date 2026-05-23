import React from 'react';
import { Shield } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto pb-12 animate-in fade-in duration-500">
      <header className="mb-10 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-4">
          <Shield className="w-4 h-4" />
          <span>Legal</span>
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Kebijakan Privasi</h2>
        <p className="text-slate-600 text-lg leading-relaxed max-w-2xl">
          Komitmen kami terhadap keamanan data dan privasi Anda.
        </p>
      </header>

      <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-8 text-slate-700">
        <section>
          <h3 className="text-xl font-bold text-slate-900 mb-3">1. Informasi yang Kami Kumpulkan</h3>
          <p className="leading-relaxed mb-3">
            Saat Anda menggunakan layanan kami, khususnya saat masuk (login) menggunakan akun Google, kami dapat mengumpulkan informasi dasar berikut:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Informasi Profil:</strong> Nama lengkap dan alamat email yang terhubung dengan akun Google Anda.</li>
            <li><strong>Foto Profil:</strong> URL foto profil Publik dari akun Google Anda untuk mempersonalisasi pengalaman antarmuka.</li>
            <li><strong>Data Penggunaan:</strong> Informasi terkait interaksi Anda dengan situs dan modul pembelajaran yang tersimpan secara lokal di perangkat Anda (Local Storage).</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-bold text-slate-900 mb-3">2. Penggunaan Informasi</h3>
          <p className="leading-relaxed mb-3">
            Informasi yang kami kumpulkan digunakan secara eksklusif untuk tujuan berikut:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Memverifikasi identitas Anda dan memberikan akses ke fitur-fitur platform.</li>
            <li>Membuat pengalaman belajar yang dipersonalisasi sesuai dengan preferensi akun Anda.</li>
            <li>Memastikan keamanan platform dan mencegah penyalahgunaan.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-bold text-slate-900 mb-3">3. Pembagian Data kepada Pihak Ketiga</h3>
          <p className="leading-relaxed">
            Kami <strong>tidak pernah</strong> menjual, menyewakan, atau membagikan data pribadi Anda (termasuk email dan nama) kepada pihak ketiga mana pun untuk tujuan periklanan atau pemasaran. Data Anda hanya diproses secara internal untuk menyediakan layanan ini.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold text-slate-900 mb-3">4. Penyimpanan dan Keamanan Data</h3>
          <p className="leading-relaxed">
            Mayoritas data pekerjaan Anda seperti Kanvas Model Bisnis, hasil kalkulator, dan konten perencana disimpan secara lokal di dalam browser Anda (Local Storage) dan bukan di server kami. Hal ini memberikan Anda kendali penuh atas informasi bisnis Anda. Kami menerapkan protokol keamanan standar untuk melindungi informasi akun yang Anda gunakan saat login.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold text-slate-900 mb-3">5. Hubungi Kami</h3>
          <p className="leading-relaxed">
            Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau ingin menghapus data Anda yang terkait dengan aplikasi kami, Anda dapat menghubungi kami kapan saja.
          </p>
          <p className="mt-2 text-sm text-slate-500">Pembaruan Terakhir: Mei 2026</p>
        </section>
      </div>
    </div>
  );
}
