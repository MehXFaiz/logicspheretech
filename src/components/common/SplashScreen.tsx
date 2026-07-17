'use client';

import React, { useEffect, useState } from 'react';
import { Layers, Sparkles, CheckCircle2, ArrowRight, Cpu, Zap, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const SplashScreen: React.FC<{ onFinish?: () => void }> = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [stepText, setStepText] = useState('Initializing LogicSphere...');
  const [isCompleted, setIsCompleted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const increment = Math.floor(Math.random() * 12) + 6;
        const next = Math.min(prev + increment, 100);

        if (next < 30) {
          setStepText('Initializing LogicSphere Systems...');
        } else if (next < 60) {
          setStepText('Loading Global Network Modules...');
        } else if (next < 85) {
          setStepText('Calibrating Premium Design System...');
        } else {
          setStepText('Welcome to LogicSphere Tech!');
        }

        return next;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100 && !isCompleted) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsCompleted(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        if (onFinish) onFinish();
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [progress, isCompleted, onFinish]);

  const handleSkip = () => {
    setProgress(100);
    setIsCompleted(true);
    setIsVisible(false);
    if (onFinish) onFinish();
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="fixed inset-0 z-[100] bg-[#050816] flex flex-col items-center justify-between p-6 sm:p-12 overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#06b6d4]/20 via-[#8b5cf6]/20 to-transparent rounded-full blur-[180px] pointer-events-none animate-pulse-glow" />

        {/* Top Bar */}
        <div className="w-full max-w-5xl flex items-center justify-between relative z-10 text-xs font-mono">
          <div className="flex items-center gap-2.5 text-slate-400">
            <span className="w-2.5 h-2.5 rounded-full bg-[#06b6d4] animate-ping" />
            <span className="text-[#06b6d4] font-bold tracking-wider">LOGICSPHERE.TECH</span>
            <span className="hidden sm:inline opacity-50">| GLOBAL EDITION 2026</span>
          </div>

          <button
            onClick={handleSkip}
            className="px-4 py-2 rounded-xl bg-white/5 hover:bg-[#06b6d4]/20 border border-white/10 hover:border-[#06b6d4]/40 text-slate-300 hover:text-white transition-all flex items-center gap-2 font-mono font-bold text-xs group shadow-lg"
          >
            <span>Skip</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#06b6d4]" />
          </button>
        </div>

        {/* Center Content */}
        <div className="flex flex-col items-center text-center max-w-xl relative z-10 my-auto">
          {/* Animated Logo */}
          <div className="relative mb-10 flex items-center justify-center">
            <div className="absolute w-40 h-40 rounded-full border border-[#06b6d4]/30 animate-spin-slow pointer-events-none border-dashed" />
            <div className="absolute w-52 h-52 rounded-full border border-[#8b5cf6]/25 animate-reverse-spin pointer-events-none" />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#06b6d4] to-[#8b5cf6] blur-3xl opacity-30 animate-pulse" />
            
            <motion.div
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative w-28 h-28 rounded-3xl bg-[#0f172a] border-2 border-[#06b6d4]/60 flex items-center justify-center shadow-2xl shadow-[#06b6d4]/25"
            >
              <Layers className="w-14 h-14 text-[#06b6d4] stroke-[2]" />
              <Sparkles className="w-6 h-6 text-[#f59e0b] absolute top-4 right-4 animate-float" />
            </motion.div>
          </div>

          {/* Brand Title */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-bold tracking-[0.3em] uppercase text-[#06b6d4]">
              GLOBAL TECH SOLUTIONS
            </span>
            <span className="px-2 py-0.5 rounded bg-[#06b6d4]/15 text-[#06b6d4] text-[10px] font-mono font-bold border border-[#06b6d4]/30">
              PREMIUM
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-none mb-6">
            LOGICSPHERE <span className="text-gradient-primary">TECH</span>
          </h1>

          {/* Status Box */}
          <div className="w-full bg-[#0f172a]/90 border border-white/10 rounded-2xl p-4 sm:p-5 mb-8 shadow-2xl backdrop-blur-xl text-left">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-[#06b6d4] font-bold">
                <Cpu className="w-3.5 h-3.5 animate-spin" /> SYSTEM STATUS
              </span>
              <span className="text-white font-bold">{progress}% LOADED</span>
            </div>
            <div className="font-mono text-xs sm:text-sm text-slate-200 min-h-[24px] flex items-center justify-between">
              <span className="truncate pr-4">{stepText}</span>
              {progress === 100 && (
                <CheckCircle2 className="w-4 h-4 text-[#06b6d4] shrink-0 animate-scale-in" />
              )}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-white/[0.06] rounded-full h-2.5 overflow-hidden p-0.5 border border-white/10 shadow-inner">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="h-full rounded-full bg-gradient-to-r from-[#06b6d4] via-[#8b5cf6] to-[#f59e0b] shadow-lg shadow-[#06b6d4]/40 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/30 animate-[pulse_1.5s_infinite]" />
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="w-full max-w-5xl flex flex-col sm:flex-row items-center justify-between relative z-10 text-[11px] font-mono text-slate-500 pt-4 border-t border-white/10 gap-2">
          <span>© 2026 LogicSphere Tech. All Rights Reserved.</span>
          <div className="flex items-center gap-4 text-slate-400">
            <span className="flex items-center gap-1 text-[#06b6d4]">
              <Zap className="w-3.5 h-3.5" /> FAST & RELIABLE
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" /> SECURED
            </span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
