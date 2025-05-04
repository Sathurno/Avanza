'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

interface DashboardWelcomeProps {
  name: string;
}

const DashboardWelcome: React.FC<DashboardWelcomeProps> = ({ name }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Bienvenido, {name}</h1>
          <p className="text-gray-600">Aquí puedes gestionar tus trámites de homologación y visados.</p>
        </div>
        <div className="mt-4 md:mt-0">
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
            <FontAwesomeIcon icon={faPlus} className="mr-2" />
            Nuevo trámite
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardWelcome; 