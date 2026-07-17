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
    <section id="testimonials" className="py-28 bg-[#050608] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/35 mb-3">
            <Sparkles className="w-3.5 h-3.5" /> VERIFIED EXECUTIVE REVIEWS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Client Testimonials &{' '}
            <span className="text-gradient-gold">
              Architectural Success Stories
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            See how our private architectural atelier and AI solutions have transformed enterprises globally.
          </p>
        </div>

        {/* Featured Testimonial Showcase Card */}
        <div className="max-w-4xl mx-auto relative mb-12">
          <div className="relative p-8 sm:p-14 rounded-3xl bg-[#0B0E14] border border-[#D4AF37]/40 shadow-2xl overflow-hidden backdrop-blur-2xl shadow-[#D4AF37]/15">
            <Quote className="absolute top-6 right-8 w-24 h-24 text-[#D4AF37]/10 pointer-events-none" />

            {/* Rating Stars & Badge */}
            <div className="flex items-center justify-between mb-8 relative z-10">
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>
              <span className="flex items-center gap-1.5 text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/40">
                <ShieldCheck className="w-4 h-4" /> Verified Architectural Sign-Off
              </span>
            </div>

            {/* Quote Content */}
            <p className="text-lg sm:text-2xl text-slate-100 font-semibold leading-relaxed mb-10 italic relative z-10">
              &quot;{TESTIMONIALS_DATA[activeIndex].content}&quot;
            </p>

            {/* Author Profile Footer */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 border-t border-white/10 relative z-10">
              <div className="flex items-center gap-4">
                <img
                  src={TESTIMONIALS_DATA[activeIndex].avatar}
                  alt={TESTIMONIALS_DATA[activeIndex].name}
                  className="w-16 h-16 rounded-2xl object-cover border-2 border-[#D4AF37] shadow-md"
                />
                <div>
                  <h4 className="text-xl font-black text-white">
                    {TESTIMONIALS_DATA[activeIndex].name}
                  </h4>
                  <p className="text-sm text-slate-400">
                    {TESTIMONIALS_DATA[activeIndex].role} •{' '}
                    <span className="text-[#D4AF37] font-bold">
                      {TESTIMONIALS_DATA[activeIndex].company}
                    </span>
                  </p>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-2.5 self-end sm:self-auto">
                <button
                  onClick={prevSlide}
                  className="p-3.5 rounded-2xl bg-white/5 hover:bg-[#D4AF37]/20 text-slate-300 hover:text-[#D4AF37] transition-all border border-white/10 hover:border-[#D4AF37]/40"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-3.5 rounded-2xl bg-white/5 hover:bg-[#D4AF37]/20 text-slate-300 hover:text-[#D4AF37] transition-all border border-white/10 hover:border-[#D4AF37]/40"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2.5">
          {TESTIMONIALS_DATA.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2.5 rounded-full transition-all ${
                activeIndex === idx ? 'w-10 bg-gradient-to-r from-[#9E822F] via-[#D4AF37] to-[#E5C158]' : 'w-2.5 bg-white/10 hover:bg-white/30'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
