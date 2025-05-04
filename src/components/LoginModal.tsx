'use client';

import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
  faKey, 
  faEye, 
  faEyeSlash, 
  faArrowRight, 
  faCircleNotch, 
  faBalanceScale,
  faTimes
} from '@fortawesome/free-solid-svg-icons';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const modalRef = useRef<HTMLDivElement>(null);
  
  // Handle clicking outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Prevent scrolling of body when modal is open
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);
  
  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen, onClose]);
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate login process
    setTimeout(() => {
      onClose();
      setIsSubmitting(false);
      setEmail('');
      setPassword('');
      setRemember(false);
    }, 1500);
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[100]" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden relative" ref={modalRef} onClick={e => e.stopPropagation()}>
        {/* Close button */}
        <button 
          onClick={onClose} 
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 z-10"
          aria-label="Close"
        >
          <FontAwesomeIcon icon={faTimes} className="text-lg" />
        </button>
        
        <div className="text-center pt-8 pb-6 px-8">
          <div className="mx-auto w-14 h-14 bg-[#2045a8] rounded-full flex items-center justify-center mb-4">
            <FontAwesomeIcon icon={faBalanceScale} className="text-white text-xl" />
          </div>
          <h2 className="text-xl font-bold text-gray-800">Acceso Clientes</h2>
          <p className="text-gray-600 mt-1 text-sm">Ingrese sus credenciales para acceder a su proceso de homologación</p>
        </div>
        
        <form onSubmit={handleSubmit} className="px-8 pb-6">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Correo Electrónico
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FontAwesomeIcon icon={faEnvelope} className="text-gray-400" />
              </div>
              <input 
                type="email" 
                id="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                placeholder="ejemplo@dominio.com"
                required
              />
            </div>
          </div>
          
          <div className="mb-1">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Contraseña
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FontAwesomeIcon icon={faKey} className="text-gray-400" />
              </div>
              <input 
                type={showPassword ? "text" : "password"}
                id="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                placeholder="********"
                required
              />
              <button 
                type="button" 
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                onClick={togglePasswordVisibility}
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
            </div>
          </div>
          
          <div className="flex justify-end">
            <a href="#" className="text-xs text-blue-600 hover:text-blue-800">¿Olvidó su contraseña?</a>
          </div>
          
          <div className="mt-4 flex items-center">
            <input 
              type="checkbox" 
              id="remember" 
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" 
            />
            <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
              Recordar mis datos en este dispositivo
            </label>
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-[#2045a8] hover:bg-[#18388c] text-white py-2.5 px-4 rounded-md mt-6 flex items-center justify-center transition duration-200"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <FontAwesomeIcon icon={faCircleNotch} spin className="mr-2" />
            ) : (
              <>
                Acceder a mi expediente 
                <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </>
            )}
          </button>
        </form>
        
        <div className="border-t border-gray-200 pt-3 pb-4 px-8">
          <div className="text-center text-sm">
            <p className="text-gray-600">¿No tiene acceso? <a href="#" className="text-blue-600 hover:text-blue-800">Solicite sus credenciales</a></p>
          </div>
        </div>
        
        <div className="bg-gray-50 border-t border-gray-200 py-2 px-6 flex items-center justify-center">
          <div className="text-xs text-gray-500 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Conexión segura SSL - 256bit encryption
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal; 