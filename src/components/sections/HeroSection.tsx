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
  ChevronRight,
} from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  onOpenQuote: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenQuote }) => {
  const trustPillars = [
    { title: 'Custom Software', icon: Code2 },
    { title: 'ERP & CRM Platforms', icon: Database },
    { title: 'AI Automation', icon: Bot },
    { title: 'Cloud Systems', icon: Cloud },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[96vh] pt-36 sm:pt-44 pb-24 flex items-center justify-center overflow-hidden bg-[#F5F5F7] dark:bg-[#111111] transition-colors duration-300"
    >
      {/* Subtle Apple Radial Light Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#0071E3]/5 dark:bg-[#0071E3]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full font-heading">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Huge Apple Typography & Editorial Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-8 text-left"
          >
            {/* Apple Eyebrow Pill */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/5 dark:bg-white/10 text-[#1D1D1F] dark:text-white text-xs font-semibold tracking-tight font-body"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#0071E3]" />
              <span>LOGIC SPHERE ATELIER v4.0</span>
            </motion.div>

            {/* Huge Headline (64-96px) */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter text-[#1D1D1F] dark:text-white leading-[1.05]"
            >
              Building{' '}
              <span className="text-[#0071E3]">
                Intelligent Digital Solutions
              </span>{' '}
              for Modern Businesses.
            </motion.h1>

            {/* Elegant Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg sm:text-xl text-[#86868B] dark:text-[#A1A1AA] leading-relaxed font-body max-w-2xl font-normal"
            >
              We design and develop scalable websites, enterprise software, ERP systems, CRM platforms, mobile applications, AI-powered solutions, and cloud-based products that help businesses grow.
            </motion.p>

            {/* Apple Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 font-body"
            >
              <button
                onClick={onOpenQuote}
                className="apple-btn-primary px-8 py-4 text-sm font-semibold flex items-center justify-center gap-2 group shadow-xl"
              >
                <span>Get Free Consultation</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#portfolio"
                className="apple-btn-secondary px-8 py-4 text-sm font-medium flex items-center justify-center text-center dark:text-white dark:bg-white/10 dark:hover:bg-white/15"
              >
                View Our Work
              </a>
            </motion.div>

            {/* Trust Section Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="pt-8 border-t border-black/5 dark:border-white/10 font-body"
            >
              <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#86868B] dark:text-[#A1A1AA] block mb-4">
                CORE CAPABILITIES & PILLARS
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {trustPillars.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl apple-glass-panel dark:apple-glass-dark flex items-center gap-2.5 text-xs text-[#1D1D1F] dark:text-white font-medium hover:border-[#0071E3]/40 transition-colors"
                    >
                      <div className="w-7 h-7 rounded-xl bg-[#0071E3]/10 text-[#0071E3] flex items-center justify-center shrink-0">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="leading-tight text-[11px] font-semibold">{item.title}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Floating Apple-Style Device & Software Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative font-body"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-full aspect-[4/3.8] max-w-lg mx-auto"
            >
              {/* Device Frame */}
              <div className="absolute inset-0 rounded-3xl bg-white dark:bg-[#1C1C1E] border border-black/5 dark:border-white/10 shadow-2xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden">
                {/* Header Dots */}
                <div className="relative z-10 flex items-center justify-between pb-4 border-b border-black/5 dark:border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#FF5F56] inline-block" />
                    <span className="w-3 h-3 rounded-full bg-[#FFBD2E] inline-block" />
                    <span className="w-3 h-3 rounded-full bg-[#27C93F] inline-block" />
                  </div>
                  <span className="text-[10px] font-mono font-bold tracking-wider px-3 py-1 rounded-full bg-[#0071E3]/10 text-[#0071E3]">
                    ENTERPRISE ARCHITECTURE
                  </span>
                </div>

                {/* Content Telemetry */}
                <div className="relative z-10 my-auto py-6 space-y-4 font-body">
                  <div className="p-5 rounded-2xl bg-[#1D1D1F] text-white space-y-3 shadow-inner">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-[#27C93F] font-semibold flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#27C93F] animate-ping" />
                        SYSTEM_STATUS: ONLINE
                      </span>
                      <span className="text-[#86868B]">LATENCY: 0.04ms</span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 mt-2 font-mono text-[10px]">
                      <div className="p-2.5 rounded-xl bg-white/10 text-center">
                        <Cpu className="w-3.5 h-3.5 mx-auto mb-1 text-[#0071E3]" />
                        <span>AI CORE</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white/10 text-center">
                        <Layers className="w-3.5 h-3.5 mx-auto mb-1 text-[#FFBD2E]" />
                        <span>ERP MATRIX</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white/10 text-center">
                        <Cloud className="w-3.5 h-3.5 mx-auto mb-1 text-[#0071E3]" />
                        <span>CLOUD EDGE</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 font-body">
                    <div className="p-3.5 rounded-2xl bg-[#F5F5F7] dark:bg-white/5 border border-black/5 dark:border-white/10 shadow-sm flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#0071E3] text-white flex items-center justify-center shrink-0">
                        <Activity className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] text-[#86868B] font-mono block">UPTIME SLA</span>
                        <span className="text-sm font-bold text-[#1D1D1F] dark:text-white font-heading">99.99%</span>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-[#F5F5F7] dark:bg-white/5 border border-black/5 dark:border-white/10 shadow-sm flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#1D1D1F] dark:bg-white text-white dark:text-[#1D1D1F] flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-4 h-4 text-[#0071E3]" />
                      </div>
                      <div>
                        <span className="text-[10px] text-[#86868B] font-mono block">SECURITY</span>
                        <span className="text-sm font-bold text-[#1D1D1F] dark:text-white font-heading">SOC2 Verified</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 flex items-center justify-between pt-3 border-t border-black/5 dark:border-white/10 text-[11px] text-[#86868B] font-mono">
                  <span>LOGICSPHERE ARCHITECTURE</span>
                  <span className="text-[#0071E3] font-semibold">100% SECURE</span>
                </div>
              </div>

              {/* Floating Badges */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -top-4 -right-4 px-4 py-2.5 rounded-2xl bg-white dark:bg-[#1C1C1E] border border-black/5 dark:border-white/10 shadow-xl flex items-center gap-2.5 text-xs font-body font-semibold text-[#1D1D1F] dark:text-white"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#0071E3] animate-pulse" />
                <span>Enterprise Grade</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-4 -left-4 px-4 py-2.5 rounded-2xl bg-white dark:bg-[#1C1C1E] border border-black/5 dark:border-white/10 shadow-xl flex items-center gap-2.5 text-xs font-body font-semibold text-[#1D1D1F] dark:text-white"
              >
                <Sparkles className="w-4 h-4 text-[#0071E3]" />
                <span>AI-Powered Solutions</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
