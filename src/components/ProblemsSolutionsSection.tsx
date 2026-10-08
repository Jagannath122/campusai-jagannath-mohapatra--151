import React, { useState } from 'react';
import { 
  FileQuestion, 
  Search, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  FileText, 
  MapPin, 
  Clock, 
  Download, 
  MessageSquare, 
  TicketPlus, 
  Sparkles,
  Filter,
  DollarSign
} from 'lucide-react';
import { CAMPUS_PROBLEMS_SOLUTIONS, PROJECT_DETAILS } from '../data/campusData';
import { CampusProblemSolution, LanguageMode } from '../types';

interface ProblemsSolutionsSectionProps {
  language: LanguageMode;
  onAskInChat: (query: string, category: string) => void;
  onRaiseTicketForProblem: (subject: string, description: string, category: string) => void;
}

export const ProblemsSolutionsSection: React.FC<ProblemsSolutionsSectionProps> = ({
  language,
  onAskInChat,
  onRaiseTicketForProblem
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedProblemId, setExpandedProblemId] = useState<string | null>('prob-1');
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);

  const categories = [
    'All',
    'Academics',
    'Exams & Results',
    'Certificates & Documents',
    'Accounts & Fees',
    'Hostel & Mess',
    'Scholarships',
    'Placements & NOC'
  ];

  const filteredProblems = CAMPUS_PROBLEMS_SOLUTIONS.filter((prob) => {
    const matchesCategory = selectedCategory === 'All' || prob.category === selectedCategory;
    const q = searchTerm.toLowerCase();
    const matchesSearch =
      prob.titleEn.toLowerCase().includes(q) ||
      prob.titleOr.toLowerCase().includes(q) ||
      prob.problemDescEn.toLowerCase().includes(q) ||
      prob.problemDescOr.toLowerCase().includes(q) ||
      prob.requiredDocs.some((d) => d.toLowerCase().includes(q));
    return matchesCategory && matchesSearch;
  });

  // Download official letter draft template
  const handleDownloadApplication = (prob: CampusProblemSolution) => {
    let content = `OFFICIAL COLLEGE APPLICATION DRAFT\n`;
    content += `Generated via CampusAI Help Desk\n`;
    content += `System Architect: ${PROJECT_DETAILS.developer} (Reg No: ${PROJECT_DETAILS.regNo})\n`;
    content += `Date: ${new Date().toLocaleDateString()}\n`;
    content += `===========================================================\n\n`;
    content += prob.applicationTemplate;
    content += `\n\n===========================================================\n`;
    content += `Mandatory Enclosures:\n`;
    prob.requiredDocs.forEach((doc, idx) => {
      content += `${idx + 1}. ${doc}\n`;
    });
    content += `\nOffice to Submit: ${prob.officeLocation}\n`;
    content += `Expected Turnaround: ${prob.timeline}\n`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Application_${prob.id}_${prob.category.replace(/[^a-zA-Z]/g, '')}.txt`;
    link.click();
    URL.revokeObjectURL(url);

    setDownloadNotice(prob.titleEn);
    setTimeout(() => setDownloadNotice(null), 3000);
  };

  const isOdia = language === 'or';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Title */}
      <div className="pb-6 border-b border-slate-800">
        <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
          <FileQuestion className="w-4 h-4 text-indigo-400" />
          <span>
            {isOdia
              ? 'ସମସ୍ତ କଲେଜ ସମସ୍ୟା ଓ ପ୍ରମାଣିତ ସମାଧାନ କୋଷ (15+ Real Issues)'
              : 'Master Campus Problem & Resolution Repository (15+ Real Issues)'}
          </span>
        </div>
        <h2 className="text-2xl font-bold font-display text-white mt-1">
          {isOdia
            ? 'କଲେଜ ଜୀବନର ସମସ୍ତ ସମସ୍ୟା, ସରକାରୀ ନିୟମ ଓ ସମାଧାନ ପଦକ୍ଷେପ'
            : 'Comprehensive Campus Issues, Regulations & Resolution Directory'}
        </h2>
        <p className="text-slate-400 text-sm mt-0.5">
          {isOdia
            ? 'ପ୍ରବେଶ ପତ୍ର ରୋକିବା, ସ୍କଲାରସିପ୍ ତ୍ରୁଟି, ଏସବିଆଇ କଲେକ୍ଟ ଫିସ୍, ନୋ-ଡ୍ୟୁସ୍ ଓ ଆଇ-କାର୍ଡ ପାଇଁ ଅଫିସିଆଲ୍ ଦରଖାସ୍ତ ଫର୍ମାଟ୍।'
            : 'Official protocols for attendance condonation, grade sheet typos, loan bonafide, PRERANA scholarships, and SBI Collect receipts.'}
        </p>
      </div>

      {/* Download Alert Notice */}
      {downloadNotice && (
        <div className="mt-4 p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 text-xs flex items-center gap-2 animate-in fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>
            Official application template for "<strong>{downloadNotice}</strong>" downloaded successfully!
          </span>
        </div>
      )}

      {/* Search and Category Filter */}
      <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Search */}
        <div className="relative w-full md:w-96">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={
              isOdia
                ? 'ସମସ୍ୟା ଖୋଜନ୍ତୁ (ଉପସ୍ଥାନ, ଫିସ୍, ସ୍କଲାରସିପ୍, ଲାଇବ୍ରେରୀ, ଆଇଡି)...'
                : 'Search issues (e.g. attendance, PRERANA, bonafide, ID card)...'
            }
            className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/30'
                  : 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Problems Stream */}
      <div className="mt-6 space-y-4">
        {filteredProblems.length === 0 ? (
          <div className="p-12 text-center rounded-2xl border border-slate-800 bg-slate-900/40 text-slate-400 text-xs">
            No specific circular found. Ask our <strong>AI College Help Desk</strong> for instant assistance!
          </div>
        ) : (
          filteredProblems.map((prob, idx) => {
            const isExpanded = expandedProblemId === prob.id;
            return (
              <div
                key={prob.id}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur-sm overflow-hidden transition-all shadow-md"
              >
                {/* Header */}
                <div
                  onClick={() => setExpandedProblemId(isExpanded ? null : prob.id)}
                  className="p-4 sm:p-5 flex items-start justify-between cursor-pointer hover:bg-slate-800/40 transition-colors"
                >
                  <div className="flex items-start gap-3.5 pr-4">
                    <span className="w-7 h-7 rounded-lg bg-indigo-950/80 text-indigo-400 border border-indigo-800/60 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-[10px] font-semibold text-indigo-300 bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-800/40">
                          {prob.category}
                        </span>
                        <span className="text-[11px] text-slate-400 flex items-center gap-1">
                          <Clock className="w-3 h-3 text-slate-500" />
                          <span>{prob.timeline}</span>
                        </span>
                        {prob.feeRequired && (
                          <span className="text-[10px] text-amber-300 bg-amber-950/40 px-1.5 py-0.5 rounded border border-amber-800/30">
                            {prob.feeRequired}
                          </span>
                        )}
                      </div>

                      <h3 className="text-base font-bold text-white leading-snug">
                        {isOdia ? prob.titleOr : prob.titleEn}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1">
                        {isOdia ? prob.problemDescOr : prob.problemDescEn}
                      </p>
                    </div>
                  </div>

                  <div className="p-1.5 rounded-lg text-slate-400 hover:text-white shrink-0 mt-1">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </div>

                {/* Expanded Resolution Details */}
                {isExpanded && (
                  <div className="px-5 pb-6 pt-2 border-t border-slate-800/70 text-xs text-slate-200 space-y-4">
                    {/* Step-by-Step Resolution */}
                    <div>
                      <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5 text-indigo-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>
                          {isOdia ? 'ପ୍ରମାଣିତ ସମାଧାନ ପଦକ୍ଷେପ (Step-by-Step Action Plan)' : 'Official Step-by-Step Resolution Protocol'}
                        </span>
                      </h4>
                      <ol className="space-y-2 pl-4 list-decimal marker:text-indigo-400 marker:font-bold">
                        {(isOdia ? prob.solutionStepsOr : prob.solutionStepsEn).map((step, sIdx) => (
                          <li key={sIdx} className="leading-relaxed pl-1 text-slate-300">
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>

                    {/* Required Documents Checklist */}
                    <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5 text-sky-400" />
                        <span>
                          {isOdia ? 'ଆବଶ୍ୟକୀୟ କାଗଜପତ୍ର (Mandatory Documents Checklist)' : 'Mandatory Documents & Enclosures'}
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                        {prob.requiredDocs.map((doc, dIdx) => (
                          <div key={dIdx} className="flex items-center gap-2 text-slate-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>
                            <span>{doc}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Meta info & Action Buttons */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-slate-800/60 text-[11px]">
                      <div className="flex items-center gap-2 text-slate-400">
                        <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>Location: <strong className="text-white">{prob.officeLocation}</strong></span>
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        {/* Download Application Template */}
                        <button
                          onClick={() => handleDownloadApplication(prob)}
                          className="px-3 py-1.5 rounded-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-500 flex items-center gap-1.5 transition-colors shadow-sm"
                          title="Download formal written application letter draft"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>
                            {isOdia ? 'ଦରଖାସ୍ତ ଫର୍ମାଟ୍ ଡାଉନଲୋଡ୍ (Download Draft)' : 'Download Application Draft'}
                          </span>
                        </button>

                        {/* Ask in Chat */}
                        <button
                          onClick={() => onAskInChat(isOdia ? prob.titleOr : prob.titleEn, prob.category)}
                          className="px-3 py-1.5 rounded-lg font-semibold text-indigo-300 bg-indigo-950/60 border border-indigo-800/40 hover:bg-indigo-900/60 flex items-center gap-1.5 transition-colors"
                        >
                          <MessageSquare className="w-3.5 h-3.5 text-indigo-400" />
                          <span>{isOdia ? 'AI ରେ ପଚାରନ୍ତୁ' : 'Ask AI'}</span>
                        </button>

                        {/* Raise Ticket */}
                        <button
                          onClick={() => onRaiseTicketForProblem(
                            prob.titleEn,
                            `Reporting institutional issue: ${prob.titleEn} (${prob.officeLocation})`,
                            prob.category
                          )}
                          className="px-3 py-1.5 rounded-lg font-semibold text-sky-300 bg-sky-950/40 border border-sky-800/40 hover:bg-sky-900/50 flex items-center gap-1.5 transition-colors"
                        >
                          <TicketPlus className="w-3.5 h-3.5 text-sky-400" />
                          <span>{isOdia ? 'ଟିକେଟ୍ ଦାଖଲ' : 'Raise Ticket'}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
