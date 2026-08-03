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
    <section id="technologies" className="py-28 bg-[#16181D] relative overflow-hidden transition-colors duration-300 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-body">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#1F2229] border border-white/10 text-[#C6A15B] mb-4">
            <Cpu className="w-3.5 h-3.5 text-[#C6A15B]" /> STACK MATRIX
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F4F4F5] tracking-tight leading-tight">
            Built With Advanced{' '}
            <span className="text-[#C6A15B]">
              Engineering Platforms
            </span>
          </h2>
          <p className="mt-4 text-[#A1A1AA] text-base sm:text-lg leading-relaxed">
            We prioritize tools that offer edge execution speed, zero-trust configurations, and modular scalability.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-nowrap sm:flex-wrap items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 sm:pb-0 mb-10 sm:mb-14 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`shrink-0 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-[#C6A15B] text-[#0E0E10] shadow-sm font-bold'
                  : 'bg-[#1F2229] text-[#A1A1AA] hover:text-[#F4F4F5] border border-white/10 hover:border-[#C6A15B]/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-5">
          {filteredTechs.map((tech) => (
            <div
              key={tech.name}
              className="group rounded-2xl bg-[#1F2229] border border-white/10 p-6 flex flex-col items-center justify-center text-center transition-all duration-300 shadow-xl hover:border-[#C6A15B]/50 hover:-translate-y-1"
            >
              <div
                className="w-12 h-12 rounded-xl bg-[#2A2E36] border border-white/10 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform text-xs font-semibold font-mono tracking-tighter text-[#C6A15B]"
              >
                {tech.name.slice(0, 2).toUpperCase()}
              </div>

              <h4 className="font-bold text-[#F4F4F5] text-xs font-heading group-hover:text-[#C6A15B] transition-colors">
                {tech.name}
              </h4>
              <span className="text-[10px] uppercase font-mono text-[#A1A1AA] mt-1">
                {tech.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
