'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const SplashScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Exact 6-Step Timed Sequence (0.6s intervals = 3.6s total duration)
    const t1 = setTimeout(() => setStep(2), 600);    // 0.6s: Shape Forms
    const t2 = setTimeout(() => setStep(3), 1200);   // 1.2s: Logo Reveals
    const t3 = setTimeout(() => setStep(4), 1800);   // 1.8s: Brand Appears
    const t4 = setTimeout(() => setStep(5), 2400);   // 2.4s: Tagline & Motion
    const t5 = setTimeout(() => setStep(6), 3000);   // 3.0s: Ready to Launch

    // Progress bar animation from 0% to 100%
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 60);

    // Complete splash screen after 3.6s
    const exitTimer = setTimeout(() => {
      onComplete();
    }, 3600);

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
      exit={{ opacity: 0, scale: 1.05, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }}
      className="fixed inset-0 z-50 bg-[#0B0D12] flex flex-col items-center justify-center font-body p-6 overflow-hidden select-none"
    >
      {/* Background Orbital Rings & Radial Gold Glow (Appears in Step 3+) */}
      {step >= 3 && (
        <>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="absolute w-[600px] h-[600px] rounded-full border border-[#B88A44]/15 pointer-events-none animate-spin-slow"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4 }}
            className="absolute w-[450px] h-[450px] rounded-full border border-[#B88A44]/10 pointer-events-none animate-spin-slow style={{ animationDirection: 'reverse' }}"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-[#B88A44]/[0.08] rounded-full blur-[150px] pointer-events-none animate-pulse-glow" />
        </>
      )}

      {/* Main Canvas Area */}
      <div className="relative z-10 text-center flex flex-col items-center justify-center max-w-md w-full min-h-[420px]">

        {/* STEP 1: 0.0s — LIGHT EMERGES */}
        {step === 1 && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 0.9] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative flex items-center justify-center"
          >
            {/* Bright Center Starburst Dot */}
            <div className="w-4 h-4 rounded-full bg-[#F5F1EA] shadow-[0_0_35px_#B88A44,0_0_60px_#D6A55A] animate-pulse" />
            <div className="absolute w-24 h-0.5 bg-gradient-to-r from-transparent via-[#B88A44] to-transparent opacity-80" />
            <div className="absolute h-24 w-0.5 bg-gradient-to-b from-transparent via-[#B88A44] to-transparent opacity-80" />
          </motion.div>
        )}

        {/* STEP 2: 0.6s — SHAPE FORMS (Wireframe Hexagon Cube Outline) */}
        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative flex items-center justify-center w-24 h-24"
          >
            <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
              {/* Wireframe Hexagon Lines */}
              <polygon
                points="50,6 88,28 88,72 50,94 12,72 12,28"
                stroke="#B88A44"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                className="animate-spin-slow"
              />
              <path d="M50 6 L50 94" stroke="#B88A44" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
              <path d="M12 28 L88 72" stroke="#B88A44" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
              <path d="M88 28 L12 72" stroke="#B88A44" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
              <circle cx="50" cy="50" r="3" fill="#F5F1EA" className="animate-ping" />
            </svg>
          </motion.div>
        )}

        {/* STEP 3+: 1.2s — LOGO REVEALS (Solid 3D Metallic Hexagonal Gold Emblem) */}
        {step >= 3 && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 flex justify-center"
          >
            <div className="w-24 h-24 relative flex items-center justify-center">
              <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                <defs>
                  <linearGradient id="splashGoldHex" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F5F1EA" />
                    <stop offset="40%" stopColor="#D6A55A" />
                    <stop offset="100%" stopColor="#B88A44" />
                  </linearGradient>
                  <linearGradient id="splashGoldDark" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#B88A44" />
                    <stop offset="100%" stopColor="#6C4A19" />
                  </linearGradient>
                </defs>

                {/* Outer Hexagon Frame */}
                <polygon points="50,6 88,28 88,72 50,94 12,72 12,28" stroke="url(#splashGoldHex)" strokeWidth="4" strokeLinejoin="round" />

                {/* Inner 3D Facets */}
                <path d="M50 16 L78 32 L50 48 L22 32 Z" fill="url(#splashGoldHex)" opacity="0.9" />
                <path d="M22 38 L46 52 L46 84 L22 70 Z" fill="url(#splashGoldDark)" opacity="0.85" />
                <path d="M54 52 L78 38 L78 70 L54 84 Z" fill="url(#splashGoldHex)" opacity="0.95" />

                {/* Divider lines */}
                <path d="M50 48 L50 94" stroke="#0B0D12" strokeWidth="3" />
                <path d="M50 48 L88 28" stroke="#0B0D12" strokeWidth="3" />
                <path d="M50 48 L12 28" stroke="#0B0D12" strokeWidth="3" />
              </svg>
            </div>
          </motion.div>
        )}

        {/* STEP 4+: 1.8s — BRAND APPEARS */}
        {step >= 4 && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-1.5"
          >
            <h1 className="text-3xl font-heading font-extrabold tracking-[0.25em] text-[#F5F1EA]">
              LOGIC SPHERE
            </h1>
            <p className="text-xs font-mono text-[#B88A44] uppercase tracking-[0.45em] font-semibold">
              TECHNOLOGY
            </p>
          </motion.div>
        )}

        {/* STEP 5+: 2.4s — TAGLINE & MOTION */}
        {step >= 5 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="pt-3"
          >
            <span className="text-[11px] font-mono text-[#B9B4AA] uppercase tracking-[0.3em] font-light block">
              INNOVATE • INTEGRATE • ELEVATE
            </span>
          </motion.div>
        )}

        {/* STEP 6: 3.0s — READY TO LAUNCH & Smooth Loading Bar */}
        {step >= 6 && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
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
          transition={{ duration: 1 }}
          className="absolute bottom-6 inset-x-0 flex justify-center items-center text-[10px] font-mono text-[#B9B4AA] tracking-widest uppercase"
        >
          ♥ CRAFTED WITH PASSION, CODED WITH PRECISION
        </motion.div>
      )}
    </motion.div>
  );
};
