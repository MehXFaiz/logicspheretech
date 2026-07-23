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
    const maxParticles = 40; // Lightweight count for background
    const connectionDist = 140;

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
        this.vx = (Math.random() - 0.5) * 0.4; // Very slow drift
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 1.5 + 0.5;
        // Theme accent colors
        const colors = ['rgba(255, 203, 154, 0.3)', 'rgba(217, 176, 140, 0.2)', 'rgba(17, 100, 102, 0.4)'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
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
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

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
            const alpha = (1 - dist / connectionDist) * 0.08; // subtle lines
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(17, 100, 102, ${alpha})`;
            ctx.lineWidth = 0.6;
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
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
      {/* 1. Scrolling Tech Matrix Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.06] animate-[spin_180s_linear_infinite]" />

      {/* 2. Abstract High-Tech Blueprint Image Layer (Slow pulsating zoom) */}
      <div 
        className="absolute inset-0 bg-[url('/tech_blueprint_bg.png')] bg-cover bg-center opacity-[0.05] mix-blend-screen animate-[pulse_12s_ease-in-out_infinite]" 
        style={{ animationDelay: '2s' }}
      />
      <div 
        className="absolute inset-0 bg-[url('/matrix_grid_bg.png')] bg-cover bg-center opacity-[0.04] mix-blend-screen animate-[pulse_18s_ease-in-out_infinite]" 
      />

      {/* 3. Drifting Ambient Orbs (Nebula/Glow effect) */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#116466]/10 rounded-full blur-[120px] animate-[pulse_10s_ease-in-out_infinite]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-[#D9B08C]/5 rounded-full blur-[120px] animate-[pulse_14s_ease-in-out_infinite]" style={{ animationDelay: '4s' }} />

      {/* 4. Constellation Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />
    </div>
  );
};
