'use client';

import React, { useEffect, useState } from 'react';
import { Layers, Zap, ShieldCheck, Globe, Sparkles, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const SplashScreen: React.FC<{ onFinish?: () => void }> = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  
  const phases = [
    { text: "Initializing Systems", icon: "⚡" },
    { text: "Loading Core Modules", icon: "🔧" },
    { text: "Syncing Global Network", icon: "🌐" },
    { text: "Welcome to LogicSphere", icon: "🚀" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 8) + 2;
        
        // Update phase based on progress
        if (next < 25) setPhase(0);
        else if (next < 50) setPhase(1);
        else if (next < 75) setPhase(2);
        else setPhase(3);
        
        return Math.min(next, 100);
      });
    }, 120);
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        onFinish?.();
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [progress, onFinish]);

  const handleSkip = () => {
    setProgress(100);
    setPhase(3);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ 
          opacity: 0,
          scale: 1.1,
          transition: { duration: 0.5, ease: "easeInOut" }
        }}
        className="fixed inset-0 z-[100] bg-[#2C3531] flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Animated background orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#116466]/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -80, 0],
              y: [0, 80, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1.1, 1, 1.1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#D9B08C]/20 rounded-full blur-3xl"
          />
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />

        <div className="relative z-10 flex flex-col items-center justify-center max-w-2xl w-full px-6">
          {/* Logo with rotating rings */}
          <div className="relative mb-12">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-8 border border-[#116466]/30 rounded-full border-dashed"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-12 border border-[#D9B08C]/20 rounded-full"
            />
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                duration: 0.8, 
                type: "spring",
                stiffness: 200,
                damping: 15
              }}
              className="relative w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-[#343e39] to-[#2C3531] rounded-3xl border-2 border-[#116466]/50 shadow-2xl shadow-[#116466]/20 flex items-center justify-center"
            >
              <Layers className="w-12 h-12 sm:w-16 sm:h-16 text-[#116466]" />
              <Sparkles className="w-5 h-5 text-[#FFCB9A] absolute top-3 right-3 animate-float" />
            </motion.div>
          </div>

          {/* Brand name */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center mb-10"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-2">
              LOGICSPHERE
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gradient-primary tracking-tight">
              TECH
            </h2>
          </motion.div>

          {/* Progress container */}
          <div className="w-full max-w-md">
            {/* Phase indicator */}
            <motion.div 
              key={phase}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-center gap-3 mb-6"
            >
              <span className="text-2xl">{phases[phase].icon}</span>
              <span className="text-lg font-mono text-[#9fb3aa]">
                {phases[phase].text}
              </span>
            </motion.div>

            {/* Progress bar */}
            <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden shadow-inner border border-white/10">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-[#116466] via-[#D9B08C] to-[#FFCB9A] shadow-lg relative"
              >
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
              </motion.div>
            </div>

            {/* Progress percentage */}
            <motion.div 
              key={progress}
              initial={{ scale: 0.9, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="flex justify-between items-center mt-4"
            >
              <span className="text-sm font-mono text-[#9fb3aa]">
                {progress}%
              </span>
              <button 
                onClick={handleSkip}
                className="text-sm font-semibold text-[#116466] hover:text-[#D9B08C] transition-colors flex items-center gap-1.5 group"
              >
                Skip
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </motion.div>
          </div>

          {/* Features row */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex items-center gap-6 mt-12"
          >
            {[
              { icon: Zap, color: "text-[#FFCB9A]", label: "Fast" },
              { icon: ShieldCheck, color: "text-[#116466]", label: "Secure" },
              { icon: Globe, color: "text-[#D9B08C]", label: "Global" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="flex flex-col items-center gap-1"
              >
                <item.icon className={`w-6 h-6 ${item.color}`} />
                <span className="text-xs font-mono text-[#9fb3aa]">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
