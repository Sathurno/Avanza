'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGraduationCap, 
  faPassport, 
  faEllipsisH, 
  faHistory 
} from '@fortawesome/free-solid-svg-icons';

const ProceduresList: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Tus trámites</h3>
          <button className="text-sm text-blue-600 hover:text-blue-800">
            <FontAwesomeIcon icon={faHistory} className="mr-1" /> Ver historial
          </button>
        </div>
      </div>
      <div className="divide-y divide-gray-200">
        {/* Procedure 1 */}
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-800">
                <FontAwesomeIcon icon={faGraduationCap} />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-900">Homologación de Medicina</p>
                <p className="text-xs text-gray-500">Referencia: HMG-2023-0456</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="status-badge bg-yellow-100 text-yellow-800">En progreso</span>
              <button className="text-sm text-blue-600 hover:text-blue-800">
                <FontAwesomeIcon icon={faEllipsisH} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Procedure 2 */}
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-10 w-10 bg-green-100 rounded-full flex items-center justify-center text-green-800">
                <FontAwesomeIcon icon={faPassport} />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-900">Visa de Estudios</p>
                <p className="text-xs text-gray-500">Referencia: VIS-2023-0789</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="status-badge bg-green-100 text-green-800">Completado</span>
              <button className="text-sm text-blue-600 hover:text-blue-800">
                <FontAwesomeIcon icon={faEllipsisH} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProceduresList; 