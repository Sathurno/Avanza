'use client';

import { useState } from 'react';
import Link from 'next/link';
import SchoolIcon from '@mui/icons-material/School';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import LoginModal from './LoginModal';
import { scrollToSection } from '@/utils/scrollUtils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  const openLoginModal = () => {
    setIsLoginModalOpen(true);
    closeMenu();
  };
  
  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
    closeMenu();
  };

  return (
    <>
      <header className="bg-blue-900 text-white sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold flex items-center">
              <SchoolIcon className="mr-2" fontSize="large" />
              <span>HOMOLOGACION/ES</span>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <MenuIcon fontSize="large" />
            </button>
          </div>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center mx-4 flex-1 justify-center">
            <div className="flex space-x-6 items-center">
              <a href="#conocenos" onClick={(e) => handleNavClick(e, 'conocenos')} className="nav-link py-2 whitespace-nowrap" data-section="conocenos">Conócenos</a>
              <a href="#especializaciones" onClick={(e) => handleNavClick(e, 'especializaciones')} className="nav-link py-2 whitespace-nowrap" data-section="especializaciones">Especializaciones</a>
              <a href="#servicios" onClick={(e) => handleNavClick(e, 'servicios')} className="nav-link py-2 whitespace-nowrap" data-section="servicios">Servicios</a>
              <a href="#visa" onClick={(e) => handleNavClick(e, 'visa')} className="nav-link py-2 whitespace-nowrap" data-section="visa">Visa</a>
              <a href="#testimonios" onClick={(e) => handleNavClick(e, 'testimonios')} className="nav-link py-2 whitespace-nowrap" data-section="testimonios">Testimonios</a>
              <a href="#faq" onClick={(e) => handleNavClick(e, 'faq')} className="nav-link py-2 whitespace-nowrap" data-section="faq">FAQ</a>
              <a href="#contacto" onClick={(e) => handleNavClick(e, 'contacto')} className="nav-link py-2 whitespace-nowrap" data-section="contacto">Contacto</a>
            </div>
          </nav>
          
          <div className="hidden md:block">
            <button 
              onClick={openLoginModal}
              className="bg-blue-700 px-5 py-2 rounded-md hover:bg-blue-600 transition duration-300 flex items-center text-sm font-medium whitespace-nowrap"
            >
              <PersonIcon className="mr-2" fontSize="small" />
              Mi Cuenta
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden bg-blue-900 pb-4 px-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <a href="#conocenos" onClick={(e) => handleNavClick(e, 'conocenos')} className="block py-2 border-b border-blue-800">Conócenos</a>
          <a href="#especializaciones" onClick={(e) => handleNavClick(e, 'especializaciones')} className="block py-2 border-b border-blue-800">Especializaciones</a>
          <a href="#servicios" onClick={(e) => handleNavClick(e, 'servicios')} className="block py-2 border-b border-blue-800">Servicios</a>
          <a href="#visa" onClick={(e) => handleNavClick(e, 'visa')} className="block py-2 border-b border-blue-800">Visa</a>
          <a href="#testimonios" onClick={(e) => handleNavClick(e, 'testimonios')} className="block py-2 border-b border-blue-800">Testimonios</a>
          <a href="#faq" onClick={(e) => handleNavClick(e, 'faq')} className="block py-2 border-b border-blue-800">FAQ</a>
          <a href="#contacto" onClick={(e) => handleNavClick(e, 'contacto')} className="block py-2 border-b border-blue-800">Contacto</a>
          <button 
            onClick={openLoginModal} 
            className="block w-full py-2 bg-blue-700 text-center rounded-md mt-2"
          >
            Mi Cuenta
          </button>
        </div>
      </header>
      
      {/* Login Modal */}
      <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
    </>
  );
};

export default Header; 