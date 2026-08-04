'use client';

import React, { useState } from 'react';
import { Logo } from '@/components/common/Logo';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '@/components/common/BrandIcons';
import { Mail, Phone, MapPin, ArrowUp, Send, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.includes('@')) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#0B0D12] border-t border-[#B88A44]/15 text-[#F5F1EA] font-body relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 relative z-10">
        
        {/* Newsletter Row */}
        <div className="mb-16 pb-16 border-b border-[#B88A44]/12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B88A44] font-semibold block mb-1">
              STAY INSPIRED
            </span>
            <h3 className="text-2xl font-heading font-bold text-[#F5F1EA]">
              Subscribe to Tech Insights & Quarterly Scope Reports
            </h3>
          </div>

          <div className="lg:col-span-6">
            {subscribed ? (
              <div className="flex items-center gap-2 p-3 rounded-full bg-[#1B2330] border border-[#B88A44]/30 text-xs font-mono text-[#B88A44]">
                <Check className="w-4 h-4 text-[#B88A44]" />
                <span>Thank you! You have been subscribed to our executive dispatch.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-center gap-2">
                <input
                  type="email"
                  placeholder="Enter your work email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-5 py-3.5 rounded-full bg-[#12161F] border border-[#B88A44]/20 text-xs text-[#F5F1EA] placeholder-[#B9B4AA]/50 focus:outline-none focus:border-[#B88A44] transition-all"
                  required
                />
                <button
                  type="submit"
                  className="btn-gold-primary px-6 py-3.5 text-xs uppercase tracking-wider font-bold shrink-0 flex items-center gap-2"
                >
                  <span>Subscribe</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Links Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#B88A44]/12">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <Logo showText={true} />
            <p className="text-xs text-[#B9B4AA] leading-relaxed font-light">
              Logic Sphere Technology is a luxury software engineering house designing custom web applications, mobile platforms, enterprise ERPs, and bespoke AI copilots worldwide.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/logicspheretech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#1B2330] border border-[#B88A44]/20 flex items-center justify-center text-[#B9B4AA] hover:text-[#B88A44] hover:border-[#B88A44] transition-all"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#1B2330] border border-[#B88A44]/20 flex items-center justify-center text-[#B9B4AA] hover:text-[#B88A44] hover:border-[#B88A44] transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#1B2330] border border-[#B88A44]/20 flex items-center justify-center text-[#B9B4AA] hover:text-[#B88A44] hover:border-[#B88A44] transition-all"
                aria-label="Twitter"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-[#B88A44]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#B9B4AA] font-light">
              <li>
                <a href="#hero" className="hover:text-[#F5F1EA] transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F5F1EA] transition-colors">Services</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#F5F1EA] transition-colors">Portfolio</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#F5F1EA] transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#F5F1EA] transition-colors">Process Roadmap</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#F5F1EA] transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-[#B88A44]">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs text-[#B9B4AA] font-light">
              <li>Web Development & PWAs</li>
              <li>Mobile iOS & Android Apps</li>
              <li>ERP & CRM Systems</li>
              <li>Generative AI & RAG Engines</li>
              <li>UI/UX Design Systems</li>
              <li>Cloud & DevOps Automation</li>
            </ul>
          </div>

          {/* Executive Contact */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-[#B88A44]">
              Executive Desk
            </h4>
            <div className="space-y-3 text-xs text-[#B9B4AA] font-mono">
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#B88A44]" />
                <a href="mailto:logicspheretech@gmail.com" className="hover:text-[#F5F1EA]">
                  logicspheretech@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#B88A44]" />
                <a href="https://wa.me/923032567909" target="_blank" rel="noopener noreferrer" className="hover:text-[#F5F1EA]">
                  +92 3032567909
                </a>
              </p>
              <p className="flex items-start gap-2 text-xs font-body font-light">
                <MapPin className="w-3.5 h-3.5 text-[#B88A44] shrink-0 mt-0.5" />
                <span>San Francisco Tech Atelier & Global Ops</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#B9B4AA] font-mono">
          <p>© {new Date().getFullYear()} LOGIC SPHERE TECHNOLOGY. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="px-4 py-2 rounded-full bg-[#1B2330] border border-[#B88A44]/20 hover:border-[#B88A44] text-[#B88A44] transition-all flex items-center gap-2"
            aria-label="Scroll to top"
          >
            <span>TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
