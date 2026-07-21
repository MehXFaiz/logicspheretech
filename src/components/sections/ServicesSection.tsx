'use client';

import React, { useState } from 'react';
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
    <section id="services" className="py-28 bg-[#050816] relative overflow-hidden">
      {/* Gradient background blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#06b6d4]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#8b5cf6]/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-mono font-semibold uppercase tracking-widest bg-[#06b6d4]/20 text-[#06b6d4] border border-[#06b6d4]/30 mb-3">
            <Sparkles className="w-3.5 h-3.5" /> CORE CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-wide leading-tight">
            Bespoke Architecture For{' '}
            <span className="text-gradient-primary">
              High-Velocity Enterprises
            </span>
          </h2>
          <p className="mt-4 text-[#a0aec0] text-sm sm:text-base leading-relaxed">
            From custom Next.js web applications to secure offline RAG vector architectures, we build production systems designed for reliability and performance.
          </p>
        </motion.div>

        {/* Capability Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-14"
        >
          {tabs.map((tabName) => (
            <button
              key={tabName}
              onClick={() => setActiveTab(tabName)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeTab === tabName
                  ? 'bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] text-white shadow-lg shadow-[#06b6d4]/30'
                  : 'bg-[#0f172a] hover:bg-[#06b6d4]/10 text-[#a0aec0] hover:text-white border border-white/10'
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
              whileHover={{ y: -12, transition: { duration: 0.3 } }}
              className="group relative"
            >
              {/* Card background with gradient border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#06b6d4]/50 to-[#8b5cf6]/50 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-300" />
              
              <div className="relative rounded-3xl bg-[#0f172a] border border-white/10 group-hover:border-[#06b6d4]/50 p-8 flex flex-col justify-between transition-all duration-500 overflow-hidden">
                {/* Top decorative gradient */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#06b6d4] via-[#8b5cf6] to-[#f59e0b] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Animated background pattern */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#06b6d4]/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

                {service.popular && (
                  <motion.span
                    initial={{ scale: 0, rotate: -10 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                    className="absolute top-6 right-6 px-3 py-1 rounded-full text-[9px] font-mono font-semibold uppercase tracking-widest bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] text-white shadow-lg"
                  >
                    FLAGSHIP
                  </motion.span>
                )}

                <div className="relative z-10">
                  {/* Icon with glow effect */}
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0f172a] to-[#050816] border border-[#06b6d4]/30 group-hover:border-[#06b6d4] flex items-center justify-center text-[#06b6d4] mb-6 shadow-lg group-hover:shadow-[#06b6d4]/30 transition-all duration-300"
                  >
                    <DynamicIcon name={service.iconName} className="w-8 h-8" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-white group-hover:text-gradient-primary transition-all duration-300 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#a0aec0] leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Key features with animated checkmarks */}
                  <ul className="space-y-3 mb-8">
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + idx * 0.1 + 0.4 }}
                        className="flex items-start gap-2.5 text-sm text-[#a0aec0] group-hover:text-white transition-colors duration-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#06b6d4] shrink-0 mt-0.5 group-hover:scale-125 transition-transform duration-300" />
                        <span>{feat}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Action buttons */}
                <div className="relative z-10 pt-6 border-t border-white/10 flex items-center justify-between gap-4">
                  <button
                    onClick={() => onSelectService(service)}
                    className="text-xs font-semibold text-[#a0aec0] hover:text-[#06b6d4] flex items-center gap-1.5 transition-all duration-300 group/btn"
                  >
                    <span>View Specs</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onOpenQuote(service.title)}
                    className="px-5 py-2.5 bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] hover:from-[#8b5cf6] hover:to-[#06b6d4] text-white text-xs font-semibold tracking-widest uppercase rounded-full shadow-lg shadow-[#06b6d4]/20 transition-all duration-300"
                  >
                    Request Scope
                  </motion.button>
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
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 rounded-3xl bg-gradient-to-r from-[#0f172a] via-[#050816] to-[#0f172a] border border-[#06b6d4]/30 p-8 flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden"
        >
          {/* Background decorations */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-[#06b6d4]/10 rounded-full blur-2xl" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#8b5cf6]/10 rounded-full blur-2xl" />

          <div className="flex items-center gap-4 relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#06b6d4] to-[#8b5cf6] flex items-center justify-center text-white shrink-0 shadow-lg shadow-[#06b6d4]/30">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white">
                Guaranteed Architectural Code ownership & 100% IP Handover
              </h4>
              <p className="text-sm text-[#a0aec0] mt-1">
                All deliverables come with comprehensive automated testing suites, clean documentation, and immediate copyright transfer.
              </p>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onOpenQuote()}
            className="px-8 py-3.5 bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] text-white text-sm font-semibold uppercase tracking-[0.18em] rounded-full shadow-lg shadow-[#06b6d4]/30 transition-all duration-300 relative z-10"
          >
            Schedule Architecture Review
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
