'use client';

import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';

interface TestimonialCardProps {
  initials: string;
  name: string;
  profession: string;
  country: string;
  testimonial: string;
  rating: number;
}

const TestimonialCard = ({ initials, name, profession, country, testimonial, rating }: TestimonialCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-[var(--color-primary)] font-bold mr-4">
          {initials}
        </div>
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-sm text-gray-600">{profession} - {country}</p>
        </div>
      </div>
      <p className="text-gray-700 italic">&ldquo;{testimonial}&rdquo;</p>
      <div className="mt-4 text-yellow-500 flex">
        {[...Array(Math.floor(rating))].map((_, i) => (
          <StarIcon key={`star-${i}`} />
        ))}
        {rating % 1 !== 0 && <StarHalfIcon />}
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      initials: 'AM',
      name: 'Ana Martínez',
      profession: 'Médico',
      country: 'Venezuela',
      testimonial: 'Gracias a su ayuda pude homologar mi título de medicina en solo 14 meses. Su asesoramiento fue fundamental para presentar todos los documentos correctamente y evitar rechazos.',
      rating: 5
    },
    {
      initials: 'CR',
      name: 'Carlos Rodríguez',
      profession: 'Ingeniero',
      country: 'Colombia',
      testimonial: 'El proceso de convalidación de mi ingeniería fue más complejo de lo esperado, pero el equipo estuvo conmigo en cada paso, incluso cuando hubo que presentar recursos. Totalmente recomendados.',
      rating: 4.5
    },
    {
      initials: 'LG',
      name: 'Luisa González',
      profession: 'Estudiante',
      country: 'México',
      testimonial: 'Conseguí mi visa de estudios gracias a su gestión con la universidad. Me ayudaron con todo el papeleo y hasta me orientaron sobre alojamiento en Madrid. ¡Excelente servicio!',
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[var(--color-primary)] mb-12">
          Testimonios de nuestros clientes
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              initials={testimonial.initials}
              name={testimonial.name}
              profession={testimonial.profession}
              country={testimonial.country}
              testimonial={testimonial.testimonial}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 