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
    <section id="technologies" className="py-28 bg-[#F8FAFC] dark:bg-[#0F172A] relative overflow-hidden transition-colors duration-300 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-body">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#0F766E]/10 dark:bg-[#0F766E]/20 text-[#0F766E] dark:text-[#2DD4BF] border border-[#0F766E]/30 mb-4">
            <Cpu className="w-3.5 h-3.5 text-[#D4AF37]" /> STACK MATRIX
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
            Built With Advanced{' '}
            <span className="text-[#0F766E] dark:text-[#2DD4BF]">
              Engineering Platforms
            </span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
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
                  ? 'bg-[#0F766E] text-white shadow-sm'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
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
              className="group rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-6 flex flex-col items-center justify-center text-center transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-slate-900/5 hover:-translate-y-1"
            >
              <div
                className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform text-xs font-semibold font-mono tracking-tighter"
                style={{ color: tech.iconColor || '#0F766E' }}
              >
                {tech.name.slice(0, 2).toUpperCase()}
              </div>

              <h4 className="font-bold text-slate-900 dark:text-white text-xs font-heading group-hover:text-[#0F766E] dark:group-hover:text-[#2DD4BF] transition-colors">
                {tech.name}
              </h4>
              <span className="text-[10px] uppercase font-mono text-slate-500 mt-1">
                {tech.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
