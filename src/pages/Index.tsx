
import React, { useEffect } from "react";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import NotesSection from "@/components/NotesSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Set the page title
    document.title = "Tech Services - Professional Technical Solutions";
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main>
          <ServicesSection />
          <PricingSection />
          <NotesSection />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
