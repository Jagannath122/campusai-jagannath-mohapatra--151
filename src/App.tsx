import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ChatSection } from './components/ChatSection';
import { ProblemsSolutionsSection } from './components/ProblemsSolutionsSection';
import { TicketSection } from './components/TicketSection';
import { UtilitiesSection } from './components/UtilitiesSection';
import { KnowledgeSection } from './components/KnowledgeSection';
import { AnalyticsSection } from './components/AnalyticsSection';
import { ProjectDocsSection } from './components/ProjectDocsSection';
import { EmergencyModal } from './components/EmergencyModal';
import { ActiveTab, LanguageMode } from './types';
import { PROJECT_DETAILS } from './data/campusData';
import { 
  Bot, 
  GraduationCap, 
  Heart, 
  ShieldCheck, 
  Sparkles, 
  Cpu,
  TicketCheck,
  Calculator,
  BookOpen,
  BarChart3,
  FileCode2,
  FileQuestion,
  Award
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('chat');
  const [language, setLanguage] = useState<LanguageMode>('en');
  const [isEmergencyOpen, setIsEmergencyOpen] = useState(false);

  // States to pass queries from Hero/FAQ/Problems into Chat
  const [externalPrompt, setExternalPrompt] = useState<{ query: string; category: string } | null>(null);

  // State to pass query from Chat or Problems into Ticket form
  const [escalatedTicket, setEscalatedTicket] = useState<{ subject: string; description: string; category: string } | null>(null);

  const handleSelectPromptFromHero = (query: string, category: string) => {
    setExternalPrompt({ query, category });
    setActiveTab('chat');
  };

  const handleEscalateToTicket = (subject: string, description: string, category: string) => {
    setEscalatedTicket({ subject, description, category });
    setActiveTab('tickets');
  };

  const handleAskInChatFromFaqOrProblems = (query: string, category: string) => {
    setExternalPrompt({ query, category });
    setActiveTab('chat');
  };

  const isOdia = language === 'or';

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onOpenEmergency={() => setIsEmergencyOpen(true)}
        language={language}
        setLanguage={setLanguage}
      />

      {/* Hero Showcase (shown prominently on chat tab or can be toggled) */}
      {activeTab === 'chat' && (
        <HeroSection 
          onSelectPrompt={handleSelectPromptFromHero}
          onExploreProject={() => setActiveTab('project-specs')}
          language={language}
        />
      )}

      {/* Main Tab View Routing */}
      <main className="flex-1 pb-16">
        {activeTab === 'chat' && (
          <ChatSection 
            onEscalateToTicket={handleEscalateToTicket}
            externalPrompt={externalPrompt}
            onClearExternalPrompt={() => setExternalPrompt(null)}
            language={language}
          />
        )}

        {activeTab === 'problems' && (
          <ProblemsSolutionsSection 
            language={language}
            onAskInChat={handleAskInChatFromFaqOrProblems}
            onRaiseTicketForProblem={handleEscalateToTicket}
          />
        )}

        {activeTab === 'tickets' && (
          <TicketSection 
            initialTicketData={escalatedTicket}
            onClearInitialData={() => setEscalatedTicket(null)}
          />
        )}

        {activeTab === 'utilities' && (
          <UtilitiesSection />
        )}

        {activeTab === 'knowledge' && (
          <KnowledgeSection 
            onAskInChat={handleAskInChatFromFaqOrProblems}
          />
        )}

        {activeTab === 'analytics' && (
          <AnalyticsSection />
        )}

        {activeTab === 'project-specs' && (
          <ProjectDocsSection 
            language={language}
          />
        )}
      </main>

      {/* Campus Emergency Modal */}
      <EmergencyModal 
        isOpen={isEmergencyOpen} 
        onClose={() => setIsEmergencyOpen(false)} 
      />

      {/* Sophisticated Academic Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Branding & Creator Attribution */}
            <div className="md:col-span-6 space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold">
                  <Bot className="w-5 h-5" />
                </div>
                <span className="font-display font-bold text-lg text-white">CampusAI</span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-semibold">
                  Autonomous Help Desk
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20 font-bold">
                  Grade 'O' Project
                </span>
              </div>

              <p className="text-slate-400 leading-relaxed text-xs max-w-lg">
                {isOdia ? (
                  <>
                    ନେକ୍ସଟ୍-ଜେନ୍ AI କଲେଜ ହେଲ୍ପ ଡେସ୍କ ଓ ଛାତ୍ର ସେବା ପ୍ରଣାଳୀ, ପ୍ରୋଜେକ୍ଟ ନିର୍ମାତା: <strong className="text-white">{PROJECT_DETAILS.developerOr}</strong> (ରେଜିଷ୍ଟ୍ରେସନ୍ ନଂ: <strong className="text-indigo-300 font-mono">{PROJECT_DETAILS.regNo}</strong>)। କମ୍ପ୍ୟୁଟର ସାଇନ୍ସ ଆଣ୍ଡ ଇଞ୍ଜିନିୟରିଂ ବିଭାଗ।
                  </>
                ) : (
                  <>
                    Next-Generation AI College Help Desk & Student Service System engineered by <strong className="text-white">{PROJECT_DETAILS.developer}</strong> (Reg No: <strong className="text-indigo-300 font-mono">{PROJECT_DETAILS.regNo}</strong>). Developed for the Department of Computer Science & Engineering.
                  </>
                )}
              </p>

              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800/80 inline-block text-[11px] text-slate-300">
                <div className="font-semibold text-white">Lead Developer: {PROJECT_DETAILS.developer} ({PROJECT_DETAILS.developerOr})</div>
                <div className="text-indigo-300 font-mono">University Registration No: {PROJECT_DETAILS.regNo}</div>
              </div>
            </div>

            {/* Quick Navigation Links */}
            <div className="md:col-span-3 space-y-2">
              <div className="text-xs font-semibold text-white uppercase tracking-wider mb-2">
                {isOdia ? 'ମୁଖ୍ୟ ବିଭାଗ ସମୂହ' : 'Portal Features'}
              </div>
              <ul className="space-y-1.5 text-xs">
                <li>
                  <button onClick={() => setActiveTab('chat')} className="hover:text-indigo-400 transition-colors">
                    {isOdia ? 'AI ଭର୍ଚୁଆଲ୍ ସହାୟକ' : 'AI Virtual Assistant'}
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab('problems')} className="hover:text-indigo-400 transition-colors">
                    {isOdia ? '୧୫+ କଲେଜ ସମସ୍ୟା ଓ ସମାଧାନ' : '15+ Campus Issues & Solutions'}
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab('tickets')} className="hover:text-indigo-400 transition-colors">
                    {isOdia ? 'ଅଭିଯୋଗ ଟିକେଟ୍ ଡେସ୍କ' : 'Grievance Ticket Desk'}
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab('utilities')} className="hover:text-indigo-400 transition-colors">
                    {isOdia ? '୭୫% ଉପସ୍ଥାନ ଓ CGPA ହିସାବ' : '75% Attendance & CGPA Tools'}
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab('knowledge')} className="hover:text-indigo-400 transition-colors">
                    {isOdia ? 'କଲେଜ ନିୟମାବଳୀ ଓ FAQ' : 'Campus Circulars & FAQs'}
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab('project-specs')} className="hover:text-indigo-400 transition-colors">
                    {isOdia ? 'ପ୍ରୋଜେକ୍ଟ ଓ ଭାଇଭା ପ୍ରଶ୍ନୋତ୍ତର (Grade O)' : 'Specs & Viva Defense (Grade O)'}
                  </button>
                </li>
              </ul>
            </div>

            {/* Institutional Guidelines */}
            <div className="md:col-span-3 space-y-2">
              <div className="text-xs font-semibold text-white uppercase tracking-wider mb-2">
                {isOdia ? 'ଶୃଙ୍ଖଳାଗତ ନିୟମାବଳୀ' : 'Campus Disciplinary Codes'}
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                {isOdia 
                  ? 'ସୁପ୍ରିମକୋର୍ଟ ଏବଂ UGC ନିର୍ଦ୍ଦେଶ ଅନୁଯାୟୀ ରାଗିଂ ସମ୍ପୂର୍ଣ୍ଣ ନିଷିଦ୍ଧ। ସେମିଷ୍ଟାର ପରୀକ୍ଷା ପାଇଁ ୭୫% ଉପସ୍ଥାନ ବାଧ୍ୟତାମୂଳକ।'
                  : 'Zero tolerance for ragging under Supreme Court of India guidelines. Minimum 75% attendance is strictly enforced for End-Semester examinations.'}
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setIsEmergencyOpen(true)}
                  className="text-xs text-rose-400 hover:text-rose-300 font-semibold underline underline-offset-2"
                >
                  {isOdia ? '୨୪/୭ ଜରୁରୀକାଳୀନ ହେଲ୍ପଲାଇନ୍' : 'View 24/7 Emergency Helplines'}
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
            <div>
              &copy; {new Date().getFullYear()} CampusAI Project. Conceived & Engineered by <span className="text-slate-300 font-medium">{PROJECT_DETAILS.developer}</span> ({PROJECT_DETAILS.regNo}).
            </div>
            <div className="flex items-center gap-4 text-[11px]">
              <span className="text-amber-400 font-semibold">Grade 'O' Capstone Portfolio</span>
              <span>·</span>
              <span>Bilingual (English + ଓଡ଼ିଆ)</span>
              <span>·</span>
              <span>Powered by Gemini 2.5 Flash</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
