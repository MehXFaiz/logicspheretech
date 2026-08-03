'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';
import {
  Sun,
  Moon,
  Menu,
  X,
  ArrowUpRight,
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
    { name: 'Tech Stack', href: '#technologies' },
  ];

  return (
    <header
      className={`fixed inset-x-4 sm:inset-x-6 z-50 transition-all duration-300 max-w-7xl mx-auto ${
        scrolled ? 'top-4' : 'top-6'
      }`}
    >
      <div className="rounded-full bg-white/85 dark:bg-slate-900/85 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 shadow-sm shadow-slate-900/5 px-6 py-3 flex items-center justify-between gap-4 transition-all duration-300">
        
        {/* Brand Logo */}
        <a href="#hero" className="transition-opacity hover:opacity-90 shrink-0">
          <Logo showText={true} />
        </a>

        {/* Minimal Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 font-body text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-600 dark:text-slate-300 hover:text-[#0F766E] dark:hover:text-[#14B8A6] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          {/* Primary CTA Button */}
          <button
            onClick={onOpenQuote}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0F766E] hover:bg-[#0D9488] text-white font-medium text-sm transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-[#0F766E]/20"
          >
            <span>Start Project</span>
            <ArrowUpRight className="w-4 h-4 opacity-80" />
          </button>
        </div>

        {/* Mobile Trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mt-3 p-6 rounded-3xl bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-800 shadow-xl backdrop-blur-xl animate-in fade-in duration-200">
          <div className="flex flex-col gap-3 font-body font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-4 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
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
            className="mt-5 w-full py-3.5 rounded-full bg-[#0F766E] text-white font-medium text-sm shadow-sm flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Start Project</span>
          </button>
        </div>
      )}
    </header>
  );
};
