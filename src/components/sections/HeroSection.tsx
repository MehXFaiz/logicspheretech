'use client';

import React from 'react';
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Code2,
  Database,
  Bot,
  Cloud,
  Layers,
  Cpu,
  Zap,
  Activity,
} from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  onOpenQuote: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenQuote }) => {
  const trustPillars = [
    {
      title: 'Custom Software Development',
      icon: Code2,
    },
    {
      title: 'ERP & CRM Solutions',
      icon: Database,
    },
    {
      title: 'AI Automation',
      icon: Bot,
    },
    {
      title: 'Cloud Applications',
      icon: Cloud,
    },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-36 sm:pt-40 pb-20 flex items-center justify-center overflow-hidden bg-[#F8FAFC] dark:bg-[#0F172A] transition-colors duration-300"
    >
      {/* Subtle animated background gradient blobs */}
      <div className="absolute top-1/4 left-1/6 w-[500px] h-[500px] bg-[#0F766E]/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/6 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Content, Headline, Subheading, CTAs & Trust Row */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-8 text-left"
          >
            {/* Top Brand Pill */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F766E]/10 dark:bg-[#0F766E]/20 border border-[#0F766E]/30 text-[#0F766E] dark:text-[#2DD4BF] text-xs font-semibold font-body tracking-wide"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>PREMIUM SOFTWARE ATELIER</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.12]"
            >
              Building{' '}
              <span className="text-[#0F766E] dark:text-[#2DD4BF]">
                Intelligent Digital Solutions
              </span>{' '}
              for Modern Businesses
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-body max-w-2xl"
            >
              We design and develop scalable websites, enterprise software, ERP systems, CRM platforms, mobile applications, AI-powered solutions, and cloud-based products that help businesses grow.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <button
                onClick={onOpenQuote}
                className="px-8 py-4 bg-[#0F766E] hover:bg-[#0D9488] text-white font-medium rounded-full text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#0F766E]/30 hover:-translate-y-0.5 flex items-center justify-center gap-2.5 group"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#portfolio"
                className="px-8 py-4 bg-white dark:bg-slate-900/80 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-medium rounded-full text-sm border border-slate-200 dark:border-slate-800 transition-all duration-300 flex items-center justify-center text-center shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                View Our Work
              </a>
            </motion.div>

            {/* Trust Section Row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-6 border-t border-slate-200/80 dark:border-slate-800"
            >
              <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 block mb-3">
                CORE CAPABILITIES & PILLARS
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {trustPillars.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-300 font-medium shadow-sm hover:border-[#0F766E]/40 transition-colors"
                    >
                      <div className="w-7 h-7 rounded-xl bg-[#0F766E]/10 dark:bg-[#0F766E]/20 text-[#0F766E] dark:text-[#2DD4BF] flex items-center justify-center shrink-0">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="leading-tight text-[11px] font-semibold">{item.title}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Modern 3D Abstract Technology Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 relative"
          >
            {/* Floating Container Animation */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-full aspect-[4/3.8] max-w-lg mx-auto"
            >
              {/* Outer 3D Card Glass Shell */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/90 via-slate-50/80 to-white/40 dark:from-slate-900/90 dark:via-slate-900/70 dark:to-slate-900/40 border border-slate-200/90 dark:border-slate-800 shadow-2xl backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden">
                {/* Background Tech Mesh Grid */}
                <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

                {/* Top Bar - Simulated Cloud Architecture Console Header */}
                <div className="relative z-10 flex items-center justify-between pb-4 border-b border-slate-200/80 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-400/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-400/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400/80 inline-block" />
                  </div>
                  <span className="text-[10px] font-mono font-bold tracking-wider px-3 py-1 rounded-full bg-[#0F766E]/10 text-[#0F766E] dark:text-[#2DD4BF] border border-[#0F766E]/30 flex items-center gap-1.5">
                    <Zap className="w-3 h-3 text-[#D4AF37]" /> EDGE AI & CLOUD CLUSTER
                  </span>
                </div>

                {/* Center 3D Tech Visual Composition */}
                <div className="relative z-10 my-auto py-6 space-y-4">
                  {/* Central Node Graphic */}
                  <div className="relative w-full h-32 rounded-2xl bg-slate-900 text-white p-5 overflow-hidden flex flex-col justify-between border border-slate-800 shadow-inner">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        SYSTEM_STATUS: ONLINE
                      </span>
                      <span className="text-slate-400">LATENCY: 0.04ms</span>
                    </div>

                    {/* Flow Diagram Micro Cards */}
                    <div className="grid grid-cols-3 gap-2 mt-2 font-mono text-[10px]">
                      <div className="p-2 rounded-lg bg-slate-800/90 border border-slate-700 text-slate-200 text-center">
                        <Cpu className="w-3.5 h-3.5 mx-auto mb-1 text-[#2DD4BF]" />
                        <span>AI CORE</span>
                      </div>
                      <div className="p-2 rounded-lg bg-slate-800/90 border border-slate-700 text-slate-200 text-center">
                        <Layers className="w-3.5 h-3.5 mx-auto mb-1 text-[#D4AF37]" />
                        <span>ERP MATRIX</span>
                      </div>
                      <div className="p-2 rounded-lg bg-slate-800/90 border border-slate-700 text-slate-200 text-center">
                        <Cloud className="w-3.5 h-3.5 mx-auto mb-1 text-[#2DD4BF]" />
                        <span>CLOUD EDGE</span>
                      </div>
                    </div>
                  </div>

                  {/* 3D Glass Floating Overlay Cards */}
                  <div className="grid grid-cols-2 gap-3 font-body">
                    <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 shadow-md flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#0F766E] text-white flex items-center justify-center shrink-0">
                        <Activity className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 font-mono block">UPTIME SLA</span>
                        <span className="text-sm font-bold text-slate-900 dark:text-white font-heading">99.99%</span>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 shadow-md flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#D4AF37] text-slate-950 flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 font-mono block">SECURITY</span>
                        <span className="text-sm font-bold text-slate-900 dark:text-white font-heading">SOC2 & ISO</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Bar Metrics */}
                <div className="relative z-10 flex items-center justify-between pt-3 border-t border-slate-200/80 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-400 font-mono">
                  <span>LOGICSPHERE ARCHITECTURE v4.2</span>
                  <span className="text-[#0F766E] dark:text-[#2DD4BF] font-semibold">100% SECURE</span>
                </div>
              </div>

              {/* Floating Decorative 3D Badges */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -top-4 -right-4 px-4 py-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl backdrop-blur-md flex items-center gap-2.5 text-xs font-body font-semibold text-slate-900 dark:text-white"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#0F766E] animate-pulse" />
                <span>Enterprise Grade</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-4 -left-4 px-4 py-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl backdrop-blur-md flex items-center gap-2.5 text-xs font-body font-semibold text-slate-900 dark:text-white"
              >
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <span>AI-Powered Solutions</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
