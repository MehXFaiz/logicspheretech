'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Logo } from '@/components/common/Logo';

export const SplashScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onComplete(), 400);
          return 100;
        }
        return prev + 4;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.7, ease: 'easeInOut' } }}
      className="fixed inset-0 z-50 bg-[#0B0D12] flex flex-col items-center justify-center font-body p-6 overflow-hidden"
    >
      {/* Background Orbital Rings & Gold Glow */}
      <div className="absolute w-[600px] h-[600px] rounded-full border border-[#B88A44]/15 pointer-events-none animate-spin-slow" />
      <div className="absolute w-[450px] h-[450px] rounded-full border border-[#B88A44]/10 pointer-events-none animate-spin-slow style={{ animationDirection: 'reverse' }}" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#B88A44]/[0.06] rounded-full blur-[140px] pointer-events-none" />

      {/* Main Splash Content */}
      <div className="relative z-10 text-center space-y-8 max-w-sm w-full">
        {/* Emblem Reveal */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center"
        >
          <Logo className="h-20 w-20" showText={false} />
        </motion.div>

        {/* Brand Text & Tagline */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-2"
        >
          <h1 className="text-2xl font-heading font-extrabold tracking-[0.25em] text-[#F5F1EA]">
            LOGIC SPHERE
          </h1>
          <p className="text-[11px] font-mono text-[#B88A44] uppercase tracking-[0.4em] font-semibold">
            TECHNOLOGY
          </p>
          <div className="pt-2">
            <span className="text-[10px] font-mono text-[#B9B4AA] uppercase tracking-[0.3em] font-light">
              INNOVATE • INTEGRATE • ELEVATE
            </span>
          </div>
        </motion.div>

        {/* Loading Progress Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-3 pt-6"
        >
          <span className="text-[10px] font-mono text-[#B9B4AA] uppercase tracking-[0.3em] block">
            INITIALIZING
          </span>

          <div className="w-full h-1 bg-[#1B2330] rounded-full overflow-hidden border border-[#B88A44]/20 relative">
            <motion.div
              className="h-full bg-gradient-to-r from-[#B88A44] via-[#D6A55A] to-[#F5F1EA] shadow-[0_0_10px_#B88A44]"
              style={{ width: `${progress}%` }}
            />
          </div>

          <span className="text-xs font-mono text-[#B88A44] font-bold block">
            {progress}%
          </span>
        </motion.div>
      </div>

      {/* Bottom Particle Wave Line Visual */}
      <div className="absolute bottom-6 inset-x-0 flex justify-center items-center text-[10px] font-mono text-[#B9B4AA]/60 tracking-wider">
        ♥ CRAFTED WITH PASSION, CODED WITH PRECISION
      </div>
    </motion.div>
  );
};
