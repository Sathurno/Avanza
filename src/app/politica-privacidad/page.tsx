import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SchoolIcon from '@mui/icons-material/School';

export const metadata: Metadata = {
  title: 'Política de Privacidad | Homologación de Títulos en España',
  description: 'Política de privacidad de Homologacion/es. Términos y condiciones sobre el uso y tratamiento de datos personales.',
};

export default function PoliticaPrivacidad() {
  return (
    <>
      <div className="bg-blue-900 text-white py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold flex items-center">
            <SchoolIcon className="mr-2" fontSize="large" />
            <span>HOMOLOGACION/ES</span>
          </Link>
          <Link href="/" className="inline-flex items-center text-white hover:text-blue-200 transition">
            <ArrowBackIcon className="mr-2" /> Volver a la página principal
          </Link>
        </div>
      </div>
      <main className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-8">Política de Privacidad</h1>
          
          <div className="prose max-w-full">
            <p className="mb-4">Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mt-8 mb-4">1. Introducción</h2>
            <p className="mb-4">
              En Homologacion/es, nos comprometemos a proteger la privacidad de nuestros usuarios. 
              Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y protegemos su información personal 
              cuando utiliza nuestro sitio web y nuestros servicios.
            </p>
            
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mt-8 mb-4">2. Información que recopilamos</h2>
            <p className="mb-4">Podemos recopilar los siguientes tipos de información:</p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>Información personal identificable:</strong> Nombre, dirección de correo electrónico, número de teléfono, dirección postal, datos académicos y profesionales.</li>
              <li className="mb-2"><strong>Información no personal:</strong> Datos de uso, dirección IP, tipo de navegador, tiempo de acceso.</li>
              <li className="mb-2"><strong>Cookies y tecnologías similares:</strong> Utilizamos cookies para mejorar su experiencia en nuestro sitio web.</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mt-8 mb-4">3. Uso de la información</h2>
            <p className="mb-4">Utilizamos la información recopilada para:</p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Proporcionar, mantener y mejorar nuestros servicios.</li>
              <li className="mb-2">Procesar solicitudes y tramitaciones de homologación y convalidación de títulos.</li>
              <li className="mb-2">Comunicarnos con usted sobre actualizaciones, ofertas y eventos.</li>
              <li className="mb-2">Prevenir fraudes y mejorar la seguridad de nuestros servicios.</li>
              <li className="mb-2">Cumplir con obligaciones legales.</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mt-8 mb-4">4. Divulgación de información</h2>
            <p className="mb-4">Podemos compartir su información en las siguientes circunstancias:</p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>Proveedores de servicios:</strong> Compartimos información con terceros que nos ayudan a operar nuestro sitio web y servicios.</li>
              <li className="mb-2"><strong>Cumplimiento legal:</strong> Podemos divulgar información cuando sea requerido por ley o para proteger nuestros derechos.</li>
              <li className="mb-2"><strong>Consentimiento:</strong> Con su permiso explícito para fines específicos.</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mt-8 mb-4">5. Seguridad de datos</h2>
            <p className="mb-4">
              Implementamos medidas de seguridad técnicas y organizativas para proteger su información personal. 
              Sin embargo, ningún método de transmisión por Internet es completamente seguro, por lo que no podemos garantizar su seguridad absoluta.
            </p>
            
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mt-8 mb-4">6. Sus derechos</h2>
            <p className="mb-4">Según el Reglamento General de Protección de Datos (RGPD), usted tiene derecho a:</p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Acceder a sus datos personales.</li>
              <li className="mb-2">Rectificar datos inexactos.</li>
              <li className="mb-2">Solicitar la eliminación de sus datos.</li>
              <li className="mb-2">Oponerse al procesamiento de sus datos.</li>
              <li className="mb-2">Solicitar la portabilidad de sus datos.</li>
              <li className="mb-2">Retirar su consentimiento en cualquier momento.</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mt-8 mb-4">7. Cambios en la política de privacidad</h2>
            <p className="mb-4">
              Podemos actualizar nuestra Política de Privacidad periódicamente. Le notificaremos cualquier cambio 
              publicando la nueva Política de Privacidad en esta página y actualizando la fecha de &ldquo;última actualización&rdquo;.
            </p>
            
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mt-8 mb-4">8. Contacto</h2>
            <p className="mb-4">
              Si tiene preguntas sobre esta Política de Privacidad, contáctenos en:
            </p>
            <p className="mb-8">
              <strong>Email:</strong> info@homologacion.es<br />
              <strong>Teléfono:</strong> +34 912 345 678<br />
              <strong>Dirección:</strong> Calle de la Homologación, 123, 28001 Madrid, España
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 