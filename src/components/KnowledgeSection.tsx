import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  ChevronDown, 
  ChevronUp, 
  MapPin, 
  FileText, 
  User, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { CAMPUS_FAQS, PROJECT_DETAILS } from '../data/campusData';
import { FAQItem } from '../types';

interface KnowledgeSectionProps {
  onAskInChat: (query: string, category: string) => void;
}

export const KnowledgeSection: React.FC<KnowledgeSectionProps> = ({ onAskInChat }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [expandedId, setExpandedId] = useState<string | null>('faq-1');

  const categories = ['All', 'Academics', 'Examinations', 'Hostel & Mess', 'Fees & Accounts', 'Placements', 'Scholarships'];

  const filteredFaqs = CAMPUS_FAQS.filter((faq) => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (faq.officialRef && faq.officialRef.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Title */}
      <div className="pb-6 border-b border-slate-800">
        <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
          <BookOpen className="w-4 h-4 text-indigo-400" />
          <span>Verified Institutional Knowledge Repository</span>
        </div>
        <h2 className="text-2xl font-bold font-display text-white mt-1">
          Campus Policies, Circulars & FAQ Directory
        </h2>
        <p className="text-slate-400 text-sm mt-0.5">
          Official regulatory guidelines approved by the Academic Council, Examination Wing, and Student Welfare Board.
        </p>
      </div>

      {/* Search and Category Filter Bar */}
      <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative w-full md:w-96">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search rules (e.g. 75% attendance, backlog, curfew, SBI)..."
            className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500"
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/30'
                  : 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* FAQ Accordion List */}
      <div className="mt-6 space-y-3">
        {filteredFaqs.length === 0 ? (
          <div className="p-12 text-center rounded-2xl border border-slate-800 bg-slate-900/40 text-slate-400 text-xs">
            No circulars or FAQs found matching your criteria. Try asking our <strong>AI Help Desk</strong>!
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isExpanded = expandedId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur-sm overflow-hidden transition-all"
              >
                <div
                  onClick={() => setExpandedId(isExpanded ? null : faq.id)}
                  className="p-4 sm:p-5 flex items-center justify-between cursor-pointer hover:bg-slate-800/40 transition-colors"
                >
                  <div className="flex items-center gap-3 pr-4">
                    <span className="text-[11px] font-semibold text-indigo-400 bg-indigo-950/60 px-2.5 py-0.5 rounded-md border border-indigo-800/40 shrink-0">
                      {faq.category}
                    </span>
                    <h3 className="text-sm sm:text-base font-semibold text-white">
                      {faq.question}
                    </h3>
                  </div>

                  <div className="p-1 rounded-lg text-slate-400 hover:text-white shrink-0">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </div>

                {isExpanded && (
                  <div className="px-4 pb-5 sm:px-5 pt-1 border-t border-slate-800/60 text-xs text-slate-300 space-y-3">
                    <p className="leading-relaxed text-sm text-slate-200">
                      {faq.answer}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2 border-t border-slate-800/60 text-[11px]">
                      {faq.officialRef && (
                        <div className="flex items-center gap-1.5 text-slate-400">
                          <FileText className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                          <span className="truncate">{faq.officialRef}</span>
                        </div>
                      )}

                      {faq.officeLocation && (
                        <div className="flex items-center gap-1.5 text-slate-400">
                          <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span className="truncate">{faq.officeLocation}</span>
                        </div>
                      )}

                      {faq.contactPerson && (
                        <div className="flex items-center gap-1.5 text-slate-400">
                          <User className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                          <span className="truncate">{faq.contactPerson}</span>
                        </div>
                      )}
                    </div>

                    <div className="pt-2 flex justify-end">
                      <button
                        onClick={() => onAskInChat(faq.question, faq.category)}
                        className="px-3 py-1.5 rounded-lg text-xs font-semibold text-indigo-300 bg-indigo-950/60 border border-indigo-800/40 hover:bg-indigo-900/60 flex items-center gap-1.5 transition-colors"
                      >
                        <MessageSquare className="w-3 h-3 text-indigo-400" />
                        <span>Discuss this with AI Assistant</span>
                      </button>
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
