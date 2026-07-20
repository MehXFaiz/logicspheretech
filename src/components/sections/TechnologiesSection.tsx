'use client';

import React, { useState } from 'react';
import { TECHNOLOGIES_DATA } from '@/data';
import { Cpu } from 'lucide-react';

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
    <section id="technologies" className="py-28 bg-[#2C3531] relative overflow-hidden border-b border-[#116466]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-none text-[10px] font-mono font-semibold uppercase tracking-widest bg-[#116466]/20 text-[#D9B08C] border border-[#116466] mb-3">
            <Cpu className="w-3.5 h-3.5" /> STACK MATRIX
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#D1E8E2] tracking-wide">
            Built With Advanced{' '}
            <span className="text-gradient-gold font-bold">
              Engineering Platforms
            </span>
          </h2>
          <p className="mt-4 text-[#94a3b8] text-sm sm:text-base leading-relaxed font-mono">
            We prioritize tools that offer edge execution speed, zero-trust configurations, and modular scalability.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14 font-mono">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-none text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-[#116466] border border-[#FFCB9A] text-[#D1E8E2]'
                  : 'bg-[#242b28] hover:bg-[#116466]/20 text-[#D1E8E2]/70 hover:text-[#D1E8E2] border border-[#116466]/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {filteredTechs.map((tech) => (
            <div
              key={tech.name}
              className="group rounded-none bg-[#242b28] border border-[#116466]/40 hover:border-[#FFCB9A] p-6 flex flex-col items-center justify-center text-center transition-all duration-300 shadow-sm"
            >
              <div
                className="w-12 h-12 rounded-none bg-[#2C3531] border border-[#116466]/40 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform text-xs font-semibold font-mono tracking-tighter shadow-inner"
                style={{ color: tech.iconColor || '#116466' }}
              >
                {tech.name.slice(0, 2).toUpperCase()}
              </div>

              <h4 className="font-semibold text-[#D1E8E2] text-xs font-mono uppercase tracking-wide group-hover:text-[#FFCB9A] transition-colors">
                {tech.name}
              </h4>
              <span className="text-[9px] uppercase font-mono text-slate-400 mt-1">
                {tech.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
