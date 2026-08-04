'use client';

import React from 'react';

export const BackgroundEffects: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Luxury Subtle Gold Glow Orbs */}
      <div className="absolute top-[-10%] left-[15%] w-[600px] h-[600px] bg-[#B88A44]/[0.06] rounded-full blur-[140px] animate-pulse-glow transform-gpu" />
      <div 
        className="absolute top-[40%] right-[-5%] w-[650px] h-[650px] bg-[#B88A44]/[0.05] rounded-full blur-[150px] animate-pulse-glow transform-gpu"
        style={{ animationDelay: '2s' }}
      />
      <div 
        className="absolute bottom-[-10%] left-[30%] w-[700px] h-[700px] bg-[#B88A44]/[0.06] rounded-full blur-[160px] animate-pulse-glow transform-gpu"
        style={{ animationDelay: '4s' }}
      />

      {/* Floating Glowing Luxury Dust Particles */}
      <div className="absolute top-[20%] left-[10%] w-1.5 h-1.5 bg-[#B88A44] rounded-full blur-[0.5px] opacity-40 animate-float-slow" />
      <div className="absolute top-[35%] right-[15%] w-2 h-2 bg-[#D6A55A] rounded-full blur-[0.5px] opacity-30 animate-float-slow" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-[65%] left-[20%] w-1.5 h-1.5 bg-[#B88A44] rounded-full blur-[0.5px] opacity-40 animate-float-slow" style={{ animationDelay: '3s' }} />
      <div className="absolute top-[80%] right-[25%] w-2 h-2 bg-[#B88A44] rounded-full blur-[0.5px] opacity-30 animate-float-slow" style={{ animationDelay: '4.5s' }} />
    </div>
  );
};
