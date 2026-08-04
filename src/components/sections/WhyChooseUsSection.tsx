'use client';

import React from 'react';
import {
  MessageSquare,
  Clock,
  ShieldCheck,
  Headphones,
  Sparkles,
  Globe2,
  CheckCircle2,
} from 'lucide-react';
import { motion } from 'framer-motion';

interface WhyChooseUsSectionProps {
  onOpenQuote?: () => void;
}

export const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({ onOpenQuote }) => {
  const pillars = [
    {
      title: 'Transparent Communication',
      description: 'Real-time sprint updates, direct Slack channels, and clear milestone reporting.',
      icon: MessageSquare,
    },
    {
      title: 'Agile & On-Time Delivery',
      description: 'Bi-weekly sprint demos and guaranteed launch schedules with zero delay.',
      icon: Clock,
    },
    {
      title: 'Secure & Scalable Architecture',
      description: 'OWASP Top 10 compliance, cloud multi-region deployments, and SOC2 readiness.',
      icon: ShieldCheck,
    },
    {
      title: '24/7 Dedicated Support',
      description: 'Round-the-clock SLA infrastructure monitoring and rapid response team.',
      icon: Headphones,
    },
  ];

  const globalStats = [
    { value: '120+', label: 'Projects Completed' },
    { value: '80+', label: 'Happy Clients' },
    { value: '50+', label: 'Technologies Used' },
    { value: '98%', label: 'Client Satisfaction' },
  ];

  return (
    <section id="why-us" className="py-32 bg-[#12161F] relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#B88A44]/[0.03] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section 1: Why Choose Us Pill Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B2330] border border-[#B88A44]/20 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#B88A44]" />
            <span className="text-[11px] uppercase tracking-[0.25em] font-mono text-[#B88A44] font-semibold">
              WHY CHOOSE US
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-heading font-extrabold text-[#F5F1EA] tracking-tight leading-tight"
          >
            Your Vision. Our Expertise. <br />
            <span className="font-serif-luxury italic text-gold-gradient font-serif font-normal">
              Exceptional Results.
            </span>
          </motion.h2>
        </div>

        {/* 4 Core Pillars Grid matching mockup row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="luxury-card rounded-2xl p-7 border border-[#B88A44]/15 flex flex-col justify-between group hover:border-[#B88A44]/40"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#252D3D] border border-[#B88A44]/20 flex items-center justify-center text-[#B88A44] mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                  </div>

                  <h3 className="text-lg font-heading font-bold text-[#F5F1EA] group-hover:text-[#B88A44] transition-colors mb-2">
                    {pillar.title}
                  </h3>

                  <p className="text-xs font-body text-[#B9B4AA] font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Section 2: Global Trust & Animated Map Visual matching mockup bottom card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="luxury-card rounded-3xl p-8 sm:p-12 border border-[#B88A44]/20 bg-[#1B2330] relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Map Visual Graphic */}
            <div className="lg:col-span-6 flex flex-col justify-between h-full">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B88A44] font-semibold block mb-2">
                  GLOBAL PRESENCE
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#F5F1EA] mb-4">
                  Trusted by businesses across the globe
                </h3>
              </div>

              {/* Dark World Map Dot Visual Representation */}
              <div className="relative w-full h-48 sm:h-56 my-6 rounded-2xl bg-[#0B0D12] border border-[#B88A44]/15 p-4 flex items-center justify-center overflow-hidden">
                {/* World Map SVG Dots Graphic */}
                <div className="absolute inset-0 opacity-25 flex items-center justify-center">
                  <Globe2 className="w-64 h-64 text-[#B88A44] stroke-[0.8]" />
                </div>

                {/* Glowing Nodes for Key Regions */}
                <div className="absolute top-1/3 left-1/4 flex items-center gap-1.5 animate-pulse">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#B88A44] shadow-[0_0_10px_#B88A44]" />
                  <span className="text-[9px] font-mono text-[#F5F1EA] bg-[#1B2330]/90 px-2 py-0.5 rounded border border-[#B88A44]/30">
                    North America
                  </span>
                </div>

                <div className="absolute top-2/5 right-1/3 flex items-center gap-1.5 animate-pulse" style={{ animationDelay: '1s' }}>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#B88A44] shadow-[0_0_10px_#B88A44]" />
                  <span className="text-[9px] font-mono text-[#F5F1EA] bg-[#1B2330]/90 px-2 py-0.5 rounded border border-[#B88A44]/30">
                    Europe
                  </span>
                </div>

                <div className="absolute bottom-1/3 right-1/4 flex items-center gap-1.5 animate-pulse" style={{ animationDelay: '2s' }}>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#B88A44] shadow-[0_0_10px_#B88A44]" />
                  <span className="text-[9px] font-mono text-[#F5F1EA] bg-[#1B2330]/90 px-2 py-0.5 rounded border border-[#B88A44]/30">
                    Asia & MENA
                  </span>
                </div>

                {/* 20+ Countries Floating Badge */}
                <div className="absolute bottom-4 left-4 luxury-card px-3.5 py-1.5 rounded-full backdrop-blur-md border border-[#B88A44]/30 text-xs font-mono font-bold text-[#B88A44] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B88A44]" />
                  <span>20+ Countries</span>
                </div>
              </div>
            </div>

            {/* Right Stats Metrics */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-8">
              {globalStats.map((stat, idx) => (
                <div key={idx} className="flex flex-col p-4 rounded-xl bg-[#252D3D]/50 border border-[#B88A44]/12">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-gold-gradient mb-2">
                    {stat.value}
                  </span>
                  <span className="text-xs font-body text-[#B9B4AA] font-light">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
