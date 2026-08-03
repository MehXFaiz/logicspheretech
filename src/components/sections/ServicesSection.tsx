'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { SERVICES_DATA } from '@/data';
import { ServiceItem } from '@/types';
import { DynamicIcon } from '@/components/common/DynamicIcon';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';
import { motion } from 'framer-motion';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenQuote?: (serviceTitle?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onOpenQuote = () => {},
}) => {
  const [activeTab, setActiveTab] = useState<string>('All Capabilities');

  const tabs = [
    'All Capabilities',
    'Web & Applications',
    'AI & SaaS Products',
    'Enterprise & Cloud',
    'Growth & Design',
  ];

  const filteredServices = SERVICES_DATA.filter((service) => {
    if (activeTab === 'All Capabilities') return true;
    if (activeTab === 'Web & Applications') {
      return (
        service.title.includes('Website') ||
        service.title.includes('Web App') ||
        service.title.includes('Mobile')
      );
    }
    if (activeTab === 'AI & SaaS Products') {
      return service.title.includes('AI') || service.title.includes('SaaS');
    }
    if (activeTab === 'Enterprise & Cloud') {
      return service.title.includes('Cloud') || service.title.includes('Enterprise');
    }
    if (activeTab === 'Growth & Design') {
      return service.title.includes('UI/UX') || service.title.includes('SEO');
    }
    return true;
  });

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut" as const
      }
    })
  };

  return (
    <section id="services" className="py-28 bg-[#F8FAFC] dark:bg-[#0F172A] relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-body font-semibold uppercase tracking-wider bg-[#0F766E]/10 dark:bg-[#0F766E]/20 text-[#0F766E] dark:text-[#2DD4BF] border border-[#0F766E]/30 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" /> CORE CAPABILITIES
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
            Bespoke Architecture For{' '}
            <span className="text-[#0F766E] dark:text-[#2DD4BF]">
              High-Velocity Enterprises
            </span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed font-body">
            From custom Next.js web applications to secure offline RAG vector architectures, we build production systems designed for reliability and scaling.
          </p>
        </motion.div>

        {/* Capability Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-nowrap sm:flex-wrap items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 sm:pb-0 mb-10 sm:mb-14 no-scrollbar"
        >
          {tabs.map((tabName) => (
            <button
              key={tabName}
              onClick={() => setActiveTab(tabName)}
              className={`shrink-0 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider font-body transition-all duration-200 ${
                activeTab === tabName
                  ? 'bg-[#0F766E] text-white shadow-sm'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
              }`}
            >
              {tabName}
            </button>
          ))}
        </motion.div>

        {/* Dynamic Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative"
            >
              <div className="relative rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-slate-900/5 flex flex-col justify-between transition-all duration-300 overflow-hidden h-full">
                
                {/* 1. Header Image */}
                {service.image && (
                  <div className="relative h-44 w-full overflow-hidden bg-slate-100 dark:bg-slate-800 shrink-0">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-w-768px) 100vw, 30vw"
                      className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-900 via-transparent to-transparent" />
                  </div>
                )}

                {service.popular && (
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider bg-[#D4AF37] text-slate-950 shadow-md z-20">
                    FLAGSHIP
                  </span>
                )}

                {/* 2. Content Container */}
                <div className="p-6 sm:p-8 relative z-10 flex-1 flex flex-col justify-between font-body">
                  <div>
                    {/* Icon and Title */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#0F766E]/10 dark:bg-[#0F766E]/20 text-[#0F766E] dark:text-[#2DD4BF] flex items-center justify-center shrink-0">
                        <DynamicIcon name={service.iconName} className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-white group-hover:text-[#0F766E] dark:group-hover:text-[#2DD4BF] transition-colors">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Key features with checkmarks */}
                    <ul className="space-y-2.5 mb-8">
                      {service.features.slice(0, 3).map((feat, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-400"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#0F766E] dark:text-[#2DD4BF] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action buttons */}
                  <div className="relative z-10 pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
                    <button
                      onClick={() => onSelectService(service)}
                      className="text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-[#0F766E] dark:hover:text-[#2DD4BF] flex items-center gap-1.5 transition-colors group/btn"
                    >
                      <span>View Specs</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>

                    <button
                      onClick={() => onOpenQuote(service.title)}
                      className="px-4 py-2 bg-[#0F766E] hover:bg-[#0D9488] text-white text-xs font-medium rounded-full shadow-sm transition-all"
                    >
                      Request Scope
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enterprise Guarantee Footer Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden"
        >
          <div className="flex items-center gap-4 relative z-10 font-body">
            <div className="w-14 h-14 rounded-2xl bg-[#0F766E]/10 dark:bg-[#0F766E]/20 text-[#0F766E] dark:text-[#2DD4BF] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-lg font-bold font-heading text-slate-900 dark:text-white">
                Guaranteed Architectural Code ownership & 100% IP Handover
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                All deliverables come with comprehensive automated testing suites, clean documentation, and immediate copyright transfer.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenQuote()}
            className="px-6 py-3 bg-[#0F766E] hover:bg-[#0D9488] text-white text-sm font-medium rounded-full shadow-sm transition-all shrink-0 font-body"
          >
            Schedule Architecture Review
          </button>
        </motion.div>
      </div>
    </section>
  );
};
