'use client';

import React, { useState } from 'react';
import {
  Sparkles,
  Lightbulb,
  FileText,
  PenTool,
  Code,
  ShieldCheck,
  Rocket,
  Headphones,
  ArrowRight,
  Zap,
  MessageSquare,
  Lock,
  HeartHandshake,
} from 'lucide-react';
import { motion } from 'framer-motion';

interface ProcessSectionProps {
  onOpenQuote?: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenQuote }) => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const workflowSteps = [
    {
      step: 1,
      num: '01',
      title: 'Discovery',
      description: 'We understand your business goals, challenges, and project requirements.',
      icon: Lightbulb,
    },
    {
      step: 2,
      num: '02',
      title: 'Planning',
      description: 'We create project architecture, timelines, milestones, and technical strategy.',
      icon: FileText,
    },
    {
      step: 3,
      num: '03',
      title: 'UI/UX Design',
      description: 'Our designers create modern, user-friendly, and responsive interfaces.',
      icon: PenTool,
    },
    {
      step: 4,
      num: '04',
      title: 'Development',
      description: 'Our engineers build secure, scalable, and high-performance applications.',
      icon: Code,
    },
    {
      step: 5,
      num: '05',
      title: 'Quality Assurance',
      description: 'Every feature is thoroughly tested for functionality, security, and performance.',
      icon: ShieldCheck,
    },
    {
      step: 6,
      num: '06',
      title: 'Deployment',
      description: 'We launch your product using modern cloud infrastructure and best deployment practices.',
      icon: Rocket,
    },
    {
      step: 7,
      num: '07',
      title: 'Support & Growth',
      description: 'We continue improving your product through updates, maintenance, and technical support.',
      icon: Headphones,
    },
  ];

  const benefits = [
    {
      title: 'Fast Delivery',
      description: 'Rapid agile sprints with guaranteed weekly code deployments.',
      icon: Zap,
    },
    {
      title: 'Transparent Communication',
      description: 'Real-time Slack/Teams access and progress tracking.',
      icon: MessageSquare,
    },
    {
      title: 'Enterprise Security',
      description: 'SOC2 & ISO compliant zero-trust software architecture.',
      icon: Lock,
    },
    {
      title: 'Long-Term Partnership',
      description: 'Dedicated maintenance, SLA guarantees, and scaling support.',
      icon: HeartHandshake,
    },
  ];

  return (
    <section id="process" className="py-28 bg-[#F8FAFC] dark:bg-[#0F172A] relative overflow-hidden transition-colors duration-300 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-body">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#0F766E]/10 dark:bg-[#0F766E]/20 text-[#0F766E] dark:text-[#2DD4BF] border border-[#0F766E]/30 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" /> Our Process
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
            From Idea to{' '}
            <span className="text-[#0F766E] dark:text-[#2DD4BF]">
              Successful Digital Product
            </span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            We follow a structured development process that ensures every project is delivered with quality, transparency, and long-term scalability.
          </p>
        </motion.div>

        {/* Responsive Connected Workflow Timeline */}
        <div className="relative mb-20">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-[52px] left-[40px] right-[40px] h-0.5 bg-slate-200 dark:bg-slate-800 z-0" />

          {/* Steps Grid: 7 Cols Desktop, 2 Cols Tablet, 1 Col Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-6 relative z-10">
            {workflowSteps.map((stepItem, idx) => {
              const Icon = stepItem.icon;
              const isCurrent = activeStep === stepItem.step;

              return (
                <motion.div
                  key={stepItem.step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  whileHover={{ y: -6 }}
                  onClick={() => setActiveStep(stepItem.step)}
                  className="group cursor-pointer"
                >
                  <div
                    className={`h-full rounded-[20px] bg-white dark:bg-slate-900 border p-6 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-slate-900/5 ${
                      isCurrent
                        ? 'border-[#0F766E] dark:border-[#2DD4BF] ring-2 ring-[#0F766E]/20'
                        : 'border-slate-200/80 dark:border-slate-800 hover:border-[#0F766E] dark:hover:border-[#2DD4BF]'
                    }`}
                  >
                    <div>
                      {/* Top Header: Step Num & Icon */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-[#0F766E] dark:text-[#2DD4BF] font-mono text-xs font-bold flex items-center justify-center border border-slate-200 dark:border-slate-700">
                          {stepItem.num}
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-[#0F766E]/10 dark:bg-[#0F766E]/20 text-[#0F766E] dark:text-[#2DD4BF] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-5 h-5 stroke-[2.2]" />
                        </div>
                      </div>

                      {/* Step Title */}
                      <h3 className="text-base font-bold font-heading text-slate-900 dark:text-white group-hover:text-[#0F766E] dark:group-hover:text-[#2DD4BF] transition-colors mb-2">
                        {stepItem.title}
                      </h3>

                      {/* Step Description */}
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-body">
                        {stepItem.description}
                      </p>
                    </div>

                    {/* Step indicator dot */}
                    <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-400">
                      <span>PHASE {stepItem.num}</span>
                      <span className="w-2 h-2 rounded-full bg-[#0F766E] opacity-60" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Additional Benefits Section: Four Premium Cards */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                className="group rounded-[20px] bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-[#0F766E] dark:hover:border-[#2DD4BF] p-6 shadow-sm hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#0F766E]/10 dark:bg-[#0F766E]/20 text-[#0F766E] dark:text-[#2DD4BF] flex items-center justify-center shrink-0 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 stroke-[2.2]" />
                </div>
                <h4 className="text-lg font-bold font-heading text-slate-900 dark:text-white group-hover:text-[#0F766E] dark:group-hover:text-[#2DD4BF] transition-colors mb-1.5">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-body">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Full-Width CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 sm:p-12 shadow-sm text-center max-w-4xl mx-auto relative overflow-hidden"
        >
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#0F766E]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#0F766E]/10 dark:bg-[#0F766E]/20 text-[#0F766E] dark:text-[#2DD4BF] border border-[#0F766E]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" /> Structured Engineering
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900 dark:text-white leading-tight">
              Ready to Turn Your Vision into Reality?
            </h3>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Whether you&apos;re launching a startup, upgrading your ERP, building a CRM, or developing an AI-powered solution, our team is ready to deliver.
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
                Talk to Our Experts
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
