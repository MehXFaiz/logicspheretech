'use client';

import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Clock,
  Globe,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Website Development',
    budget: '$25k - $60k',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      newErrors.email = 'Please enter a valid work email';
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message = 'Please provide a brief project summary (min 10 characters)';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-28 bg-[#2C3531] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#116466]/10 text-[#116466] border border-[#116466]/35 mb-3">
            <Sparkles className="w-3.5 h-3.5" /> INITIATE AN ARCHITECTURE BRIEF
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#D1E8E2] tracking-tight">
            Let&apos;s Architect Your Next{' '}
            <span className="text-gradient-gold">
              Breakthrough Product
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Directly connect with our Principal Systems Architect. Guaranteed confidential review and architectural sign-off within 4 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct HQ Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-[#343e39] border border-[#D1E8E2]/10 space-y-7 shadow-2xl">
              <div>
                <span className="text-xs font-mono text-[#116466] block mb-1 font-bold">
                  SILICON VALLEY & GLOBAL EDGE
                </span>
                <h3 className="text-2xl font-black text-[#D1E8E2]">Atelier Headquarters</h3>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#116466]/15 border border-[#116466]/30 flex items-center justify-center text-[#116466] shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#D1E8E2]">San Francisco Campus</h4>
                  <p className="text-sm text-slate-400 mt-1">
                    100 Innovation Way, Suite 800
                    <br />
                    San Francisco, CA 94105, USA
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#116466]/15 border border-[#116466]/30 flex items-center justify-center text-[#116466] shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#D1E8E2]">Direct Executive Inbox</h4>
                  <a
                    href="mailto:contact@logicspheretech.com"
                    className="text-sm text-[#116466] hover:underline mt-1 block font-mono font-bold"
                  >
                    contact@logicspheretech.com
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">PGP encrypted enterprise inquiries</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#116466]/15 border border-[#116466]/30 flex items-center justify-center text-[#116466] shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#D1E8E2]">Direct Line & WhatsApp</h4>
                  <a
                    href="tel:+14155550199"
                    className="text-sm text-[#116466] hover:underline mt-1 block font-mono font-bold"
                  >
                    +1 (415) 555-0199
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">24/7 Global Priority Desk</p>
                </div>
              </div>
            </div>

            {/* Simulated HQ Map Card */}
            <div className="relative rounded-3xl overflow-hidden border border-[#D1E8E2]/10 shadow-2xl bg-[#2C3531] h-64 flex flex-col justify-between p-6">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#11646620,transparent_60%),radial-gradient(ellipse_at_bottom_left,#D9B08C20,transparent_60%)]" />

              <div className="relative z-10 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#116466]/15 text-[#116466] border border-[#116466]/35 flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5" /> Downtown SF Tech Hub
                </span>
                <span className="text-xs font-mono text-[#D9B08C] font-bold flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> UTC-8
                </span>
              </div>

              <div className="relative z-10 flex flex-col items-center justify-center text-center my-auto">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FFCB9A] via-[#116466] to-[#D9B08C] flex items-center justify-center shadow-xl shadow-[#116466]/30 animate-bounce">
                  <MapPin className="w-7 h-7 text-slate-950" />
                </div>
                <h4 className="font-black text-[#D1E8E2] mt-3 font-mono">LOGICSPHERE ATELIER CAMPUS</h4>
                <p className="text-xs text-slate-400">Innovation Way, San Francisco</p>
              </div>

              <div className="relative z-10 flex items-center justify-between text-xs text-slate-400 border-t border-[#D1E8E2]/10 pt-3 font-mono">
                <span>Lat: 37.7749° N</span>
                <span>Long: 122.4194° W</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-3xl bg-[#343e39] border border-[#D1E8E2]/10 shadow-2xl">
              {submitted ? (
                <div className="text-center py-16 space-y-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#FFCB9A] via-[#116466] to-[#D9B08C] mx-auto flex items-center justify-center shadow-xl shadow-[#116466]/25">
                    <CheckCircle2 className="w-10 h-10 text-slate-950" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#D1E8E2]">
                    Architecture Brief Received
                  </h3>
                  <p className="text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-[#116466] font-bold">{formData.name}</span>. Our Principal Architect has received your specification and will send an initial architectural roadmap within 4 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        service: 'Website Development',
                        budget: '$25k - $60k',
                        message: '',
                      });
                    }}
                    className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#FFCB9A] via-[#116466] to-[#D9B08C] text-slate-950 font-black text-xs uppercase tracking-wider"
                  >
                    Submit Another Brief
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-black text-[#D1E8E2] mb-1.5">
                      Send Your Architecture & Project Brief
                    </h3>
                    <p className="text-sm text-slate-400">
                      Guaranteed response from a Principal Systems Architect within 4 hours.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Executive Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-4 py-3.5 rounded-xl bg-[#2C3531] border text-[#D1E8E2] placeholder-slate-500 text-sm focus:outline-none transition-colors font-mono ${
                          errors.name ? 'border-rose-500' : 'border-[#D1E8E2]/10 focus:border-[#116466]'
                        }`}
                      />
                      {errors.name && (
                        <span className="text-xs text-rose-400 mt-1 block">{errors.name}</span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-3.5 rounded-xl bg-[#2C3531] border text-[#D1E8E2] placeholder-slate-500 text-sm focus:outline-none transition-colors font-mono ${
                          errors.email ? 'border-rose-500' : 'border-[#D1E8E2]/10 focus:border-[#116466]'
                        }`}
                      />
                      {errors.email && (
                        <span className="text-xs text-rose-400 mt-1 block">{errors.email}</span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Service Needed
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#2C3531] border border-[#D1E8E2]/10 text-[#D1E8E2] text-sm focus:outline-none focus:border-[#116466] font-mono"
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
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Estimated Scope Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#2C3531] border border-[#D1E8E2]/10 text-[#D1E8E2] text-sm focus:outline-none focus:border-[#116466] font-mono"
                      >
                        <option value="<$15,000">&lt; $15,000</option>
                        <option value="$15k - $35k">$15,000 - $35,000</option>
                        <option value="$35k - $75k">$35,000 - $75,000</option>
                        <option value="$75k+">$75,000+ (Enterprise Custom)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Project Specifications & Goals *
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Share your technical requirements, expected concurrency, timeline, or reference architectures..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-4 py-3.5 rounded-xl bg-[#2C3531] border text-[#D1E8E2] placeholder-slate-500 text-sm focus:outline-none transition-colors font-mono ${
                        errors.message
                          ? 'border-rose-500'
                          : 'border-[#D1E8E2]/10 focus:border-[#116466]'
                      }`}
                    />
                    {errors.message && (
                      <span className="text-xs text-rose-400 mt-1 block">{errors.message}</span>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#FFCB9A] via-[#116466] to-[#D9B08C] hover:opacity-95 text-slate-950 font-black text-xs uppercase tracking-wider shadow-xl shadow-[#116466]/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
                  >
                    <span>Send Brief & Receive Architecture Proposal</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-center gap-2 pt-2 text-xs text-slate-400 font-mono">
                    <ShieldCheck className="w-4 h-4 text-[#116466]" />
                    <span>Protected under mutual confidentiality agreement</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
