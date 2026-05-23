import React, { useState } from 'react';
import { Calculator, DollarSign, TrendingUp, Package } from 'lucide-react';

export default function BusinessCalculator() {
  const [activeTab, setActiveTab] = useState<'hpp' | 'bep'>('hpp');

  // HPP State
  const [bahanBaku, setBahanBaku] = useState<number>(0);
  const [tenagaKerja, setTenagaKerja] = useState<number>(0);
  const [overhead, setOverhead] = useState<number>(0);
  const [targetMargin, setTargetMargin] = useState<number>(30); // 30% default

  // BEP State
  const [biayaTetap, setBiayaTetap] = useState<number>(0);
  const [hargaJual, setHargaJual] = useState<number>(0);
  const [biayaVariabel, setBiayaVariabel] = useState<number>(0);

  // Calculations HPP
  const totalHPP = bahanBaku + tenagaKerja + overhead;
  const marginRupiah = totalHPP * (targetMargin / 100);
  const hargaJualSaran = totalHPP + marginRupiah;

  // Calculations BEP
  const marginKontribusi = hargaJual - biayaVariabel;
  const bepUnit = marginKontribusi > 0 ? Math.ceil(biayaTetap / marginKontribusi) : 0;
  const bepRupiah = bepUnit * hargaJual;

  React.useEffect(() => {
    const calcData = {
      hargaJualSaran,
      bepUnit,
      marginRupiah,
      biayaTetap,
      hargaJual,
      biayaVariabel
    };
    localStorage.setItem('umkm_calc_data', JSON.stringify(calcData));
  }, [hargaJualSaran, bepUnit, marginRupiah, biayaTetap, hargaJual, biayaVariabel]);

  const formatRupiah = (angka: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(angka);
  };

  return (
    <div className="max-w-4xl mx-auto pb-12 animate-in fade-in duration-500">
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">Kalkulator Bisnis UMKM</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Alat interaktif untuk menghitung Harga Pokok Penjualan (HPP) dan Break-Even Point (BEP) atau Titik Impas untuk memastikan margin keuntungan yang sehat.
        </p>
      </header>

      {/* Tabs */}
      <div className="flex p-1.5 bg-slate-200/60 rounded-xl w-full max-w-md mx-auto mb-8 border border-slate-200">
        <button
          onClick={() => setActiveTab('hpp')}
          className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all ${activeTab === 'hpp' ? 'bg-white text-indigo-700 shadow box-border' : 'text-slate-500 hover:text-slate-700'}`}
        >
          Kalkulator HPP
        </button>
        <button
          onClick={() => setActiveTab('bep')}
          className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all ${activeTab === 'bep' ? 'bg-white text-indigo-700 shadow box-border' : 'text-slate-500 hover:text-slate-700'}`}
        >
          Kalkulator BEP
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
        {activeTab === 'hpp' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-5">
              <div className="flex items-center gap-2 mb-2 text-indigo-800">
                <Package className="w-5 h-5" />
                <h2 className="text-lg font-bold">Variabel Produksi (Per Unit)</h2>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  1. Biaya Bahan Baku (Rp)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">Rp</span>
                  <input
                    type="number"
                    value={bahanBaku || ''}
                    onChange={(e) => setBahanBaku(Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all font-mono"
                    placeholder="Contoh: 15000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  2. Biaya Tenaga Kerja Langsung (Rp)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">Rp</span>
                  <input
                    type="number"
                    value={tenagaKerja || ''}
                    onChange={(e) => setTenagaKerja(Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all font-mono"
                    placeholder="Tenaga per unit"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  3. Biaya Overhead (Rp) <span className="text-xs font-normal text-slate-400">(Listrik, Gas, Kemasan)</span>
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">Rp</span>
                  <input
                    type="number"
                    value={overhead || ''}
                    onChange={(e) => setOverhead(Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all font-mono"
                    placeholder="Overhead per unit"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Target Keuntungan Margin (%)
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="5"
                    max="100"
                    step="5"
                    value={targetMargin}
                    onChange={(e) => setTargetMargin(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                  />
                  <div className="w-16 text-center font-bold text-indigo-700 bg-indigo-50 py-2 rounded-lg border border-indigo-100">
                    {targetMargin}%
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 rounded-2xl p-6 md:p-8 text-white flex flex-col justify-center shadow-inner relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Calculator className="w-32 h-32" />
              </div>
              <h3 className="text-slate-400 text-sm font-medium mb-1 uppercase tracking-wider relative z-10">Total HPP per Unit</h3>
              <div className="text-3xl sm:text-4xl font-black mb-6 text-emerald-400 truncate relative z-10" title={formatRupiah(totalHPP)}>
                {formatRupiah(totalHPP)}
              </div>

              <div className="h-px w-full bg-slate-800 mb-6 relative z-10"></div>

              <h3 className="text-slate-400 text-sm font-medium mb-1 uppercase tracking-wider relative z-10">Saran Harga Jual Tercetak</h3>
              <div className="text-2xl sm:text-3xl font-black mb-2 relative z-10 truncate" title={formatRupiah(hargaJualSaran)}>
                {formatRupiah(hargaJualSaran)}
              </div>
              <p className="text-sm text-slate-400 relative z-10 leading-relaxed">
                Anda mendapatkan profit sebesar <strong className="text-white">{formatRupiah(marginRupiah)}</strong> untuk setiap barang yang terjual.
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-5">
              <div className="flex items-center gap-2 mb-2 text-rose-800">
                <TrendingUp className="w-5 h-5" />
                <h2 className="text-lg font-bold">Variabel Break-Even Point</h2>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  1. Biaya Tetap per Bulan (Rp) <span className="text-xs font-normal text-slate-400">(Sewa, Gaji Pokok)</span>
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">Rp</span>
                  <input
                    type="number"
                    value={biayaTetap || ''}
                    onChange={(e) => setBiayaTetap(Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all font-mono"
                    placeholder="Contoh: 5000000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  2. Harga Jual per Unit (Rp)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">Rp</span>
                  <input
                    type="number"
                    value={hargaJual || ''}
                    onChange={(e) => setHargaJual(Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all font-mono"
                    placeholder="Harga jual end-user"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  3. Total Biaya Variabel per Unit (Rp)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">Rp</span>
                  <input
                    type="number"
                    value={biayaVariabel || ''}
                    onChange={(e) => setBiayaVariabel(Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all font-mono"
                    placeholder="Total HPP per unit (Bahan baku dll)"
                  />
                </div>
                {hargaJual > 0 && biayaVariabel >= hargaJual && (
                  <p className="text-xs text-rose-600 font-medium mt-2 mt-1">
                    ⚠️ Biaya variabel Anda tidak boleh melebihi atau sama dengan Harga Jual. Usaha Anda rugi sebelum biaya tetap dibayar.
                  </p>
                )}
              </div>
            </div>

            <div className="bg-slate-900 rounded-2xl p-6 md:p-8 text-white flex flex-col justify-center shadow-inner relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <DollarSign className="w-32 h-32" />
              </div>
              <h3 className="text-slate-400 text-sm font-medium mb-1 uppercase tracking-wider relative z-10">Target Penjualan (Titik Impas)</h3>
              <div className="flex items-end gap-2 mb-2 relative z-10">
                <span className="text-5xl font-black text-rose-400">{bepUnit}</span>
                <span className="text-lg text-slate-400 font-medium mb-1">Unit / Bulan</span>
              </div>
              <p className="text-sm text-slate-400 relative z-10 leading-relaxed mb-6">
                Ini adalah target minimal barang yang <strong>WAJIB</strong> terjual per bulan agar bisnis Anda tidak rugi (hanya menutup modal dan operasional dasar).
              </p>

              <div className="h-px w-full bg-slate-800 mb-6 relative z-10"></div>

              <h3 className="text-slate-400 text-sm font-medium mb-1 uppercase tracking-wider relative z-10">Ekuivalen Rupiah</h3>
              <div className="text-xl sm:text-2xl font-bold relative z-10 truncate" title={formatRupiah(bepRupiah)}>
                {formatRupiah(bepRupiah)}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
