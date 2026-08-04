'use client';

import React from 'react';
import Image from 'next/image';
import { CheckCircle2, Sparkles, Award, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-[#0B0D12] relative overflow-hidden font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Visual */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#B88A44]/20 bg-[#12161F] shadow-2xl aspect-[16/10] group">
              <Image
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
                alt="LogicSphere Executive Software Atelier"
                fill
                sizes="(max-w-768px) 100vw, 50vw"
                className="object-cover opacity-85 group-hover:scale-[1.02] transition-all duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D12] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-xs text-[#F5F1EA] bg-[#1B2330]/90 px-4 py-2.5 rounded-xl border border-[#B88A44]/30 backdrop-blur-md">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B88A44] animate-pulse" />
                  LOGICSPHERE CO-DEVELOPMENT
                </span>
                <span className="text-[#B88A44] font-bold">ATELIER SUITE 4A</span>
              </div>
            </div>

            <div className="luxury-card rounded-2xl border border-[#B88A44]/20 bg-[#1B2330] p-6 shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-[#B88A44]/12">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#252D3D] text-[#B88A44] flex items-center justify-center border border-[#B88A44]/20">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#F5F1EA] text-sm font-heading">LOGICSPHERE TECH</h4>
                    <span className="text-[10px] text-[#B88A44] font-mono tracking-wider block font-bold">
                      EXECUTIVE HQ
                    </span>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-[10px] font-mono bg-[#252D3D] text-[#B88A44] border border-[#B88A44]/30 uppercase font-bold">
                  SOC2 VERIFIED
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 my-4 font-body">
                <div className="p-3.5 rounded-xl bg-[#0B0D12] border border-[#B88A44]/12 space-y-1">
                  <span className="text-2xl font-bold font-heading text-[#F5F1EA]">30+</span>
                  <p className="text-[11px] text-[#B9B4AA] font-light">Senior Engineers</p>
                </div>
                <div className="p-3.5 rounded-xl bg-[#0B0D12] border border-[#B88A44]/12 space-y-1">
                  <span className="text-2xl font-bold font-heading text-[#B88A44]">100%</span>
                  <p className="text-[11px] text-[#B9B4AA] font-light">Clean IP Handover</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-[#1B2330] text-[#B88A44] border border-[#B88A44]/20">
              <Sparkles className="w-3.5 h-3.5 text-[#B88A44]" /> WHO WE ARE
            </span>

            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#F5F1EA] tracking-tight leading-tight">
              Architecting Products With <br />
              <span className="font-serif-luxury italic text-gold-gradient font-serif font-normal">Uncompromising Quality</span>
            </h2>

            <p className="text-[#B9B4AA] text-base font-light leading-relaxed">
              LOGICSPHERE TECH is an elite software house. We build custom web applications, mobile platforms, enterprise ERPs, and bespoke AI copilots with 100% IP handover.
            </p>

            <div className="space-y-3 pt-2">
              {[
                "Direct collaboration with senior systems architects",
                "Automated CI/CD testing and penetration audits",
                "100% intellectual property transfer with full documentation"
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-3 text-[#F5F1EA] text-xs font-light">
                  <CheckCircle2 className="w-4 h-4 text-[#B88A44] shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
