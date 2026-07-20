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
    <section className="relative -mt-12 z-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-none bg-[#242b28] border border-[#116466] p-6 sm:p-10 shadow-lg relative overflow-hidden">
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#116466]/40 relative z-10 font-mono">
            {STATS_DATA.map((item, idx) => (
              <div
                key={item.id}
                className={`flex items-center gap-4 group ${idx > 0 ? 'pt-6 sm:pt-0 sm:pl-8' : ''}`}
              >
                <div className="w-12 h-12 rounded-none bg-[#2C3531] border border-[#116466]/65 flex items-center justify-center shrink-0 shadow-inner group-hover:border-[#FFCB9A] transition-colors">
                  {getIcon(idx)}
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-[#D1E8E2] tracking-tight flex items-baseline gap-0.5">
                    <span className="text-gradient-primary">{item.value}</span>
                    <span className="text-[#FFCB9A] text-lg font-bold">{item.suffix}</span>
                  </div>
                  <p className="text-[10px] sm:text-xs text-slate-300 font-semibold uppercase tracking-wider mt-1">
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
