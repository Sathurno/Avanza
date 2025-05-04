import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SchoolIcon from '@mui/icons-material/School';

export const metadata: Metadata = {
  title: 'Términos y Condiciones | Homologación de Títulos en España',
  description: 'Términos y condiciones de uso de los servicios de Homologacion/es. Información sobre derechos y obligaciones.',
};

export default function TerminosCondiciones() {
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
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-8">Términos y Condiciones</h1>
          
          <div className="prose max-w-full">
            <p className="mb-4">Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mt-8 mb-4">1. Introducción</h2>
            <p className="mb-4">
              Bienvenido a Homologacion/es. Estos Términos y Condiciones rigen su uso de nuestro sitio web y servicios.
              Al acceder o utilizar nuestros servicios, usted acepta estar sujeto a estos términos. Si no está de acuerdo
              con alguna parte de estos términos, no podrá acceder o utilizar nuestros servicios.
            </p>
            
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mt-8 mb-4">2. Servicios</h2>
            <p className="mb-4">
              Homologacion/es ofrece servicios de asesoramiento y gestión para la homologación de títulos extranjeros,
              convalidación profesional y tramitación de visados de estudios en España. Nuestros servicios incluyen:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Asesoría personalizada</li>
              <li className="mb-2">Gestión de expedientes</li>
              <li className="mb-2">Tramitación de documentos</li>
              <li className="mb-2">Representación ante organismos oficiales</li>
              <li className="mb-2">Seguimiento del proceso</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mt-8 mb-4">3. Tarifas y Pagos</h2>
            <p className="mb-4">
              Los precios de nuestros servicios están claramente indicados en nuestra página web. El pago debe realizarse
              según las condiciones especificadas para cada servicio. Aceptamos pagos por transferencia bancaria y
              tarjetas de crédito/débito. Para algunos servicios, se requiere un pago inicial y el resto se abonará
              según las etapas del proceso.
            </p>
            
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mt-8 mb-4">4. Derechos y Obligaciones del Cliente</h2>
            <h3 className="text-xl font-semibold text-[var(--color-primary)] mt-4 mb-2">Derechos:</h3>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Recibir información clara y transparente sobre los servicios contratados.</li>
              <li className="mb-2">Obtener actualizaciones periódicas sobre el estado de su trámite.</li>
              <li className="mb-2">Confidencialidad de la información proporcionada.</li>
              <li className="mb-2">Cancelar el servicio según las condiciones establecidas.</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-[var(--color-primary)] mt-4 mb-2">Obligaciones:</h3>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Proporcionar documentación veraz y completa.</li>
              <li className="mb-2">Colaborar en el proceso cuando sea necesario.</li>
              <li className="mb-2">Realizar los pagos acordados en los plazos establecidos.</li>
              <li className="mb-2">Notificar cualquier cambio relevante para el proceso.</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mt-8 mb-4">5. Limitación de Responsabilidad</h2>
            <p className="mb-4">
              Homologacion/es se compromete a prestar sus servicios con la máxima diligencia y profesionalidad.
              Sin embargo, no podemos garantizar resultados específicos, ya que las decisiones finales dependen
              de las autoridades competentes. No nos hacemos responsables de:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Retrasos causados por las administraciones públicas.</li>
              <li className="mb-2">Denegaciones basadas en criterios de las autoridades competentes.</li>
              <li className="mb-2">Cambios normativos durante el proceso.</li>
              <li className="mb-2">Información incorrecta proporcionada por el cliente.</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mt-8 mb-4">6. Propiedad Intelectual</h2>
            <p className="mb-4">
              Todo el contenido de nuestro sitio web, incluyendo textos, gráficos, logos, iconos, imágenes, clips
              de audio, descargas digitales y software, es propiedad de Homologacion/es o de sus proveedores de
              contenido y está protegido por leyes de propiedad intelectual. Queda prohibida su reproducción sin
              autorización expresa.
            </p>
            
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mt-8 mb-4">7. Política de Cancelación y Reembolso</h2>
            <p className="mb-4">
              Si desea cancelar un servicio contratado, debe notificarlo por escrito. Las condiciones de reembolso
              varían según el servicio y la fase en la que se encuentre:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Cancelación antes de iniciar el proceso: reembolso del 80% del importe abonado.</li>
              <li className="mb-2">Cancelación durante la fase inicial: reembolso del 50% del importe abonado.</li>
              <li className="mb-2">Cancelación con el proceso avanzado: no se realizará reembolso.</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mt-8 mb-4">8. Cambios en los Términos</h2>
            <p className="mb-4">
              Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento.
              Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio web.
              Es su responsabilidad revisar periódicamente estos términos.
            </p>
            
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mt-8 mb-4">9. Ley Aplicable</h2>
            <p className="mb-4">
              Estos Términos y Condiciones se rigen por la legislación española. Cualquier disputa relacionada
              con estos términos se someterá a la jurisdicción de los tribunales de Madrid.
            </p>
            
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mt-8 mb-4">10. Contacto</h2>
            <p className="mb-8">
              Si tiene preguntas sobre estos Términos y Condiciones, contáctenos en:<br />
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