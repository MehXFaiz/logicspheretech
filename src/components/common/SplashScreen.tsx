'use client';

import React, { useEffect, useState } from 'react';

export const SplashScreen: React.FC<{ onFinish?: () => void }> = ({ onFinish }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const dismiss = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      setIsVisible(false);
      if (onFinish) onFinish();
    }, 800); // fade out duration
  };

  useEffect(() => {
    // Auto dismiss after 3 seconds
    const timer = setTimeout(() => {
      dismiss();
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-[#2C3531] font-mono transition-opacity duration-700 ease-out ${
        isFadingOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background ambient lighting (Optimized for performance, no huge blurs) */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_rgba(17,100,102,0.2),transparent_60%)]" />

      {/* Top Navbar Simulation */}
      <div className="absolute top-0 inset-x-0 px-6 py-8 sm:px-10 flex items-center justify-between text-[10px] sm:text-xs tracking-widest text-[#D1E8E2]/60 z-20">
        <div className="flex items-center gap-3">
          <span className="w-5 h-5 flex flex-wrap gap-[1px]">
            {[...Array(9)].map((_, i) => (
              <span key={i} className="w-[4px] h-[4px] sm:w-[5px] sm:h-[5px] bg-[#116466] rounded-sm opacity-80" />
            ))}
          </span>
          <span className="tracking-[0.2em] font-medium text-[#D1E8E2]">LOGICSPHERE</span>
        </div>
        <div className="hidden sm:flex items-center gap-6">
          <span className="hover:text-[#D1E8E2] cursor-pointer transition-colors">SHOP NOW</span>
          <div className="w-6 h-4 flex flex-col justify-between cursor-pointer group">
            <span className="w-full h-[1px] bg-[#D1E8E2]/60 group-hover:bg-[#D1E8E2]" />
            <span className="w-full h-[1px] bg-[#D1E8E2]/60 group-hover:bg-[#D1E8E2]" />
            <span className="w-full h-[1px] bg-[#D1E8E2]/60 group-hover:bg-[#D1E8E2]" />
          </div>
        </div>
      </div>

      {/* Central Geometric Sphere Composition (Performance Optimized) */}
      <div className="relative w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] md:w-[600px] md:h-[600px] flex items-center justify-center z-10 scale-90 sm:scale-100">
        
        {/* Outer glowing halo */}
        <div className="absolute inset-0 rounded-full border border-[#116466]/20 shadow-[0_0_40px_rgba(17,100,102,0.15)] animate-[spin_20s_linear_infinite]" />
        
        {/* Inner dark sphere body */}
        <div className="absolute w-[65%] h-[65%] rounded-full bg-gradient-to-br from-[#242b28] to-[#1c221f] shadow-[inset_0_-20px_40px_rgba(0,0,0,0.6)] overflow-hidden border border-[#116466]/10">
          {/* Geometric wireframe lines */}
          <div className="absolute inset-0 flex items-center justify-center opacity-80">
            <div className="w-[150%] h-[1px] bg-gradient-to-r from-transparent via-[#116466] to-transparent rotate-45 shadow-[0_0_8px_rgba(17,100,102,0.8)]" />
            <div className="absolute w-[150%] h-[1px] bg-gradient-to-r from-transparent via-[#FFCB9A] to-transparent -rotate-45 shadow-[0_0_8px_rgba(255,203,154,0.6)]" />
            <div className="absolute w-[1px] h-[150%] bg-gradient-to-b from-transparent via-[#D9B08C] to-transparent shadow-[0_0_8px_rgba(217,176,140,0.6)]" />
            <div className="absolute w-[1px] h-[150%] bg-gradient-to-b from-transparent via-[#D1E8E2] to-transparent rotate-90 shadow-[0_0_8px_rgba(209,232,226,0.5)]" />
          </div>
          {/* Hexagonal grid overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTIwIDBMNDAgMTBMMzAgMzBMMTAgMzBMMCAxMEwyMCAweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDE3LCAxMDAsIDEwMiwgMC4xKSIvPjwvc3ZnPg==')] opacity-30 mix-blend-screen" />
        </div>

        {/* Light Rays extending outwards */}
        <div className="absolute inset-[-100px] flex items-center justify-center pointer-events-none opacity-40">
          <div className="w-[120%] h-[1px] bg-gradient-to-r from-transparent via-[#116466] to-transparent rotate-[15deg]" />
          <div className="absolute w-[120%] h-[1px] bg-gradient-to-r from-transparent via-[#116466] to-transparent -rotate-[15deg]" />
        </div>

        {/* Foreground UI Overlay */}
        <div className="absolute inset-x-[-10%] sm:inset-x-[-50px] md:inset-x-[-100px] flex flex-col md:flex-row items-center justify-between pointer-events-none z-20 h-full">
          
          {/* Left Side Typography */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center pt-8 md:pt-0">
            <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.4em] text-[#D9B08C] mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
              <span className="w-4 md:w-6 h-[1px] bg-[#D9B08C]" /> Welcome
            </span>
            <div className="flex flex-col gap-1 md:gap-2 text-center md:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-[0.2em] md:tracking-[0.3em] text-[#116466]">
                LOGICSPHERE
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light tracking-[0.3em] md:tracking-[0.4em] text-[#D1E8E2]">
                HAS
              </h2>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light tracking-[0.3em] md:tracking-[0.4em] text-[#D1E8E2]">
                ARRIVED
              </h2>
            </div>
          </div>

          {/* Right Side Discover Button */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-12 md:mt-0">
            <button 
              onClick={dismiss}
              className="pointer-events-auto relative group flex items-center justify-center px-8 md:px-12 py-3 md:py-4 border border-[#116466]/40 bg-[#2C3531]/50 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-[#D1E8E2]/60 hover:bg-[#116466]/20"
            >
              {/* Corner brackets for button */}
              <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-[#D1E8E2]/60" />
              <span className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-[#D1E8E2]/60" />
              <span className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-[#D1E8E2]/60" />
              <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-[#D1E8E2]/60" />
              
              <span className="text-[10px] md:text-[11px] font-medium tracking-[0.3em] md:tracking-[0.4em] text-[#D1E8E2] group-hover:text-white transition-colors">
                DISCOVER
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar Simulation */}
      <div className="absolute bottom-0 right-0 p-6 sm:p-8 flex items-center gap-4 sm:gap-6 text-[9px] sm:text-[10px] tracking-widest text-[#116466] z-20">
        <span className="cursor-pointer hover:text-[#D1E8E2] transition-colors">MORE</span>
        <span className="cursor-pointer hover:text-[#D1E8E2] transition-colors">CONTACT</span>
        <div className="hidden sm:flex items-center gap-3 opacity-60">
          <span className="w-3 h-3 border border-[#116466] rounded-sm" />
          <span className="w-3 h-3 border border-[#116466] rounded-sm" />
        </div>
      </div>
    </div>
  );
};
