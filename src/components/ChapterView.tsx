import React from 'react';
import { Chapter } from '../types';
import { CheckCircle2, FileText, Lightbulb, TrendingUp } from 'lucide-react';

interface ChapterViewProps {
  chapter: Chapter;
}

export default function ChapterView({ chapter }: ChapterViewProps) {
  return (
    <div className="max-w-4xl mx-auto pb-12 animate-in fade-in duration-500">
      <header className="mb-8 border-b pb-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">{chapter.title}</h1>
        <p className="text-lg text-slate-600">{chapter.description}</p>
      </header>

      <section className="mb-10 text-slate-700 leading-relaxed text-lg sm:text-xl font-medium tracking-tight">
        <p>{chapter.content}</p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10 items-start">
        <div className="bg-indigo-50/50 rounded-2xl p-6 md:p-8 border border-indigo-100 shadow-sm h-full">
          <div className="flex items-center gap-3 mb-6 text-indigo-800">
            <Lightbulb className="w-6 h-6" />
            <h3 className="font-bold text-xl">Langkah Praktis</h3>
          </div>
          <ul className="space-y-4">
            {chapter.practicalSteps.map((step, idx) => (
              <li key={idx} className="flex gap-3 text-slate-700 items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-200 text-indigo-800 flex items-center justify-center font-bold text-sm shadow-sm">{idx + 1}</span>
                <span className="leading-relaxed font-medium pt-1">{step}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-amber-50/50 rounded-2xl p-6 md:p-8 border border-amber-200 shadow-sm h-full">
          <div className="flex items-center gap-3 mb-6 text-amber-900">
            <TrendingUp className="w-6 h-6" />
            <h3 className="font-bold text-xl leading-tight">Studi Kasus:<br/><span className="text-amber-700 text-lg">{chapter.caseStudy.title}</span></h3>
          </div>
          <div className="space-y-4 text-sm sm:text-base text-slate-700">
            <p><strong className="text-slate-900 block mb-1">Skenario:</strong> <span className="leading-relaxed">{chapter.caseStudy.scenario}</span></p>
            <p><strong className="text-slate-900 block mb-1">Solusi:</strong> <span className="leading-relaxed">{chapter.caseStudy.solution}</span></p>
            <div className="mt-4 bg-amber-100/50 p-4 rounded-xl border border-amber-300/50">
              <strong className="text-amber-900 block mb-1">Hasil:</strong> 
              <span className="text-amber-800 font-medium leading-relaxed">{chapter.caseStudy.result}</span>
            </div>
          </div>
        </div>
      </div>

      <section className="mb-12">
        <div className="flex items-center gap-3 mb-5 text-slate-800">
          <FileText className="w-6 h-6" />
          <h3 className="font-bold text-xl md:text-2xl tracking-tight">Template Dokumen</h3>
        </div>
        <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-lg border border-slate-700/50">
          <div className="bg-slate-800/80 px-5 py-3 border-b border-slate-700 flex justify-between items-center text-xs font-mono text-slate-300">
            <span className="font-bold tracking-wide">{chapter.template.title}</span>
            <button 
              onClick={() => navigator.clipboard.writeText(chapter.template.content)}
              className="hover:text-white bg-slate-700/50 hover:bg-slate-700 px-3 py-1.5 rounded-md transition-colors flex items-center gap-2"
            >
              Copy Template
            </button>
          </div>
          <div className="p-6 md:p-8 overflow-x-auto text-sm sm:text-base font-mono text-slate-300 whitespace-pre-wrap leading-loose">
            {chapter.template.content}
          </div>
        </div>
      </section>

      <section className="bg-emerald-50/50 rounded-2xl p-6 md:p-8 border border-emerald-200 shadow-sm relative overflow-hidden mb-12">
        <div className="absolute top-0 right-0 p-6 opacity-[0.03] pointer-events-none">
          <CheckCircle2 className="w-48 h-48" />
        </div>
        <div className="flex items-center gap-3 mb-6 text-emerald-800 relative z-10">
          <CheckCircle2 className="w-6 h-6" />
          <h3 className="font-bold text-xl">Checklist Standar Implementasi</h3>
        </div>
        <div className="space-y-4 relative z-10">
          {chapter.checklist.map((item, idx) => (
            <label key={idx} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-emerald-100 cursor-pointer hover:border-emerald-300 hover:shadow-md transition-all">
              <input type="checkbox" className="mt-1 w-5 h-5 text-emerald-600 rounded-md border-gray-300 focus:ring-emerald-500 shadow-sm" />
              <span className="text-sm md:text-base font-medium text-slate-700 leading-relaxed flex-1">{item}</span>
            </label>
          ))}
        </div>
        <p className="text-sm text-emerald-600 mt-6 font-medium relative z-10 bg-emerald-100/50 inline-block px-4 py-2 rounded-lg">* Centang secara jujur setelah Anda mengeksekusi langkah-langkah di atas pada bisnis Anda.</p>
      </section>

      {chapter.proTip && (
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-6 md:p-8 shadow-md relative overflow-hidden text-white">
          <div className="flex items-center gap-3 mb-4 relative z-10">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <Lightbulb className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-bold text-xl md:text-2xl">Tips Pro dari Mentor</h3>
          </div>
          <div className="relative z-10 text-blue-50 text-lg leading-relaxed italic">
            "{chapter.proTip}"
          </div>
          <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none transform translate-x-4 -translate-y-4">
            <Lightbulb className="w-32 h-32" />
          </div>
        </section>
      )}
    </div>
  );
}
