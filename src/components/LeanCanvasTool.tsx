import React, { useState } from 'react';
import { LayoutDashboard, Save, Copy, CheckCircle2 } from 'lucide-react';

export default function LeanCanvasTool() {
  const [formData, setFormData] = useState({
    problem: '',
    solution: '',
    usp: '',
    customer: '',
    psychographic: '',
    channels: '',
    cost: '',
    revenue: ''
  });
  const [copied, setCopied] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const generateText = () => {
    return `KERTAS KERJA MODEL BISNIS (LEAN CANVAS)
=====================================
1. MASALAH (Problem)
${formData.problem || '-'}

2. SOLUSI (Solution)
${formData.solution || '-'}

3. KEUNGGULAN UNIK (Unique Selling Proposition)
${formData.usp || '-'}

4. TARGET PELANGGAN (Customer Segments)
${formData.customer || '-'}

5. SEGMEN PSIKOGRAFIS (Psychographic)
${formData.psychographic || '-'}

6. JALUR PEMASARAN (Channels)
${formData.channels || '-'}

7. STRUKTUR BIAYA (Cost Structure)
${formData.cost || '-'}

8. ARUS PENDAPATAN (Revenue Streams)
${formData.revenue || '-'}`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="animate-in fade-in duration-500 max-w-5xl mx-auto pb-10">
      <header className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 bg-indigo-100 flex items-center justify-center rounded-2xl text-indigo-700">
            <LayoutDashboard className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Kanvas Model Bisnis</h2>
        </div>
        <p className="text-slate-600 text-lg leading-relaxed max-w-3xl">
          Visualisasikan ide bisnis Anda ke dalam 1 halaman ringkas. Isi kotak-kotak di bawah ini untuk merumuskan fondasi yang kuat sebelum mulai eksekusi.
        </p>
      </header>

      {/* Action Bar */}
      <div className="flex items-center justify-end mb-6">
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-xl font-medium transition-all shadow-sm"
        >
          {copied ? <CheckCircle2 className="w-5 h-5 text-emerald-400" /> : <Copy className="w-5 h-5" />}
          {copied ? 'Tersalin!' : 'Salin Teks (Copy)'}
        </button>
      </div>

      {/* Grid Canvas */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {/* Kolom 1 */}
        <div className="md:col-span-1 flex flex-col gap-4">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex-1 flex flex-col">
            <h3 className="font-bold text-slate-800 text-sm mb-2 flex items-center gap-2">
              <span className="bg-rose-100 text-rose-700 w-6 h-6 rounded-full flex items-center justify-center text-xs">1</span> 
              Masalah
            </h3>
            <textarea 
              className="w-full flex-1 p-3 bg-slate-50 border-transparent focus:border-indigo-300 focus:ring-4 focus:ring-indigo-100 rounded-lg text-sm resize-none transition-all"
              placeholder="3 masalah utama yang meresahkan pelanggan..."
              value={formData.problem}
              onChange={(e) => handleChange('problem', e.target.value)}
            />
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex-1 flex flex-col">
            <h3 className="font-bold text-slate-800 text-sm mb-2 flex items-center gap-2">
              <span className="bg-cyan-100 text-cyan-700 w-6 h-6 rounded-full flex items-center justify-center text-xs">6</span> 
              Jalur Pemasaran
            </h3>
            <textarea 
              className="w-full flex-1 p-3 bg-slate-50 border-transparent focus:border-indigo-300 focus:ring-4 focus:ring-indigo-100 rounded-lg text-sm resize-none transition-all"
              placeholder="Sosmed, Whatsapp, atau Toko Fisik?"
              value={formData.channels}
              onChange={(e) => handleChange('channels', e.target.value)}
            />
          </div>
        </div>

        {/* Kolom 2 */}
        <div className="md:col-span-1 flex flex-col gap-4">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex-1 flex flex-col">
            <h3 className="font-bold text-slate-800 text-sm mb-2 flex items-center gap-2">
              <span className="bg-indigo-100 text-indigo-700 w-6 h-6 rounded-full flex items-center justify-center text-xs">2</span> 
              Solusi
            </h3>
            <textarea 
              className="w-full flex-1 p-3 bg-slate-50 border-transparent focus:border-indigo-300 focus:ring-4 focus:ring-indigo-100 rounded-lg text-sm resize-none transition-all"
              placeholder="Fitur / produk yang memecahkan masalah tadi..."
              value={formData.solution}
              onChange={(e) => handleChange('solution', e.target.value)}
            />
          </div>
        </div>

        {/* Kolom 3 */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex-1 flex flex-col border-t-4 border-t-indigo-500">
            <h3 className="font-bold text-slate-800 text-sm mb-2 flex items-center gap-2">
              <span className="bg-amber-100 text-amber-700 w-6 h-6 rounded-full flex items-center justify-center text-xs">3</span> 
              Keunggulan Unik (USP)
            </h3>
            <textarea 
              className="w-full flex-1 p-3 bg-slate-50 border-transparent focus:border-indigo-300 focus:ring-4 focus:ring-indigo-100 rounded-lg text-sm resize-none transition-all"
              placeholder="Apa yang membuat produk Anda berbeda dan 10x lebih baik dari pesaing? Mengapa orang harus beli dari Anda?"
              value={formData.usp}
              onChange={(e) => handleChange('usp', e.target.value)}
            />
          </div>
        </div>

        {/* Kolom 4 */}
        <div className="md:col-span-1 flex flex-col gap-4">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex-1 flex flex-col">
            <h3 className="font-bold text-slate-800 text-sm mb-2 flex items-center gap-2">
              <span className="bg-emerald-100 text-emerald-700 w-6 h-6 rounded-full flex items-center justify-center text-xs">4</span> 
              Target Pelanggan
            </h3>
            <textarea 
              className="w-full flex-1 p-3 bg-slate-50 border-transparent focus:border-indigo-300 focus:ring-4 focus:ring-indigo-100 rounded-lg text-sm resize-none transition-all"
              placeholder="Siapa persisnya yang akan membeli ini? (Usia, profesi, minat)"
              value={formData.customer}
              onChange={(e) => handleChange('customer', e.target.value)}
            />
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex-1 flex flex-col">
            <h3 className="font-bold text-slate-800 text-sm mb-2 flex items-center gap-2">
              <span className="bg-violet-100 text-violet-700 w-6 h-6 rounded-full flex items-center justify-center text-xs">5</span> 
              Segmen Psikografis
            </h3>
            <textarea 
              className="w-full flex-1 p-3 bg-slate-50 border-transparent focus:border-indigo-300 focus:ring-4 focus:ring-indigo-100 rounded-lg text-sm resize-none transition-all"
              placeholder="Nilai, minat, dan gaya hidup dari pelanggan target Anda..."
              value={formData.psychographic}
              onChange={(e) => handleChange('psychographic', e.target.value)}
            />
          </div>
        </div>

        {/* Bawah Kiri & Kanan */}
        <div className="md:col-span-3 bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col">
          <h3 className="font-bold text-slate-800 text-sm mb-2 flex items-center gap-2">
            <span className="bg-slate-200 text-slate-700 w-6 h-6 rounded-full flex items-center justify-center text-xs">7</span> 
            Struktur Biaya
          </h3>
          <textarea 
            className="w-full h-24 p-3 bg-slate-50 border-transparent focus:border-indigo-300 focus:ring-4 focus:ring-indigo-100 rounded-lg text-sm resize-none transition-all"
            placeholder="Biaya paling besar yang keluar rutin (Bahan baku, gaji, sewa, marketing)..."
            value={formData.cost}
            onChange={(e) => handleChange('cost', e.target.value)}
          />
        </div>
        <div className="md:col-span-2 bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col">
          <h3 className="font-bold text-slate-800 text-sm mb-2 flex items-center gap-2">
            <span className="bg-emerald-100 text-emerald-700 w-6 h-6 rounded-full flex items-center justify-center text-xs">8</span> 
            Arus Pendapatan
          </h3>
          <textarea 
            className="w-full h-24 p-3 bg-slate-50 border-transparent focus:border-indigo-300 focus:ring-4 focus:ring-indigo-100 rounded-lg text-sm resize-none transition-all"
            placeholder="Dari mana saja uang masuk ke bisnis Anda?"
            value={formData.revenue}
            onChange={(e) => handleChange('revenue', e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
