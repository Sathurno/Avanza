import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PaymentsIcon from '@mui/icons-material/Payments';
import Link from 'next/link';

interface Feature {
  text: string;
}

interface ServiceCardProps {
  title: string;
  subtitle: string;
  price: string;
  paymentInfo: string;
  features: Feature[];
  isHighlighted?: boolean;
  headerBgColor?: string;
  textColor?: string;
}

const ServiceCard = ({
  title,
  subtitle,
  price,
  paymentInfo,
  features,
  isHighlighted = false,
  headerBgColor = 'bg-[var(--color-primary)]',
  textColor = 'text-white'
}: ServiceCardProps) => {
  // Determine service id from title for the URL parameter
  const getServiceId = () => {
    if (title.includes('Homologación')) return 'homologacion';
    if (title.includes('Visa')) return 'visa';
    if (title.includes('Convalidación')) return 'convalidacion';
    return 'homologacion'; // default
  };

  return (
    <div 
      className={`service-card bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 transition duration-300 ${
        isHighlighted ? 'transform scale-105' : ''
      }`}
    >
      <div className={`${headerBgColor} ${textColor} py-4 px-6`}>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className={`${headerBgColor === 'bg-[var(--color-primary)]' ? 'text-blue-200' : 'text-blue-800'}`}>
          {subtitle}
        </p>
      </div>
      <div className="p-6">
        <div className="text-center mb-6">
          <span className="text-4xl font-bold text-[var(--color-primary)]">{price}</span>
          <p className="text-gray-600 mt-1">{paymentInfo}</p>
        </div>
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircleIcon className="text-green-500 mt-1 mr-2" fontSize="small" />
              <span>{feature.text}</span>
            </li>
          ))}
        </ul>
        <Link href={`/pago?service=${getServiceId()}`} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition duration-300 flex items-center justify-center">
          <PaymentsIcon className="mr-2" fontSize="small" />
          Pagar con PayPal
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard; 