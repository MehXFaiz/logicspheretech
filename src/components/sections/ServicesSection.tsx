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

  return (
    <section id="services" className="py-28 bg-[#2C3531] relative overflow-hidden border-b border-[#116466]/30">
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
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none text-[10px] font-mono font-semibold uppercase tracking-widest bg-[#116466]/20 text-[#D9B08C] border border-[#116466] mb-3">
            <Sparkles className="w-3.5 h-3.5" /> CORE CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#D1E8E2] tracking-wide leading-tight">
            Bespoke Architecture For{' '}
            <span className="text-gradient-primary font-bold">
              High-Velocity Enterprises
            </span>
          </h2>
          <p className="mt-4 text-[#94a3b8] text-sm sm:text-base leading-relaxed font-mono">
            From custom Next.js web applications to secure offline RAG vector architectures, we build production systems designed for reliability and performance.
          </p>
        </motion.div>

        {/* Capability Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-14 font-mono"
        >
          {tabs.map((tabName) => (
            <button
              key={tabName}
              onClick={() => setActiveTab(tabName)}
              className={`px-5 py-2.5 rounded-none text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeTab === tabName
                  ? 'bg-[#116466] border border-[#FFCB9A] text-[#D1E8E2]'
                  : 'bg-[#242b28] hover:bg-[#116466]/20 text-[#D1E8E2]/70 hover:text-[#D1E8E2] border border-[#116466]/40'
              }`}
            >
              {tabName}
            </button>
          ))}
        </motion.div>

        {/* Bento Service Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-none bg-[#242b28] border border-[#116466]/40 hover:border-[#FFCB9A] p-8 flex flex-col justify-between transition-all duration-300 shadow-md"
            >
              {service.popular && (
                <span className="absolute top-6 right-6 px-3 py-1 rounded-none text-[9px] font-mono font-semibold uppercase tracking-widest bg-[#116466] border border-[#FFCB9A] text-[#D1E8E2]">
                  FLAGSHIP
                </span>
              )}

              <div>
                <div className="w-12 h-12 rounded-none bg-[#2C3531] border border-[#116466]/60 flex items-center justify-center text-[#FFCB9A] mb-6">
                  <DynamicIcon name={service.iconName} className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-bold text-[#D1E8E2] group-hover:text-[#FFCB9A] transition-colors mb-3 font-mono uppercase tracking-wide">
                  {service.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-6 font-sans">
                  {service.description}
                </p>

                {/* Key Architectural Deliverables */}
                <ul className="space-y-2.5 mb-8 font-mono">
                  {service.features.slice(0, 3).map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-[11px] text-[#D1E8E2]/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#116466] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-[#116466]/30 flex items-center justify-between gap-4 font-mono">
                <button
                  onClick={() => onSelectService(service)}
                  className="text-[10px] font-semibold text-[#D1E8E2]/70 hover:text-[#FFCB9A] flex items-center gap-1.5 transition-colors uppercase tracking-wider"
                >
                  <span>Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onOpenQuote(service.title)}
                  className="px-4 py-2 bg-[#2C3531] border border-[#116466]/60 hover:bg-[#116466]/40 text-[#D1E8E2] hover:border-[#FFCB9A] text-[10px] font-semibold tracking-widest uppercase transition-all"
                >
                  Request Scope
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Guarantee Footer Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 rounded-none bg-[#242b28] border border-[#116466] p-8 flex flex-col lg:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-none bg-[#2C3531] border border-[#116466] flex items-center justify-center text-[#FFCB9A] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-semibold text-[#D1E8E2] font-mono uppercase tracking-wide">
                Guaranteed Architectural Code ownership & 100% IP Handover
              </h4>
              <p className="text-xs text-[#94a3b8] mt-1 font-sans">
                All deliverables come with comprehensive automated testing suites, clean documentation, and immediate copyright transfer.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenQuote()}
            className="px-7 py-3 bg-[#116466] border border-[#FFCB9A] hover:bg-[#D9B08C] hover:text-[#2C3531] hover:border-[#116466] text-[#D1E8E2] text-xs font-semibold uppercase tracking-[0.18em] transition-all font-mono shrink-0"
          >
            Schedule Architecture Review
          </button>
        </motion.div>
      </div>
    </section>
  );
};
