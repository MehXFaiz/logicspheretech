'use client';

import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = 'h-9 w-9', 
  showText = true,
}) => {
  return (
    <div className="flex items-center gap-3 group cursor-pointer">
      <div className={`relative flex items-center justify-center shrink-0 ${className}`}>
        {/* Subtle Ambient Gold Glow behind emblem */}
        <div className="absolute inset-0 bg-[#B88A44]/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* User Official LOGICSPHERE Logo Emblem SVG */}
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full relative z-10 transition-transform duration-300 group-hover:scale-105"
        >
          <defs>
            <linearGradient id="logoGoldLeft" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5F1EA" />
              <stop offset="60%" stopColor="#B88A44" />
              <stop offset="100%" stopColor="#8A6328" />
            </linearGradient>

            <linearGradient id="logoGoldRight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5F1EA" />
              <stop offset="40%" stopColor="#D6A55A" />
              <stop offset="100%" stopColor="#B88A44" />
            </linearGradient>
          </defs>

          {/* Left 'L' Facet */}
          <path
            d="M26 20 L42 20 L42 50 L52 56 L44 70 L26 58 Z"
            fill="url(#logoGoldLeft)"
            className="transition-all duration-300"
          />

          {/* Right 'S' Interlocking Ribbon Facet */}
          <path
            d="M46 70 L74 50 L74 30 L52 44 L52 32 L66 22 L58 18 L46 26 L46 46 L62 34 L62 44 Z"
            fill="url(#logoGoldRight)"
            className="transition-all duration-300"
          />

          {/* Floating Pixel Squares at Top Right Tip */}
          <rect x="68" y="14" width="4" height="4" fill="#F5F1EA" className="opacity-90 animate-pulse" />
          <rect x="74" y="18" width="4" height="4" fill="#D6A55A" className="opacity-80" />
          <rect x="78" y="12" width="4" height="4" fill="#B88A44" className="opacity-95 animate-pulse" style={{ animationDelay: '0.5s' }} />
          <rect x="82" y="22" width="4" height="4" fill="#D6A55A" className="opacity-70" />
          <rect x="76" y="26" width="4" height="4" fill="#F5F1EA" className="opacity-85" />
        </svg>
      </div>
      
      {showText && (
        <div className="flex flex-col leading-none font-heading">
          <div className="flex items-center tracking-[0.15em] text-xs font-extrabold text-[#F5F1EA] group-hover:text-[#B88A44] transition-colors duration-300">
            <span>LOGIC</span>
            <span className="text-[#B88A44]">SPHERE</span>
          </div>
          <div className="flex items-center gap-1 mt-1">
            <span className="h-[1px] w-2 bg-[#B88A44]/40" />
            <span className="text-[8px] uppercase tracking-[0.35em] text-[#B9B4AA] font-mono">
              TECH
            </span>
            <span className="h-[1px] w-2 bg-[#B88A44]/40" />
          </div>
        </div>
      )}
    </div>
  );
};
