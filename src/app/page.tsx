import type { Metadata } from 'next';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CTABanner from '@/components/CTABanner';
import ServicesSection from '@/components/ServicesSection';
import FAQSection from '@/components/FAQSection';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import SpecializationsSection from '@/components/SpecializationsSection';
import VisaSection from '@/components/VisaSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export const metadata: Metadata = {
  title: 'Homologación de Títulos en España | Asesoría Legal',
  description: 'Servicios de homologación de títulos extranjeros en España, visados de estudios y convalidación profesional. Asesoría legal personalizada para trámites educativos.',
  keywords: 'homologación, títulos, España, visa de estudios, convalidación, asesoría legal, educación',
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
      <HeroSection />
        <CTABanner />
        <AboutSection />
        <SpecializationsSection />
        <ServicesSection />
        <VisaSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
