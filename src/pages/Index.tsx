
import React, { useEffect } from "react";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import DetailedPlans from "@/components/DetailedPlans";
import IntegratedPlatforms from "@/components/IntegratedPlatforms";
import PartnersSection from "@/components/PartnersSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NotesSection from "@/components/NotesSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "Ahmed Mo Kireldin - Smart Automation Solutions";
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <IntegratedPlatforms />
          <PartnersSection />
          <PricingSection />
          <DetailedPlans />
          <TestimonialsSection />
          <NotesSection />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
