import React from 'react';
import { X, PhoneCall, ShieldAlert, HeartPulse, Shield, AlertTriangle } from 'lucide-react';
import { EMERGENCY_CONTACTS, PROJECT_DETAILS } from '../data/campusData';

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EmergencyModal: React.FC<EmergencyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-lg rounded-2xl border border-rose-900/50 bg-slate-900 p-6 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
          <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 shrink-0">
            <PhoneCall className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Campus Emergency & SOS Directory</h3>
            <p className="text-xs text-rose-300 font-medium">Immediate Assistance & Urgent Redressal Helplines</p>
          </div>
        </div>

        {/* Contacts List */}
        <div className="mt-4 space-y-3 max-h-[420px] overflow-y-auto pr-1">
          {EMERGENCY_CONTACTS.map((c, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 hover:border-rose-900/60 transition-colors flex items-center justify-between gap-3 text-xs"
            >
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-white">{c.name}</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20 font-medium">
                    {c.timing}
                  </span>
                </div>
                <p className="text-slate-400 text-[11px] mt-0.5">{c.desc}</p>
              </div>

              <a
                href={`tel:${c.number.replace(/[^0-9+]/g, '')}`}
                className="shrink-0 px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-mono font-bold text-xs flex items-center gap-1.5 shadow-sm transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>{c.number}</span>
              </a>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400 text-center">
          Campus Help Desk Emergency Dispatch · Managed by Student Affairs & Campus Security
        </div>
      </div>
    </div>
  );
};
