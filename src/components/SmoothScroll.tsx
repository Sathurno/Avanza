'use client';

import { useEffect } from 'react';

const SmoothScroll = () => {
  useEffect(() => {
    // Función para calcular la posición de destino con desplazamiento centrado
    const scrollToSection = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      // Solo procesar los enlaces internos que comienzan con #
      if (!anchor || !anchor.hash || !anchor.href.includes('#')) return;
      
      // Prevenir el comportamiento predeterminado
      e.preventDefault();
      
      // Obtener el elemento de destino
      const targetId = anchor.hash.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (!targetElement) return;
      
      // Calcular la posición para centrar la sección en la ventana
      const windowHeight = window.innerHeight;
      const targetHeight = targetElement.getBoundingClientRect().height;
      const headerHeight = 76; // Altura del header fijo
      
      // Si la sección es más alta que la ventana, alineamos con el top con offset
      // Si no, centramos verticalmente
      const offset = targetHeight >= windowHeight 
        ? headerHeight
        : (windowHeight - targetHeight) / 2;
      
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;
      
      // Desplazamiento suave a la posición calculada
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    };
    
    // Agregar el evento a los clics en el documento
    document.addEventListener('click', scrollToSection as unknown as EventListener);
    
    // Función para manejar desplazamiento inicial si hay un hash en la URL
    const handleInitialScroll = () => {
      if (window.location.hash) {
        const targetId = window.location.hash.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          setTimeout(() => {
            const windowHeight = window.innerHeight;
            const targetHeight = targetElement.getBoundingClientRect().height;
            const headerHeight = 76; // Altura del header fijo
            
            const offset = targetHeight >= windowHeight 
              ? headerHeight 
              : (windowHeight - targetHeight) / 2;
            
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;
            
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
          }, 300); // Retraso mayor para asegurar que la página esté completamente cargada
        }
      }
    };
    
    // Ejecutar el desplazamiento inicial
    handleInitialScroll();
    
    // Función de limpieza
    return () => {
      document.removeEventListener('click', scrollToSection as unknown as EventListener);
    };
  }, []);
  
  return null; // Este componente no renderiza nada visible
};

export default SmoothScroll; 