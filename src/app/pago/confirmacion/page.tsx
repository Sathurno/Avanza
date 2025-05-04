'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faFileAlt,
  faEnvelope,
  faPhone,
  faArrowRight,
  faSpinner
} from '@fortawesome/free-solid-svg-icons';

// Service types
interface Service {
  id: string;
  name: string;
  price: string;
  total: string;
}

const PaymentConfirmationPage = () => {
  const [service, setService] = useState<Service | null>(null);
  const [transactionId, setTransactionId] = useState<string>('');
  
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const transaction = params.get('transaction');
    const serviceParam = params.get('service');
    
    if (transaction) {
      setTransactionId(transaction);
    }
    
    // Get service info
    const services: Record<string, Service> = {
      'homologacion': {
        id: 'homologacion',
        name: 'Homologación de Títulos',
        price: '700€',
        total: '350€'
      },
      'visa': {
        id: 'visa',
        name: 'Visa de Estudios',
        price: '730€',
        total: '365€'
      },
      'convalidacion': {
        id: 'convalidacion',
        name: 'Convalidación Profesional',
        price: '195€',
        total: '195€'
      }
    };
    
    if (serviceParam && services[serviceParam]) {
      setService(services[serviceParam]);
    } else {
      // Default to homologacion
      setService(services.homologacion);
    }
  }, []);

  if (!service) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <FontAwesomeIcon icon={faSpinner} spin className="text-blue-600 text-4xl" />
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <div className="flex items-center text-sm text-gray-600 mb-8">
          <Link href="/" className="text-blue-600 hover:underline">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/#servicios" className="text-blue-600 hover:underline">Servicios</Link>
          <span className="mx-2">/</span>
          <Link href="/pago" className="text-blue-600 hover:underline">Proceso de Pago</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-500">Confirmación</span>
        </div>

        {/* Payment Steps */}
        <div className="flex justify-between items-center mb-16 max-w-3xl mx-auto">
          <div className="payment-step completed text-center flex-1">
            <div className="step-number w-12 h-12 rounded-full border-2 border-green-500 bg-green-500 text-white flex items-center justify-center mx-auto mb-2">
              <FontAwesomeIcon icon={faCheckCircle} />
            </div>
            <p className="font-medium text-green-700">Selección de servicio</p>
          </div>
          
          <div className="payment-step completed text-center flex-1">
            <div className="step-number w-12 h-12 rounded-full border-2 border-green-500 bg-green-500 text-white flex items-center justify-center mx-auto mb-2">
              <FontAwesomeIcon icon={faCheckCircle} />
            </div>
            <p className="font-medium text-green-700">Pago seguro</p>
          </div>
          
          <div className="payment-step active text-center flex-1">
            <div className="step-number w-12 h-12 rounded-full border-2 border-blue-700 bg-blue-700 text-white flex items-center justify-center mx-auto mb-2">
              3
            </div>
            <p className="font-medium text-blue-900">Confirmación</p>
          </div>
        </div>

        {/* Confirmation Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8 mb-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
              <FontAwesomeIcon icon={faCheckCircle} className="text-4xl text-green-500" />
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">¡Pago completado con éxito!</h1>
            <p className="text-lg text-gray-700 mb-8">
              Gracias por confiar en nosotros para tu proceso de {service.name.toLowerCase()}
            </p>
            
            <div className="max-w-lg mx-auto bg-blue-50 rounded-lg p-6 mb-8 text-left">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Resumen de tu compra</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-700">Servicio:</span>
                  <span className="font-medium">{service.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Importe pagado:</span>
                  <span className="font-medium">{service.total}</span>
                </div>
                {transactionId && (
                  <div className="flex justify-between">
                    <span className="text-gray-700">ID de transacción:</span>
                    <span className="font-medium">{transactionId}</span>
                  </div>
                )}
                <div className="flex justify-between pt-3 border-t border-blue-200">
                  <span className="text-gray-700">Estado:</span>
                  <span className="font-medium text-green-600">Pagado</span>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">¿Qué sucede ahora?</h2>
              <div className="max-w-lg mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <FontAwesomeIcon icon={faEnvelope} className="text-blue-600" />
                  </div>
                  <p className="text-sm">Te enviaremos los formularios necesarios por email</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <FontAwesomeIcon icon={faPhone} className="text-blue-600" />
                  </div>
                  <p className="text-sm">Un asesor te contactará en las próximas 24 horas</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <FontAwesomeIcon icon={faFileAlt} className="text-blue-600" />
                  </div>
                  <p className="text-sm">Comenzaremos a trabajar en tu expediente</p>
                </div>
              </div>
            </div>
            
            <Link 
              href="/dashboard" 
              className="inline-flex items-center bg-blue-600 text-white font-medium py-3 px-6 rounded-md hover:bg-blue-700 transition"
            >
              Ir a mi área personal
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </Link>
          </div>
          
          <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-500">
            <h3 className="font-bold text-gray-900 mb-2">Importante</h3>
            <p className="text-gray-700 mb-4">
              Hemos enviado un comprobante de pago a tu correo electrónico. Revisa también la carpeta de spam 
              si no lo encuentras en la bandeja de entrada.
            </p>
            <p className="text-gray-700">
              Si tienes alguna duda o no recibes el correo en las próximas horas, no dudes en 
              contactarnos: <a href="mailto:info@homologacion.es" className="text-blue-600 font-medium">info@homologacion.es</a> 
              o <a href="tel:+34912345678" className="text-blue-600 font-medium">+34 912 345 678</a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PaymentConfirmationPage; 