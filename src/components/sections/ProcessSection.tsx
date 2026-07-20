'use client';

import React, { useState } from 'react';
import { PROCESS_STEPS } from '@/data';
import { DynamicIcon } from '@/components/common/DynamicIcon';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<number>(1);

  const currentStepData = PROCESS_STEPS.find((s) => s.step === selectedStep) || PROCESS_STEPS[0];

  return (
    <section id="process" className="py-28 bg-[#2C3531] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#116466]/10 text-[#116466] border border-[#116466]/35 mb-3">
            <Sparkles className="w-3.5 h-3.5" /> AGILE ATELIER LIFECYCLE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#D1E8E2] tracking-tight">
            Our 7-Step Architectural{' '}
            <span className="text-gradient-gold">
              Development Methodology
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Click any phase below to explore our systematic engineering timeline, deliverables, and rigorous sign-off methodology.
          </p>
        </div>

        {/* Interactive Step Navigator Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-12">
          {PROCESS_STEPS.map((stepItem) => {
            const isSelected = selectedStep === stepItem.step;
            return (
              <button
                key={stepItem.step}
                onClick={() => setSelectedStep(stepItem.step)}
                className={`p-4 rounded-2xl text-left transition-all flex flex-col justify-between border ${
                  isSelected
                    ? 'bg-gradient-to-br from-[#FFCB9A] via-[#116466] to-[#D9B08C] text-slate-950 border-[#116466] shadow-xl shadow-[#116466]/30 scale-[1.04]'
                    : 'bg-[#343e39]/90 text-slate-300 border-[#D1E8E2]/10 hover:border-[#116466]/40 hover:bg-[#D1E8E2]/5'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-xs font-mono font-black px-2 py-0.5 rounded ${
                      isSelected ? 'bg-slate-950/20 text-slate-950' : 'bg-[#D1E8E2]/5 text-[#116466]'
                    }`}
                  >
                    0{stepItem.step}
                  </span>
                  <DynamicIcon name={stepItem.icon} className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-xs sm:text-sm line-clamp-1">{stepItem.title}</h4>
              </button>
            );
          })}
        </div>

        {/* Selected Step Deep Specification Showcase */}
        <div className="rounded-3xl bg-[#343e39]/95 border border-[#116466]/40 shadow-2xl p-8 sm:p-12 shadow-[#116466]/15">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-[#116466]/15 text-[#116466] border border-[#116466]/40">
                  PHASE 0{currentStepData.step} • {currentStepData.duration}
                </span>
                <span className="text-xs font-semibold text-slate-400">
                  {currentStepData.subtitle}
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-black text-[#D1E8E2]">
                {currentStepData.title}
              </h3>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                {currentStepData.description}
              </p>

              <div>
                <h4 className="text-xs font-mono font-bold text-[#116466] uppercase tracking-wider mb-3">
                  Key Sprint Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentStepData.deliverables.map((deliv, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-[#D1E8E2]/[0.03] border border-[#D1E8E2]/10 flex items-center gap-2.5 text-xs text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#116466] shrink-0" />
                      <span className="font-medium">{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right step visual indicator card */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 rounded-3xl bg-[#2C3531] border border-[#D1E8E2]/10 text-center space-y-4">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#FFCB9A] via-[#116466] to-[#D9B08C] flex items-center justify-center shadow-2xl shadow-[#116466]/30">
                <DynamicIcon name={currentStepData.icon} className="w-10 h-10 text-slate-950 stroke-[2.5]" />
              </div>
              <h4 className="text-lg font-bold text-[#D1E8E2]">
                Phase 0{currentStepData.step}: {currentStepData.title}
              </h4>
              <p className="text-xs text-slate-400 max-w-xs">
                Guaranteed sign-off and rigorous architecture review before proceeding to subsequent sprints.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
