import React, { useState, useEffect } from 'react';
import { 
  TicketCheck, 
  PlusCircle, 
  Search, 
  AlertCircle, 
  Clock, 
  CheckCircle2, 
  ShieldAlert, 
  ArrowRight, 
  User, 
  Building2,
  FileText,
  Filter
} from 'lucide-react';
import { SupportTicket } from '../types';
import { PROJECT_DETAILS } from '../data/campusData';

interface TicketSectionProps {
  initialTicketData?: { subject: string; description: string; category: string } | null;
  onClearInitialData?: () => void;
}

const TICKET_STORAGE_KEY = 'campusai-support-tickets';

function isSupportTicket(value: unknown): value is SupportTicket {
  if (typeof value !== 'object' || value === null) return false;
  const ticket = value as Record<string, unknown>;
  const textFields = [
    'id', 'studentName', 'regNo', 'department', 'category',
    'subject', 'description', 'status', 'createdAt', 'assignedTo'
  ];

  return textFields.every((field) => typeof ticket[field] === 'string')
    && ['Low', 'Medium', 'High', 'Urgent'].includes(String(ticket.priority))
    && ['Submitted', 'Under Review', 'In Progress', 'Resolved'].includes(String(ticket.status));
}

function loadTickets(): SupportTicket[] {
  try {
    const storedTickets = localStorage.getItem(TICKET_STORAGE_KEY);
    if (!storedTickets) return [];

    const parsed: unknown = JSON.parse(storedTickets);
    if (!Array.isArray(parsed)) throw new Error('Saved support tickets are not a list.');
    const validTickets = parsed.filter(isSupportTicket);
    if (validTickets.length !== parsed.length) {
      console.warn('Ignored malformed saved support ticket records.');
    }
    return validTickets;
  } catch (error) {
    console.error('Failed to load saved support tickets:', error);
    return [];
  }
}

export const TicketSection: React.FC<TicketSectionProps> = ({ 
  initialTicketData, 
  onClearInitialData 
}) => {
  const [tickets, setTickets] = useState<SupportTicket[]>(loadTickets);
  const [activeView, setActiveView] = useState<'track' | 'raise'>('track');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTicket, setSelectedTicket] = useState<SupportTicket | null>(null);

  // Form states for raising a new ticket
  const [formName, setFormName] = useState('Jagannath Mohapatra');
  const [formRegNo, setFormRegNo] = useState(PROJECT_DETAILS.regNo);
  const [formDept, setFormDept] = useState('Computer Science & Engineering');
  const [formCategory, setFormCategory] = useState('Academics');
  const [formPriority, setFormPriority] = useState<'Low' | 'Medium' | 'High' | 'Urgent'>('High');
  const [formSubject, setFormSubject] = useState('');
  const [formDesc, setFormDesc] = useState('');
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);

  useEffect(() => {
    if (!selectedTicket && tickets.length > 0) {
      setSelectedTicket(tickets[0]);
    }
  }, [selectedTicket, tickets]);

  // Pre-fill form if redirected from Chat escalation
  useEffect(() => {
    if (initialTicketData) {
      setActiveView('raise');
      if (initialTicketData.subject) setFormSubject(initialTicketData.subject);
      if (initialTicketData.description) setFormDesc(initialTicketData.description);
      if (initialTicketData.category) setFormCategory(initialTicketData.category);
      if (onClearInitialData) onClearInitialData();
    }
  }, [initialTicketData]);

  // Handle new ticket submission
  const handleSubmitTicket = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formRegNo.trim() || !formSubject.trim() || !formDesc.trim()) {
      alert("Please fill in all mandatory fields.");
      return;
    }

    setFormSubmitting(true);
    setSubmitSuccess(null);

    try {
      const newTicketId = `TKT-${new Date().getFullYear()}-${formDept.slice(0, 2).toUpperCase()}-${crypto.randomUUID().slice(0, 8).toUpperCase()}`;
      let assignedTo = 'General Dean Office';
      if (formCategory === 'Academics') assignedTo = 'Dean of Academic Affairs';
      else if (formCategory === 'Examinations') assignedTo = 'Controller of Examinations (CoE)';
      else if (formCategory === 'Hostel & Mess') assignedTo = 'Chief Hostel Warden & Caretaker';
      else if (formCategory === 'Fees & Accounts') assignedTo = 'Accounts Section / Finance Officer';
      else if (formCategory === 'Placements') assignedTo = 'Training & Placement Officer (TPO)';

      const newTicket: SupportTicket = {
        id: newTicketId,
        studentName: formName.trim(),
        regNo: formRegNo.trim(),
        department: formDept,
        category: formCategory,
        priority: formPriority,
        subject: formSubject.trim(),
        description: formDesc.trim(),
        status: 'Submitted',
        createdAt: new Date().toLocaleString(),
        assignedTo
      };
      const updatedTickets = [newTicket, ...tickets];
      localStorage.setItem(TICKET_STORAGE_KEY, JSON.stringify(updatedTickets));
      setSubmitSuccess(newTicket.id);
      setTickets(updatedTickets);
      setSelectedTicket(newTicket);
      setFormSubject('');
      setFormDesc('');
      setTimeout(() => {
        setActiveView('track');
      }, 1500);
    } catch (err) {
      console.error('Unable to save support ticket in browser storage:', err);
      alert('Unable to save this ticket in browser storage. Check your browser storage settings and try again.');
    } finally {
      setFormSubmitting(false);
    }
  };

  // Filtered tickets
  const filteredTickets = tickets.filter((t) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      t.id.toLowerCase().includes(q) ||
      t.regNo.toLowerCase().includes(q) ||
      t.studentName.toLowerCase().includes(q) ||
      t.subject.toLowerCase().includes(q) ||
      t.category.toLowerCase().includes(q)
    );
  });

  const getStatusBadge = (status: SupportTicket['status']) => {
    switch (status) {
      case 'Submitted':
        return <span className="px-2 py-0.5 rounded text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20">Submitted</span>;
      case 'Under Review':
        return <span className="px-2 py-0.5 rounded text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">Under Review</span>;
      case 'In Progress':
        return <span className="px-2 py-0.5 rounded text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">In Progress</span>;
      case 'Resolved':
        return <span className="px-2 py-0.5 rounded text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Resolved</span>;
    }
  };

  const getPriorityBadge = (priority: SupportTicket['priority']) => {
    switch (priority) {
      case 'Urgent':
        return <span className="text-[11px] font-bold text-rose-400">● Urgent</span>;
      case 'High':
        return <span className="text-[11px] font-semibold text-amber-400">● High</span>;
      case 'Medium':
        return <span className="text-[11px] font-medium text-sky-400">● Medium</span>;
      case 'Low':
        return <span className="text-[11px] text-slate-400">● Low</span>;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header and Switcher */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <TicketCheck className="w-4 h-4 text-indigo-400" />
            <span>Local Demo Support Desk</span>
          </div>
          <h2 className="text-2xl font-bold font-display text-white mt-1">
            Student Support & Grievance Tickets
          </h2>
          <p className="text-slate-400 text-sm mt-0.5">
            Create and track demo support tickets saved only in this browser.
          </p>
        </div>

        {/* View Switcher Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch gap-2 bg-slate-900 p-1.5 rounded-xl border border-slate-800">
          <button
            onClick={() => setActiveView('track')}
            className={`flex-1 justify-center px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all ${
              activeView === 'track'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Search className="w-3.5 h-3.5" />
            <span>Track & Manage Tickets</span>
          </button>
          <button
            onClick={() => setActiveView('raise')}
            className={`flex-1 justify-center px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all ${
              activeView === 'raise'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <PlusCircle className="w-3.5 h-3.5" />
            <span>Raise New Ticket</span>
          </button>
        </div>
      </div>

      <p className="mt-4 rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-xs leading-relaxed text-amber-200">
        Tickets are stored locally on this device and are not submitted to or visible to college administration.
      </p>

      {/* TRACK TICKETS VIEW */}
      {activeView === 'track' && (
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Ticket List */}
          <div className="lg:col-span-5 space-y-3">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search your locally saved tickets..."
                className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500"
              />
            </div>

            {/* Ticket Cards Stream */}
            <div className="space-y-2.5 max-h-[550px] overflow-y-auto pr-1">
              {filteredTickets.length === 0 ? (
                <div className="p-8 text-center rounded-xl border border-slate-800/80 bg-slate-900/40 text-slate-400 text-xs">
                  No tickets found matching "{searchQuery}".
                </div>
              ) : (
                filteredTickets.map((t) => {
                  const isSelected = selectedTicket?.id === t.id;
                  return (
                    <div
                      key={t.id}
                      onClick={() => setSelectedTicket(t)}
                      className={`p-4 rounded-xl border cursor-pointer transition-all ${
                        isSelected
                          ? 'bg-indigo-950/40 border-indigo-500/60 shadow-md shadow-indigo-900/20'
                          : 'bg-slate-900/50 border-slate-800/80 hover:bg-slate-900 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-mono text-xs font-semibold text-indigo-300">
                          {t.id}
                        </span>
                        {getStatusBadge(t.status)}
                      </div>

                      <h4 className="text-sm font-semibold text-white line-clamp-1">
                        {t.subject}
                      </h4>

                      <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                        {t.description}
                      </p>

                      <div className="mt-3 flex items-center justify-between pt-2 border-t border-slate-800/60 text-[11px]">
                        <span className="text-slate-400">{t.studentName} ({t.regNo})</span>
                        {getPriorityBadge(t.priority)}
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>

          {/* Right Column: Ticket Detail & Status Stepper */}
          <div className="lg:col-span-7">
            {selectedTicket ? (
              <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 backdrop-blur-sm">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-800">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-sm text-indigo-400">
                        {selectedTicket.id}
                      </span>
                      {getStatusBadge(selectedTicket.status)}
                      {getPriorityBadge(selectedTicket.priority)}
                    </div>
                    <h3 className="text-xl font-bold text-white mt-1">
                      {selectedTicket.subject}
                    </h3>
                  </div>

                  <div className="text-right text-xs text-slate-400">
                    <div>Logged on:</div>
                    <div className="text-slate-300 font-medium">{selectedTicket.createdAt}</div>
                  </div>
                </div>

                {/* Lifecycle Progress Stepper */}
                <div className="py-6 border-b border-slate-800">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                    Grievance Resolution Lifecycle
                  </div>

                  <div className="grid grid-cols-4 gap-2 text-center text-xs">
                    {/* Step 1 */}
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center font-bold mb-1">
                        ✓
                      </div>
                      <span className="font-semibold text-white">Submitted</span>
                      <span className="text-[10px] text-slate-400">Logged on portal</span>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold mb-1 ${
                        selectedTicket.status !== 'Submitted' 
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' 
                          : 'bg-slate-800 text-slate-400 border border-slate-700'
                      }`}>
                        {selectedTicket.status !== 'Submitted' ? '✓' : '2'}
                      </div>
                      <span className={`font-semibold ${selectedTicket.status !== 'Submitted' ? 'text-white' : 'text-slate-400'}`}>
                        Under Review
                      </span>
                      <span className="text-[10px] text-slate-400">Department triaged</span>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold mb-1 ${
                        selectedTicket.status === 'In Progress' || selectedTicket.status === 'Resolved'
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                          : 'bg-slate-800 text-slate-400 border border-slate-700'
                      }`}>
                        {selectedTicket.status === 'Resolved' ? '✓' : '3'}
                      </div>
                      <span className={`font-semibold ${selectedTicket.status === 'In Progress' || selectedTicket.status === 'Resolved' ? 'text-white' : 'text-slate-400'}`}>
                        In Progress
                      </span>
                      <span className="text-[10px] text-slate-400">Action underway</span>
                    </div>

                    {/* Step 4 */}
                    <div className="flex flex-col items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold mb-1 ${
                        selectedTicket.status === 'Resolved'
                          ? 'bg-emerald-500 text-slate-950 font-bold'
                          : 'bg-slate-800 text-slate-400 border border-slate-700'
                      }`}>
                        {selectedTicket.status === 'Resolved' ? '✓' : '4'}
                      </div>
                      <span className={`font-semibold ${selectedTicket.status === 'Resolved' ? 'text-emerald-400' : 'text-slate-400'}`}>
                        Resolved
                      </span>
                      <span className="text-[10px] text-slate-400">Redressal complete</span>
                    </div>
                  </div>
                </div>

                {/* Ticket Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 border-b border-slate-800 text-xs">
                  <div>
                    <span className="text-slate-400">Student Name:</span>
                    <p className="font-semibold text-white mt-0.5">{selectedTicket.studentName}</p>
                  </div>
                  <div>
                    <span className="text-slate-400">Registration Number:</span>
                    <p className="font-semibold font-mono text-indigo-300 mt-0.5">{selectedTicket.regNo}</p>
                  </div>
                  <div>
                    <span className="text-slate-400">Academic Department:</span>
                    <p className="font-semibold text-white mt-0.5">{selectedTicket.department}</p>
                  </div>
                  <div>
                    <span className="text-slate-400">Suggested Campus Office:</span>
                    <p className="font-semibold text-emerald-400 mt-0.5">{selectedTicket.assignedTo}</p>
                  </div>
                </div>

                {/* Grievance Description */}
                <div className="py-4 border-b border-slate-800">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Detailed Statement of Grievance
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-sm leading-relaxed whitespace-pre-wrap">
                    {selectedTicket.description}
                  </div>
                </div>

                {/* Ticket notes */}
                <div className="pt-4">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Ticket Notes</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-800/40 text-emerald-200 text-xs leading-relaxed">
                    {selectedTicket.resolutionNotes || "This demo ticket is stored only in this browser. It has not been submitted to a department."}
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-12 text-center rounded-2xl border border-slate-800 bg-slate-900/40 text-slate-400">
                Select a locally saved ticket to inspect its details.
              </div>
            )}
          </div>
        </div>
      )}

      {/* RAISE NEW TICKET VIEW */}
      {activeView === 'raise' && (
        <div className="mt-6 max-w-3xl mx-auto">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 sm:p-8 backdrop-blur-sm shadow-xl">
            <h3 className="text-xl font-bold font-display text-white mb-2">
              Create a Demo Support Ticket
            </h3>
            <p className="text-slate-300 text-xs mb-6">
              Demo tickets are saved on this device only and are not routed to a department.
            </p>

            {submitSuccess && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-950/50 border border-emerald-500/40 text-emerald-200 text-sm flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <strong>Ticket Saved Locally!</strong> Ticket ID: <span className="font-mono font-bold text-white">{submitSuccess}</span>. Redirecting to tracking view...
                </div>
              </div>
            )}

            <form onSubmit={handleSubmitTicket} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-300 mb-1">
                    Student Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-300 mb-1">
                    University Registration Number *
                  </label>
                  <input
                    type="text"
                    required
                    value={formRegNo}
                    onChange={(e) => setFormRegNo(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 font-mono focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block font-semibold text-slate-300 mb-1">
                    Department *
                  </label>
                  <select
                    value={formDept}
                    onChange={(e) => setFormDept(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-indigo-500"
                  >
                    <option value="Computer Science & Engineering">Computer Science & Engg</option>
                    <option value="Information Technology">Information Technology</option>
                    <option value="Electronics & Communication">Electronics & Comm</option>
                    <option value="Mechanical Engineering">Mechanical Engineering</option>
                    <option value="Civil Engineering">Civil Engineering</option>
                    <option value="Electrical Engineering">Electrical Engineering</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-300 mb-1">
                    Grievance Category *
                  </label>
                  <select
                    value={formCategory}
                    onChange={(e) => setFormCategory(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-indigo-500"
                  >
                    <option value="Academics">Academics & Attendance</option>
                    <option value="Examinations">Examinations & Grade Sheet</option>
                    <option value="Hostel & Mess">Hostel, Wi-Fi & Mess</option>
                    <option value="Fees & Accounts">Fees & SBI Collect</option>
                    <option value="Placements">Placements & NOC</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-300 mb-1">
                    Priority Level *
                  </label>
                  <select
                    value={formPriority}
                    onChange={(e) => setFormPriority(e.target.value as any)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-indigo-500"
                  >
                    <option value="Low">Low (General Inquiry)</option>
                    <option value="Medium">Medium (Standard Request)</option>
                    <option value="High">High (Impacting Classes/Exams)</option>
                    <option value="Urgent">Urgent (Deadlines within 24h)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-300 mb-1">
                  Subject / Brief Summary *
                </label>
                <input
                  type="text"
                  required
                  value={formSubject}
                  onChange={(e) => setFormSubject(e.target.value)}
                  placeholder="e.g., Condonation of 68% attendance due to typhoid hospitalization"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-300 mb-1">
                  Detailed Explanation of the Issue *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formDesc}
                  onChange={(e) => setFormDesc(e.target.value)}
                  placeholder="Specify all relevant details, semester, course code, dates, and previous applications submitted to the academic office..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">
                  A local demo ticket receipt is generated on this device.
                </span>

                <button
                  type="submit"
                  disabled={formSubmitting}
                  className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-semibold text-xs flex items-center gap-2 shadow-md shadow-indigo-600/30 transition-all"
                >
                  <TicketCheck className="w-4 h-4" />
                  <span>{formSubmitting ? 'Saving...' : 'Save Ticket'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
