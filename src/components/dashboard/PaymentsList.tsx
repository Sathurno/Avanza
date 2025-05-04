'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFileInvoiceDollar, 
  faPassport, 
  faCreditCard, 
  faExclamationTriangle,
  faCreditCardAlt
} from '@fortawesome/free-solid-svg-icons';

const PaymentsList: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Pagos recientes</h3>
          <button className="text-sm text-blue-600 hover:text-blue-800">
            <FontAwesomeIcon icon={faCreditCard} className="mr-1" /> Ver todos
          </button>
        </div>
      </div>
      <div className="divide-y divide-gray-200">
        {/* Payment 1 */}
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-800">
                <FontAwesomeIcon icon={faFileInvoiceDollar} />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-900">Pago inicial - Homologación</p>
                <p className="text-xs text-gray-500">15/03/2023</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium">350,00 €</span>
              <span className="status-badge bg-green-100 text-green-800">Completado</span>
            </div>
          </div>
        </div>
        
        {/* Payment 2 */}
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-10 w-10 bg-green-100 rounded-full flex items-center justify-center text-green-800">
                <FontAwesomeIcon icon={faPassport} />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-900">Pago final - Visa de Estudios</p>
                <p className="text-xs text-gray-500">10/01/2023</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium">365,00 €</span>
              <span className="status-badge bg-green-100 text-green-800">Completado</span>
            </div>
          </div>
        </div>
        
        {/* Payment 3 */}
        <div className="px-6 py-4 bg-blue-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-10 w-10 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-800">
                <FontAwesomeIcon icon={faExclamationTriangle} />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-900">Tasa administrativa</p>
                <p className="text-xs text-gray-500">Vence el 30/05/2023</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium">160,00 €</span>
              <button className="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                <FontAwesomeIcon icon={faCreditCardAlt} className="mr-1" /> Pagar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentsList; 