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
      setScrolled(window.scrollY > 24);
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
          ? 'bg-[#02030f]/95 backdrop-blur-3xl border-b border-white/10 shadow-2xl py-3'
          : 'bg-[#02030f]/70 backdrop-blur-xl py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <a href="#hero" className="flex items-center gap-3 transition hover:opacity-90">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/15 to-violet-500/20 border border-cyan-400/20 shadow-lg shadow-cyan-500/10">
              <Layers className="h-5 w-5 text-cyan-300 stroke-[2.2]" />
              <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-cyan-400 animate-ping" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-base font-black tracking-tight text-white">LOGICSPHERE</span>
              <span className="text-[11px] uppercase tracking-[0.35em] text-slate-400">TECH STUDIO</span>
            </div>
          </a>

          <nav className="hidden lg:flex flex-wrap items-center gap-2 rounded-full bg-white/5 px-3 py-2 text-slate-300 shadow-inner border border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition hover:bg-white/10 hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-300 transition hover:bg-cyan-400/10"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 px-5 py-3 text-[12px] font-black uppercase tracking-[0.22em] text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:scale-[1.02]"
            >
              <Sparkles className="h-4 w-4 text-white" />
              Start Project
            </button>
          </div>

          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-300"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/20 bg-white/5 text-cyan-300"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="mt-4 rounded-3xl border border-white/10 bg-[#02030f]/95 p-5 shadow-2xl shadow-cyan-500/10 backdrop-blur-3xl">
            <div className="grid gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-200 transition hover:bg-cyan-400/10 hover:text-white"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="mt-5 w-full rounded-2xl bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 px-4 py-3 text-sm font-black uppercase tracking-[0.2em] text-slate-950 shadow-lg shadow-cyan-500/20"
            >
              Start Project
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
