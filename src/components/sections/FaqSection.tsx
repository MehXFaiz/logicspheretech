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
    <section id="faq" className="py-28 bg-[#16181D] relative transition-colors duration-300 border-b border-white/10 font-body">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-body">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#1F2229] border border-white/10 text-[#C6A15B] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" /> EXECUTIVE KNOWLEDGE BASE
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F4F4F5] tracking-tight leading-tight">
            Frequently Asked{' '}
            <span className="text-[#C6A15B]">
              Questions
            </span>
          </h2>
          <p className="mt-4 text-[#A1A1AA] text-base sm:text-lg leading-relaxed">
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
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#1F2229] border-[#C6A15B] shadow-xl'
                    : 'bg-[#1F2229] border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isOpen
                          ? 'bg-[#C6A15B] text-[#0E0E10]'
                          : 'bg-[#2A2E36] text-[#C6A15B] border border-white/10'
                      }`}
                    >
                      <HelpCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-semibold uppercase text-[#C6A15B] block mb-0.5">
                        {faq.category}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold font-heading text-[#F4F4F5] group-hover:text-[#C6A15B] transition-colors">
                        {faq.question}
                      </h3>
                    </div>
                  </div>

                  <div
                    className={`w-9 h-9 rounded-full bg-[#2A2E36] flex items-center justify-center text-[#F4F4F5] transition-transform duration-200 shrink-0 border border-white/10 ${
                      isOpen ? 'rotate-180 bg-[#C6A15B] text-[#0E0E10]' : ''
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-white/10 text-sm sm:text-base text-[#A1A1AA] leading-relaxed font-body">
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
