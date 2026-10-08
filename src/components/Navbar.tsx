import React, { useState } from 'react';
import { 
  Bot, 
  TicketCheck, 
  Calculator, 
  BookOpen, 
  BarChart3, 
  FileCode2, 
  PhoneCall, 
  Menu, 
  X,
  Sparkles,
  GraduationCap,
  FileQuestion,
  Languages
} from 'lucide-react';
import { ActiveTab, LanguageMode } from '../types';
import { PROJECT_DETAILS } from '../data/campusData';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onOpenEmergency: () => void;
  language: LanguageMode;
  setLanguage: (lang: LanguageMode) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  activeTab, 
  setActiveTab, 
  onOpenEmergency,
  language,
  setLanguage
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isOdia = language === 'or';

  const navItems = [
    { id: 'chat' as ActiveTab, label: isOdia ? 'AI ସହାୟତା' : 'AI Help Desk', icon: Bot },
    { id: 'problems' as ActiveTab, label: isOdia ? 'ସମସ୍ୟା ଓ ସମାଧାନ' : 'Campus Issues & Solutions', icon: FileQuestion },
    { id: 'tickets' as ActiveTab, label: isOdia ? 'ଅଭିଯୋଗ ଡେସ୍କ' : 'Grievance Desk', icon: TicketCheck },
    { id: 'utilities' as ActiveTab, label: isOdia ? 'ଏକାଡେମିକ୍ ଟୁଲ୍ସ' : 'Academic Tools', icon: Calculator },
    { id: 'knowledge' as ActiveTab, label: isOdia ? 'ନିୟମ ଓ FAQ' : 'Campus FAQ', icon: BookOpen },
    { id: 'project-specs' as ActiveTab, label: isOdia ? 'ଭାଇଭା ଓ ପ୍ରୋଜେକ୍ଟ (Grade O)' : 'Project & Viva (Grade O)', icon: FileCode2 },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-slate-950/85 backdrop-blur-md">
      {/* Top Academic Sub-Bar */}
      <div className="bg-gradient-to-r from-indigo-950/70 via-slate-900 to-indigo-950/70 border-b border-indigo-900/30 px-4 py-1.5 text-xs text-slate-300">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 font-medium text-indigo-300">
              <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
              Academic Innovation Project:
            </span>
            <span className="text-white font-semibold">{PROJECT_DETAILS.developer}</span>
            <span className="text-slate-500">|</span>
            <span className="text-indigo-200">Reg No: <strong className="text-white tracking-wide">{PROJECT_DETAILS.regNo}</strong></span>
          </div>

          <div className="hidden sm:flex items-center gap-3 text-slate-400 text-xs">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-slate-300">AI Core: Gemini 2.5 Flash · Streaming + Google Search Grounding</span>
            </span>
            <span className="text-slate-600">·</span>
            <span>24/7 Campus Automated Help Desk</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Identity */}
          <div 
            onClick={() => setActiveTab('chat')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-violet-500 p-0.5 shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Bot className="w-5 h-5 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-lg text-white tracking-tight">CampusAI</span>
                <span className="text-[10px] uppercase font-semibold tracking-wider px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  Help Desk
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block">
                Smart College Assistance & Grievance Portal
              </p>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-indigo-400' : 'text-slate-500'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Switcher */}
            <div className="flex items-center p-0.5 rounded-lg bg-slate-900 border border-slate-800 text-xs">
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded-md font-semibold transition-all ${
                  language === 'en'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage('or')}
                className={`px-2 py-1 rounded-md font-semibold transition-all flex items-center gap-1 ${
                  language === 'or'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Languages className="w-3 h-3" />
                <span>ଓଡ଼ିଆ</span>
              </button>
            </div>

            <button
              onClick={onOpenEmergency}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold text-rose-300 bg-rose-950/40 border border-rose-800/40 hover:bg-rose-900/50 hover:border-rose-700 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-rose-400 animate-bounce" />
              <span>Campus SOS</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setLanguage(language === 'en' ? 'or' : 'en')}
              className="px-2 py-1 rounded-lg text-xs font-bold bg-slate-900 border border-slate-800 text-indigo-300"
            >
              {language === 'en' ? 'ଓଡ଼ିଆ' : 'EN'}
            </button>
            <button
              onClick={onOpenEmergency}
              className="p-2 rounded-lg text-rose-300 bg-rose-950/40 border border-rose-800/40"
              title="Emergency Helplines"
            >
              <PhoneCall className="w-4 h-4 text-rose-400" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-slate-950/95 px-4 pt-2 pb-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-indigo-400' : 'text-slate-500'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
          <div className="pt-2 border-t border-slate-800/80 mt-2">
            <div className="text-xs text-slate-400 px-3 py-1">
              Developed by <strong className="text-white">{PROJECT_DETAILS.developer}</strong> (Reg: {PROJECT_DETAILS.regNo})
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
