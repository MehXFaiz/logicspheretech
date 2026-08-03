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
      newErrors.privacyAgreed = 'You must agree to the Privacy Policy';
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
          `Company Name: ${formData.company || 'N/A'}\n` +
          `Work Email: ${formData.email}\n` +
          `Phone Number: ${formData.phone || 'N/A'}\n` +
          `Service Required: ${formData.service}\n` +
          `Estimated Budget: ${formData.budget}\n\n` +
          `Project Description:\n${formData.message}`
        );
        window.location.href = `mailto:logicspheretech@gmail.com?subject=${subject}&body=${body}`;
        setIsSubmitting(false);
        setSubmitted(true);
      }, 600);
    }
  };

  const highlights = [
    { title: 'Response Time', desc: 'Within 24 Hours', icon: Clock },
    { title: 'Free Consultation', desc: 'Project Discussion', icon: MessageSquare },
    { title: 'Custom Solutions', desc: 'Tailored for Your Business', icon: Sparkles },
    { title: 'Long-Term Support', desc: 'Maintenance & Growth', icon: Headphones },
  ];

  const whyContactUs = [
    { title: 'Experienced Engineers', desc: 'Senior systems architects & full-stack developers.' },
    { title: 'Transparent Pricing', desc: 'No hidden fees with milestone-based agreements.' },
    { title: 'Scalable Solutions', desc: 'Designed for high concurrency and future expansion.' },
    { title: 'Dedicated Support', desc: 'Post-launch maintenance, SLAs & technical assistance.' },
  ];

  return (
    <section id="contact" className="py-32 bg-[#16181D] relative transition-colors duration-300 font-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-[#1F2229] border border-white/10 text-[#C6A15B] mb-4 font-body">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" /> Contact Us
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F4F4F5] tracking-tight leading-tight">
            Let&apos;s Build Your <span className="text-[#C6A15B]">Next Digital Solution.</span>
          </h2>
          <p className="mt-4 text-[#A1A1AA] text-base sm:text-lg leading-relaxed font-body font-normal">
            Whether you need a business website, ERP system, CRM platform, SaaS product, AI-powered application, mobile app, or custom software, our team is ready to help turn your ideas into reality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Left Side Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8 font-body"
          >
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-3xl bg-[#1F2229] border border-white/10 shadow-sm hover:border-[#C6A15B]/40 transition-all hover:-translate-y-1"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#2A2E36] text-[#C6A15B] flex items-center justify-center mb-3 border border-white/10">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs text-[#A1A1AA] font-mono block uppercase font-semibold">
                      {item.title}
                    </span>
                    <span className="text-sm font-bold font-heading text-[#F4F4F5] mt-0.5 block">
                      {item.desc}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="p-8 rounded-3xl bg-[#1F2229] border border-white/10 space-y-7 shadow-sm">
              <div>
                <span className="text-xs font-mono text-[#C6A15B] font-semibold block mb-1">
                  DIRECT EXECUTIVE DESK
                </span>
                <h3 className="text-2xl font-bold font-heading text-[#F4F4F5]">
                  Get in Touch Directly
                </h3>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#2A2E36] text-[#C6A15B] flex items-center justify-center shrink-0 border border-white/10">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#F4F4F5] text-sm font-heading">Email Address</h4>
                    <a
                      href="mailto:logicspheretech@gmail.com"
                      className="text-sm text-[#C6A15B] hover:underline mt-0.5 block font-mono font-bold"
                    >
                      logicspheretech@gmail.com
                    </a>
                    <p className="text-xs text-[#A1A1AA] mt-0.5">Encrypted enterprise quotes & briefs</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#2A2E36] text-[#C6A15B] flex items-center justify-center shrink-0 border border-white/10">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#F4F4F5] text-sm font-heading">Phone & WhatsApp</h4>
                    <a
                      href="https://wa.me/923032567909"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#C6A15B] hover:underline mt-0.5 block font-mono font-bold"
                    >
                      +92 3032567909
                    </a>
                    <p className="text-xs text-[#A1A1AA] mt-0.5">Instant WhatsApp priority desk</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#2A2E36] text-[#C6A15B] flex items-center justify-center shrink-0 border border-white/10">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#F4F4F5] text-sm font-heading">Office Location</h4>
                    <p className="text-sm text-[#A1A1AA] mt-0.5">
                      San Francisco Tech Atelier & Global Ops
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#2A2E36] text-[#C6A15B] flex items-center justify-center shrink-0 border border-white/10">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#F4F4F5] text-sm font-heading">Business Hours</h4>
                    <p className="text-sm text-[#A1A1AA] mt-0.5">
                      24/7 Global Priority Support Desk
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side Consultation Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 font-body"
          >
            <div className="p-8 sm:p-12 rounded-3xl bg-[#1F2229] border border-white/10 shadow-sm">
              {submitted ? (
                <div className="text-center py-16 space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#C6A15B] text-[#0E0E10] mx-auto flex items-center justify-center shadow-lg">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#F4F4F5]">
                    Consultation Booked Successfully!
                  </h3>
                  <p className="text-[#A1A1AA] max-w-md mx-auto leading-relaxed text-sm sm:text-base">
                    Thank you, <strong className="text-[#C6A15B]">{formData.name}</strong>. Our Principal Architect has received your request for <strong className="text-[#F4F4F5]">{formData.service}</strong> and will reach out within 24 hours.
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
                    className="executive-btn-primary px-8 py-3.5 text-sm font-semibold shadow-md"
                  >
                    Book Another Consultation
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold font-heading text-[#F4F4F5] mb-1.5">
                      Book a Free Technical Consultation
                    </h3>
                    <p className="text-sm text-[#A1A1AA]">
                      Fill out the form below to receive a free architecture review and project scope breakdown.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#A1A1AA] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Alex Johnson"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-4 py-3 rounded-2xl bg-[#0E0E10] border text-[#F4F4F5] placeholder-[#A1A1AA] text-sm focus:outline-none transition-all ${
                          errors.name ? 'border-rose-500' : 'border-white/10 focus:border-[#C6A15B] focus:ring-2 focus:ring-[#C6A15B]/20'
                        }`}
                      />
                      {errors.name && (
                        <span className="text-xs text-rose-500 mt-1 block">{errors.name}</span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#A1A1AA] mb-2">
                        Company Name (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="Acme Corp"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-[#0E0E10] border border-white/10 text-[#F4F4F5] placeholder-[#A1A1AA] text-sm focus:outline-none focus:border-[#C6A15B] focus:ring-2 focus:ring-[#C6A15B]/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#A1A1AA] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-3 rounded-2xl bg-[#0E0E10] border text-[#F4F4F5] placeholder-[#A1A1AA] text-sm focus:outline-none transition-all ${
                          errors.email ? 'border-rose-500' : 'border-white/10 focus:border-[#C6A15B] focus:ring-2 focus:ring-[#C6A15B]/20'
                        }`}
                      />
                      {errors.email && (
                        <span className="text-xs text-rose-500 mt-1 block">{errors.email}</span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#A1A1AA] mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 (415) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-[#0E0E10] border border-white/10 text-[#F4F4F5] placeholder-[#A1A1AA] text-sm focus:outline-none focus:border-[#C6A15B] focus:ring-2 focus:ring-[#C6A15B]/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#A1A1AA] mb-2">
                        Service Required
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-[#0E0E10] border border-white/10 text-[#F4F4F5] text-sm focus:outline-none focus:border-[#C6A15B] focus:ring-2 focus:ring-[#C6A15B]/20 transition-all"
                      >
                        <option value="Website Development">Website Development</option>
                        <option value="ERP Development">ERP Development</option>
                        <option value="CRM Development">CRM Development</option>
                        <option value="SaaS Product">SaaS Product</option>
                        <option value="Mobile Application">Mobile Application</option>
                        <option value="AI Automation">AI Automation</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="SEO">SEO</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#A1A1AA] mb-2">
                        Budget Tier
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-[#0E0E10] border border-white/10 text-[#F4F4F5] text-sm focus:outline-none focus:border-[#C6A15B] focus:ring-2 focus:ring-[#C6A15B]/20 transition-all"
                      >
                        <option value="Under $1,000">Under $1,000</option>
                        <option value="$1,000–$5,000">$1,000 – $5,000</option>
                        <option value="$5,000–$10,000">$5,000 – $10,000</option>
                        <option value="$10,000+">$10,000+ (Enterprise)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#A1A1AA] mb-2">
                      Project Description *
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Share your goals, requirements, desired timeline, or reference applications..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-4 py-3 rounded-2xl bg-[#0E0E10] border text-[#F4F4F5] placeholder-[#A1A1AA] text-sm focus:outline-none transition-all ${
                        errors.message
                          ? 'border-rose-500'
                          : 'border-white/10 focus:border-[#C6A15B] focus:ring-2 focus:ring-[#C6A15B]/20'
                      }`}
                    />
                    {errors.message && (
                      <span className="text-xs text-rose-500 mt-1 block">{errors.message}</span>
                    )}
                  </div>

                  <div>
                    <label className="flex items-center gap-2.5 cursor-pointer text-xs text-[#A1A1AA] select-none">
                      <input
                        type="checkbox"
                        checked={formData.privacyAgreed}
                        onChange={(e) => setFormData({ ...formData, privacyAgreed: e.target.checked })}
                        className="w-4 h-4 rounded text-[#C6A15B] focus:ring-[#C6A15B] border-slate-700 bg-[#0E0E10] accent-[#C6A15B]"
                      />
                      <span>I agree to the Privacy Policy and confidential data handling.</span>
                    </label>
                    {errors.privacyAgreed && (
                      <span className="text-xs text-rose-500 mt-1 block">{errors.privacyAgreed}</span>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="executive-btn-primary w-full py-4 text-sm font-semibold flex items-center justify-center gap-2 shadow-md"
                  >
                    {isSubmitting ? (
                      <span>Processing Consultation Request...</span>
                    ) : (
                      <>
                        <span>Book Free Consultation</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Why Contact Us Grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 font-body"
        >
          <div className="text-center mb-8">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#A1A1AA]">
              WHY PARTNER WITH US
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyContactUs.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-[#1F2229] border border-white/10 shadow-sm hover:border-[#C6A15B]/40 transition-all hover:-translate-y-1.5"
              >
                <div className="flex items-center gap-2.5 text-[#C6A15B] font-bold font-heading mb-2">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <h4>{item.title}</h4>
                </div>
                <p className="text-xs text-[#A1A1AA] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-3xl bg-[#1F2229] text-[#F4F4F5] p-8 sm:p-12 shadow-2xl text-center max-w-4xl mx-auto relative overflow-hidden font-body border border-white/10"
        >
          <div className="relative z-10 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#2A2E36] text-[#C6A15B] border border-white/10">
              <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" /> Start Building Today
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold font-heading text-[#F4F4F5] leading-tight">
              Ready to Start Your Project?
            </h3>
            <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed max-w-2xl mx-auto">
              Let&apos;s discuss your vision and build a powerful digital solution that helps your business grow.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="executive-btn-primary px-8 py-4 text-sm font-semibold flex items-center justify-center gap-2 group shadow-xl"
              >
                <span>Schedule Free Consultation</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#portfolio"
                className="executive-btn-secondary px-8 py-4 text-sm font-medium flex items-center justify-center text-center"
              >
                View Our Portfolio
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
