import React, { useState, useEffect } from 'react';
import { Copy, Check, Share2 } from 'lucide-react';

export default function PromotionalMaterials() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [drafts, setDrafts] = useState<{ title: string, content: string }[]>([]);

  useEffect(() => {
    import('../PromosiUMKM.md?raw')
      .then((res) => {
        const rawContent = res.default;
        // Split by the custom markdown separator we added
        const parts = rawContent.split('--------------------------------------------------');
        
        const parsedDrafts = parts.map(part => {
          const lines = part.trim().split('\n');
          // The title is the first line starting with ###
          let title = "Draft Promosi";
          let content = part.trim();
          
          if (lines[0].startsWith('### ')) {
            title = lines[0].replace('### ', '').trim();
            content = lines.slice(1).join('\n').trim();
          }
          return { title, content };
        }).filter(d => d.content.length > 0);

        setDrafts(parsedDrafts);
      })
      .catch((err) => {
        console.error('Failed to load markdown', err);
        setDrafts([{ title: "Error", content: 'Gagal memuat konten promosi. Pastikan file /src/PromosiUMKM.md tersedia.' }]);
      });
  }, []);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto pb-12 animate-in fade-in duration-500">
      <header className="mb-10 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-4">
          <Share2 className="w-4 h-4" />
          <span>Bagikan Manfaat</span>
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Materi Promosi & Afiliasi</h2>
        <p className="text-slate-600 text-lg leading-relaxed max-w-2xl">
          Bantu sesama pelaku UMKM lain untuk naik kelas dengan membagikan platform ini di media sosial seperti Facebook atau WhatsApp Anda.
        </p>
      </header>

      <div className="space-y-8">
        {drafts.map((draft, idx) => (
          <div key={idx} className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
              <div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900">{draft.title}</h3>
              </div>
              <button
                onClick={() => handleCopy(draft.content, idx)}
                className={`flex items-center justify-center gap-2 px-4 py-2 rounded-xl font-bold transition-all text-sm ${
                  copiedIndex === idx 
                    ? 'bg-emerald-100 text-emerald-700 shadow-inner' 
                    : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm hover:shadow-md hover:-translate-y-0.5'
                }`}
              >
                {copiedIndex === idx ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copiedIndex === idx ? 'Tersalin!' : 'Salin Teks'}
              </button>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-slate-700 leading-relaxed font-sans relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50/50 pointer-events-none rounded-xl" />
              <pre className="whitespace-pre-wrap font-sans text-[15px]">
                {draft.content}
              </pre>
            </div>
          </div>
        ))}
        {drafts.length === 0 && (
          <div className="text-center p-8 text-slate-500 bg-white rounded-2xl border border-slate-200">
            Memuat materi promosi...
          </div>
        )}
      </div>
    </div>
  );
}
