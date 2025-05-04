'use client';

import React, { useState } from 'react';
import DashboardPageTemplate from '@/components/dashboard/DashboardPageTemplate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFileInvoiceDollar, 
  faPassport, 
  faCreditCard, 
  faExclamationTriangle,
  faDownload,
  faEye,
  faCalendarAlt,
  faFilter,
  faSort,
  faSearch
} from '@fortawesome/free-solid-svg-icons';

interface Payment {
  id: number;
  concept: string;
  amount: number;
  date: string;
  status: 'completed' | 'pending' | 'in-process';
  reference: string;
  dueDate?: string;
  invoiceLink?: string;
  paymentMethod?: string;
  icon: import('@fortawesome/fontawesome-svg-core').IconDefinition;
}

const PaymentsPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  const payments: Payment[] = [
    {
      id: 1,
      concept: 'Pago inicial - Homologación',
      amount: 350,
      date: '15/03/2023',
      status: 'completed',
      reference: 'TRX-2023-0001',
      invoiceLink: '#',
      paymentMethod: 'Tarjeta de Crédito',
      icon: faFileInvoiceDollar
    },
    {
      id: 2,
      concept: 'Pago final - Visa de Estudios',
      amount: 365,
      date: '10/01/2023',
      status: 'completed',
      reference: 'TRX-2023-0002',
      invoiceLink: '#',
      paymentMethod: 'Transferencia Bancaria',
      icon: faPassport
    },
    {
      id: 3,
      concept: 'Tasa administrativa',
      amount: 160,
      date: '',
      status: 'pending',
      reference: 'TRX-2023-0003',
      dueDate: '30/05/2023',
      icon: faExclamationTriangle
    },
    {
      id: 4,
      concept: 'Gestión de documentos',
      amount: 75,
      date: '05/04/2023',
      status: 'in-process',
      reference: 'TRX-2023-0004',
      icon: faFileInvoiceDollar
    }
  ];
  
  const filteredPayments = activeTab === 'all' 
    ? payments 
    : payments.filter(p => p.status === activeTab);
    
  const filteredBySearch = filteredPayments.filter(
    p => p.concept.toLowerCase().includes(searchQuery.toLowerCase()) || 
         p.reference.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const totalPaid = payments
    .filter(p => p.status === 'completed')
    .reduce((sum, payment) => sum + payment.amount, 0);
    
  const totalPending = payments
    .filter(p => p.status === 'pending')
    .reduce((sum, payment) => sum + payment.amount, 0);
  
  const getStatusStyles = (status: string) => {
    switch(status) {
      case 'completed':
        return { bgColor: 'bg-green-100', textColor: 'text-green-800', label: 'Completado' };
      case 'pending':
        return { bgColor: 'bg-yellow-100', textColor: 'text-yellow-800', label: 'Pendiente' };
      case 'in-process':
        return { bgColor: 'bg-blue-100', textColor: 'text-blue-800', label: 'En proceso' };
      default:
        return { bgColor: 'bg-gray-100', textColor: 'text-gray-800', label: 'Desconocido' };
    }
  };
  
  return (
    <DashboardPageTemplate 
      title="Gestión de Pagos"
      description="Visualiza y gestiona los pagos de tus trámites"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0 h-12 w-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
              <FontAwesomeIcon icon={faCreditCard} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total pagado</p>
              <p className="text-2xl font-semibold text-gray-900">{totalPaid.toFixed(2)} €</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0 h-12 w-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600">
              <FontAwesomeIcon icon={faCalendarAlt} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Pendiente de pago</p>
              <p className="text-2xl font-semibold text-gray-900">{totalPending.toFixed(2)} €</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0 h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
              <FontAwesomeIcon icon={faFileInvoiceDollar} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Facturas generadas</p>
              <p className="text-2xl font-semibold text-gray-900">{payments.filter(p => p.invoiceLink).length}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="flex border-b border-gray-200">
          <button
            className={`py-4 px-6 text-sm font-medium focus:outline-none ${
              activeTab === 'all'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('all')}
          >
            Todos
          </button>
          <button
            className={`py-4 px-6 text-sm font-medium focus:outline-none ${
              activeTab === 'completed'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('completed')}
          >
            Completados
          </button>
          <button
            className={`py-4 px-6 text-sm font-medium focus:outline-none ${
              activeTab === 'pending'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('pending')}
          >
            Pendientes
          </button>
          <button
            className={`py-4 px-6 text-sm font-medium focus:outline-none ${
              activeTab === 'in-process'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('in-process')}
          >
            En proceso
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
                placeholder="Buscar pagos..."
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
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Concepto
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Referencia
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Fecha
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Importe
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Estado
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredBySearch.map((payment) => {
                  const statusStyles = getStatusStyles(payment.status);
                  
                  return (
                    <tr key={payment.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                            <FontAwesomeIcon icon={payment.icon} />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{payment.concept}</div>
                            {payment.paymentMethod && (
                              <div className="text-xs text-gray-500">{payment.paymentMethod}</div>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{payment.reference}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {payment.date || (payment.dueDate ? `Vence: ${payment.dueDate}` : '-')}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        {payment.amount.toFixed(2)} €
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusStyles.bgColor} ${statusStyles.textColor}`}>
                          {statusStyles.label}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end space-x-2">
                          {payment.invoiceLink && (
                            <>
                              <button className="text-gray-400 hover:text-gray-600">
                                <FontAwesomeIcon icon={faEye} />
                              </button>
                              <button className="text-gray-400 hover:text-gray-600">
                                <FontAwesomeIcon icon={faDownload} />
                              </button>
                            </>
                          )}
                          
                          {payment.status === 'pending' && (
                            <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded-md">
                              Pagar
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          
          {filteredBySearch.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">No se encontraron pagos</p>
            </div>
          )}
        </div>
      </div>
    </DashboardPageTemplate>
  );
};

export default PaymentsPage; 