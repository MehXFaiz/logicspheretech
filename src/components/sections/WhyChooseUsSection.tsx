'use client';

import React from 'react';
import { WHY_CHOOSE_US_DATA } from '@/data';
import { DynamicIcon } from '@/components/common/DynamicIcon';
import {
  CheckCircle2,
  XCircle,
  Award,
} from 'lucide-react';
import { motion } from 'framer-motion';

export const WhyChooseUsSection: React.FC = () => {
  const comparisons = [
    {
      feature: 'Engineering Ownership & IP',
      logicsphere: '100% Clean Full Source Code Ownership & Immediate Transfer',
      outsourcing: 'Vendor lock-in with proprietary obfuscated wrappers',
    },
    {
      feature: 'Team Composition',
      logicsphere: 'Senior Principal Systems Architects & AI Devs',
      outsourcing: 'Junior generalist contractors with high turnover',
    },
    {
      feature: 'Speed & Architecture',
      logicsphere: 'Next.js 16 Edge TTFB (<20ms) & Zero Technical Debt',
      outsourcing: 'Legacy bloated templates with slow initial loads',
    },
    {
      feature: 'Support & Communication',
      logicsphere: 'Dedicated Executive Slack / Teams Desk + 24/7 SLA',
      outsourcing: 'Ticketing queues with 48+ hr delayed response',
    },
  ];

  return (
    <section id="why-us" className="py-28 bg-[#050816] relative overflow-hidden">
      {/* Gradient background blobs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#8b5cf6]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#06b6d4]/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-widest bg-[#06b6d4]/10 text-[#06b6d4] border border-[#06b6d4]/35 mb-3">
            <Award className="w-3.5 h-3.5" /> WHY LOGICSPHERE TECH
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Built For Executives Who Demand{' '}
            <span className="text-gradient-primary">
              Architectural Perfection
            </span>
          </h2>
          <p className="mt-4 text-[#a0aec0] text-base sm:text-lg leading-relaxed">
            We bridge the gap between bespoke Silicon Valley engineering and high-speed agile execution without compromises.
          </p>
        </motion.div>

        {/* Comparison Executive Matrix Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-20 rounded-3xl bg-gradient-to-r from-[#0f172a] via-[#050816] to-[#0f172a] border border-[#06b6d4]/30 shadow-2xl overflow-hidden"
        >
          <div className="px-6 sm:px-10 py-6 border-b border-white/10 bg-[#050816]/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                LOGICSPHERE TECH vs. Traditional Outsourcing
              </h3>
              <p className="text-sm text-[#a0aec0] mt-1">
                Transparent comparison of engineering rigor, delivery speed, and clean code ownership.
              </p>
            </div>
            <span className="px-4 py-2 rounded-full text-xs font-mono font-bold bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] text-white shadow-lg shadow-[#06b6d4]/20">
              ISO 27001 & SOC2 VERIFIED
            </span>
          </div>

          <div className="divide-y divide-white/10">
            {comparisons.map((row, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 p-6 sm:px-10 sm:py-7 hover:bg-white/[0.03] transition-colors"
              >
                <div className="md:col-span-3 font-bold text-sm sm:text-base text-white">
                  {row.feature}
                </div>

                <div className="md:col-span-5 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#06b6d4] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] font-mono uppercase text-[#06b6d4] block font-bold">
                      LOGICSPHERE TECH
                    </span>
                    <span className="text-sm text-white font-semibold">{row.logicsphere}</span>
                  </div>
                </div>

                <div className="md:col-span-4 flex items-start gap-3 opacity-60">
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] font-mono uppercase text-slate-400 block font-bold">
                      Traditional Agency
                    </span>
                    <span className="text-sm text-slate-300">{row.outsourcing}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 8 Architectural Pillars Grid - Redesigned */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              custom={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -12, scale: 1.03 }}
              className="group relative"
            >
              {/* Background glow on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#06b6d4]/40 to-[#8b5cf6]/40 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-300" />

              <div className="relative rounded-3xl bg-[#0f172a] border border-white/10 group-hover:border-[#06b6d4]/50 p-7 transition-all duration-500 overflow-hidden">
                {/* Animated background decoration */}
                <div className="absolute -top-10 -left-10 w-24 h-24 bg-[#8b5cf6]/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#06b6d4]/20 to-[#8b5cf6]/20 border border-[#06b6d4]/30 group-hover:border-[#06b6d4] flex items-center justify-center text-[#06b6d4] mb-5 shadow-lg group-hover:shadow-[#06b6d4]/20 transition-all duration-300"
                  >
                    <DynamicIcon name={item.iconName} className="w-8 h-8" />
                  </motion.div>
                  
                  <h4 className="text-lg font-bold text-white group-hover:text-gradient-primary transition-all duration-300 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-[#a0aec0] leading-relaxed group-hover:text-white transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
