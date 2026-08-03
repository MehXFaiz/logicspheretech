'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';
import {
  Sun,
  Moon,
  Menu,
  X,
  Sparkles,
  Zap,
} from 'lucide-react';

import { Logo } from '@/components/common/Logo';

interface NavbarProps {
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHover, setActiveHover] = useState<string | null>(null);

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
  ];

  return (
    <header
      className={`fixed inset-x-3 sm:inset-x-6 z-50 transition-all duration-500 max-w-6xl mx-auto ${
        scrolled ? 'top-3 sm:top-4' : 'top-4 sm:top-6'
      }`}
    >
      {/* Outer glowing border wrapper */}
      <div className="relative rounded-2xl p-[1px] bg-gradient-to-r from-[#116466] via-[#FFCB9A]/40 to-[#D9B08C]/60 shadow-[0_10px_35px_rgba(17,100,102,0.25)] transition-all duration-500">
        <div className="rounded-[15px] bg-[#242b28]/90 backdrop-blur-2xl px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          
          {/* Brand Logo */}
          <a href="#hero" className="transition-transform duration-300 hover:scale-105 shrink-0">
            <Logo showText={true} />
          </a>

          {/* Floating Pill Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#2C3531]/80 border border-[#116466]/40 p-1.5 rounded-full font-mono shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onMouseEnter={() => setActiveHover(link.name)}
                onMouseLeave={() => setActiveHover(null)}
                className={`relative px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] transition-all duration-300 rounded-full ${
                  activeHover === link.name
                    ? 'text-[#2C3531] font-bold'
                    : 'text-[#D1E8E2]/85 hover:text-[#FFCB9A]'
                }`}
              >
                {activeHover === link.name && (
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FFCB9A] to-[#D9B08C] shadow-md transition-all duration-300 -z-0" />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden sm:flex items-center gap-3 font-mono">
            {/* Live Node Signal Indicator */}
            <div className="hidden md:flex items-center gap-2 bg-[#2C3531]/70 border border-[#116466]/50 px-3 py-1.5 rounded-full text-[9px] font-semibold tracking-widest text-[#D1E8E2]">
              <span className="w-2 h-2 bg-[#FFCB9A] rounded-full animate-ping" />
              <Zap className="w-3 h-3 text-[#116466]" />
              <span>NODE_01 • 0.04ms</span>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[#116466]/60 bg-[#2C3531]/80 text-[#D9B08C] hover:text-[#FFCB9A] hover:border-[#FFCB9A] transition-all duration-300 hover:rotate-12"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            {/* Start Project CTA Button */}
            <button
              onClick={onOpenQuote}
              className="relative px-5 py-2.5 bg-gradient-to-r from-[#116466] to-[#116466]/90 hover:from-[#FFCB9A] hover:to-[#D9B08C] hover:text-[#2C3531] text-[#D1E8E2] text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 rounded-xl border border-[#FFCB9A]/60 shadow-lg shadow-[#116466]/30 overflow-hidden group"
            >
              {/* Corner brackets */}
              <span className="absolute top-1 left-1 w-1 h-1 border-t border-l border-[#D1E8E2]" />
              <span className="absolute bottom-1 right-1 w-1 h-1 border-b border-r border-[#D1E8E2]" />

              <span className="flex items-center gap-1.5 relative z-10">
                <Sparkles className="h-3.5 w-3.5 text-[#FFCB9A] group-hover:text-[#2C3531] transition-colors" />
                Start Project
              </span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[#116466]/60 bg-[#2C3531] text-[#D9B08C]"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[#116466] bg-[#2C3531] text-[#D1E8E2]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Navigation */}
        {mobileMenuOpen && (
          <div className="mt-2 border border-[#116466]/60 bg-[#242b28]/95 p-5 rounded-2xl shadow-2xl backdrop-blur-xl max-h-[80vh] overflow-y-auto">
            <div className="grid gap-2 font-mono">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="border border-[#116466]/40 bg-[#2C3531]/60 px-4 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider text-slate-200 hover:border-[#FFCB9A] hover:text-[#FFCB9A] transition-all"
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
              className="mt-4 w-full py-3 bg-gradient-to-r from-[#FFCB9A] via-[#116466] to-[#D9B08C] text-slate-950 rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Start Project</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
