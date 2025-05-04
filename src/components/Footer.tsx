'use client';

import { MouseEvent } from 'react';
import Link from 'next/link';
import SchoolIcon from '@mui/icons-material/School';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { scrollToSection } from '@/utils/scrollUtils';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  const serviceLinks = [
    { href: '#servicios', id: 'servicios', text: 'Homologación de títulos' },
    { href: '#visa', id: 'visa', text: 'Visa de estudios' },
    { href: '#servicios', id: 'servicios', text: 'Convalidación profesional' },
    { href: '#servicios', id: 'servicios', text: 'Asesoría legal' },
    { href: '#servicios', id: 'servicios', text: 'Traducciones juradas' }
  ];

  const utilLinks = [
    { href: '#faq', id: 'faq', text: 'Preguntas frecuentes' },
    { href: '#conocenos', id: 'conocenos', text: 'Conócenos' },
    { href: '#contacto', id: 'contacto', text: 'Contacto' },
    { href: '#especializaciones', id: 'especializaciones', text: 'Especializaciones' },
    { href: '#testimonios', id: 'testimonios', text: 'Testimonios' }
  ];

  return (
    <footer className="bg-blue-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <SchoolIcon className="mr-2" />
              <span>HOMOLOGACION/ES</span>
            </h3>
            <p className="text-blue-200">
              Especialistas en homologación de títulos extranjeros y visados de estudio en España.
            </p>
            <div className="mt-4 flex space-x-4">
              <Link href="#" className="text-blue-200 hover:text-white transition" aria-label="Facebook">
                <FacebookIcon />
              </Link>
              <Link href="#" className="text-blue-200 hover:text-white transition" aria-label="Twitter">
                <TwitterIcon />
              </Link>
              <Link href="#" className="text-blue-200 hover:text-white transition" aria-label="LinkedIn">
                <LinkedInIcon />
              </Link>
              <Link href="#" className="text-blue-200 hover:text-white transition" aria-label="Instagram">
                <InstagramIcon />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Servicios</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    onClick={(e) => handleNavClick(e, link.id)}
                    className="text-blue-200 hover:text-white transition cursor-pointer"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces útiles</h3>
            <ul className="space-y-2">
              {utilLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    onClick={(e) => handleNavClick(e, link.id)}
                    className="text-blue-200 hover:text-white transition cursor-pointer"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-blue-200 mr-3">📍</span>
                <span className="text-blue-200">
                  Calle de la Homologación, 123<br />28001 Madrid, España
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-200 mr-3">📞</span>
                <span className="text-blue-200">+34 912 345 678</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-200 mr-3">✉️</span>
                <span className="text-blue-200">info@homologacion.es</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-200 text-sm mb-4 md:mb-0">
            © {currentYear} Homologacion/es. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6">
            <Link href="/politica-privacidad" className="text-blue-200 hover:text-white text-sm transition">
              Política de privacidad
            </Link>
            <Link href="/terminos-condiciones" className="text-blue-200 hover:text-white text-sm transition">
              Términos y condiciones
            </Link>
            <Link href="/aviso-legal" className="text-blue-200 hover:text-white text-sm transition">
              Aviso legal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 