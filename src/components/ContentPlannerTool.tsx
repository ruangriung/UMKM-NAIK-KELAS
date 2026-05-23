import React, { useState } from 'react';
import { CalendarDays, Save, Share2, Sparkles, Plus } from 'lucide-react';

type DayPlan = {
  id: string;
  day: string;
  type: string;
  topic: string;
  audience?: string;
};

const DEFAULT_PLANS: DayPlan[] = [
  { id: '1', day: 'Senin', type: 'Storytelling', topic: 'Ceritakan awal mula terbentuknya usaha Anda. Siapa tokoh utamanya?', audience: 'Pelanggan baru' },
  { id: '2', day: 'Rabu', type: 'Testimoni', topic: 'Pajang screenshot kepuasan dari pembeli ter-cerewet yang puas.', audience: 'Calon pembeli ragu' },
  { id: '3', day: 'Jumat', type: 'Edukasi / Tips', topic: 'Beri tips merawat atau kegunaan rahasia dari produk Anda.', audience: 'Pelanggan lama' },
];

export default function ContentPlannerTool() {
  const [plans, setPlans] = useState<DayPlan[]>(DEFAULT_PLANS);

  const updatePlan = (id: string, field: keyof DayPlan, value: string) => {
    setPlans(plans.map(p => p.id === id ? { ...p, [field]: value } : p));
  };

  const addPlan = () => {
    const newId = Date.now().toString();
    setPlans([...plans, { id: newId, day: 'Sabtu', type: 'Promo', topic: 'Tulis draf promo Anda disini...', audience: '' }]);
  };
  
  const removePlan = (id: string) => {
    setPlans(plans.filter(p => p.id !== id));
  }

  return (
    <div className="animate-in fade-in duration-500 max-w-4xl mx-auto pb-10">
      <header className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 bg-pink-100 flex items-center justify-center rounded-2xl text-pink-700">
            <CalendarDays className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Perencana Konten (3x Seminggu)</h2>
        </div>
        <p className="text-slate-600 text-lg leading-relaxed max-w-2xl">
          Atur postingan media sosial Anda sesuai pedoman di Bab 4. Konsisten 3 kali seminggu jauh lebih baik daripada setiap hari tapi kemudian menghilang sedih.
        </p>
      </header>

      <div className="space-y-4 mb-8">
        {plans.map((plan, index) => (
          <div key={plan.id} className="bg-white border text-left border-slate-200 rounded-2xl p-5 shadow-sm transition-all hover:shadow-md flex flex-col md:flex-row gap-4 md:items-start group">
            <div className="grid grid-cols-2 md:w-56 gap-3 flex-shrink-0">
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5 flex block">Jadwal</label>
                <select 
                  className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-lg p-2.5 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  value={plan.day}
                  onChange={(e) => updatePlan(plan.id, 'day', e.target.value)}
                >
                  {['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'].map(d => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5 flex block">Tipe</label>
                <select 
                  className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-lg p-2.5 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  value={plan.type}
                  onChange={(e) => updatePlan(plan.id, 'type', e.target.value)}
                >
                  {['Storytelling', 'Edukasi / Tips', 'Testimoni', 'Promo', 'Behind the Scene'].map(t => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-4">
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5 flex block">Target Audiens</label>
                <input 
                  type="text"
                  className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  placeholder="Siapa yang dituju? (cth: Ibu rumah tangga, Gen Z)"
                  value={plan.audience || ''}
                  onChange={(e) => updatePlan(plan.id, 'audience', e.target.value)}
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5 flex justify-between items-center">
                  <span>Draf Konsep / Caption</span>
                  {plans.length > 1 && (
                    <button onClick={() => removePlan(plan.id)} className="text-rose-500 hover:text-rose-700 opacity-0 group-hover:opacity-100 transition-opacity">
                      Hapus
                    </button>
                  )}
                </label>
                <textarea 
                  className="w-full p-3.5 bg-slate-50 border border-slate-200 focus:border-pink-300 focus:ring-4 focus:ring-pink-100 rounded-xl text-sm resize-none transition-all h-24 text-slate-700"
                  placeholder="Tulis ide atau draf kasarnya di sini..."
                  value={plan.topic}
                  onChange={(e) => updatePlan(plan.id, 'topic', e.target.value)}
                />
              </div>
            </div>
          </div>
        ))}

        <button 
          onClick={addPlan}
          className="w-full py-4 border-2 border-dashed border-slate-200 text-slate-500 rounded-2xl hover:bg-slate-50 hover:border-slate-300 hover:text-slate-700 transition-all font-medium flex items-center justify-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Tambah Jadwal Konten
        </button>
      </div>

      <div className="bg-gradient-to-r from-pink-50 to-orange-50 border border-pink-100 rounded-2xl p-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="flex items-center gap-3">
          <Sparkles className="w-8 h-8 text-pink-500 flex-shrink-0" />
          <p className="text-sm text-pink-900 font-medium leading-relaxed">
            Tips: Jangan lupa jadwalkan sesi pemotretan produk dengan memanfaatkan cahaya natural jam 8-10 pagi (Sesuai Bab 4).
          </p>
        </div>
      </div>
    </div>
  );
}
