import { Chapter, QuizQuestion } from './types';

export const chapters: Chapter[] = [
  {
    id: 'persiapan-awal',
    title: 'Bab 1: Mental & Persiapan Awal',
    description: 'Mulai dari yang ada, hindari kesalahan fatal, dan siapkan mental wirausaha.',
    content: 'Kesalahan terbesar calon pebisnis pemula adalah menunggu “sempurna”. Tunggu punya toko bagus, tunggu modal besar, tunggu desain logo keren. Faktanya: Banyak UMKM sukses justru dimulai dari kamar kos, garasi, atau meja dapur. Dengan satu ponsel dan koneksi internet, Anda sudah punya “pabrik” dan “toko” sekaligus. Mulailah dari apa yang ada, perbaiki seiring berjalannya waktu.',
    practicalSteps: [
      'Jangan menjual barang di bawah harga modal hpp, tambahkan margin wajar (minimal 30%).',
      'Hindari pembelian stok barang baku yang berlebihan; beli untuk pasokan 1-2 minggu pertama saja.',
      'Pisahkan pencatatan keuangan masuk dengan dompet pribadi secara disiplin.',
      'Gunakan alat seadanya yang Anda miliki saat ini tanpa perlu berutang untuk alat mewah.'
    ],
    caseStudy: {
      title: 'Memulai dari Fasilitas Minimum',
      scenario: 'Ingin berjualan namun terbatas di modal alat dan tempat sewaan.',
      solution: 'Memulai jualan bakso dari gerobak bekas, atau membuat jasa edit desain yang hanya butuh HP dan posting di status WhatsApp.',
      result: 'Bisa langsung mendapat pelanggan dan arus kas, perlahan-lahan hasil untung digunakan untuk perbesaran bisnis.'
    },
    template: {
      title: 'Ceklis Kesiapan Wirausaha Diri',
      content: `Poin Refleksi Kesiapan:\n\n1. Punya ponsel dan akses internet?\n2. Punya waktu minimal 2 jam per hari untuk usaha?\n3. Tidak takut mencoba hal baru meski gagal?\n4. Bisa menerima kritik ramah maupun pedas dari pelanggan?\n5. Punya area/tempat kecil untuk menyimpan barang produksi?\n6. Bersedia belajar skill baru (foto, desain, nulis buku kas)?\n7. Punya tabungan minimal Rp200.000 untuk perputaran?\n8. Punya satu teman / keluarga terdekat yang mendukung?\n9. Tidak mudah menyerah ketika pesanan sepi 2 hari berturut-turut?\n10. Punya niat baja ingin berubah jadi lebih baik?\n\n* Jika YA > 7, Gas mulai hari ini!`
    },
    checklist: [
      'Memulai tindakan (Action) dengan fasilitas yang ada hari ini.',
      'Stok awal bahan mentah dibatasi dan tidak overstock.',
      'Meyakinkan diri sendiri untuk mencatat setiap uang yang masuk.'
    ],
    proTip: "Berhenti overthinking! 1 aksi nyata hari ini lebih berharga daripada 100 rencana bisnis di kepala. Jual ke 1 orang pertama adalah pencapaian terbesar."
  },
  {
    id: 'ide-usaha',
    title: 'Bab 2: Memilih Ide Usaha yang Tepat',
    description: 'Menyaring ide dengan 5 kriteria penting dan validasi awal pada calon pembeli.',
    content: 'Tidak semua ide usaha cocok untuk pemula. Gunakan 5 kriteria ini sebagai saringan: Bahan baku mudah didapat, bisa dibuat ulang (repeat order), tidak mudah rusak (tahan minimal 1 minggu), nilai jual > harga bahan, dan bisa dipromosikan lewat WA. Lihat sekeliling Anda. Setiap keluhan di lingkungan tetangga bisa diolah menjadi peluang bisnis modal kecil.',
    practicalSteps: [
      'Amati 3 masalah keluhan terbanyak orang-orang di area Anda (Misal: susah cari sarapan, repot cuci sepatu).',
      'Pilih satu dari rekomendasi 10 ide minim modal.',
      'Validasi ide tanpa bikin produk duluan, tanya ke 10 calon pembeli potensial di kontak HP.',
      'Luncurkan Pre-Order (PO) kecil (5-10 buah) untuk mengetahui kesungguhan daya beli orang.'
    ],
    caseStudy: {
      title: 'Solusi Lauk Frozen Anak Kos',
      scenario: 'Anak kos malas masak repot, namun terlalu bosan bila makan varian mie instan terus.',
      solution: 'Membuat lauk rumahan (seperti nugget ayam, bakso baso, atau risol cincang) dijual dalam keadaan beku per 5 porsi.',
      result: 'Dengan modal sekitar Rp700.000, solusi ini laku di pre-order karena sangat relate/memecahkan masalah konsumennya secara instan.'
    },
    template: {
      title: 'Skrip Chat Validasi Ide (Survei Pelanggan)',
      content: `Halo [Nama Teman]!\n\nLagi santai nggak? Aku minta waktunya sebentar boleh ya.\nAku lagi ada rencana bikin usaha kecil-kecilan: [Sebutkan Usaha, misal: Jasa Bersih AC / Risol Mayo Frozen].\n\nMenurutmu, sebagai [pekerja kantoran/anak kos] kalau aku jual produk ini di harga Rp [Sebutkan Harga], kira-kira menarik buat dibeli nggak ya?\n\nJawab sejujur-jujurnya yaa buat masukan berhargaku. Makasih banyak!`
    },
    checklist: [
      'Bahan baku produk terbukti 100% mudah didapatkan di sekitar.',
      'Sistem Pre-order berhasil menjaring 5-10 pelanggan perdana.',
      'Ide yang dieksekusi memiliki margin bruto di atas batas minimum 30%.'
    ],
    proTip: "Jangan jatuh cinta pada ide Anda, jatuh cintalah pada masalah pelanggan. Jika ide tidak laku saat Pre-Order, segera pivot tanpa ragu."
  },
  {
    id: 'tanpa-modal-besar',
    title: 'Bab 3: Strategi Tanpa Modal Besar',
    description: 'Optimalkan platform digital gratis, sistem PO, dan celah peluang bisnis dropship.',
    content: 'Anda tidak diwajibkan punya website mahal di tahap awal. Cukup 4 alat sakti: WhatsApp Business (Katalog & Auto Reply), Canva Gratis (Poster/Desain Konten), CapCut (Video promo Reels/TikTok), dan Google My Business (Agar ter-index di Maps). Plus, untuk meminimalisasi modal ngendap, jalankan skema "Sistem Titip Jual" (Konsinyasi), "Dropship" dan "Pre-Order".',
    practicalSteps: [
      'Ubah WhatsApp biasa menjadi WA Business untuk manfaatkan auto-reply dan labelisasi pelanggan.',
      'Gunakan Canva untuk menyusun pamflet promo dan foto profil usaha agar lebih proper.',
      'Cari toko/supplier besar di marketplace dan hubungi mereka via Chat untuk tawaran Dropship.',
      'Carikan warung keramaian sekitar untuk menyalurkan barang memakai sistem Konsinyasi/Titip jual mingguan.'
    ],
    caseStudy: {
      title: 'Mencari Cuan Tanpa Pegang Produk (Dropship)',
      scenario: 'Niat berjualan kaos polos namun modal Rp0 dan tidak ingin tempatnya penuh sesak tumpukan pakaian.',
      solution: 'Pemuda ini deal menjadi Dropshipper dari penjual grosir Jakarta. Membeli dengan harga reseller khusus Rp25.000 dan dijual di kotanya Rp40.000.',
      result: 'Konsumen transfer Rp40.000, ia transfer ke grosir Rp25.000 (Margin 15.000) dan penjual asal langsung kirim paket ke konsumen akhir tanpa harus nyetok barang.'
    },
    template: {
      title: 'Skrip Chat Mengamankan Jalur Suplai (Supplier)',
      content: `Selamat [Pagi/Siang], Kak [Nama Supplier/Toko].\n\nPerkenalkan saya [Nama Anda]. Saya hobi memantau produk Kakak dan sangat tertarik dengan kualitasnya. Saya kebetulan jualan online dan punya basis pelanggan tersendiri.\n\nApakah toko Kakak open program Reseller / Dropshipper?\n\n1. Apakah ada syarat ketentuan order minimum?\n2. Berapa rate harga khusus untuk saya per barang?\n3. Apakah saya diizinkan menggunakan foto katalog asli Kakak untuk promosi?\n\nTerima kasih atas peluangnya.`
    },
    checklist: [
      'Profil aplikasi WA Business diatur rapi (ada jam operasional dan katalog foto).',
      'Lokasi bisnis berhasil diamankan titiknya via Google My Business.',
      'Sudah menemukan min. 1 supplier responsif untuk uji dropship atau pasang sistem PO di status IG/WA.'
    ],
    proTip: "Supplier yang baik adalah kunci. Jangan sungkan nego tipis-tipis atau minta bonus sampel jika Anda berjanji bantu promosi secara konsisten."
  },
  {
    id: 'pemasaran-melekat',
    title: 'Bab 4: Pemasaran yang Bikin Melekat di Hati',
    description: 'Trik copywriting personal (Storytelling), taktik konten, dan trik psikologi harga.',
    content: 'Pemasaran yang cuma berisi poster harga dan kata "DIJUAL CEPAT" sudah dihindari orang secara insting. Orang lebih suka cerita yang menginspirasi. Jadwalkan 3 jenis posting per minggu: "Cerita di balik adonan" (Senin), "Testimoni Konsumen bahagia" (Rabu), dan "Tips Edukasi Bermanfaat" (Jumat). Ambil foto produk bermodalkan cahaya matahari pagi tanpa filter berlebihan dan padukan dengan copywriting (storytelling). Terapkan juga Psikologi Harga, seperti Charm Pricing (harga berakhiran 9, contoh: Rp 99.000) atau teknik Decoy/Bundling agar terlihat lebih memberikan nilai (value) tanpa harus saling banting harga.',
    practicalSteps: [
      'Motret produk dengan menaruhnya di meja dekat jendela kaca antara jam 08.00-10.00 am (Cahaya alami).',
      'Gunakan teknik Caption Storytelling. Ceritakan mengapa/bagaimana produk ini awalnya dibuat.',
      'Sematkan tiket kecil / stiker di paket untuk merayu rating/video ulasan dari konsumen.',
      'Aplikasikan Trik Psikologi Harga pada katalog. Contoh: Ubah Rp 50.000 menjadi Rp 49.000 atau Rp 49.900.',
      'Sediakan insentif program "Referral" agar konsumen lama mengundang temannya ikut belanja.'
    ],
    caseStudy: {
      title: 'Jasa Cuci Sepatu (Storytelling Kekuatan Hati)',
      scenario: 'Saingan banyak yang modalnya lebih kuat untuk beriklan masif lewat baliho spanduk pinggir jalan.',
      solution: 'Bisnis cuci sepatu ini fokus pada media sosial (Before-After). Diberikan caption emosional tentang klien (Mas Andi) yang mengira harus membuang sepatunya sehabis ke sawah. Di akhir caption: "Mas Andi kaget separuh mati sepatu lusuhnya kembali baru."',
      result: 'Unggahan viral mematahkan iklan berbayar milik tetangga, karena audiens merasa pendekatannya manusiawi.'
    },
    template: {
      title: 'Kupon/Kartu Klaim Promo (Bisa dicetak ke produk)',
      content: `== TERIMA KASIH TELAH MENDUKUNG BISNIS LOKAL! ==\n\nHalo kak [Nama],\n\nMohon bantu toko kecil ini bertumbuh ya!\nCaranya mudah banget:\n1. Ceritakan kepuasan kakak di Insta Story atau Status WA\n2. Rekomendasikan minimal ke 2 teman kaka.\n3. Screenshot dan kirim buktinya ke Chat WA Kami.\n\nBOOM! Kakak otomatis berhak klaim "CASHBACK TUNAI Rp 5.000" / "GRATIS DRINK" di repeat order besok hari!\n\nSehat selalu,\nTim [Nama Bisnis]`
    },
    checklist: [
      'Foto pemasaran diambil terang memakai latar bebas noise.',
      'Caption pemasaran telah bertransformasi menjadi bentuk *sharing/storytelling*.',
      'Telah menguji strategi penerapan Psikologi Harga (Charm Pricing/Bundling).',
      'Sudah mencetak kupon referral yang siap mendarat di bungkusan pesanan pelanggan.'
    ],
    proTip: "Konten yang jujur dan sedikit berantakan (behind the scenes) justru lebih sering viral dibanding foto studio yang terlalu sempurna."
  },
  {
    id: 'kelola-keuangan',
    title: 'Bab 5: Mengelola Keuangan ala UMKM Anti Boncos',
    description: 'Buku kas sederhana harian & pencatatan HPP akurat demi keamanan laba dan perputaran.',
    content: 'Kegagalan masif wirausaha terjadi karena "Mengambil kas jualan untuk beli pulsa pribadi" telah jadi kebiasaan harian. Pisahkan 100% uang bisnis dan tabungan pemakaian saku dengan "Metode Dua Amplop" fisik atau Buku Kas 2-Sisi. Latih perhitungan HPP (Harga Pokok) secara mendetail. Pemula wajib menentukan margin (laba kotor) di angka 30%-50%. Jangan jual rugi demi kata "laris manis".',
    practicalSteps: [
      'Siapkan 2 buku tulis / amplop. Pisahkan mutlak antara dompet (USAHA) & (PRIBADI).',
      'Hitung angka detail HPP dengan cermat (Bahan pokok + Listrik/Sayur + Kemasan + Tenaga).',
      'Rumus aman terhindar boncos: [Harga Jual = HPP + (HPP x Target Margin 30%)].',
      'Gunakan aplikasi BukuKas atau BukuWarung secara disiplin setiap hari pasca warung ditutup harian (5 menit saia).'
    ],
    caseStudy: {
      title: 'Kasus Warung Laris tapi Gagal Berkembang',
      scenario: 'Penjual nasi ayam ini selalu habis 50 bungkus per hari. Tapi aneh, buat bayar suplai besok pagi malah kehabisan uang kas.',
      solution: 'Pemilik diajari membedah Total HPP asli. Nasi+Ayam+Box+Sambel+Gas = 10 Ribu. Sebelumnya margin tak bersisa karena dijual asal 11k, untung 1k terkuras buat jajan es teler!',
      result: 'Harga didongkrak ke Rp 14.000 lewat penambahan sedikit air putih gratis, laba tembus posisi 40% (Untung bersih 4k per porsi aman tersimpan penuhi kas).'
    },
    template: {
      title: 'Log Peta Pembukuan Ringkas (Sistem HVS Manual)',
      content: `No. | Tgl     | Keterangan (Belanja/Laba)     | In/Masuk   | Out/Keluar | Saldo Kas Usaha\n------------------------------------------------------------------------------------\n1   | 01/Okt  | Modal Awal Kas Perusahaan     | 500.000    |            | 500.000\n2   | 01/Okt  | Belanja Bahan Dapur (Grosir)  |            | 150.000    | 350.000\n3   | 01/Okt  | Sales/Omzet Terjual 5 Porsi   | 80.000     |            | 430.000\n4   | 02/Okt  | Tambahan Minyak Goreng        |            | 30.000     | 400.000\n5   | 02/Okt  | Ambil Jatah Gaji Owner 10%    |            | 40.000     | 360.000\n\n*Tidak boleh ada angka tergeser. Selisih wajib dianggap peringatan!`
    },
    checklist: [
      'Sistem Dua-Rekening 100% disiplin dijalankan: tak tersentuh tangan jail dapur rumah.',
      'Dokumen perhitungan Harga Pokok (HPP) final dirumuskan dan dilock 30-50% untung per Unit.',
      'Aplikasi akuntansi pembukuan digital diinstall di perangkat kerja dan rutin harian dipakai logging data.'
    ],
    proTip: "Uang kas kecil (petty cash) adalah jantung harian. Selalu sediakan uang kembalian pecahan kecil, jangan biarkan pembeli batal karena Anda repot tukar uang."
  },
  {
    id: 'bertahan-tumbuh',
    title: 'Bab 6: Tips Bertahan & Tumbuh di Tengah Persaingan',
    description: 'Maintain repeat order, pertimbangan scale-up produk serta pinjaman instrumen sehat.',
    content: 'Biaya mencari konsumen baru di peradaban ini ternyata luar biasa mahal (5-7x biaya memelihara audiens lawas). Terapkan strategi Follow-up sederhana dan program apresiasi Loyalitas untuk klien terlama Anda. Di samping pemasaran lawas, jangan menelurkan lebih dari 1 menu varian secara sporadis bila demand masih goyang. Pertimbangkan injeksi KUR bungan rendah (<6%) bilamana pesanan meledak untuk restock pabrik.',
    practicalSteps: [
      'Amankan kontak/Nomor HP pesanan klien ke Cloud HP, tandai atau berikan label khusus bulanan/loyalis.',
      'Lempar promo eksklusif per sebulan atau kala ulang-tahun sang pelanggan (Diskon spesial Return).',
      'Evaluasi peluncuran lini menu berjenis baru; Jangan tambah kalau omzet core product utama masih pas-pasan!',
      'Mental instrumen: Gunakan modal agunan KUR via BUMN (Terawasi ketat) / Pinjam Keluarga vs Pinjol rentenir!'
    ],
    caseStudy: {
      title: 'Strategi Return Database Konsumen Setia',
      scenario: 'Pesanan UMKM Kue Kering merangkak parah/sepi sunyi di pertengahan bulan.',
      solution: 'Admin WA me-nge-list pelanggan bulan lalu yang sedang tidak nyangkut pesan order, mem-follow-up dengan bahasa sangat humanis/santun, dan menyiapkan kado diskon 5%.',
      result: 'Lonjakan pesanan Repeat-Order membanjiri ruang packing. Ternyata dari 100 sapaan, 25 pelanggan membeli semata-mata terpanggil emosi-nya.'
    },
    template: {
      title: 'Draft Sapaan Romantis Pelanggan Lama (Tanpa Spam)',
      content: `"Halo [Sebut Nama Pelanggan dengan hangat]! 😊\n\nSebulan yang lalu kami rekap orderan, waktu itu Kakak beli produk X dari toko kami ya. Semoga rasa & layanannya berbekas mantap di hati!\n\nApakah sempet ada catatan buat kami untuk memperbaiki sesuatu?\nBtw, Bulan ini toko mini kami lagi bikin perayaan loh, Kakak dapet jatah promo 10% khusus tanpa batas pembelian untuk semua katalog!\n\nKalau stok Kakak di rumah udah mulai kendor, bisa reply langsung kesini ya. Terima kasih dukungan Kakak luar biasa!"`
    },
    checklist: [
      'Nomor kontak seluruh audiens transaksi lama sudah didata ke Excel/Google Contact dan terkelompokan.',
      'Perusahaan memahami bahwa perakitan menu/produk baru cuma bisa meluncur saat demand menu perdana terlampau tinggi.',
      'Perusahaan menjauhkan 100% pengaruh jerat pinjaman Pinjol ilegal (Tidak terdaftar OJK).'
    ],
    proTip: "Pelanggan lama yang puas tidak hanya kembali belanja, tapi mereka akan jadi 'marketing gratis' Anda dengan membawa teman-teman baru."
  },
  {
    id: 'legalitas-brand',
    title: 'Bab 7: Legalitas & Keamanan Merek',
    description: 'Mengamankan usaha Anda dengan perizinan dasar (NIB, PIRT) dan membangun kredibilitas hukum.',
    content: 'Banyak UMKM yang takut mengurus izin karena merasa usahanya masih kecil atau takut biaya ribet. Faktanya, pemerintah telah mempermudah perizinan dasar via OSS (Online Single Submission) yang 100% Gratis. Memiliki surat izin ibarat KTP bagi usaha; entitas bisnis Anda sepenuhnya diakui oleh negara. Status legal memfasilitasi Anda untuk mengakses modal KUR perbankan, menyuplai minimarket besar, menghilangkan resiko razia/produk diturunkan, serta membuat konsumen langsung percaya 100%.',
    practicalSteps: [
      'Siapkan E-KTP, Nomor HP aktif, dan NPWP Pribadi untuk mulai.',
      'Daftar akun di portal oss.go.id lalu pilih pengajuan NIB kategori UMKM Perorangan Perisiko Rendah (Cukup 15 menit).',
      'Ajukan Sertifikat SPP-IRT ke Dinas Kesehatan terdekat bila produk Anda berupa makanan/minuman kemasan rumahan.',
      'Cek ketersediaan Merek nama Anda di pdki-indonesia.dgip.go.id sebelum mencetak stiker kemasan besar-besaran.'
    ],
    caseStudy: {
      title: 'Solusi Akses Ritel & Swalayan Lokal',
      scenario: 'Keripik Tempe Cap "Sari Indah" laris manis, namun ditolak saat ingin menitipkan barang ke Swalayan modern di pusat kota.',
      solution: 'Pemiliknya mendedikasikan 1 hari untuk mendaftar NIB, mengajukan PIRT, serta menyertakan label Halal secara paralel.',
      result: 'Keripiknya langsung diloloskan masuk jajaran produk Swalayan, omzetnya naik 4x lipat, dan bahkan dapat pesanan supply konsumsi event Pemda setempat.'
    },
    template: {
      title: 'Skema Persiapan Dokumen Administratif',
      content: `[ ] 1. SCAN E-KTP (Pastikan Foto terbaca jelas)\n[ ] 2. NPWP PRIBADI / BADAN (Bila Ada)\n[ ] 3. TITIK KOORDINAT GOOGLE MAPS (Lokasi Produksi)\n[ ] 4. ALAMAT EMAIL AKTIF & SANDI\n[ ] 5. DESAIN CETAK LOGO SEMENTARA\n[ ] 6. DESKRIPSI KOMPOSISI BAHAN (Untuk PIRT/Halal)\n\n* Jika checklist ini lengkap, kunjungi https://oss.go.id dan ikuti langkah di tombol Daftar!`
    },
    checklist: [
      'Memiliki setidaknya NIB (Nomor Induk Berusaha) yang dicetak dan dilaminating di rumah produksi.',
      'Nama Merek sudah dicek tak memiliki kembaran sama persis di sistem pencarian HAKI.',
      'Untuk FnB, nomor P-IRT atau BPOM telah tercantum terang benderang di kemasan produk.'
    ],
    proTip: "Urus NIB dan PIRT sejak omzet masih ratusan ribu. Jangan tunggu bisnis membesar baru urus izin, karena saat besar, kompetitor bisa mencuri nama merek Anda."
  },
  {
    id: 'scale-up-rekrutmen',
    title: 'Bab 8: Scale-Up, Delegasi & Merekrut Tim',
    description: 'Transformasi dari "Kerja Sendiri" menjadi sistem bisnis berskala luas dengan karyawan & reseller.',
    content: 'Apabila Anda menjadi koki, manajer, tim packing, dan kurir sekaligus, bisnis tak akan bisa mengekspansi kota lain karena batasan fisik Anda. Scale-up membutuhkan seni "mendelegasikan" operasional ke pihak lain. Membayar orang bukan berarti membuang laba, tapi membeli "Waktu" Anda agar bisa memikirkan strategi yang lebih dahsyat. Selain merekrut tim pegawai internal, bangun juga sayap luar berupa Pasukan Penjual (Reseller/Afiliasi) dengan pembagian hasil yang menggiurkan.',
    practicalSteps: [
      'Rekrut 1 orang asisten (admin packing/balas chat) terlebih dahulu; bayar dengan sistem harian/komisi per pcs.',
      'Buat S.O.P (Standar Operasional Prosedur) tertulis di kertas karton mengenai standar masak, packing, hingga cara sapa pembeli.',
      'Buka lowongan program "Reseller Tanpa Modal" untuk ibu-ibu atau mahasiswa di kota sekitar.',
      'Kurangi intensitas di dapur, perluas waktu Anda untuk silaturahmi dengan figur-figur mentor atau komunitas usaha nyata.'
    ],
    caseStudy: {
      title: 'Mendadak Jadi Jenderal Pasukan Reseller',
      scenario: 'Penjual Sambal Cumi botolan kelelahan hingga jatuh sakit karena memproduksi 100 botol sehari sendirian plus ngurus resi JNE.',
      solution: 'Beliau mengangkat keponakan untuk handle packing resi secara full, dan membuka pendaftaran Reseller bagi 30 pelanggan loyalnya.',
      result: 'Dalam 2 bulan terjual 2.000 botol/bulan! Ia fokus bernegosiasi membeli Cumi dalam tonase besar agar harga modal semakin ditekan murah ke bawah.'
    },
    template: {
      title: 'Draft Naskah Lowongan Reseller WA',
      content: `PENGUMUMAN! 🔥🔥\n\nBuat teman-teman yang ingin dapet tambahan minimal Rp 50.000/hari cukup modal dari rumah tanpa modal sepeserpun, [Nama Usaha] OPEN RESELLER / DROPSHIPPER!\n\nYang teman-teman dapet:\n1. Harga Reseller Diskon 20% 🤑\n2. Foto Produk + Status WA siap posting, tinggal copas harian!\n3. Gak repot bungkus paket, tim pusat [Nama Usaha] yang urus resinya!\n\nSlot cuma untuk 10 pendaftar pertama minggu ini! Chat admin sekarang ketik: "SAYA MAU JOIN"`
    },
    checklist: [
      'Ada 1 proses memakan waktu berjam-jam (misal balas chat/ngaduk adonan) yang sukses diserahkan ke orang lain (delegasi).',
      'Minimal ada selembar karton tertulis "Urutan Prosedur Standar" tertempel di tembok ruang operasional.',
      'Sistem pembagian komisi / harga grosir bagi mitra Pasukan Penjualan telah dikalkulasi (Tanpa merugikan laba murni perusahaan).'
    ],
    proTip: "SOP yang paling efektif adalah format video, bukan sekadar kertas. Rekam diri Anda saat bikin produk, dan kirim video itu ke karyawan baru sebagai panduan."
  },
  {
    id: 'marketplace-merchant',
    title: 'Bab 9: Ekosistem Marketplace & Delivery',
    description: 'Strategi optimasi platform pesan-antar (GoFood/GrabFood/ShopeeFood) dan e-Commerce (Shopee/Tokopedia/TikTok).',
    content: 'Platform digital memiliki lalu lintas (traffic) yang sudah terbangun. Untuk usaha kuliner (FnB), mendaftar merchant di GoFood, GrabFood, atau ShopeeFood adalah kewajiban jika ingin menjangkau pelanggan di luar radius jalanan Anda. Sementara untuk produk fisik skala nasional, Shopee, Tokopedia, dan TikTok Shop adalah ujung tombak. Namun hati-hati boncos: platform memotong komisi 20-30%. Strateginya adalah menaikkan harga jual khusus untuk platform tersebut (Markup Harga), sambil memberikan promo semu agar posisi resto atau toko Anda naik di halaman pertama pencarian.',
    practicalSteps: [
      'Siapkan foto KTP, NPWP, foto lokasi usaha, dan buku tabungan untuk mendaftar menjadi Mitra / Merchant.',
      'Lakukan markup harga jual sebesar komisi aplikasi. Misal komisi 20%, harga offline Rp 10.000 naikkan jadi Rp 12.500 di aplikasi.',
      'Ikuti program Promo Subsidi dari platform (seperti Gratis Ongkir, Flash Sale, atau Diskon Ongkir) untuk mendongkrak visibilitas algoritma.',
      'Untuk TikTok Shop, rutinlah melakukan sesi Live Streaming sambil menyematkan keranjang kuning, mulailah dengan durasi santai 1 jam sehari.'
    ],
    caseStudy: {
      title: 'Resto Hantu (Ghost Kitchen) Laris',
      scenario: 'Pemilik tidak memiliki modal untuk menyewa ruko strategis, hanya berjualan ayam geprek dari dapur rumahan dalam gang.',
      solution: 'Mendaftarkan usahanya ke ShopeeFood, GrabFood, dan GoBiz (GoFood). Ia membuat foto produk sangat profesional dan memberikan nama resto yang menjual (misal: "Ayam Geprek Njerit").',
      result: 'Omzet harian tembus 100 porsi dikalikan 3 aplikasi, tanpa pernah dikunjungi makan di tempat (Dine-in). Beban sewa tempat nyaris 0.'
    },
    template: {
      title: 'Perhitungan Markup Harga Merchant (Rumus Aman)',
      content: `[RUMUS MARKUP MENGHINDARI RUGI KOMISI APLIKASI]\n\nHarga Jual Offline (HPP + Laba) = Rp 20.000\nPotongan Komisi Aplikasi (Misal 20%) + Biaya Layanan = 22%\n\nJANGAN jual Rp 20.000 di aplikasi! (Anda akan dipotong Rp 4.400 = untung menyusut dan capek).\nCara Benar:\nHarga Markup = Harga Offline / (100% - 22%)\nHarga Markup = 20.000 / 0.78 = Rp 25.641 (Bulatkan ke atas: Rp 26.000)\n\nPasang harga coret di aplikasi: Rp 29.000 dicoret jadi Rp 26.000 agar terlihat menarik secara psikologis.`
    },
    checklist: [
      'Berkas pendaftaran merchant sudah diajukan via aplikasi (GrabMerchant/GoBiz/ShopeePartner/BukaLapak/Tokopedia Seller).',
      'Harga jual produk di dalam aplikasi sudah dinaikkan 20-30% dari harga offline.',
      'Foto menu atau produk utama menggunakan pencahayaan yang sangat jelas tanpa background ramai.'
    ],
    proTip: "Waspada 'Ghost Kitchen' bodong. Meskipun murah sewanya, pastikan ada akses masuk motor yang mudah agar ojol tidak membatalkan pesanan karena sulit parkir."
  },
  {
    id: 'manajemen-krisis',
    title: 'Bab 10: Manajemen Krisis & Reputasi Digital',
    description: 'Menangani komplain, ulasan bintang 1, dan meredakan amarah pelanggan kecewa.',
    content: 'Di era digital dan marketplace (Bab 9), 1 ulasan bintang satu dapat melukai reputasi bulanan sebuah usaha secara fatal. Jangan pernah memandang kritik dari pelanggan sebagai serangan musuh, namun lihatlah sebagai temuan kebocoran pada sistem produksi yang harus ditambal. Dosa terbesar penjual ceroboh adalah berdebat mulut dengan pelanggan langsung di kolom balasan publik; itu pertunjukan buruk untuk ratusan calon pembeli lainnya. Terapkan strategi membalas dengan rumus: "Maaf, Penjelasan Manusiawi, dan Solusi Retur/Pengganti".',
    practicalSteps: [
      'Jangan biarkan chat keluhan atau ulasan bintang satu mengambang lebih dari 30 menit (cepat respons agar emosi si pembeli turun).',
      'Apabila murni terbukti kesalahan Anda, tawarkan secara sukarela penggantian barang baru 100% tanpa menuntut syarat retur rumit.',
      'Sertakan stiker nomor darurat WA CS di tempelan box packing agar pembeli mengadu langsung ke tim Anda dibanding menulis di aplikasi publik.',
      'Catat dan hitung. Jika 3 kali berturut-turut dikeluhkan isi paket hancur, maka jangan salahkan kurirnya lagi, tapi ganti standar ketebalan bungkus/kardus Anda!'
    ],
    caseStudy: {
      title: 'Bintang 1 Berbalik Menjadi Bintang 5',
      scenario: 'Pelanggan mencaci maki di komentar Tokopedia karena mendapati pesanan keripik kaca miliknya hancur seperti bubuk debu sesampainya paket.',
      solution: 'Pemilik tak ikut tersulut amarah. Ia segera membalas formal di kolom tersebut "Mohon kerelaan maaf yang terdalam kak, ini fatal dari kami." lalu pemilik ini mengirim ulang paket tebal memakai layanan Ojol Instant (dikawal memo tulis tangan).',
      result: 'Kaget dilayani seperti raja, pelanggan tadi menghapus umpatan lamanya dan merevisi bintang menjadi limapenuh, sambil menyisipkan caption "Pelayanan Toko ini the Best luar biasa!"'
    },
    template: {
      title: 'Skrip Jitu Menjawab Komentar Jahat Pubik',
      content: `Selamat [Pagi/Siang] Kak [Nama],\n\nKami seluruh tim memohon maaf sebesar-besarnya atas ketidaknyamanan fatal perihal [Sebutkan error: misalnya paket kurang 1 item]. Ini diakibatkan kelalaian pengecekan harian pada resi Kakak.\n\nSEBAGAI PERTANGGUNG JAWABAN, kami telah memproses kiriman produk penggantinya ke alamat Kakak HARI INI JUGA tanpa dipungut tambahan sedikit pun. Jangan ragu hubungi saluran WA CS kami (08xxxxxx). Kami berterima kasih ditampar lewat masukan semacam ini untuk lebih mawas ke depan.`
    },
    checklist: [
      'Memiliki setidaknya 1 nomor kontak/WA CS "Keluhan" terlipat di tag kemasan luar/dalam bungkusan.',
      'Miliknya dokumen SOP kebijakan ganti-rugi/Retur ringan untuk menahan badai emosi (Cukup tunjuk Video Unboxing sebagai ganti-baru).',
      'Tim pengetik pesan paham larangan Mutlak berdebat panjang-lebar membenarkan diri sendiri di ruang sorot audiens sosial digital.'
    ],
    proTip: "Jika pelanggan memarahi Anda secara online, jangan dibalas pada jam tersebut. Tarik napas 10 menit, minum air, barulah membalas dengan kepala dingin."
  },
  {
    id: 'nano-influencer',
    title: 'Bab 11: Pemasaran Nano-Influencer & Sistem Afiliasi',
    description: 'Cara cerdas menggandeng kreator lokal dan pasukan pemasar tanpa menggaji bulanan.',
    content: 'Kekuatan rekomendasi mulut ke mulut di era digital difasilitasi oleh Influencer dan sistem Afiliasi (Affiliate). UMKM pemula sering kali gentar mendengar kata "Influencer" karena takut tarif jutaan rupiah. Jangan bayar makro-influencer, tapi bidiklah Nano-Influencer (1K - 10K followers) di kota Anda dengan tawaran Barter (produk gratis ditukar 1 video ulasan jujur). Selain itu, aktifkan program Afiliasi Terbuka di platform TikTok Shop/Shopee, sehingga kreator bisa menjualkan produk Anda dengan sistem komisi (bagi hasil), Anda hanya membayar jika ada barang terjual riil (sistem CPA).',
    practicalSteps: [
      'Cari 5-10 akun TikTok/Instagram kreator lokal (food vlogger pemula/lifestyle) yang berdomisili 1 kota dengan Anda dengan followers 2rb - 10rb.',
      'Kirim pesan Direct Message (DM) tawaran "Barter Value", berikan paket tester produk Anda secara gratis sebagai ganti sebuah video review.',
      'Buka fitur Affiliate Program di akun *Seller Center* e-commerce Anda, lalu atur komisi terbuka di angka 10-15% per produk.',
      'Sertakan juga selebaran kertas kecil di paketan berisi ajakan "Dapatkan Uang Jajan Tambahan! Jadilah Afiliator Kami!" beserta QR Code menuju pedomannya.'
    ],
    caseStudy: {
      title: 'Ledakan Penjualan Tanpa Biaya Iklan',
      scenario: 'Pemilik UMKM keripik pisang cokelat tidak memiliki budget untuk menyewa baliho atau membayar iklan berbayar (Ads).',
      solution: 'Ia membagikan 20 kotak tester gratis kepada mahasiswa lokal bersyarat mereview jujur di TikTok sembari menautkan Keranjang Kuning Afiliasi produknya.',
      result: 'Dua dari puluhan video tersebut masuk algoritma FYP, pesanan meledak ribuan pouch sehari murni dari "pasukan kecil bayaran komisi" tersebut tanpa resiko bakar uang iklan percuma.'
    },
    template: {
      title: 'Skrip Tawaran Barter untuk Kreator',
      content: `Halo Kak [Nama Kreator],\nSalam kenal, saya [Nama Anda] dari [Nama Usaha]. Kami sangat suka dengan konten-konten kuliner/review Kakak yang jujur dan menarik!\n\nKami memiliki produk unggulan [Sebutkan Produk] yang kebetulan baru diluncurkan. Kami mengundang Kakak untuk bekerja sama secara Barter Value. Kami akan mengirimkan paket spesial gratis ke alamat Kakak, untuk direview di TikTok/IG Reels tanpa paksaan script (bebas review jujur).\n\nJika Kakak berkenan, silakan balas pesan ini. Terima kasih banyak Kak!`
    },
    checklist: [
      'Telah menyusun daftar (list) 10 kandidat Nano-Influencer lokal untuk di-DM.',
      'Fitur komisi Affiliate di aplikasi toko oren/hitam sudah dalam status Aktif (ON).',
      'Sudah mempersiapkan kotak produk khusus (packaging paling cantik) khusus dikirim ke kreator konten.'
    ],
    proTip: "Kreator mikro lebih peduli untuk membuat konten yang detail. Kadang 1 KOL dengan 5.000 followers di kota yang sama lebih powerful daripada artis ibukota."
  },
  {
    id: 'kasir-digital-pos',
    title: 'Bab 12: Kasir Digital (POS) & Rahasia Membaca Data',
    description: 'Tinggalkan buku tulis manual, mulai otomatisasi pembukuan dan analisa data penjualan harian.',
    content: 'Pencatatan manual di buku tulis rentan akan kehilangan data, robekan, dan kecolongan perhitungan oleh karyawan curang. UMKM modern, sekecil apapun itu, wajib mendigitalkan pencatatan operasional menggunakan aplikasi Kasir Digital (Point of Sale/POS) seperti Kasir Pintar, Moka, Olsera, atau fitur bawaan platform (Gobiz/Qasir) yang banyak menawarkan versi gratis. Selain keamanan, manfaat terbesarnya adalah "Harta Karun Data": Mengetahui grafik jam tersibuk (sibuk jam 12.00 siang = butuh panaskan kompor dari jam 11.00), produk terlaris, varian gagal laku, dan ketersediaan stok (inventory).',
    practicalSteps: [
      'Download 1-2 Aplikasi POS di HP Android/Tablet bekas Anda dan bandingkan kenyamanan antarmukanya.',
      'Input seluruh Katalog Produk beserta varian ukuran dan harga dasar (HPP) ke sistem aplikasi POS.',
      'Wajibkan siapapun yang menjaga operasional untuk mencetak / menginput struk dari alat tersebut tanpa alasan.',
      'Duduk pada akhir bulan, buka laporan Analisa (Analytics) di Web Dasbor POS: hentikan produksi menu/produk yang ranking paling bawah.'
    ],
    caseStudy: {
      title: 'Penemuan Harta Karun Jam Operasional',
      scenario: 'Sebuah kedai kopi mengeluh karena listrik tekor setiap bulan, mereka buka jam 07.00 pagi sampai 22.00 malam.',
      solution: 'Pemilik mendownload aplikasi POS Gratisan. Sebulan berikutnya, ia membuka layar analitik jam kunjungan grafik batangnya.',
      result: 'Ditemukan fakta bahwa transaksi dari pukul 07.00 - 11.00 sangat sepi (hanya 2 pelanggan harian). Ia memutuskan baru buka jam 11.00. Biaya listrik AC terkuras hemat jutaan rupiah setiap bulan tanpa mengganggu omzet utama.'
    },
    template: {
      title: 'Metrik Wajib Evaluasi Bulanan (Dari Data Kasir)',
      content: `1. BEST SELLER: Apa 3 menu penjualan terbanyak bulan ini?\n2. SLOW MOVING: Apa produk yang diam saja di gudang? (Segera obral / bundling dengan menu best seller!).\n3. PEAK HOUR: Jam berapa kepadatan antrian tak terhindarkan? (Tambah shifting asisten pada jam tersebut).\n4. AVERAGE ORDER VALUE (AOV): Rata-rata 1 orang datang jajannya habis berapa? (Tawarkan promosi Up-Selling di meja kasir untuk mendongkrak AOV).`
    },
    checklist: [
      'Alat / HP Kasir Android sudah siap dan terinstal aplikasi POS yang dipilih.',
      'Seluruh riwayat menu telah ter-input ke POS (tidak perlu lagi hafal harga/hitung kalkulator manual).',
      'Jadwal evaluasi "Meeting Baca Data" dengan admin/tim ditentukan 1x sebulan secara rutin.'
    ],
    proTip: "Data dari kasir tidak ada gunanya jika hanya dilihat. Coret menu yang tidak laku selama 3 bulan, itu hanya menguras tenaga persiapan dapur Anda."
  },
  {
    id: 'kemitraan-strategis',
    title: 'Bab 13: Kemitraan Strategis & B2B',
    description: 'Cara menjalin kerja sama dengan bisnis lain untuk saling mempromosikan atau berbagi rantai pasok.',
    content: 'Kerja sama antar UMKM (B2B - Business to Business) seringkali menjadi kunci percepatan skala bisnis (scale-up). Daripada berjuang sendirian mencari pembeli satu per satu, cobalah menggandeng bisnis lain yang memiliki pasar selaras, namun tidak bersaing langsung secara produk. Misalnya, Anda pembuat Roti Bakar, Anda bisa bekerja sama dengan Kedai Kopi lokal untuk melakukan "Bundling Menu". Atau, pembuat Kerajinan Tangan menyuplai kotak kado ke Toko Bunga. Kolaborasi B2B ini sangat efisien untuk membagi beban biaya pemasaran dan secara instan mencangkok "kolam pelanggan" milik pihak kedua.',
    practicalSteps: [
      'Identifikasi 3-5 bisnis di sekitar Anda yang memiliki target pasar yang sama, tapi produknya berbeda.',
      'Buat proposal kolaborasi sederhana (1 lembar PDF) yang menawarkan keuntungan bagi kedua belah pihak (Win-Win Solution).',
      'Atur jadwal pertemuan santai dengan pemilik bisnis tersebut untuk mempresentasikan ide "Cross-Promotion" atau ketersediaan "Konsinyasi Khusus".',
      'Setelah disetujui, buat paket promosi silang. Contoh: "Tunjukkan struk dari kedai X, dapatkan diskon 10% di tempat kami".'
    ],
    caseStudy: {
      title: 'Ledakan Omzet dari Kolaborasi Roti dan Kopi',
      scenario: 'Sebuah usaha Roti Bakar rumahan kesulitan mendatangkan pelanggan ke garasinya yang agak masuk gang.',
      solution: 'Pemilik mendatangi 3 kedai kopi ramai di jalan raya depan. Ia menawarkan untuk menyuplai roti bakar setengah jadi dengan harga grosir untuk kedai kopi tersebut panggang sendiri, plus membagikan voucher diskon bagi pengunjung kedai kopi yang ingin membeli stok roti utuh untuk di rumah.',
      result: 'Omzet Roti Bakar naik 400% karena kini ia tidak hanya menjual eceran B2C, tetapi juga menjadi pemasok reguler B2B untuk kedai kopi dan mendapatkan limpahan traffic dari pamflet voucher.'
    },
    template: {
      title: 'Template Pesan Ajakan Kolaborasi',
      content: `Selamat siang Kak [Nama Pemilik Usaha], salam kenal. Saya [Nama Anda] dari [Usaha Anda]. 
Saya sering memperhatikan [Usaha Target] sangat ramai dan kami memiliki target pelanggan yang mirip.

Saya punya ide kolaborasi yang menguntungkan bagi bisnis Kakak, yaitu [Sebutkan Ide Singkat, misal: Paket Bundling Kopi dan Roti kami dengan pembagian laba yang lebih besar untuk Kakak]. 

Apakah Kakak ada waktu luang 15 menit minggu ini untuk ngopi bareng membahas peluang ini? Tidak ada paksaan sama sekali.`
    },
    checklist: [
      'Telah memetakan 3-5 calon mitra B2B yang potensial dan tidak bersaing langsung.',
      'Draft rencana kolaborasi (Cross-promo atau suplai barang) sudah disiapkan dalam 1 lembar singkat.',
      'Sistem pembagian keuntungan atau komisi sudah dihitung sehingga tidak merugikan kas sendiri.'
    ],
    proTip: "B2B tidak harus dengan toko besar. Pedagang kerupuk keliling atau tukang parkir juga bisa jadi mitra distribusi Anda dengan pembagian hasil yang ringan."
  },
  {
    id: 'ekspansi-digital-global',
    title: 'Bab 14: Ekspansi Digital Global',
    description: 'Langkah-langkah mulai menjangkau pasar ekspor bagi produk UMKM yang sudah stabil, termasuk standar kualitas global.',
    content: 'Ketika pasar lokal mulai jenuh, ekspansi ke kancah global (Ekspor) adalah tahapan Scale-Up pamungkas. Tidak perlu menyewa kapal kargo sejak awal, UMKM masa kini dapat menggunakan jalur "Ekspor Eceran" melalui platform e-commerce global (Amazon, Etsy, eBay) atau jalur program Ekspor Shopee/TikTok Shop. Kunci utama adalah sertifikasi standar internasional, umur simpan barang yang panjang (jika kuliner), serta kemasan tahan banting lintas benua. Pelajari regulasi bea cukai secara bertahap dan buat penawaran B2B (Business to Business) melalui platform seperti Alibaba untuk pesanan partai besar.',
    practicalSteps: [
      'Pelajari syarat ekspor ringan melalui program resmi pemerintah atau fitur ekspor dari E-commerce lokal.',
      'Tingkatkan standar kemasan produk agar tahan bantingan dan perubahan suhu lintas benua selama ekspedisi.',
      'Urus sertifikasi keamanan dan kualitas internasional (seperti HACCP untuk makanan atau ISO) apabila merencanakan ekspor partai besar.',
      'Buka toko digital satelit di platform global (Misal: Etsy untuk kerajinan tangan) dan riset kata kunci (keyword) bahasa asing yang banyak dicari.'
    ],
    caseStudy: {
      title: 'Kerajinan Rotan Menembus Pasar Eropa',
      scenario: 'Sebuah workshop kerajinan rotan lokal sering menerima pesan Instagram dari luar negeri namun bingung cara kirimnya.',
      solution: 'Pemilik workshop membuat akun di Etsy (platform kerajinan global) dan bekerja sama dengan agregator pengiriman ekspor lokal untuk menekan biaya ongkos kirim.',
      result: 'Kerajinan rotan tersebut kini dijual tiga kali lipat lebih mahal dalam mata uang Euro/USD ke pasar Eropa, pesanan ecerannya mengisi margin laba berlipat ganda.'
    },
    template: {
      title: 'Pilar Evaluasi Kesiapan Ekspor',
      content: `1. KAPASITAS: Bisakah saya memproduksi skala besar tanpa penurunan kualitas (Quality Control)?\n2. LEGALITAS: Apakah perusahaan saya dan produk ini memenuhi standar izin ekspor?\n3. PRODUK: Apakah umur simpan (shelf-life) dan volume produk memadai untuk transit berbulan-bulan?\n4. KEMASAN: Apakah ada petunjuk penggunaan dalam Bahasa Inggris?`
    },
    checklist: [
      'Packaging minimal menggunakan "bubble wrap" ganda dan kardus corrugated standar internasional.',
      'Pendaftaran izin di platform E-commerce jalur ekspor sudah diajukan.',
      'Punya metode pembayaran valuta asing seperti PayPal atau rekening giro bisnis internasional.'
    ],
    proTip: "Sebelum tembus pasar global, pastikan foto produk Anda setara standar internasional: resolusi tinggi, tanpa watermark mengganggu, dan punya deskripsi dwibahasa."
  }
];

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Apa kesalahan terbesar dan tersering dilakukan calon pedagang pemula (Berdasar Bab 1)?",
    options: [
      "Ikut arus dan rajin bertanya kompetitor.",
      "Bertindak lambat; beralasan harus menunggu semuanya serba 100% matang, 100% sempurna mutlak, dan butuh sokongan puluhan juta untuk memulai.",
      "Menetapkan harga diskon berlebihan demi mengusir kompetitor bermodal triliunan.",
      "Mengambil asuransi untuk gudang bahan mentah."
    ],
    correctAnswerIndex: 1,
    explanation: "Bab pertama mengedepankan filosofi 'Mulai dari yang ada, gunakan fasilitas hari ini, lakukan sebisa-baik mungkin'. Sempurna itu ilusi dari menunda-nunda."
  },
  {
    id: 2,
    question: "Manakah pilar utama dari kriteria ide bisnis cemerlang bagi UMKM modal nol rupiah? (Bab 2)",
    options: [
      "Butuh impor material langka dari negeri lain agar eksklusif tak tertandingi.",
      "Produk sangat rapuh sehingga audiens butuh cepat merakit saat paket tiba.",
      "Struktur nilai jual memliki rasio perbandingan positif dari harga modal kotor (Margin wajib 30% Ke atas), dan rentan melahirkan repeat order harian-rutin.",
      "Sektor bisnis hanya terpaku di gedung sewaan yang estetik minimalis industrialis."
    ],
    correctAnswerIndex: 2,
    explanation: "Kriteria paling inti adalah ketersediaan perputaran roda finansial. Produk mesti bisa disematkan margin >30% dari harga rakitannya, dan bisa divalidasi ke market pesanan langganan bulanan."
  },
  {
    id: 3,
    question: "Bagaimanakah Skema 'Dropship' yang diajarkan pada Bab 3 dalam menolong kendala keterbatasan kapital produksi?",
    options: [
      "Memberikan utang pada pelanggan dan meminjam pada pinjol bunga tinggi.",
      "Duduk tenang sebagai marketer tanpa harus menyimpan 1 barang di meja. Uang beli ditalangi pembeli per transfer, sisa keuntungan jadi hak Dropshipper, pabrik pusat mengirimkan paket ekspedisi tertanda nama UMKM kita.",
      "Memangkas jam harian pabrik untuk mengurangi emisi jejak karbon lingkungan.",
      "Aplikasi untuk menerbangkan pamflet secara instan dari langit digital."
    ],
    correctAnswerIndex: 1,
    explanation: "Reseller via Dropshipper adalah nyawa bagi si penakluk pasar modal Rp 0. Memotong margin tanpa harus berkorban gudang penyimpan material adalah hack marketing modern abad ini."
  },
  {
    id: 4,
    question: "Hal paling krusial ketika menyusun Postingan Media Sosial pemasaran produk (Bab 4)?",
    options: [
      "Menancapkan Storytelling. Edukasi proses/perjalanan merakit produk, hingga menaruh cerita mengharukan dari klien bahagia ketimbang 100% teriakan kaku 'BELI MURAH SEKARANG'.",
      "Memberi Filter kecantikan sangat mencolok agar makanan seolah olah hidup dan merona parah.",
      "Mengadopsi seluruh tren joget tanpa mementingkan konteks dari esensi katalog bisnisnya.",
      "Menutup total interaksi komen agar aman tentram damai dari keluhan."
    ],
    correctAnswerIndex: 0,
    explanation: "Pendekatan jualan agresif mekanik merusak citra UMKM pelan perlahan dalam kerumunan. Audiens jatuh simpati ke perihal kisah balik rintisan dan nilai kepuasan yang humanis emosional (Testimoni natural)."
  },
  {
    id: 5,
    question: "Apa tujuan menerapkan 'Charm Pricing' atau harga ganjil (seperti Rp 99.000) menurut Bab 4?",
    options: [
      "Agar uang kembalian pelanggan selalu ada dalam bentuk koin.",
      "Menciptakan ilusi psikologis bahwa harga produk berada pada kelompok harga yang lebih rendah dan memberikan nilai (value) yang lebih murah.",
      "Agar pelanggan bingung dalam menghitung total pembelian.",
      "Memenuhi syarat perhitungan pajak yang rumit dari pemerintah."
    ],
    correctAnswerIndex: 1,
    explanation: "Charm Pricing memanfaatkan fenomena psikologis Left-Digit Effect, di mana otak manusia memproses angka dari kiri ke kanan. Rp 49.000 terasa seperti rentang 'empat puluhan', jauh berbeda dengan Rp 50.000."
  },
  {
    id: 6,
    question: "Pilar pemikiran pengaman modal agar UMKM selamat dari boncos ketiadaan Uang Tunai saat re-stock (Bab 5)?",
    options: [
      "Tarik dividen sebanyak penuh di penghujung hari untuk liburan keluarga di Pantai karena lelah berkutat adonan.",
      "Jual produk modal Rp 10.000 seharga Rp 10.500 dengan klaim omzet sejuta sehari yang penting kelihatan ramai dan masuk TikTok viral pahlawan ummat.",
      "Pemisahan Dua Dunia secara ekstrem dan pencatatan BukuKas/Amplop ketat. Rekening PRIBADI dan Rekening USAHA tidak boleh bersentuhan satu centi-pun tanpa izin HPP jelas.",
      "Menggesek modal dari 3 mesin EDC kartu kredit silang bergantian (gali-tutup lubang per bulan berjalan)."
    ],
    correctAnswerIndex: 2,
    explanation: "Tanpa batas garis sepadan kas pribadi/rumah versus uang laju perputaran barang jual UMKM, keruntuhan sistem akan meruntuhkan seluruh perusahaan sepihak tak peduli se-ramai apapun omzet per harinya!"
  },
  {
    id: 7,
    question: "Apa strategi terbaik untuk menjaga keberlangsungan (sustain) usaha sesuai panduan Bab 6?",
    options: [
      "Mencari 1.000 pelanggan baru setiap minggu walau pelanggan lama kecewa.",
      "Mengganti total rasa atau jenis produk setiap minggu agar terlihat kekinian.",
      "Melakukan teknik Follow-up sederhana dan program loyalitas untuk pelanggan lama karena biaya menjaganya jauh lebih murah.",
      "Langsung mengambil pinjaman ke Pinjol ilegal bila uang kas mulai menipis sedikit."
    ],
    correctAnswerIndex: 2,
    explanation: "Biaya mencari 1 pembeli baru adalah 5-7 kali lipat biaya menjaga 1 pembeli lama. Memberikan sapaan khusus, promo eksklusif untuk 'repeat order' adalah pertahanan bisnis terkuat UMKM."
  },
  {
    id: 8,
    question: "Apa fungsi utama dari mendaftarkan Nomor Induk Berusaha (NIB) sesuai rekomendasi Bab 7?",
    options: [
      "Agar wajib ditarik pajak 50% setiap bulan.",
      "Sebagai KTP hukum yang meresmikan entitas di mata negara, memudahkan akses pinjaman KUR, serta melindungi produk bila dititipkan ke Swayalan.",
      "Untuk diunggah pamer ke seluruh penjuru agar kelihatan punya PT raksasa.",
      "Dokumen syarat pendaftaran lomba tingkat RT."
    ],
    correctAnswerIndex: 1,
    explanation: "Legalitas merupakan fondasi ekspansi. Akses modal murah pemerintah maupun kemitraan ritel tidak mungkin dilakukan dengan status usaha hantu tanpa registrasi NIB (yang mana gratis)."
  },
  {
    id: 9,
    question: "Seni apa yang harus diaplikasikan pemilik UMKM jika ia sudah kelelahan memenuhi pesanan dan ingin berkembang lebih luas (Bab 8)?",
    options: [
      "Seni menaikkan harga jual setinggi langit supaya pelanggan berkurang.",
      "Mengerjakan seluruh operasional hingga masuk rumah sakit karena itu tanda wirausaha pejuang.",
      "Seni Mendelegasikan tugas/operasional rendah kepada Asisten dan merekrut Pasukan Penjualan (Reseller/Dropshipper).",
      "Seni menutup order sepenuhnya dan menolak pesanan apa pun."
    ],
    correctAnswerIndex: 2,
    explanation: "Bisnis tidak bisa Scale-Up jika Owner = Pegawai Seumur Hidup. Pemilik harus 'membeli waktu' dengan menggaji asisten seraya membentuk cabang jalur distributor alias Reseller."
  },
  {
    id: 10,
    question: "Apa strategi penentuan harga yang paling krusial saat Anda mendaftarkan produk di GrabFood atau Tokopedia/Shopee (Bab 9)?",
    options: [
      "Menyamakan persis harga aplikasi dengan harga offline di warung agar pelanggan tidak protes.",
      "Menjual di bawah harga offline agar pelanggan memborong produk Anda (Banting harga demi volume).",
      "Menggunakan 'Rumus Markup': menaikkan harga jual di aplikasi sesuai/proporsional dengan persentase potongan komisi platform (biasanya sekitar 20-25%).",
      "Membiarkan harga kosong, berharap sistem platform yang menentukan nominal kelayakan."
    ],
    correctAnswerIndex: 2,
    explanation: "Jika Anda memakai harga offline untuk aplikasi, laba akan ludes dimakan komisi merchant. Pembeli online memaklumi perbedaan harga aplikasi asal wajar (karena mereka terhindar dari capek/macet, dan sistem subsidi antar jemput)."
  },
  {
    id: 11,
    question: "Mengapa UMKM dilarang keras berdebat (menjawab ketus) dengan pelanggan marah di kolom komentar publik / ulasan aplikasi (Bab 10)?",
    options: [
      "Agar kuota internet admin tidak terkuras perdebatan panjang tak berkesudahan.",
      "Sebab, aplikasi dan marketplace akan mendeteksi ucapan arogan lalu mereset saldo kita.",
      "Sebab sikap pembenaran diri yang arogan akan dinilai oleh calon pelanggan potensial lainnya yang singgah. Menjawab dengan empati adalah cara kita menjaga branding reputasi jangka panjang.",
      "Agar pembeli bisa bebas menghina kita seharian tanpa batas durasi."
    ],
    correctAnswerIndex: 2,
    explanation: "Komplain publik bukan arena tebak-siapa-benar, melainkan area 'Showcase Pelayanan'. Anda melayani satu si pemarah demi memenangkan hati seratus pengamat pasif lainnya yang kelak berkunjung."
  },
  {
    id: 12,
    question: "Dalam strategi menggandeng Influencer (Bab 11), mengapa UMKM pemula disarankan membidik Nano-Influencer lokal dibanding artis Makro dengan jutaan followers?",
    options: [
      "Karena Nano-Influencer biasanya mau diajak berdebat di sosmed.",
      "Sebab biaya endorse artis rasionya sering membakar modal usaha hingga habis (Boncos), sedangkan Nano-Influencer lokal (1k-10k followers) efektif disasar dengan barter produk/makan gratis untuk hasil sepadan wilayah sekitar.",
      "Sebab artis besar tidak tau cara membuat video.",
      "Agar video promosi kita terlihat jelek dan tidak laku."
    ],
    correctAnswerIndex: 1,
    explanation: "Nano-Influencer lokal memiliki engagement (ikatan pengikut) di satu kota/wilayah yang sangat kuat dan relevan dengan UMKM fisik. Sistem Barter Value menekan biaya pemasaran sangat drastis."
  },
  {
    id: 13,
    question: "Apa 'harta karun' terbesar dari pemakaian aplikasi Kasir Digital / POS (Bab 12) bagi masa depan bisnis Anda?",
    options: [
      "Struk kertas mahal yang bisa diunduh dengan bunyi bip-bip mesin kasir.",
      "Kalkulator matematika di dalam aplikasi.",
      "Data Analitik (Jam tersibuk, produk slow-moving, dan demografi transaksi) yang memungkinkan kita memangkas kerugian seperti bayar listrik pagi hari walau sepi.",
      "Hiburan main game di HP kasir Android saat sedang tak ada pembeli ruko."
    ],
    correctAnswerIndex: 2,
    explanation: "Nilai sejati Point of Sale bukanlah di mencetak kertas, melainkan rekam jejak angka riil. Data ini sangat valid untuk landasan keputusan pemecatan produk tidak laku, maupun penjadwalan kasir part-time tambahan saat peak-hour."
  },
  {
    id: 14,
    question: "Manfaat paling instan yang didapatkan ketika Anda menjalin Kolaborasi Silang (B2B) dengan UMKM lain yang satu frekuensi (Bab 13) adalah?",
    options: [
      "Mendapatkan investor pendanaan ratusan miliar karena bersatu.",
      "Mencangkok dan membonceng 'kolam pelanggan' potensial milik mitra secara gratis, menurunkan biaya pemasaran drastis sambil memperkaya nilai tambah paket.",
      "Mitra akan menanggung seluruh kerugian operasional usaha kita.",
      "Usaha kita langsung masuk lantai bursa Wall Street."
    ],
    correctAnswerIndex: 1,
    explanation: "Kolaborasi antar bisnis (seperti Roti disuplai ke Kedai Kopi) menyebabkan traffic pembeli kopi secara otomatis dapat dikonversi menjadi perasa roti kita dan sebaliknya, dengan skema bagi hasil menguntungkan tanpa bakar uang promosi ke audiens dingin."
  },
  {
    id: 15,
    question: "Tantangan apa yang paling mematikan bagi UMKM spesifikasi makanan/kuliner yang ingin mencoba Ekspansi Digital Global (Bab 14)?",
    options: [
      "Tidak bisa bicara bahasa asing dengan kurir pengirim.",
      "Umur simpan produk (Shelf-life) yang terlalu pendek sehingga basi akibat penahanan proses bea cukai dan masa transit kargo lintas benua.",
      "Label bahasa Indonesia terlihat terlalu membosankan.",
      "Klien luar negeri tidak punya uang rupiah."
    ],
    correctAnswerIndex: 1,
    explanation: "Shelf-life (Umur simpan produk) adalah gerbang validasi utama. Tanpa daya tahan yang presisi, pengiriman melintasi wilayah rentan rusak sebelum sampai ke pelanggan akhir."
  }
];
