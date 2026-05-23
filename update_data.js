const fs = require('fs');

const path = './src/data.ts';
let content = fs.readFileSync(path, 'utf8');

const tips = [
  "Berhenti overthinking! 1 aksi nyata hari ini lebih berharga daripada 100 rencana bisnis di kepala. Jual ke 1 orang pertama adalah pencapaian terbesar.",
  "Jangan jatuh cinta pada ide Anda, jatuh cintalah pada masalah pelanggan. Jika ide tidak laku saat Pre-Order, segera pivot tanpa ragu.",
  "Supplier yang baik adalah kunci. Jangan sungkan nego tipis-tipis atau minta bonus sampel jika Anda berjanji bantu promosi secara konsisten.",
  "Konten yang jujur dan sedikit berantakan (behind the scenes) justru lebih sering viral dibanding foto studio yang terlalu sempurna.",
  "Uang kas kecil (petty cash) adalah jantung harian. Selalu sediakan uang kembalian pecahan kecil, jangan biarkan pembeli batal karena Anda repot tukar uang.",
  "Pelanggan lama yang puas tidak hanya kembali belanja, tapi mereka akan jadi 'marketing gratis' Anda dengan membawa teman-teman baru.",
  "Urus NIB dan PIRT sejak omzet masih ratusan ribu. Jangan tunggu bisnis membesar baru urus izin, karena saat besar, kompetitor bisa mencuri nama merek Anda.",
  "SOP yang paling efektif adalah format video, bukan sekadar kertas. Rekam diri Anda saat bikin produk, dan kirim video itu ke karyawan baru sebagai panduan.",
  "Waspada 'Ghost Kitchen' bodong. Meskipun murah sewanya, pastikan ada akses masuk motor yang mudah agar ojol tidak membatalkan pesanan karena sulit parkir.",
  "Jika pelanggan memarahi Anda secara online, jangan dibalas pada jam tersebut. Tarik napas 10 menit, minum air, barulah membalas dengan kepala dingin.",
  "Kreator mikro lebih peduli untuk membuat konten yang detail. Kadang 1 KOL dengan 5.000 followers di kota yang sama lebih powerful daripada artis ibukota.",
  "Data dari kasir tidak ada gunanya jika hanya dilihat. Coret menu yang tidak laku selama 3 bulan, itu hanya menguras tenaga persiapan dapur Anda.",
  "B2B tidak harus dengan toko besar. Pedagang kerupuk keliling atau tukang parkir juga bisa jadi mitra distribusi Anda dengan pembagian hasil yang ringan.",
  "Sebelum tembus pasar global, pastikan foto produk Anda setara standar internasional: resolusi tinggi, tanpa watermark mengganggu, dan punya deskripsi dwibahasa."
];

let chapterCount = 0;
// We'll replace the end of the chapter object with the proTip appended
content = content.replace(/checklist:\n?[\s\S]*?\]\n  \}/g, (match) => {
  if (chapterCount < tips.length) {
    const replacement = match.replace(/\n  \}$/, `,\n    proTip: "${tips[chapterCount]}"\n  }`);
    chapterCount++;
    return replacement;
  }
  return match;
});

fs.writeFileSync(path, content, 'utf8');
console.log(`Updated ${chapterCount} chapters.`);
