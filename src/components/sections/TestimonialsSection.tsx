'use client';

import React, { useState } from 'react';
import { TESTIMONIALS_DATA } from '@/data';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles, ShieldCheck } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((current) => (current === 0 ? TESTIMONIALS_DATA.length - 1 : current - 1));
  };

  const nextSlide = () => {
    setActiveIndex((current) => (current === TESTIMONIALS_DATA.length - 1 ? 0 : current + 1));
  };

  return (
    <section id="testimonials" className="py-28 bg-[#F8FAFC] dark:bg-[#0F172A] relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-body">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#0F766E]/10 dark:bg-[#0F766E]/20 text-[#0F766E] dark:text-[#2DD4BF] border border-[#0F766E]/30 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" /> VERIFIED EXECUTIVE REVIEWS
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
            Client Testimonials &{' '}
            <span className="text-[#0F766E] dark:text-[#2DD4BF]">
              Architectural Success Stories
            </span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            See how our private architectural atelier and AI solutions have transformed enterprises globally.
          </p>
        </div>

        {/* Featured Testimonial Showcase Card */}
        <div className="max-w-4xl mx-auto relative mb-12">
          <div className="relative p-8 sm:p-12 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm overflow-hidden">
            <Quote className="absolute top-6 right-8 w-24 h-24 text-slate-200 dark:text-slate-800/40 pointer-events-none" />

            {/* Rating Stars & Badge */}
            <div className="flex items-center justify-between mb-8 relative z-10">
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>
              <span className="flex items-center gap-1.5 text-xs font-mono font-semibold px-3.5 py-1 rounded-full bg-[#0F766E]/10 dark:bg-[#0F766E]/20 text-[#0F766E] dark:text-[#2DD4BF] border border-[#0F766E]/30">
                <ShieldCheck className="w-4 h-4" /> Verified Architectural Sign-Off
              </span>
            </div>

            {/* Quote Content */}
            <p className="text-lg sm:text-2xl text-slate-800 dark:text-slate-100 font-medium leading-relaxed mb-10 italic relative z-10 font-heading">
              &quot;{TESTIMONIALS_DATA[activeIndex].content}&quot;
            </p>

            {/* Author Profile Footer */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 border-t border-slate-200 dark:border-slate-800 relative z-10">
              <div className="flex items-center gap-4">
                <img
                  src={TESTIMONIALS_DATA[activeIndex].avatar}
                  alt={TESTIMONIALS_DATA[activeIndex].name}
                  className="w-14 h-14 rounded-2xl object-cover border border-slate-200 dark:border-slate-700 shadow-sm"
                />
                <div>
                  <h4 className="text-lg font-bold font-heading text-slate-900 dark:text-white">
                    {TESTIMONIALS_DATA[activeIndex].name}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {TESTIMONIALS_DATA[activeIndex].role} •{' '}
                    <span className="text-[#0F766E] dark:text-[#2DD4BF] font-medium">
                      {TESTIMONIALS_DATA[activeIndex].company}
                    </span>
                  </p>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-2.5 self-end sm:self-auto">
                <button
                  onClick={prevSlide}
                  className="p-3 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-3 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail Selector Pills */}
        <div className="flex items-center justify-center gap-3">
          {TESTIMONIALS_DATA.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                activeIndex === idx
                  ? 'bg-[#0F766E] dark:bg-[#2DD4BF] w-8'
                  : 'bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
