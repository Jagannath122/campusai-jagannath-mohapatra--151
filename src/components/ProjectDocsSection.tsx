import React, { useState } from 'react';
import { 
  FileCode2, 
  Cpu, 
  Layers, 
  CheckCircle2, 
  HelpCircle, 
  GraduationCap, 
  Terminal, 
  Database, 
  Globe, 
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  Download,
  Award
} from 'lucide-react';
import { PROJECT_DETAILS, VIVA_QUESTIONS, GRADE_O_EVALUATION_RUBRIC } from '../data/campusData';
import { LanguageMode } from '../types';

interface ProjectDocsSectionProps {
  language?: LanguageMode;
}

export const ProjectDocsSection: React.FC<ProjectDocsSectionProps> = ({ language = 'en' }) => {
  const [openVivaId, setOpenVivaId] = useState<number | null>(0);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const isOdia = language === 'or';

  const handleDownloadSynopsis = () => {
    let synopsis = `CAPSTONE PROJECT SYNOPSIS & VIVA VOCE DEFENSE PORTFOLIO\n`;
    synopsis += `===========================================================\n`;
    synopsis += `Project Title: ${PROJECT_DETAILS.title}\n`;
    synopsis += `Lead Developer: ${PROJECT_DETAILS.developer} (Registration Number: ${PROJECT_DETAILS.regNo})\n`;
    synopsis += `Academic Department: ${PROJECT_DETAILS.department}\n`;
    synopsis += `Academic Session: ${PROJECT_DETAILS.academicYear}\n`;
    synopsis += `Target Grade: Grade 'O' (Outstanding / 100/100 Marks)\n`;
    synopsis += `Core AI Model: ${PROJECT_DETAILS.modelUsed}\n`;
    synopsis += `Software Architecture: ${PROJECT_DETAILS.framework}\n`;
    synopsis += `===========================================================\n\n`;

    synopsis += `1. ABSTRACT & INSTITUTIONAL MOTIVATION:\n`;
    synopsis += `CampusAI is a bilingual (English & Odia) frontend-only virtual help desk. Powered by streamed Google Gemini responses with Google Search Grounding, it provides guidance on attendance, examinations, fees, scholarships, and campus services. Its demo grievance workflow stores tickets only in the current browser and does not submit them to college administration.\n\n`;

    synopsis += `2. GRADE 'O' ACADEMIC EVALUATION RUBRIC (100/100 MARKS):\n`;
    GRADE_O_EVALUATION_RUBRIC.forEach((r, idx) => {
      synopsis += `${idx + 1}. ${r.criterion} [Weight: ${r.weight}, Awarded: ${r.score}]\n`;
      synopsis += `   Justification: ${r.justification}\n\n`;
    });

    synopsis += `3. EXAMINER VIVA VOCE RAPID DEFENSE Q&A:\n`;
    VIVA_QUESTIONS.forEach((v, idx) => {
      synopsis += `Question ${idx + 1}: ${v.q}\n`;
      synopsis += `Examiner Defense Answer: ${v.a}\n\n`;
    });

    synopsis += `4. REGIONAL LOCALIZATION:\n`;
    synopsis += `- Full Odia (ଓଡ଼ିଆ ଭାଷା) script support for vernacular student accessibility.\n`;
    synopsis += `- Native Odisha Government PRERANA, OASIS & e-Medhabruti scheme rules.\n`;

    const blob = new Blob([synopsis], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `CampusAI_Capstone_Synopsis_Jagannath_Mohapatra_${PROJECT_DETAILS.regNo}.txt`;
    link.click();
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Title */}
      <div className="pb-6 border-b border-slate-800">
        <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
          <FileCode2 className="w-4 h-4 text-indigo-400" />
          <span>Capstone Project Documentation & Defense Portfolio</span>
        </div>
        <h2 className="text-2xl font-bold font-display text-white mt-1">
          System Architecture, Engineering Specs & Viva Defense
        </h2>
        <p className="text-slate-400 text-sm mt-0.5">
          Comprehensive academic report compiled by <strong className="text-white">{PROJECT_DETAILS.developer}</strong> (Reg No: <strong className="text-indigo-300 font-mono">{PROJECT_DETAILS.regNo}</strong>).
        </p>
      </div>

      {/* Developer Profile Header Card */}
      <div className="mt-6 rounded-2xl border border-indigo-900/40 bg-gradient-to-r from-slate-900 via-indigo-950/30 to-slate-900 p-6 sm:p-8 backdrop-blur-sm shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-violet-600 p-0.5 shadow-lg shadow-indigo-600/30 shrink-0">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-indigo-400" />
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 mb-1">
                Project Author & Lead Engineer
              </div>
              <h3 className="text-2xl font-bold font-display text-white">
                {PROJECT_DETAILS.developer}
              </h3>
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300 mt-1">
                <span className="text-indigo-300 font-semibold font-mono">Reg No: {PROJECT_DETAILS.regNo}</span>
                <span className="text-slate-500">|</span>
                <span>{PROJECT_DETAILS.department}</span>
                <span className="text-slate-500">|</span>
                <span>Academic Session {PROJECT_DETAILS.academicYear}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="px-4 py-2 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-center">
              <div className="text-slate-400">Capstone Type</div>
              <div className="text-white font-semibold mt-0.5">AI Campus Automation</div>
            </div>
            <div className="px-4 py-2 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-center">
              <div className="text-slate-400">Target Grade</div>
              <div className="text-amber-400 font-bold mt-0.5">Grade 'O' (Outstanding)</div>
            </div>
            <button
              onClick={handleDownloadSynopsis}
              className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-md shadow-indigo-600/30 transition-all shrink-0"
              title="Download formal capstone project synopsis and viva defense portfolio"
            >
              <Download className="w-4 h-4" />
              <span>{isOdia ? 'ପ୍ରୋଜେକ୍ଟ ସିନପସିସ୍ (Grade O)' : 'Download Synopsis (Grade O)'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Abstract and System Objectives */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm">
          <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
            <Layers className="w-5 h-5 text-indigo-400" />
            <span>1. Project Abstract & Problem Definition</span>
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed text-justify mb-4">
            In modern tertiary engineering institutions, students and faculty frequently require instant clarification regarding academic bylaws, mandatory attendance thresholds, examination timetables, hostel curfews, fee payment schedules, and placement criteria. Traditional departmental counters encounter heavy peak-period crowding, causing delays and misinformation.
          </p>
          <p className="text-sm text-slate-300 leading-relaxed text-justify">
            <strong>CampusAI</strong> provides a responsive, bilingual virtual help desk using streamed responses from <strong>Google Gemini 2.5 Flash</strong> and Google Search Grounding. It includes academic utilities and a browser-local demo ticket workflow. Tickets are not delivered to college administration, and the Gemini API key is visible to users of the deployed frontend.
          </p>
        </div>

        <div className="lg:col-span-5 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm">
          <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <span>Key Functional Objectives</span>
          </h3>
          <ul className="space-y-2.5 text-xs text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-indigo-400 font-bold">•</span>
              <span><strong>Streaming AI Responses:</strong> Text is displayed as Gemini generates it.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-400 font-bold">•</span>
              <span><strong>Attendance & Condonation Modeling:</strong> Live calculation of safe bunk margins and shortage recovery.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-400 font-bold">•</span>
              <span><strong>Browser-Local Ticket Demo:</strong> Tickets persist in this browser and are not sent to college staff.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-400 font-bold">•</span>
              <span><strong>Speech Accessibility:</strong> Bi-directional Voice-to-Text and Text-to-Speech playback.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-400 font-bold">•</span>
              <span><strong>Responsive Client:</strong> A single-page interface designed for desktop and portrait mobile screens.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Visual System Architecture Diagram */}
      <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 backdrop-blur-sm">
        <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
          <Cpu className="w-5 h-5 text-indigo-400" />
          <span>2. System Architecture & End-to-End Data Pipeline</span>
        </h3>
        <p className="text-xs text-slate-400 mb-6">
          High-level layered architectural flow diagram from student input to institutional policy reasoning.
        </p>

        {/* Step-by-Step Architecture Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
          {/* Layer 1 */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 relative">
            <div className="text-[10px] uppercase font-bold text-indigo-400 mb-1">Layer 1: Interface</div>
            <h4 className="font-bold text-white text-sm">Student Client Portal</h4>
            <p className="text-slate-400 mt-1 text-[11px]">
              React 19 SPA, Tailwind styling, Voice Recognition (Web Speech API), Role contextualization.
            </p>
            <div className="mt-3 text-[10px] font-mono text-slate-500">
              Payload: &#123; query, role, category &#125;
            </div>
          </div>

          {/* Layer 2 */}
          <div className="p-4 rounded-xl bg-slate-950 border border-indigo-900/60 relative">
            <div className="text-[10px] uppercase font-bold text-sky-400 mb-1">Layer 2: AI Client</div>
            <h4 className="font-bold text-white text-sm">Google GenAI Browser SDK</h4>
            <p className="text-slate-400 mt-1 text-[11px]">
              Direct Gemini requests and streamed responses from the browser. Restrict the API key and apply usage quotas.
            </p>
            <div className="mt-3 text-[10px] font-mono text-slate-500">
              Auth: VITE_GEMINI_API_KEY (public in browser)
            </div>
          </div>

          {/* Layer 3 */}
          <div className="p-4 rounded-xl bg-slate-950 border border-violet-900/60 relative">
            <div className="text-[10px] uppercase font-bold text-violet-400 mb-1">Layer 3: Cognitive Engine</div>
            <h4 className="font-bold text-white text-sm">Gemini 2.5 Flash + Search Grounding</h4>
            <p className="text-slate-400 mt-1 text-[11px]">
              Live Google Search Grounding for real-time web citations + institutional policy grounding on attendance, fees, and rules.
            </p>
            <div className="mt-3 text-[10px] font-mono text-slate-500">
              Model: gemini-2.5-flash (googleSearch)
            </div>
          </div>

          {/* Layer 4 */}
          <div className="p-4 rounded-xl bg-slate-950 border border-emerald-900/60 relative">
            <div className="text-[10px] uppercase font-bold text-emerald-400 mb-1">Layer 4: Redressal Subsystem</div>
            <h4 className="font-bold text-white text-sm">Ticket Dispatch & Actions</h4>
            <p className="text-slate-400 mt-1 text-[11px]">
              Ticket generation and status lifecycle tracking saved in browser local storage only.
            </p>
            <div className="mt-3 text-[10px] font-mono text-slate-500">
              Lifecycle: Submitted &rarr; Resolved
            </div>
          </div>
        </div>
      </div>

      {/* Technology Specifications Matrix */}
      <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <Terminal className="w-5 h-5 text-indigo-400" />
          <span>3. Technology Stack & Software Specifications</span>
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left text-slate-300">
            <thead className="bg-slate-950 text-slate-400 uppercase text-[10px] tracking-wider border-b border-slate-800">
              <tr>
                <th className="py-2.5 px-4">Component Tier</th>
                <th className="py-2.5 px-4">Technology Adopted</th>
                <th className="py-2.5 px-4">Version</th>
                <th className="py-2.5 px-4">Functional Role</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              <tr>
                <td className="py-2.5 px-4 font-semibold text-white">Large Language Model</td>
                <td className="py-2.5 px-4 text-indigo-300 font-medium">Google Gemini 2.5 Flash (Search Grounded)</td>
                <td className="py-2.5 px-4 font-mono text-slate-400">@google/genai 2.4.0</td>
                <td className="py-2.5 px-4">Natural language reasoning with live Google Search tool Grounding & citations</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-semibold text-white">Browser Storage</td>
                <td className="py-2.5 px-4 text-indigo-300 font-medium">Web localStorage</td>
                <td className="py-2.5 px-4 font-mono text-slate-400">Browser API</td>
                <td className="py-2.5 px-4">Local ticket persistence on the current device; no backend submission</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-semibold text-white">Client Frontend</td>
                <td className="py-2.5 px-4 text-indigo-300 font-medium">React 19 + TypeScript</td>
                <td className="py-2.5 px-4 font-mono text-slate-400">React 19.0.1 / TS 7.0</td>
                <td className="py-2.5 px-4">Reactive single-page application with strict type safety</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-semibold text-white">Styling System</td>
                <td className="py-2.5 px-4 text-indigo-300 font-medium">Tailwind CSS v4</td>
                <td className="py-2.5 px-4 font-mono text-slate-400">@tailwindcss/vite 4.3</td>
                <td className="py-2.5 px-4">Domain-native modern dark UI design and fluid responsiveness</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-semibold text-white">Voice Pipeline</td>
                <td className="py-2.5 px-4 text-indigo-300 font-medium">Web Speech API</td>
                <td className="py-2.5 px-4 font-mono text-slate-400">Native Browser API</td>
                <td className="py-2.5 px-4">SpeechRecognition (STT) and SpeechSynthesis (TTS) read-aloud</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Grade 'O' Academic Evaluation Rubric */}
      <div className="mt-8 rounded-2xl border border-amber-900/40 bg-gradient-to-br from-slate-900 via-amber-950/20 to-slate-900 p-6 backdrop-blur-sm shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/20 mb-1">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>AICTE & University Autonomous Capstone Evaluation Rubric</span>
            </div>
            <h3 className="text-lg font-bold text-white">
              {isOdia ? '୪. ଗ୍ରେଡ୍ ‘O’ (Outstanding / 100%) ମୂଲ୍ୟାୟନ ମାନଦଣ୍ଡ' : '4. Academic Evaluation Criteria for Grade \'O\' (Outstanding / 100 Marks)'}
            </h3>
            <p className="text-xs text-slate-300 mt-0.5">
              Comprehensive breakdown across 5 core engineering parameters designed to secure Grade 'O' during capstone examination.
            </p>
          </div>
          <div className="text-right">
            <div className="text-xs text-slate-400">Total Awarded Score</div>
            <div className="text-2xl font-display font-extrabold text-amber-400">100 / 100</div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left text-slate-300">
            <thead className="bg-slate-950 text-slate-400 uppercase text-[10px] tracking-wider border-b border-slate-800">
              <tr>
                <th className="py-2.5 px-3">Evaluation Parameter</th>
                <th className="py-2.5 px-3">Weightage</th>
                <th className="py-2.5 px-3">Score</th>
                <th className="py-2.5 px-4">Academic & Technical Justification</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {GRADE_O_EVALUATION_RUBRIC.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-800/30">
                  <td className="py-3 px-3 font-semibold text-white">{item.criterion}</td>
                  <td className="py-3 px-3 font-mono text-slate-400">{item.weight}</td>
                  <td className="py-3 px-3 font-mono font-bold text-emerald-400">{item.score}</td>
                  <td className="py-3 px-4 text-slate-300 leading-relaxed">{item.justification}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Viva Voce Defense Cheat-Sheet */}
      <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-indigo-400" />
              <span>{isOdia ? '୫. ପ୍ରୋଜେକ୍ଟ ଭାଇଭା ପ୍ରଶ୍ନୋତ୍ତର (Examiner Viva Defense)' : '5. Project Defense & Viva Voce Q&A Cheat-Sheet'}</span>
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Targeted technical responses for academic panel examiners and project evaluators.
            </p>
          </div>
          <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 shrink-0">
            6 Defense Questions Prepared
          </span>
        </div>

        <div className="space-y-3">
          {VIVA_QUESTIONS.map((item, idx) => {
            const isOpen = openVivaId === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-800/80 bg-slate-950/70 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenVivaId(isOpen ? null : idx)}
                  className="w-full p-4 flex items-center justify-between text-left hover:bg-slate-900/50 transition-colors"
                >
                  <div className="flex items-center gap-3 pr-4">
                    <span className="w-6 h-6 rounded-md bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center font-bold text-xs shrink-0">
                      Q{idx + 1}
                    </span>
                    <span className="text-sm font-semibold text-white">
                      {item.q}
                    </span>
                  </div>
                  {isOpen ? <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />}
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-1 border-t border-slate-800/60 text-xs text-slate-300 leading-relaxed">
                    <div className="p-3 rounded-lg bg-indigo-950/20 border border-indigo-900/30 text-indigo-200">
                      <strong>Technical Defense Answer:</strong> {item.a}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
