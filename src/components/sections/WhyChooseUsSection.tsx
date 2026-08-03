'use client';

import React from 'react';
import {
  Sparkles,
  Users,
  Target,
  Zap,
  ShieldCheck,
  Headphones,
  Cpu,
  ChevronRight,
  MessageSquare,
  Clock,
  Lock,
  Trophy,
  Award,
  Layers,
} from 'lucide-react';
import { motion } from 'framer-motion';

interface WhyChooseUsSectionProps {
  onOpenQuote?: () => void;
}

export const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({ onOpenQuote }) => {
  const features = [
    {
      title: 'Experienced Development Team',
      description: 'Our developers build secure, scalable, and maintainable software using modern technologies.',
      icon: Users,
    },
    {
      title: 'Business-Focused Solutions',
      description: 'Every solution is designed around business goals, not just technical requirements.',
      icon: Target,
    },
    {
      title: 'Fast Delivery',
      description: 'Agile development ensures faster delivery without compromising quality.',
      icon: Zap,
    },
    {
      title: 'Secure & Scalable Architecture',
      description: 'Applications are built with security, performance, and future scalability in mind.',
      icon: ShieldCheck,
    },
    {
      title: 'Dedicated Support',
      description: 'We provide continuous maintenance, updates, and technical support after deployment.',
      icon: Headphones,
    },
    {
      title: 'Latest Technologies',
      description: 'We work with React, Next.js, Node.js, AI, Cloud, PostgreSQL, and other modern technologies.',
      icon: Cpu,
    },
  ];

  const trustIndicators = [
    { title: 'Transparent Communication', icon: MessageSquare },
    { title: 'On-Time Delivery', icon: Clock },
    { title: 'Secure Development', icon: Lock },
    { title: '24/7 Technical Support', icon: Headphones },
  ];

  const achievements = [
    { label: 'Projects Completed', value: '150+', icon: Trophy },
    { label: 'Happy Clients', value: '98%', icon: Users },
    { label: 'Technologies Used', value: '25+', icon: Layers },
    { label: 'Customer Satisfaction', value: '100%', icon: Award },
  ];

  const techBadges = [
    'React',
    'Next.js',
    'Node.js',
    'Express',
    'PostgreSQL',
    'Tailwind CSS',
    'TypeScript',
    'Docker',
    'AWS',
    'GitHub',
  ];

  return (
    <section id="why-us" className="py-32 bg-[#16181D] relative overflow-hidden transition-colors duration-300 font-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-[#1F2229] border border-white/10 text-[#C6A15B] mb-4 font-body">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" /> Why Choose Logic Sphere
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F4F4F5] tracking-tight leading-tight">
            Your <span className="text-[#C6A15B]">Trusted Technology Partner.</span>
          </h2>
          <p className="mt-4 text-[#A1A1AA] text-base sm:text-lg leading-relaxed font-body font-normal">
            We combine strategy, design, and engineering to deliver scalable digital solutions that help businesses grow faster, operate smarter, and stay ahead of the competition.
          </p>
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative font-body"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-full aspect-[4/3.8] max-w-md mx-auto"
            >
              <div className="absolute inset-0 rounded-3xl bg-[#1F2229] border border-white/10 shadow-2xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden">
                <div className="relative z-10 flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#2A2E36] border border-white/20 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-[#C6A15B]/60 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-[#C6A15B] inline-block" />
                  </div>
                  <span className="text-[10px] font-mono font-bold tracking-wider px-3 py-1 rounded-full bg-[#2A2E36] text-[#C6A15B]">
                    LOGICSPHERE RIGOR
                  </span>
                </div>

                <div className="relative z-10 my-auto py-6 space-y-4 font-body">
                  <div className="p-4 rounded-2xl bg-[#0E0E10] text-[#F4F4F5] space-y-3 shadow-inner border border-white/10">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-[#C6A15B] font-semibold flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#C6A15B] animate-pulse" />
                        CODE_QUALITY: 100%
                      </span>
                      <span className="text-[#A1A1AA]">SOC2 COMPLIANT</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
                      <div className="p-2.5 rounded-xl bg-[#1F2229] border border-white/10">
                        <span className="text-[#A1A1AA] block">SLA RESPONSE</span>
                        <span className="text-sm font-bold text-[#C6A15B] font-heading">&lt; 4 Hours</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#1F2229] border border-white/10">
                        <span className="text-[#A1A1AA] block">IP HANDOVER</span>
                        <span className="text-sm font-bold text-[#6C7A89] font-heading">100% Transfer</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs font-body">
                    <div className="p-3.5 rounded-2xl bg-[#2A2E36]/40 border border-white/10 shadow-sm flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#C6A15B] text-[#0E0E10] flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] text-[#A1A1AA] font-mono block">SECURITY</span>
                        <span className="text-xs font-bold text-[#F4F4F5] font-heading">Enterprise</span>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-[#2A2E36]/40 border border-white/10 shadow-sm flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#2A2E36] text-[#F4F4F5] border border-white/10 flex items-center justify-center shrink-0">
                        <Zap className="w-4 h-4 text-[#C6A15B]" />
                      </div>
                      <div>
                        <span className="text-[10px] text-[#A1A1AA] font-mono block">DELIVERY</span>
                        <span className="text-xs font-bold text-[#F4F4F5] font-heading">Agile Sprint</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 flex items-center justify-between pt-3 border-t border-white/10 text-[11px] text-[#A1A1AA] font-mono">
                  <span>TRUSTED PARTNER MATRIX</span>
                  <span className="text-[#C6A15B] font-semibold">VERIFIED</span>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -top-4 -right-4 px-4 py-2 rounded-2xl bg-[#1F2229] border border-white/10 shadow-xl text-xs font-semibold text-[#F4F4F5] flex items-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
                <span>Zero Lock-In</span>
              </motion.div>
            </motion.div>
          </motion.div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 font-body">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="group rounded-3xl bg-[#1F2229] border border-white/10 shadow-sm hover:shadow-xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between hover:border-[#C6A15B]/50"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#2A2E36] text-[#C6A15B] flex items-center justify-center shrink-0 mb-5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 stroke-[2.2]" />
                    </div>

                    <h3 className="text-lg font-bold font-heading text-[#F4F4F5] group-hover:text-[#C6A15B] transition-colors mb-2">
                      {feature.title}
                    </h3>

                    <p className="text-sm text-[#A1A1AA] leading-relaxed font-body">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 p-6 sm:p-8 rounded-3xl bg-[#1F2229] border border-white/10 shadow-sm font-body"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {trustIndicators.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-center gap-3 text-[#F4F4F5] font-semibold text-xs sm:text-sm font-body">
                  <div className="w-9 h-9 rounded-xl bg-[#2A2E36] text-[#C6A15B] flex items-center justify-center shrink-0 border border-white/10">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span>{item.title}</span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 grid grid-cols-2 lg:grid-cols-4 gap-6 font-body"
        >
          {achievements.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-[#1F2229] border border-white/10 shadow-sm flex items-center gap-4 group hover:border-[#C6A15B]/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#2A2E36] text-[#C6A15B] flex items-center justify-center shrink-0 border border-white/10">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-bold font-heading text-[#F4F4F5] tracking-tight block">
                    {item.value}
                  </span>
                  <span className="text-xs text-[#A1A1AA] font-medium uppercase tracking-wider font-body">
                    {item.label}
                  </span>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Tech Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center space-y-6 font-body"
        >
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#A1A1AA] block">
            MODERN TECHNOLOGY STACK WE MASTER
          </span>

          <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
            {techBadges.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full text-xs font-mono font-medium bg-[#1F2229] text-[#F4F4F5] border border-white/10 shadow-sm hover:border-[#C6A15B] transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-3xl bg-[#1F2229] text-[#F4F4F5] p-8 sm:p-12 shadow-2xl text-center max-w-4xl mx-auto relative overflow-hidden font-body border border-white/10"
        >
          <div className="relative z-10 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#2A2E36] text-[#C6A15B] border border-white/10">
              <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" /> Partner With Us
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold font-heading text-[#F4F4F5] leading-tight">
              Let&apos;s Build Your Next Digital Success Story
            </h3>
            <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed max-w-2xl mx-auto">
              From startups to enterprises, we help businesses transform ideas into powerful digital products.
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
                className="executive-btn-primary px-8 py-4 text-sm font-semibold flex items-center justify-center gap-2 group shadow-xl"
              >
                <span>Get Free Consultation</span>
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
                className="executive-btn-secondary px-8 py-4 text-sm font-medium flex items-center justify-center text-center"
              >
                Request a Quote
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
