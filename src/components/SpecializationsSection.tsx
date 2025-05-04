import SchoolIcon from '@mui/icons-material/School';
import CalculateIcon from '@mui/icons-material/Calculate';
import GavelIcon from '@mui/icons-material/Gavel';
import BusinessIcon from '@mui/icons-material/Business';
import PersonIcon from '@mui/icons-material/Person';

interface SpecializationCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const SpecializationCard = ({ title, description, icon }: SpecializationCardProps) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="text-blue-900 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-blue-900 mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

const SpecializationsSection = () => {
  const specializations = [
    {
      title: "Homologación de títulos",
      description: "Expertos en validar tus estudios extranjeros para que sean reconocidos en España.",
      icon: <SchoolIcon fontSize="large" />
    },
    {
      title: "Equivalencia de títulos",
      description: "Simplificamos el proceso para obtener la acreditación adecuada de tu título.",
      icon: <CalculateIcon fontSize="large" />
    },
    {
      title: "Asesoramiento legal",
      description: "Te guiamos en la legalización y apostilla de documentos.",
      icon: <GavelIcon fontSize="large" />
    },
    {
      title: "Convalidación académica",
      description: "Te guiamos para la obtención del reconocimiento oficial de tus estudios en Universidades Públicas españolas.",
      icon: <BusinessIcon fontSize="large" />
    },
    {
      title: "Gestión personalizada",
      description: "Ofrecemos soluciones adaptadas a tus necesidades específicas.",
      icon: <PersonIcon fontSize="large" />
    }
  ];

  return (
    <section id="especializaciones" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-4">
          Nuestras áreas de especialización
        </h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-16">
          En HOMOLOGACION/ES-España, nos especializamos en ofrecer soluciones adaptadas a tus necesidades.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specializations.map((spec, index) => (
            <SpecializationCard
              key={index}
              title={spec.title}
              description={spec.description}
              icon={spec.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecializationsSection; 