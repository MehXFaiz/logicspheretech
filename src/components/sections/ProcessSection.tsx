'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PROCESS_STEPS } from '@/data';
import { DynamicIcon } from '@/components/common/DynamicIcon';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ProcessSection: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<number>(1);

  const currentStepData = PROCESS_STEPS.find((s) => s.step === selectedStep) || PROCESS_STEPS[0];

  return (
    <section id="process" className="py-28 bg-[#F8FAFC] dark:bg-[#0F172A] relative overflow-hidden transition-colors duration-300 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 font-body">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#0F766E]/10 dark:bg-[#0F766E]/20 text-[#0F766E] dark:text-[#2DD4BF] border border-[#0F766E]/30 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" /> DEVELOPMENT LIFECYCLE
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
            Our 7-Step Architectural{' '}
            <span className="text-[#0F766E] dark:text-[#2DD4BF]">
              Engineering Process
            </span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Explore our systematic agile development stages, specific deliverables, and code sign-off methodology.
          </p>
        </div>

        {/* Interactive Step Navigator Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-12 font-body">
          {PROCESS_STEPS.map((stepItem) => {
            const isSelected = selectedStep === stepItem.step;
            return (
              <button
                key={stepItem.step}
                onClick={() => setSelectedStep(stepItem.step)}
                className={`p-4 rounded-2xl text-left transition-all duration-200 flex flex-col justify-between border ${
                  isSelected
                    ? 'bg-[#0F766E] text-white border-[#0F766E] shadow-md'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-[#0F766E]/50'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-800 text-[#0F766E] dark:text-[#2DD4BF]'
                    }`}
                  >
                    0{stepItem.step}
                  </span>
                  <DynamicIcon name={stepItem.icon} className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-xs tracking-wide uppercase truncate font-heading">{stepItem.title}</h4>
              </button>
            );
          })}
        </div>

        {/* Selected Step Deep Specification Showcase */}
        <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 sm:p-12 shadow-sm font-body">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-[#0F766E]/10 dark:bg-[#0F766E]/20 text-[#0F766E] dark:text-[#2DD4BF] border border-[#0F766E]/30">
                  PHASE 0{currentStepData.step} • {currentStepData.duration}
                </span>
                <span className="text-xs uppercase tracking-wider text-slate-500 font-mono">
                  {currentStepData.subtitle}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-heading">
                {currentStepData.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {currentStepData.description}
              </p>

              <div>
                <h4 className="text-xs font-mono font-semibold text-[#D4AF37] uppercase tracking-wider mb-3">
                  Key Sprint Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-body">
                  {currentStepData.deliverables.map((deliv, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-200 font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#0F766E] dark:text-[#2DD4BF] shrink-0" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right step visual indicator card */}
            <div className="lg:col-span-5 relative h-72 w-full rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800 shadow-sm flex flex-col justify-end p-6 group">
              {currentStepData.image && (
                <Image
                  src={currentStepData.image}
                  alt={currentStepData.title}
                  fill
                  sizes="(max-w-768px) 100vw, 40vw"
                  className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-900 via-transparent to-transparent" />

              <div className="relative z-10 space-y-2 font-body">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0F766E] text-white flex items-center justify-center shrink-0">
                    <DynamicIcon name={currentStepData.icon} className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#D4AF37] font-bold block uppercase tracking-wider">
                      PHASE 0{currentStepData.step} ARCHITECTURE
                    </span>
                    <h4 className="text-sm font-bold font-heading text-slate-900 dark:text-white">
                      {currentStepData.title}
                    </h4>
                  </div>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Guaranteed deliverables sign-off and architecture review before proceeding to subsequent sprints.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
