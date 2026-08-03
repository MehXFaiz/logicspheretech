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
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 pt-20 pb-12 transition-colors duration-300 font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-slate-200 dark:border-slate-800">
          {/* Col 1: Brand Info & Mission */}
          <div className="lg:col-span-2 space-y-6">
            <a href="#hero" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#0F766E] text-white flex items-center justify-center shadow-md">
                <Shield className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white font-heading">
                LOGICSPHERE <span className="text-[#0F766E] dark:text-[#2DD4BF]">TECH</span>
              </span>
            </a>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-sm">
              We design and engineer high-speed websites, mobile applications, custom software, autonomous RAG AI copilots, and mission-critical cloud platforms for enterprises worldwide.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Twitter / X"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-5 font-heading">
              Capabilities
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#services" className="hover:text-[#0F766E] dark:hover:text-[#2DD4BF] transition-colors">
                  Web & Cloud Apps
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#0F766E] dark:hover:text-[#2DD4BF] transition-colors">
                  Mobile App Engineering
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#0F766E] dark:hover:text-[#2DD4BF] transition-colors">
                  AI & RAG Solutions
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#0F766E] dark:hover:text-[#2DD4BF] transition-colors">
                  ERP & CRM Systems
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#0F766E] dark:hover:text-[#2DD4BF] transition-colors">
                  UI/UX & Product Architecture
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h4 className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-5 font-heading">
              Atelier Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#about" className="hover:text-[#0F766E] dark:hover:text-[#2DD4BF] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#0F766E] dark:hover:text-[#2DD4BF] transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#0F766E] dark:hover:text-[#2DD4BF] transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#0F766E] dark:hover:text-[#2DD4BF] transition-colors">
                  Contact HQ
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div>
            <h4 className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-5 font-heading">
              Engineering Dispatch
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              Subscribe to our monthly dispatch on Next.js 16, enterprise AI architectures, and sub-millisecond edge scalability.
            </p>

            {subscribed ? (
              <div className="p-3.5 rounded-xl bg-[#0F766E]/10 border border-[#0F766E]/30 text-[#0F766E] dark:text-[#2DD4BF] text-xs flex items-center gap-2">
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
                    className="w-full px-3.5 py-2.5 rounded-l-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 text-xs focus:outline-none focus:border-[#0F766E]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 rounded-r-full bg-[#0F766E] hover:bg-[#0D9488] text-white text-xs font-medium"
                    aria-label="Subscribe to newsletter"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}

            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2 text-xs text-slate-500">
              <ShieldCheck className="w-4 h-4 text-[#0F766E]" />
              <span>SOC2 Compliant Architecture</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>
            © {new Date().getFullYear()} <strong className="text-slate-900 dark:text-white font-heading">LOGICSPHERE TECH CORP</strong>. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#0F766E] dark:hover:text-[#2DD4BF] cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-[#0F766E] dark:hover:text-[#2DD4BF] cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-[#0F766E] dark:hover:text-[#2DD4BF] cursor-pointer transition-colors">Security SLA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
