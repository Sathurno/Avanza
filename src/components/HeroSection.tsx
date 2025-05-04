'use client';

import { MouseEvent } from 'react';
import Link from 'next/link';
import PhoneIcon from '@mui/icons-material/Phone';
import { scrollToSection } from '@/utils/scrollUtils';

const HeroSection = () => {
  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <section id="homologacion" className="hero-section text-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nuestros servicios están diseñados para simplificar el proceso educativo y legal en España
          </h1>
          <p className="text-xl mb-8">
            Cómo te ayudamos: Validamos tus estudios extranjeros para que sean reconocidos oficialmente en España. Te guiamos en cada paso del proceso.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              href="#servicios" 
              onClick={(e) => handleNavClick(e, 'servicios')}
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-4 px-8 rounded-md text-center transition duration-300 transform hover:scale-105"
            >
              COMENZAR EL PROCESO
            </Link>
            <Link 
              href="#contacto" 
              onClick={(e) => handleNavClick(e, 'contacto')}
              className="border-2 border-white hover:bg-white hover:text-blue-900 font-bold py-4 px-8 rounded-md text-center transition duration-300"
            >
              <span className="flex items-center justify-center">
              <PhoneIcon className="mr-2" /> CONTÁCTANOS
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 