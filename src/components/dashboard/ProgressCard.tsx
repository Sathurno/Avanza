'use client';

import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCheckCircle, 
  faSyncAlt, 
  faClock, 
  faChartLine
} from '@fortawesome/free-solid-svg-icons';

const ProgressCard: React.FC = () => {
  useEffect(() => {
    // Simple animation for progress bar
    const progressBar = document.querySelector('.progress-bar');
    if (progressBar) {
      setTimeout(() => {
        (progressBar as HTMLElement).style.width = '65%';
      }, 300);
    }
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 h-full flex flex-col">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-lg font-semibold text-gray-900">Progreso de tu homologación</h3>
        <FontAwesomeIcon icon={faChartLine} className="text-blue-500" />
      </div>
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>65% completado</span>
          <span>Etapa: Revisión</span>
        </div>
        <div className="progress-track rounded-full">
          <div className="progress-bar rounded-full" style={{ width: '0%' }}></div>
        </div>
      </div>
      <div className="space-y-4 flex-grow">
        <div className="flex items-center justify-between hover:bg-gray-50 p-2 rounded-md transition-colors">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
            <span className="text-sm">Documentación</span>
          </div>
          <span className="text-xs text-gray-500">20/03/2023</span>
        </div>
        <div className="flex items-center justify-between hover:bg-gray-50 p-2 rounded-md transition-colors">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
            <span className="text-sm">Pago inicial</span>
          </div>
          <span className="text-xs text-gray-500">15/03/2023</span>
        </div>
        <div className="flex items-center justify-between hover:bg-gray-50 p-2 rounded-md transition-colors">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faSyncAlt} className="text-blue-500 animate-spin mr-2" />
            <span className="text-sm">Revisión</span>
          </div>
          <span className="text-xs text-gray-500">En curso</span>
        </div>
        <div className="flex items-center justify-between hover:bg-gray-50 p-2 rounded-md transition-colors">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faClock} className="text-gray-400 mr-2" />
            <span className="text-sm">Resolución</span>
          </div>
          <span className="text-xs text-gray-500">Pendiente</span>
        </div>
      </div>
      
      <div className="mt-4 pt-3 border-t border-gray-100 text-center">
        <a href="/dashboard/tramites/1" className="text-xs text-blue-600 hover:text-blue-800">
          Ver detalles completos →
        </a>
      </div>
    </div>
  );
};

export default ProgressCard; 