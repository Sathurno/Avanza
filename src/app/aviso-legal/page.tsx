import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SchoolIcon from '@mui/icons-material/School';

export const metadata: Metadata = {
  title: 'Aviso Legal | Homologación de Títulos en España',
  description: 'Aviso legal de Homologacion/es. Información sobre titularidad, condiciones de uso y responsabilidad legal.',
};

export default function AvisoLegal() {
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
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-8">Aviso Legal</h1>
          
          <div className="prose max-w-full">
            <p className="mb-4">Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mt-8 mb-4">1. Información General</h2>
            <p className="mb-4">
              En cumplimiento con el deber de información dispuesto en la Ley 34/2002 de Servicios de la Sociedad de la
              Información y el Comercio Electrónico (LSSI-CE) de 11 de julio, se facilitan a continuación los siguientes
              datos de información general de este sitio web:
            </p>
            <p className="mb-4">
              La titularidad de este sitio web, <span className="font-semibold">homologacion.es</span>, (en adelante, Sitio Web) la ostenta: Homologacion/es, S.L.,
              provista de NIF: B-12345678 y cuyos datos de contacto son:
            </p>
            <p className="mb-4">
              <strong>Dirección:</strong> Calle de la Homologación, 123, 28001 Madrid, España<br />
              <strong>Teléfono de contacto:</strong> +34 912 345 678<br />
              <strong>Email de contacto:</strong> info@homologacion.es
            </p>
            
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mt-8 mb-4">2. Objeto</h2>
            <p className="mb-4">
              El presente Aviso Legal regula el uso y utilización del Sitio Web, al que se accede a través
              de la dirección de Internet https://www.homologacion.es.
            </p>
            <p className="mb-4">
              La navegación por el Sitio Web de Homologacion/es atribuye la condición de usuario e implica la aceptación
              plena y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal, que pueden
              sufrir modificaciones.
            </p>
            
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mt-8 mb-4">3. Obligaciones del Usuario</h2>
            <p className="mb-4">
              El usuario se compromete a utilizar el Sitio Web de conformidad con la ley, el presente Aviso Legal,
              las Políticas de Privacidad y de Cookies, así como con la moral y buenas costumbres generalmente aceptadas
              y el orden público. El usuario se obliga a:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">No realizar actividades ilícitas, ilegales o contrarias a la buena fe y al orden público.</li>
              <li className="mb-2">No difundir contenidos o propaganda de carácter racista, xenófobo, pornográfico, de apología del terrorismo o atentatorio contra los derechos humanos.</li>
              <li className="mb-2">No provocar daños en los sistemas físicos y lógicos de Homologacion/es o de terceros.</li>
              <li className="mb-2">No introducir o difundir en la red virus informáticos o realizar actuaciones susceptibles de alterar, estropear, interrumpir o generar errores o daños en documentos electrónicos.</li>
              <li className="mb-2">No obstaculizar el acceso de otros usuarios al servicio mediante el consumo masivo de los recursos informáticos a través de los cuales Homologacion/es presta el servicio.</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mt-8 mb-4">4. Responsabilidad</h2>
            <p className="mb-4">
              Homologacion/es no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza
              que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad
              del portal o la transmisión de virus o programas maliciosos, a pesar de haber adoptado todas las medidas
              tecnológicas necesarias para evitarlo.
            </p>
            <p className="mb-4">
              El contenido, información y consejos expresados en este Sitio Web deben entenderse como orientativos.
              Homologacion/es no se responsabiliza de la información que se pueda obtener a través de fuentes externas a este Sitio Web,
              ni de las opiniones o consejos de terceros publicados a través de herramientas de participación.
            </p>
            
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mt-8 mb-4">5. Propiedad Intelectual e Industrial</h2>
            <p className="mb-4">
              Homologacion/es es titular de todos los derechos de propiedad intelectual e industrial de su página web,
              así como de los elementos contenidos en la misma (a título enunciativo: imágenes, sonido, audio, vídeo, software
              o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, selección de materiales usados,
              programas de ordenador necesarios para su funcionamiento, acceso y uso, etc.).
            </p>
            <p className="mb-4">
              Quedan expresamente prohibidas la reproducción, la distribución y la comunicación pública, incluida su
              modalidad de puesta a disposición, de la totalidad o parte de los contenidos de este Sitio Web, con fines
              comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización de Homologacion/es.
            </p>
            
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mt-8 mb-4">6. Política de Enlaces</h2>
            <p className="mb-4">
              Se permite establecer un enlace entre su página web y nuestro Sitio Web, siempre que se realice de manera
              que no perjudique nuestra imagen o reputación. No está permitido establecer un enlace de forma que se sugiera
              algún tipo de asociación, aprobación o respaldo por parte de Homologacion/es sin existir.
            </p>
            <p className="mb-4">
              El Sitio Web incluye enlaces a otros sitios web gestionados por terceros. Homologacion/es no asume ningún
              tipo de responsabilidad respecto al contenido, informaciones o servicios que pudieran aparecer en dichos sitios,
              que tendrán exclusivamente carácter informativo.
            </p>
            
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mt-8 mb-4">7. Legislación y Jurisdicción Aplicable</h2>
            <p className="mb-4">
              Para la resolución de todas las controversias o cuestiones relacionadas con el presente Sitio Web o de las
              actividades en él desarrolladas, será de aplicación la legislación española, a la que se someten expresamente
              las partes, siendo competentes para la resolución de todos los conflictos derivados o relacionados con su uso
              los Juzgados y Tribunales de Madrid.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 