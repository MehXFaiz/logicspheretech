'use client';

import React, { useEffect, useState } from 'react';

export const SplashScreen: React.FC<{ onFinish?: () => void }> = ({ onFinish }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Automatically start fading out after 2.5 seconds
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 2800);

    // Completely unmount/remove the splash screen after 3.5 seconds
    const removeTimer = setTimeout(() => {
      setIsVisible(false);
      if (onFinish) onFinish();
    }, 3500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [onFinish]);

  const handleDismiss = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      setIsVisible(false);
      if (onFinish) onFinish();
    }, 500);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-[#2C3531] font-mono select-none transition-all duration-700 ease-out ${
        isFadingOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background Grid Pattern & Subtle Glow */}
      <div className="absolute inset-0 pointer-events-none bg-grid-pattern opacity-10" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_rgba(17,100,102,0.15),transparent_60%)]" />

      {/* Outer Bracket Overlays */}
      <div className="absolute top-10 left-10 w-12 h-12 border-t border-l border-[#116466]" />
      <div className="absolute top-10 right-10 w-12 h-12 border-t border-r border-[#116466]" />
      <div className="absolute bottom-10 left-10 w-12 h-12 border-b border-l border-[#116466]" />
      <div className="absolute bottom-10 right-10 w-12 h-12 border-b border-r border-[#116466]" />

      {/* Header Info Bar */}
      <div className="absolute top-0 inset-x-0 px-8 py-10 flex items-center justify-between text-[10px] tracking-[0.25em] text-[#D1E8E2]/60 z-20">
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 bg-[#116466] border border-[#FFCB9A] flex items-center justify-center">
            <span className="w-1.5 h-1.5 bg-[#D1E8E2] animate-pulse" />
          </span>
          <span className="font-semibold text-[#D1E8E2]">LOGICSPHERE.SECURE.BOOT</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <span>SLA CHECK: OK</span>
          <span>CDN STATUS: STABLE</span>
        </div>
      </div>

      {/* Central Geometric Sphere & Title Block */}
      <div className="relative w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] md:w-[500px] md:h-[500px] flex items-center justify-center z-10">
        
        {/* Outer rotating tech ring */}
        <div className="absolute inset-0 rounded-full border border-[#116466]/40 border-dashed animate-[spin_40s_linear_infinite]" />
        
        {/* Main geometric framing ring */}
        <div className="absolute inset-4 rounded-full border border-[#116466] flex items-center justify-center">
          
          {/* Inner dark matte sphere body */}
          <div className="relative w-[75%] h-[75%] rounded-full bg-[#242b28] border border-[#116466] shadow-[inset_0_0_30px_rgba(0,0,0,0.6)] flex items-center justify-center overflow-hidden">
            
            {/* Wireframe grids */}
            <div className="absolute inset-0 opacity-40">
              <div className="absolute w-full h-[1px] bg-[#116466] top-1/2 -translate-y-1/2" />
              <div className="absolute h-full w-[1px] bg-[#116466] left-1/2 -translate-x-1/2" />
              <div className="absolute inset-0 border border-[#116466]/40 rotate-45" />
              <div className="absolute inset-8 border border-[#116466]/20 rotate-12" />
            </div>

            {/* Glowing Core */}
            <div className="w-6 h-6 bg-[#FFCB9A] rounded-none animate-pulse-glow" />
          </div>
        </div>

        {/* Central UI overlays (Mimicking the screenshot layout) */}
        <div className="absolute inset-x-[-10px] sm:inset-x-[-40px] md:inset-x-[-80px] flex flex-col md:flex-row items-center justify-between pointer-events-none z-20">
          
          {/* Left Title block */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left mt-8 md:mt-0">
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#D9B08C] mb-4 flex items-center gap-2">
              <span className="w-4 h-[1px] bg-[#D9B08C]" /> Welcome
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-[0.25em] text-[#116466]">
              LOGICSPHERE
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-light tracking-[0.35em] text-[#D1E8E2] mt-1">
              HAS ARRIVED
            </h2>
          </div>

          {/* Right Action block */}
          <div className="mt-8 md:mt-0">
            <button
              onClick={handleDismiss}
              className="pointer-events-auto relative px-8 py-3.5 bg-[#2C3531] border border-[#116466] hover:border-[#FFCB9A] hover:bg-[#116466]/20 transition-all duration-300 group"
            >
              {/* Corner brackets */}
              <span className="absolute top-0 left-0 w-1 h-1 bg-[#D1E8E2]" />
              <span className="absolute top-0 right-0 w-1 h-1 bg-[#D1E8E2]" />
              <span className="absolute bottom-0 left-0 w-1 h-1 bg-[#D1E8E2]" />
              <span className="absolute bottom-0 right-0 w-1 h-1 bg-[#D1E8E2]" />
              
              <span className="text-[10px] tracking-[0.4em] text-[#D1E8E2] group-hover:text-[#FFCB9A]">
                DISCOVER
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Info bar */}
      <div className="absolute bottom-0 inset-x-0 px-8 py-10 flex items-center justify-between text-[9px] tracking-[0.2em] text-[#116466] z-20">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 bg-[#FFCB9A]" />
          <span>ESTABLISHED 2026</span>
        </div>
        <div className="flex items-center gap-6">
          <span>PORTAL VERIFIED</span>
          <span className="text-[#FFCB9A]">SECURE</span>
        </div>
      </div>
    </div>
  );
};
