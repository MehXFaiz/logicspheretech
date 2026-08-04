'use client';

import React from 'react';
import { STATS_DATA } from '@/data';
import { Trophy, Users, Globe, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export const StatsCounters: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Trophy className="w-5 h-5 text-[#B88A44]" />;
      case 1:
        return <Users className="w-5 h-5 text-[#B88A44]" />;
      case 2:
        return <Award className="w-5 h-5 text-[#B88A44]" />;
      case 3:
      default:
        return <Globe className="w-5 h-5 text-[#B88A44]" />;
    }
  };

  return (
    <section className="relative -mt-12 z-20 pb-16 font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="luxury-card rounded-3xl p-6 sm:p-10 border border-[#B88A44]/20 shadow-2xl relative overflow-hidden bg-[#1B2330]"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            {STATS_DATA.map((item, idx) => (
              <div
                key={item.id}
                className="flex items-center gap-4 p-4 sm:p-0 bg-[#252D3D]/50 sm:bg-transparent rounded-2xl border border-[#B88A44]/12 sm:border-none"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#252D3D] text-[#B88A44] border border-[#B88A44]/20 flex items-center justify-center shrink-0">
                  {getIcon(idx)}
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-heading font-extrabold text-[#F5F1EA] tracking-tight flex items-baseline gap-0.5">
                    <span>{item.value}</span>
                    <span className="text-[#B88A44] text-lg font-bold">{item.suffix}</span>
                  </div>
                  <p className="text-[11px] text-[#B9B4AA] font-light uppercase tracking-wider mt-0.5">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
