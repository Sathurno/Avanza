'use client';

import { useState, FormEvent } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    servicio: '',
    mensaje: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission - would be connected to backend API in a real implementation
    console.log('Form submitted:', formData);
    alert('Mensaje enviado con éxito. Nos pondremos en contacto contigo pronto.');
    // Reset form
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      servicio: '',
      mensaje: ''
    });
  };

  return (
    <section id="contacto" className="py-16 bg-white text-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">¿Tienes dudas? Contáctanos</h2>
        
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h3 className="text-2xl font-bold mb-4">Información de contacto</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <LocationOnIcon className="text-[var(--color-secondary)] mt-1 mr-4" />
                <div>
                  <h4 className="font-bold">Dirección</h4>
                  <p>Calle de la Homologación, 123<br />28001 Madrid, España</p>
                </div>
              </div>
              <div className="flex items-start">
                <PhoneIcon className="text-[var(--color-secondary)] mt-1 mr-4" />
                <div>
                  <h4 className="font-bold">Teléfono</h4>
                  <p>+34 912 345 678</p>
                </div>
              </div>
              <div className="flex items-start">
                <EmailIcon className="text-[var(--color-secondary)] mt-1 mr-4" />
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p>info@homologacion.es</p>
                </div>
              </div>
              <div className="flex items-start">
                <AccessTimeIcon className="text-[var(--color-secondary)] mt-1 mr-4" />
                <div>
                  <h4 className="font-bold">Horario de atención</h4>
                  <p>Lunes a Viernes: 9:00 - 18:00<br />Sábados: 10:00 - 14:00</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-bold mb-4">Síguenos en redes sociales</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] flex items-center justify-center transition"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="text-white" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] flex items-center justify-center transition"
                  aria-label="Twitter"
                >
                  <TwitterIcon className="text-white" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] flex items-center justify-center transition"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon className="text-white" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] flex items-center justify-center transition"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="text-white" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <form className="bg-white text-gray-800 p-6 rounded-lg shadow-lg border border-gray-200" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="nombre" className="block text-gray-700 font-bold mb-2">Nombre completo</label>
                <input 
                  type="text" 
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="telefono" className="block text-gray-700 font-bold mb-2">Teléfono</label>
                <input 
                  type="tel" 
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="servicio" className="block text-gray-700 font-bold mb-2">Servicio de interés</label>
                <select 
                  id="servicio"
                  name="servicio"
                  value={formData.servicio}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="homologacion">Homologación de Títulos</option>
                  <option value="visa">Visa de Estudios</option>
                  <option value="convalidacion">Convalidación Profesional</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="mensaje" className="block text-gray-700 font-bold mb-2">Mensaje</label>
                <textarea 
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows={4} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] text-white font-bold py-3 px-4 rounded-md transition duration-300"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 