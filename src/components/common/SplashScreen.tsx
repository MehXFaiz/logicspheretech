'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Cpu, ShieldCheck, Sparkles } from 'lucide-react';

export const SplashScreen: React.FC<{ onFinish?: () => void }> = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [stepText, setStepText] = useState('Booting LogicSphere Core...');
  const [isCompleted, setIsCompleted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }

        const increment = Math.floor(Math.random() * 12) + 5;
        const next = Math.min(prev + increment, 100);

        if (next < 30) {
          setStepText('Booting LogicSphere Core...');
        } else if (next < 60) {
          setStepText('Syncing global design systems...');
        } else if (next < 85) {
          setStepText('Securing enterprise-grade infrastructure...');
        } else {
          setStepText('Ready to launch your digital transformation.');
        }

        return next;
      });
    }, 110);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100 && !isCompleted) {
      setIsCompleted(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        if (onFinish) onFinish();
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [progress, isCompleted, onFinish]);

  const handleSkip = () => {
    setProgress(100);
    setIsCompleted(true);
    setIsVisible(false);
    if (onFinish) onFinish();
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.02 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="fixed inset-0 z-[100] overflow-hidden bg-[#02030f] text-white"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),transparent_30%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(139,92,246,0.16),transparent_35%)]" />
        <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-white/5 to-transparent" />

        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-between px-6 py-8 sm:px-10">
          <div className="flex items-center justify-between text-xs text-slate-300">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-3 w-3 rounded-full bg-cyan-400 animate-pulse" />
              <span className="font-semibold tracking-[0.26em] uppercase text-slate-100">LOGICSPHERE</span>
              <span className="hidden sm:inline text-slate-500">Global studio launch</span>
            </div>

            <button
              type="button"
              onClick={handleSkip}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-slate-200 transition hover:border-cyan-400/40 hover:bg-cyan-400/10"
            >
              <span>Skip</span>
              <ArrowRight className="h-4 w-4 text-cyan-300" />
            </button>
          </div>

          <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center text-center gap-8">
            <div className="space-y-3 rounded-[2rem] border border-white/10 bg-white/5 px-8 py-10 shadow-[0_35px_90px_rgba(15,23,42,0.5)] backdrop-blur-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200 shadow-inner">
                <Sparkles className="h-4 w-4 text-cyan-300" />
                Studio Ready
              </div>
              <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
                Welcome to the new LogicSphere experience.
              </h2>
              <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                A premium launch screen built with Tailwind CSS and a refreshed UI to match your modern digital enterprise.
              </p>
            </div>

            <div className="grid w-full gap-4 sm:grid-cols-3">
              {[
                { title: 'Fast Launch', description: 'Instant load and active visual feedback.' },
                { title: 'Premium Design', description: 'Glassmorphism, gradients, and refined motion.' },
                { title: 'Secure Stack', description: 'Enterprise-grade infrastructure messaging.' },
              ].map((item) => (
                <div key={item.title} className="rounded-3xl border border-white/10 bg-[#0d1222]/90 p-5 text-left shadow-xl shadow-cyan-500/10 backdrop-blur-xl">
                  <div className="text-lg font-extrabold text-white">{item.title}</div>
                  <p className="mt-2 text-sm text-slate-400">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="w-full rounded-3xl border border-white/10 bg-white/5 p-5 shadow-inner">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.28em] text-slate-400">
                <span>{isCompleted ? 'System ready' : 'Boot sequence'}</span>
                <span className="font-semibold text-white">{progress}%</span>
              </div>
              <div className="mt-4 h-3 rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 shadow-lg shadow-cyan-400/20"
                />
              </div>
              <p className="mt-4 text-sm text-slate-300">{stepText}</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 text-slate-400 text-xs sm:flex-row sm:items-center sm:justify-between">
            <span>© 2026 LogicSphere Tech. All Rights Reserved.</span>
            <div className="flex flex-wrap items-center gap-4 text-slate-400">
              <span className="inline-flex items-center gap-2 text-cyan-300">
                <Cpu className="h-4 w-4" /> Optimized
              </span>
              <span className="inline-flex items-center gap-2 text-emerald-300">
                <ShieldCheck className="h-4 w-4" /> Secured
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
