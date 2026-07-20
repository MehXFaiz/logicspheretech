'use client';

import React, { useState } from 'react';
import { FAQ_DATA } from '@/data';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_DATA[0].id);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-28 bg-[#2C3531] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#116466]/10 text-[#116466] border border-[#116466]/35 mb-3">
            <Sparkles className="w-3.5 h-3.5" /> EXECUTIVE KNOWLEDGE BASE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#D1E8E2] tracking-tight">
            Frequently Asked{' '}
            <span className="text-gradient-gold">
              Questions
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Everything you need to know about our sprints, clean IP ownership, Next.js architecture, and custom AI delivery.
          </p>
        </div>

        {/* Collapsible Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#343e39] border-[#116466]/50 shadow-2xl shadow-[#116466]/15'
                    : 'bg-[#343e39]/70 border-[#D1E8E2]/10 hover:border-[#D1E8E2]/20'
                }`}
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 transition-colors ${
                        isOpen
                          ? 'bg-gradient-to-br from-[#FFCB9A] via-[#116466] to-[#D9B08C] text-slate-950 shadow-lg shadow-[#116466]/25'
                          : 'bg-[#D1E8E2]/5 text-slate-400 group-hover:text-[#116466]'
                      }`}
                    >
                      <HelpCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#116466] block mb-0.5">
                        {faq.category}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-[#D1E8E2] group-hover:text-[#116466] transition-colors">
                        {faq.question}
                      </h3>
                    </div>
                  </div>

                  <div
                    className={`w-10 h-10 rounded-full bg-[#D1E8E2]/5 flex items-center justify-center text-slate-300 transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 bg-[#116466] text-slate-950' : ''
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-7 pt-2 border-t border-[#D1E8E2]/10 text-sm sm:text-base text-slate-300 leading-relaxed animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
