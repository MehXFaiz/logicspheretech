'use client';

import React, { useState } from 'react';
import { ServiceItem } from '@/types';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { StatsCounters } from '@/components/sections/StatsCounters';
import { AboutSection } from '@/components/sections/AboutSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';
import { TechnologiesSection } from '@/components/sections/TechnologiesSection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { ServiceModal } from '@/components/common/ServiceModal';
import { QuoteModal } from '@/components/common/QuoteModal';
import { SplashScreen } from '@/components/common/SplashScreen';

import { BackgroundEffects } from '@/components/common/BackgroundEffects';

export default function HomePage() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [initialQuoteService, setInitialQuoteService] = useState<string>('Website Development');

  const handleOpenQuote = (serviceName?: string) => {
    if (serviceName) {
      setInitialQuoteService(serviceName);
    }
    setQuoteModalOpen(true);
  };

  return (
    <main className="min-h-screen flex flex-col overflow-x-hidden bg-[#F8FAFC] dark:bg-[#0F172A] text-slate-900 dark:text-slate-100 selection:bg-[#0F766E] selection:text-white relative transition-colors duration-300">
      <BackgroundEffects />
      <SplashScreen />
      <Navbar onOpenQuote={() => handleOpenQuote('Website Development')} />
      <HeroSection onOpenQuote={() => handleOpenQuote('Website Development')} />
      <StatsCounters />
      <AboutSection />
      <ServicesSection
        onSelectService={(service) => setSelectedService(service)}
        onOpenQuote={handleOpenQuote}
      />
      <WhyChooseUsSection />
      <TechnologiesSection />
      <PortfolioSection onOpenQuote={() => handleOpenQuote('Website Development')} />
      <ProcessSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
      <Footer />
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenQuote={(serviceTitle) => handleOpenQuote(serviceTitle)}
      />
      <QuoteModal
        isOpen={quoteModalOpen}
        initialService={initialQuoteService}
        onClose={() => setQuoteModalOpen(false)}
      />
    </main>
  );
}
