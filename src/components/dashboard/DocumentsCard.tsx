'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUpload, 
  faCheck, 
  faSyncAlt, 
  faExclamation 
} from '@fortawesome/free-solid-svg-icons';

const DocumentsCard: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 h-full flex flex-col">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-lg font-semibold text-gray-900">Documentos requeridos</h3>
        <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
          <FontAwesomeIcon icon={faUpload} className="mr-1" /> Subir
        </button>
      </div>
      <div className="space-y-4 flex-grow">
        <div className="document-card bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-green-100 rounded-full p-2 mr-3">
              <FontAwesomeIcon icon={faCheck} className="text-green-600 text-sm" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">Título académico</p>
              <p className="text-xs text-gray-500 mt-1">Subido el 20/03/2023</p>
            </div>
          </div>
        </div>
        <div className="document-card bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-green-100 rounded-full p-2 mr-3">
              <FontAwesomeIcon icon={faCheck} className="text-green-600 text-sm" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">Certificado de notas</p>
              <p className="text-xs text-gray-500 mt-1">Subido el 22/03/2023</p>
            </div>
          </div>
        </div>
        <div className="document-card bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-blue-100 rounded-full p-2 mr-3">
              <FontAwesomeIcon icon={faSyncAlt} className="text-blue-600 text-sm animate-spin" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">Programa de estudios</p>
              <p className="text-xs text-gray-500 mt-1">En revisión</p>
            </div>
          </div>
        </div>
        <div className="document-card bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-gray-100 rounded-full p-2 mr-3">
              <FontAwesomeIcon icon={faExclamation} className="text-gray-500 text-sm" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">DNI/Pasaporte</p>
              <p className="text-xs text-gray-500 mt-1">Pendiente</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-4 pt-3 border-t border-gray-100 text-center">
        <a href="/dashboard/documentos" className="text-xs text-blue-600 hover:text-blue-800">
          Ver todos los documentos →
        </a>
      </div>
    </div>
  );
};

export default DocumentsCard; 