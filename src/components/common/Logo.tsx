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
      <div className={`relative flex items-center justify-center ${className}`}>
        {/* Outer glowing ring */}
        <div className="absolute inset-0 rounded-full border border-[#B88A44]/40 group-hover:border-[#B88A44] transition-all duration-300 group-hover:scale-105" />
        
        {/* Inner concentric ring */}
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full p-1"
        >
          <circle cx="50" cy="50" r="42" stroke="url(#goldGradient)" strokeWidth="3" opacity="0.8" />
          <circle cx="50" cy="50" r="28" stroke="#B88A44" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
          <circle cx="50" cy="50" r="14" fill="url(#goldGradient)" />
          
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5F1EA" />
              <stop offset="50%" stopColor="#B88A44" />
              <stop offset="100%" stopColor="#D6A55A" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {showText && (
        <div className="flex flex-col leading-none">
          <span className="text-xs font-bold tracking-[0.2em] text-[#F5F1EA] group-hover:text-[#B88A44] transition-colors duration-300">
            LOGIC SPHERE
          </span>
          <span className="text-[8px] uppercase tracking-[0.35em] text-[#B9B4AA] mt-1 font-mono">
            TECHNOLOGY
          </span>
        </div>
      )}
    </div>
  );
};
