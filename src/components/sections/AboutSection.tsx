'use client';

import React from 'react';
import { CheckCircle2, Sparkles, Award, Shield } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-28 bg-[#050816] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Architecture Blueprint & Executive Stats */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#06b6d4]/35 bg-[#0f172a] shadow-2xl p-8 shadow-[#06b6d4]/15">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-[#06b6d4]/10 rounded-full blur-3xl pointer-events-none animate-pulse" />

              <div className="flex items-center justify-between pb-6 border-b border-[#D1E8E2]/10">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#06b6d4] via-[#06b6d4] to-[#f59e0b] flex items-center justify-center text-slate-950 font-bold shadow-md">
                    <Shield className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#D1E8E2] text-sm tracking-wide">LOGICSPHERE TECH</h4>
                    <span className="text-[10px] text-[#06b6d4] font-mono font-bold tracking-widest">
                      EXECUTIVE ENGINEERING HQ
                    </span>
                  </div>
                </div>
                <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-[#06b6d4]/15 text-[#06b6d4] border border-[#06b6d4]/40 shadow-inner">
                  SOC2 VERIFIED ATELIER
                </span>
              </div>

              {/* Engineering Manifesto Grid */}
              <div className="grid grid-cols-2 gap-4 my-6">
                <div className="p-4 rounded-2xl bg-[#D1E8E2]/[0.03] border border-[#D1E8E2]/10 hover:border-[#06b6d4]/40 transition-colors space-y-1">
                  <span className="text-2xl sm:text-3xl font-black text-[#D1E8E2]">55+</span>
                  <p className="text-xs text-slate-300 font-medium">
                    Senior Principal Architects & AI Devs
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#D1E8E2]/[0.03] border border-[#D1E8E2]/10 hover:border-[#06b6d4]/40 transition-colors space-y-1">
                  <span className="text-2xl sm:text-3xl font-black text-[#06b6d4]">100%</span>
                  <p className="text-xs text-slate-300 font-medium">
                    Clean Documented Source Code Ownership
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#D1E8E2]/[0.03] border border-[#D1E8E2]/10 hover:border-[#06b6d4]/40 transition-colors space-y-1">
                  <span className="text-2xl sm:text-3xl font-black text-[#f59e0b]">0.04ms</span>
                  <p className="text-xs text-slate-300 font-medium">
                    Global Edge Response & Zero Latency
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#D1E8E2]/[0.03] border border-[#D1E8E2]/10 hover:border-[#06b6d4]/40 transition-colors space-y-1">
                  <span className="text-2xl sm:text-3xl font-black text-[#D1E8E2]">24 / 7</span>
                  <p className="text-xs text-slate-300 font-medium">
                    Continuous Mission-Critical SLA Desk
                  </p>
                </div>
              </div>

              <div className="p-4.5 rounded-2xl bg-gradient-to-r from-[#06b6d4]/20 via-[#06b6d4]/20 to-[#f59e0b]/20 border border-[#06b6d4]/35 flex items-center justify-between text-xs">
                <span className="text-slate-200 font-semibold tracking-wide">
                  ISO 27001 & SOC2 Type II Certified Engineering Practices
                </span>
                <Award className="w-5 h-5 text-[#06b6d4] shrink-0" />
              </div>
            </div>
          </div>

          {/* Right Column: Executive About Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-widest bg-[#06b6d4]/10 text-[#06b6d4] border border-[#06b6d4]/35">
              <Sparkles className="w-3.5 h-3.5 animate-spin" /> WHO WE ARE
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#D1E8E2] tracking-tight leading-tight">
              Architecting Digital Products With{' '}
              <span className="text-gradient-primary">
                Silicon Valley Precision
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              <strong className="text-[#D1E8E2] font-bold">LOGICSPHERE TECH</strong> is a premier software engineering atelier providing bespoke end-to-end development services. Our firm unites seasoned systems architects, AI scientists, full-stack engineers, and UI/UX masters under one private roof.
            </p>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              We reject bloated methodologies and unreliable outsourcing. Instead, we work in high-velocity agile sprints, delivering modular, fully documented Next.js 16 edge applications, scalable cloud microservices, and autonomous RAG AI copilots that scale to millions of requests.
            </p>

            <div className="space-y-3.5 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#06b6d4]/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-[#06b6d4]" />
                </div>
                <span className="text-sm font-bold text-[#D1E8E2]">
                  Direct collaboration with dedicated Principal Engineers (No middle layers)
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#06b6d4]/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-[#06b6d4]" />
                </div>
                <span className="text-sm font-bold text-[#D1E8E2]">
                  Automated CI/CD testing, strict TypeScript validation, and penetration audits
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#06b6d4]/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-[#06b6d4]" />
                </div>
                <span className="text-sm font-bold text-[#D1E8E2]">
                  Immediate 100% intellectual property transfer with full DevOps documentation
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
