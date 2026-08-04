'use client';

import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Clock,
  Sparkles,
  MessageSquare,
  ChevronRight,
  Headphones,
} from 'lucide-react';
import { motion } from 'framer-motion';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'Website Development',
    budget: '$1,000–$5,000',
    message: '',
    privacyAgreed: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const budgetOptions = ['Under $1,000', '$1,000–$5,000', '$5,000–$10,000', '$10,000+ (Enterprise)'];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      newErrors.email = 'Please enter a valid work email address';
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message = 'Please provide a brief project summary (min 10 characters)';
    }
    if (!formData.privacyAgreed) {
      newErrors.privacyAgreed = 'You must agree to the privacy policy';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setTimeout(() => {
        const subject = encodeURIComponent(`Consultation Request: ${formData.service}`);
        const body = encodeURIComponent(
          `Full Name: ${formData.name}\n` +
          `Company: ${formData.company || 'N/A'}\n` +
          `Email: ${formData.email}\n` +
          `Phone: ${formData.phone || 'N/A'}\n` +
          `Service: ${formData.service}\n` +
          `Budget: ${formData.budget}\n\n` +
          `Project Details:\n${formData.message}`
        );
        window.location.href = `mailto:logicspheretech@gmail.com?subject=${subject}&body=${body}`;
        setIsSubmitting(false);
        setSubmitted(true);
      }, 600);
    }
  };

  return (
    <section id="contact" className="py-32 bg-[#12161F] relative overflow-hidden font-body">
      {/* Background Glow */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#B88A44]/[0.04] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B2330] border border-[#B88A44]/20 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#B88A44]" />
            <span className="text-[11px] uppercase tracking-[0.25em] font-mono text-[#B88A44] font-semibold">
              START A CONVERSATION
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-heading font-extrabold text-[#F5F1EA] tracking-tight leading-tight"
          >
            Let&apos;s Build Your Next Digital Product
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base text-[#B9B4AA] font-light leading-relaxed max-w-xl mx-auto"
          >
            Reach out for a confidential architectural consultation, scope evaluation, or project proposal.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="luxury-card rounded-3xl p-8 border border-[#B88A44]/20 space-y-6 bg-[#1B2330]">
              <div>
                <span className="text-[10px] font-mono text-[#B88A44] uppercase tracking-[0.25em] font-bold block mb-1">
                  DIRECT DESK
                </span>
                <h3 className="text-2xl font-heading font-bold text-[#F5F1EA]">
                  Executive Contact Information
                </h3>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#252D3D] text-[#B88A44] flex items-center justify-center shrink-0 border border-[#B88A44]/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#F5F1EA] text-sm font-heading">Direct Email</h4>
                    <a
                      href="mailto:logicspheretech@gmail.com"
                      className="text-sm text-[#B88A44] hover:underline mt-0.5 block font-mono font-semibold"
                    >
                      logicspheretech@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#252D3D] text-[#B88A44] flex items-center justify-center shrink-0 border border-[#B88A44]/20">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#F5F1EA] text-sm font-heading">Phone & WhatsApp</h4>
                    <a
                      href="https://wa.me/923032567909"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#B88A44] hover:underline mt-0.5 block font-mono font-semibold"
                    >
                      +92 3032567909
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#252D3D] text-[#B88A44] flex items-center justify-center shrink-0 border border-[#B88A44]/20">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#F5F1EA] text-sm font-heading">Response Guarantee</h4>
                    <p className="text-xs text-[#B9B4AA] mt-0.5 font-light">
                      Guaranteed reply within 24 business hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Consultation Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="luxury-card rounded-3xl p-8 sm:p-12 border border-[#B88A44]/20 bg-[#1B2330]">
              {submitted ? (
                <div className="text-center py-12 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-[#B88A44] text-[#0B0D12] mx-auto flex items-center justify-center shadow-lg">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-[#F5F1EA]">
                    Consultation Request Submitted!
                  </h3>
                  <p className="text-[#B9B4AA] max-w-md mx-auto text-sm font-light leading-relaxed">
                    Thank you, <strong className="text-[#B88A44]">{formData.name}</strong>. Our Principal Architect will review your scope for <strong className="text-[#F5F1EA]">{formData.service}</strong> and respond shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        company: '',
                        email: '',
                        phone: '',
                        service: 'Website Development',
                        budget: '$1,000–$5,000',
                        message: '',
                        privacyAgreed: false,
                      });
                    }}
                    className="btn-gold-primary px-7 py-3 text-xs uppercase tracking-wider font-bold"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-[#F5F1EA] mb-1">
                      Book a Free Consultation
                    </h3>
                    <p className="text-xs text-[#B9B4AA] font-light">
                      Fill out the form below to receive a custom solution proposal.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#B9B4AA] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Alex Johnson"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-[#0B0D12] border text-[#F5F1EA] placeholder-[#B9B4AA]/50 text-sm focus:outline-none transition-all ${
                          errors.name ? 'border-rose-500' : 'border-[#B88A44]/20 focus:border-[#B88A44]'
                        }`}
                      />
                      {errors.name && (
                        <span className="text-[11px] text-rose-400 mt-1 block">{errors.name}</span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#B9B4AA] mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="Acme Corp"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0B0D12] border border-[#B88A44]/20 text-[#F5F1EA] placeholder-[#B9B4AA]/50 text-sm focus:outline-none focus:border-[#B88A44] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#B9B4AA] mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-[#0B0D12] border text-[#F5F1EA] placeholder-[#B9B4AA]/50 text-sm focus:outline-none transition-all ${
                          errors.email ? 'border-rose-500' : 'border-[#B88A44]/20 focus:border-[#B88A44]'
                        }`}
                      />
                      {errors.email && (
                        <span className="text-[11px] text-rose-400 mt-1 block">{errors.email}</span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#B9B4AA] mb-2">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 (415) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0B0D12] border border-[#B88A44]/20 text-[#F5F1EA] placeholder-[#B9B4AA]/50 text-sm focus:outline-none focus:border-[#B88A44] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#B9B4AA] mb-2">
                      Target Service
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0B0D12] border border-[#B88A44]/20 text-[#F5F1EA] text-sm focus:outline-none focus:border-[#B88A44] transition-all"
                    >
                      <option value="Website Development">Website Development</option>
                      <option value="Web Applications">Web Applications</option>
                      <option value="Mobile App Development">Mobile App Development</option>
                      <option value="AI Solutions">AI Solutions</option>
                      <option value="SaaS Development">SaaS Development</option>
                      <option value="ERP & CRM Systems">ERP & CRM Systems</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="Cloud & DevOps">Cloud & DevOps</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#B9B4AA] mb-2">
                      Estimated Budget Tier
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {budgetOptions.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: b })}
                          className={`py-2 px-3 rounded-lg text-xs font-mono transition-all text-center ${
                            formData.budget === b
                              ? 'bg-[#B88A44] text-[#0B0D12] font-bold'
                              : 'bg-[#0B0D12] text-[#B9B4AA] border border-[#B88A44]/15 hover:border-[#B88A44]/40'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#B9B4AA] mb-2">
                      Project Description *
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Outline your requirements, target timeline, or reference links..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-[#0B0D12] border text-[#F5F1EA] placeholder-[#B9B4AA]/50 text-sm focus:outline-none transition-all ${
                        errors.message ? 'border-rose-500' : 'border-[#B88A44]/20 focus:border-[#B88A44]'
                      }`}
                    />
                    {errors.message && (
                      <span className="text-[11px] text-rose-400 mt-1 block">{errors.message}</span>
                    )}
                  </div>

                  <div>
                    <label className="flex items-center gap-2.5 cursor-pointer text-xs text-[#B9B4AA] select-none font-light">
                      <input
                        type="checkbox"
                        checked={formData.privacyAgreed}
                        onChange={(e) => setFormData({ ...formData, privacyAgreed: e.target.checked })}
                        className="w-4 h-4 rounded text-[#B88A44] focus:ring-[#B88A44] border-[#B88A44]/30 bg-[#0B0D12] accent-[#B88A44]"
                      />
                      <span>I agree to confidential handling of all submitted data under standard NDA.</span>
                    </label>
                    {errors.privacyAgreed && (
                      <span className="text-[11px] text-rose-400 mt-1 block">{errors.privacyAgreed}</span>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-gold-primary w-full py-4 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
                  >
                    {isSubmitting ? (
                      <span>Sending Request...</span>
                    ) : (
                      <>
                        <span>Submit Consultation Request</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
