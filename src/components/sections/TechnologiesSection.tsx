'use client';

import React, { useState } from 'react';
import { TECHNOLOGIES_DATA } from '@/data';
import { Cpu, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const TechnologiesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Frontend',
    'Backend',
    'Mobile',
    'Database',
    'Cloud & DevOps',
    'Design',
  ];

  const filteredTechs =
    selectedCategory === 'All'
      ? TECHNOLOGIES_DATA
      : TECHNOLOGIES_DATA.filter((item) => item.category === selectedCategory);

  return (
    <section id="technologies" className="py-32 bg-[#12161F] relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#B88A44]/[0.03] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B2330] border border-[#B88A44]/20 mb-4"
          >
            <Cpu className="w-3.5 h-3.5 text-[#B88A44]" />
            <span className="text-[11px] uppercase tracking-[0.25em] font-mono text-[#B88A44] font-semibold">
              TECH STACK
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-heading font-extrabold text-[#F5F1EA] tracking-tight leading-tight"
          >
            Premium Engineering Showcase
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base text-[#B9B4AA] font-body font-light leading-relaxed max-w-2xl mx-auto"
          >
            We leverage state-of-the-art frameworks, high-throughput microservices, vector search engines, and enterprise cloud architectures.
          </motion.p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-nowrap sm:flex-wrap items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs font-mono tracking-wider uppercase px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-[#B88A44] text-[#0B0D12] font-bold shadow-[0_4px_15px_rgba(184,138,68,0.3)]'
                  : 'bg-[#1B2330] text-[#B9B4AA] hover:text-[#F5F1EA] border border-[#B88A44]/15'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Technologies Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5"
          >
            {filteredTechs.map((tech) => (
              <div
                key={tech.name}
                className="group luxury-card rounded-xl p-5 flex flex-col items-center justify-center text-center transition-all duration-300 border border-[#B88A44]/12 hover:border-[#B88A44]/40"
              >
                <div className="w-11 h-11 rounded-lg bg-[#252D3D] border border-[#B88A44]/20 flex items-center justify-center mb-3 text-xs font-mono font-bold text-[#B88A44] group-hover:scale-110 group-hover:bg-[#B88A44] group-hover:text-[#0B0D12] transition-all duration-300">
                  {tech.name.slice(0, 2).toUpperCase()}
                </div>

                <h4 className="font-bold text-[#F5F1EA] text-xs font-heading group-hover:text-[#B88A44] transition-colors mb-0.5">
                  {tech.name}
                </h4>

                <span className="text-[9px] uppercase font-mono text-[#B9B4AA]">
                  {tech.category}
                </span>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
