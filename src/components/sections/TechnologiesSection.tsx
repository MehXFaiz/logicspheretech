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
    <section id="technologies" className="py-28 bg-[#050608] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/35 mb-3">
            <Cpu className="w-3.5 h-3.5" /> PRODUCTION TECHNOLOGY STACK
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Built With Bespoke, High-Velocity{' '}
            <span className="text-gradient-gold">
              Enterprise Tools
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            We select tools for edge execution speed, zero-trust security, and maintainable modular architecture.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-[#9E822F] via-[#D4AF37] to-[#E5C158] text-slate-950 shadow-lg shadow-[#D4AF37]/30 scale-105'
                  : 'bg-[#0B0E14] hover:bg-white/[0.06] text-slate-300 hover:text-white border border-white/10'
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
              className="group rounded-3xl bg-[#0B0E14]/90 border border-white/10 hover:border-[#D4AF37]/50 p-6 flex flex-col items-center justify-center text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#D4AF37]/15"
            >
              <div
                className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-sm font-black font-mono tracking-tighter shadow-inner group-hover:border-[#D4AF37]/40"
                style={{ color: tech.iconColor || '#D4AF37' }}
              >
                {tech.name.slice(0, 2).toUpperCase()}
              </div>

              <h4 className="font-bold text-white text-sm group-hover:text-[#D4AF37] transition-colors">
                {tech.name}
              </h4>
              <span className="text-[10px] uppercase font-mono text-slate-400 mt-1">
                {tech.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
