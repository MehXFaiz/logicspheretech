'use client';

import React, { useState } from 'react';
import { PRICING_PLANS } from '@/data';
import { CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';

interface PricingSectionProps {
  onOpenQuote: (serviceName?: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenQuote }) => {
  const [annualBilling, setAnnualBilling] = useState(true);

  return (
    <section id="pricing" className="py-28 bg-[#2C3531] relative overflow-hidden border-b border-[#116466]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-none text-[10px] font-mono font-semibold uppercase tracking-widest bg-[#116466]/20 text-[#D9B08C] border border-[#116466] mb-3">
            <Sparkles className="w-3.5 h-3.5" /> REVENUE RETENTION MODEL
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#D1E8E2] tracking-wide">
            Transparent Retainers &{' '}
            <span className="text-gradient-gold font-bold">
              Milestone Sprints
            </span>
          </h2>
          <p className="mt-4 text-[#94a3b8] text-sm sm:text-base leading-relaxed font-mono">
            No hidden scope creep. Choose milestone sprint billing or an annual engineering retainer with a dedicated architect.
          </p>

          {/* Billing Toggle */}
          <div className="mt-8 inline-flex items-center gap-1 p-1 rounded-none bg-[#242b28] border border-[#116466]/40 font-mono">
            <button
              onClick={() => setAnnualBilling(false)}
              className={`px-5 py-2.5 rounded-none text-xs font-semibold uppercase tracking-wider transition-all ${
                !annualBilling
                  ? 'bg-[#116466] border border-[#FFCB9A] text-[#D1E8E2]'
                  : 'text-[#D1E8E2]/60 hover:text-[#D1E8E2]'
              }`}
            >
              Milestone Sprints
            </button>
            <button
              onClick={() => setAnnualBilling(true)}
              className={`px-5 py-2.5 rounded-none text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                annualBilling
                  ? 'bg-[#116466] border border-[#FFCB9A] text-[#D1E8E2]'
                  : 'text-[#D1E8E2]/60 hover:text-[#D1E8E2]'
              }`}
            >
              <span>Annual Retainer</span>
              <span className="px-2 py-0.5 text-[9px] bg-[#2C3531] text-[#FFCB9A] border border-[#FFCB9A]/40">
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch font-mono">
          {PRICING_PLANS.map((plan) => {
            const price = annualBilling ? plan.annualPrice : plan.monthlyPrice;
            const isPopular = plan.popular;

            return (
              <div
                key={plan.id}
                className={`relative rounded-none p-8 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? 'bg-[#242b28] border-2 border-[#FFCB9A] shadow-md z-10 lg:scale-105'
                    : 'bg-[#242b28]/80 border border-[#116466]/40 hover:border-[#FFCB9A]'
                }`}
              >
                {plan.badge && (
                  <span className="absolute -top-3.5 left-6 px-3 py-1 rounded-none text-[9px] font-semibold uppercase tracking-widest bg-[#116466] border border-[#FFCB9A] text-[#D1E8E2]">
                    {plan.badge}
                  </span>
                )}

                <div>
                  <h3 className="text-xl font-bold text-[#D1E8E2] mb-2 uppercase tracking-wide">{plan.name}</h3>
                  <p className="text-xs text-slate-300 min-h-[40px] mb-6 font-sans">
                    {plan.tagline}
                  </p>

                  <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-[#116466]/30">
                    <span className="text-3xl sm:text-4xl font-bold text-[#D1E8E2]">
                      ${price.toLocaleString()}
                    </span>
                    <span className="text-[10px] text-slate-400">
                      {annualBilling ? '/mo billed annually' : '/sprint'}
                    </span>
                  </div>

                  <ul className="space-y-3.5 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-[#116466] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="mb-6 p-4 rounded-none bg-[#2C3531]/40 border border-[#116466]/30 text-[10px] text-slate-300 space-y-1">
                    <p>
                      <strong className="text-[#FFCB9A] uppercase">Delivery:</strong> {plan.deliveryTime}
                    </p>
                    <p>
                      <strong className="text-[#D9B08C] uppercase">SLA Grade:</strong> {plan.supportLevel}
                    </p>
                  </div>

                  <button
                    onClick={() => onOpenQuote(plan.name)}
                    className={`w-full py-3.5 rounded-none font-semibold uppercase tracking-wider text-xs flex items-center justify-center gap-2 transition-all ${
                      isPopular
                        ? 'bg-[#116466] border border-[#FFCB9A] text-[#D1E8E2] hover:bg-[#D9B08C] hover:text-[#2C3531] hover:border-[#116466]'
                        : 'bg-[#2C3531] hover:bg-[#116466]/20 text-[#D1E8E2] border border-[#116466]/60'
                    }`}
                  >
                    <span>Request Solution Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
