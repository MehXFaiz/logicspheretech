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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-[#242b28]/95 border-[#116466] py-3 shadow-lg'
          : 'bg-[#2C3531]/90 border-[#116466]/40 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <a href="#hero" className="flex items-center gap-3 transition hover:opacity-90">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-none bg-[#242b28] border border-[#116466] shadow-[0_0_15px_rgba(17,100,102,0.2)]">
              <Layers className="h-5 w-5 text-[#D1E8E2] stroke-[2]" />
              <span className="absolute -top-[1px] -right-[1px] h-2 w-2 bg-[#FFCB9A]" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-base font-bold tracking-widest text-[#D1E8E2]">LOGICSPHERE</span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#D9B08C]">TECH STUDIO</span>
            </div>
          </a>

          <nav className="hidden lg:flex flex-wrap items-center gap-1 rounded-none bg-[#242b28] px-2 py-1 text-slate-300 border border-[#116466]/60">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="rounded-none px-4 py-2 text-[11px] font-medium uppercase tracking-[0.2em] transition hover:bg-[#116466]/30 hover:text-[#D1E8E2]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="inline-flex h-11 w-11 items-center justify-center rounded-none border border-[#116466]/60 bg-[#242b28] text-[#D9B08C] transition hover:bg-[#116466]/20"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 rounded-none bg-[#116466] border border-[#FFCB9A] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D1E8E2] transition hover:bg-[#D9B08C] hover:text-[#2C3531] hover:border-[#116466]"
            >
              <Sparkles className="h-4 w-4 text-[#FFCB9A]" />
              Start Project
            </button>
          </div>

          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="inline-flex h-11 w-11 items-center justify-center rounded-none border border-[#116466]/60 bg-[#242b28] text-[#D9B08C]"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-none border border-[#116466] bg-[#242b28] text-[#D1E8E2]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="mt-4 rounded-none border border-[#116466] bg-[#242b28] p-5 shadow-xl">
            <div className="grid gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-none border border-[#116466]/40 bg-[#2C3531] px-4 py-3 text-xs font-medium uppercase tracking-[0.18em] text-slate-200 transition hover:bg-[#116466]/20 hover:text-[#D1E8E2]"
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
              className="mt-5 w-full rounded-none bg-[#116466] border border-[#FFCB9A] px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#D1E8E2] transition hover:bg-[#D9B08C] hover:text-[#2C3531]"
            >
              Start Project
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
