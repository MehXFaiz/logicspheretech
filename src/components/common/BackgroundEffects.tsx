'use client';

import React, { useEffect, useRef } from 'react';

export const BackgroundEffects: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Particle[] = [];
    const maxParticles = 60; // Slightly richer particle count
    const connectionDist = 120;
    const mouse = { x: -1000, y: -1000, radius: 180 };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5; // Very slow drift
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 0.5;
        // Theme accent colors
        const colors = [
          'rgba(255, 203, 154, 0.4)', // light peach
          'rgba(217, 176, 140, 0.3)', // gold/tan
          'rgba(17, 100, 102, 0.5)',  // deep teal
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        // Slow bounce on boundaries
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
        
        // Minor mouse influence (slight push away)
        if (mouse.x > -1000) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            this.x += (dx / dist) * force * 1.5;
            this.y += (dy / dist) * force * 1.5;
          }
        }

        this.x += this.vx;
        this.y += this.vy;
      }

      draw(c: CanvasRenderingContext2D) {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.fillStyle = this.color;
        c.fill();
      }
    }

    for (let i = 0; i < maxParticles; i++) {
      particles.push(new Particle());
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const drawFrame = () => {
      ctx.clearRect(0, 0, width, height);

      // Render drifting constellation
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
            const alpha = (1 - dist / connectionDist) * 0.12; // subtle connections
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(17, 100, 102, ${alpha})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      // Draw subtle interactive connections to mouse cursor
      if (mouse.x > -1000) {
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const alpha = (1 - dist / mouse.radius) * 0.15;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(255, 203, 154, ${alpha})`;
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
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden z-0 bg-[#2C3531]">
      {/* 1. Slow-Scrolling Digital Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.06] animate-grid-scroll" />

      {/* 2. Slow-Rotating Digital Radial Grid for layered depth */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] animate-[spin_300s_linear_infinite] scale-150" />

      {/* 3. Glowing Ambient Orbs (Float/Nebula effects) */}
      <div 
        className="absolute top-[-10%] left-[-10%] w-[55vw] h-[55vw] bg-[#116466]/15 rounded-full blur-[130px] animate-[pulse_10s_ease-in-out_infinite]" 
      />
      <div 
        className="absolute bottom-[-10%] right-[-10%] w-[55vw] h-[55vw] bg-[#D9B08C]/8 rounded-full blur-[130px] animate-[pulse_14s_ease-in-out_infinite]" 
        style={{ animationDelay: '4s' }} 
      />
      <div 
        className="absolute top-[40%] left-[30%] w-[35vw] h-[35vw] bg-[#FFCB9A]/5 rounded-full blur-[140px] animate-[pulse_12s_ease-in-out_infinite]" 
        style={{ animationDelay: '2s' }} 
      />

      {/* 4. Constellation Interactive Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-70" />
    </div>
  );
};
