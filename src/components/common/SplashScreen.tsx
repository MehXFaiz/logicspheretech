'use client';

import React, { useEffect, useState } from 'react';
import { Cpu, ShieldCheck } from 'lucide-react';

export const SplashScreen: React.FC<{ onFinish?: () => void }> = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [activeMatrix, setActiveMatrix] = useState<boolean[]>(new Array(16).fill(false));

  useEffect(() => {
    // Simulated load progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const step = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + step, 100);
      });
    }, 100);

    // Dynamic grid block highlight animation
    const matrixInterval = setInterval(() => {
      setActiveMatrix(() => {
        return new Array(16).fill(0).map(() => Math.random() > 0.6);
      });
    }, 250);

    return () => {
      clearInterval(interval);
      clearInterval(matrixInterval);
    };
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const fadeTimer = setTimeout(() => {
        setIsFadingOut(true);
      }, 1000);

      const finishTimer = setTimeout(() => {
        setIsVisible(false);
        onFinish?.();
      }, 1700);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(finishTimer);
      };
    }
  }, [progress, onFinish]);

  const handleDismiss = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      setIsVisible(false);
      onFinish?.();
    }, 500);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#2C3531] text-[#D1E8E2] flex flex-col items-center justify-between p-8 font-mono select-none overflow-hidden transition-all duration-1000 ease-out ${
        isFadingOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Laser Scanning Line */}
      <div className="absolute inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#FFCB9A] to-transparent shadow-[0_0_10px_#FFCB9A] opacity-60 animate-[bounce_5s_infinite] pointer-events-none z-30" />

      {/* Cybernetic Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_40%,_#242b28_100%)] pointer-events-none" />

      {/* Ambient Top and Bottom Bars */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#116466] to-transparent opacity-40" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#116466] to-transparent opacity-40" />

      {/* Edge-to-edge Loading Line (Top-anchored tracker) */}
      <div className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-[#116466] via-[#FFCB9A] to-[#D9B08C] transition-all duration-150" style={{ width: `${progress}%` }} />

      {/* Top HUD Metadata */}
      <div className="w-full flex items-center justify-between text-[9px] sm:text-[10px] tracking-[0.3em] text-[#D1E8E2]/50 z-20">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-[#FFCB9A] inline-block animate-pulse" />
          <span>MATRIX.SYS: ACTIVE</span>
        </div>
        <div className="flex items-center gap-4">
          <span>LATENCY: 0.04MS</span>
          <span className="text-[#FFCB9A]">IP_HANDOVER: READY</span>
        </div>
      </div>

      {/* Central Interactive HUD Segment */}
      <div className="relative w-full max-w-xl flex-1 flex flex-col items-center justify-center z-10">
        
        {/* Layered Geometric Hexagon/Diamond HUD segments */}
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
          
          {/* External Bracket Ring (Counter-rotating) */}
          <div className="absolute inset-0 border border-t-[#FFCB9A] border-b-[#FFCB9A] border-l-transparent border-r-transparent rounded-full animate-[spin_10s_linear_infinite]" />
          <div className="absolute inset-4 border border-l-[#116466] border-r-[#116466] border-t-transparent border-b-transparent rounded-full animate-[spin_15s_linear_infinite_reverse]" />
          
          {/* Intermittent grid matrix pixels */}
          <div className="absolute w-44 h-44 grid grid-cols-4 gap-2.5 opacity-20">
            {activeMatrix.map((isActive, index) => (
              <div
                key={index}
                className={`w-full h-full border transition-all duration-300 ${
                  isActive ? 'bg-[#FFCB9A] border-[#FFCB9A]/50' : 'bg-transparent border-[#116466]/30'
                }`}
              />
            ))}
          </div>

          {/* Central Holographic Core */}
          <div className="relative w-32 h-32 bg-[#242b28]/95 border border-[#116466] flex flex-col items-center justify-center shadow-lg">
            {/* Absolute corner markers */}
            <span className="absolute top-[-2px] left-[-2px] w-2 h-2 border-t-2 border-l-2 border-[#FFCB9A]" />
            <span className="absolute top-[-2px] right-[-2px] w-2 h-2 border-t-2 border-r-2 border-[#FFCB9A]" />
            <span className="absolute bottom-[-2px] left-[-2px] w-2 h-2 border-b-2 border-l-2 border-[#FFCB9A]" />
            <span className="absolute bottom-[-2px] right-[-2px] w-2 h-2 border-b-2 border-r-2 border-[#FFCB9A]" />
            
            <Cpu className="w-8 h-8 text-[#FFCB9A] mb-2 animate-pulse" />
            <span className="text-[9px] tracking-[0.2em] text-[#D9B08C] uppercase">QUANTUM CORE</span>
            <span className="text-lg font-bold tracking-widest text-[#D1E8E2] mt-1">{progress}%</span>
          </div>

        </div>

        {/* Text Shimmer Reveal */}
        <div className="mt-8 text-center space-y-1">
          <h1 className="text-3xl sm:text-4xl font-light tracking-[0.35em] text-[#D1E8E2] uppercase">
            Logic<span className="font-bold text-[#FFCB9A]">Sphere</span>
          </h1>
          <p className="text-[9px] tracking-[0.5em] text-[#116466] uppercase font-bold animate-pulse">
            Architectural System Launch
          </p>
        </div>
      </div>

      {/* Bottom Audio / Signal Wave HUD Visualization */}
      <div className="w-full max-w-sm flex items-center justify-between gap-1.5 h-6 z-20">
        <div className="flex items-end gap-1 w-full justify-center h-full">
          {[...Array(24)].map((_, i) => {
            const h = [2, 4, 3, 5, 2, 6, 4, 3, 2, 5, 4, 6, 2, 4, 3, 5, 2, 6, 4, 3, 2, 5, 4, 6];
            return (
              <div
                key={i}
                className="w-1 bg-[#116466] transition-all duration-300"
                style={{
                  height: `${progress === 100 ? 1 : Math.max(2, Math.floor(Math.random() * h[i] * 4))}px`,
                  backgroundColor: progress === 100 ? '#FFCB9A' : '#116466'
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Footer Branding */}
      <div className="w-full flex items-center justify-between text-[9px] tracking-[0.25em] text-[#116466] z-20">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-3.5 h-3.5 text-[#FFCB9A]" />
          <span>SOC2 PRIVACY SECURE</span>
        </div>
        <button
          onClick={handleDismiss}
          className="hover:text-[#FFCB9A] text-[#D9B08C] transition-all duration-300 font-bold uppercase tracking-widest px-3.5 py-1 border border-[#116466]/40 hover:border-[#FFCB9A]/40 bg-[#242b28]"
        >
          Skip Introduction
        </button>
      </div>
    </div>
  );
};
