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
      className="relative min-h-screen pt-36 sm:pt-44 pb-24 flex items-center justify-center overflow-hidden bg-[#F8FAFC] dark:bg-[#0F172A] bg-grid-pattern transition-colors duration-300"
    >
      {/* Subtle ambient light glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#0F766E]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[550px] h-[550px] bg-[#D4AF37]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* Left Column: Headline, Description & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-8 text-left"
          >
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F766E]/10 dark:bg-[#0F766E]/20 border border-[#0F766E]/30 text-[#0F766E] dark:text-[#2DD4BF] text-xs font-semibold font-body tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>LOGICSPHERE ENTERPRISE ATELIER</span>
            </div>

            {/* Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              Transform your digital footprint with
              <span className="text-[#0F766E] dark:text-[#2DD4BF] block mt-2"> precision engineering.</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl font-body">
              We design premium web platforms, bespoke AI systems, and enterprise cloud architectures engineered for high-concurrency scaling and enterprise performance.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenQuote}
                className="px-8 py-4 bg-[#0F766E] hover:bg-[#0D9488] text-white font-medium rounded-full text-sm transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-[#0F766E]/25 flex items-center justify-center gap-2.5 group"
              >
                <span>Request Architecture Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#portfolio"
                className="px-8 py-4 bg-white dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-medium rounded-full text-sm border border-slate-200 dark:border-slate-800 transition-all duration-200 flex items-center justify-center text-center shadow-sm"
              >
                Explore Case Studies
              </a>
            </div>

            {/* SLA & Engineering Pillars Bar */}
            <div className="pt-8 border-t border-slate-200 dark:border-slate-800 grid grid-cols-3 gap-4 text-xs font-body text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#0F766E] dark:text-[#2DD4BF] shrink-0" />
                <span>100% IP Handover</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Sub-0.04ms Edge</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0F766E] dark:text-[#2DD4BF] shrink-0" />
                <span>SOC2 Verified</span>
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
            <div className="relative rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl shadow-slate-900/5 overflow-hidden z-10">
              {/* Workstation Window Header Bar */}
              <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-slate-50/80 dark:bg-slate-800/50">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-400" />
                  <span className="w-3 h-3 rounded-full bg-amber-400" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="ml-2 text-xs font-mono text-slate-700 dark:text-slate-300 font-semibold flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-[#0F766E]" /> ATELIER.CONTROL
                  </span>
                </div>

                {/* Tab Switcher */}
                <div className="flex items-center gap-1 bg-white dark:bg-slate-900 p-1 rounded-full border border-slate-200 dark:border-slate-800 text-xs font-body">
                  {(['metrics', 'code', 'ai', 'roi'] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-3.5 py-1 rounded-full font-medium transition-all duration-200 ${
                        activeTab === tab
                          ? 'bg-[#0F766E] text-white shadow-sm'
                          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content Display */}
              <div className="p-6 sm:p-8 min-h-[380px] flex flex-col justify-between">
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
                          <span className="text-xs font-mono font-semibold uppercase text-[#0F766E] dark:text-[#2DD4BF] tracking-wider block">
                            PRODUCTION TELEMETRY
                          </span>
                          <h4 className="text-lg font-heading font-bold text-slate-900 dark:text-white">
                            Global Core Web Vitals Benchmark
                          </h4>
                        </div>
                        <span className="px-3 py-1 rounded-full border border-[#0F766E]/30 text-xs font-body bg-[#0F766E]/10 text-[#0F766E] dark:text-[#2DD4BF] flex items-center gap-1.5">
                          <Activity className="w-3.5 h-3.5 animate-pulse" /> OPTIMIZED
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 font-body">
                        <div className="p-4 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 rounded-2xl space-y-1">
                          <span className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white">
                            {simulatedScore}
                          </span>
                          <span className="text-[10px] text-slate-500 font-mono block uppercase tracking-wider">
                            LIGHTHOUSE SCORE
                          </span>
                        </div>
                        <div className="p-4 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 rounded-2xl space-y-1">
                          <span className="text-xl sm:text-2xl font-bold font-heading text-[#0F766E] dark:text-[#2DD4BF]">0.04ms</span>
                          <span className="text-[10px] text-slate-500 font-mono block uppercase tracking-wider">
                            RESPONSE TTFB
                          </span>
                        </div>
                        <div className="p-4 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 rounded-2xl space-y-1">
                          <span className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white">99.99%</span>
                          <span className="text-[10px] text-slate-500 font-mono block uppercase tracking-wider">
                            UPTIME SLA
                          </span>
                        </div>
                      </div>

                      {/* Server Cluster Graph & Architecture Visual */}
                      <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 h-28 group">
                        <Image
                          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
                          alt="Cloud System Infrastructure"
                          fill
                          sizes="(max-w-768px) 100vw, 40vw"
                          className="object-cover opacity-30 group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-900 via-transparent to-transparent" />
                        <div className="relative z-10 p-4 h-full flex flex-col justify-between font-body">
                          <div className="flex items-center justify-between text-xs text-slate-700 dark:text-slate-300 font-medium">
                            <span className="flex items-center gap-1.5">
                              <Globe className="w-3.5 h-3.5 text-[#0F766E] dark:text-[#2DD4BF]" /> Edge CDN Routing Matrix
                            </span>
                            <span className="text-[#0F766E] dark:text-[#2DD4BF] font-semibold text-[11px]">36 Active Regions</span>
                          </div>
                          <div className="h-2 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 overflow-hidden rounded-full">
                            <div className="h-full bg-gradient-to-r from-[#0F766E] to-[#D4AF37] w-[97%] animate-[pulse_3s_ease-in-out_infinite]" />
                          </div>
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
                      className="font-mono text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-2.5 bg-slate-50 dark:bg-slate-800/40 p-4 rounded-2xl border border-slate-200 dark:border-slate-800"
                    >
                      <p className="text-slate-400">{`// LOGICSPHERE TECH Architectural Blueprint`}</p>
                      <p>
                        <span className="text-[#0F766E] dark:text-[#2DD4BF]">import</span> {`{ Solution }`}{' '}
                        <span className="text-[#0F766E] dark:text-[#2DD4BF]">from</span>{' '}
                        <span className="text-[#D4AF37]">&apos;@logicsphere/studio-core&apos;</span>;
                      </p>
                      <p className="pt-2">
                        <span className="text-[#0F766E] dark:text-[#2DD4BF]">export async function</span>{' '}
                        <span className="text-slate-900 dark:text-white font-bold">deployWorkspace</span>() {`{`}
                      </p>
                      <p className="pl-4">
                        <span className="text-[#0F766E] dark:text-[#2DD4BF]">const</span> stack = {`{`}
                      </p>
                      <p className="pl-8">framework: <span className="text-[#0F766E] dark:text-[#2DD4BF]">&apos;Next.js 16 (Turbopack)&apos;</span>,</p>
                      <p className="pl-8">database: <span className="text-[#0F766E] dark:text-[#2DD4BF]">&apos;PostgreSQL Distributed&apos;</span>,</p>
                      <p className="pl-8">styling: <span className="text-[#D4AF37]">&apos;Tailwind CSS Grid&apos;</span>,</p>
                      <p className="pl-8">security: <span className="text-[#0F766E] dark:text-[#2DD4BF]">&apos;SOC2 Architecture&apos;</span>,</p>
                      <p className="pl-4">{`}`};</p>
                      <p className="pl-4">
                        <span className="text-[#0F766E] dark:text-[#2DD4BF]">return</span> stack.deploy();
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
                      <div className="flex items-center justify-between font-mono text-xs">
                        <span className="uppercase tracking-widest text-[#0F766E] dark:text-[#2DD4BF] font-semibold">
                          ENGINEERING QUERY STACK
                        </span>
                        <span className="text-slate-500">0.03s Execution</span>
                      </div>

                      <div className="p-4 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 rounded-2xl flex items-center justify-between gap-3 font-body">
                        <input
                          type="text"
                          value={queryInput}
                          onChange={(e) => setQueryInput(e.target.value)}
                          className="bg-transparent text-slate-900 dark:text-white text-xs sm:text-sm w-full focus:outline-none"
                        />
                        <button
                          onClick={() => setSimulatedScore(100)}
                          className="px-4 py-2 bg-[#0F766E] text-white text-xs font-medium rounded-full shrink-0 hover:bg-[#0D9488] transition-colors"
                        >
                          Execute
                        </button>
                      </div>

                      <div className="p-4 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 rounded-2xl space-y-2 text-xs font-body">
                        <div className="flex items-center gap-2 text-[#0F766E] dark:text-[#2DD4BF] font-semibold">
                          <Database className="w-4 h-4" /> Solution Matrix (Confidence Score: 0.999)
                        </div>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-body">
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
                      <div className="flex items-center justify-between font-body text-xs">
                        <span className="uppercase tracking-widest text-[#0F766E] dark:text-[#2DD4BF] font-semibold flex items-center gap-1.5">
                          <Calculator className="w-4 h-4" /> SPEED SIMULATOR
                        </span>
                        <span className="text-[#D4AF37] font-semibold flex items-center gap-1">
                          <TrendingUp className="w-3.5 h-3.5" /> +$340K ANNUAL LIFT
                        </span>
                      </div>

                      <div className="p-4 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 rounded-2xl space-y-4 font-body">
                        <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-300">
                          <span>Monthly Active Visitors:</span>
                          <span className="text-base font-semibold text-slate-900 dark:text-white font-heading">
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
                          className="w-full accent-[#0F766E] bg-slate-200 dark:bg-slate-700 rounded-lg cursor-pointer"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3 text-center font-body">
                        <div className="p-4 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 rounded-2xl">
                          <span className="text-xl font-bold font-heading text-[#0F766E] dark:text-[#2DD4BF]">-74%</span>
                          <span className="block text-xs text-slate-500 uppercase tracking-wider mt-1 font-mono">
                            Latency Reduction
                          </span>
                        </div>
                        <div className="p-4 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 rounded-2xl">
                          <span className="text-xl font-bold font-heading text-slate-900 dark:text-white">+48%</span>
                          <span className="block text-xs text-slate-500 uppercase tracking-wider mt-1 font-mono">
                            Conversion Lift
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Bottom interactive trigger */}
                <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-body">
                  <span className="text-slate-500 dark:text-slate-400">Ready to engineer your custom system?</span>
                  <button
                    onClick={onOpenQuote}
                    className="text-[#0F766E] dark:text-[#2DD4BF] hover:underline font-medium flex items-center gap-1.5 group"
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
