'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PORTFOLIO_PROJECTS } from '@/data';
import {
  Trophy,
  ArrowRight,
  ExternalLink,
  Sparkles,
  Users,
  Award,
  Clock,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface PortfolioSectionProps {
  onOpenQuote?: () => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onOpenQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Web Development',
    'ERP Systems',
    'CRM Solutions',
    'Mobile Apps',
    'AI Solutions',
  ];

  const filteredProjects = PORTFOLIO_PROJECTS.filter((project) => {
    if (selectedCategory === 'All') return true;
    const cat = project.category as string;
    const title = project.title.toLowerCase();
    const desc = project.description.toLowerCase();

    if (selectedCategory === 'Web Development') {
      return cat === 'Website' || cat === 'Web App';
    }
    if (selectedCategory === 'ERP Systems') {
      return cat.includes('ERP') || title.includes('erp') || desc.includes('erp') || title.includes('flow') || title.includes('jumani');
    }
    if (selectedCategory === 'CRM Solutions') {
      return cat.includes('CRM') || title.includes('crm') || desc.includes('crm') || title.includes('mentor');
    }
    if (selectedCategory === 'Mobile Apps') {
      return cat === 'Mobile App' || title.includes('mobile') || title.includes('app');
    }
    if (selectedCategory === 'AI Solutions') {
      return cat === 'AI & SaaS' || title.includes('ai') || desc.includes('ai') || title.includes('flow');
    }
    return true;
  });

  const featuredProject = PORTFOLIO_PROJECTS[0];

  const stats = [
    { label: 'Projects Delivered', value: '150+', icon: Trophy },
    { label: 'Happy Clients', value: '98%', icon: Users },
    { label: 'Years of Experience', value: '8+', icon: Clock },
    { label: 'Client Satisfaction', value: '100%', icon: ShieldCheck },
  ];

  return (
    <section id="portfolio" className="py-28 bg-[#0A0A0A] relative overflow-hidden transition-colors duration-300 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-body">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#00D9A6]/10 text-[#00D9A6] border border-[#00D9A6]/30 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" /> Our Portfolio
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Projects That Deliver{' '}
            <span className="text-gradient-emerald">
              Real Business Impact
            </span>
          </h2>
          <p className="mt-4 text-[#A1A1AA] text-base sm:text-lg leading-relaxed">
            Every solution below is engineered for ultra-fast performance, rock-solid security, enterprise scalability, and measurable business growth.
          </p>
        </motion.div>

        {/* Filter Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-nowrap sm:flex-wrap items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 sm:pb-0 mb-12 sm:mb-16 no-scrollbar"
        >
          {categories.map((catName) => (
            <button
              key={catName}
              onClick={() => setSelectedCategory(catName)}
              className={`shrink-0 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                selectedCategory === catName
                  ? 'bg-[#00D9A6] text-[#0A0A0A] shadow-lg shadow-[#00D9A6]/20 font-bold'
                  : 'bg-[#18181B] text-[#A1A1AA] hover:text-white border border-white/10 hover:border-[#00D9A6]/40'
              }`}
            >
              {catName}
            </button>
          ))}
        </motion.div>

        {/* Featured Case Study */}
        {selectedCategory === 'All' && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 rounded-3xl bg-[#18181B] border border-white/10 shadow-2xl overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-full min-h-[320px] bg-[#111827] overflow-hidden group">
                <Image
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  fill
                  sizes="(max-w-1024px) 100vw, 60vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#18181B] via-transparent to-transparent" />
                <span className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-[#F59E0B] text-slate-950 shadow-md">
                  FEATURED CASE STUDY
                </span>
              </div>

              <div className="lg:col-span-5 p-8 sm:p-10 space-y-6">
                <div>
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00D9A6] block mb-1">
                    {featuredProject.category} • ENTERPRISE SAAS
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                    {featuredProject.title}
                  </h3>
                </div>

                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  {featuredProject.description}
                </p>

                <div className="p-4 rounded-2xl bg-[#0A0A0A] border border-white/10 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[10px] text-[#A1A1AA] font-mono block uppercase">VERIFIED OUTCOME</span>
                    <span className="text-sm font-bold font-heading text-[#00D9A6]">
                      {featuredProject.metrics}
                    </span>
                  </div>
                  <TrendingUp className="w-5 h-5 text-[#F59E0B]" />
                </div>

                <div className="flex flex-wrap gap-2 font-mono text-xs">
                  {featuredProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-[#0A0A0A] text-[#A1A1AA] border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-2">
                  <a
                    href={featuredProject.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-[#00D9A6] hover:bg-[#00D9A6]/90 text-[#0A0A0A] text-xs font-bold rounded-full shadow-md inline-flex items-center gap-2 transition-all group/btn"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform stroke-[2.5]" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Project Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -6 }}
                className="group rounded-[20px] bg-[#18181B] border border-white/10 hover:border-[#00D9A6]/50 shadow-xl overflow-hidden flex flex-col justify-between transition-all duration-300"
              >
                <div className="relative h-52 overflow-hidden bg-[#111827] shrink-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-w-768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#18181B] via-transparent to-transparent" />

                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-mono font-semibold uppercase bg-[#0A0A0A]/90 text-white border border-white/10 shadow-sm">
                    {project.category}
                  </span>

                  <span className="absolute bottom-4 right-4 px-3 py-1 rounded-full text-[10px] font-mono font-semibold bg-[#F59E0B] text-slate-950 shadow-sm">
                    {project.metrics}
                  </span>
                </div>

                <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 font-body">
                  <div>
                    <h3 className="text-xl font-bold font-heading text-white group-hover:text-[#00D9A6] transition-colors mb-2.5">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6 line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-6 font-mono">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-[10px] bg-[#0A0A0A] text-[#A1A1AA] border border-white/10 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="pt-5 border-t border-white/10 flex items-center justify-between font-body">
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-[#00D9A6] hover:underline flex items-center gap-1.5 transition-colors uppercase tracking-wider group/link"
                      >
                        <span>View Project</span>
                        <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Animated Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 rounded-3xl bg-[#18181B] border border-white/10 p-8 sm:p-10 shadow-xl"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="flex items-center gap-4 group p-2">
                  <div className="w-12 h-12 rounded-2xl bg-[#00D9A6]/10 text-[#00D9A6] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-2xl sm:text-3xl font-bold font-heading text-white tracking-tight block">
                      {stat.value}
                    </span>
                    <span className="text-xs text-[#A1A1AA] font-medium uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 rounded-3xl bg-[#18181B] border border-white/10 p-8 sm:p-12 shadow-2xl text-center max-w-4xl mx-auto relative overflow-hidden"
        >
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#00D9A6]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[#3B82F6]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#00D9A6]/10 text-[#00D9A6] border border-[#00D9A6]/30">
              <Award className="w-3.5 h-3.5 text-[#F59E0B]" /> Start Building Today
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold font-heading text-white leading-tight">
              Let&apos;s Build Something Amazing Together
            </h3>
            <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed max-w-2xl mx-auto">
              Whether you need a website, ERP, CRM, mobile application, or AI-powered solution, our team is ready to help you transform your ideas into reality.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => {
                  if (onOpenQuote) onOpenQuote();
                  else {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full sm:w-auto px-8 py-4 bg-[#00D9A6] hover:bg-[#00D9A6]/90 text-[#0A0A0A] font-bold rounded-full text-sm shadow-lg shadow-[#00D9A6]/20 transition-all flex items-center justify-center gap-2.5 group"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform stroke-[2.5]" />
              </button>

              <button
                onClick={() => {
                  if (onOpenQuote) onOpenQuote();
                  else {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full sm:w-auto px-8 py-4 bg-[#0A0A0A] hover:bg-black text-white font-medium rounded-full text-sm border border-white/10 transition-all shadow-sm flex items-center justify-center text-center"
              >
                Book a Free Consultation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
