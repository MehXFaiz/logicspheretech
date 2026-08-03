'use client';

import React from 'react';
import Image from 'next/image';
import { CheckCircle2, Sparkles, Award, Shield } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-28 bg-[#16181D] relative overflow-hidden transition-colors duration-300 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-body">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Architecture Blueprint & Executive Stats */}
          <div className="lg:col-span-6 space-y-6 relative">
            {/* Visual Team Image Card */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0E0E10] shadow-sm aspect-[16/10] group">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="LogicSphere Engineering Atelier"
                fill
                sizes="(max-w-768px) 100vw, 50vw"
                className="object-cover opacity-80 group-hover:scale-[1.02] transition-all duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E10] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-xs text-[#F4F4F5] bg-[#1F2229]/90 px-3.5 py-2 rounded-xl border border-white/10 shadow-sm">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#C6A15B] animate-pulse" />
                  LOGICSPHERE CO-DEVELOPMENT
                </span>
                <span className="text-[#C6A15B] font-bold">ATELIER SUITE 4A</span>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#1F2229] shadow-2xl p-8">
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#2A2E36] text-[#F4F4F5] flex items-center justify-center font-semibold shadow-sm border border-white/10">
                    <Shield className="w-5 h-5 text-[#C6A15B]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#F4F4F5] text-sm font-heading">LOGICSPHERE TECH</h4>
                    <span className="text-[10px] text-[#C6A15B] font-mono tracking-wider block font-semibold">
                      EXECUTIVE HQ
                    </span>
                  </div>
                </div>
                <span className="px-3.5 py-1.5 rounded-full text-xs font-mono bg-[#2A2E36] text-[#C6A15B] border border-[#C6A15B]/30 uppercase font-semibold">
                  SOC2 VERIFIED
                </span>
              </div>

              {/* Engineering Manifesto Grid */}
              <div className="grid grid-cols-2 gap-4 my-6 font-body">
                <div className="p-4 rounded-xl bg-[#0E0E10] border border-white/10 space-y-1">
                  <span className="text-2xl sm:text-3xl font-bold font-heading text-[#F4F4F5]">55+</span>
                  <p className="text-xs text-[#A1A1AA]">
                    Senior Architects & AI Developers
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#0E0E10] border border-white/10 space-y-1">
                  <span className="text-2xl sm:text-3xl font-bold font-heading text-[#C6A15B]">100%</span>
                  <p className="text-xs text-[#A1A1AA]">
                    Clean Documented Source Ownership
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#0E0E10] border border-white/10 space-y-1">
                  <span className="text-2xl sm:text-3xl font-bold font-heading text-[#C6A15B]">0.04ms</span>
                  <p className="text-xs text-[#A1A1AA]">
                    Global Edge Response & Zero Latency
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#0E0E10] border border-white/10 space-y-1">
                  <span className="text-2xl sm:text-3xl font-bold font-heading text-[#F4F4F5]">24/7</span>
                  <p className="text-xs text-[#A1A1AA]">
                    Mission-Critical Support SLA
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0E0E10] border border-white/10 flex items-center justify-between text-xs text-[#F4F4F5] font-medium">
                <span>
                  ISO 27001 & SOC2 Certified Engineering
                </span>
                <Award className="w-5 h-5 text-[#C6A15B] shrink-0" />
              </div>
            </div>
          </div>

          {/* Right Column: Executive About Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#1F2229] border border-white/10 text-[#C6A15B]">
              <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" /> WHO WE ARE
            </span>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F4F4F5] tracking-tight leading-tight">
              Architecting Digital Products With{' '}
              <span className="text-[#C6A15B]">
                Uncompromising Quality
              </span>
            </h2>

            <p className="text-[#A1A1AA] text-base sm:text-lg leading-relaxed">
              LOGICSPHERE TECH is an elite software studio. We specialize in building enterprise web applications, high-concurrency cloud systems, and bespoke AI RAG pipelines with 100% intellectual property handover.
            </p>

            <div className="space-y-3 pt-2 font-body">
              {[
                "Direct collaboration with dedicated Principal Engineers (No middle layers)",
                "Automated CI/CD testing, strict TypeScript validation, and penetration audits",
                "Immediate 100% intellectual property transfer with full DevOps documentation"
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-3 text-[#F4F4F5] text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#C6A15B] shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
