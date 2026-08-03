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
    const subject = encodeURIComponent(`Architecture Quote Request: ${formData.service}`);
    const body = encodeURIComponent(
      `Full Name: ${formData.name}\n` +
      `Work Email: ${formData.email}\n` +
      `Phone Number: ${formData.phone}\n` +
      `Selected Service: ${formData.service}\n` +
      `Budget Range: ${formData.budget}\n` +
      `Timeline: ${formData.timeline}\n\n` +
      `Project Brief / Notes:\n${formData.notes}`
    );
    window.location.href = `mailto:logicspheretech@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0E0E10]/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#1F2229] border border-white/10 shadow-2xl p-6 sm:p-10 text-left animate-in zoom-in-95 duration-200 font-body text-[#F4F4F5]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full border border-white/10 text-[#A1A1AA] hover:text-[#F4F4F5] bg-[#2A2E36] transition-colors"
          aria-label="Close quote modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-12 space-y-5">
            <div className="w-16 h-16 rounded-2xl bg-[#C6A15B] text-[#0E0E10] mx-auto flex items-center justify-center shadow-lg">
              <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-[#F4F4F5]">Consultation Booked</h3>
            <p className="text-sm text-[#A1A1AA] max-w-sm mx-auto leading-relaxed">
              We have dispatched your project specification to our Principal Systems Architect. Expect a bespoke proposal for <strong className="text-[#C6A15B]">{formData.service}</strong> via email within 4 hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="executive-btn-primary px-7 py-3 text-xs font-semibold uppercase tracking-wider shadow-md"
            >
              Back to LOGICSPHERE TECH
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#2A2E36] text-[#C6A15B] border border-white/10 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" /> PRIORITY ENGINEERING DESK
              </span>
              <h3 className="text-2xl font-bold font-heading text-[#F4F4F5]">
                Request Free Architecture Quote
              </h3>
              <p className="text-xs text-[#A1A1AA] mt-1 font-mono">
                Receive an accurate architecture roadmap and sprint estimate within 4 hours.
              </p>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#A1A1AA] mb-1.5">
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="Alex Johnson"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#0E0E10] border border-white/10 text-[#F4F4F5] placeholder-[#A1A1AA] text-sm focus:outline-none focus:border-[#C6A15B]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#A1A1AA] mb-1.5">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#0E0E10] border border-white/10 text-[#F4F4F5] placeholder-[#A1A1AA] text-sm focus:outline-none focus:border-[#C6A15B]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#A1A1AA] mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+1 (415) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#0E0E10] border border-white/10 text-[#F4F4F5] placeholder-[#A1A1AA] text-sm focus:outline-none focus:border-[#C6A15B]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#A1A1AA] mb-1.5">
                  Primary Service
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#0E0E10] border border-white/10 text-[#F4F4F5] text-sm focus:outline-none focus:border-[#C6A15B]"
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
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#A1A1AA] mb-1.5">
                  Target Sprint Budget
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#0E0E10] border border-white/10 text-[#F4F4F5] text-sm focus:outline-none focus:border-[#C6A15B]"
                >
                  <option value="<$15,000">&lt; $15,000</option>
                  <option value="$15k - $35k">$15,000 - $35,000</option>
                  <option value="$35k - $75k">$35,000 - $75,000</option>
                  <option value="$75k+">$75,000+ (Enterprise Custom)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#A1A1AA] mb-1.5">
                Key Objectives & Deliverables
              </label>
              <textarea
                rows={3}
                placeholder="Summarize your product vision, expected user volume, or reference architectures..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#0E0E10] border border-white/10 text-[#F4F4F5] placeholder-[#A1A1AA] text-sm focus:outline-none focus:border-[#C6A15B]"
              />
            </div>

            <button
              type="submit"
              className="executive-btn-primary w-full py-4 text-xs font-semibold uppercase tracking-wider shadow-md"
            >
              Request Priority Architecture Review
            </button>

            <div className="flex items-center justify-between text-xs text-[#A1A1AA] pt-1 font-mono">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#C6A15B]" /> 4-Hr Guaranteed Response
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C6A15B]" /> NDA Covered
              </span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
