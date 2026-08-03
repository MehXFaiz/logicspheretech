'use client';

import React from 'react';

export const BackgroundEffects: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Dynamic Animated Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 animate-grid-scroll transform-gpu" />

      {/* GPU-Accelerated Floating Ambient Glow Orbs */}
      <div className="absolute top-[-10%] left-[15%] w-[500px] h-[500px] bg-[#116466]/15 rounded-full blur-[120px] animate-pulse-glow transform-gpu" />
      <div 
        className="absolute top-[40%] right-[-5%] w-[550px] h-[550px] bg-[#D9B08C]/10 rounded-full blur-[130px] animate-pulse-glow transform-gpu"
        style={{ animationDelay: '2s' }}
      />
      <div 
        className="absolute bottom-[-10%] left-[30%] w-[600px] h-[600px] bg-[#FFCB9A]/10 rounded-full blur-[140px] animate-pulse-glow transform-gpu"
        style={{ animationDelay: '4s' }}
      />

      {/* Floating Glowing Particle Dots */}
      <div className="absolute top-[20%] left-[10%] w-2 h-2 bg-[#FFCB9A] rounded-full blur-[1px] animate-float opacity-60" />
      <div className="absolute top-[35%] right-[15%] w-2.5 h-2.5 bg-[#116466] rounded-full blur-[1px] animate-float opacity-70" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-[65%] left-[20%] w-2 h-2 bg-[#D9B08C] rounded-full blur-[1px] animate-float opacity-50" style={{ animationDelay: '3s' }} />
      <div className="absolute top-[80%] right-[25%] w-3 h-3 bg-[#116466] rounded-full blur-[1px] animate-float opacity-60" style={{ animationDelay: '4.5s' }} />
    </div>
  );
};
