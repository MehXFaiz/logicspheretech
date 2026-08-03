'use client';

import React from 'react';
import { STATS_DATA } from '@/data';
import { Trophy, Users, Globe, Award } from 'lucide-react';

export const StatsCounters: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Trophy className="w-5 h-5 text-[#C6A15B]" />;
      case 1:
        return <Users className="w-5 h-5 text-[#C6A15B]" />;
      case 2:
        return <Award className="w-5 h-5 text-[#C6A15B]" />;
      case 3:
      default:
        return <Globe className="w-5 h-5 text-[#C6A15B]" />;
    }
  };

  return (
    <section className="relative -mt-10 z-20 pb-16 font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#1F2229] border border-white/10 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            {STATS_DATA.map((item, idx) => (
              <div
                key={item.id}
                className="flex items-center gap-4 group p-4 sm:p-0 bg-[#2A2E36]/40 sm:bg-transparent rounded-2xl border border-white/10 sm:border-none"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#2A2E36] text-[#C6A15B] border border-white/10 flex items-center justify-center shrink-0">
                  {getIcon(idx)}
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold font-heading text-[#F4F4F5] tracking-tight flex items-baseline gap-0.5">
                    <span>{item.value}</span>
                    <span className="text-[#C6A15B] text-lg font-bold">{item.suffix}</span>
                  </div>
                  <p className="text-xs text-[#A1A1AA] font-medium uppercase tracking-wider mt-1">
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
