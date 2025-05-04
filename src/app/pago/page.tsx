'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faExclamationTriangle,
  faEnvelope,
  faPhoneAlt,
  faSpinner
} from '@fortawesome/free-solid-svg-icons';
import { initPayPalButtons } from './paypal-mock';

// Service types
interface Service {
  id: string;
  name: string;
  price: string;
  initial: string;
  total: string;
  includes: string[];
}

// Payment details interface
interface PaymentDetails {
  transactionId: string;
  serviceName: string;
  amount: string;
}

const PaymentPage = () => {
  const router = useRouter();
  const [service, setService] = useState<Service | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    degree: ''
  });

  // Get service from URL params on component mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const serviceParam = params.get('service');
    
    const services: Record<string, Service> = {
      'homologacion': {
        id: 'homologacion',
        name: 'Homologación de Títulos',
        price: '700€',
        initial: '350€',
        total: '350€',
        includes: [
          'Asesoría personalizada',
          'Evaluación inicial de documentos',
          'Gestión del expediente',
          'Registro de tu solicitud'
        ]
      },
      'visa': {
        id: 'visa',
        name: 'Visa de Estudios',
        price: '730€',
        initial: '365€',
        total: '365€',
        includes: [
          'Asesoría personalizada',
          'Evaluación inicial de documentos',
          'Gestión del expediente', 
          'Presentación en consulado'
        ]
      },
      'convalidacion': {
        id: 'convalidacion',
        name: 'Convalidación Profesional',
        price: '195€',
        initial: '195€',
        total: '195€',
        includes: [
          'Asesoría personalizada',
          'Evaluación inicial de documentos',
          'Gestión del expediente',
          'Oferta académica para convalidación'
        ]
      }
    };
    
    if (serviceParam && services[serviceParam]) {
      setService(services[serviceParam]);
    } else {
      // Default to homologacion
      setService(services.homologacion);
    }
  }, []);

  // Initialize PayPal button after service is loaded
  useEffect(() => {
    if (service) {
      const amount = service.total.replace('€', '');
      
      // Handle success
      const handlePaymentSuccess = (details: PaymentDetails) => {
        // Redirect to confirmation page with transaction ID and service
        router.push(`/pago/confirmacion?transaction=${details.transactionId}&service=${service.id}`);
      };
      
      // Initialize PayPal button
      initPayPalButtons('paypal-button-container', service.name, amount, handlePaymentSuccess);
    }
  }, [service, router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  // Toggle FAQ items
  const toggleFaq = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const content = button.nextElementSibling as HTMLElement;
    const icon = button.querySelector('i');
    
    if (content && icon) {
      if (content.style.maxHeight) {
        content.style.maxHeight = '';
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
      } else {
        content.style.maxHeight = `${content.scrollHeight}px`;
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
      }
    }
  };

  if (!service) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <FontAwesomeIcon icon={faSpinner} spin className="text-blue-600 text-4xl" />
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <div className="flex items-center text-sm text-gray-600 mb-8">
          <Link href="/" className="text-blue-600 hover:underline">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/#servicios" className="text-blue-600 hover:underline">Servicios</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-500">Proceso de Pago</span>
        </div>

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Finaliza tu compra</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Estás a un paso de comenzar tu proceso de homologación o visado en España. 
            Completa el pago de forma segura con PayPal.
          </p>
        </div>

        {/* Payment Steps */}
        <div className="flex justify-between items-center mb-16 max-w-3xl mx-auto">
          <div className="payment-step completed text-center flex-1">
            <div className="step-number w-12 h-12 rounded-full border-2 border-blue-700 bg-blue-700 text-white flex items-center justify-center mx-auto mb-2">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <p className="font-medium text-blue-900">Selección de servicio</p>
          </div>
          
          <div className="payment-step active text-center flex-1">
            <div className="step-number w-12 h-12 rounded-full border-2 border-blue-700 bg-blue-700 text-white flex items-center justify-center mx-auto mb-2">
              2
            </div>
            <p className="font-medium text-blue-900">Pago seguro</p>
          </div>
          
          <div className="payment-step text-center flex-1">
            <div className="step-number w-12 h-12 rounded-full border-2 border-gray-300 bg-white text-gray-500 flex items-center justify-center mx-auto mb-2">
              3
            </div>
            <p className="font-medium text-gray-500">Confirmación</p>
          </div>
        </div>

        {/* Payment Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-bold text-blue-900 mb-6 pb-4 border-b border-gray-200">
                Resumen de tu pedido
              </h2>
              
              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium text-gray-700">Servicio seleccionado:</h3>
                  <span id="service-name" className="font-bold text-blue-900">{service.name}</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium text-gray-700">Precio:</h3>
                  <span id="service-price" className="font-bold text-blue-900">{service.price}</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium text-gray-700">Pago inicial:</h3>
                  <span id="initial-payment" className="font-bold text-blue-900">{service.initial}</span>
                </div>
                <div className="flex justify-between items-center py-4 border-t border-b border-gray-200">
                  <h3 className="font-medium text-gray-700">Total a pagar ahora:</h3>
                  <span id="total-payment" className="text-xl font-bold text-blue-900">{service.total}</span>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-bold text-blue-900 mb-2">¿Qué incluye?</h4>
                <ul className="space-y-2">
                  {service.includes.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <FontAwesomeIcon icon={faCheck} className="text-blue-500 mt-1 mr-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Payment Form */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-bold text-blue-900 mb-6 pb-4 border-b border-gray-200">
                Información del cliente
              </h2>
              
              <form id="client-info-form">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">Nombre</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">Apellidos</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Correo electrónico</label>
                    <input 
                      type="email" 
                      id="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Teléfono</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="country" className="block text-gray-700 font-medium mb-2">País de origen</label>
                    <select 
                      id="country" 
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                      required
                    >
                      <option value="">Selecciona tu país</option>
                      <option value="Argentina">Argentina</option>
                      <option value="Colombia">Colombia</option>
                      <option value="Venezuela">Venezuela</option>
                      <option value="México">México</option>
                      <option value="Perú">Perú</option>
                      <option value="Ecuador">Ecuador</option>
                      <option value="Chile">Chile</option>
                      <option value="Bolivia">Bolivia</option>
                      <option value="Otro">Otro</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="degree" className="block text-gray-700 font-medium mb-2">
                      Título a homologar (si aplica)
                    </label>
                    <input 
                      type="text" 
                      id="degree" 
                      value={formData.degree}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </form>
            </div>
            
            {/* Payment Method */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-blue-900 mb-6 pb-4 border-b border-gray-200">Método de pago</h2>
              
              <div className="mb-6">
                <div className="flex items-center justify-between p-4 border border-blue-200 rounded-lg bg-blue-50">
                  <div className="flex items-center">
                    <img src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg" alt="PayPal" className="h-8 mr-4" />
                    <span className="font-medium">PayPal</span>
                  </div>
                  <FontAwesomeIcon icon={faCheck} className="text-green-500 text-xl" />
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Serás redirigido a PayPal para completar tu pago de forma segura.
                </p>
              </div>
              
              <div id="paypal-button-container" className="mb-6">
                <div className="text-center py-8 bg-gray-50 rounded-lg border border-gray-200">
                  <FontAwesomeIcon icon={faSpinner} spin className="text-blue-500 text-3xl mb-2" />
                  <p className="text-gray-600">Cargando pasarela de pago...</p>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                <div className="flex">
                  <FontAwesomeIcon icon={faExclamationTriangle} className="text-yellow-500 mt-1 mr-3" />
                  <div>
                    <h4 className="font-bold text-yellow-700 mb-1">Importante</h4>
                    <p className="text-yellow-700 text-sm">
                      Al completar el pago, recibirás un correo electrónico con los formularios y 
                      documentos requeridos para iniciar tu proceso. Nuestro equipo se pondrá en 
                      contacto contigo en un plazo máximo de 24 horas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Preguntas sobre el pago</h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {/* FAQ Item 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <button 
                className="faq-toggle w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
                onClick={toggleFaq}
              >
                <span className="font-bold text-blue-900">¿Es seguro pagar con PayPal?</span>
                <i className="fas fa-chevron-down text-blue-500 transition-transform duration-300"></i>
              </button>
              <div className="accordion-content px-6" style={{ maxHeight: 0, overflow: 'hidden', transition: 'max-height 0.3s ease-out' }}>
                <div className="pb-4 text-gray-700">
                  Sí, PayPal es una de las plataformas de pago más seguras del mundo. No almacenamos ni tenemos acceso a 
                  tus datos bancarios o de tarjeta de crédito. Todo el proceso de pago se realiza directamente en los servidores 
                  seguros de PayPal.
                </div>
              </div>
            </div>
            
            {/* FAQ Item 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <button 
                className="faq-toggle w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
                onClick={toggleFaq}
              >
                <span className="font-bold text-blue-900">¿Qué pasa después del pago?</span>
                <i className="fas fa-chevron-down text-blue-500 transition-transform duration-300"></i>
              </button>
              <div className="accordion-content px-6" style={{ maxHeight: 0, overflow: 'hidden', transition: 'max-height 0.3s ease-out' }}>
                <div className="pb-4 text-gray-700">
                  Inmediatamente después de confirmarse tu pago:
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Recibirás un correo electrónico con la confirmación de tu compra</li>
                    <li>Te enviaremos los formularios y documentos requeridos para iniciar tu proceso</li>
                    <li>Un asesor especializado se pondrá en contacto contigo en un plazo máximo de 24 horas</li>
                    <li>Comenzaremos a trabajar en tu caso de inmediato</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* FAQ Item 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <button 
                className="faq-toggle w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
                onClick={toggleFaq}
              >
                <span className="font-bold text-blue-900">¿Hay algún cargo adicional?</span>
                <i className="fas fa-chevron-down text-blue-500 transition-transform duration-300"></i>
              </button>
              <div className="accordion-content px-6" style={{ maxHeight: 0, overflow: 'hidden', transition: 'max-height 0.3s ease-out' }}>
                <div className="pb-4 text-gray-700">
                  No, el precio mostrado incluye todos los costes asociados al servicio. El único cargo adicional sería 
                  si necesitas servicios complementarios como traducciones juradas o legalizaciones, que serían opcionales 
                  y acordados contigo previamente.
                </div>
              </div>
            </div>
            
            {/* FAQ Item 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <button 
                className="faq-toggle w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
                onClick={toggleFaq}
              >
                <span className="font-bold text-blue-900">¿Qué métodos de pago aceptan?</span>
                <i className="fas fa-chevron-down text-blue-500 transition-transform duration-300"></i>
              </button>
              <div className="accordion-content px-6" style={{ maxHeight: 0, overflow: 'hidden', transition: 'max-height 0.3s ease-out' }}>
                <div className="pb-4 text-gray-700">
                  Actualmente trabajamos exclusivamente con PayPal, que acepta:
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Tarjetas de crédito y débito (Visa, MasterCard, American Express)</li>
                    <li>Cuentas bancarias (en algunos países)</li>
                    <li>Saldo de PayPal</li>
                  </ul>
                  No aceptamos transferencias bancarias directas ni otros métodos de pago.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Necesitas ayuda con el pago?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Nuestro equipo está disponible para resolver cualquier duda sobre el proceso de pago 
            o los servicios que ofrecemos.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="mailto:info@homologacion.es" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-4 px-8 rounded-md transition duration-300">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              Envíanos un email
            </a>
            <a href="tel:+34912345678" className="bg-white hover:bg-gray-100 text-blue-900 font-bold py-4 px-8 rounded-md transition duration-300">
              <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
              Llamar ahora
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaymentPage; 