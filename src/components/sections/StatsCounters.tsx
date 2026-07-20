'use client';

import React from 'react';
import { STATS_DATA } from '@/data';
import { Trophy, Users, Globe, Award } from 'lucide-react';

export const StatsCounters: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Trophy className="w-6 h-6 text-[#06b6d4]" />;
      case 1:
        return <Users className="w-6 h-6 text-[#f59e0b]" />;
      case 2:
        return <Award className="w-6 h-6 text-[#06b6d4]" />;
      case 3:
      default:
        return <Globe className="w-6 h-6 text-[#f59e0b]" />;
    }
  };

  return (
    <section className="relative -mt-12 z-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#0f172a]/95 border border-[#06b6d4]/35 shadow-2xl backdrop-blur-2xl p-6 sm:p-10 shadow-[#06b6d4]/15 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#06b6d4]/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10 relative z-10">
            {STATS_DATA.map((item, idx) => (
              <div
                key={item.id}
                className={`flex items-center gap-4 group ${idx > 0 ? 'pt-6 sm:pt-0 sm:pl-8' : ''}`}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#06b6d4]/15 via-[#f59e0b]/10 to-transparent border border-[#06b6d4]/35 flex items-center justify-center shrink-0 shadow-inner group-hover:scale-110 transition-transform">
                  {getIcon(idx)}
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-black text-[#D1E8E2] tracking-tight flex items-baseline gap-0.5">
                    <span className="text-gradient-primary">{item.value}</span>
                    <span className="text-[#06b6d4] text-2xl font-bold">{item.suffix}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1 group-hover:text-[#D1E8E2] transition-colors">
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
