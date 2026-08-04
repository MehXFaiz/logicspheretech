'use client';

import React, { useState } from 'react';
import { FAQ_DATA } from '@/data';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_DATA[0].id);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-32 bg-[#0B0D12] relative overflow-hidden font-body">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#B88A44]/[0.03] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
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
              KNOWLEDGE BASE
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-heading font-extrabold text-[#F5F1EA] tracking-tight leading-tight"
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base text-[#B9B4AA] font-light leading-relaxed max-w-xl mx-auto"
          >
            Everything you need to know about our sprints, clean IP ownership, architecture, and ongoing SLA support.
          </motion.p>
        </div>

        {/* Collapsible Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className={`luxury-card rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#1B2330] border-[#B88A44] shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
                    : 'bg-[#1B2330]/80 border-[#B88A44]/15 hover:border-[#B88A44]/35'
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
                          ? 'bg-[#B88A44] text-[#0B0D12]'
                          : 'bg-[#252D3D] text-[#B88A44] border border-[#B88A44]/20'
                      }`}
                    >
                      <HelpCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#B88A44] block mb-0.5">
                        {faq.category}
                      </span>
                      <h3 className="text-base sm:text-lg font-heading font-bold text-[#F5F1EA] group-hover:text-[#B88A44] transition-colors">
                        {faq.question}
                      </h3>
                    </div>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full bg-[#252D3D] flex items-center justify-center text-[#F5F1EA] transition-transform duration-300 shrink-0 border border-[#B88A44]/20 ${
                      isOpen ? 'rotate-180 bg-[#B88A44] text-[#0B0D12]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 pt-2 border-t border-[#B88A44]/12 text-sm text-[#B9B4AA] font-light leading-relaxed"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
