import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

import '@fontsource/lato/300.css';
import '@fontsource/lato/400.css';
import '@fontsource/lato/700.css';

// Font Awesome configuration
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent Font Awesome from adding its CSS since we did it manually above
config.autoAddCss = false;

const lato = Lato({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lato',
});

export const metadata: Metadata = {
  title: "Homologación de Títulos en España | Asesoría Legal",
  description: "Servicios de homologación de títulos extranjeros en España, visados de estudios y convalidación profesional.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${lato.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-gray-50">
        {children}
      </body>
    </html>
  );
}
