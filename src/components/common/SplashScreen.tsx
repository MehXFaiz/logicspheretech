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
      className="fixed inset-0 z-50 bg-[#F5F5F7] flex flex-col items-center justify-center font-body p-4"
    >
      <div className="text-center space-y-6 max-w-xs w-full">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-14 h-14 rounded-2xl bg-[#1D1D1F] text-white mx-auto flex items-center justify-center shadow-lg"
        >
          <Cpu className="w-7 h-7 text-[#0071E3]" />
        </motion.div>

        <div>
          <h1 className="text-xl font-bold font-heading tracking-tight text-[#1D1D1F]">
            Logic Sphere <span className="text-[#0071E3]">Technology</span>
          </h1>
          <p className="text-[11px] font-mono text-[#86868B] uppercase tracking-widest mt-1">
            Product Engineering Studio
          </p>
        </div>

        <div className="space-y-2">
          <div className="w-full h-1 bg-[#E5E5EA] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#0071E3]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-[10px] font-mono text-[#86868B]">
            <span>LOADING EXPERIENCE</span>
            <span className="text-[#0071E3] font-bold">{progress}%</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
