import './payment.css';

export const metadata = {
  title: 'Proceso de Pago | Homologación de Títulos en España',
  description: 'Realiza el pago seguro de tu servicio de homologación de títulos, visa de estudios o convalidación profesional en España.',
};

export default function PaymentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="payment-layout">
      {children}
    </div>
  );
} 