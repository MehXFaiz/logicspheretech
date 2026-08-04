'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const SplashScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Slower, ultra-smooth 6-Step Timed Sequence (1.1s per step = 6.6s total)
    const t1 = setTimeout(() => setStep(2), 1100);   // 1.1s: Shape Forms
    const t2 = setTimeout(() => setStep(3), 2200);   // 2.2s: Logo Reveals
    const t3 = setTimeout(() => setStep(4), 3300);   // 3.3s: Brand Appears
    const t4 = setTimeout(() => setStep(5), 4400);   // 4.4s: Tagline & Motion
    const t5 = setTimeout(() => setStep(6), 5500);   // 5.5s: Ready to Launch

    // Smooth loading progress bar (0% to 100% over 6.5s)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 60);

    // Complete splash screen after 6.6s
    const exitTimer = setTimeout(() => {
      onComplete();
    }, 6600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(exitTimer);
      clearInterval(interval);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.03, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }}
      className="fixed inset-0 z-50 bg-[#0B0D12] flex flex-col items-center justify-center font-body p-6 overflow-hidden select-none"
    >
      {/* Background Orbital Rings & Gold Glow */}
      {step >= 3 && (
        <>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute w-[650px] h-[650px] rounded-full border border-[#B88A44]/15 pointer-events-none animate-spin-slow"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.8 }}
            className="absolute w-[480px] h-[480px] rounded-full border border-[#B88A44]/10 pointer-events-none animate-spin-slow style={{ animationDirection: 'reverse' }}"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#B88A44]/[0.08] rounded-full blur-[160px] pointer-events-none animate-pulse-glow" />
        </>
      )}

      {/* Main Canvas Area */}
      <div className="relative z-10 text-center flex flex-col items-center justify-center max-w-md w-full min-h-[440px]">

        {/* STEP 1: 0.0s — LIGHT EMERGES */}
        {step === 1 && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 0.95] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center"
          >
            <div className="w-5 h-5 rounded-full bg-[#F5F1EA] shadow-[0_0_40px_#B88A44,0_0_70px_#D6A55A] animate-pulse" />
            <div className="absolute w-28 h-0.5 bg-gradient-to-r from-transparent via-[#B88A44] to-transparent opacity-80" />
            <div className="absolute h-28 w-0.5 bg-gradient-to-b from-transparent via-[#B88A44] to-transparent opacity-80" />
          </motion.div>
        )}

        {/* STEP 2: 1.1s — SHAPE FORMS (Wireframe Official 'L' & 'S' Polygon Outline) */}
        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center w-24 h-24"
          >
            <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
              {/* Wireframe Outline */}
              <path d="M26 20 L42 20 L42 50 L52 56 L44 70 L26 58 Z" stroke="#B88A44" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.9" />
              <path d="M46 70 L74 50 L74 30 L52 44 L52 32 L66 22 L58 18 L46 26 L46 46 L62 34 L62 44 Z" stroke="#D6A55A" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.9" />
              <rect x="68" y="14" width="4" height="4" fill="#F5F1EA" className="animate-ping" />
              <rect x="78" y="12" width="4" height="4" fill="#B88A44" className="animate-ping" style={{ animationDelay: '0.3s' }} />
            </svg>
          </motion.div>
        )}

        {/* STEP 3+: 2.2s — LOGO REVEALS (Official LOGICSPHERE Emblem with Gold Metallic Gradient) */}
        {step >= 3 && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 flex justify-center"
          >
            <div className="w-24 h-24 relative flex items-center justify-center">
              <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                <defs>
                  <linearGradient id="splashOfficialLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F5F1EA" />
                    <stop offset="60%" stopColor="#B88A44" />
                    <stop offset="100%" stopColor="#8A6328" />
                  </linearGradient>

                  <linearGradient id="splashOfficialRight" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F5F1EA" />
                    <stop offset="40%" stopColor="#D6A55A" />
                    <stop offset="100%" stopColor="#B88A44" />
                  </linearGradient>
                </defs>

                {/* Left 'L' Facet */}
                <path d="M26 20 L42 20 L42 50 L52 56 L44 70 L26 58 Z" fill="url(#splashOfficialLeft)" />

                {/* Right 'S' Interlocking Ribbon Facet */}
                <path d="M46 70 L74 50 L74 30 L52 44 L52 32 L66 22 L58 18 L46 26 L46 46 L62 34 L62 44 Z" fill="url(#splashOfficialRight)" />

                {/* Floating Pixel Squares */}
                <rect x="68" y="14" width="4" height="4" fill="#F5F1EA" className="opacity-90 animate-pulse" />
                <rect x="74" y="18" width="4" height="4" fill="#D6A55A" className="opacity-80" />
                <rect x="78" y="12" width="4" height="4" fill="#B88A44" className="opacity-95 animate-pulse" style={{ animationDelay: '0.5s' }} />
                <rect x="82" y="22" width="4" height="4" fill="#D6A55A" className="opacity-70" />
                <rect x="76" y="26" width="4" height="4" fill="#F5F1EA" className="opacity-85" />
              </svg>
            </div>
          </motion.div>
        )}

        {/* STEP 4+: 3.3s — BRAND APPEARS */}
        {step >= 4 && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-1.5"
          >
            <h1 className="text-3xl font-heading font-extrabold tracking-[0.2em] text-[#F5F1EA]">
              LOGIC<span className="text-[#B88A44]">SPHERE</span>
            </h1>
            <div className="flex items-center justify-center gap-2 pt-1">
              <span className="h-[1px] w-6 bg-[#B88A44]/50" />
              <span className="text-xs font-mono text-[#B9B4AA] uppercase tracking-[0.4em] font-semibold">
                T E C H
              </span>
              <span className="h-[1px] w-6 bg-[#B88A44]/50" />
            </div>
          </motion.div>
        )}

        {/* STEP 5+: 4.4s — TAGLINE & MOTION */}
        {step >= 5 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="pt-3"
          >
            <span className="text-[11px] font-mono text-[#B9B4AA] uppercase tracking-[0.3em] font-light block">
              INNOVATE • INTEGRATE • ELEVATE
            </span>
          </motion.div>
        )}

        {/* STEP 6: 5.5s — READY TO LAUNCH & Smooth Loading Bar */}
        {step >= 6 && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-3 pt-8 w-full max-w-xs mx-auto"
          >
            <div className="w-full h-1 bg-[#1B2330] rounded-full overflow-hidden border border-[#B88A44]/25 relative shadow-[0_0_15px_rgba(184,138,68,0.15)]">
              <motion.div
                className="h-full bg-gradient-to-r from-[#B88A44] via-[#D6A55A] to-[#F5F1EA] shadow-[0_0_12px_#B88A44]"
                style={{ width: `${progress}%` }}
              />
            </div>

            <span className="text-[10px] font-mono text-[#B88A44] uppercase tracking-[0.35em] font-bold block">
              READY TO LAUNCH
            </span>
          </motion.div>
        )}

      </div>

      {/* Dynamic Golden Particle Wave Line Visual at Bottom (Steps 4+) */}
      {step >= 4 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1.2 }}
          className="absolute bottom-6 inset-x-0 flex justify-center items-center text-[10px] font-mono text-[#B9B4AA] tracking-widest uppercase"
        >
          ♥ CRAFTED WITH PASSION, CODED WITH PRECISION
        </motion.div>
      )}
    </motion.div>
  );
};
