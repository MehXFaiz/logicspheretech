'use client';

import React, { useState } from 'react';
import { PROCESS_STEPS } from '@/data';
import { DynamicIcon } from '@/components/common/DynamicIcon';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<number>(1);

  const currentStepData = PROCESS_STEPS.find((s) => s.step === selectedStep) || PROCESS_STEPS[0];

  return (
    <section id="process" className="py-28 bg-[#2C3531] relative overflow-hidden border-b border-[#116466]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-none text-[10px] font-mono font-semibold uppercase tracking-widest bg-[#116466]/20 text-[#D9B08C] border border-[#116466] mb-3">
            <Sparkles className="w-3.5 h-3.5" /> DEVELOPMENT LIFECYCLE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#D1E8E2] tracking-wide">
            Our 7-Step Architectural{' '}
            <span className="text-gradient-gold font-bold">
              Engineering Process
            </span>
          </h2>
          <p className="mt-4 text-[#94a3b8] text-sm sm:text-base leading-relaxed font-mono">
            Explore our systematic agile development stages, specific deliverables, and code sign-off methodology.
          </p>
        </div>

        {/* Interactive Step Navigator Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-12 font-mono">
          {PROCESS_STEPS.map((stepItem) => {
            const isSelected = selectedStep === stepItem.step;
            return (
              <button
                key={stepItem.step}
                onClick={() => setSelectedStep(stepItem.step)}
                className={`p-4 rounded-none text-left transition-all flex flex-col justify-between border ${
                  isSelected
                    ? 'bg-[#116466] border border-[#FFCB9A] text-[#D1E8E2]'
                    : 'bg-[#242b28] text-slate-300 border-[#116466]/40 hover:border-[#FFCB9A] hover:bg-[#116466]/10'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-[9px] font-semibold px-2 py-0.5 rounded-none ${
                      isSelected ? 'bg-[#2C3531] text-[#FFCB9A] border border-[#FFCB9A]/40' : 'bg-[#2C3531] text-[#116466]'
                    }`}
                  >
                    0{stepItem.step}
                  </span>
                  <DynamicIcon name={stepItem.icon} className="w-4 h-4" />
                </div>
                <h4 className="font-semibold text-xs tracking-wider uppercase truncate">{stepItem.title}</h4>
              </button>
            );
          })}
        </div>

        {/* Selected Step Deep Specification Showcase */}
        <div className="rounded-none bg-[#242b28] border border-[#116466] p-8 sm:p-12 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3 font-mono">
                <span className="px-3.5 py-1 rounded-none text-[10px] font-semibold bg-[#116466]/20 text-[#D1E8E2] border border-[#116466]/60">
                  PHASE 0{currentStepData.step} • {currentStepData.duration}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-slate-400">
                  {currentStepData.subtitle}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#D1E8E2] font-mono uppercase tracking-wide">
                {currentStepData.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                {currentStepData.description}
              </p>

              <div>
                <h4 className="text-[10px] font-mono font-semibold text-[#FFCB9A] uppercase tracking-widest mb-3">
                  Key Sprint Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono">
                  {currentStepData.deliverables.map((deliv, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-[#2C3531] border border-[#116466]/40 flex items-center gap-2.5 text-[10px] text-slate-200"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#116466] shrink-0" />
                      <span className="font-medium">{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right step visual indicator card */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 rounded-none bg-[#2C3531] border border-[#116466]/40 text-center space-y-4 font-mono">
              <div className="w-16 h-16 rounded-none bg-[#116466] border border-[#FFCB9A] flex items-center justify-center text-[#D1E8E2]">
                <DynamicIcon name={currentStepData.icon} className="w-8 h-8" />
              </div>
              <h4 className="text-sm font-semibold text-[#D1E8E2] uppercase tracking-wider">
                Phase 0{currentStepData.step}: {currentStepData.title}
              </h4>
              <p className="text-[10px] text-slate-400 max-w-xs font-sans">
                Guaranteed code sign-off and architecture review before proceeding to subsequent sprints.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
