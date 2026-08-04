'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from '@/components/common/Logo';

export const SplashScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [stageText, setStageText] = useState('LIGHT EMERGES');

  useEffect(() => {
    // Smooth 2.8s loading progression (incrementing by 1 every 25ms = 2500ms total + 300ms pause at 100%)
    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 1;

        if (next < 20) {
          setStageText('LIGHT EMERGES');
        } else if (next < 40) {
          setStageText('SHAPE FORMS');
        } else if (next < 60) {
          setStageText('LOGO REVEALS');
        } else if (next < 80) {
          setStageText('BRAND APPEARS');
        } else if (next < 95) {
          setStageText('TAGLINE & MOTION');
        } else {
          setStageText('READY TO LAUNCH');
        }

        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => onComplete(), 600);
          return 100;
        }
        return next;
      });
    }, 25);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.04, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }}
      className="fixed inset-0 z-50 bg-[#0B0D12] flex flex-col items-center justify-center font-body p-6 overflow-hidden"
    >
      {/* Soft Ambient Orbital Rings & Radial Gold Glow */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute w-[650px] h-[650px] rounded-full border border-[#B88A44]/15 pointer-events-none animate-spin-slow" 
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8 }}
        className="absolute w-[500px] h-[500px] rounded-full border border-[#B88A44]/10 pointer-events-none animate-spin-slow style={{ animationDirection: 'reverse' }}" 
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#B88A44]/[0.07] rounded-full blur-[160px] pointer-events-none animate-pulse-glow" />

      {/* Main Splash Card */}
      <div className="relative z-10 text-center space-y-8 max-w-md w-full">
        
        {/* Emblem Reveal with Gentle Floating */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center"
        >
          <Logo className="h-24 w-24" showText={false} />
        </motion.div>

        {/* Brand Name & Luxury Tagline */}
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-2.5"
        >
          <h1 className="text-3xl font-heading font-extrabold tracking-[0.25em] text-[#F5F1EA]">
            LOGIC SPHERE
          </h1>
          <p className="text-xs font-mono text-[#B88A44] uppercase tracking-[0.45em] font-semibold">
            TECHNOLOGY
          </p>
          <div className="pt-2">
            <span className="text-[11px] font-mono text-[#B9B4AA] uppercase tracking-[0.3em] font-light">
              INNOVATE • INTEGRATE • ELEVATE
            </span>
          </div>
        </motion.div>

        {/* Phased Stage Text & Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="space-y-3 pt-6 max-w-xs mx-auto"
        >
          {/* Animated Phased Stage Indicator */}
          <div className="h-5 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={stageText}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-[10px] font-mono text-[#B88A44] uppercase tracking-[0.3em] font-bold block"
              >
                {stageText}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Smooth Gold Gradient Loading Bar */}
          <div className="w-full h-1 bg-[#1B2330] rounded-full overflow-hidden border border-[#B88A44]/20 relative shadow-[0_0_15px_rgba(184,138,68,0.1)]">
            <motion.div
              className="h-full bg-gradient-to-r from-[#B88A44] via-[#D6A55A] to-[#F5F1EA] shadow-[0_0_12px_#B88A44]"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'linear' }}
            />
          </div>

          <span className="text-xs font-mono text-[#B9B4AA] font-bold block">
            {progress}%
          </span>
        </motion.div>
      </div>

      {/* Bottom Particle Wave Line Visual */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-6 inset-x-0 flex justify-center items-center text-[10px] font-mono text-[#B9B4AA] tracking-widest uppercase"
      >
        ♥ CRAFTED WITH PASSION, CODED WITH PRECISION
      </motion.div>
    </motion.div>
  );
};
