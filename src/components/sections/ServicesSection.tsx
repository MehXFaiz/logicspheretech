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
    <section id="services" className="py-28 bg-[#0A0A0A] relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-body">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#00D9A6]/10 text-[#00D9A6] border border-[#00D9A6]/30 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" /> Our Expertise
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            <span className="text-gradient-emerald">Digital Solutions</span> That Drive Business Growth
          </h2>
          <p className="mt-4 text-[#A1A1AA] text-base sm:text-lg leading-relaxed">
            We build scalable, secure, and modern digital products tailored to business needs—from enterprise software and AI systems to mobile apps and cloud platforms.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-nowrap sm:flex-wrap items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 sm:pb-0 mb-12 sm:mb-16 no-scrollbar"
        >
          {tabs.map((tabName) => (
            <button
              key={tabName}
              onClick={() => setActiveTab(tabName)}
              className={`shrink-0 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                activeTab === tabName
                  ? 'bg-[#00D9A6] text-[#0A0A0A] shadow-lg shadow-[#00D9A6]/20 font-bold'
                  : 'bg-[#18181B] text-[#A1A1AA] hover:text-white border border-white/10 hover:border-[#00D9A6]/40'
              }`}
            >
              {tabName}
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              whileHover={{ y: -6 }}
              className="group relative h-full"
            >
              <div className="relative rounded-[20px] bg-[#18181B] border border-white/10 hover:border-[#00D9A6]/50 shadow-xl flex flex-col justify-between transition-all duration-300 overflow-hidden h-full">
                {service.image && (
                  <div className="relative h-44 w-full overflow-hidden bg-[#111827] shrink-0">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-w-768px) 100vw, 33vw"
                      className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#18181B] via-transparent to-transparent" />
                  </div>
                )}

                {service.popular && (
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider bg-[#F59E0B] text-slate-950 shadow-md z-20">
                    FLAGSHIP
                  </span>
                )}

                <div className="p-6 sm:p-8 relative z-10 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#00D9A6]/10 text-[#00D9A6] flex items-center justify-center shrink-0 mb-5 group-hover:scale-110 transition-transform duration-300">
                      <DynamicIcon name={service.iconName} className="w-6 h-6 stroke-[2.2]" />
                    </div>

                    <h3 className="text-xl font-bold font-heading text-white group-hover:text-[#00D9A6] transition-colors mb-3">
                      {service.title}
                    </h3>

                    <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <ul className="space-y-2.5 mb-8">
                      {service.features.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#A1A1AA]">
                          <CheckCircle2 className="w-4 h-4 text-[#00D9A6] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-4">
                    <button
                      onClick={() => onSelectService(service)}
                      className="text-xs font-semibold text-[#A1A1AA] hover:text-[#00D9A6] flex items-center gap-1.5 transition-colors group/btn"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>

                    <button
                      onClick={() => onOpenQuote(service.title)}
                      className="px-4 py-2 bg-[#00D9A6] hover:bg-[#00D9A6]/90 text-[#0A0A0A] text-xs font-bold rounded-full shadow-md transition-all"
                    >
                      Request Scope
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 sm:mt-20 rounded-3xl bg-[#18181B] border border-white/10 p-8 sm:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden"
        >
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#00D9A6]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-[#3B82F6]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-3 text-center lg:text-left max-w-2xl relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-[#00D9A6]/10 text-[#00D9A6]">
              <Zap className="w-3.5 h-3.5 text-[#F59E0B]" /> Start Your Project
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white leading-tight">
              Ready to Build Your Next Digital Product?
            </h3>
            <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
              Our team is ready to turn your ideas into scalable, secure, and high-performance software solutions.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <button
              onClick={() => onOpenQuote()}
              className="px-8 py-4 bg-[#00D9A6] hover:bg-[#00D9A6]/90 text-[#0A0A0A] text-sm font-bold rounded-full shadow-lg shadow-[#00D9A6]/20 transition-all flex items-center justify-center gap-2.5 group"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform stroke-[2.5]" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
