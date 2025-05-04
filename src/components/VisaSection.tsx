import Link from 'next/link';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SecurityIcon from '@mui/icons-material/Security';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import HomeIcon from '@mui/icons-material/Home';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

interface VisaRequirementProps {
  icon: React.ReactNode;
  text: string;
}

const VisaRequirement = ({ icon, text }: VisaRequirementProps) => (
  <li className="flex items-start">
    {icon}
    <span>{text}</span>
  </li>
);

const VisaSection = () => {
  const requirements = [
    {
      icon: <InsertDriveFileIcon className="text-[var(--color-primary)] mt-1 mr-3" />,
      text: 'Carta de admisión de una institución educativa reconocida'
    },
    {
      icon: <AttachMoneyIcon className="text-[var(--color-primary)] mt-1 mr-3" />,
      text: 'Comprobante de solvencia económica'
    },
    {
      icon: <SecurityIcon className="text-[var(--color-primary)] mt-1 mr-3" />,
      text: 'Seguro médico con cobertura en España'
    },
    {
      icon: <CardTravelIcon className="text-[var(--color-primary)] mt-1 mr-3" />,
      text: 'Pasaporte válido'
    },
    {
      icon: <HomeIcon className="text-[var(--color-primary)] mt-1 mr-3" />,
      text: 'Comprobante de alojamiento en España'
    },
    {
      icon: <VerifiedUserIcon className="text-[var(--color-primary)] mt-1 mr-3" />,
      text: 'Certificado de antecedentes penales'
    }
  ];

  const benefits = [
    {
      title: 'Asesoramiento completo',
      description: 'Te guiamos en cada paso del proceso de obtención de tu visa de estudiante.'
    },
    {
      title: 'Gestión con universidades',
      description: 'Trabajamos con las principales universidades españolas para garantizar tu admisión.'
    },
    {
      title: 'Preparación de documentos',
      description: 'Te ayudamos a reunir y preparar toda la documentación requerida.'
    }
  ];

  return (
    <section id="visa" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 md:p-12">
              <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-4">
                Visa de Estudios en España
              </h2>
              <p className="text-gray-700 mb-6">
                Gestionamos todo el proceso para que puedas estudiar legalmente en España, desde la preinscripción universitaria hasta la obtención de tu visado.
              </p>
              
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircleIcon className="text-green-500 mt-1 mr-3" />
                    <div>
                      <h4 className="font-bold text-[var(--color-primary)]">{benefit.title}</h4>
                      <p className="text-gray-700">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Link
                href="#servicios"
                className="inline-block bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-hover)] text-[var(--color-primary)] font-bold py-3 px-6 rounded-md transition duration-300"
              >
                Contratar servicio <ArrowRightAltIcon className="ml-2" />
              </Link>
            </div>
            <div className="md:w-1/2 bg-blue-50 p-8 md:p-12 flex items-center">
              <div>
                <h3 className="text-xl font-bold text-[var(--color-primary)] mb-4">
                  ¿Qué necesitas para la visa de estudios?
                </h3>
                <ul className="space-y-3">
                  {requirements.map((req, index) => (
                    <VisaRequirement key={index} icon={req.icon} text={req.text} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisaSection; 