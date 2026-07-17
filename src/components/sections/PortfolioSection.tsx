'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PORTFOLIO_PROJECTS } from '@/data';
import { ExternalLink, Trophy } from 'lucide-react';
import { GithubIcon } from '@/components/common/BrandIcons';

export const PortfolioSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Web App', 'Mobile App', 'AI & SaaS', 'E-Commerce'];

  const filteredProjects =
    selectedCategory === 'All'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="portfolio" className="py-28 bg-[#050816] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#06b6d4]/10 text-[#06b6d4] border border-[#06b6d4]/35 mb-3">
            <Trophy className="w-3.5 h-3.5" /> PROVEN ENTERPRISE DELIVERIES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Featured Production Case Studies &{' '}
            <span className="text-gradient-primary">
              Architectural Milestones
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Every project below represents a fully tested, SOC2-ready codebase delivered with 100% intellectual property ownership.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {categories.map((catName) => (
            <button
              key={catName}
              onClick={() => setSelectedCategory(catName)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                selectedCategory === catName
                  ? 'bg-gradient-to-r from-[#06b6d4] via-[#06b6d4] to-[#f59e0b] text-slate-950 shadow-lg shadow-[#06b6d4]/30 scale-105'
                  : 'bg-[#0f172a] hover:bg-white/[0.06] text-slate-300 hover:text-white border border-white/10'
              }`}
            >
              {catName}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl bg-[#0f172a]/90 border border-white/10 hover:border-[#06b6d4]/50 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#06b6d4]/15"
            >
              {/* Image Preview Header */}
              <div className="relative h-56 overflow-hidden bg-[#050816]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent" />

                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase bg-[#050816]/90 text-[#06b6d4] border border-[#06b6d4]/40 backdrop-blur-md">
                  {project.category}
                </span>

                <span className="absolute bottom-4 right-4 px-3 py-1 rounded-xl text-xs font-mono font-bold bg-gradient-to-r from-[#06b6d4] via-[#06b6d4] to-[#f59e0b] text-slate-950 shadow-md">
                  {project.metrics}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-7 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#06b6d4] transition-colors mb-2.5">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg text-[10px] font-mono bg-white/5 text-slate-300 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-5 border-t border-white/10 flex items-center justify-between">
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-[#06b6d4] hover:text-[#f59e0b] flex items-center gap-1.5 transition-colors uppercase tracking-wider font-mono"
                    >
                      <span>Live Edge Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-white/5 hover:bg-[#06b6d4]/20 text-slate-300 hover:text-[#06b6d4] transition-colors border border-white/10"
                      aria-label="GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
