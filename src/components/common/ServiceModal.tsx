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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B0D12]/90 backdrop-blur-xl animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#1B2330] border border-[#B88A44]/30 shadow-2xl p-6 sm:p-10 text-left animate-in zoom-in-95 duration-200 font-body text-[#F5F1EA]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full border border-[#B88A44]/20 text-[#B9B4AA] hover:text-[#F5F1EA] bg-[#252D3D] hover:border-[#B88A44] transition-all"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-[#252D3D] border border-[#B88A44]/30 text-[#B88A44] flex items-center justify-center shadow-md shrink-0">
            <DynamicIcon name={service.iconName} className="w-7 h-7 stroke-[2.2]" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#B88A44]">
              ARCHITECTURE & SCOPE SPECIFICATION
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#F5F1EA]">{service.title}</h3>
          </div>
        </div>

        {/* Detailed description */}
        <p className="text-[#B9B4AA] text-sm sm:text-base font-light leading-relaxed mb-8">
          {service.fullDescription || service.description}
        </p>

        {/* Key Deliverables */}
        <div className="mb-8">
          <h4 className="text-xs font-mono font-bold text-[#B88A44] uppercase tracking-wider mb-4">
            Guaranteed Architectural Deliverables
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {service.features.map((feature, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#12161F] border border-[#B88A44]/15 flex items-center gap-3 text-xs text-[#F5F1EA] font-light"
              >
                <CheckCircle2 className="w-4 h-4 text-[#B88A44] shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Footer */}
        <div className="pt-6 border-t border-[#B88A44]/12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-[#B9B4AA] font-mono">
            <ShieldCheck className="w-4 h-4 text-[#B88A44]" />
            <span>Dedicated Principal Architect Assigned</span>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenQuote(service.title);
            }}
            className="btn-gold-primary w-full sm:w-auto px-7 py-3 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-[#0B0D12]" />
            <span>Request Scope Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
