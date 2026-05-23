import React, { useState } from 'react';
import { quizQuestions } from '../data';
import { CheckCircle, XCircle, ArrowRight, Award } from 'lucide-react';

export default function InteractiveTraining() {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const question = quizQuestions[currentQuestionIdx];

  const handleAnswerSubmit = () => {
    if (selectedOption === null) return;
    
    if (selectedOption === question.correctAnswerIndex) {
      setScore(prev => prev + 1);
    }
    setShowResult(true);
  };

  const handleNext = () => {
    setShowResult(false);
    setSelectedOption(null);
    if (currentQuestionIdx < quizQuestions.length - 1) {
      setCurrentQuestionIdx(prev => prev + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIdx(0);
    setSelectedOption(null);
    setShowResult(false);
    setScore(0);
    setQuizCompleted(false);
  };

  if (quizCompleted) {
    const percentage = Math.round((score / quizQuestions.length) * 100);
    return (
      <div className="max-w-2xl mx-auto text-center py-12 animate-in zoom-in duration-500">
        <div className="w-24 h-24 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <Award className="w-12 h-12" />
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Pelatihan Selesai!</h2>
        <p className="text-lg text-slate-600 mb-8">
          Anda berhasil menjawab {score} dari {quizQuestions.length} pertanyaan dengan benar.
        </p>
        <div className="text-5xl font-black text-indigo-600 mb-8">{percentage}%</div>
        
        {percentage >= 80 ? (
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-xl mb-8">
            <strong className="block mb-1">Excellent!</strong>
            Tim Anda sudah sangat siap untuk mengeksekusi checklist standarisasi operasional UMKM ini ke tahap selanjutnya.
          </div>
        ) : (
          <div className="bg-amber-50 border border-amber-200 text-amber-800 p-4 rounded-xl mb-8">
            <strong className="block mb-1">Perlu Review Ulang</strong>
            Masih terdapat ruang pemahaman. Disarankan untuk meninjau kembali bab-bab e-book sebelum mengumpulkan modal besar untuk ekspansi pemasaran.
          </div>
        )}

        <button 
          onClick={restartQuiz}
          className="bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 px-8 rounded-full transition-all"
        >
          Coba Lagi
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto pb-12 animate-in fade-in duration-300">
      <header className="mb-8 border-b pb-6 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">Modul Pelatihan Interaktif</h1>
          <p className="text-slate-600">Validasi pemahaman tim terhadap SOP dan Strategi UMKM.</p>
        </div>
        <div className="text-sm font-semibold text-slate-500 bg-slate-100 px-4 py-2 rounded-full">
          Soal {currentQuestionIdx + 1} / {quizQuestions.length}
        </div>
      </header>

      <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-6 leading-relaxed">
          {question.question}
        </h2>

        <div className="space-y-3 mb-8">
          {question.options.map((option, idx) => {
            const isSelected = selectedOption === idx;
            const isCorrect = idx === question.correctAnswerIndex;
            const isWrongSelected = isSelected && !isCorrect;
            
            let btnClass = "w-full text-left p-4 rounded-xl border text-sm transition-all focus:outline-none ";
            
            if (!showResult) {
               btnClass += isSelected 
                ? "border-indigo-600 bg-indigo-50 text-indigo-900 ring-1 ring-indigo-600" 
                : "border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700";
            } else {
               if (isCorrect) {
                  btnClass += "border-emerald-500 bg-emerald-50 text-emerald-900 ring-1 ring-emerald-500";
               } else if (isWrongSelected) {
                  btnClass += "border-rose-300 bg-rose-50 text-rose-900";
               } else {
                  btnClass += "border-slate-100 bg-slate-50 opacity-50 text-slate-400";
               }
            }

            return (
              <button
                key={idx}
                disabled={showResult}
                onClick={() => setSelectedOption(idx)}
                className={btnClass}
              >
                <div className="flex justify-between items-center">
                  <span>{option}</span>
                  {showResult && isCorrect && <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />}
                  {showResult && isWrongSelected && <XCircle className="w-5 h-5 text-rose-500 flex-shrink-0" />}
                </div>
              </button>
            );
          })}
        </div>

        {!showResult ? (
          <button
            disabled={selectedOption === null}
            onClick={handleAnswerSubmit}
            className={`w-full py-4 rounded-xl font-bold transition-all ${
              selectedOption !== null 
              ? 'bg-slate-900 text-white hover:bg-slate-800 shadow-md' 
              : 'bg-slate-100 text-slate-400 cursor-not-allowed'
            }`}
          >
            Kunci Jawaban
          </button>
        ) : (
          <div className="animate-in slide-in-from-bottom-4 duration-300">
            <div className={`p-5 rounded-xl mb-6 ${
                selectedOption === question.correctAnswerIndex 
                ? 'bg-emerald-50 border border-emerald-100' 
                : 'bg-rose-50 border border-rose-100'
              }`}
            >
              <strong className={`block mb-2 ${
                selectedOption === question.correctAnswerIndex ? 'text-emerald-800' : 'text-rose-800'
              }`}>
                {selectedOption === question.correctAnswerIndex ? 'Benar Sekali!' : 'Jawaban Kurang Tepat'}
              </strong>
              <p className="text-slate-700 text-sm leading-relaxed">{question.explanation}</p>
            </div>
            
            <button
              onClick={handleNext}
              className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white hover:bg-indigo-700 py-4 rounded-xl font-bold transition-all shadow-md"
            >
              Lanjut ke Pertanyaan Berikutnya <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
