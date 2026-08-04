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
        {/* Glowing background halo */}
        <div className="absolute inset-0 bg-[#B88A44]/15 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* 3D Hexagonal Gold Cube Logo SVG */}
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full relative z-10 transition-transform duration-300 group-hover:scale-105"
        >
          <defs>
            <linearGradient id="goldGradientHex" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5F1EA" />
              <stop offset="40%" stopColor="#D6A55A" />
              <stop offset="100%" stopColor="#B88A44" />
            </linearGradient>
            <linearGradient id="goldGradientDark" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#B88A44" />
              <stop offset="100%" stopColor="#8A6328" />
            </linearGradient>
          </defs>

          {/* Outer Hexagon Frame */}
          <polygon
            points="50,6 88,28 88,72 50,94 12,72 12,28"
            stroke="url(#goldGradientHex)"
            strokeWidth="4"
            strokeLinejoin="round"
          />

          {/* Inner Isometric 3D Hex Cube Facets (Interlocking L & S) */}
          <path
            d="M50 16 L78 32 L50 48 L22 32 Z"
            fill="url(#goldGradientHex)"
            opacity="0.9"
          />
          <path
            d="M22 38 L46 52 L46 84 L22 70 Z"
            fill="url(#goldGradientDark)"
            opacity="0.85"
          />
          <path
            d="M54 52 L78 38 L78 70 L54 84 Z"
            fill="url(#goldGradientHex)"
            opacity="0.95"
          />

          {/* Center Dividing Lines */}
          <path
            d="M50 48 L50 94"
            stroke="#0B0D12"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M50 48 L88 28"
            stroke="#0B0D12"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M50 48 L12 28"
            stroke="#0B0D12"
            strokeWidth="3"
            strokeLinecap="round"
          />
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
