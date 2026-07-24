'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap,
  Activity,
  CheckCircle2,
  Globe,
  Terminal,
  Database,
  Calculator,
  TrendingUp,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroSectionProps {
  onOpenQuote: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenQuote }) => {
  const [activeTab, setActiveTab] = useState<'metrics' | 'code' | 'ai' | 'roi'>('metrics');
  const [queryInput, setQueryInput] = useState('Architect custom RAG engine for 1M enterprise documents');
  const [simulatedScore, setSimulatedScore] = useState(99.9);
  const [visitorVolume, setVisitorVolume] = useState<number>(250000);

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-36 sm:pt-44 pb-28 flex items-center justify-center overflow-hidden bg-[#2C3531] bg-grid-pattern"
    >

      {/* Sleek, subtle, high-performance ambient shading */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#116466]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[550px] h-[550px] bg-[#D9B08C]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Headline, Description & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-8 text-left"
          >
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none bg-[#242b28] border border-[#116466] text-[#D1E8E2] text-xs font-semibold tracking-[0.25em] uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#FFCB9A]" />
              <span>LOGICSPHERE COMMAND</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light tracking-wide text-[#D1E8E2] leading-[1.1]">
              Transform your digital footprint with
              <span className="text-gradient-primary block font-bold mt-2"> precision engineering.</span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed max-w-xl font-mono">
              We design premium web platforms, bespoke AI systems, and enterprise cloud architectures with a sharp, professional, and custom Tailwind UI.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenQuote}
                className="px-8 py-4 bg-[#116466] border border-[#FFCB9A] hover:bg-[#D9B08C] hover:text-[#2C3531] text-[#D1E8E2] font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-2.5 group"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#portfolio"
                className="px-8 py-4 bg-[#242b28]/60 hover:bg-[#116466]/20 text-[#D1E8E2] font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] border border-[#116466]/40 hover:border-[#116466] transition-all duration-300 flex items-center justify-center text-center"
              >
                Explore Case Studies
              </a>
            </div>

            {/* SLA & Engineering Pillars Bar */}
            <div className="pt-6 border-t border-[#116466]/30 grid grid-cols-3 gap-4 text-[10px] sm:text-xs font-mono">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#FFCB9A] shrink-0" />
                <span className="text-[#D1E8E2] opacity-80">100% IP Handover</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#D9B08C] shrink-0" />
                <span className="text-[#D1E8E2] opacity-80">Sub-0.04ms Edge</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#116466] shrink-0" />
                <span className="text-[#D1E8E2] opacity-80">SOC2 Verified</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Digital Engineering Workstation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6 relative group"
          >
            {/* Glowing background gradient shadow with custom Tailwind animations */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-[#116466]/40 via-[#D9B08C]/20 to-[#FFCB9A]/40 rounded-none blur-2xl opacity-75 group-hover:opacity-100 group-hover:scale-102 transition duration-700 animate-pulse pointer-events-none" />

            {/* Decorative Floating Tech Illustration Card */}
            <div className="absolute -bottom-8 -left-8 w-44 h-44 rounded-none overflow-hidden border border-[#FFCB9A] bg-[#242b28] shadow-[0_20px_50px_rgba(0,0,0,0.65)] animate-float pointer-events-none hidden sm:block z-20">
              <Image 
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80" 
                alt="System Architecture Visual"
                fill
                sizes="(max-w-768px) 100vw, 200px"
                className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#242b28] via-transparent to-transparent" />
              <div className="absolute bottom-2.5 left-2.5 right-2.5 text-[8px] font-mono text-[#D1E8E2] bg-[#242b28]/95 py-1 px-2 border border-[#116466]/60">
                SYSTEMS ARCHITECTURE // 0xFA
              </div>
            </div>

            <div className="relative rounded-none bg-[#242b28] border border-[#116466] shadow-[0_0_30px_rgba(17,100,102,0.15)] overflow-hidden z-10">
              {/* Studio Window Header Bar */}
              <div className="px-6 py-4 border-b border-[#116466] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-[#2C3531]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-[#FFCB9A]" />
                  <span className="w-2.5 h-2.5 bg-[#D9B08C]" />
                  <span className="w-2.5 h-2.5 bg-[#116466]" />
                  <span className="ml-2 text-xs font-mono text-[#D1E8E2] font-semibold flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-[#116466]" /> ATELIER.CONTROL
                  </span>
                </div>

                {/* Tab Switcher */}
                <div className="flex flex-wrap items-center gap-1 bg-[#2C3531] p-1 border border-[#116466]/40 text-[10px] w-full sm:w-auto justify-between font-mono">
                  {(['metrics', 'code', 'ai', 'roi'] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-3 py-1.5 font-medium uppercase tracking-wider transition-all ${
                        activeTab === tab
                          ? 'bg-[#116466] text-[#D1E8E2]'
                          : 'text-[#D1E8E2]/60 hover:text-[#D1E8E2]'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content Display */}
              <div className="p-6 sm:p-8 min-h-[380px] flex flex-col justify-between bg-[#242b28]">
                <AnimatePresence mode="wait">
                  {activeTab === 'metrics' && (
                    <motion.div
                      key="metrics"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-6"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-[10px] font-mono uppercase text-[#D9B08C] tracking-widest block">
                            PRODUCTION TELEMETRY
                          </span>
                          <h4 className="text-base font-semibold text-[#D1E8E2] font-mono">
                            Global Core Web Vitals Benchmark
                          </h4>
                        </div>
                        <span className="px-3 py-1 border border-[#116466] text-[10px] font-mono bg-[#116466]/10 text-[#D1E8E2] flex items-center gap-1.5">
                          <Activity className="w-3.5 h-3.5 text-[#FFCB9A] animate-pulse" /> OPTIMIZED
                        </span>
                      </div>

                      <div className="grid grid-cols-3 gap-4 font-mono">
                        <div className="p-4 bg-[#2C3531]/40 border border-[#116466]/40 space-y-1">
                          <span className="text-xl sm:text-2xl font-bold text-[#D1E8E2]">
                            {simulatedScore}
                          </span>
                          <span className="text-[9px] text-[#D9B08C] block uppercase tracking-wider">
                            LIGHTHOUSE
                          </span>
                        </div>
                        <div className="p-4 bg-[#2C3531]/40 border border-[#116466]/40 space-y-1">
                          <span className="text-xl sm:text-2xl font-bold text-[#116466]">0.04ms</span>
                          <span className="text-[9px] text-[#FFCB9A] block uppercase tracking-wider">
                            TTFB
                          </span>
                        </div>
                        <div className="p-4 bg-[#2C3531]/40 border border-[#116466]/40 space-y-1">
                          <span className="text-xl sm:text-2xl font-bold text-[#D1E8E2]">99.99%</span>
                          <span className="text-[9px] text-[#D9B08C] block uppercase tracking-wider">
                            UPTIME SLA
                          </span>
                        </div>
                      </div>

                      {/* Simulated Server Cluster Graph */}
                      <div className="p-4 bg-[#2C3531]/50 border border-[#116466]/30 space-y-2.5 font-mono">
                        <div className="flex items-center justify-between text-xs text-slate-300">
                          <span className="flex items-center gap-1.5">
                            <Globe className="w-3.5 h-3.5 text-[#116466]" /> Edge CDN Routing Matrix
                          </span>
                          <span className="text-[#FFCB9A] font-semibold">36 Active Regions</span>
                        </div>
                        <div className="h-2 bg-[#2C3531] border border-[#116466]/40 overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-[#116466] to-[#D9B08C] w-[97%]" />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'code' && (
                    <motion.div
                      key="code"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="font-mono text-xs sm:text-sm text-slate-300 space-y-2.5"
                    >
                      <p className="text-slate-500">{`// LOGICSPHERE TECH Architectural Blueprint`}</p>
                      <p>
                        <span className="text-[#D9B08C]">import</span> {`{ Solution }`}{' '}
                        <span className="text-[#D9B08C]">from</span>{' '}
                        <span className="text-[#116466]">&apos;@logicsphere/studio-core&apos;</span>;
                      </p>
                      <p className="pt-2">
                        <span className="text-[#D9B08C]">export async function</span>{' '}
                        <span className="text-[#FFCB9A]">deployWorkspace</span>() {`{`}
                      </p>
                      <p className="pl-4">
                        <span className="text-[#D9B08C]">const</span> stack = {`{`}
                      </p>
                      <p className="pl-8 text-slate-200">framework: <span className="text-[#116466]">&apos;Next.js 16 (Turbopack)&apos;</span>,</p>
                      <p className="pl-8 text-slate-200">database: <span className="text-[#116466]">&apos;PostgreSQL Distributed&apos;</span>,</p>
                      <p className="pl-8 text-slate-200">styling: <span className="text-[#FFCB9A]">&apos;Tailwind CSS Grid&apos;</span>,</p>
                      <p className="pl-8 text-slate-200">security: <span className="text-[#D9B08C]">&apos;SOC2 Architecture&apos;</span>,</p>
                      <p className="pl-4">{`}`};</p>
                      <p className="pl-4">
                        <span className="text-[#D9B08C]">return</span> stack.deploy();
                      </p>
                      <p>{`}`}</p>
                    </motion.div>
                  )}

                  {activeTab === 'ai' && (
                    <motion.div
                      key="ai"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center justify-between font-mono">
                        <span className="text-xs uppercase tracking-widest text-[#D9B08C]">
                          ENGINEERING QUERY STACK
                        </span>
                        <span className="text-[10px] text-[#FFCB9A]">0.03s Execution</span>
                      </div>

                      <div className="p-4 bg-[#2C3531]/40 border border-[#116466]/40 flex items-center justify-between gap-3 font-mono">
                        <input
                          type="text"
                          value={queryInput}
                          onChange={(e) => setQueryInput(e.target.value)}
                          className="bg-transparent text-[#D1E8E2] text-xs sm:text-sm w-full focus:outline-none"
                        />
                        <button
                          onClick={() => setSimulatedScore(100)}
                          className="px-4 py-2 bg-[#116466] border border-[#FFCB9A] text-[#D1E8E2] text-[10px] font-semibold uppercase tracking-wider shrink-0"
                        >
                          Execute
                        </button>
                      </div>

                      <div className="p-4.5 bg-[#2C3531]/30 border border-[#116466]/40 space-y-2 text-xs font-mono">
                        <div className="flex items-center gap-2 text-[#D9B08C]">
                          <Database className="w-4 h-4 text-[#116466]" /> Solution Matrix (Confidence Score: 0.999)
                        </div>
                        <p className="text-slate-300 leading-relaxed font-sans">
                          LOGICSPHERE TECH engineers robust systems designed to index enterprise directories securely. Sub-second queries guaranteed via edge deployment.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'roi' && (
                    <motion.div
                      key="roi"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-5"
                    >
                      <div className="flex items-center justify-between font-mono">
                        <span className="text-xs uppercase tracking-widest text-[#D9B08C] flex items-center gap-1.5">
                          <Calculator className="w-4 h-4 text-[#116466]" /> SPEED SIMULATOR
                        </span>
                        <span className="text-xs text-[#FFCB9A] flex items-center gap-1">
                          <TrendingUp className="w-3.5 h-3.5" /> +$340K ANNUAL LIFT
                        </span>
                      </div>

                      <div className="p-4 bg-[#2C3531]/40 border border-[#116466]/40 space-y-4 font-mono">
                        <div className="flex items-center justify-between text-xs text-slate-300">
                          <span>Monthly Active Visitors:</span>
                          <span className="text-base font-semibold text-[#D1E8E2]">
                            {visitorVolume.toLocaleString()} visitors/mo
                          </span>
                        </div>
                        <input
                          type="range"
                          min="50000"
                          max="2000000"
                          step="50000"
                          value={visitorVolume}
                          onChange={(e) => setVisitorVolume(Number(e.target.value))}
                          className="w-full accent-[#116466] bg-[#2C3531] cursor-pointer"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3 text-center font-mono">
                        <div className="p-3.5 bg-[#2C3531]/40 border border-[#116466]/40">
                          <span className="text-xl font-bold text-[#116466]">-74%</span>
                          <span className="block text-[9px] text-[#94a3b8] uppercase tracking-wider mt-1">
                            Latency Reduction
                          </span>
                        </div>
                        <div className="p-3.5 bg-[#2C3531]/40 border border-[#116466]/40">
                          <span className="text-xl font-bold text-[#D1E8E2]">+48%</span>
                          <span className="block text-[9px] text-[#94a3b8] uppercase tracking-wider mt-1">
                            Conversion Lift
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Bottom interactive card trigger */}
                <div className="pt-5 border-t border-[#116466]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono">
                  <span className="text-[#94a3b8]">Ready to engineer your custom system?</span>
                  <button
                    onClick={onOpenQuote}
                    className="text-[#FFCB9A] hover:text-[#D1E8E2] font-semibold flex items-center gap-1.5 group tracking-widest uppercase text-[10px]"
                  >
                    <span>Schedule Architecture Call</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
