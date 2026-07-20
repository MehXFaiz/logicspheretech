'use client';

import React, { useState } from 'react';
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
      className="relative min-h-screen pt-36 sm:pt-44 pb-28 flex items-center justify-center overflow-hidden bg-[#02030f] bg-grid-pattern"
    >
      {/* Subtle Radial Luxury Ambient Lighting */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#06b6d4]/10 rounded-full blur-[160px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[650px] h-[650px] bg-[#8b5cf6]/10 rounded-full blur-[160px] pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Headline, Description & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-8 text-left"
          >
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-200 text-xs font-bold tracking-widest uppercase backdrop-blur-md shadow-xl shadow-cyan-500/15">
              <Sparkles className="w-4 h-4 text-amber-400 animate-bounce" />
              <span>NEXT-GEN DIGITAL STUDIO</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-[#D1E8E2] leading-[1.06]">
              Transform your digital footprint with
              <span className="text-gradient-primary"> precision engineering</span>.
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-xl font-normal">
              We design premium web platforms, bespoke AI systems, and enterprise cloud experiences with a polished UI, fast performance, and modern Tailwind-led styling.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenQuote}
                className="px-8 py-4.5 rounded-2xl bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 hover:opacity-95 text-slate-950 font-black text-sm sm:text-base uppercase tracking-wider shadow-2xl shadow-cyan-500/35 transition-all duration-300 flex items-center justify-center gap-2.5 group transform hover:scale-105"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1.5 transition-transform text-slate-950" />
              </button>

              <a
                href="#portfolio"
                className="px-8 py-4.5 rounded-2xl bg-[#D1E8E2]/5 hover:bg-[#06b6d4]/15 text-[#D1E8E2] hover:text-[#06b6d4] font-bold text-sm sm:text-base border border-[#D1E8E2]/15 hover:border-[#06b6d4]/40 transition-all duration-300 flex items-center justify-center text-center"
              >
                Explore Case Studies
              </a>
            </div>

            {/* SLA & Engineering Pillars Bar */}
            <div className="pt-6 border-t border-[#D1E8E2]/10 grid grid-cols-3 gap-4 text-xs">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#06b6d4] shrink-0" />
                <span className="text-slate-300 font-semibold">100% IP Handover</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#f59e0b] shrink-0" />
                <span className="text-slate-300 font-semibold">0.04ms Edge Latency</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#06b6d4] shrink-0" />
                <span className="text-slate-300 font-semibold">SOC2 Security SLA</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Digital Engineering Workstation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-3xl bg-[#0f172a]/95 border border-[#06b6d4]/40 shadow-2xl backdrop-blur-2xl overflow-hidden shadow-[#06b6d4]/15">
              {/* Studio Window Header Bar */}
              <div className="px-6 py-4 border-b border-[#D1E8E2]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-[#050816]/90">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-[#06b6d4]" />
                  <span className="ml-2 text-xs font-mono text-[#06b6d4] font-bold flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5" /> ATELIER.COMMAND.CENTER
                  </span>
                </div>

                {/* Tab Switcher */}
                <div className="flex flex-wrap items-center gap-1 bg-[#D1E8E2]/5 p-1 rounded-xl border border-[#D1E8E2]/10 text-xs w-full sm:w-auto justify-between">
                  <button
                    onClick={() => setActiveTab('metrics')}
                    className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                      activeTab === 'metrics'
                        ? 'bg-gradient-to-r from-[#06b6d4] via-[#8b5cf6] to-[#f59e0b] text-slate-950 shadow'
                        : 'text-slate-400 hover:text-[#D1E8E2]'
                    }`}
                  >
                    Telemetry
                  </button>
                  <button
                    onClick={() => setActiveTab('code')}
                    className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                      activeTab === 'code'
                        ? 'bg-gradient-to-r from-[#06b6d4] via-[#8b5cf6] to-[#f59e0b] text-slate-950 shadow'
                        : 'text-slate-400 hover:text-[#D1E8E2]'
                    }`}
                  >
                    Blueprint
                  </button>
                  <button
                    onClick={() => setActiveTab('ai')}
                    className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                      activeTab === 'ai'
                        ? 'bg-gradient-to-r from-[#06b6d4] via-[#8b5cf6] to-[#f59e0b] text-slate-950 shadow'
                        : 'text-slate-400 hover:text-[#D1E8E2]'
                    }`}
                  >
                    AI Copilot
                  </button>
                  <button
                    onClick={() => setActiveTab('roi')}
                    className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                      activeTab === 'roi'
                        ? 'bg-gradient-to-r from-[#06b6d4] via-[#8b5cf6] to-[#f59e0b] text-slate-950 shadow'
                        : 'text-slate-400 hover:text-[#D1E8E2]'
                    }`}
                  >
                    ROI Simulator
                  </button>
                </div>
              </div>

              {/* Tab Content Display */}
              <div className="p-6 sm:p-8 min-h-[380px] flex flex-col justify-between bg-gradient-to-b from-transparent to-[#050816]/40">
                <AnimatePresence mode="wait">
                  {activeTab === 'metrics' && (
                    <motion.div
                      key="metrics"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-mono uppercase text-[#06b6d4] tracking-widest block font-bold">
                          PRODUCTION TELEMETRY
                        </span>
                        <h4 className="text-lg font-black text-[#D1E8E2]">
                          Global Core Web Vitals Benchmark
                        </h4>
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#06b6d4]/15 text-[#06b6d4] border border-[#06b6d4]/35 flex items-center gap-1.5 shadow-inner">
                        <Activity className="w-3.5 h-3.5 animate-pulse" /> OPTIMIZED
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div className="p-4 rounded-2xl bg-[#D1E8E2]/[0.03] border border-[#D1E8E2]/10 space-y-1">
                        <span className="text-2xl sm:text-3xl font-black text-[#D1E8E2]">
                          {simulatedScore}
                        </span>
                        <span className="text-[10px] text-[#06b6d4] block font-mono font-bold">
                          LIGHTHOUSE SCORE
                        </span>
                        <p className="text-xs text-slate-400">SSR + Edge Cache</p>
                      </div>
                      <div className="p-4 rounded-2xl bg-[#D1E8E2]/[0.03] border border-[#D1E8E2]/10 space-y-1">
                        <span className="text-2xl sm:text-3xl font-black text-[#06b6d4]">0.04ms</span>
                        <span className="text-[10px] text-[#f59e0b] block font-mono font-bold">
                          GLOBAL TTFB
                        </span>
                        <p className="text-xs text-slate-400">Zero Cold Start</p>
                      </div>
                      <div className="p-4 rounded-2xl bg-[#D1E8E2]/[0.03] border border-[#D1E8E2]/10 space-y-1">
                        <span className="text-2xl sm:text-3xl font-black text-[#D1E8E2]">99.99%</span>
                        <span className="text-[10px] text-[#06b6d4] block font-mono font-bold">
                          UPTIME SLA
                        </span>
                        <p className="text-xs text-slate-400">Multi-Region Cloud</p>
                      </div>
                    </div>

                    {/* Simulated Server Cluster Graph */}
                    <div className="p-4 rounded-2xl bg-[#050816] border border-[#D1E8E2]/10 space-y-2.5 shadow-inner">
                      <div className="flex items-center justify-between text-xs text-slate-300">
                        <span className="flex items-center gap-1.5 font-mono font-bold">
                          <Globe className="w-3.5 h-3.5 text-[#06b6d4]" /> Edge CDN Routing Matrix
                        </span>
                        <span className="text-[#06b6d4] font-mono font-bold">36 Active Regions</span>
                      </div>
                      <div className="h-2.5 rounded-full bg-[#D1E8E2]/10 overflow-hidden p-0.5">
                        <div className="h-full rounded-full bg-gradient-to-r from-[#06b6d4] via-[#06b6d4] to-[#f59e0b] w-[97%]" />
                      </div>
                    </div>
                    </motion.div>
                  )}

                  {activeTab === 'code' && (
                    <motion.div
                      key="code"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="font-mono text-xs sm:text-sm text-slate-300 space-y-2.5"
                    >
                    <p className="text-slate-500">{`// LOGICSPHERE TECH Private Architectural Blueprint`}</p>
                    <p>
                      <span className="text-[#06b6d4]">import</span> {`{ ExecutiveAtelier }`}{' '}
                      <span className="text-[#06b6d4]">from</span>{' '}
                      <span className="text-[#f59e0b]">&apos;@logicsphere/atelier-core&apos;</span>;
                    </p>
                    <p className="pt-2">
                      <span className="text-[#06b6d4]">export async function</span>{' '}
                      <span className="text-amber-300">architectSolution</span>() {`{`}
                    </p>
                    <p className="pl-4">
                      <span className="text-[#06b6d4]">const</span> stack = {`{`}
                    </p>
                    <p className="pl-8 text-slate-200">framework: <span className="text-[#f59e0b]">&apos;Next.js 16 App Router Edge&apos;</span>,</p>
                    <p className="pl-8 text-slate-200">database: <span className="text-[#f59e0b]">&apos;PostgreSQL Distributed Cluster&apos;</span>,</p>
                    <p className="pl-8 text-slate-200">aiEngine: <span className="text-amber-300">&apos;Custom RAG Vector Pipeline&apos;</span>,</p>
                    <p className="pl-8 text-slate-200">security: <span className="text-[#06b6d4]">&apos;SOC2 Type II & ISO 27001&apos;</span>,</p>
                    <p className="pl-4">{`}`};</p>
                    <p className="pl-4">
                      <span className="text-[#06b6d4]">return</span> stack.deployToGlobalAtelier();
                    </p>
                    <p>{`}`}</p>
                    </motion.div>
                  )}

                  {activeTab === 'ai' && (
                    <motion.div
                      key="ai"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-[#06b6d4] uppercase tracking-widest font-bold">
                        CUSTOM AI RAG VECTOR PIPELINE
                      </span>
                      <span className="text-[11px] font-mono text-[#f59e0b] font-bold">0.03s Inference</span>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#050816] border border-[#D1E8E2]/10 flex items-center justify-between gap-3 shadow-inner">
                      <input
                        type="text"
                        value={queryInput}
                        onChange={(e) => setQueryInput(e.target.value)}
                        className="bg-transparent text-[#D1E8E2] text-xs sm:text-sm w-full focus:outline-none font-mono"
                      />
                      <button
                        onClick={() => setSimulatedScore(100)}
                        className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#06b6d4] via-[#06b6d4] to-[#f59e0b] text-slate-950 text-xs font-black uppercase tracking-wider shrink-0"
                      >
                        Simulate
                      </button>
                    </div>

                    <div className="p-4.5 rounded-2xl bg-[#D1E8E2]/[0.03] border border-[#06b6d4]/30 space-y-2 text-xs text-slate-300">
                      <div className="flex items-center gap-2 text-[#06b6d4] font-bold">
                        <Database className="w-4 h-4" /> Vector Embedding Match (Similarity: 0.998)
                      </div>
                      <p className="text-slate-300 leading-relaxed font-sans">
                        LOGICSPHERE TECH engineers proprietary RAG vector architectures that index your enterprise documentation with zero data leakage to public models. Sub-second semantic search guaranteed.
                      </p>
                    </div>
                    </motion.div>
                  )}

                  {activeTab === 'roi' && (
                    <motion.div
                      key="roi"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-5"
                    >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-[#06b6d4] uppercase tracking-widest font-bold flex items-center gap-1.5">
                        <Calculator className="w-4 h-4" /> ATELIER ROI & SPEED SIMULATOR
                      </span>
                      <span className="text-xs font-mono text-[#f59e0b] font-bold flex items-center gap-1">
                        <TrendingUp className="w-3.5 h-3.5" /> +$340K ANNUAL LIFT
                      </span>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#050816] border border-[#D1E8E2]/10 space-y-4">
                      <div className="flex items-center justify-between text-xs font-semibold text-slate-300">
                        <span>Monthly Active Users / Visitors:</span>
                        <span className="font-mono text-base font-black text-[#06b6d4]">
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
                        className="w-full accent-[#06b6d4] cursor-pointer"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-center">
                      <div className="p-3.5 rounded-2xl bg-[#D1E8E2]/[0.03] border border-[#D1E8E2]/10">
                        <span className="text-xl sm:text-2xl font-black text-[#06b6d4]">-74%</span>
                        <span className="block text-[10px] font-mono text-slate-400 uppercase mt-1">
                          Latency Reduction
                        </span>
                      </div>
                      <div className="p-3.5 rounded-2xl bg-[#D1E8E2]/[0.03] border border-[#D1E8E2]/10">
                        <span className="text-xl sm:text-2xl font-black text-[#D1E8E2]">+48%</span>
                        <span className="block text-[10px] font-mono text-slate-400 uppercase mt-1">
                          Conversion Velocity
                        </span>
                      </div>
                    </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Bottom interactive card trigger */}
                <div className="pt-5 border-t border-[#D1E8E2]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                  <span className="text-slate-400">Ready to engineer your executive platform?</span>
                  <button
                    onClick={onOpenQuote}
                    className="text-[#06b6d4] hover:text-[#f59e0b] font-black flex items-center gap-1.5 group tracking-wider uppercase"
                  >
                    <span>Schedule Architecture Sign-Off</span>
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
