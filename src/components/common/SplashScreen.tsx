'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Cpu } from 'lucide-react';

export const SplashScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onComplete(), 300);
          return 100;
        }
        return prev + 5;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
      className="fixed inset-0 z-50 bg-[#0A0A0A] flex flex-col items-center justify-center font-body p-4"
    >
      {/* Background Aurora Blob */}
      <div className="absolute w-[500px] h-[500px] bg-[#00D9A6]/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />

      <div className="relative z-10 text-center space-y-6 max-w-sm w-full">
        {/* Brand Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00D9A6] to-[#3B82F6] p-0.5 mx-auto shadow-2xl shadow-[#00D9A6]/20"
        >
          <div className="w-full h-full bg-[#0A0A0A] rounded-[14px] flex items-center justify-center">
            <Cpu className="w-8 h-8 text-[#00D9A6]" />
          </div>
        </motion.div>

        {/* Title */}
        <div>
          <h1 className="text-2xl font-bold font-heading tracking-tight text-white flex items-center justify-center gap-2">
            <span>LOGICSPHERE</span>
            <span className="text-[#00D9A6]">TECH</span>
          </h1>
          <p className="text-xs font-mono text-[#A1A1AA] uppercase tracking-widest mt-1">
            ENTERPRISE SOFTWARE ATELIER
          </p>
        </div>

        {/* Progress Bar Container */}
        <div className="space-y-2">
          <div className="w-full h-1.5 bg-[#18181B] rounded-full overflow-hidden border border-white/5">
            <motion.div
              className="h-full bg-gradient-to-r from-[#00D9A6] via-[#38BDF8] to-[#3B82F6]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-[10px] font-mono text-[#A1A1AA]">
            <span>LOADING ARCHITECTURE</span>
            <span className="text-[#00D9A6] font-bold">{progress}%</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
