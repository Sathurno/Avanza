'use client';

import React, { useState } from 'react';
import DashboardPageTemplate from '@/components/dashboard/DashboardPageTemplate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGraduationCap, 
  faPassport, 
  faFileAlt,
  faBookOpen,
  faSearch,
  faFilter,
  faSort,
  faArrowRight,
  faCheck,
  faExclamationTriangle,
  faSyncAlt,
  faChartLine
} from '@fortawesome/free-solid-svg-icons';

interface Procedure {
  id: number;
  name: string;
  reference: string;
  status: 'in-progress' | 'completed' | 'paused' | 'pending';
  startDate: string;
  completionDate?: string;
  progress: number;
  description: string;
  type: string;
  icon: any;
  steps: {
    name: string;
    status: 'completed' | 'in-progress' | 'pending';
    date?: string;
  }[];
}

const ProceduresPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedProcedure, setExpandedProcedure] = useState<number | null>(null);
  
  const procedures: Procedure[] = [
    {
      id: 1,
      name: 'Homologación de Medicina',
      reference: 'HMG-2023-0456',
      status: 'in-progress',
      startDate: '15/03/2023',
      progress: 65,
      description: 'Homologación de título de Medicina otorgado por la Universidad de Buenos Aires.',
      type: 'Homologación',
      icon: faGraduationCap,
      steps: [
        { name: 'Recepción de documentación', status: 'completed', date: '20/03/2023' },
        { name: 'Pago inicial', status: 'completed', date: '15/03/2023' },
        { name: 'Revisión de documentos', status: 'in-progress' },
        { name: 'Envío al ministerio', status: 'pending' },
        { name: 'Resolución', status: 'pending' },
        { name: 'Entrega de credenciales', status: 'pending' }
      ]
    },
    {
      id: 2,
      name: 'Visa de Estudios',
      reference: 'VIS-2023-0789',
      status: 'completed',
      startDate: '10/01/2023',
      completionDate: '05/04/2023',
      progress: 100,
      description: 'Tramitación de visa de estudios para realizar máster en España.',
      type: 'Visa',
      icon: faPassport,
      steps: [
        { name: 'Recepción de documentación', status: 'completed', date: '15/01/2023' },
        { name: 'Pago inicial', status: 'completed', date: '10/01/2023' },
        { name: 'Revisión de documentos', status: 'completed', date: '01/02/2023' },
        { name: 'Presentación en consulado', status: 'completed', date: '15/02/2023' },
        { name: 'Aprobación', status: 'completed', date: '20/03/2023' },
        { name: 'Entrega de visa', status: 'completed', date: '05/04/2023' }
      ]
    },
    {
      id: 3,
      name: 'Convalidación Ingeniería',
      reference: 'CVL-2023-0123',
      status: 'pending',
      startDate: '01/05/2023',
      progress: 0,
      description: 'Convalidación de título de Ingeniería Civil para ejercer en España.',
      type: 'Convalidación',
      icon: faBookOpen,
      steps: [
        { name: 'Recepción de documentación', status: 'pending' },
        { name: 'Pago inicial', status: 'pending' },
        { name: 'Revisión de documentos', status: 'pending' },
        { name: 'Envío de expediente', status: 'pending' },
        { name: 'Resolución', status: 'pending' }
      ]
    },
    {
      id: 4,
      name: 'Certificación Académica',
      reference: 'CERT-2023-0345',
      status: 'paused',
      startDate: '10/02/2023',
      progress: 30,
      description: 'Certificación de estudios realizados en el extranjero.',
      type: 'Certificación',
      icon: faFileAlt,
      steps: [
        { name: 'Recepción de documentación', status: 'completed', date: '15/02/2023' },
        { name: 'Pago inicial', status: 'completed', date: '10/02/2023' },
        { name: 'Revisión de documentos', status: 'completed', date: '01/03/2023' },
        { name: 'Solicitud de documentos adicionales', status: 'in-progress' },
        { name: 'Certificación', status: 'pending' }
      ]
    }
  ];
  
  const filteredProcedures = activeTab === 'all' 
    ? procedures 
    : procedures.filter(p => p.status === activeTab);
    
  const filteredBySearch = filteredProcedures.filter(
    p => p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        p.reference.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.type.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const getStatusStyles = (status: string) => {
    switch(status) {
      case 'completed':
        return { 
          bgColor: 'bg-green-100', 
          textColor: 'text-green-800', 
          label: 'Completado',
          icon: faCheck
        };
      case 'in-progress':
        return { 
          bgColor: 'bg-yellow-100', 
          textColor: 'text-yellow-800', 
          label: 'En progreso',
          icon: faSyncAlt
        };
      case 'pending':
        return { 
          bgColor: 'bg-blue-100', 
          textColor: 'text-blue-800', 
          label: 'Pendiente',
          icon: faArrowRight
        };
      case 'paused':
        return { 
          bgColor: 'bg-red-100', 
          textColor: 'text-red-800', 
          label: 'Pausado',
          icon: faExclamationTriangle
        };
      default:
        return { 
          bgColor: 'bg-gray-100', 
          textColor: 'text-gray-800', 
          label: 'Desconocido',
          icon: faFileAlt
        };
    }
  };
  
  const toggleProcedureDetails = (id: number) => {
    setExpandedProcedure(expandedProcedure === id ? null : id);
  };
  
  return (
    <DashboardPageTemplate 
      title="Mis Trámites"
      description="Gestiona y haz seguimiento a tus trámites en curso"
    >
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="flex overflow-x-auto border-b border-gray-200">
          <button
            className={`py-4 px-6 text-sm font-medium whitespace-nowrap focus:outline-none ${
              activeTab === 'all'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('all')}
          >
            Todos
          </button>
          <button
            className={`py-4 px-6 text-sm font-medium whitespace-nowrap focus:outline-none ${
              activeTab === 'in-progress'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('in-progress')}
          >
            En Progreso
          </button>
          <button
            className={`py-4 px-6 text-sm font-medium whitespace-nowrap focus:outline-none ${
              activeTab === 'completed'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('completed')}
          >
            Completados
          </button>
          <button
            className={`py-4 px-6 text-sm font-medium whitespace-nowrap focus:outline-none ${
              activeTab === 'pending'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('pending')}
          >
            Pendientes
          </button>
          <button
            className={`py-4 px-6 text-sm font-medium whitespace-nowrap focus:outline-none ${
              activeTab === 'paused'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('paused')}
          >
            Pausados
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
                placeholder="Buscar trámites..."
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
            {filteredBySearch.length > 0 ? (
              filteredBySearch.map((procedure) => {
                const statusStyles = getStatusStyles(procedure.status);
                
                return (
                  <div key={procedure.id} className="border border-gray-200 rounded-lg overflow-hidden">
                    <div 
                      className="bg-white p-4 flex flex-col sm:flex-row justify-between cursor-pointer hover:bg-gray-50"
                      onClick={() => toggleProcedureDetails(procedure.id)}
                    >
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                          <FontAwesomeIcon icon={procedure.icon} />
                        </div>
                        <div className="ml-4">
                          <div className="flex items-center">
                            <h3 className="text-sm font-medium text-gray-900">{procedure.name}</h3>
                            <span className={`ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusStyles.bgColor} ${statusStyles.textColor}`}>
                              {statusStyles.label}
                            </span>
                          </div>
                          <div className="mt-1 text-xs text-gray-500">
                            <span className="inline-block mr-3">Ref: {procedure.reference}</span>
                            <span className="inline-block">Iniciado: {procedure.startDate}</span>
                            {procedure.completionDate && (
                              <span className="inline-block ml-3">Completado: {procedure.completionDate}</span>
                            )}
                          </div>
                          <p className="mt-1 text-xs text-gray-600">
                            {procedure.description}
                          </p>
                        </div>
                      </div>
                      
                      <div className="mt-4 sm:mt-0 sm:ml-6 flex items-center">
                        <div className="w-36 mr-4">
                          <div className="text-xs text-gray-500 mb-1 flex justify-between">
                            <span>Progreso</span>
                            <span>{procedure.progress}%</span>
                          </div>
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-blue-500 rounded-full" 
                              style={{ width: `${procedure.progress}%` }}
                            ></div>
                          </div>
                        </div>
                        <button className="text-gray-400">
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-5 w-5" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                            style={{ 
                              transform: expandedProcedure === procedure.id ? 'rotate(180deg)' : 'rotate(0deg)',
                              transition: 'transform 0.2s ease-in-out'
                            }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    
                    {expandedProcedure === procedure.id && (
                      <div className="border-t border-gray-200 bg-gray-50 p-4">
                        <h4 className="text-sm font-medium text-gray-700 mb-3">Línea de tiempo</h4>
                        <div className="space-y-4">
                          {procedure.steps.map((step, index) => {
                            const stepStyles = getStatusStyles(step.status);
                            
                            return (
                              <div key={index} className="relative pl-8">
                                <div className={`absolute left-0 top-0 h-6 w-6 rounded-full ${stepStyles.bgColor} flex items-center justify-center`}>
                                  <FontAwesomeIcon icon={stepStyles.icon} className={`text-xs ${stepStyles.textColor}`} />
                                </div>
                                {index < procedure.steps.length - 1 && (
                                  <div className="absolute left-3 top-6 h-full w-px bg-gray-300"></div>
                                )}
                                <div>
                                  <div className="flex items-center">
                                    <p className="text-sm font-medium text-gray-900">{step.name}</p>
                                    <span className={`ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${stepStyles.bgColor} ${stepStyles.textColor}`}>
                                      {step.status === 'completed' ? 'Completado' : 
                                       step.status === 'in-progress' ? 'En progreso' : 'Pendiente'}
                                    </span>
                                  </div>
                                  {step.date && (
                                    <p className="text-xs text-gray-500">{step.date}</p>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                        
                        <div className="mt-6 flex justify-between">
                          <button className="px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-200 focus:outline-none">
                            <FontAwesomeIcon icon={faFileAlt} className="mr-2" />
                            Ver documentos
                          </button>
                          
                          <button className="px-3 py-2 border border-transparent bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 focus:outline-none">
                            <FontAwesomeIcon icon={faChartLine} className="mr-2" />
                            Detalles completos
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">No se encontraron trámites</p>
              </div>
            )}
          </div>
          
          {filteredBySearch.length > 0 && (
            <div className="mt-6 flex justify-center">
              <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
                <FontAwesomeIcon icon={faFileAlt} className="mr-2" />
                Nuevo Trámite
              </button>
            </div>
          )}
        </div>
      </div>
    </DashboardPageTemplate>
  );
};

export default ProceduresPage; 