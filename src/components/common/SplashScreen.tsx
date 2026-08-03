'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';

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
    }, 35);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
      className="fixed inset-0 z-50 bg-[#0E0E10] flex flex-col items-center justify-center font-body p-4"
    >
      <div className="text-center space-y-6 max-w-xs w-full">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-14 h-14 rounded-2xl bg-[#1F2229] border border-white/10 text-white mx-auto flex items-center justify-center shadow-2xl"
        >
          <Cpu className="w-7 h-7 text-[#C6A15B]" />
        </motion.div>

        <div>
          <h1 className="text-xl font-bold font-heading tracking-tight text-[#F4F4F5]">
            LOGICSPHERE <span className="text-[#C6A15B]">TECH</span>
          </h1>
          <p className="text-[11px] font-mono text-[#A1A1AA] uppercase tracking-widest mt-1">
            EXECUTIVE SOFTWARE ATELIER
          </p>
        </div>

        <div className="space-y-2">
          <div className="w-full h-1 bg-[#1F2229] rounded-full overflow-hidden border border-white/5">
            <motion.div
              className="h-full bg-[#C6A15B]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-[10px] font-mono text-[#A1A1AA]">
            <span>INITIALIZING ATELIER</span>
            <span className="text-[#C6A15B] font-bold">{progress}%</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
