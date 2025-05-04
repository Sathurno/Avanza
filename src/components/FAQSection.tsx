'use client';

import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <button 
        className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
        onClick={toggleAccordion}
        aria-expanded={isOpen}
      >
        <span className="font-bold text-blue-900">{question}</span>
        {isOpen ? (
          <KeyboardArrowUpIcon className="text-blue-500 transition-transform duration-300" />
        ) : (
          <KeyboardArrowDownIcon className="text-blue-500 transition-transform duration-300" />
        )}
      </button>
      <div 
        className={`transition-all duration-300 ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}
      >
        <div className="px-6 pb-4 text-gray-700">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQSection = () => {
  return (
    <section id="faq" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
          Preguntas frecuentes
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-4">
          <FAQItem 
            question="¿Qué documentos necesito para homologar mi título?"
            answer={
              <>
                Un asesor personalizado se encargará de realizar tu asesoría inicial con modelos detallados de todos los documentos que necesitarás para el proceso. Los requisitos varían según el tipo de título y país de origen, pero generalmente incluyen:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Título académico original legalizado</li>
                  <li>Certificado de notas legalizado</li>
                  <li>Programa de estudios detallado</li>
                  <li>Documento de identidad</li>
                  <li>Traducciones juradas cuando aplique</li>
                </ul>
              </>
            }
          />
          
          <FAQItem 
            question="¿Cuánto tiempo tarda el proceso?"
            answer={
              <>
                Los tiempos varían según el tipo de titulación:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li><strong>Títulos Universitarios:</strong> de 12-24 meses</li>
                  <li><strong>Títulos Técnicos:</strong> 3-6 meses</li>
                  <li><strong>Bachiller:</strong> 1-3 meses</li>
                </ul>
                <p className="mt-3">Estos tiempos son aproximados y pueden variar según la carga de trabajo del Ministerio y la complejidad de cada caso.</p>
              </>
            }
          />
          
          <FAQItem 
            question="¿Cómo puedo contratar los servicios?"
            answer={
              <>
                Puedes contratar directamente desde nuestra página web: ingresa al servicio que necesitas y completa el pago. Si necesitas ayuda, escríbenos a <a href="mailto:info@homologacion.es" className="text-blue-600 hover:underline">info@homologacion.es</a> o llámanos al <a href="tel:+34912345678" className="text-blue-600 hover:underline">+34 912 345 678</a>.
                <p className="mt-3">Nuestro proceso de contratación es sencillo:</p>
                <ol className="list-decimal pl-5 mt-2 space-y-1">
                  <li>Selecciona el servicio que necesitas</li>
                  <li>Realiza el pago inicial (50% para homologación y visa, 100% para convalidación)</li>
                  <li>Recibirás un correo con los formularios y documentos requeridos</li>
                  <li>Nuestro equipo se pondrá en contacto contigo para iniciar el proceso</li>
                </ol>
              </>
            }
          />
          
          <FAQItem 
            question="¿Qué pasa si mi solicitud es rechazada?"
            answer={
              <>
                En caso de rechazo, nuestro equipo analizará las causas y te asesorará sobre los pasos a seguir. Dependiendo del motivo del rechazo, podemos:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Presentar recursos administrativos</li>
                  <li>Complementar la documentación requerida</li>
                  <li>Reorientar el proceso hacia una convalidación parcial</li>
                  <li>En casos extremos, gestionar la devolución según nuestros términos de garantía</li>
                </ul>
                <p className="mt-3">Nuestra tasa de éxito es del 95%, gracias a la evaluación previa que realizamos antes de iniciar cualquier trámite.</p>
              </>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 