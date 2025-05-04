'use client';

import React, { useState } from 'react';
import DashboardPageTemplate from '@/components/dashboard/DashboardPageTemplate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUpload,
  faFile,
  faFileAlt,
  faFilePdf,
  faFileMedical,
  faFileContract,
  faSearch,
  faFilter,
  faSort
} from '@fortawesome/free-solid-svg-icons';

const DocumentsPage = () => {
  const [activeTab, setActiveTab] = useState('requeridos');
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };
  
  const documents = {
    requeridos: [
      { id: 1, name: 'Título académico', status: 'completed', date: '20/03/2023', icon: faFilePdf },
      { id: 2, name: 'Certificado de notas', status: 'completed', date: '22/03/2023', icon: faFileAlt },
      { id: 3, name: 'Programa de estudios', status: 'in-review', date: '', icon: faFileMedical },
      { id: 4, name: 'DNI/Pasaporte', status: 'pending', date: '', icon: faFileContract },
      { id: 5, name: 'Declaración jurada', status: 'pending', date: '', icon: faFile },
      { id: 6, name: 'Certificado de idioma', status: 'pending', date: '', icon: faFileAlt },
    ],
    subidos: [
      { id: 1, name: 'Título académico', status: 'completed', date: '20/03/2023', icon: faFilePdf, size: '2.3 MB' },
      { id: 2, name: 'Certificado de notas', status: 'completed', date: '22/03/2023', icon: faFileAlt, size: '1.5 MB' },
      { id: 3, name: 'Programa de estudios', status: 'in-review', date: '25/03/2023', icon: faFileMedical, size: '4.8 MB' },
    ]
  };
  
  const filteredDocuments = documents[activeTab === 'requeridos' ? 'requeridos' : 'subidos'].filter(
    doc => doc.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <DashboardPageTemplate 
      title="Gestión de Documentos"
      description="Sube, visualiza y gestiona los documentos de tu proceso de homologación"
    >
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="flex border-b border-gray-200">
          <button
            className={`flex-1 py-4 px-6 text-sm font-medium focus:outline-none ${
              activeTab === 'requeridos'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => handleTabChange('requeridos')}
          >
            Documentos Requeridos
          </button>
          <button
            className={`flex-1 py-4 px-6 text-sm font-medium focus:outline-none ${
              activeTab === 'subidos'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => handleTabChange('subidos')}
          >
            Documentos Subidos
          </button>
        </div>
        
        <div className="p-6">
          <div className="flex flex-col sm:flex-row justify-between mb-6">
            <div className="relative w-full sm:w-64 mb-4 sm:mb-0">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
              </div>
              <input
                type="text"
                className="pl-10 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Buscar documentos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex space-x-2">
              <button className="px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50 focus:outline-none">
                <FontAwesomeIcon icon={faFilter} className="mr-2" />
                Filtrar
              </button>
              <button className="px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50 focus:outline-none">
                <FontAwesomeIcon icon={faSort} className="mr-2" />
                Ordenar
              </button>
            </div>
          </div>
          
          <div className="space-y-4">
            {filteredDocuments.length > 0 ? (
              filteredDocuments.map((doc) => (
                <div key={doc.id} className="document-card bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className={`flex-shrink-0 rounded-full p-2 mr-3 ${
                      doc.status === 'completed'
                        ? 'bg-green-100'
                        : doc.status === 'in-review'
                        ? 'bg-blue-100'
                        : 'bg-gray-100'
                    }`}>
                      <FontAwesomeIcon 
                        icon={doc.icon} 
                        className={`text-lg ${
                          doc.status === 'completed'
                            ? 'text-green-600'
                            : doc.status === 'in-review'
                            ? 'text-blue-600'
                            : 'text-gray-500'
                        }`}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-sm font-medium text-gray-900">{doc.name}</p>
                          <p className="text-xs text-gray-500 mt-1">
                            {doc.status === 'completed'
                              ? `Subido el ${doc.date}`
                              : doc.status === 'in-review'
                              ? 'En revisión'
                              : 'Pendiente'}
                            {'size' in doc && ` · ${doc.size}`}
                          </p>
                        </div>
                        <div className="flex space-x-2">
                          {activeTab === 'subidos' && (
                            <button className="p-1 text-gray-400 hover:text-gray-600">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                            </button>
                          )}
                          
                          {doc.status === 'pending' && (
                            <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded-md">
                              <FontAwesomeIcon icon={faUpload} className="mr-1" />
                              Subir
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">No se encontraron documentos</p>
              </div>
            )}
          </div>
          
          {activeTab === 'requeridos' && (
            <div className="mt-8 bg-blue-50 rounded-lg p-4 flex items-start">
              <div className="bg-blue-100 rounded-full p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Formatos aceptados</p>
                <p className="text-xs text-gray-700 mt-1">
                  Archivos PDF, JPG o PNG con un tamaño máximo de 10MB. Para mayor calidad, recomendamos escanear los documentos a 300 DPI en formato PDF.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </DashboardPageTemplate>
  );
};

export default DocumentsPage; 