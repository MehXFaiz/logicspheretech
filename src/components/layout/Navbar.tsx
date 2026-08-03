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
  PhoneCall,
  Cpu,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY && currentScrollY > 120) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className={`fixed inset-x-4 sm:inset-x-6 z-40 max-w-7xl mx-auto transition-all duration-300 ${
        scrolled ? 'top-4' : 'top-6'
      }`}
    >
      <div className="rounded-full bg-[#0A0A0A]/85 backdrop-blur-xl border border-white/10 shadow-2xl px-6 py-3.5 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#00D9A6] to-[#3B82F6] p-0.5 shadow-md shadow-[#00D9A6]/20">
            <div className="w-full h-full bg-[#0A0A0A] rounded-[10px] flex items-center justify-center">
              <Cpu className="w-5 h-5 text-[#00D9A6] group-hover:scale-110 transition-transform" />
            </div>
          </div>
          <span className="font-heading font-bold text-base tracking-tight text-white">
            LOGICSPHERE <span className="text-[#00D9A6]">TECH</span>
          </span>
        </a>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 font-body text-xs font-semibold uppercase tracking-wider">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#A1A1AA] hover:text-[#00D9A6] transition-colors relative py-1 group"
            >
              <span>{link.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00D9A6] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          {/* WhatsApp Direct Line */}
          <a
            href="https://wa.me/923032567909"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-white/5 border border-white/10 text-white hover:text-[#00D9A6] hover:border-[#00D9A6]/40 transition-all text-xs font-mono flex items-center gap-2"
            title="Direct WhatsApp Desk"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#00D9A6]" />
            <span className="hidden xl:inline">+92 3032567909</span>
          </a>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full bg-white/5 border border-white/10 text-white hover:text-[#00D9A6] transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          {/* Primary CTA Button */}
          <button
            onClick={onOpenQuote}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#00D9A6] to-[#00D9A6]/80 hover:from-[#00D9A6] hover:to-[#3B82F6] text-[#0A0A0A] hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-lg shadow-[#00D9A6]/20 hover:scale-[1.02]"
          >
            <span>Get Consultation</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

        {/* Mobile Trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full bg-white/5 border border-white/10 text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5 text-[#00D9A6]" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-3 p-6 rounded-3xl bg-[#0A0A0A] border border-white/10 shadow-2xl space-y-4 font-body"
          >
            <div className="flex flex-col gap-3 font-semibold text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#A1A1AA] hover:text-[#00D9A6] transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <a
                href="https://wa.me/923032567909"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-full bg-white/5 border border-white/10 text-white text-center text-xs font-mono flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-[#00D9A6]" />
                <span>WhatsApp: +92 3032567909</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-3 rounded-full bg-[#00D9A6] text-[#0A0A0A] font-bold text-xs uppercase tracking-wider text-center"
              >
                Get Free Consultation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
