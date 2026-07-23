'use client';

import React, { useEffect, useState } from 'react';
import { Terminal, Cpu, Shield, Zap, Sparkles, ArrowRight } from 'lucide-react';

export const SplashScreen: React.FC<{ onFinish?: () => void }> = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const logs = [
    { time: '[0.000000]', text: 'Booting Quantum Core Kernel...' },
    { time: '[0.284102]', text: 'Initializing Neural Synapse Pipeline...' },
    { time: '[0.748192]', text: 'Establishing secure tunnel to Edge Cluster...' },
    { time: '[1.109283]', text: 'Checking security protocols... SOC2 Node verified.' },
    { time: '[1.628491]', text: 'Syncing UI Matrix and design parameters...' },
    { time: '[2.204812]', text: 'Quantum Core check: 100% operational.' },
    { time: '[2.784910]', text: 'Launching Command Interface...' }
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        const step = Math.floor(Math.random() * 6) + 3;
        const next = prev + step;
        
        // Progressively trigger log messages based on loading percentage
        const targetLogIndex = Math.min(
          Math.floor((next / 100) * logs.length),
          logs.length - 1
        );
        setLogIndex(targetLogIndex);
        
        return Math.min(next, 100);
      });
    }, 80);

    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const fadeTimer = setTimeout(() => {
        setIsFadingOut(true);
      }, 800);

      const finishTimer = setTimeout(() => {
        setIsVisible(false);
        onFinish?.();
      }, 1500);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(finishTimer);
      };
    }
  }, [progress, onFinish]);

  const handleSkip = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      setIsVisible(false);
      onFinish?.();
    }, 500);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#2C3531] text-[#D1E8E2] flex flex-col items-center justify-between p-6 sm:p-10 md:p-16 font-mono select-none transition-all duration-700 ease-out ${
        isFadingOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(17,100,102,0.15),transparent_60%)] pointer-events-none" />

      {/* Top Header */}
      <div className="w-full flex items-center justify-between text-[10px] sm:text-xs tracking-[0.25em] text-[#D1E8E2]/60 z-20">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFCB9A] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFCB9A]"></span>
          </span>
          <span className="font-semibold text-[#D1E8E2] uppercase">The Quantum Core Boot</span>
        </div>
        <div className="hidden sm:flex items-center gap-6 text-[#94a3b8]">
          <span>CORE_SYS: v4.8.9</span>
          <span>NET: SECURE</span>
        </div>
      </div>

      {/* Central Interactive HUD display */}
      <div className="relative w-full max-w-2xl flex-1 flex flex-col items-center justify-center py-8 z-10">
        {/* Decorative Ring Animations */}
        <div className="absolute w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] md:w-[420px] md:h-[420px] rounded-full border border-[#116466]/20 border-dashed animate-[spin_40s_linear_infinite]" />
        <div className="absolute w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] rounded-full border border-[#D9B08C]/15 animate-[spin_20s_linear_infinite_reverse]" />
        
        {/* Core Pulsing Node */}
        <div className="relative w-40 h-40 sm:w-52 sm:h-52 bg-[#242b28]/90 border border-[#116466]/40 flex flex-col items-center justify-center p-6 text-center shadow-lg">
          {/* Corner highlights */}
          <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-[#FFCB9A]" />
          <span className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-[#FFCB9A]" />
          <span className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-[#FFCB9A]" />
          <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-[#FFCB9A]" />
          
          <Cpu className="w-10 h-10 text-[#FFCB9A] animate-pulse mb-3" />
          <span className="text-[10px] tracking-[0.2em] text-[#D9B08C] uppercase mb-1">Quantum Core</span>
          <span className="text-xl font-bold tracking-widest text-[#D1E8E2]">{progress}%</span>
        </div>

        {/* Console Logs Terminal Output */}
        <div className="w-full max-w-lg mt-8 p-4 bg-[#242b28] border border-[#116466]/40 text-left text-[10px] sm:text-xs text-[#94a3b8] space-y-1.5 h-28 overflow-hidden relative">
          <div className="absolute top-0 right-0 p-2 text-[9px] text-[#116466]/70 uppercase tracking-widest">Console Feed</div>
          
          <div className="space-y-1">
            {logs.slice(0, logIndex + 1).map((log, idx) => (
              <div key={idx} className="flex gap-2.5 font-mono items-start">
                <span className="text-[#FFCB9A] shrink-0">{log.time}</span>
                <span className={`${idx === logIndex ? 'text-[#D1E8E2] font-semibold animate-pulse' : 'text-[#94a3b8]/80'}`}>
                  {log.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Progress Bar & Skip */}
      <div className="w-full max-w-md space-y-6 z-20">
        <div className="space-y-2">
          <div className="flex justify-between items-center text-[10px] tracking-wider text-[#94a3b8]">
            <span className="uppercase">Loading Architecture Matrices</span>
            <span className="font-bold text-[#D1E8E2]">{progress}%</span>
          </div>
          {/* Loading bar container */}
          <div className="w-full h-1.5 bg-[#242b28] border border-[#116466]/35 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#116466] via-[#D9B08C] to-[#FFCB9A] transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="flex items-center justify-between text-[9px] tracking-widest text-[#116466]">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><Shield className="w-3.5 h-3.5" /> SECURE SEC_NODE</span>
            <span className="flex items-center gap-1"><Zap className="w-3.5 h-3.5" /> EDGE LAUNCH</span>
          </div>
          <button
            onClick={handleSkip}
            className="text-[#FFCB9A] hover:text-[#D1E8E2] transition-colors flex items-center gap-1 uppercase font-semibold text-[10px] tracking-widest border border-[#FFCB9A]/20 px-3 py-1 bg-[#242b28]/50"
          >
            Skip Boot
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
