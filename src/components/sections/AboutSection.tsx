'use client';

import React from 'react';
import Image from 'next/image';
import { CheckCircle2, Sparkles, Award, Shield } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-28 bg-[#2C3531] relative overflow-hidden border-b border-[#116466]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Architecture Blueprint & Executive Stats */}
          <div className="lg:col-span-6 space-y-6 relative">
            {/* Visual Team Image Card */}
            <div className="relative rounded-none overflow-hidden border border-[#116466] bg-[#242b28] shadow-2xl aspect-[16/10] group">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="LogicSphere Engineering Atelier"
                fill
                sizes="(max-w-768px) 100vw, 50vw"
                className="object-cover opacity-85 group-hover:scale-[1.02] group-hover:opacity-100 transition-all duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#242b28]/95 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] text-[#D1E8E2] bg-[#242b28]/95 px-3 py-1.5 border border-[#116466]/60">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#116466] animate-pulse" />
                  LOGICSPHERE CO-DEVELOPMENT
                </span>
                <span className="text-[#FFCB9A]">ATELIER SUITE 4A</span>
              </div>
            </div>

            <div className="relative rounded-none overflow-hidden border border-[#116466] bg-[#242b28] shadow-xl p-8">
              {/* Corner tech details */}
              <span className="absolute top-0 right-0 w-2 h-2 bg-[#FFCB9A]" />
              <span className="absolute bottom-0 left-0 w-2 h-2 bg-[#D9B08C]" />

              <div className="flex items-center justify-between pb-6 border-b border-[#116466]/40">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-none bg-[#116466] border border-[#FFCB9A] flex items-center justify-center text-[#D1E8E2] font-semibold">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#D1E8E2] text-sm tracking-wide">LOGICSPHERE TECH</h4>
                    <span className="text-[10px] text-[#D9B08C] font-mono tracking-widest block">
                      EXECUTIVE HQ
                    </span>
                  </div>
                </div>
                <span className="px-3.5 py-1.5 rounded-none text-[10px] font-mono bg-[#116466]/20 text-[#D1E8E2] border border-[#116466] uppercase tracking-wider">
                  SOC2 VERIFIED
                </span>
              </div>

              {/* Engineering Manifesto Grid */}
              <div className="grid grid-cols-2 gap-4 my-6 font-mono">
                <div className="p-4 rounded-none bg-[#2C3531]/40 border border-[#116466]/30 hover:border-[#FFCB9A] transition-colors space-y-1">
                  <span className="text-2xl sm:text-3xl font-bold text-[#D1E8E2]">55+</span>
                  <p className="text-[10px] text-slate-300">
                    Senior Architects & AI Developers
                  </p>
                </div>
                <div className="p-4 rounded-none bg-[#2C3531]/40 border border-[#116466]/30 hover:border-[#FFCB9A] transition-colors space-y-1">
                  <span className="text-2xl sm:text-3xl font-bold text-[#D9B08C]">100%</span>
                  <p className="text-[10px] text-slate-300">
                    Clean Documented Source Ownership
                  </p>
                </div>
                <div className="p-4 rounded-none bg-[#2C3531]/40 border border-[#116466]/30 hover:border-[#FFCB9A] transition-colors space-y-1">
                  <span className="text-2xl sm:text-3xl font-bold text-[#FFCB9A]">0.04ms</span>
                  <p className="text-[10px] text-slate-300">
                    Global Edge Response & Zero Latency
                  </p>
                </div>
                <div className="p-4 rounded-none bg-[#2C3531]/40 border border-[#116466]/30 hover:border-[#FFCB9A] transition-colors space-y-1">
                  <span className="text-2xl sm:text-3xl font-bold text-[#D1E8E2]">24/7</span>
                  <p className="text-[10px] text-slate-300">
                    Mission-Critical Support SLA
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-none bg-[#2C3531]/60 border border-[#116466]/40 flex items-center justify-between text-[11px] font-mono text-slate-200">
                <span>
                  ISO 27001 & SOC2 Certified Engineering
                </span>
                <Award className="w-5 h-5 text-[#FFCB9A] shrink-0" />
              </div>
            </div>
          </div>

          {/* Right Column: Executive About Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none text-[10px] font-mono uppercase tracking-widest bg-[#116466]/20 text-[#D9B08C] border border-[#116466]">
              <Sparkles className="w-3.5 h-3.5 animate-spin" /> WHO WE ARE
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#D1E8E2] tracking-wide leading-tight">
              Architecting Digital Products With{' '}
              <span className="text-gradient-primary font-bold">
                Silicon Valley Precision
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-mono">
              <strong className="text-[#D1E8E2] font-semibold">LOGICSPHERE TECH</strong> is a premier software engineering atelier providing bespoke end-to-end development services. Our firm unites seasoned systems architects, AI specialists, full-stack engineers, and UI/UX designers under one private roof.
            </p>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
              We reject bloated methodologies. Instead, we work in high-velocity agile sprints, delivering modular, fully documented Next.js 16 edge applications, scalable cloud microservices, and autonomous vector database integrations that scale to millions of requests.
            </p>

            <div className="space-y-3.5 pt-4">
              {[
                "Direct collaboration with dedicated Principal Engineers (No middle layers)",
                "Automated CI/CD testing, strict TypeScript validation, and penetration audits",
                "Immediate 100% intellectual property transfer with full DevOps documentation"
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-none bg-[#116466]/25 border border-[#116466] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-[#FFCB9A]" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-[#D1E8E2] font-mono">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
