'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const SplashScreen: React.FC<{ onFinish?: () => void }> = ({ onFinish }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [phase, setPhase] = useState<'booting' | 'arrived'>('booting');

  useEffect(() => {
    const timer = setTimeout(() => {
      setPhase('arrived');
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleDiscover = () => {
    setIsVisible(false);
    if (onFinish) setTimeout(onFinish, 800);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-[#2C3531] text-[#D1E8E2] font-mono selection:bg-[#116466] selection:text-[#D1E8E2]"
      >
        {/* Background ambient lighting */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_rgba(17,100,102,0.15),transparent_70%)]" />
        </div>

        {/* Top Navbar Simulation */}
        <div className="absolute top-0 inset-x-0 p-8 flex items-center justify-between text-xs tracking-widest text-[#D1E8E2]/60 z-20">
          <div className="flex items-center gap-3">
            <span className="w-5 h-5 flex flex-wrap gap-[1px]">
              {[...Array(9)].map((_, i) => (
                <span key={i} className="w-[5px] h-[5px] bg-[#116466] rounded-sm" />
              ))}
            </span>
            <span>LOGICSPHERE</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#D1E8E2] cursor-pointer transition-colors">SHOP NOW</span>
            <div className="w-6 h-4 flex flex-col justify-between cursor-pointer group">
              <span className="w-full h-[1px] bg-[#D1E8E2]/60 group-hover:bg-[#D1E8E2]" />
              <span className="w-full h-[1px] bg-[#D1E8E2]/60 group-hover:bg-[#D1E8E2]" />
              <span className="w-full h-[1px] bg-[#D1E8E2]/60 group-hover:bg-[#D1E8E2]" />
            </div>
          </div>
        </div>

        {/* Central Geometric Sphere Composition */}
        <div className="relative w-[600px] h-[600px] flex items-center justify-center z-10">
          {/* Outer glowing halo/atmosphere */}
          <div className="absolute inset-0 rounded-full border border-[#116466]/30 shadow-[0_0_100px_rgba(17,100,102,0.2)] animate-[spin_30s_linear_infinite]" />
          <div className="absolute inset-4 rounded-full border border-[#116466]/20 bg-[radial-gradient(circle_at_center,_transparent_30%,_rgba(44,53,49,0.8)_100%)]" />
          
          {/* Inner dark sphere body */}
          <div className="absolute w-[400px] h-[400px] rounded-full bg-[#242b28] shadow-[inset_0_-40px_100px_rgba(0,0,0,0.8)] overflow-hidden">
            {/* Geometric wireframe lines */}
            <div className="absolute inset-0 flex items-center justify-center opacity-80">
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#116466] to-transparent rotate-45 shadow-[0_0_15px_rgba(17,100,102,1)]" />
              <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[#FFCB9A] to-transparent -rotate-45 shadow-[0_0_15px_rgba(255,203,154,1)]" />
              <div className="absolute w-[1px] h-full bg-gradient-to-b from-transparent via-[#D9B08C] to-transparent shadow-[0_0_15px_rgba(217,176,140,1)]" />
              <div className="absolute w-[1px] h-full bg-gradient-to-b from-transparent via-[#D1E8E2] to-transparent rotate-90 shadow-[0_0_15px_rgba(209,232,226,1)]" />
            </div>
            {/* Hexagonal grid overlay to simulate the facets */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTIwIDBMNDAgMTBMMzAgMzBMMTAgMzBMMCAxMEwyMCAweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDE3LCAxMDAsIDEwMiwgMC4xKSIvPjwvc3ZnPg==')] opacity-40 mix-blend-screen" />
          </div>

          {/* Central Bright Core Glow */}
          <div className="absolute w-12 h-12 bg-white rounded-full blur-[20px] mix-blend-overlay opacity-80" />
          
          {/* Light Rays extending outwards */}
          <div className="absolute inset-[-200px] flex items-center justify-center pointer-events-none opacity-60">
            <div className="w-[120%] h-[2px] bg-gradient-to-r from-transparent via-[#116466] to-transparent rotate-12 blur-[1px]" />
            <div className="absolute w-[120%] h-[2px] bg-gradient-to-r from-transparent via-[#116466] to-transparent -rotate-12 blur-[1px]" />
          </div>

          {/* Foreground UI Overlay specific to the design */}
          <div className="absolute inset-[-100px] flex items-center justify-between pointer-events-none z-20">
            {/* Left Side Typography */}
            <div className="w-1/3 flex flex-col items-start pt-20">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#D9B08C] mb-6 flex items-center gap-2">
                <span className="w-4 h-[1px] bg-[#D9B08C]" /> Welcome
              </span>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: phase === 'arrived' ? 1 : 0.5, y: 0 }}
                className="flex flex-col gap-3"
              >
                <h1 className="text-4xl md:text-5xl font-light tracking-[0.3em] text-[#116466]">
                  LOGICSPHERE
                </h1>
                <h2 className="text-3xl md:text-4xl font-light tracking-[0.4em] text-[#D1E8E2]">
                  HAS
                </h2>
                <h2 className="text-3xl md:text-4xl font-light tracking-[0.4em] text-[#D1E8E2]">
                  ARRIVED
                </h2>
              </motion.div>
              {/* Corner brackets */}
              <div className="absolute top-[20%] left-0 w-8 h-8 border-t border-l border-[#116466]/40 opacity-50" />
              <div className="absolute bottom-[20%] left-0 w-8 h-8 border-b border-l border-[#116466]/40 opacity-50" />
            </div>

            {/* Right Side Discover Button */}
            <div className="w-1/3 flex justify-end">
              <button 
                onClick={handleDiscover}
                className="pointer-events-auto relative group flex items-center justify-center px-12 py-4 border border-[#116466] bg-transparent overflow-hidden transition-all duration-500 hover:border-[#D1E8E2] hover:bg-[#116466]/10"
              >
                {/* Corner targets for button */}
                <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-[#D1E8E2]" />
                <span className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-[#D1E8E2]" />
                <span className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-[#D1E8E2]" />
                <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-[#D1E8E2]" />
                
                <span className="text-[11px] font-medium tracking-[0.4em] text-[#D1E8E2] group-hover:text-white transition-colors">
                  DISCOVER
                </span>
                
                {/* Scanning line effect */}
                <span className="absolute top-0 bottom-0 left-[-10%] w-[120%] bg-gradient-to-r from-transparent via-[#116466]/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar Simulation */}
        <div className="absolute bottom-0 right-0 p-8 flex items-center gap-6 text-[10px] tracking-widest text-[#116466] z-20">
          <span className="cursor-pointer hover:text-[#D1E8E2] transition-colors">MORE</span>
          <span className="cursor-pointer hover:text-[#D1E8E2] transition-colors">CONTACT</span>
          <div className="flex items-center gap-3 opacity-60">
            <span className="w-3 h-3 border border-[#116466] rounded-sm" />
            <span className="w-3 h-3 border border-[#116466] rounded-sm" />
            <span className="w-3 h-3 border border-[#116466] rounded-sm" />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
