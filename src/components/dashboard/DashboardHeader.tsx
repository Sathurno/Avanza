'use client';

import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faUser } from '@fortawesome/free-solid-svg-icons';

const DashboardHeader: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center">
                <FontAwesomeIcon icon={faGraduationCap} className="text-blue-600 mr-2" />
                <span className="font-semibold text-gray-900">HOMOLOGACION/ES</span>
              </Link>
            </div>
          </div>

          {/* User Menu */}
          <div className="ml-4 flex items-center md:ml-6">
            <div className="relative ml-3">
              <div className="flex items-center space-x-4">
                <div className="text-right hidden md:block">
                  <p className="text-sm font-medium text-gray-900">Juan Pérez</p>
                  <p className="text-xs text-gray-500">Cliente desde 15/03/2023</p>
                </div>
                <button className="max-w-xs bg-white rounded-full flex items-center text-sm focus:outline-none">
                  <span className="sr-only">Abrir menú</span>
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-800">
                    <FontAwesomeIcon icon={faUser} />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader; 