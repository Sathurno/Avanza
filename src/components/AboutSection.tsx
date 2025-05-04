import Link from 'next/link';
import Image from 'next/image';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const AboutSection = () => {
  return (
    <section id="conocenos" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
          Conócenos
        </h2>
        
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8 relative h-auto w-full">
            <div className="w-full rounded-lg  overflow-hidden">
              <Image 
                src="/images/profile-pic.png" 
                alt="Nuestro equipo legal" 
                width={500} 
                height={600} 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Nuestro equipo de expertos en homologación
            </h3>
            <p className="text-gray-700 mb-6">
              Somos un despacho especializado en la homologación de títulos extranjeros en España, con más de 10 años de experiencia ayudando a profesionales internacionales a validar sus estudios y ejercer legalmente en el país.
            </p>
            <p className="text-gray-700 mb-6">
              Nuestro equipo multidisciplinar incluye abogados especializados en derecho educativo, gestores administrativos con amplia experiencia en trámites ministeriales y asesores académicos que conocen los requisitos específicos de cada profesión.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-900 mb-2">¿Por qué elegirnos?</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircleIcon className="text-blue-500 mt-1 mr-2" fontSize="small" />
                  <span>Asesoramiento personalizado según tu caso específico</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="text-blue-500 mt-1 mr-2" fontSize="small" />
                  <span>Conocimiento actualizado de la normativa</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="text-blue-500 mt-1 mr-2" fontSize="small" />
                  <span>Contacto directo con las instituciones educativas</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="text-blue-500 mt-1 mr-2" fontSize="small" />
                  <span>Seguimiento constante de tu expediente</span>
                </li>
              </ul>
            </div>
            
            <Link 
              href="/conocenos" 
              className="inline-block mt-6 bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-md transition duration-300"
            >
              Más sobre nosotros <ArrowRightAltIcon className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 