'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Shield, Sparkles } from 'lucide-react';

export const SplashScreen: React.FC<{ onFinish?: () => void }> = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Simulated load progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const step = Math.floor(Math.random() * 6) + 3;
        return Math.min(prev + step, 100);
      });
    }, 70);
    return () => clearInterval(interval);
  }, []);

  // Handle fade out and unmount sequence
  useEffect(() => {
    if (progress === 100) {
      const fadeTimer = setTimeout(() => {
        setIsFadingOut(true);
      }, 1000);

      const finishTimer = setTimeout(() => {
        setIsVisible(false);
        onFinish?.();
      }, 2000);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(finishTimer);
      };
    }
  }, [progress, onFinish]);

  // Interactive Particle Constellation System (extremely smooth 60fps canvas)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Particle[] = [];
    const maxParticles = 75;
    const connectionDist = 120;
    
    // Interactive mouse coordinates
    const mouse = { x: null as number | null, y: null as number | null, radius: 150 };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      baseColor: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
        this.radius = Math.random() * 2 + 1;
        // Alternate between peach, gold, and teal accents
        const colors = ['#FFCB9A', '#D9B08C', '#116466'];
        this.baseColor = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        // Reverse directions on boundaries
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Smooth drift movement
        this.x += this.vx;
        this.y += this.vy;

        // Mouse attraction/repulsion interaction
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            // Gently pull particles towards user cursor
            this.x += (dx / dist) * force * 1.5;
            this.y += (dy / dist) * force * 1.5;
          }
        }
      }

      draw(c: CanvasRenderingContext2D) {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.fillStyle = this.baseColor;
        c.fill();
      }
    }

    // Initialize particles array
    for (let i = 0; i < maxParticles; i++) {
      particles.push(new Particle());
    }

    // Handle mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    // Frame drawing loop
    const drawFrame = () => {
      ctx.clearRect(0, 0, width, height);

      // Render connection lines (Constellation matrix)
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.update();
        p1.draw(ctx);

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDist) {
            // Smoothly fade out connections based on distance
            const alpha = (1 - dist / connectionDist) * 0.15;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(17, 100, 102, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(drawFrame);
    };

    drawFrame();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleDismiss = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      setIsVisible(false);
      onFinish?.();
    }, 500);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#2C3531] text-[#D1E8E2] flex flex-col items-center justify-between p-8 font-mono select-none overflow-hidden transition-all duration-1000 ease-out ${
        isFadingOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Dynamic constellation canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-auto z-10" />

      {/* Cybernetic grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none z-0" />

      {/* Glowing scanning laser bar */}
      <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFCB9A]/40 to-transparent shadow-[0_0_15px_#FFCB9A] opacity-70 animate-[bounce_6s_infinite] pointer-events-none z-20" />

      {/* Top HUD Metadata Grid */}
      <div className="w-full flex items-center justify-between text-[9px] sm:text-[10px] tracking-[0.3em] text-[#D1E8E2]/50 z-20 relative">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-[#FFCB9A] inline-block animate-pulse" />
          <span>SYS.NODE: ACTIVE</span>
        </div>
        <div className="flex items-center gap-4">
          <span>LATENCY: 0.04MS</span>
          <span className="text-[#FFCB9A]">IP_HANDOVER: SUCCESS</span>
        </div>
      </div>

      {/* Central Interactive HUD Segment */}
      <div className="relative w-full max-w-xl flex-1 flex flex-col items-center justify-center z-20">
        
        {/* Layered Geometric Hexagon/Diamond HUD segments */}
        <div className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center">
          
          {/* External Bracket Ring (Counter-rotating) */}
          <div className="absolute inset-0 border border-t-[#FFCB9A] border-b-[#FFCB9A] border-l-transparent border-r-transparent rounded-full animate-[spin_12s_linear_infinite]" />
          <div className="absolute inset-6 border border-l-[#116466]/40 border-r-[#116466]/40 border-t-transparent border-b-transparent rounded-full animate-[spin_18s_linear_infinite_reverse]" />
          
          {/* Inner ring overlay */}
          <div className="absolute w-[60%] h-[60%] rounded-full border border-dashed border-[#116466]/20 animate-[spin_25s_linear_infinite]" />

          {/* Central Holographic Core */}
          <div className="relative w-36 h-36 bg-[#242b28]/95 border border-[#116466] flex flex-col items-center justify-center shadow-lg">
            {/* Absolute corner markers */}
            <span className="absolute top-[-2px] left-[-2px] w-2.5 h-2.5 border-t-2 border-l-2 border-[#FFCB9A]" />
            <span className="absolute top-[-2px] right-[-2px] w-2.5 h-2.5 border-t-2 border-r-2 border-[#FFCB9A]" />
            <span className="absolute bottom-[-2px] left-[-2px] w-2.5 h-2.5 border-b-2 border-l-2 border-[#FFCB9A]" />
            <span className="absolute bottom-[-2px] right-[-2px] w-2.5 h-2.5 border-b-2 border-r-2 border-[#FFCB9A]" />
            
            <span className="text-[9px] tracking-[0.25em] text-[#D9B08C] uppercase font-semibold">QUANTUM CORE</span>
            <span className="text-2xl font-bold tracking-widest text-[#D1E8E2] mt-1.5">{progress}%</span>
          </div>

        </div>

        {/* Text Shimmer Reveal */}
        <div className="mt-8 text-center space-y-1.5">
          <h1 className="text-3xl sm:text-4xl font-light tracking-[0.35em] text-[#D1E8E2] uppercase">
            Logic<span className="font-bold text-[#FFCB9A]">Sphere</span>
          </h1>
          <p className="text-[9px] tracking-[0.5em] text-[#116466] uppercase font-bold animate-pulse">
            Architectural System Launch
          </p>
        </div>
      </div>

      {/* Bottom Loading Line & Skip Control */}
      <div className="w-full max-w-sm space-y-6 z-20 relative">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-[9px] tracking-widest text-[#116466]">
            <span>LOADING MODULES</span>
            <span className="text-[#FFCB9A] font-bold">{progress}%</span>
          </div>
          {/* Edge loader */}
          <div className="w-full h-[2px] bg-[#242b28] border border-[#116466]/20 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#116466] via-[#FFCB9A] to-[#D9B08C] transition-all duration-150"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="flex items-center justify-between text-[9px] tracking-[0.25em] text-[#116466]">
          <div className="flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-[#FFCB9A]" />
            <span>SECURE SEC_NODE</span>
          </div>
          <button
            onClick={handleDismiss}
            className="hover:text-[#FFCB9A] text-[#D9B08C] transition-all duration-300 font-bold uppercase tracking-widest px-4 py-1.5 border border-[#116466]/40 hover:border-[#FFCB9A]/40 bg-[#242b28]/60 backdrop-blur-sm"
          >
            Skip Introduction
          </button>
        </div>
      </div>
    </div>
  );
};
