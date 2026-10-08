import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Clock, 
  CheckCircle2, 
  Users, 
  Activity, 
  Cpu, 
  Monitor
} from 'lucide-react';
import { PROJECT_DETAILS } from '../data/campusData';

export const AnalyticsSection: React.FC = () => {
  const [stats, setStats] = useState({
    totalQueriesHandled: 14892,
    activeTicketsCount: 2,
    resolvedTicketsCount: 1,
    averageResolutionHours: 28.4,
    studentSatisfactionRate: 98.6
  });

  const departmentBreakdown = [
    { name: 'Academics & Attendance', percentage: 38, queries: 5658, color: 'bg-indigo-500' },
    { name: 'Examinations & Grades', percentage: 26, queries: 3871, color: 'bg-violet-500' },
    { name: 'Fees & SBI Collect', percentage: 16, queries: 2382, color: 'bg-sky-500' },
    { name: 'Hostel & Mess Life', percentage: 12, queries: 1787, color: 'bg-emerald-500' },
    { name: 'Placements & Internships', percentage: 8, queries: 1194, color: 'bg-amber-500' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Title */}
      <div className="pb-6 border-b border-slate-800">
        <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
          <BarChart3 className="w-4 h-4 text-indigo-400" />
          <span>Institutional Query Telemetry & Help Desk Insights</span>
        </div>
        <h2 className="text-2xl font-bold font-display text-white mt-1">
          Campus Service Analytics & Operational Dashboard
        </h2>
        <p className="text-slate-400 text-sm mt-0.5">
          Illustrative project metrics only; this frontend does not collect or report campus-wide telemetry.
        </p>
      </div>

      {/* KPI Metric Cards */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-sm">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>Total Queries Processed</span>
            <Activity className="w-4 h-4 text-indigo-400" />
          </div>
          <div className="text-3xl font-display font-extrabold text-white mt-2">
            {stats.totalQueriesHandled.toLocaleString()}
          </div>
          <div className="mt-1 text-[11px] text-emerald-400 flex items-center gap-1">
            <TrendingUp className="w-3 h-3" />
            <span>+14.2% this examination cycle</span>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-sm">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>Student Satisfaction</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-3xl font-display font-extrabold text-emerald-400 mt-2">
            {stats.studentSatisfactionRate}%
          </div>
          <div className="mt-1 text-[11px] text-slate-400">
            Based on student feedback ratings
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-sm">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>Avg Grievance Redressal</span>
            <Clock className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-3xl font-display font-extrabold text-white mt-2">
            {stats.averageResolutionHours}h
          </div>
          <div className="mt-1 text-[11px] text-slate-400">
            Target SLA: &lt; 48 hours
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-sm">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>AI Model Engine</span>
            <Cpu className="w-4 h-4 text-violet-400" />
          </div>
          <div className="text-xl font-bold font-display text-white mt-2">
            Gemini 2.5 Flash
          </div>
          <div className="mt-1 text-[11px] text-indigo-300 font-mono">
            Latency ~0.42s · 99.9% uptime
          </div>
        </div>
      </div>

      {/* Main Analytics Content */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Department Inquiry Breakdown */}
        <div className="lg:col-span-7 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm">
          <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
            <Users className="w-5 h-5 text-indigo-400" />
            <span>Campus Query Volume by Department</span>
          </h3>
          <p className="text-xs text-slate-400 mb-6">
            Distribution of questions received by category during the current semester.
          </p>

          <div className="space-y-4">
            {departmentBreakdown.map((dept, idx) => (
              <div key={idx} className="space-y-1.5 text-xs">
                <div className="flex justify-between items-center text-slate-300">
                  <span className="font-semibold">{dept.name}</span>
                  <span className="text-slate-400 font-mono">
                    {dept.queries.toLocaleString()} inquiries ({dept.percentage}%)
                  </span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-slate-950 overflow-hidden border border-slate-800/80">
                  <div
                    className={`h-full rounded-full ${dept.color}`}
                    style={{ width: `${dept.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs text-slate-300 leading-relaxed">
            <strong className="text-white">Trend Analysis:</strong> Academics and Examination inquiries comprise over 64% of total queries, with noticeable spikes preceding semester registration and hall ticket deadlines.
          </div>
        </div>

        {/* System Health & Academic Verification Card */}
        <div className="lg:col-span-5 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm">
          <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
            <Monitor className="w-5 h-5 text-emerald-400" />
            <span>Frontend Runtime & Data Handling</span>
          </h3>
          <p className="text-xs text-slate-400 mb-6">
            Client-side integrations and browser-local data storage.
          </p>

          <div className="space-y-3 text-xs">
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-slate-300">Gemini API Integration</span>
              <span className="text-amber-300 font-mono font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-300"></span>
                Browser key required
              </span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-slate-300">Google Gemini LLM Subsystem</span>
              <span className="text-indigo-400 font-mono font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                gemini-2.5-flash (Streaming)
              </span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-slate-300">Support Ticket Storage</span>
              <span className="text-amber-300 font-mono font-semibold">
                This browser only
              </span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-slate-300">Application Architecture</span>
              <span className="text-emerald-400 font-mono font-semibold">
                Frontend only
              </span>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400">
            <div>Project Lead: <strong className="text-white">{PROJECT_DETAILS.developer}</strong></div>
            <div>University Reg No: <span className="text-indigo-300 font-mono font-semibold">{PROJECT_DETAILS.regNo}</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};
