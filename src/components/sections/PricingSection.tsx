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
    <section id="pricing" className="py-28 bg-[#0E0E10] relative overflow-hidden border-b border-white/10 font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-widest bg-[#1F2229] text-[#C6A15B] border border-white/10 mb-3 font-body">
            <Sparkles className="w-3.5 h-3.5" /> REVENUE RETENTION MODEL
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F4F4F5] tracking-tight font-heading">
            Transparent Retainers &{' '}
            <span className="text-[#C6A15B]">
              Milestone Sprints
            </span>
          </h2>
          <p className="mt-4 text-[#A1A1AA] text-sm sm:text-base leading-relaxed font-body">
            No hidden scope creep. Choose milestone sprint billing or an annual engineering retainer with a dedicated architect.
          </p>

          {/* Billing Toggle */}
          <div className="mt-8 inline-flex items-center gap-1 p-1.5 rounded-full bg-[#1F2229] border border-white/10 font-body">
            <button
              onClick={() => setAnnualBilling(false)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                !annualBilling
                  ? 'bg-[#C6A15B] text-[#0E0E10] shadow-md font-bold'
                  : 'text-[#A1A1AA] hover:text-[#F4F4F5]'
              }`}
            >
              Milestone Sprints
            </button>
            <button
              onClick={() => setAnnualBilling(true)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                annualBilling
                  ? 'bg-[#C6A15B] text-[#0E0E10] shadow-md font-bold'
                  : 'text-[#A1A1AA] hover:text-[#F4F4F5]'
              }`}
            >
              <span>Annual Retainer</span>
              <span className="px-2 py-0.5 text-[9px] bg-[#0E0E10] text-[#C6A15B] rounded-full border border-white/10 font-mono font-bold">
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch font-body">
          {PRICING_PLANS.map((plan) => {
            const price = annualBilling ? plan.annualPrice : plan.monthlyPrice;
            const isPopular = plan.popular;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? 'bg-[#1F2229] border-2 border-[#C6A15B] shadow-2xl z-10 lg:scale-105'
                    : 'bg-[#1F2229] border border-white/10 hover:border-[#C6A15B]/50'
                }`}
              >
                {plan.badge && (
                  <span className="absolute -top-3.5 left-6 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest bg-[#2A2E36] border border-[#C6A15B] text-[#C6A15B] font-mono">
                    {plan.badge}
                  </span>
                )}

                <div>
                  <h3 className="text-xl font-bold text-[#F4F4F5] mb-2 uppercase tracking-wide font-heading">{plan.name}</h3>
                  <p className="text-xs text-[#A1A1AA] min-h-[40px] mb-6 font-body">
                    {plan.tagline}
                  </p>

                  <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-white/10 font-mono">
                    <span className="text-3xl sm:text-4xl font-bold text-[#F4F4F5]">
                      ${price.toLocaleString()}
                    </span>
                    <span className="text-[10px] text-[#A1A1AA]">
                      {annualBilling ? '/mo billed annually' : '/sprint'}
                    </span>
                  </div>

                  <ul className="space-y-3.5 mb-8 font-body">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs text-[#F4F4F5]">
                        <CheckCircle2 className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="mb-6 p-4 rounded-2xl bg-[#0E0E10] border border-white/10 text-[10px] text-[#A1A1AA] space-y-1 font-mono">
                    <p>
                      <strong className="text-[#C6A15B] uppercase">Delivery:</strong> {plan.deliveryTime}
                    </p>
                    <p>
                      <strong className="text-[#F4F4F5] uppercase">SLA Grade:</strong> {plan.supportLevel}
                    </p>
                  </div>

                  <button
                    onClick={() => onOpenQuote(plan.name)}
                    className="executive-btn-primary w-full py-4 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
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
