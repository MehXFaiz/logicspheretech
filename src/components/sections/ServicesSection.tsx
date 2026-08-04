'use client';

import React, { useState } from 'react';
import { SERVICES_DATA } from '@/data';
import { ServiceItem } from '@/types';
import { DynamicIcon } from '@/components/common/DynamicIcon';
import { ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenQuote?: (serviceTitle?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onOpenQuote = () => {},
}) => {
  const [activeTab, setActiveTab] = useState<string>('All');

  const categories = ['All', 'Development', 'AI & Data', 'Design & Product'];

  const filteredServices = SERVICES_DATA.filter((service) => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Development') {
      return (
        service.title.includes('Website') ||
        service.title.includes('Web') ||
        service.title.includes('Mobile') ||
        service.title.includes('ERP')
      );
    }
    if (activeTab === 'AI & Data') {
      return service.title.includes('AI') || service.title.includes('SaaS') || service.title.includes('Cloud');
    }
    if (activeTab === 'Design & Product') {
      return service.title.includes('UI/UX') || service.title.includes('Graphic') || service.title.includes('SEO');
    }
    return true;
  });

  return (
    <section id="services" className="py-32 bg-[#12161F] relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#B88A44]/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header & Layout Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B2330] border border-[#B88A44]/20 mb-4"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#B88A44]" />
              <span className="text-[11px] uppercase tracking-[0.25em] font-mono text-[#B88A44] font-semibold">
                WHAT WE DO
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl font-heading font-extrabold text-[#F5F1EA] tracking-tight leading-tight"
            >
              End-to-End Digital Solutions
            </motion.h2>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-end">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base text-[#B9B4AA] font-body leading-relaxed mb-6 font-light"
            >
              From strategy to support, we build digital solutions that help your business grow, scale and lead.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-4"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`text-xs font-mono tracking-wider uppercase px-4 py-2 rounded-full transition-all duration-300 ${
                    activeTab === cat
                      ? 'bg-[#B88A44] text-[#0B0D12] font-bold shadow-[0_4px_15px_rgba(184,138,68,0.3)]'
                      : 'bg-[#1B2330] text-[#B9B4AA] hover:text-[#F5F1EA] border border-[#B88A44]/15'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, idx) => {
            // Asymmetric bento grid sizing logic
            const isFeatured = idx === 0 || idx === 3;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                onClick={() => onSelectService(service)}
                className={`group luxury-card rounded-2xl p-8 cursor-pointer flex flex-col justify-between relative overflow-hidden transition-all duration-400 ${
                  isFeatured ? 'lg:col-span-1 border-[#B88A44]/30' : ''
                }`}
              >
                {/* Background Subtle Gradient Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#B88A44]/[0.05] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Card Top: Icon & Category Tag */}
                <div className="flex items-start justify-between mb-8 relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-[#252D3D] border border-[#B88A44]/20 flex items-center justify-center text-[#B88A44] group-hover:scale-110 group-hover:border-[#B88A44]/60 group-hover:shadow-[0_0_20px_rgba(184,138,68,0.2)] transition-all duration-300">
                    <DynamicIcon name={service.iconName} className="w-6 h-6 stroke-[1.8]" />
                  </div>

                  {service.popular && (
                    <span className="px-3 py-1 rounded-full text-[10px] uppercase font-mono font-bold tracking-wider bg-[#B88A44]/15 text-[#B88A44] border border-[#B88A44]/30">
                      Popular
                    </span>
                  )}
                </div>

                {/* Card Center: Title & Description */}
                <div className="relative z-10 mb-8">
                  <h3 className="text-xl font-heading font-bold text-[#F5F1EA] group-hover:text-[#B88A44] transition-colors duration-300 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm font-body text-[#B9B4AA] font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Card Bottom: Features List & Interactive Arrow Trigger */}
                <div className="pt-6 border-t border-[#B88A44]/12 flex items-center justify-between relative z-10">
                  <span className="text-xs font-mono text-[#B9B4AA] group-hover:text-[#F5F1EA] transition-colors">
                    {service.features.length} Features Included
                  </span>

                  <div className="w-9 h-9 rounded-full bg-[#252D3D] border border-[#B88A44]/20 flex items-center justify-center text-[#B88A44] group-hover:bg-[#B88A44] group-hover:text-[#0B0D12] group-hover:border-[#B88A44] transition-all duration-300 shadow-sm">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Scope Request Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 luxury-card rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 border-l-4 border-l-[#B88A44]"
        >
          <div className="flex flex-col">
            <h4 className="text-lg font-heading font-bold text-[#F5F1EA]">
              Need a Custom Tailored Software Architecture?
            </h4>
            <p className="text-sm font-body text-[#B9B4AA] mt-1 font-light">
              Our enterprise solution architects evaluate your requirements and deliver a complete scope blueprint within 24 hours.
            </p>
          </div>

          <button
            onClick={() => onOpenQuote()}
            className="btn-gold-primary px-6 py-3 text-xs uppercase tracking-wider font-bold shrink-0 flex items-center gap-2"
          >
            <span>Request Custom Scope</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};
