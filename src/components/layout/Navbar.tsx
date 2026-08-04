'use client';

import React, { useState, useEffect } from 'react';
import { Logo } from '@/components/common/Logo';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);

      // Section spy
      const sections = ['home', 'services', 'portfolio', 'why-us', 'process', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'home' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Portfolio', href: '#portfolio', id: 'portfolio' },
    { name: 'Why Us', href: '#why-us', id: 'why-us' },
    { name: 'Process', href: '#process', id: 'process' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-6xl transition-all duration-300 ${
          scrolled ? 'top-4' : 'top-6'
        }`}
      >
        <div className="glass-pill-nav rounded-full px-5 py-3 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2">
            <Logo className="h-8 w-8" showText={true} />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7 font-body text-xs font-medium tracking-wide">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative py-1 transition-colors duration-300 flex flex-col items-center gap-1 ${
                    isActive ? 'text-[#F5F1EA] font-semibold' : 'text-[#B9B4AA] hover:text-[#F5F1EA]'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavDot"
                      className="w-1.5 h-1.5 rounded-full bg-[#B88A44] shadow-[0_0_8px_#B88A44]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenQuote}
              className="btn-gold-primary px-5 py-2.5 text-xs tracking-wider uppercase font-bold flex items-center gap-2 group"
            >
              <span>Book a Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-[#1B2330] border border-[#B88A44]/20 text-[#F5F1EA] hover:border-[#B88A44]/60 transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#B88A44]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[#0B0D12]/98 backdrop-blur-3xl p-6 flex flex-col justify-between md:hidden text-[#F5F1EA]"
          >
            <div className="flex items-center justify-between pb-6 border-b border-[#B88A44]/15">
              <Logo className="h-9 w-9" showText={true} />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full bg-[#1B2330] text-[#F5F1EA] border border-[#B88A44]/20"
              >
                <X className="w-5 h-5 text-[#B88A44]" />
              </button>
            </div>

            <div className="flex flex-col gap-6 my-auto text-xl font-heading font-medium tracking-wide">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-[#B9B4AA] hover:text-[#B88A44] transition-colors py-2 border-b border-[#1B2330]"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#B88A44]" />
                </motion.a>
              ))}
            </div>

            <div className="space-y-4 pt-6 border-t border-[#B88A44]/15">
              <a
                href="https://wa.me/923032567909"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-full bg-[#1B2330] border border-[#B88A44]/20 text-[#F5F1EA] text-center text-xs font-mono flex items-center justify-center gap-2 hover:border-[#B88A44]/50 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#B88A44]" />
                <span>WhatsApp: +92 3032567909</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="btn-gold-primary w-full py-4 text-xs tracking-wider uppercase font-bold text-center"
              >
                Book a Consultation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
