'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle2, TrendingUp, Sparkles, ShieldCheck, Star } from 'lucide-react';

interface HeroSectionProps {
  onOpenQuote: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenQuote }) => {
  const stats = [
    { label: 'Projects Delivered', value: '120+' },
    { label: 'Client Satisfaction', value: '98%' },
    { label: 'Years of Experience', value: '5+' },
    { label: 'Expert Engineers', value: '30+' },
  ];

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#B88A44]/[0.08] rounded-full blur-[150px] pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Top Subtitle Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B2330] border border-[#B88A44]/25 w-fit mb-6 shadow-[0_4px_20px_rgba(184,138,68,0.12)]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#B88A44] animate-spin-slow" />
              <span className="text-[11px] uppercase tracking-[0.25em] font-mono text-[#B88A44] font-bold">
                WE BUILD DIGITAL EXCELLENCE
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-[#F5F1EA] leading-[1.1] tracking-tight mb-6"
            >
              Software Solutions <br />
              That <span className="font-serif-luxury italic font-normal text-gold-gradient font-serif">Drive Impact</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-[#B9B4AA] font-body max-w-xl font-light leading-relaxed mb-8"
            >
              We help businesses transform ideas into powerful digital products with strategy, design, and engineering excellence.
            </motion.p>

            {/* CTA Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <button
                onClick={onOpenQuote}
                className="btn-gold-primary px-8 py-4 text-xs uppercase tracking-wider font-bold flex items-center gap-3 group shadow-[0_10px_30px_rgba(184,138,68,0.25)]"
              >
                <span>Let&apos;s Build Together</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#portfolio"
                className="btn-gold-secondary px-8 py-4 text-xs uppercase tracking-wider font-semibold flex items-center gap-2"
              >
                <span>Explore Our Work</span>
                <Play className="w-3 h-3 text-[#B88A44] fill-[#B88A44]" />
              </a>
            </motion.div>

            {/* Client Social Proof Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="flex items-center gap-3 mb-10 p-3 rounded-2xl bg-[#1B2330]/80 border border-[#B88A44]/15 w-fit"
            >
              <div className="flex -space-x-2 overflow-hidden">
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-[#0B0D12]" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Client" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-[#0B0D12]" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Client" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-[#0B0D12]" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80" alt="Client" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-[#B88A44] text-[#B88A44]" />
                  ))}
                  <span className="text-xs font-mono font-bold text-[#F5F1EA] ml-1">4.9/5</span>
                </div>
                <span className="text-[10px] text-[#B9B4AA] font-mono">Trusted by 80+ Enterprise Clients</span>
              </div>
            </motion.div>

            {/* Hero Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#B88A44]/15"
            >
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-heading font-extrabold text-[#F5F1EA]">
                    {stat.value}
                  </span>
                  <span className="text-[11px] font-body text-[#B9B4AA] mt-1 font-light leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Hero Graphic — 3D Angled Laptop Dashboard Mockup with Orbital Glowing Rings */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            
            {/* Orbital Rings Background */}
            <div className="absolute w-[450px] sm:w-[550px] h-[450px] sm:h-[550px] pointer-events-none">
              <div className="orbit-ring w-full h-full border-[#B88A44]/20 animate-spin-slow" />
              <div className="orbit-ring w-[80%] h-[80%] top-[10%] left-[10%] border-[#B88A44]/15 animate-spin-slow style={{ animationDirection: 'reverse' }}" />
              <div className="orbit-ring w-[60%] h-[60%] top-[20%] left-[20%] border-[#B88A44]/30" />
            </div>

            {/* Floating Glass UI Panel 1: Top Left Analytics */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -top-4 -left-2 sm:left-4 z-30 luxury-card rounded-xl p-3.5 backdrop-blur-xl border border-[#B88A44]/30 shadow-2xl flex items-center gap-3 animate-float-slow"
            >
              <div className="w-9 h-9 rounded-lg bg-[#252D3D] flex items-center justify-center text-[#B88A44]">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-[#B9B4AA] uppercase tracking-wider font-mono">Analytics</span>
                <span className="text-sm font-bold text-[#F5F1EA]">98.6% Growth</span>
              </div>
            </motion.div>

            {/* Floating Glass UI Panel 2: Middle Left Projects */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute top-[42%] -left-6 sm:left-0 z-30 luxury-card rounded-xl p-3.5 backdrop-blur-xl border border-[#B88A44]/30 shadow-2xl flex items-center gap-3 animate-float-slow2"
            >
              <div className="w-9 h-9 rounded-lg bg-[#252D3D] flex items-center justify-center text-[#B88A44]">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-[#B9B4AA] uppercase tracking-wider font-mono">Project Status</span>
                <span className="text-sm font-bold text-[#F5F1EA]">45 Completed</span>
              </div>
            </motion.div>

            {/* Floating Glass UI Panel 3: Bottom Right AI Integration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="absolute -bottom-4 -right-2 sm:right-4 z-30 luxury-card rounded-xl p-3.5 backdrop-blur-xl border border-[#B88A44]/30 shadow-2xl flex items-center gap-3 animate-float-slow"
              style={{ animationDelay: '3s' }}
            >
              <div className="w-9 h-9 rounded-lg bg-[#252D3D] flex items-center justify-center text-[#B88A44]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-[#B9B4AA] uppercase tracking-wider font-mono">AI Integration</span>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#B88A44] animate-pulse" />
                  <span className="text-sm font-bold text-[#F5F1EA]">Active</span>
                </div>
              </div>
            </motion.div>

            {/* 3D Angled Laptop Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative z-20 w-full max-w-[540px] aspect-[16/10] rounded-2xl p-2 bg-[#12161F] border border-[#B88A44]/35 shadow-[0_30px_80px_rgba(0,0,0,0.85)] transform perspective-1000 rotate-y-[-6deg] rotate-x-[4deg] hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700 ease-out overflow-hidden"
            >
              {/* Laptop Screen Header */}
              <div className="w-full h-7 bg-[#1B2330] rounded-t-xl px-4 flex items-center justify-between border-b border-[#B88A44]/15">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
                </div>
                <div className="px-3 py-0.5 rounded-full bg-[#0B0D12] text-[9px] font-mono text-[#B9B4AA]">
                  logicspheretech.com/dashboard
                </div>
                <div className="w-4" />
              </div>

              {/* Laptop Display Content — High Resolution Dashboard Backdrop */}
              <div className="w-full h-[calc(100%-1.75rem)] bg-[#0B0D12] rounded-b-xl overflow-hidden relative flex flex-col justify-between">
                
                {/* Background Dashboard Image */}
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
                  alt="LogicSphere Software Dashboard"
                  fill
                  sizes="500px"
                  className="object-cover opacity-35"
                  priority
                />

                {/* Glass Layer Content */}
                <div className="relative z-10 p-4 h-full flex flex-col justify-between bg-gradient-to-t from-[#0B0D12] via-[#0B0D12]/80 to-transparent">
                  
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between border-b border-[#1B2330]/80 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-[#B88A44]/20 border border-[#B88A44] flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-[#B88A44]" />
                      </div>
                      <span className="text-xs font-bold text-[#F5F1EA]">LogicSphere OS</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="w-12 h-2.5 rounded bg-[#1B2330]" />
                      <span className="w-8 h-2.5 rounded bg-[#252D3D]" />
                    </div>
                  </div>

                  {/* Dashboard Center Globe Graphic & Headlines */}
                  <div className="my-auto flex flex-col items-center justify-center text-center py-2 relative">
                    <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#B88A44] relative z-10 mb-1 font-bold">
                      ENTERPRISE CORE ENGINE
                    </span>
                    <h3 className="text-lg font-heading font-extrabold text-[#F5F1EA] relative z-10 max-w-xs leading-tight">
                      Smart Solutions For Modern Businesses
                    </h3>
                  </div>

                  {/* Dashboard Bottom Cards */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="p-2 rounded bg-[#1B2330]/90 border border-[#B88A44]/20 backdrop-blur-md flex flex-col">
                      <span className="text-[8px] text-[#B9B4AA] font-mono">Active Users</span>
                      <span className="text-xs font-bold text-[#F5F1EA]">142.8K</span>
                    </div>
                    <div className="p-2 rounded bg-[#1B2330]/90 border border-[#B88A44]/20 backdrop-blur-md flex flex-col">
                      <span className="text-[8px] text-[#B9B4AA] font-mono">API Latency</span>
                      <span className="text-xs font-bold text-[#B88A44]">0.04ms</span>
                    </div>
                    <div className="p-2 rounded bg-[#1B2330]/90 border border-[#B88A44]/20 backdrop-blur-md flex flex-col">
                      <span className="text-[8px] text-[#B9B4AA] font-mono">Uptime</span>
                      <span className="text-xs font-bold text-[#F5F1EA]">99.99%</span>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
