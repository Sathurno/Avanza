'use client';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChartLine, 
  faFileAlt, 
  faUpload, 
  faBell, 
  faCreditCard, 
  faHeadset,
  faTimes,
  faPhone,
  faEnvelope,
  faComments
} from '@fortawesome/free-solid-svg-icons';

const DashboardSidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState('resumen');
  const [showSupportModal, setShowSupportModal] = useState(false);
  
  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };
  
  const toggleSupportModal = () => {
    setShowSupportModal(!showSupportModal);
  };
  
  return (
    <>
      <div className="md:w-64 flex-shrink-0">
        <nav className="space-y-1 bg-white rounded-lg shadow-sm p-4 sticky top-24">
          <div>
            <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">MENÚ</h3>
            <div className="space-y-1">
              <a 
                href="/dashboard" 
                className={`sidebar-item flex items-center px-3 py-2 text-sm font-medium rounded-md ${activeItem === 'resumen' ? 'active' : ''}`}
                onClick={() => handleItemClick('resumen')}
              >
                <FontAwesomeIcon icon={faChartLine} className="text-gray-500 mr-3 w-5" />
                <span>Resumen</span>
              </a>
              <a 
                href="/dashboard/tramites" 
                className={`sidebar-item flex items-center px-3 py-2 text-sm font-medium rounded-md ${activeItem === 'tramites' ? 'active' : ''}`}
                onClick={() => handleItemClick('tramites')}
              >
                <FontAwesomeIcon icon={faFileAlt} className="text-gray-500 mr-3 w-5" />
                <span>Mis Trámites</span>
                <span className="ml-auto inline-block py-0.5 px-2 text-xs rounded-full bg-blue-100 text-blue-800">3</span>
              </a>
              <a 
                href="/dashboard/documentos" 
                className={`sidebar-item flex items-center px-3 py-2 text-sm font-medium rounded-md ${activeItem === 'documentos' ? 'active' : ''}`}
                onClick={() => handleItemClick('documentos')}
              >
                <FontAwesomeIcon icon={faUpload} className="text-gray-500 mr-3 w-5" />
                <span>Documentos</span>
              </a>
              <a 
                href="/dashboard/notificaciones" 
                className={`sidebar-item flex items-center px-3 py-2 text-sm font-medium rounded-md ${activeItem === 'notificaciones' ? 'active' : ''}`}
                onClick={() => handleItemClick('notificaciones')}
              >
                <FontAwesomeIcon icon={faBell} className="text-gray-500 mr-3 w-5" />
                <span>Notificaciones</span>
                <span className="ml-auto inline-block py-0.5 px-2 text-xs rounded-full bg-red-100 text-red-800">2</span>
              </a>
              <a 
                href="/dashboard/pagos" 
                className={`sidebar-item flex items-center px-3 py-2 text-sm font-medium rounded-md ${activeItem === 'pagos' ? 'active' : ''}`}
                onClick={() => handleItemClick('pagos')}
              >
                <FontAwesomeIcon icon={faCreditCard} className="text-gray-500 mr-3 w-5" />
                <span>Pagos</span>
              </a>
            </div>
          </div>
          
          <div className="pt-4">
            <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">TRÁMITES ACTIVOS</h3>
            <div className="space-y-1">
              <a href="#" className="group flex items-center px-3 py-2 text-sm font-medium rounded-md">
                <span className="w-2 h-2 mr-3 rounded-full bg-yellow-400"></span>
                <span className="truncate">Homologación Medicina</span>
              </a>
              <a href="#" className="group flex items-center px-3 py-2 text-sm font-medium rounded-md">
                <span className="w-2 h-2 mr-3 rounded-full bg-green-400"></span>
                <span className="truncate">Visa de Estudios</span>
              </a>
            </div>
          </div>
          
          <div className="pt-6">
            <button 
              onClick={toggleSupportModal}
              className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition duration-150"
            >
              <FontAwesomeIcon icon={faHeadset} className="mr-2" />
              Soporte
            </button>
          </div>
        </nav>
      </div>

      {/* Support Modal */}
      {showSupportModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[100]" onClick={toggleSupportModal}>
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden relative" 
               onClick={e => e.stopPropagation()}>
            {/* Close button */}
            <button 
              onClick={toggleSupportModal} 
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 z-10"
              aria-label="Close"
            >
              <FontAwesomeIcon icon={faTimes} className="text-lg" />
            </button>
            
            <div className="text-center pt-8 pb-6 px-8 border-b border-gray-200">
              <div className="mx-auto w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <FontAwesomeIcon icon={faHeadset} className="text-white text-xl" />
              </div>
              <h2 className="text-xl font-bold text-gray-800">Contacto de Soporte</h2>
              <p className="text-gray-600 mt-1 text-sm">Estamos aquí para ayudarle con cualquier consulta</p>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">Teléfono</p>
                  <p className="text-sm text-blue-600 hover:text-blue-800">
                    <a href="tel:+34911234567">+34 91 123 45 67</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">Correo Electrónico</p>
                  <p className="text-sm text-blue-600 hover:text-blue-800">
                    <a href="mailto:soporte@homologaciones.com">soporte@homologaciones.com</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <FontAwesomeIcon icon={faComments} />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">Chat en Vivo</p>
                  <p className="text-sm text-gray-600">Disponible de Lunes a Viernes<br />9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 text-center border-t border-gray-200">
              <p className="text-sm text-gray-600">Tiempo de respuesta promedio: <span className="font-semibold">2-4 horas</span></p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardSidebar; 