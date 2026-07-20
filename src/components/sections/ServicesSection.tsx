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
    <section id="services" className="py-28 bg-[#050816] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-widest bg-[#06b6d4]/10 text-[#06b6d4] border border-[#06b6d4]/35 mb-3">
            <Sparkles className="w-3.5 h-3.5" /> CORE ARCHITECTURAL CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#D1E8E2] tracking-tight">
            End-To-End Architecture For{' '}
            <span className="text-gradient-primary">
              High-Velocity Enterprises
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            From Next.js 16 edge web applications to custom RAG AI engines, we build robust, documented, and fully owned digital products.
          </p>
        </motion.div>

        {/* Capability Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-14"
        >
          {tabs.map((tabName) => (
            <button
              key={tabName}
              onClick={() => setActiveTab(tabName)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeTab === tabName
                  ? 'bg-gradient-to-r from-[#06b6d4] via-[#8b5cf6] to-[#f59e0b] text-slate-950 shadow-lg shadow-[#06b6d4]/30 scale-105'
                  : 'bg-[#0f172a] hover:bg-[#D1E8E2]/[0.06] text-slate-300 hover:text-[#D1E8E2] border border-[#D1E8E2]/10'
              }`}
            >
              {tabName}
            </button>
          ))}
        </motion.div>

        {/* Bento Service Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative rounded-3xl bg-[#0f172a]/90 border border-[#D1E8E2]/10 hover:border-[#06b6d4]/50 p-8 flex flex-col justify-between transition-all duration-500 hover:shadow-2xl hover:shadow-[#06b6d4]/15"
            >
              {service.popular && (
                <span className="absolute top-6 right-6 px-3.5 py-1 rounded-full text-[10px] font-mono font-black uppercase tracking-wider bg-gradient-to-r from-[#06b6d4] via-[#8b5cf6] to-[#f59e0b] text-slate-950 shadow-md">
                  FLAGSHIP
                </span>
              )}

              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#06b6d4]/15 via-[#8b5cf6]/10 to-transparent border border-[#06b6d4]/35 flex items-center justify-center text-[#06b6d4] mb-6 group-hover:scale-110 transition-transform">
                  <DynamicIcon name={service.iconName} className="w-7 h-7" />
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-[#D1E8E2] group-hover:text-[#06b6d4] transition-colors mb-3">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Key Architectural Deliverables */}
                <ul className="space-y-2.5 mb-8">
                  {service.features.slice(0, 3).map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#06b6d4] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-[#D1E8E2]/10 flex items-center justify-between gap-4">
                <button
                  onClick={() => onSelectService(service)}
                  className="text-xs font-bold text-slate-300 hover:text-[#06b6d4] flex items-center gap-1.5 transition-colors group/btn uppercase tracking-wider font-mono"
                >
                  <span>Architecture Specs</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onOpenQuote(service.title)}
                  className="px-4.5 py-2.5 rounded-xl bg-[#D1E8E2]/5 hover:bg-gradient-to-r hover:from-[#06b6d4] hover:via-[#8b5cf6] hover:to-[#f59e0b] text-[#D1E8E2] hover:text-slate-950 text-xs font-black border border-[#D1E8E2]/10 hover:border-transparent transition-all tracking-wider uppercase font-mono"
                >
                  Request Scope
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enterprise Guarantee Footer Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 rounded-3xl bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] border border-[#06b6d4]/35 p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl shadow-[#06b6d4]/15"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#06b6d4]/15 border border-[#06b6d4]/40 flex items-center justify-center text-[#06b6d4] shrink-0">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-base sm:text-xl font-black text-[#D1E8E2]">
                Guaranteed Architectural Sign-Off & 100% Clean IP Handover
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                All deliverables come with comprehensive technical documentation, automated testing suites, and immediate copyright transfer upon completion.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenQuote()}
            className="px-7 py-4 rounded-2xl bg-gradient-to-r from-[#06b6d4] via-[#8b5cf6] to-[#f59e0b] hover:opacity-95 text-slate-950 font-black text-xs uppercase tracking-wider shrink-0 shadow-xl shadow-[#06b6d4]/30 transform hover:scale-105 transition-all"
          >
            Schedule Architecture Review
          </button>
        </motion.div>
      </div>
    </section>
  );
};
