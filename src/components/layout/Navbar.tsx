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

import { Logo } from '@/components/common/Logo';

interface NavbarProps {
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

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
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'top-4 max-w-6xl mx-auto px-6 py-2.5 bg-[#242b28]/85 backdrop-blur-xl border border-[#116466]/65 shadow-2xl shadow-black/40'
          : 'top-0 w-full px-8 py-5 bg-[#2C3531]/40 border-b border-[#116466]/20'
      }`}
    >
      <div className="flex items-center justify-between gap-6">
        {/* Brand/Logo */}
        <a href="#hero" className="transition-opacity hover:opacity-90">
          <Logo showText={true} />
        </a>

        {/* Floating Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5 bg-[#2C3531]/60 border border-[#116466]/30 px-3 py-1 font-mono">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onMouseEnter={() => setActiveLink(link.name)}
              onMouseLeave={() => setActiveLink('')}
              className="relative px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#D1E8E2]/85 hover:text-[#FFCB9A] transition-colors"
            >
              {link.name}
              {/* Sleek Underline Transition */}
              <span
                className={`absolute bottom-0 left-0 w-full h-[1px] bg-[#FFCB9A] origin-left transition-transform duration-300 ${
                  activeLink === link.name ? 'scale-x-100' : 'scale-x-0'
                }`}
              />
            </a>
          ))}
        </nav>

        {/* Actions (Sleek custom styles buttons) */}
        <div className="hidden sm:flex items-center gap-4 font-mono">
          {/* Active node signal indicator */}
          <div className="flex items-center gap-2 bg-[#242b28]/60 border border-[#116466]/40 px-3 py-1.5 text-[9px] tracking-widest text-[#D1E8E2]/60">
            <span className="w-1.5 h-1.5 bg-[#FFCB9A] rounded-full animate-ping" />
            <span>NODE_01</span>
          </div>

          <button
            onClick={toggleTheme}
            className="inline-flex h-9 w-9 items-center justify-center border border-[#116466]/60 bg-[#242b28]/85 text-[#D9B08C] hover:text-[#FFCB9A] transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          
          <button
            onClick={onOpenQuote}
            className="relative px-5 py-2.5 bg-[#116466]/80 hover:bg-[#116466] border border-[#FFCB9A] text-[#D1E8E2] text-[10px] font-semibold uppercase tracking-[0.2em] transition-all duration-300 overflow-hidden group"
          >
            {/* Absolute corner brackets for button */}
            <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-[#D1E8E2]" />
            <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-[#D1E8E2]" />
            
            <span className="flex items-center gap-1.5 relative z-10">
              <Sparkles className="h-3.5 w-3.5 text-[#FFCB9A]" />
              Start Project
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFCB9A]/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
          </button>
        </div>

        {/* Mobile Navigation Trigger */}
        <div className="flex sm:hidden items-center gap-3">
          <button
            onClick={toggleTheme}
            className="inline-flex h-9 w-9 items-center justify-center border border-[#116466]/65 bg-[#242b28]/85 text-[#D9B08C]"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex h-9 w-9 items-center justify-center border border-[#116466] bg-[#242b28]/85 text-[#D1E8E2]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      {mobileMenuOpen && (
        <div className="mt-4 border border-[#116466] bg-[#242b28]/95 p-6 shadow-2xl backdrop-blur-xl">
          <div className="grid gap-2 font-mono">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="border border-[#116466]/40 bg-[#2C3531]/40 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-200 hover:border-[#FFCB9A] transition-all"
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
            className="mt-6 w-full py-3 bg-[#116466] border border-[#FFCB9A] text-[#D1E8E2] text-xs font-semibold uppercase tracking-wider transition-all"
          >
            Start Project
          </button>
        </div>
      )}
    </header>
  );
};
