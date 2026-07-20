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
import { PricingSection } from '@/components/sections/PricingSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { ServiceModal } from '@/components/common/ServiceModal';
import { QuoteModal } from '@/components/common/QuoteModal';
import { SplashScreen } from '@/components/common/SplashScreen';

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
    <main className="min-h-screen flex flex-col overflow-x-hidden bg-[#2C3531] text-slate-100 selection:bg-[#116466] selection:text-[#D1E8E2]">
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
      <PortfolioSection />
      <ProcessSection />
      <TestimonialsSection />
      <PricingSection onOpenQuote={(serviceName) => handleOpenQuote(serviceName)} />
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
