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
    budget: '$1,000–$5,000',
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B0D12]/90 backdrop-blur-xl animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#1B2330] border border-[#B88A44]/30 shadow-2xl p-6 sm:p-10 text-left animate-in zoom-in-95 duration-200 font-body text-[#F5F1EA]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full border border-[#B88A44]/20 text-[#B9B4AA] hover:text-[#F5F1EA] bg-[#252D3D] transition-all hover:border-[#B88A44]"
          aria-label="Close quote modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-12 space-y-5">
            <div className="w-16 h-16 rounded-full bg-[#B88A44] text-[#0B0D12] mx-auto flex items-center justify-center shadow-lg">
              <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-[#F5F1EA]">Consultation Dispatched</h3>
            <p className="text-xs text-[#B9B4AA] max-w-sm mx-auto font-light leading-relaxed">
              We have received your scope details for <strong className="text-[#B88A44]">{formData.service}</strong>. Expect a custom solution breakdown via email within 24 hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="btn-gold-primary px-7 py-3 text-xs font-bold uppercase tracking-wider shadow-md"
            >
              Back to LOGICSPHERE TECH
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#252D3D] text-[#B88A44] border border-[#B88A44]/30 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#B88A44]" /> PRIORITY ENGINEERING DESK
              </span>
              <h3 className="text-2xl font-heading font-bold text-[#F5F1EA]">
                Book Solution Consultation
              </h3>
              <p className="text-xs text-[#B9B4AA] font-light">
                Receive an architecture roadmap and scope breakdown tailored to your business.
              </p>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#B9B4AA] mb-1.5">
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="Alex Johnson"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#0B0D12] border border-[#B88A44]/20 text-[#F5F1EA] placeholder-[#B9B4AA]/50 text-sm focus:outline-none focus:border-[#B88A44]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#B9B4AA] mb-1.5">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#0B0D12] border border-[#B88A44]/20 text-[#F5F1EA] placeholder-[#B9B4AA]/50 text-sm focus:outline-none focus:border-[#B88A44]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#B9B4AA] mb-1.5">
                  Phone / WhatsApp
                </label>
                <input
                  type="tel"
                  placeholder="+1 (415) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#0B0D12] border border-[#B88A44]/20 text-[#F5F1EA] placeholder-[#B9B4AA]/50 text-sm focus:outline-none focus:border-[#B88A44]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#B9B4AA] mb-1.5">
                  Target Service
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#0B0D12] border border-[#B88A44]/20 text-[#F5F1EA] text-sm focus:outline-none focus:border-[#B88A44]"
                >
                  <option value="Website Development">Website Development</option>
                  <option value="Web Applications">Web Applications</option>
                  <option value="Mobile App Development">Mobile App Development</option>
                  <option value="AI Solutions & RAG">AI Solutions & RAG</option>
                  <option value="SaaS Development">SaaS Development</option>
                  <option value="ERP & CRM Systems">ERP & CRM Systems</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#B9B4AA] mb-1.5">
                  Budget Tier
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#0B0D12] border border-[#B88A44]/20 text-[#F5F1EA] text-sm focus:outline-none focus:border-[#B88A44]"
                >
                  <option value="Under $1,000">Under $1,000</option>
                  <option value="$1,000–$5,000">$1,000 – $5,000</option>
                  <option value="$5,000–$10,000">$5,000 – $10,000</option>
                  <option value="$10,000+">$10,000+ (Enterprise)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#B9B4AA] mb-1.5">
                Key Objectives
              </label>
              <textarea
                rows={3}
                placeholder="Outline your project goals, timelines, or reference links..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#0B0D12] border border-[#B88A44]/20 text-[#F5F1EA] placeholder-[#B9B4AA]/50 text-sm focus:outline-none focus:border-[#B88A44]"
              />
            </div>

            <button
              type="submit"
              className="btn-gold-primary w-full py-4 text-xs font-bold uppercase tracking-wider shadow-md"
            >
              Submit Priority Request
            </button>

            <div className="flex items-center justify-between text-[11px] text-[#B9B4AA] pt-1 font-mono">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#B88A44]" /> 24-Hr Guaranteed Response
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#B88A44]" /> Confidential & NDA Covered
              </span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
