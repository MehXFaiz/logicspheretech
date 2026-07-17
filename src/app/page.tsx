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
    <main className="min-h-screen flex flex-col overflow-x-hidden bg-[#050816]">
      {/* Luxury Tailwind CSS Splash Screen */}
      <SplashScreen />

      {/* Floating Executive Navbar */}
      <Navbar onOpenQuote={() => handleOpenQuote('Website Development')} />

      {/* 1. Hero Section */}
      <HeroSection onOpenQuote={() => handleOpenQuote('Website Development')} />

      {/* Stats Counters */}
      <StatsCounters />

      {/* 2. About Us */}
      <AboutSection />

      {/* 3. Our Services */}
      <ServicesSection
        onSelectService={(service) => setSelectedService(service)}
        onOpenQuote={handleOpenQuote}
      />

      {/* 4. Why Choose Us */}
      <WhyChooseUsSection />

      {/* 5. Technologies We Use */}
      <TechnologiesSection />

      {/* 6. Portfolio */}
      <PortfolioSection />

      {/* 7. Development Process */}
      <ProcessSection />

      {/* 8. Client Testimonials */}
      <TestimonialsSection />

      {/* 9. Pricing Plans */}
      <PricingSection onOpenQuote={(serviceName) => handleOpenQuote(serviceName)} />

      {/* 10. FAQ Section */}
      <FaqSection />

      {/* 11. Contact Section */}
      <ContactSection />

      {/* 12. Footer */}
      <Footer />

      {/* Interactive Service Detail Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenQuote={(serviceTitle) => handleOpenQuote(serviceTitle)}
      />

      {/* Interactive Get Free Quote Estimator & Booking Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        initialService={initialQuoteService}
        onClose={() => setQuoteModalOpen(false)}
      />
    </main>
  );
}
