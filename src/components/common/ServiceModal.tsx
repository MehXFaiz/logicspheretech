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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0E0E10]/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#1F2229] border border-white/10 shadow-2xl p-6 sm:p-10 text-left animate-in zoom-in-95 duration-200 font-body text-[#F4F4F5]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full border border-white/10 text-[#A1A1AA] hover:text-[#F4F4F5] bg-[#2A2E36] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-[#2A2E36] border border-white/10 text-[#C6A15B] flex items-center justify-center shadow-md shrink-0">
            <DynamicIcon name={service.iconName} className="w-7 h-7 stroke-[2.5]" />
          </div>
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C6A15B]">
              ARCHITECTURE & SCOPE SPECIFICATION
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#F4F4F5]">{service.title}</h3>
          </div>
        </div>

        {/* Detailed description */}
        <p className="text-[#A1A1AA] text-sm sm:text-base leading-relaxed mb-8">
          {service.fullDescription || service.description}
        </p>

        {/* Key Deliverables */}
        <div className="mb-8">
          <h4 className="text-xs font-mono font-semibold text-[#C6A15B] uppercase tracking-wider mb-4">
            Key Architectural Deliverables
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {service.features.map((feature, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#0E0E10] border border-white/10 flex items-center gap-3 text-xs text-[#F4F4F5] font-medium"
              >
                <CheckCircle2 className="w-4 h-4 text-[#C6A15B] shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Footer */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-[#A1A1AA]">
            <ShieldCheck className="w-4 h-4 text-[#C6A15B]" />
            <span>Dedicated Principal Architect Assigned</span>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenQuote(service.title);
            }}
            className="executive-btn-primary w-full sm:w-auto px-7 py-3.5 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
          >
            <Sparkles className="w-4 h-4 text-[#0E0E10]" />
            <span>Request Scope Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
