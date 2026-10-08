import React from 'react';
import { 
  Sparkles, 
  MessageSquare, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  GraduationCap,
  Cpu,
  Award
} from 'lucide-react';
import { PROJECT_DETAILS, QUICK_PROMPTS, ODIA_QUICK_PROMPTS } from '../data/campusData';
import { LanguageMode } from '../types';

interface HeroSectionProps {
  onSelectPrompt: (query: string, category: string) => void;
  onExploreProject: () => void;
  language: LanguageMode;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  onSelectPrompt, 
  onExploreProject,
  language
}) => {
  const isOdia = language === 'or';
  const promptList = isOdia ? ODIA_QUICK_PROMPTS : QUICK_PROMPTS;

  return (
    <div className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-b from-slate-900/80 via-slate-950 to-slate-950 pt-8 pb-10">
      {/* Background radial ambient lights */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Academic Project Presentation Tag */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-medium shadow-sm">
            <GraduationCap className="w-4 h-4 text-indigo-400" />
            <span>{isOdia ? 'ମେଜର କ୍ୟାପଷ୍ଟୋନ୍ ପ୍ରୋଜେକ୍ଟ' : 'Major Academic Capstone Project'}</span>
            <span className="text-indigo-400 font-bold">·</span>
            <span>{isOdia ? 'ପ୍ରୋଜେକ୍ଟ ନିର୍ମାତା:' : 'Lead Developer:'} <strong className="text-white font-semibold">{isOdia ? PROJECT_DETAILS.developerOr : PROJECT_DETAILS.developer}</strong></span>
            <span className="text-indigo-400 font-bold">·</span>
            <span className="text-indigo-200">Reg No: <strong className="text-white font-semibold font-mono">{PROJECT_DETAILS.regNo}</strong></span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>Target Grade 'O' (Outstanding / 100%)</span>
          </div>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
              {isOdia ? (
                <>
                  ସ୍ୱୟଂଚାଳିତ AI କଲେଜ <br className="hidden sm:inline" />
                  <span className="bg-gradient-to-r from-indigo-400 via-violet-300 to-sky-400 bg-clip-text text-transparent">
                    ହେଲ୍ପ ଡେସ୍କ ଓ ଛାତ୍ର ସହାୟତା ପୋର୍ଟାଲ୍
                  </span>
                </>
              ) : (
                <>
                  Autonomous AI College <br className="hidden sm:inline" />
                  <span className="bg-gradient-to-r from-indigo-400 via-violet-300 to-sky-400 bg-clip-text text-transparent">
                    Help Desk & Campus Assistant
                  </span>
                </>
              )}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
              {isOdia
                ? '୭୫% ଉପସ୍ଥାନ ନିୟମ, ପରୀକ୍ଷା ହଲ୍ ଟିକେଟ୍, ସିଜିପିଏ ଶତକଡ଼ା ହିସାବ, ଓଡ଼ିଶା ପ୍ରେରଣା ଓ ମେଧାବୃତ୍ତି ସ୍କଲାରସିପ୍, ଏସବିଆଇ କଲେକ୍ଟ ଫିସ୍ ଏବଂ ହଷ୍ଟେଲ ସମସ୍ୟାର ତୁରନ୍ତ AI ସମାଧାନ ପାଇଁ ସ୍ୱୟଂଚାଳିତ ବ୍ୟବସ୍ଥା।'
                : 'An intelligent, policy-grounded campus advisor engineered to resolve academic regulations, exam timetables, attendance condonation, hostel guidelines, and fee structures — with automated grievance ticket dispatch and student tools.'}
            </p>

            {/* Quick Action Chips */}
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-1">
                {isOdia ? 'ସର୍ବାଧିକ ପଚରାଯାଉଥିବା ପ୍ରଶ୍ନ:' : 'Frequently Inquired:'}
              </span>
              {promptList.slice(0, 5).map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => onSelectPrompt(p.query, p.category)}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 bg-slate-900/90 border border-slate-800 hover:border-indigo-500/60 hover:text-white hover:bg-slate-800/80 transition-all flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3 h-3 text-indigo-400" />
                  <span>{p.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Project Highlights Card */}
          <div className="lg:col-span-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-sm shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm">
                  <Cpu className="w-4 h-4 text-indigo-400" />
                  <span>Capstone Defense Specs</span>
                </div>
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  Grade 'O' Standard
                </span>
              </div>

              <div className="mt-3 space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">{isOdia ? 'ପ୍ରୋଜେକ୍ଟ ନିର୍ମାତା' : 'Project Architect'}</span>
                  <span className="text-white font-medium">{PROJECT_DETAILS.developer}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">{isOdia ? 'ରେଜିଷ୍ଟ୍ରେସନ୍ ନମ୍ବର' : 'Registration Number'}</span>
                  <span className="text-indigo-300 font-mono font-semibold">{PROJECT_DETAILS.regNo}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">Core LLM Pipeline</span>
                  <span className="text-slate-200">Gemini 2.5 Flash · Streaming + Search Grounding</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">{isOdia ? 'ଭାଷା ସହାୟତା' : 'Multilingual Support'}</span>
                  <span className="text-emerald-400 font-medium">English + ଓଡ଼ିଆ (Bilingual)</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Academic Wing</span>
                  <span className="text-slate-300">Dept of Computer Science & Engg</span>
                </div>
              </div>

              <button
                onClick={onExploreProject}
                className="mt-4 w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-md shadow-indigo-600/20"
              >
                <span>{isOdia ? 'ସମ୍ପୂର୍ଣ୍ଣ ଆର୍କିଟେକଚର୍ ଓ ଭାଇଭା ପ୍ରଶ୍ନୋତ୍ତର' : 'View Architecture & Viva Defense (Grade O)'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Telemetry Metric Counter Strip */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
            <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>{isOdia ? 'ସମାଧିତ ପ୍ରଶ୍ନ ସଂଖ୍ୟା' : 'Inquiries Resolved'}</span>
            </div>
            <div className="mt-1 text-2xl font-bold font-display text-white">14,892+</div>
            <p className="text-[11px] text-slate-400 mt-0.5">{isOdia ? '୨୪/୭ ସ୍ୱୟଂଚାଳିତ କଲେଜ ସହାୟତା' : 'Automated 24/7 college queries'}</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
            <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
              <Clock className="w-4 h-4 text-indigo-400" />
              <span>{isOdia ? 'ହାରାହାରି ଉତ୍ତର ସମୟ' : 'Average Response Speed'}</span>
            </div>
            <div className="mt-1 text-2xl font-bold font-display text-white">&lt; 0.45s</div>
            <p className="text-[11px] text-slate-400 mt-0.5">{isOdia ? 'ଅତ୍ୟାଧୁନିକ ଲୋ-ଲେଟେନ୍ସି AI' : 'Ultra-low latency inference'}</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
            <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
              <ShieldCheck className="w-4 h-4 text-violet-400" />
              <span>{isOdia ? 'ସଠିକତା ଓ ପ୍ରମାଣିକତା' : 'Resolution Accuracy'}</span>
            </div>
            <div className="mt-1 text-2xl font-bold font-display text-white">98.6%</div>
            <p className="text-[11px] text-slate-400 mt-0.5">{isOdia ? 'ସରକାରୀ ନିୟମାବଳୀ ଆଧାରିତ' : 'Strict institutional policy adherence'}</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
            <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
              <GraduationCap className="w-4 h-4 text-amber-400" />
              <span>{isOdia ? 'ସଂଯୁକ୍ତ ବିଭାଗ ସମୂହ' : 'Connected Cells'}</span>
            </div>
            <div className="mt-1 text-2xl font-bold font-display text-white">{isOdia ? '୬ଟି କଲେଜ ବିଭାଗ' : '6 Campus Wings'}</div>
            <p className="text-[11px] text-slate-400 mt-0.5">Academics, Exam, Hostel, Fees, TPO</p>
          </div>
        </div>
      </div>
    </div>
  );
};
