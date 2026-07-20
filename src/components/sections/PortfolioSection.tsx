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
    <section id="portfolio" className="py-28 bg-[#2C3531] relative overflow-hidden border-b border-[#116466]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-none text-[10px] font-mono font-semibold uppercase tracking-widest bg-[#116466]/20 text-[#D9B08C] border border-[#116466] mb-3">
            <Trophy className="w-3.5 h-3.5" /> DELIVERED WORK
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#D1E8E2] tracking-wide">
            Featured Production Studies &{' '}
            <span className="text-gradient-primary font-bold">
              Engineering Milestones
            </span>
          </h2>
          <p className="mt-4 text-[#94a3b8] text-sm sm:text-base leading-relaxed font-mono">
            Every project below represents a verified codebase delivered with full intellectual property ownership.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14 font-mono">
          {categories.map((catName) => (
            <button
              key={catName}
              onClick={() => setSelectedCategory(catName)}
              className={`px-5 py-2 rounded-none text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                selectedCategory === catName
                  ? 'bg-[#116466] border border-[#FFCB9A] text-[#D1E8E2]'
                  : 'bg-[#242b28] hover:bg-[#116466]/20 text-[#D1E8E2]/70 hover:text-[#D1E8E2] border border-[#116466]/40'
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
              className="group rounded-none bg-[#242b28] border border-[#116466]/40 hover:border-[#FFCB9A] overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-sm"
            >
              {/* Image Preview Header */}
              <div className="relative h-52 overflow-hidden bg-[#2C3531]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-102 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#242b28] via-transparent to-transparent" />

                <span className="absolute top-4 left-4 px-3 py-1 rounded-none text-[9px] font-mono font-semibold uppercase bg-[#242b28] text-[#D1E8E2] border border-[#116466]/60">
                  {project.category}
                </span>

                <span className="absolute bottom-4 right-4 px-3 py-1 rounded-none text-[10px] font-mono font-semibold bg-[#116466] border border-[#FFCB9A] text-[#D1E8E2]">
                  {project.metrics}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-base font-bold text-[#D1E8E2] group-hover:text-[#FFCB9A] transition-colors mb-2.5 font-mono uppercase tracking-wide">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6 font-sans">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6 font-mono">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-none text-[9px] bg-[#2C3531] text-slate-300 border border-[#116466]/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-5 border-t border-[#116466]/30 flex items-center justify-between font-mono">
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] font-semibold text-[#116466] hover:text-[#FFCB9A] flex items-center gap-1.5 transition-colors uppercase tracking-wider"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-none bg-[#2C3531] hover:bg-[#116466]/30 text-slate-300 hover:text-[#D1E8E2] transition-colors border border-[#116466]/40"
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
