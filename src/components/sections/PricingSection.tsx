'use client';

import React, { useState } from 'react';
import { PRICING_PLANS } from '@/data';
import { CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface PricingSectionProps {
  onOpenQuote: (serviceName?: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenQuote }) => {
  const [annualBilling, setAnnualBilling] = useState(true);

  return (
    <section id="pricing" className="py-32 bg-[#0B0D12] relative overflow-hidden font-body">
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
              TRANSPARENT INVESTMENT
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-heading font-extrabold text-[#F5F1EA] tracking-tight leading-tight"
          >
            Milestone Sprints & Enterprise Retainers
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base text-[#B9B4AA] font-light leading-relaxed max-w-2xl mx-auto"
          >
            No hidden scope creep. Guaranteed sprint outcomes with predictable investment schedules.
          </motion.p>

          {/* Billing Toggle */}
          <div className="mt-8 inline-flex items-center gap-1 p-1.5 rounded-full bg-[#1B2330] border border-[#B88A44]/20">
            <button
              onClick={() => setAnnualBilling(false)}
              className={`px-5 py-2.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 ${
                !annualBilling
                  ? 'bg-[#B88A44] text-[#0B0D12] font-bold shadow-[0_4px_15px_rgba(184,138,68,0.3)]'
                  : 'text-[#B9B4AA] hover:text-[#F5F1EA]'
              }`}
            >
              Milestone Sprints
            </button>
            <button
              onClick={() => setAnnualBilling(true)}
              className={`px-5 py-2.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 flex items-center gap-1.5 ${
                annualBilling
                  ? 'bg-[#B88A44] text-[#0B0D12] font-bold shadow-[0_4px_15px_rgba(184,138,68,0.3)]'
                  : 'text-[#B9B4AA] hover:text-[#F5F1EA]'
              }`}
            >
              <span>Annual Retainer</span>
              <span className="px-2 py-0.5 text-[9px] bg-[#0B0D12] text-[#B88A44] rounded-full border border-[#B88A44]/30 font-bold">
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan, idx) => {
            const price = annualBilling ? plan.annualPrice : plan.monthlyPrice;
            const isPopular = plan.popular;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-400 luxury-card ${
                  isPopular
                    ? 'border-[#B88A44] bg-[#252D3D] shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_30px_rgba(184,138,68,0.15)] z-10 lg:-translate-y-2'
                    : 'border-[#B88A44]/15 bg-[#1B2330]'
                }`}
              >
                {plan.badge && (
                  <span className="absolute -top-3.5 left-8 px-3.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#0B0D12] border border-[#B88A44] text-[#B88A44]">
                    {plan.badge}
                  </span>
                )}

                <div>
                  <h3 className="text-xl font-heading font-bold text-[#F5F1EA] mb-2 uppercase tracking-wide">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-[#B9B4AA] min-h-[40px] font-light leading-relaxed mb-6">
                    {plan.tagline}
                  </p>

                  <div className="flex items-baseline gap-1.5 mb-6 pb-6 border-b border-[#B88A44]/12 font-heading">
                    <span className="text-4xl sm:text-5xl font-extrabold text-[#F5F1EA]">
                      ${price.toLocaleString()}
                    </span>
                    <span className="text-xs font-mono text-[#B9B4AA]">
                      {annualBilling ? '/mo billed annually' : '/sprint'}
                    </span>
                  </div>

                  <ul className="space-y-3.5 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs text-[#F5F1EA]">
                        <CheckCircle2 className="w-4 h-4 text-[#B88A44] shrink-0 mt-0.5" />
                        <span className="font-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="mb-6 p-4 rounded-xl bg-[#12161F] border border-[#B88A44]/12 text-[11px] text-[#B9B4AA] space-y-1 font-mono">
                    <p>
                      <strong className="text-[#B88A44] uppercase">Delivery:</strong> {plan.deliveryTime}
                    </p>
                    <p>
                      <strong className="text-[#F5F1EA] uppercase">Support:</strong> {plan.supportLevel}
                    </p>
                  </div>

                  <button
                    onClick={() => onOpenQuote(plan.name)}
                    className="btn-gold-primary w-full py-4 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                  >
                    <span>Request Solution Scope</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
