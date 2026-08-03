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
  ChevronRight,
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
    <section id="process" className="py-32 bg-[#F5F5F7] dark:bg-[#111111] relative overflow-hidden transition-colors duration-300 border-b border-black/5 dark:border-white/10 font-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-tight bg-black/5 dark:bg-white/10 text-[#1D1D1F] dark:text-white mb-4 font-body">
            <Sparkles className="w-3.5 h-3.5 text-[#0071E3]" /> Our Process
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1D1D1F] dark:text-white tracking-tight leading-tight">
            From Idea to <span className="text-[#0071E3]">Successful Product.</span>
          </h2>
          <p className="mt-4 text-[#86868B] dark:text-[#A1A1AA] text-base sm:text-lg leading-relaxed font-body font-normal">
            We follow a structured development process that ensures every project is delivered with quality, transparency, and long-term scalability.
          </p>
        </motion.div>

        {/* Timeline Grid */}
        <div className="relative mb-20">
          <div className="hidden lg:block absolute top-[52px] left-[40px] right-[40px] h-0.5 bg-black/5 dark:bg-white/10 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-6 relative z-10 font-body">
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
                    className={`h-full rounded-3xl bg-white dark:bg-[#1C1C1E] border p-6 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl ${
                      isCurrent
                        ? 'border-[#0071E3] ring-2 ring-[#0071E3]/20'
                        : 'border-black/5 dark:border-white/10 hover:border-[#0071E3]/40'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="w-9 h-9 rounded-xl bg-[#F5F5F7] dark:bg-[#111111] text-[#0071E3] font-mono text-xs font-bold flex items-center justify-center border border-black/5 dark:border-white/10">
                          {stepItem.num}
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-[#0071E3]/10 text-[#0071E3] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-5 h-5 stroke-[2.2]" />
                        </div>
                      </div>

                      <h3 className="text-base font-bold font-heading text-[#1D1D1F] dark:text-white group-hover:text-[#0071E3] transition-colors mb-2">
                        {stepItem.title}
                      </h3>

                      <p className="text-xs text-[#86868B] dark:text-[#A1A1AA] leading-relaxed font-body">
                        {stepItem.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-black/5 dark:border-white/10 flex items-center justify-between text-[10px] font-mono text-[#86868B]">
                      <span>PHASE {stepItem.num}</span>
                      <span className="w-2 h-2 rounded-full bg-[#0071E3]" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Benefits Cards */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-body"
        >
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                className="group rounded-3xl bg-white dark:bg-[#1C1C1E] border border-black/5 dark:border-white/10 p-6 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#0071E3]/10 text-[#0071E3] flex items-center justify-center shrink-0 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 stroke-[2.2]" />
                </div>
                <h4 className="text-lg font-bold font-heading text-[#1D1D1F] dark:text-white group-hover:text-[#0071E3] transition-colors mb-1.5">
                  {item.title}
                </h4>
                <p className="text-xs text-[#86868B] dark:text-[#A1A1AA] leading-relaxed font-body">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-3xl bg-[#1D1D1F] text-white p-8 sm:p-12 shadow-2xl text-center max-w-4xl mx-auto relative overflow-hidden font-body"
        >
          <div className="relative z-10 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-white">
              <Sparkles className="w-3.5 h-3.5 text-[#0071E3]" /> Structured Engineering
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold font-heading text-white leading-tight">
              Ready to Turn Your Vision into Reality?
            </h3>
            <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed max-w-2xl mx-auto">
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
                className="apple-btn-primary px-8 py-4 text-sm font-semibold flex items-center justify-center gap-2 group shadow-xl"
              >
                <span>Start Your Project</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => {
                  if (onOpenQuote) onOpenQuote();
                  else {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="apple-btn-secondary px-8 py-4 text-sm font-medium flex items-center justify-center text-center text-white bg-white/10 hover:bg-white/15"
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
