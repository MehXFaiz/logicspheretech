'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PORTFOLIO_PROJECTS } from '@/data';
import { Sparkles, ArrowUpRight, ArrowRight, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface PortfolioSectionProps {
  onOpenQuote?: () => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onOpenQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Web App', 'AI & SaaS', 'Mobile App', 'Website', 'E-Commerce'];

  const filteredProjects = PORTFOLIO_PROJECTS.filter((project) => {
    if (selectedCategory === 'All') return true;
    return project.category === selectedCategory;
  });

  return (
    <section id="portfolio" className="py-32 bg-[#0B0D12] relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-[#B88A44]/[0.04] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Row */}
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
                FEATURED WORK
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl font-heading font-extrabold text-[#F5F1EA] tracking-tight leading-tight"
            >
              Solutions We&apos;re Proud Of
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
              Explore our recent enterprise projects where innovation meets measurable impact.
            </motion.p>

            {/* Filter Pills */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar"
            >
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
            </motion.div>
          </div>
        </div>

        {/* Project Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className="group luxury-card rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-400 border border-[#B88A44]/15 hover:border-[#B88A44]/50"
              >
                {/* Project Image Preview */}
                <div className="relative aspect-[4/3] w-full bg-[#12161F] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80';
                    }}
                  />

                  {/* Dark Glass Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B2330] via-transparent to-transparent opacity-90" />

                  {/* Category Tag */}
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[9px] font-mono font-bold tracking-wider uppercase bg-[#0B0D12]/80 text-[#B88A44] border border-[#B88A44]/25 backdrop-blur-md">
                    {project.category}
                  </span>

                  {/* Metric Badge */}
                  <span className="absolute bottom-3 left-3 text-[10px] font-mono text-[#F5F1EA] font-semibold">
                    {project.metrics}
                  </span>
                </div>

                {/* Project Info */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-heading font-bold text-[#F5F1EA] group-hover:text-[#B88A44] transition-colors duration-300 line-clamp-1 mb-1">
                      {project.title.split('—')[0]}
                    </h3>
                    <p className="text-xs font-body text-[#B9B4AA] font-light line-clamp-2 leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies Tags & Live Link Arrow */}
                  <div className="pt-4 border-t border-[#B88A44]/12 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1 font-mono text-[9px] text-[#B9B4AA]">
                      {project.technologies.slice(0, 2).map((tech) => (
                        <span key={tech} className="px-2 py-0.5 rounded bg-[#12161F] border border-[#B88A44]/15">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-[#252D3D] border border-[#B88A44]/20 flex items-center justify-center text-[#B88A44] group-hover:bg-[#B88A44] group-hover:text-[#0B0D12] transition-all duration-300"
                      aria-label="View Live Project"
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
