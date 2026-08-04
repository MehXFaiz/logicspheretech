'use client';

import React, { useState } from 'react';
import { TESTIMONIALS_DATA } from '@/data';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((current) => (current === 0 ? TESTIMONIALS_DATA.length - 1 : current - 1));
  };

  const nextSlide = () => {
    setActiveIndex((current) => (current === TESTIMONIALS_DATA.length - 1 ? 0 : current + 1));
  };

  return (
    <section id="testimonials" className="py-32 bg-[#12161F] relative overflow-hidden font-body">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#B88A44]/[0.04] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B2330] border border-[#B88A44]/20 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#B88A44]" />
            <span className="text-[11px] uppercase tracking-[0.25em] font-mono text-[#B88A44] font-semibold">
              EXECUTIVE REVIEWS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-heading font-extrabold text-[#F5F1EA] tracking-tight leading-tight"
          >
            What Leaders Say About Us
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base text-[#B9B4AA] font-light leading-relaxed max-w-2xl mx-auto"
          >
            Read verified feedback from CTOs, Founders, and VPs who partner with LogicSphere Technology.
          </motion.p>
        </div>

        {/* Featured Testimonial Card */}
        <div className="max-w-4xl mx-auto relative mb-10">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="luxury-card rounded-3xl p-8 sm:p-12 border border-[#B88A44]/20 relative overflow-hidden bg-[#1B2330]"
          >
            <Quote className="absolute top-6 right-8 w-24 h-24 text-[#B88A44]/[0.05] pointer-events-none" />

            {/* Rating Stars & Badge */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 relative z-10">
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#B88A44] text-[#B88A44]" />
                ))}
              </div>
              <span className="flex items-center gap-1.5 text-xs font-mono px-3.5 py-1 rounded-full bg-[#252D3D] text-[#B88A44] border border-[#B88A44]/30">
                <ShieldCheck className="w-4 h-4 text-[#B88A44]" /> Verified Sign-off
              </span>
            </div>

            {/* Quote Content */}
            <p className="text-lg sm:text-2xl text-[#F5F1EA] font-serif-luxury italic leading-relaxed mb-10 relative z-10 font-serif">
              &quot;{TESTIMONIALS_DATA[activeIndex].content}&quot;
            </p>

            {/* Author Profile Footer */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 border-t border-[#B88A44]/12 relative z-10">
              <div className="flex items-center gap-4">
                <img
                  src={TESTIMONIALS_DATA[activeIndex].avatar}
                  alt={TESTIMONIALS_DATA[activeIndex].name}
                  className="w-14 h-14 rounded-full object-cover border border-[#B88A44]/30"
                />
                <div>
                  <h4 className="text-base font-heading font-bold text-[#F5F1EA]">
                    {TESTIMONIALS_DATA[activeIndex].name}
                  </h4>
                  <p className="text-xs text-[#B9B4AA] font-light">
                    {TESTIMONIALS_DATA[activeIndex].role} •{' '}
                    <span className="text-[#B88A44] font-medium">
                      {TESTIMONIALS_DATA[activeIndex].company}
                    </span>
                  </p>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-2.5">
                <button
                  onClick={prevSlide}
                  className="p-3 rounded-full border border-[#B88A44]/20 bg-[#252D3D] text-[#F5F1EA] hover:border-[#B88A44] hover:text-[#B88A44] transition-all"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-3 rounded-full border border-[#B88A44]/20 bg-[#252D3D] text-[#F5F1EA] hover:border-[#B88A44] hover:text-[#B88A44] transition-all"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Thumbnail Selector Dots */}
        <div className="flex items-center justify-center gap-3">
          {TESTIMONIALS_DATA.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === idx
                  ? 'bg-[#B88A44] w-8'
                  : 'bg-[#1B2330] w-2.5 hover:bg-[#252D3D]'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
