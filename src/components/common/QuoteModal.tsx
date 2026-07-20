'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, Sparkles, ShieldCheck, Clock } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  initialService?: string;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  initialService = 'Website Development',
  onClose,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: initialService,
    budget: '$25k - $60k',
    timeline: '2 - 4 Weeks',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const [prevInitialService, setPrevInitialService] = useState(initialService);
  if (initialService !== prevInitialService) {
    setPrevInitialService(initialService);
    setFormData((prev) => ({ ...prev, service: initialService }));
  }

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#343e39] border border-[#116466]/40 shadow-2xl p-6 sm:p-10 text-left animate-in zoom-in-95 duration-200 shadow-[#116466]/20"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-[#D1E8E2]/5 hover:bg-[#116466]/20 text-slate-400 hover:text-[#116466] transition-colors border border-[#D1E8E2]/10"
          aria-label="Close quote modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-12 space-y-5">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FFCB9A] via-[#116466] to-[#D9B08C] mx-auto flex items-center justify-center shadow-xl shadow-[#116466]/30">
              <CheckCircle2 className="w-8 h-8 text-slate-950 stroke-[2.5]" />
            </div>
            <h3 className="text-2xl font-black text-[#D1E8E2]">Consultation Booked</h3>
            <p className="text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
              We have dispatched your project specification to our Principal Systems Architect. Expect a bespoke proposal for <strong className="text-[#116466]">{formData.service}</strong> via email within 4 hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-7 py-3 rounded-xl bg-gradient-to-r from-[#FFCB9A] via-[#116466] to-[#D9B08C] text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-[#116466]/30"
            >
              Back to LOGICSPHERE TECH
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-[#116466]/15 text-[#116466] border border-[#116466]/40 mb-2 shadow-inner">
                <Sparkles className="w-3.5 h-3.5" /> PRIORITY ENGINEERING DESK
              </span>
              <h3 className="text-2xl font-black text-[#D1E8E2]">
                Request Free Architecture Quote
              </h3>
              <p className="text-xs text-slate-400 mt-1 font-mono">
                Receive an accurate architecture roadmap and sprint estimate within 4 hours.
              </p>
            </div>

            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="Alex Johnson"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#2C3531] border border-[#D1E8E2]/10 text-[#D1E8E2] text-sm focus:outline-none focus:border-[#116466] font-mono"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#2C3531] border border-[#D1E8E2]/10 text-[#D1E8E2] text-sm focus:outline-none focus:border-[#116466] font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+1 (415) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#2C3531] border border-[#D1E8E2]/10 text-[#D1E8E2] text-sm focus:outline-none focus:border-[#116466] font-mono"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Primary Service
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#2C3531] border border-[#D1E8E2]/10 text-[#D1E8E2] text-sm focus:outline-none focus:border-[#116466] font-mono"
                >
                  <option value="Website Development">Website Development</option>
                  <option value="Web Applications">Web Applications</option>
                  <option value="Mobile App Development">Mobile App Development</option>
                  <option value="AI Solutions & RAG">AI Solutions & RAG</option>
                  <option value="SaaS Development">SaaS Development</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Cloud Solutions & DevOps">Cloud Solutions & DevOps</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Target Sprint Budget
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#2C3531] border border-[#D1E8E2]/10 text-[#D1E8E2] text-sm focus:outline-none focus:border-[#116466] font-mono"
                >
                  <option value="<$15,000">&lt; $15,000</option>
                  <option value="$15k - $35k">$15,000 - $35,000</option>
                  <option value="$35k - $75k">$35,000 - $75,000</option>
                  <option value="$75k+">$75,000+ (Enterprise Custom)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                Key Objectives & Deliverables
              </label>
              <textarea
                rows={3}
                placeholder="Summarize your product vision, expected user volume, or reference architectures..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#2C3531] border border-[#D1E8E2]/10 text-[#D1E8E2] text-sm focus:outline-none focus:border-[#116466] font-mono"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-[#FFCB9A] via-[#116466] to-[#D9B08C] hover:opacity-95 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-[#116466]/30 transition-all font-mono"
            >
              Request Priority Architecture Review
            </button>

            <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1 font-mono">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#116466]" /> 4-Hr Guaranteed Response
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#116466]" /> NDA Covered
              </span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
