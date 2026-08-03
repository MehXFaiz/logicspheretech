'use client';

import React from 'react';
import Image from 'next/image';
import { CheckCircle2, Sparkles, Award, Shield } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-28 bg-[#F8FAFC] dark:bg-[#0F172A] relative overflow-hidden transition-colors duration-300 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-body">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Architecture Blueprint & Executive Stats */}
          <div className="lg:col-span-6 space-y-6 relative">
            {/* Visual Team Image Card */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800 shadow-sm aspect-[16/10] group">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="LogicSphere Engineering Atelier"
                fill
                sizes="(max-w-768px) 100vw, 50vw"
                className="object-cover opacity-90 group-hover:scale-[1.02] transition-all duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-xs text-white bg-slate-900/90 px-3.5 py-2 rounded-xl border border-slate-700 shadow-sm">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#2DD4BF] animate-pulse" />
                  LOGICSPHERE CO-DEVELOPMENT
                </span>
                <span className="text-[#D4AF37] font-bold">ATELIER SUITE 4A</span>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm p-8">
              <div className="flex items-center justify-between pb-6 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#0F766E] text-white flex items-center justify-center font-semibold shadow-sm">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm font-heading">LOGICSPHERE TECH</h4>
                    <span className="text-[10px] text-[#0F766E] dark:text-[#2DD4BF] font-mono tracking-wider block font-semibold">
                      EXECUTIVE HQ
                    </span>
                  </div>
                </div>
                <span className="px-3.5 py-1.5 rounded-full text-xs font-mono bg-[#0F766E]/10 dark:bg-[#0F766E]/20 text-[#0F766E] dark:text-[#2DD4BF] border border-[#0F766E]/30 uppercase font-semibold">
                  SOC2 VERIFIED
                </span>
              </div>

              {/* Engineering Manifesto Grid */}
              <div className="grid grid-cols-2 gap-4 my-6 font-body">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-1">
                  <span className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 dark:text-white">55+</span>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Senior Architects & AI Developers
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-1">
                  <span className="text-2xl sm:text-3xl font-bold font-heading text-[#D4AF37]">100%</span>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Clean Documented Source Ownership
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-1">
                  <span className="text-2xl sm:text-3xl font-bold font-heading text-[#0F766E] dark:text-[#2DD4BF]">0.04ms</span>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Global Edge Response & Zero Latency
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-1">
                  <span className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 dark:text-white">24/7</span>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Mission-Critical Support SLA
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-700 dark:text-slate-300 font-medium">
                <span>
                  ISO 27001 & SOC2 Certified Engineering
                </span>
                <Award className="w-5 h-5 text-[#D4AF37] shrink-0" />
              </div>
            </div>
          </div>

          {/* Right Column: Executive About Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#0F766E]/10 dark:bg-[#0F766E]/20 text-[#0F766E] dark:text-[#2DD4BF] border border-[#0F766E]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" /> WHO WE ARE
            </span>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
              Architecting Digital Products With{' '}
              <span className="text-[#0F766E] dark:text-[#2DD4BF]">
                Uncompromising Quality
              </span>
            </h2>

            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              LOGICSPHERE TECH is an elite software studio. We specialize in building enterprise web applications, high-concurrency cloud systems, and bespoke AI RAG pipelines with 100% intellectual property handover.
            </p>

            <div className="space-y-3 pt-2 font-body">
              {[
                "Direct collaboration with dedicated Principal Engineers (No middle layers)",
                "Automated CI/CD testing, strict TypeScript validation, and penetration audits",
                "Immediate 100% intellectual property transfer with full DevOps documentation"
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-3 text-slate-700 dark:text-slate-200 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#0F766E] dark:text-[#2DD4BF] shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
