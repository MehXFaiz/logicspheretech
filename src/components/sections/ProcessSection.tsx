'use client';

import React, { useState } from 'react';
import { PROCESS_STEPS } from '@/data';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProcessSectionProps {
  onOpenQuote?: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenQuote }) => {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <section id="process" className="py-32 bg-[#0B0D12] relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#B88A44]/[0.04] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B2330] border border-[#B88A44]/20 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#B88A44]" />
            <span className="text-[11px] uppercase tracking-[0.25em] font-mono text-[#B88A44] font-semibold">
              OUR PROCESS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-heading font-extrabold text-[#F5F1EA] tracking-tight leading-tight"
          >
            Structured Engineering Roadmap
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base text-[#B9B4AA] font-body font-light leading-relaxed max-w-2xl mx-auto"
          >
            We follow a disciplined agile framework that guarantees predictability, high velocity, zero technical debt, and transparent execution.
          </motion.p>
        </div>

        {/* Interactive Steps Horizontal Navigation */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-12 no-scrollbar justify-start lg:justify-center">
          {PROCESS_STEPS.map((step) => {
            const isActive = activeStep === step.step;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStep(step.step)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-full text-xs font-mono tracking-wider transition-all duration-300 shrink-0 ${
                  isActive
                    ? 'bg-[#B88A44] text-[#0B0D12] font-bold shadow-[0_4px_20px_rgba(184,138,68,0.3)]'
                    : 'bg-[#1B2330] text-[#B9B4AA] hover:text-[#F5F1EA] border border-[#B88A44]/15'
                }`}
              >
                <span className={`w-5 h-5 rounded-full text-[10px] flex items-center justify-center font-bold ${
                  isActive ? 'bg-[#0B0D12] text-[#B88A44]' : 'bg-[#252D3D] text-[#B9B4AA]'
                }`}>
                  0{step.step}
                </span>
                <span>{step.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Step Detailed View Card */}
        {PROCESS_STEPS.filter(s => s.step === activeStep).map((currentStep) => (
          <motion.div
            key={currentStep.step}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="luxury-card rounded-3xl p-8 sm:p-12 border border-[#B88A44]/20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#252D3D] text-[#B88A44] border border-[#B88A44]/25">
                  Phase 0{currentStep.step} • {currentStep.duration}
                </span>
                <span className="text-xs font-mono text-[#B9B4AA]">{currentStep.subtitle}</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-heading font-bold text-[#F5F1EA]">
                {currentStep.title}
              </h3>

              <p className="text-sm sm:text-base font-body text-[#B9B4AA] font-light leading-relaxed">
                {currentStep.description}
              </p>

              {/* Deliverables List */}
              <div className="pt-4 border-t border-[#B88A44]/12 space-y-3">
                <span className="text-xs font-mono text-[#B88A44] uppercase tracking-wider block font-semibold">
                  Guaranteed Deliverables:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentStep.deliverables.map((deliv, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-[#F5F1EA]">
                      <CheckCircle2 className="w-4 h-4 text-[#B88A44] shrink-0" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Step Action Visual */}
            <div className="lg:col-span-5 flex flex-col justify-center items-center lg:items-end">
              <div className="w-full max-w-sm p-8 rounded-2xl bg-[#12161F] border border-[#B88A44]/20 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#B88A44]/15 border border-[#B88A44] text-[#B88A44] flex items-center justify-center mx-auto text-2xl font-mono font-bold">
                  0{currentStep.step}
                </div>

                <h4 className="text-base font-heading font-bold text-[#F5F1EA]">
                  Sprint Duration: {currentStep.duration}
                </h4>

                <p className="text-xs text-[#B9B4AA]">
                  Full visibility with daily standups and weekly staging demonstrations.
                </p>

                <button
                  onClick={onOpenQuote}
                  className="btn-gold-primary w-full py-3 text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2"
                >
                  <span>Start Phase 01</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
};
