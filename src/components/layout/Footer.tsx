'use client';

import React from 'react';
import { Logo } from '@/components/common/Logo';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '@/components/common/BrandIcons';
import {
  Mail,
  Phone,
  MapPin,
  ArrowUp,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F5F5F7] dark:bg-[#111111] border-t border-black/5 dark:border-white/10 text-[#1D1D1F] dark:text-white font-body relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 relative z-10 font-body">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-black/5 dark:border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-6">
            <Logo showText={true} />
            <p className="text-sm text-[#86868B] dark:text-[#A1A1AA] leading-relaxed">
              Logic Sphere Technology builds intelligent, scalable, and secure digital products—from custom websites and mobile applications to ERP platforms, CRM systems, and AI automation.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white dark:bg-[#1C1C1E] border border-black/5 dark:border-white/10 flex items-center justify-center text-[#86868B] dark:text-[#A1A1AA] hover:text-[#0071E3] transition-colors shadow-sm"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white dark:bg-[#1C1C1E] border border-black/5 dark:border-white/10 flex items-center justify-center text-[#86868B] dark:text-[#A1A1AA] hover:text-[#0071E3] transition-colors shadow-sm"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white dark:bg-[#1C1C1E] border border-black/5 dark:border-white/10 flex items-center justify-center text-[#86868B] dark:text-[#A1A1AA] hover:text-[#0071E3] transition-colors shadow-sm"
                aria-label="Twitter"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4 font-body">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-[#0071E3]">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm text-[#86868B] dark:text-[#A1A1AA]">
              <li>
                <a href="#services" className="hover:text-[#0071E3] transition-colors">Services</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#0071E3] transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#0071E3] transition-colors">Case Studies</a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#0071E3] transition-colors">Methodology</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#0071E3] transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div className="lg:col-span-3 space-y-4 font-body">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-[#0071E3]">
              Core Capabilities
            </h4>
            <ul className="space-y-3 text-sm text-[#86868B] dark:text-[#A1A1AA]">
              <li>Custom Software Engineering</li>
              <li>ERP & CRM Platforms</li>
              <li>AI Automation & Agents</li>
              <li>Mobile App Engineering</li>
              <li>Cloud Architecture & DevOps</li>
            </ul>
          </div>

          {/* Direct Desk */}
          <div className="lg:col-span-3 space-y-4 font-body">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-[#0071E3]">
              Executive Desk
            </h4>
            <div className="space-y-3 text-sm text-[#86868B] dark:text-[#A1A1AA]">
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#0071E3] shrink-0" />
                <a href="mailto:logicspheretech@gmail.com" className="hover:text-[#0071E3] font-mono text-xs">
                  logicspheretech@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#0071E3] shrink-0" />
                <a href="https://wa.me/923032567909" target="_blank" rel="noopener noreferrer" className="hover:text-[#0071E3] font-mono text-xs">
                  +92 3032567909
                </a>
              </p>
              <p className="flex items-start gap-2.5 text-xs leading-relaxed">
                <MapPin className="w-4 h-4 text-[#0071E3] shrink-0 mt-0.5" />
                <span>San Francisco Tech Atelier & Global Ops</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#86868B] dark:text-[#A1A1AA]">
          <p>© {new Date().getFullYear()} Logic Sphere Technology. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-white dark:bg-[#1C1C1E] border border-black/5 dark:border-white/10 hover:border-[#0071E3] text-[#0071E3] transition-all hover:-translate-y-1 flex items-center gap-2 font-mono shadow-sm"
            aria-label="Scroll to top"
          >
            <span>TOP</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
