import React from 'react';
import { FileText } from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto pb-12 animate-in fade-in duration-500">
      <header className="mb-10 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 font-semibold text-sm mb-4">
          <FileText className="w-4 h-4" />
          <span>Legal</span>
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Syarat & Ketentuan</h2>
        <p className="text-slate-600 text-lg leading-relaxed max-w-2xl">
          Peraturan dan pedoman dalam penggunaan platform layanan kami.
        </p>
      </header>

      <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-8 text-slate-700">
        <section>
          <h3 className="text-xl font-bold text-slate-900 mb-3">1. Penerimaan Syarat</h3>
          <p className="leading-relaxed">
            Dengan mengakses dan menggunakan platform ini, Anda setuju untuk terikat oleh Syarat dan Ketentuan berikut. Jika Anda tidak setuju dengan bagian mana pun dari syarat ini, Anda dilarang menggunakan platform dan dapat menghentikan akses Anda.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold text-slate-900 mb-3">2. Penggunaan Layanan dan Konten</h3>
          <p className="leading-relaxed mb-3">
            Platform ini menyediakan materi edukasi, kalkulator bisnis, dan alat bantu digital untuk Usaha Mikro Kecil dan Menengah (UMKM).
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Anda setuju untuk menggunakan konten murni untuk tujuan pembelajaran dan peningkatan usaha Anda.</li>
            <li>Dilarang keras menyalin, mereproduksi, atau mendistribusikan ulang kurikulum (Bab 1-14) dengan tujuan mencari keuntungan komersial tanpa izin tertulis dari kami.</li>
            <li>Anda diizinkan membagikan materi promosi (soft-selling) pada bagian "Materi Promosi" sesuai dengan panduan yang disediakan.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-bold text-slate-900 mb-3">3. Akun dan Keamanan</h3>
          <p className="leading-relaxed">
            Jika Anda menggunakan login pihak ketiga (seperti Google OAuth) untuk mengakses fitur tertentu:
            Anda bertanggung jawab menjaga kerahasiaan kredensial akun Anda. Kegiatan apa pun yang dilakukan menggunakan akun Anda, merupakan tanggung jawab Anda sepenuhnya.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold text-slate-900 mb-3">4. Penolakan Jaminan (Disclaimer)</h3>
          <p className="leading-relaxed">
            Materi dalam platform ini disediakan "sebagaimana adanya". Kami tidak memberikan jaminan mutlak atas peningkatan penghasilan atau kesuksesan finansial setelah membaca kurikulum ini. Keberhasilan bisnis Anda sangat bergantung pada eksekusi, kondisi pasar, dan berbagai faktor eksternal lainnya di luar kendali kami. Alat bantu seperti kalkulator hanyalah estimasi matematis dan tidak dapat dianggap sebagai saran finansial yang mengikat secara hukum.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold text-slate-900 mb-3">5. Batasan Tanggung Jawab</h3>
          <p className="leading-relaxed">
            Dalam keadaan apa pun, kami tidak bertanggung jawab atas kerugian finansial, kerusakan, atau konsekuensi hukum yang timbul dari investasi bisnis atau keputusan yang diambil berdasarkan materi pada platform ini.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold text-slate-900 mb-3">6. Perubahan Syarat</h3>
          <p className="leading-relaxed">
            Kami berhak untuk memperbarui dan mengubah syarat dan ketentuan ini dari waktu ke waktu. Pembaruan akan berlaku segera setelah dipublikasikan pada halaman ini.
          </p>
          <p className="mt-2 text-sm text-slate-500">Pembaruan Terakhir: Mei 2026</p>
        </section>
      </div>
    </div>
  );
}
