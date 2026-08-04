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
      className="fixed inset-0 z-50 bg-[#0B0D12] flex flex-col items-center justify-center font-body p-4"
    >
      <div className="text-center space-y-6 max-w-xs w-full">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <Logo className="h-12 w-12" showText={false} />
        </motion.div>

        <div>
          <h1 className="text-lg font-heading font-extrabold tracking-widest text-[#F5F1EA]">
            LOGIC SPHERE <span className="text-[#B88A44]">TECHNOLOGY</span>
          </h1>
          <p className="text-[10px] font-mono text-[#B9B4AA] uppercase tracking-[0.3em] mt-1">
            EXECUTIVE DIGITAL ATELIER
          </p>
        </div>

        <div className="space-y-2">
          <div className="w-full h-1 bg-[#1B2330] rounded-full overflow-hidden border border-[#B88A44]/15">
            <motion.div
              className="h-full bg-gradient-to-r from-[#B88A44] to-[#D6A55A]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-[10px] font-mono text-[#B9B4AA]">
            <span>INITIALIZING ATELIER</span>
            <span className="text-[#B88A44] font-bold">{progress}%</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
