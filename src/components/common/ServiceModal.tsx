'use client';

import React from 'react';
import { ServiceItem } from '@/types';
import { DynamicIcon } from '@/components/common/DynamicIcon';
import { X, CheckCircle2, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOpenQuote: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onOpenQuote,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl p-6 sm:p-10 text-left animate-in zoom-in-95 duration-200 font-body"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white bg-slate-50 dark:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-[#0F766E] text-white flex items-center justify-center shadow-md shrink-0">
            <DynamicIcon name={service.iconName} className="w-7 h-7 stroke-[2.5]" />
          </div>
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#0F766E] dark:text-[#2DD4BF]">
              ARCHITECTURE & SCOPE SPECIFICATION
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 dark:text-white">{service.title}</h3>
          </div>
        </div>

        {/* Detailed description */}
        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
          {service.fullDescription || service.description}
        </p>

        {/* Key Deliverables */}
        <div className="mb-8">
          <h4 className="text-xs font-mono font-semibold text-[#D4AF37] uppercase tracking-wider mb-4">
            Key Architectural Deliverables
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {service.features.map((feature, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 flex items-center gap-3 text-xs text-slate-700 dark:text-slate-200 font-medium"
              >
                <CheckCircle2 className="w-4 h-4 text-[#0F766E] dark:text-[#2DD4BF] shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Footer */}
        <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <ShieldCheck className="w-4 h-4 text-[#0F766E]" />
            <span>Dedicated Principal Architect Assigned</span>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenQuote(service.title);
            }}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#0F766E] hover:bg-[#0D9488] text-white font-medium text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-2 transition-all"
          >
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span>Request Scope Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
