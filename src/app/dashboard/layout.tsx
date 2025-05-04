import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Panel de Control | Homologación de Títulos',
  description: 'Gestiona tus trámites de homologación de títulos, visados y servicios legales',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
        <Script 
          id="dashboard-script" 
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ 
            __html: `
              // Simple animation for progress bar
              document.addEventListener('DOMContentLoaded', function() {
                  const progressBar = document.querySelector('.progress-bar');
                  if (progressBar) {
                      setTimeout(() => {
                          progressBar.style.width = '65%';
                      }, 300);
                  }
              });
            ` 
          }}
        />
      </body>
    </html>
  );
} 