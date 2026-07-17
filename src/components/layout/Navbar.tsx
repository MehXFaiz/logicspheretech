'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';
import {
  Sun,
  Moon,
  Menu,
  X,
  Layers,
  Sparkles,
  ChevronRight,
  Terminal,
  Zap,
} from 'lucide-react';

interface NavbarProps {
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Capabilities', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Case Studies', href: '#portfolio' },
    { name: 'Methodology', href: '#process' },
    { name: 'Tech Matrix', href: '#technologies' },
    { name: 'Retainers', href: '#pricing' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#050816]/85 backdrop-blur-2xl border-b border-white/[0.08] shadow-2xl py-3.5'
          : 'bg-[#050816]/50 backdrop-blur-xl border-b border-white/[0.04] py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand - Modern Geometric Identity */}
          <a href="#hero" className="flex items-center gap-3.5 group shrink-0">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-[#06b6d4]/20 via-[#8b5cf6]/20 to-transparent border border-[#06b6d4]/40 shadow-lg shadow-[#06b6d4]/15 group-hover:scale-105 transition-transform">
              <Layers className="w-5 h-5 text-[#06b6d4] stroke-[2.5]" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] rounded-full border-2 border-[#050816] animate-pulse" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg font-black tracking-tight text-white">
                  LOGICSPHERE
                </span>
                <span className="text-xs font-black px-1.5 py-0.5 rounded bg-gradient-to-r from-[#06b6d4]/15 to-[#8b5cf6]/15 text-[#06b6d4] border border-[#06b6d4]/30 tracking-widest">
                  TECH
                </span>
              </div>
              <div className="flex items-center gap-2 text-[10px] text-slate-400 tracking-wider">
                <span className="flex items-center gap-1 text-emerald-400 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  GLOBAL HQ
                </span>
                <span className="opacity-40">|</span>
                <span>INNOVATION</span>
              </div>
            </div>
          </a>

          {/* Center Floating Glass Navigation Tray */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] backdrop-blur-3xl px-3 py-1.5 rounded-full border border-white/[0.08] shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-slate-300 hover:text-white hover:bg-white/[0.06] hover:border hover:border-[#06b6d4]/30 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Executive Controls & CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Edge Uptime Indicator */}
            <div className="hidden xl:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#080C14] border border-white/[0.08] text-slate-300 text-[11px] font-mono font-bold">
              <Zap className="w-3.5 h-3.5 text-[#06b6d4]" />
              <span>TTFB &lt;15ms</span>
            </div>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-[#06b6d4]/20 text-slate-300 hover:text-[#06b6d4] transition-all border border-white/[0.08]"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Sleek Titanium-Sapphire Executive CTA Button */}
            <button
              onClick={onOpenQuote}
              className="relative group px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#06b6d4] via-[#8b5cf6] to-[#818CF8] hover:opacity-95 text-white text-xs sm:text-sm font-mono font-black tracking-wider uppercase shadow-lg shadow-[#06b6d4]/25 border border-white/20 transition-all duration-300 flex items-center gap-2 transform hover:scale-[1.03]"
            >
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>Initiate Retainer</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-white/[0.04] text-[#06b6d4] border border-white/[0.08]"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white/[0.04] text-[#06b6d4] border border-[#06b6d4]/30"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Panel */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 rounded-3xl bg-[#080C14]/95 border border-[#06b6d4]/40 p-6 backdrop-blur-3xl shadow-2xl space-y-3 animate-in slide-in-from-top-3 duration-200">
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-white/10 text-xs font-mono text-[#06b6d4]">
              <span className="flex items-center gap-1.5 font-bold">
                <Terminal className="w-3.5 h-3.5" /> ATELIER NAVIGATION
              </span>
              <span className="px-2 py-0.5 rounded bg-[#06b6d4]/15 text-[#06b6d4]">v16.4</span>
            </div>
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-sm font-mono font-bold text-slate-200 hover:text-[#06b6d4] hover:bg-[#06b6d4]/10 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pt-4 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#06b6d4] via-[#8b5cf6] to-[#818CF8] text-white font-mono font-black uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-xl shadow-[#06b6d4]/30"
              >
                <Sparkles className="w-4 h-4" />
                <span>Initiate Priority Retainer</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
