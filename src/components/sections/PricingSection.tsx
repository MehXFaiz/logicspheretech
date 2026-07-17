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
    <section id="pricing" className="py-28 bg-[#050608] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/35 mb-3">
            <Sparkles className="w-3.5 h-3.5" /> PREDICTABLE ARCHITECTURAL INVESTMENT
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Transparent Pricing With{' '}
            <span className="text-gradient-gold">
              Guaranteed Deliverables
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            No hidden retainers or scope creep. Choose milestone sprint billing or an annual engineering retainer with a dedicated Principal Architect.
          </p>

          {/* Billing Toggle */}
          <div className="mt-8 inline-flex items-center gap-2 p-1.5 rounded-2xl bg-[#0B0E14] border border-white/10 shadow-inner">
            <button
              onClick={() => setAnnualBilling(false)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                !annualBilling
                  ? 'bg-gradient-to-r from-[#9E822F] via-[#D4AF37] to-[#E5C158] text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Milestone Sprints
            </button>
            <button
              onClick={() => setAnnualBilling(true)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                annualBilling
                  ? 'bg-gradient-to-r from-[#9E822F] via-[#D4AF37] to-[#E5C158] text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>Annual Retainer</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] bg-slate-950 text-[#D4AF37] font-black border border-[#D4AF37]/40">
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const price = annualBilling ? plan.annualPrice : plan.monthlyPrice;
            const isPopular = plan.popular;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? 'bg-[#0B0E14] border-2 border-[#D4AF37] shadow-2xl shadow-[#D4AF37]/25 scale-105 z-10'
                    : 'bg-[#0B0E14]/80 border border-white/10 hover:border-[#D4AF37]/40'
                }`}
              >
                {plan.badge && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-mono font-black uppercase tracking-widest bg-gradient-to-r from-[#9E822F] via-[#D4AF37] to-[#E5C158] text-slate-950 shadow-lg">
                    {plan.badge}
                  </span>
                )}

                <div>
                  <h3 className="text-2xl font-black text-white mb-2">{plan.name}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 min-h-[40px] mb-6">
                    {plan.tagline}
                  </p>

                  <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-white/10">
                    <span className="text-4xl sm:text-5xl font-black text-white">
                      ${price.toLocaleString()}
                    </span>
                    <span className="text-xs text-slate-400">
                      {annualBilling ? '/mo billed annually' : '/sprint milestone'}
                    </span>
                  </div>

                  <ul className="space-y-3.5 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="mb-6 p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-slate-300 space-y-1 font-mono">
                    <p>
                      <strong className="text-[#D4AF37]">Sprint Delivery:</strong> {plan.deliveryTime}
                    </p>
                    <p>
                      <strong className="text-[#E5C158]">Support SLA:</strong> {plan.supportLevel}
                    </p>
                  </div>

                  <button
                    onClick={() => onOpenQuote(plan.name)}
                    className={`w-full py-4 rounded-2xl font-black uppercase tracking-wider text-xs flex items-center justify-center gap-2 transition-all ${
                      isPopular
                        ? 'bg-gradient-to-r from-[#9E822F] via-[#D4AF37] to-[#E5C158] hover:opacity-95 text-slate-950 shadow-xl shadow-[#D4AF37]/30'
                        : 'bg-white/5 hover:bg-[#D4AF37]/20 text-white hover:text-[#D4AF37] border border-white/15'
                    }`}
                  >
                    <span>Request Plan Consultation</span>
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
