'use client';

import React from 'react';
import { STATS_DATA } from '@/data';
import { Trophy, Users, Globe, Award } from 'lucide-react';

export const StatsCounters: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Trophy className="w-5 h-5 text-[#FFCB9A]" />;
      case 1:
        return <Users className="w-5 h-5 text-[#D9B08C]" />;
      case 2:
        return <Award className="w-5 h-5 text-[#D1E8E2]" />;
      case 3:
      default:
        return <Globe className="w-5 h-5 text-[#116466]" />;
    }
  };

  return (
    <section className="relative -mt-10 z-20 pb-16 font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-6 sm:p-10 shadow-sm shadow-slate-900/5 relative overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            {STATS_DATA.map((item, idx) => (
              <div
                key={item.id}
                className="flex items-center gap-4 group p-4 sm:p-0 bg-slate-50 dark:bg-slate-800/40 sm:bg-transparent rounded-2xl border border-slate-200 dark:border-slate-800 sm:border-none"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#0F766E]/10 dark:bg-[#0F766E]/20 text-[#0F766E] dark:text-[#2DD4BF] flex items-center justify-center shrink-0">
                  {getIcon(idx)}
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 dark:text-white tracking-tight flex items-baseline gap-0.5">
                    <span>{item.value}</span>
                    <span className="text-[#D4AF37] text-lg font-bold">{item.suffix}</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-medium uppercase tracking-wider mt-1">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
