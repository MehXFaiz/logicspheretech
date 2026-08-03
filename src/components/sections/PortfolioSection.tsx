'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PORTFOLIO_PROJECTS } from '@/data';
import {
  Trophy,
  ArrowRight,
  ExternalLink,
  Sparkles,
  CheckCircle2,
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

  const featuredProject = PORTFOLIO_PROJECTS[0]; // ConnectFlow

  const stats = [
    { label: 'Projects Delivered', value: '150+', icon: Trophy },
    { label: 'Happy Clients', value: '98%', icon: Users },
    { label: 'Years of Experience', value: '8+', icon: Clock },
    { label: 'Client Satisfaction', value: '100%', icon: ShieldCheck },
  ];

  return (
    <section id="portfolio" className="py-28 bg-[#F8FAFC] dark:bg-[#0F172A] relative overflow-hidden transition-colors duration-300 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-body">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#0F766E]/10 dark:bg-[#0F766E]/20 text-[#0F766E] dark:text-[#2DD4BF] border border-[#0F766E]/30 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" /> Our Portfolio
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
            Projects That Deliver{' '}
            <span className="text-[#0F766E] dark:text-[#2DD4BF]">
              Real Business Impact
            </span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Every solution below is engineered for ultra-fast performance, rock-solid security, enterprise scalability, and measurable business growth.
          </p>
        </motion.div>

        {/* Category Filter Pills */}
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
                  ? 'bg-[#0F766E] text-white shadow-sm'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
              }`}
            >
              {catName}
            </button>
          ))}
        </motion.div>

        {/* Featured Showcase Project Banner */}
        {selectedCategory === 'All' && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-lg overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              {/* Left Media Preview */}
              <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-full min-h-[320px] bg-slate-100 dark:bg-slate-800 overflow-hidden group">
                <Image
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  fill
                  sizes="(max-w-1024px) 100vw, 60vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-[#D4AF37] text-slate-950 shadow-md">
                  FEATURED CASE STUDY
                </span>
              </div>

              {/* Right Details */}
              <div className="lg:col-span-5 p-8 sm:p-10 space-y-6">
                <div>
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#0F766E] dark:text-[#2DD4BF] block mb-1">
                    {featuredProject.category} • ENTERPRISE SAAS
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 dark:text-white">
                    {featuredProject.title}
                  </h3>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {featuredProject.description}
                </p>

                {/* Key Outcome Badge */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[10px] text-slate-500 font-mono block uppercase">VERIFIED OUTCOME</span>
                    <span className="text-sm font-bold font-heading text-[#0F766E] dark:text-[#2DD4BF]">
                      {featuredProject.metrics}
                    </span>
                  </div>
                  <TrendingUp className="w-5 h-5 text-[#D4AF37]" />
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 font-mono text-xs">
                  {featuredProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
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
                    className="px-6 py-3 bg-[#0F766E] hover:bg-[#0D9488] text-white text-xs font-semibold rounded-full shadow-md inline-flex items-center gap-2 transition-all group/btn"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Dynamic Responsive Grid: 3 Columns Desktop, 2 Columns Tablet, 1 Column Mobile */}
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
                className="group rounded-[20px] bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-[#0F766E] dark:hover:border-[#2DD4BF] shadow-sm hover:shadow-xl hover:shadow-slate-900/5 overflow-hidden flex flex-col justify-between transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative h-52 overflow-hidden bg-slate-100 dark:bg-slate-800 shrink-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-w-768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-900 via-transparent to-transparent" />

                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-mono font-semibold uppercase bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 shadow-sm">
                    {project.category}
                  </span>

                  <span className="absolute bottom-4 right-4 px-3 py-1 rounded-full text-[10px] font-mono font-semibold bg-[#D4AF37] text-slate-950 shadow-sm">
                    {project.metrics}
                  </span>
                </div>

                {/* Project Info */}
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 font-body">
                  <div>
                    <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white group-hover:text-[#0F766E] dark:group-hover:text-[#2DD4BF] transition-colors mb-2.5">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6 font-mono">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* View Project Action */}
                    <div className="pt-5 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between font-body">
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-[#0F766E] dark:text-[#2DD4BF] hover:underline flex items-center gap-1.5 transition-colors uppercase tracking-wider group/link"
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

        {/* Animated Statistics Counters */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-8 sm:p-10 shadow-sm"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="flex items-center gap-4 group p-2">
                  <div className="w-12 h-12 rounded-2xl bg-[#0F766E]/10 dark:bg-[#0F766E]/20 text-[#0F766E] dark:text-[#2DD4BF] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 dark:text-white tracking-tight block">
                      {stat.value}
                    </span>
                    <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Premium Call to Action Banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 sm:p-12 shadow-sm text-center max-w-4xl mx-auto relative overflow-hidden"
        >
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#0F766E]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#0F766E]/10 dark:bg-[#0F766E]/20 text-[#0F766E] dark:text-[#2DD4BF] border border-[#0F766E]/30">
              <Award className="w-3.5 h-3.5 text-[#D4AF37]" /> Start Building Today
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900 dark:text-white leading-tight">
              Let&apos;s Build Something Amazing Together
            </h3>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
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
                className="w-full sm:w-auto px-8 py-4 bg-[#0F766E] hover:bg-[#0D9488] text-white font-medium rounded-full text-sm shadow-md hover:shadow-lg hover:shadow-[#0F766E]/25 transition-all flex items-center justify-center gap-2.5 group"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => {
                  if (onOpenQuote) onOpenQuote();
                  else {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-medium rounded-full text-sm border border-slate-200 dark:border-slate-800 transition-all shadow-sm flex items-center justify-center text-center"
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
