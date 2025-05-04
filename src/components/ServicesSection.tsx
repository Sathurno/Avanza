import ServiceCard from './ServiceCard';

const ServicesSection = () => {
  const homologacionFeatures = [
    { text: 'Asesoría personalizada' },
    { text: 'Evaluación inicial de documentos' },
    { text: 'Gestión del expediente' },
    { text: 'Pago de tasa Administrativa' },
    { text: 'Registro de tu solicitud' },
    { text: 'Seguimiento del expediente' },
    { text: 'Garantía de resolución exitosa' }
  ];

  const visaFeatures = [
    { text: 'Asesoría personalizada' },
    { text: 'Evaluación inicial de documentos' },
    { text: 'Oferta académica (UCM, UPV, UV)' },
    { text: 'Revisión del expediente' },
    { text: 'Asesoría para pago de tasas' },
    { text: 'Equivalencia de notas medias' },
    { text: 'Presentación en plataforma' },
    { text: 'Envío de carta de admisión' }
  ];

  const convalidacionFeatures = [
    { text: 'Asesoría personalizada' },
    { text: 'Evaluación inicial de documentos' },
    { text: 'Gestión del expediente' },
    { text: 'Oferta académica para convalidación' },
    { text: 'Registro de solicitud' }
  ];

  return (
    <section id="servicios" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
          ¿Qué incluye nuestro servicio?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard 
            title="Homologación de Títulos"
            subtitle="Reconocimiento oficial en España"
            price="700€"
            paymentInfo="Pago del 50% para comenzar"
            features={homologacionFeatures}
            headerBgColor="bg-blue-900"
          />
          
          <ServiceCard 
            title="Visa de Estudios"
            subtitle="Estudia legalmente en España"
            price="730€"
            paymentInfo="Pago del 50% para comenzar"
            features={visaFeatures}
            isHighlighted={true}
            headerBgColor="bg-yellow-500"
            textColor="text-blue-900"
          />
          
          <ServiceCard 
            title="Convalidación Profesional"
            subtitle="Ejerce tu profesión en España"
            price="195€"
            paymentInfo="Pago único"
            features={convalidacionFeatures}
            headerBgColor="bg-blue-900"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 