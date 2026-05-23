import React, { useState } from 'react';
import { chapters } from './data';
import ChapterView from './components/ChapterView';
import InteractiveTraining from './components/InteractiveTraining';
import ImpactAnalysis from './components/ImpactAnalysis';
import BusinessCalculator from './components/BusinessCalculator';
import LeanCanvasTool from './components/LeanCanvasTool';
import ContentPlannerTool from './components/ContentPlannerTool';
import LandingPage from './components/LandingPage';
import LoginForm from './components/LoginForm';
import PromotionalMaterials from './components/PromotionalMaterials';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import { BookOpen, LineChart, BrainCircuit, LayoutDashboard, ChevronRight, Menu, X, Calculator, CheckSquare, CalendarDays, Share2 } from 'lucide-react';

type TabView = 'training' | 'impact-analysis' | 'calculator' | 'lean-canvas' | 'content-planner' | 'promotional-materials' | string; // string for chapter IDs

interface NavItemProps {
  id: string;
  label: string;
  icon: any;
  isChapter?: boolean;
  activeTab: TabView;
  setActiveTab: (tab: TabView) => void;
  setMobileMenuOpen: (open: boolean) => void;
  key?: string;
}

const NavItem = ({ id, label, icon: Icon, isChapter = false, activeTab, setActiveTab, setMobileMenuOpen }: NavItemProps) => {
  const isActive = activeTab === id;
  return (
    <button
      onClick={() => {
        setActiveTab(id);
        setMobileMenuOpen(false);
      }}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-sm text-left group ${
        isActive 
        ? 'bg-indigo-50 text-indigo-700 shadow-sm ring-1 ring-indigo-500/20' 
        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
      }`}
    >
      <Icon className={`w-5 h-5 transition-colors ${isActive ? 'text-indigo-600' : 'text-slate-400 group-hover:text-indigo-500'}`} />
      <span className="flex-1 truncate tracking-wide">{label}</span>
      {isActive && <ChevronRight className="w-4 h-4 text-indigo-500" />}
    </button>
  );
};

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [activeTab, setActiveTab] = useState<TabView>('persiapan-awal');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mainRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    if (isLoggedIn && mainRef.current) {
      mainRef.current.scrollTop = 0;
    }
    if (isLoggedIn) {
      window.scrollTo(0, 0);
    }
  }, [activeTab, isLoggedIn]);

  const renderContent = () => {
    if (activeTab === 'training') return <InteractiveTraining />;
    if (activeTab === 'impact-analysis') return <ImpactAnalysis />;
    if (activeTab === 'calculator') return <BusinessCalculator />;
    if (activeTab === 'lean-canvas') return <LeanCanvasTool />;
    if (activeTab === 'content-planner') return <ContentPlannerTool />;
    if (activeTab === 'promotional-materials') return <PromotionalMaterials />;
    if (activeTab === 'privacy-policy') return <PrivacyPolicy />;
    if (activeTab === 'terms-of-service') return <TermsOfService />;
    
    const chapter = chapters.find(c => c.id === activeTab);
    if (chapter) return <ChapterView chapter={chapter} />;
    
    return <div>Not found</div>;
  };

  if (!isLoggedIn) {
    if (showLogin) {
      return (
        <LoginForm 
          onBack={() => setShowLogin(false)}
          onSuccess={() => {
            setShowLogin(false);
            setIsLoggedIn(true);
            setActiveTab('persiapan-awal');
          }}
        />
      );
    }

    return <LandingPage onLogin={() => setShowLogin(true)} />;
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row font-sans selection:bg-indigo-200 selection:text-indigo-900 overflow-hidden">
      
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 bg-white border-b sticky top-0 z-30 shadow-sm">
        <div className="flex items-center gap-3 text-slate-900">
          <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center shadow-md">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-lg tracking-tight">UMKM Naik Kelas</span>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300" 
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar Navigation */}
      <aside className={`
        fixed md:sticky top-0 left-0 z-50 md:z-10 w-[280px] md:w-80 h-screen 
        bg-white border-r border-slate-200/80 overflow-y-auto transition-transform duration-300 ease-in-out shadow-2xl md:shadow-none
        ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="p-6 hidden md:flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-indigo-600 rounded-xl flex items-center justify-center shadow-md shadow-indigo-600/20">
               <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-black text-xl text-slate-900 tracking-tight">UMKM Naik Kelas</h1>
              <p className="text-xs font-bold text-indigo-600 tracking-widest uppercase mt-0.5">Panduan Praktis</p>
            </div>
          </div>
        </div>

        <nav className="p-4 space-y-8">
          <div>
            <div className="text-xs font-bold tracking-wider text-slate-400 mb-3 px-4 uppercase">Modul E-Book (Bab 1-14)</div>
            <div className="space-y-1">
              {chapters.map(chapter => (
                <NavItem activeTab={activeTab} setActiveTab={setActiveTab} setMobileMenuOpen={setMobileMenuOpen} key={chapter.id} id={chapter.id} label={chapter.title} icon={BookOpen} isChapter />
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs font-bold tracking-wider text-slate-400 mb-3 px-4 uppercase">Alat Interaktif</div>
            <div className="space-y-1">
              <NavItem activeTab={activeTab} setActiveTab={setActiveTab} setMobileMenuOpen={setMobileMenuOpen} id="lean-canvas" label="Kanvas Model Bisnis" icon={CheckSquare} />
              <NavItem activeTab={activeTab} setActiveTab={setActiveTab} setMobileMenuOpen={setMobileMenuOpen} id="calculator" label="Kalkulator Bisnis" icon={Calculator} />
              <NavItem activeTab={activeTab} setActiveTab={setActiveTab} setMobileMenuOpen={setMobileMenuOpen} id="content-planner" label="Perencana Konten" icon={CalendarDays} />
            </div>
          </div>

          <div>
            <div className="text-xs font-bold tracking-wider text-slate-400 mb-3 px-4 uppercase">Berbagi Manfaat</div>
            <div className="space-y-1">
              <NavItem activeTab={activeTab} setActiveTab={setActiveTab} setMobileMenuOpen={setMobileMenuOpen} id="promotional-materials" label="Materi Promosi" icon={Share2} />
            </div>
          </div>

          <div>
            <div className="text-xs font-bold tracking-wider text-slate-400 mb-3 px-4 uppercase">Evaluasi & Validasi</div>
            <div className="space-y-1">
              <NavItem activeTab={activeTab} setActiveTab={setActiveTab} setMobileMenuOpen={setMobileMenuOpen} id="training" label="Modul Pelatihan" icon={BrainCircuit} />
              <NavItem activeTab={activeTab} setActiveTab={setActiveTab} setMobileMenuOpen={setMobileMenuOpen} id="impact-analysis" label="Analisis Dampak" icon={LineChart} />
            </div>
          </div>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main ref={mainRef} className="flex-1 p-4 md:p-10 lg:p-12 overflow-y-auto h-screen relative w-full">
        <div className="max-w-6xl mx-auto pb-24">
          {renderContent()}

          {/* Bottom Navigation */}
          <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            {(() => {
              const tabOrder = [
                ...chapters.map(c => c.id),
                'lean-canvas',
                'calculator',
                'content-planner',
                'training',
                'impact-analysis',
                'promotional-materials'
              ];
              const currentIndex = tabOrder.indexOf(activeTab);
              const prevTab = currentIndex > 0 ? tabOrder[currentIndex - 1] : null;
              const nextTab = currentIndex < tabOrder.length - 1 ? tabOrder[currentIndex + 1] : null;
              
              const getTabLabel = (id: string) => {
                if (id === 'lean-canvas') return 'Kanvas Model Bisnis';
                if (id === 'calculator') return 'Kalkulator Bisnis';
                if (id === 'content-planner') return 'Perencana Konten';
                if (id === 'training') return 'Modul Pelatihan';
                if (id === 'impact-analysis') return 'Analisis Dampak';
                if (id === 'promotional-materials') return 'Materi Promosi';
                const chapter = chapters.find(c => c.id === id);
                return chapter ? chapter.title : '';
              };

              return (
                <>
                  {prevTab ? (
                    <button
                      onClick={() => setActiveTab(prevTab)}
                      className="w-full sm:w-auto flex items-center justify-center sm:justify-start gap-2 px-6 py-3 rounded-xl hover:bg-slate-100 text-slate-700 transition-colors font-medium border border-transparent hover:border-slate-200"
                    >
                      <ChevronRight className="w-5 h-5 rotate-180" />
                      <div className="text-left">
                        <div className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-0.5">Sebelumnya</div>
                        <div className="truncate max-w-[200px]">{getTabLabel(prevTab)}</div>
                      </div>
                    </button>
                  ) : <div></div>}

                  {nextTab && (
                    <button
                      onClick={() => setActiveTab(nextTab)}
                      className="w-full sm:w-auto flex items-center justify-center sm:justify-end gap-2 px-6 py-3 rounded-xl bg-indigo-50 text-indigo-700 hover:bg-indigo-100 transition-colors font-medium border border-indigo-100 hover:border-indigo-200"
                    >
                      <div className="text-right">
                        <div className="text-xs text-indigo-400 font-bold uppercase tracking-wider mb-0.5">Selanjutnya</div>
                        <div className="truncate max-w-[200px]">{getTabLabel(nextTab)}</div>
                      </div>
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  )}
                </>
              );
            })()}
          </div>

          <footer className="mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500 gap-4">
            <p>&copy; {new Date().getFullYear()} Panduan UMKM. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <button 
                onClick={() => setActiveTab('privacy-policy')} 
                className="hover:text-slate-900 transition-colors font-medium">
                Kebijakan Privasi
              </button>
              <button 
                onClick={() => setActiveTab('terms-of-service')} 
                className="hover:text-slate-900 transition-colors font-medium">
                Syarat & Ketentuan
              </button>
            </div>
          </footer>
        </div>
      </main>

    </div>
  );
}

