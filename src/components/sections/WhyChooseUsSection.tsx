'use client';

import React from 'react';
import Image from 'next/image';
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
    <section id="why-us" className="py-28 bg-[#F8FAFC] dark:bg-[#0F172A] relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-4 text-left font-body"
          >
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#0F766E]/10 dark:bg-[#0F766E]/20 text-[#0F766E] dark:text-[#2DD4BF] border border-[#0F766E]/30 mb-1">
              <Award className="w-3.5 h-3.5 text-[#D4AF37]" /> WHY LOGICSPHERE TECH
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
              Built For Executives Who Demand{' '}
              <span className="text-[#0F766E] dark:text-[#2DD4BF]">
                Architectural Perfection
              </span>
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              We bridge the gap between bespoke Silicon Valley engineering and high-speed agile execution without compromises.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 relative h-64 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm group"
          >
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
              alt="Operational Metrics Dashboard"
              fill
              sizes="(max-w-768px) 100vw, 40vw"
              className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-900 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 font-mono text-xs text-[#0F766E] dark:text-[#2DD4BF] font-semibold bg-white/90 dark:bg-slate-900/90 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm">
              PRODUCTION TELEMETRY // LOAD TIME: 0.04s
            </div>
          </motion.div>
        </div>

        {/* Comparison Executive Matrix Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-20 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden"
        >
          <div className="px-6 sm:px-10 py-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-800/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-body">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white">
                LOGICSPHERE TECH vs. Traditional Outsourcing
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                Transparent comparison of engineering rigor, delivery speed, and clean code ownership.
              </p>
            </div>
            <span className="px-4 py-2 rounded-full text-xs font-mono font-semibold bg-[#D4AF37] text-slate-950 shadow-sm">
              ISO 27001 & SOC2 VERIFIED
            </span>
          </div>

          <div className="divide-y divide-slate-200 dark:divide-slate-800 font-body">
            {comparisons.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 p-6 sm:px-10 sm:py-6 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
              >
                <div className="md:col-span-3 font-bold font-heading text-slate-900 dark:text-white">
                  {row.feature}
                </div>

                <div className="md:col-span-5 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0F766E] dark:text-[#2DD4BF] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] font-mono uppercase text-[#0F766E] dark:text-[#2DD4BF] block font-semibold">
                      LOGICSPHERE TECH
                    </span>
                    <span className="text-sm text-slate-900 dark:text-white font-medium">{row.logicsphere}</span>
                  </div>
                </div>

                <div className="md:col-span-4 flex items-start gap-3 opacity-70">
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] font-mono uppercase text-slate-500 block font-medium">
                      Traditional Agency
                    </span>
                    <span className="text-sm text-slate-600 dark:text-slate-400">{row.outsourcing}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 8 Architectural Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              custom={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative"
            >
              <div className="relative rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-slate-900/5 p-7 transition-all duration-300 h-full flex flex-col justify-between font-body">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#0F766E]/10 dark:bg-[#0F766E]/20 text-[#0F766E] dark:text-[#2DD4BF] flex items-center justify-center mb-5 shrink-0">
                    <DynamicIcon name={item.iconName} className="w-7 h-7" />
                  </div>
                  
                  <h4 className="text-lg font-bold font-heading text-slate-900 dark:text-white group-hover:text-[#0F766E] dark:group-hover:text-[#2DD4BF] transition-colors mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
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
