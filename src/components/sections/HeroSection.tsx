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
    { title: 'Custom Software Development', icon: Code2 },
    { title: 'ERP & CRM Solutions', icon: Database },
    { title: 'AI Automation', icon: Bot },
    { title: 'Cloud Applications', icon: Cloud },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[95vh] pt-36 sm:pt-40 pb-20 flex items-center justify-center overflow-hidden bg-[#0A0A0A] bg-aurora-mesh transition-colors duration-300"
    >
      {/* Animated Aurora Background Blobs */}
      <div className="absolute top-1/4 left-1/6 w-[600px] h-[600px] bg-[#00D9A6]/10 rounded-full blur-[150px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/6 w-[600px] h-[600px] bg-[#3B82F6]/10 rounded-full blur-[150px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '3s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full font-body">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Asymmetrical Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-8 text-left"
          >
            {/* Top Badge Pill */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00D9A6]/10 border border-[#00D9A6]/30 text-[#00D9A6] text-xs font-semibold tracking-wide"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>PREMIUM SOFTWARE ATELIER</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.12]"
            >
              Building{' '}
              <span className="text-gradient-emerald">
                Intelligent Digital Solutions
              </span>{' '}
              for Modern Businesses
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed font-body max-w-2xl"
            >
              We design and develop scalable websites, enterprise software, ERP systems, CRM platforms, mobile applications, AI-powered solutions, and cloud-based products that help businesses grow.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <button
                onClick={onOpenQuote}
                className="px-8 py-4 bg-[#00D9A6] hover:bg-[#00D9A6]/90 text-[#0A0A0A] font-bold rounded-full text-sm transition-all duration-300 shadow-xl shadow-[#00D9A6]/20 hover:shadow-[#00D9A6]/40 hover:-translate-y-0.5 flex items-center justify-center gap-2.5 group"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform stroke-[2.5]" />
              </button>

              <a
                href="#portfolio"
                className="px-8 py-4 bg-[#18181B]/80 hover:bg-[#18181B] text-white font-medium rounded-full text-sm border border-white/10 transition-all duration-300 flex items-center justify-center text-center shadow-sm hover:border-[#00D9A6]/40 hover:-translate-y-0.5"
              >
                View Our Work
              </a>
            </motion.div>

            {/* Trust Section Row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-6 border-t border-white/10"
            >
              <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#A1A1AA] block mb-3">
                CORE CAPABILITIES & PILLARS
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {trustPillars.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3 rounded-2xl bg-[#18181B]/70 border border-white/10 flex items-center gap-2.5 text-xs text-[#A1A1AA] font-medium hover:border-[#00D9A6]/40 transition-colors"
                    >
                      <div className="w-7 h-7 rounded-xl bg-[#00D9A6]/10 text-[#00D9A6] flex items-center justify-center shrink-0">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="leading-tight text-[11px] font-semibold text-white">{item.title}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: 3D Abstract Technology Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 relative"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-full aspect-[4/3.8] max-w-lg mx-auto"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#18181B] via-[#111827] to-[#0A0A0A] border border-white/10 shadow-2xl backdrop-blur-2xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden">
                <div className="absolute inset-0 bg-aurora-mesh opacity-20 pointer-events-none" />

                {/* Header Console */}
                <div className="relative z-10 flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-[10px] font-mono font-bold tracking-wider px-3 py-1 rounded-full bg-[#00D9A6]/10 text-[#00D9A6] border border-[#00D9A6]/30 flex items-center gap-1.5">
                    <Zap className="w-3 h-3 text-[#F59E0B]" /> EDGE AI CLOUD CLUSTER
                  </span>
                </div>

                {/* Center Graphic */}
                <div className="relative z-10 my-auto py-6 space-y-4 font-body">
                  <div className="relative w-full h-32 rounded-2xl bg-[#0A0A0A] text-white p-5 overflow-hidden flex flex-col justify-between border border-white/10 shadow-inner">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-[#00D9A6] font-semibold flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#00D9A6] animate-ping" />
                        SYSTEM_STATUS: ONLINE
                      </span>
                      <span className="text-[#A1A1AA]">LATENCY: 0.04ms</span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 mt-2 font-mono text-[10px]">
                      <div className="p-2 rounded-lg bg-[#18181B] border border-white/10 text-center">
                        <Cpu className="w-3.5 h-3.5 mx-auto mb-1 text-[#00D9A6]" />
                        <span>AI CORE</span>
                      </div>
                      <div className="p-2 rounded-lg bg-[#18181B] border border-white/10 text-center">
                        <Layers className="w-3.5 h-3.5 mx-auto mb-1 text-[#F59E0B]" />
                        <span>ERP MATRIX</span>
                      </div>
                      <div className="p-2 rounded-lg bg-[#18181B] border border-white/10 text-center">
                        <Cloud className="w-3.5 h-3.5 mx-auto mb-1 text-[#3B82F6]" />
                        <span>CLOUD EDGE</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 font-body">
                    <div className="p-3.5 rounded-2xl bg-[#18181B]/80 border border-white/10 shadow-md flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#00D9A6] text-[#0A0A0A] flex items-center justify-center shrink-0">
                        <Activity className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] text-[#A1A1AA] font-mono block">UPTIME SLA</span>
                        <span className="text-sm font-bold text-white font-heading">99.99%</span>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-[#18181B]/80 border border-white/10 shadow-md flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#F59E0B] text-[#0A0A0A] flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] text-[#A1A1AA] font-mono block">SECURITY</span>
                        <span className="text-sm font-bold text-white font-heading">SOC2 & ISO</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 flex items-center justify-between pt-3 border-t border-white/10 text-[11px] text-[#A1A1AA] font-mono">
                  <span>LOGICSPHERE ARCHITECTURE</span>
                  <span className="text-[#00D9A6] font-semibold">VERIFIED</span>
                </div>
              </div>

              {/* Floating Badges */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -top-4 -right-4 px-4 py-2 rounded-2xl bg-[#18181B] border border-white/10 shadow-xl backdrop-blur-md flex items-center gap-2 text-xs font-semibold text-white"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#00D9A6] animate-pulse" />
                <span>Enterprise Grade</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-4 -left-4 px-4 py-2 rounded-2xl bg-[#18181B] border border-white/10 shadow-xl backdrop-blur-md flex items-center gap-2 text-xs font-semibold text-white"
              >
                <Sparkles className="w-4 h-4 text-[#F59E0B]" />
                <span>AI-Powered Solutions</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
