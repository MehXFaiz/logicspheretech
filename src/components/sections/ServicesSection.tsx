'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { SERVICES_DATA } from '@/data';
import { ServiceItem } from '@/types';
import { DynamicIcon } from '@/components/common/DynamicIcon';
import {
  Sparkles,
  ChevronRight,
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

  return (
    <section id="services" className="py-32 bg-[#16181D] relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-heading">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-[#1F2229] border border-white/10 text-[#C6A15B] mb-4 font-body">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" /> Our Capabilities
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F4F4F5] tracking-tight leading-tight">
            Digital Solutions That <span className="text-[#C6A15B]">Drive Growth.</span>
          </h2>
          <p className="mt-4 text-[#A1A1AA] text-base sm:text-lg leading-relaxed font-body font-normal">
            We build scalable, secure, and modern digital products tailored to business needs—from enterprise software and AI systems to mobile apps and cloud platforms.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-nowrap sm:flex-wrap items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 sm:pb-0 mb-14 font-body no-scrollbar"
        >
          {tabs.map((tabName) => (
            <button
              key={tabName}
              onClick={() => setActiveTab(tabName)}
              className={`shrink-0 px-5 py-2.5 rounded-full text-xs font-medium transition-all duration-300 ${
                activeTab === tabName
                  ? 'bg-[#C6A15B] text-[#0E0E10] shadow-md font-bold'
                  : 'bg-[#1F2229] text-[#A1A1AA] hover:text-[#F4F4F5] border border-white/10 hover:border-[#C6A15B]/40'
              }`}
            >
              {tabName}
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group relative h-full font-body"
            >
              <div className="rounded-3xl bg-[#1F2229] border border-white/10 shadow-xl hover:border-[#C6A15B]/50 transition-all duration-300 overflow-hidden flex flex-col justify-between h-full">
                {service.image && (
                  <div className="relative h-44 w-full overflow-hidden bg-[#0E0E10] shrink-0">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-w-768px) 100vw, 33vw"
                      className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                )}

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#2A2E36] text-[#C6A15B] flex items-center justify-center shrink-0 mb-5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                      <DynamicIcon name={service.iconName} className="w-6 h-6 stroke-[2.2]" />
                    </div>

                    <h3 className="text-xl font-bold font-heading text-[#F4F4F5] group-hover:text-[#C6A15B] transition-colors mb-3">
                      {service.title}
                    </h3>

                    <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <ul className="space-y-2.5 mb-8">
                      {service.features.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F4F4F5]">
                          <CheckCircle2 className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-4">
                    <button
                      onClick={() => onSelectService(service)}
                      className="text-xs font-semibold text-[#C6A15B] hover:underline flex items-center gap-1 transition-colors group/btn"
                    >
                      <span>Learn More</span>
                      <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>

                    <button
                      onClick={() => onOpenQuote(service.title)}
                      className="executive-btn-primary px-4 py-2 text-xs font-medium shadow-sm"
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
          className="mt-16 sm:mt-20 rounded-3xl bg-[#1F2229] border border-white/10 p-8 sm:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden font-body"
        >
          <div className="space-y-3 text-center lg:text-left max-w-2xl relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-[#2A2E36] text-[#C6A15B] border border-white/10">
              <Zap className="w-3.5 h-3.5 text-[#C6A15B]" /> Build Your Next Digital Product
            </span>
            <h3 className="text-2xl sm:text-4xl font-bold font-heading text-[#F4F4F5] leading-tight">
              Ready to Build Your Next Digital Product?
            </h3>
            <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
              Our team is ready to turn your ideas into scalable, secure, and high-performance software solutions.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <button
              onClick={() => onOpenQuote()}
              className="executive-btn-primary px-8 py-4 text-sm font-semibold flex items-center justify-center gap-2 group shadow-xl"
            >
              <span>Schedule Consultation</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
