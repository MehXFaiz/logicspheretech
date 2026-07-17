'use client';

import React, { useState } from 'react';
import {
  Shield,
  Send,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '@/components/common/BrandIcons';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#02030f] border-t border-white/10 text-slate-400 pt-20 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
          {/* Col 1: Brand Info & Mission */}
          <div className="lg:col-span-2 space-y-6">
            <a href="#hero" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-400 via-violet-500 to-amber-400 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                <Shield className="w-5 h-5 text-slate-950 stroke-[2.5]" />
              </div>
              <span className="text-xl font-black tracking-tight text-white font-mono">
                LOGICSPHERE <span className="text-gradient-primary">TECH</span>
              </span>
            </a>
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              We design and engineer high-speed websites, mobile applications, custom software, autonomous RAG AI copilots, and mission-critical cloud platforms for enterprises worldwide.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-[#D4AF37]/20 text-slate-400 hover:text-[#D4AF37] border border-white/10 transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-[#D4AF37]/20 text-slate-400 hover:text-[#D4AF37] border border-white/10 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-[#D4AF37]/20 text-slate-400 hover:text-[#D4AF37] border border-white/10 transition-colors"
                aria-label="Twitter / X"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-5">
              Capabilities
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#services" className="hover:text-[#D4AF37] transition-colors">
                  Web & Cloud Apps
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D4AF37] transition-colors">
                  Mobile App Engineering
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D4AF37] transition-colors">
                  AI & RAG Solutions
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D4AF37] transition-colors">
                  ERP & CRM Systems
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D4AF37] transition-colors">
                  UI/UX & Product Architecture
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-5">
              Atelier Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#about" className="hover:text-[#D4AF37] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#D4AF37] transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#D4AF37] transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[#D4AF37] transition-colors">
                  Retainer Plans
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#D4AF37] transition-colors">
                  Contact HQ
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-5">
              Engineering Dispatch
            </h4>
            <p className="text-xs text-slate-300 mb-4">
              Subscribe to our monthly dispatch on Next.js 16, enterprise AI architectures, and sub-millisecond edge scalability.
            </p>

            {subscribed ? (
              <div className="p-3.5 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/35 text-[#D4AF37] text-xs flex items-center gap-2 font-mono">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Subscribed to Engineering Dispatch!</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="email"
                    required
                    placeholder="architect@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-l-xl bg-[#0B0E14] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#D4AF37] font-mono"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 rounded-r-xl bg-gradient-to-r from-[#9E822F] via-[#D4AF37] to-[#E5C158] text-slate-950 text-xs font-black hover:opacity-95"
                    aria-label="Subscribe to newsletter"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-slate-400 font-mono">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>SOC2 Compliant Architecture</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <p>
            © {new Date().getFullYear()} <strong className="text-white">LOGICSPHERE TECH CORP</strong>. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span className="hover:text-white cursor-pointer">Security SLA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
