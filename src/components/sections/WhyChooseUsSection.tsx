'use client';

import React from 'react';
import {
  Sparkles,
  Users,
  Target,
  Zap,
  ShieldCheck,
  Headphones,
  Cpu,
  ArrowRight,
  MessageSquare,
  Clock,
  Lock,
  Trophy,
  Award,
  Layers,
  Database,
  Cloud,
} from 'lucide-react';
import { motion } from 'framer-motion';

interface WhyChooseUsSectionProps {
  onOpenQuote?: () => void;
}

export const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({ onOpenQuote }) => {
  const features = [
    {
      title: 'Experienced Development Team',
      description: 'Our developers build secure, scalable, and maintainable software using modern technologies.',
      icon: Users,
    },
    {
      title: 'Business-Focused Solutions',
      description: 'Every solution is designed around business goals, not just technical requirements.',
      icon: Target,
    },
    {
      title: 'Fast Delivery',
      description: 'Agile development ensures faster delivery without compromising quality.',
      icon: Zap,
    },
    {
      title: 'Secure & Scalable Architecture',
      description: 'Applications are built with security, performance, and future scalability in mind.',
      icon: ShieldCheck,
    },
    {
      title: 'Dedicated Support',
      description: 'We provide continuous maintenance, updates, and technical support after deployment.',
      icon: Headphones,
    },
    {
      title: 'Latest Technologies',
      description: 'We work with React, Next.js, Node.js, AI, Cloud, PostgreSQL, and other modern technologies.',
      icon: Cpu,
    },
  ];

  const trustIndicators = [
    { title: 'Transparent Communication', icon: MessageSquare },
    { title: 'On-Time Delivery', icon: Clock },
    { title: 'Secure Development', icon: Lock },
    { title: '24/7 Technical Support', icon: Headphones },
  ];

  const achievements = [
    { label: 'Projects Completed', value: '150+', icon: Trophy },
    { label: 'Happy Clients', value: '98%', icon: Users },
    { label: 'Technologies Used', value: '25+', icon: Layers },
    { label: 'Customer Satisfaction', value: '100%', icon: Award },
  ];

  const techBadges = [
    'React',
    'Next.js',
    'Node.js',
    'Express',
    'PostgreSQL',
    'Tailwind CSS',
    'TypeScript',
    'Docker',
    'AWS',
    'GitHub',
  ];

  return (
    <section id="why-us" className="py-28 bg-[#F8FAFC] dark:bg-[#0F172A] relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-body">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#0F766E]/10 dark:bg-[#0F766E]/20 text-[#0F766E] dark:text-[#2DD4BF] border border-[#0F766E]/30 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" /> Why Choose Logic Sphere
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
            Your{' '}
            <span className="text-[#0F766E] dark:text-[#2DD4BF]">
              Trusted Technology Partner
            </span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            We combine strategy, design, and engineering to deliver scalable digital solutions that help businesses grow faster, operate smarter, and stay ahead of the competition.
          </p>
        </motion.div>

        {/* Responsive Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center mb-20">
          {/* Left Side: Premium Abstract 3D Technology Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-full aspect-[4/3.8] max-w-md mx-auto"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/90 via-slate-50/80 to-white/40 dark:from-slate-900/90 dark:via-slate-900/70 dark:to-slate-900/40 border border-slate-200/90 dark:border-slate-800 shadow-2xl backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

                {/* Console Bar */}
                <div className="relative z-10 flex items-center justify-between pb-4 border-b border-slate-200/80 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-400/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-400/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400/80 inline-block" />
                  </div>
                  <span className="text-[10px] font-mono font-bold tracking-wider px-3 py-1 rounded-full bg-[#0F766E]/10 text-[#0F766E] dark:text-[#2DD4BF] border border-[#0F766E]/30">
                    LOGICSPHERE RIGOR
                  </span>
                </div>

                {/* Main Graphic Content */}
                <div className="relative z-10 my-auto py-6 space-y-4 font-body">
                  <div className="p-4 rounded-2xl bg-slate-900 text-white space-y-3 shadow-inner border border-slate-800">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        CODE_QUALITY: 100%
                      </span>
                      <span className="text-slate-400">SOC2 COMPLIANT</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
                      <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700">
                        <span className="text-slate-400 block">SLA RESPONSE</span>
                        <span className="text-sm font-bold text-[#2DD4BF] font-heading">&lt; 4 Hours</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700">
                        <span className="text-slate-400 block">IP HANDOVER</span>
                        <span className="text-sm font-bold text-[#D4AF37] font-heading">100% Transfer</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs font-body">
                    <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 shadow-md flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#0F766E] text-white flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 font-mono block">SECURITY</span>
                        <span className="text-xs font-bold text-slate-900 dark:text-white font-heading">Enterprise</span>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 shadow-md flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#D4AF37] text-slate-950 flex items-center justify-center shrink-0">
                        <Zap className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 font-mono block">DELIVERY</span>
                        <span className="text-xs font-bold text-slate-900 dark:text-white font-heading">Agile Sprint</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 flex items-center justify-between pt-3 border-t border-slate-200/80 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-400 font-mono">
                  <span>TRUSTED PARTNER MATRIX</span>
                  <span className="text-[#0F766E] dark:text-[#2DD4BF] font-semibold">VERIFIED</span>
                </div>
              </div>

              {/* Floating Badges */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -top-4 -right-4 px-4 py-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl backdrop-blur-md text-xs font-semibold text-slate-900 dark:text-white flex items-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Zero Lock-In</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side: Six Feature Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="group rounded-[20px] bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-[#0F766E] dark:hover:border-[#2DD4BF] shadow-sm hover:shadow-xl hover:shadow-slate-900/5 p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#0F766E]/10 dark:bg-[#0F766E]/20 text-[#0F766E] dark:text-[#2DD4BF] flex items-center justify-center shrink-0 mb-5 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 stroke-[2.2]" />
                    </div>

                    <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-white group-hover:text-[#0F766E] dark:group-hover:text-[#2DD4BF] transition-colors mb-2">
                      {feature.title}
                    </h3>

                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-body">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Trust Indicators Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {trustIndicators.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-center gap-3 text-slate-800 dark:text-slate-200 font-semibold text-xs sm:text-sm font-body">
                  <div className="w-9 h-9 rounded-xl bg-[#0F766E]/10 dark:bg-[#0F766E]/20 text-[#0F766E] dark:text-[#2DD4BF] flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span>{item.title}</span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Achievements Section: Four Animated Statistic Cards */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {achievements.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-[20px] bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-center gap-4 group hover:border-[#0F766E] dark:hover:border-[#2DD4BF] transition-colors"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#0F766E]/10 dark:bg-[#0F766E]/20 text-[#0F766E] dark:text-[#2DD4BF] flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 dark:text-white tracking-tight block">
                    {item.value}
                  </span>
                  <span className="text-xs text-slate-500 font-medium uppercase tracking-wider font-body">
                    {item.label}
                  </span>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Technology Stack Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center space-y-6"
        >
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 block">
            MODERN TECHNOLOGY STACK WE MASTER
          </span>

          <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
            {techBadges.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full text-xs font-mono font-medium bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:border-[#0F766E] dark:hover:border-[#2DD4BF] transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 sm:p-12 shadow-sm text-center max-w-4xl mx-auto relative overflow-hidden"
        >
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#0F766E]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#0F766E]/10 dark:bg-[#0F766E]/20 text-[#0F766E] dark:text-[#2DD4BF] border border-[#0F766E]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" /> Partner With Us
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900 dark:text-white leading-tight">
              Let&apos;s Build Your Next Digital Success Story
            </h3>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
              From startups to enterprises, we help businesses transform ideas into powerful digital products.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => {
                  if (onOpenQuote) onOpenQuote();
                  else {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full sm:w-auto px-8 py-4 bg-[#0F766E] hover:bg-[#0D9488] text-white font-medium rounded-full text-sm shadow-md hover:shadow-lg hover:shadow-[#0F766E]/25 transition-all flex items-center justify-center gap-2.5 group"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => {
                  if (onOpenQuote) onOpenQuote();
                  else {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-medium rounded-full text-sm border border-slate-200 dark:border-slate-800 transition-all shadow-sm flex items-center justify-center text-center"
              >
                Request a Quote
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
