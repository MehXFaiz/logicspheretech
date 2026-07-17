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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0B0E14] border border-[#D4AF37]/40 shadow-2xl p-6 sm:p-10 text-left animate-in zoom-in-95 duration-200 shadow-[#D4AF37]/20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 hover:bg-[#D4AF37]/20 text-slate-400 hover:text-[#D4AF37] transition-colors border border-white/10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#9E822F] via-[#D4AF37] to-[#E5C158] flex items-center justify-center text-slate-950 shadow-xl shadow-[#D4AF37]/30 shrink-0">
            <DynamicIcon name={service.iconName} className="w-7 h-7 stroke-[2.5]" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF37]">
              ARCHITECTURE & SCOPE SPECIFICATION
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">{service.title}</h3>
          </div>
        </div>

        {/* Detailed description */}
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
          {service.fullDescription || service.description}
        </p>

        {/* Key Deliverables */}
        <div className="mb-8">
          <h4 className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-wider mb-4">
            Key Architectural Deliverables
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {service.features.map((feature, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-3 text-xs text-slate-200"
              >
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Footer */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
            <span>Dedicated Principal Architect Assigned</span>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenQuote(service.title);
            }}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#9E822F] via-[#D4AF37] to-[#E5C158] hover:opacity-95 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-[#D4AF37]/30 flex items-center justify-center gap-2 font-mono"
          >
            <Sparkles className="w-4 h-4" />
            <span>Request Scope Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
