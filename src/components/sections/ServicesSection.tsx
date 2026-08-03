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
  Zap,
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

  // Fade-up stagger animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section id="services" className="py-28 bg-[#F8FAFC] dark:bg-[#0F172A] relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-body">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#0F766E]/10 dark:bg-[#0F766E]/20 text-[#0F766E] dark:text-[#2DD4BF] border border-[#0F766E]/30 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" /> Our Expertise
          </span>

          {/* Main Heading */}
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
            <span className="text-[#0F766E] dark:text-[#2DD4BF]">Digital Solutions</span> That Drive Business Growth
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            We build scalable, secure, and modern digital products tailored to business needs—from enterprise software and AI systems to mobile apps and cloud platforms.
          </p>
        </motion.div>

        {/* Capability Filter Tabs */}
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
              className={`shrink-0 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                activeTab === tabName
                  ? 'bg-[#0F766E] text-white shadow-sm'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
              }`}
            >
              {tabName}
            </button>
          ))}
        </motion.div>

        {/* Responsive Grid: 3 Columns Desktop, 2 Columns Tablet, 1 Column Mobile */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="group relative h-full"
            >
              {/* Premium Service Card */}
              <div className="relative rounded-[20px] bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-[#0F766E] dark:hover:border-[#2DD4BF] shadow-sm hover:shadow-xl hover:shadow-slate-900/5 flex flex-col justify-between transition-all duration-300 overflow-hidden h-full">
                
                {/* Image Showcase Header (If Available) */}
                {service.image && (
                  <div className="relative h-44 w-full overflow-hidden bg-slate-100 dark:bg-slate-800 shrink-0">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-w-768px) 100vw, 33vw"
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

                {/* Card Body */}
                <div className="p-6 sm:p-8 relative z-10 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Modern Top Icon Container */}
                    <div className="w-12 h-12 rounded-2xl bg-[#0F766E]/10 dark:bg-[#0F766E]/20 text-[#0F766E] dark:text-[#2DD4BF] flex items-center justify-center shrink-0 mb-5 group-hover:scale-110 transition-transform duration-300">
                      <DynamicIcon name={service.iconName} className="w-6 h-6 stroke-[2.2]" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white group-hover:text-[#0F766E] dark:group-hover:text-[#2DD4BF] transition-colors mb-3">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Key features bullet points */}
                    <ul className="space-y-2.5 mb-8">
                      {service.features.slice(0, 3).map((feat, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#0F766E] dark:text-[#2DD4BF] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Bottom Actions */}
                  <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
                    <button
                      onClick={() => onSelectService(service)}
                      className="text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-[#0F766E] dark:hover:text-[#2DD4BF] flex items-center gap-1.5 transition-colors group/btn"
                    >
                      <span>Learn More</span>
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
        </motion.div>

        {/* Full-Width CTA Banner Below Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 sm:mt-20 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 sm:p-12 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden"
        >
          {/* Ambient Glow Gradient */}
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#0F766E]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-3 text-center lg:text-left max-w-2xl relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-[#0F766E]/10 dark:bg-[#0F766E]/20 text-[#0F766E] dark:text-[#2DD4BF]">
              <Zap className="w-3.5 h-3.5 text-[#D4AF37]" /> Start Your Project
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 dark:text-white leading-tight">
              Ready to Build Your Next Digital Product?
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Our team is ready to turn your ideas into scalable, secure, and high-performance software solutions.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <button
              onClick={() => onOpenQuote()}
              className="px-8 py-4 bg-[#0F766E] hover:bg-[#0D9488] text-white text-sm font-medium rounded-full shadow-md hover:shadow-lg hover:shadow-[#0F766E]/25 transition-all flex items-center justify-center gap-2.5 group"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
