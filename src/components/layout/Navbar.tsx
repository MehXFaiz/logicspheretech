'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';
import {
  Sun,
  Moon,
  Menu,
  X,
  PhoneCall,
  Cpu,
  ChevronRight,
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
    { name: 'Overview', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Case Studies', href: '#portfolio' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: visible ? 0 : -100 }}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className={`fixed inset-x-4 sm:inset-x-6 z-40 max-w-6xl mx-auto transition-all duration-300 ${
          scrolled ? 'top-4' : 'top-6'
        }`}
      >
        <div className="rounded-full bg-[#1F2229]/85 backdrop-blur-2xl border border-white/10 shadow-2xl px-6 py-3.5 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-full bg-[#2A2E36] text-[#F4F4F5] flex items-center justify-center shadow-sm border border-white/10">
              <Cpu className="w-4 h-4 text-[#C6A15B] group-hover:scale-110 transition-transform" />
            </div>
            <span className="font-heading font-bold text-sm tracking-tight text-[#F4F4F5]">
              LOGICSPHERE <span className="text-[#C6A15B]">TECH</span>
            </span>
          </a>

          {/* Minimal Nav Links */}
          <nav className="hidden md:flex items-center gap-6 font-body text-xs font-semibold uppercase tracking-wider">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#A1A1AA] hover:text-[#C6A15B] transition-colors relative py-1 group"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C6A15B] group-hover:w-full transition-all duration-300 rounded-full" />
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/923032567909"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-[#2A2E36] border border-white/10 text-[#F4F4F5] hover:text-[#C6A15B] transition-all text-xs font-mono flex items-center gap-1.5"
              title="Direct WhatsApp Desk"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span className="hidden xl:inline">+92 3032567909</span>
            </a>

            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-[#2A2E36] border border-white/10 text-[#F4F4F5] hover:text-[#C6A15B] transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            <button
              onClick={onOpenQuote}
              className="executive-btn-primary px-5 py-2.5 text-xs font-semibold flex items-center gap-1.5 shadow-md"
            >
              <span>Consultation</span>
              <ChevronRight className="w-3.5 h-3.5 opacity-80" />
            </button>
          </div>

          {/* Mobile Trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full bg-[#2A2E36] border border-white/10 text-[#F4F4F5]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5 text-[#C6A15B]" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Full-Screen Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[#0E0E10]/95 backdrop-blur-3xl p-8 flex flex-col justify-between md:hidden font-heading text-[#F4F4F5]"
          >
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <a href="#hero" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#2A2E36] text-white flex items-center justify-center">
                  <Cpu className="w-4 h-4 text-[#C6A15B]" />
                </div>
                <span className="font-bold text-sm">LogicSphere Tech</span>
              </a>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full bg-[#2A2E36] text-[#F4F4F5]"
              >
                <X className="w-6 h-6 text-[#C6A15B]" />
              </button>
            </div>

            <div className="flex flex-col gap-6 my-auto text-2xl font-bold">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#C6A15B] transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="space-y-4 pt-6 border-t border-white/10 font-body">
              <a
                href="https://wa.me/923032567909"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-full bg-[#2A2E36] border border-white/10 text-white text-center text-xs font-mono flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-[#C6A15B]" />
                <span>WhatsApp: +92 3032567909</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="executive-btn-primary w-full py-4 text-xs font-bold text-center"
              >
                Get Free Consultation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
