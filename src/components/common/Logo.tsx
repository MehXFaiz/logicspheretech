'use client';

import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  themeColor?: 'default' | 'light' | 'gold';
}

export const Logo: React.FC<LogoProps> = ({ 
  className = 'h-10 w-10', 
  showText = false,
  themeColor = 'default'
}) => {
  // Theme color mapping
  const leftColor = themeColor === 'gold' ? '#D9B08C' : '#116466'; // Teal or Muted Gold
  const rightColor = themeColor === 'gold' ? '#FFCB9A' : '#FFCB9A'; // Peach/Gold accent

  return (
    <div className="flex items-center gap-3">
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        {/* Left 'L' Shape Polygon */}
        <path
          d="M32 22 L43 22 L43 50 L52 56 L45 70 L32 60 Z"
          fill={leftColor}
          className="transition-colors duration-300"
        />

        {/* Right 'S' Shape Polygon */}
        <path
          d="M48 71 L75 52 L75 32 L55 46 L55 33 L67 24 L60 21 L48 30 L48 48 L63 38 L63 46 Z"
          fill={rightColor}
          className="transition-colors duration-300"
        />

        {/* Pixel fragments floating on top right */}
        <rect x="70" y="16" width="4" height="4" fill={rightColor} className="opacity-80" />
        <rect x="76" y="20" width="4" height="4" fill={rightColor} className="opacity-60" />
        <rect x="80" y="14" width="4" height="4" fill={rightColor} className="opacity-90" />
        <rect x="84" y="24" width="4" height="4" fill={rightColor} className="opacity-50" />
        <rect x="78" y="28" width="4" height="4" fill={rightColor} className="opacity-70" />
      </svg>
      
      {showText && (
        <div className="flex flex-col leading-none font-mono">
          <span className="text-sm font-bold tracking-[0.25em] text-[#D1E8E2]">LOGICSPHERE</span>
          <span className="text-[9px] uppercase tracking-[0.3em] text-[#D9B08C] mt-0.5">TECH STUDIO</span>
        </div>
      )}
    </div>
  );
};
