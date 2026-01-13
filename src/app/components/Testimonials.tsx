import { motion } from 'motion/react';
import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export function Testimonials() {
  const sliderRef = useRef<Slider>(null);

  const testimonials = [
    {
      id: 1,
      name: 'Pamela Aliaga Rosas',
      role: 'Administradora de condominio',
      image: 'https://images.unsplash.com/photo-1600696444233-20accba67df3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBsYXRpbmElMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2ODMyMjQxMXww&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'Descarga la app y encuentras maestros confiables al instante. Muy recomendado para el mantenimiento del edificio.',
      gradient: 'from-[#0D8BEC] to-[#0965AC]'
    },
    {
      id: 2,
      name: 'Miguel Torres Sánchez',
      role: 'Maestro carpintero',
      image: 'https://images.unsplash.com/photo-1631554240706-ab68578bc6ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJ1dmlhbiUyMG1hbiUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjgzMjI0MTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'La app es clara. Me llegan chambas de calidad cada día y construyo mi reputación con cada trabajo.',
      gradient: 'from-[#0E91F6] to-[#0963A9]'
    },
    {
      id: 3,
      name: 'Ana López Martínez',
      role: 'Residente de condominio',
      image: 'https://images.unsplash.com/photo-1687293233192-230bc0f6869e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXRpbmElMjBidXNpbmVzcyUyMHdvbWFufGVufDF8fHx8MTc2ODMyMjQxMXww&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'Rápido, seguro y confiable. Ahora puedo arreglar problemas del departamento sin preocupaciones.',
      gradient: 'from-[#0E91F6] to-[#0963A9]'
    },
    {
      id: 4,
      name: 'Carlos Mendoza Quispe',
      role: 'Gerente de mantenimiento',
      image: 'https://images.unsplash.com/photo-1687062013633-f2d1a2686f09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXRpbm8lMjBjb25zdHJ1Y3Rpb24lMjB3b3JrZXJ8ZW58MXx8fHwxNzY4MzIyNDExfDA&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'Gestiono 3 condominios y CHAMBA me ha facilitado todo. Los maestros llegan rápido y hacen buen trabajo.',
      gradient: 'from-[#0D8BEC] to-[#0965AC]'
    },
    {
      id: 5,
      name: 'Rosa Vargas Huamán',
      role: 'Maestra gasfitero',
      image: 'https://images.unsplash.com/photo-1648621288703-88e2273ea454?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXNwYW5pYyUyMHdvbWFuJTIwc21pbGluZ3xlbnwxfHx8fDE3NjgzMjI0MTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'Como mujer en este rubro, CHAMBA me dio la oportunidad de demostrar mi trabajo. Ahora tengo clientes fijos.',
      gradient: 'from-[#1A9FF0] to-[#0A6DB8]'
    },
    {
      id: 6,
      name: 'Roberto Castillo Pérez',
      role: 'Propietario de empresa',
      image: 'https://images.unsplash.com/photo-1658249682516-c7789d418978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXRpbm8lMjBwcm9mZXNzaW9uYWwlMjBtYW58ZW58MXx8fHwxNzY4MzIyNDExfDA&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'Para mi empresa de limpieza, CHAMBA es clave. Contrato electricistas y técnicos verificados en minutos.',
      gradient: 'from-[#0E91F6] to-[#0963A9]'
    },
    {
      id: 7,
      name: 'Lucía Fernández Rojas',
      role: 'Administradora de edificio',
      image: 'https://images.unsplash.com/photo-1600696444233-20accba67df3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXRpbmElMjBtYW5hZ2VyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY4MzIyNDExfDA&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'Administro un edificio de 80 departamentos. CHAMBA me ahorra tiempo y dinero en cada reparación.',
      gradient: 'from-[#0D8BEC] to-[#0965AC]'
    },
    {
      id: 8,
      name: 'Juan Pérez Gutiérrez',
      role: 'Maestro electricista',
      image: 'https://images.unsplash.com/photo-1558013240-e6b602a55620?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXNwYW5pYyUyMHdvcmtlciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2ODMyMjQxMXww&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'Trabajo en CHAMBA desde hace 6 meses. La app me cambió la vida, ahora tengo trabajo estable.',
      gradient: 'from-[#1A9FF0] to-[#0A6DB8]'
    },
    {
      id: 9,
      name: 'Patricia Ramos Soto',
      role: 'Jefa de condominio',
      image: 'https://images.unsplash.com/photo-1712168567859-e24cbc155219?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXRpbmElMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjgzMjI0MTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'Los vecinos están felices. Solucionamos emergencias rápido y los maestros son de confianza.',
      gradient: 'from-[#0E91F6] to-[#0963A9]'
    },
    {
      id: 10,
      name: 'Diego Herrera Campos',
      role: 'Maestro pintor',
      image: 'https://images.unsplash.com/photo-1595405652061-fb14cffeae58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXRpbm8lMjBjYXJwZW50ZXIlMjB3b3JrZXJ8ZW58MXx8fHwxNzY4MzIyNDEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'Me encanta poder elegir mis chambas. Las calificaciones me ayudan a conseguir mejores trabajos.',
      gradient: 'from-[#0D8BEC] to-[#0965AC]'
    },
    {
      id: 11,
      name: 'María González Vega',
      role: 'Administradora de complejo',
      image: 'https://images.unsplash.com/photo-1573164574472-797cdf4a583a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXNwYW5pYyUyMGJ1c2luZXNzJTIwd29tYW58ZW58MXx8fHwxNzY4MzIyNDEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'Gestiono 5 edificios y CHAMBA es mi herramienta principal. Maestros verificados, precios justos.',
      gradient: 'from-[#1A9FF0] to-[#0A6DB8]'
    },
    {
      id: 12,
      name: 'Fernando Silva Ramírez',
      role: 'Maestro técnico de aire',
      image: 'https://images.unsplash.com/photo-1660074127797-1c429fbb8cd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXRpbm8lMjB0ZWNobmljaWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY4MzIyNDEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'Antes buscaba chamba en la calle. Ahora con CHAMBA tengo agenda llena todo el mes.',
      gradient: 'from-[#0E91F6] to-[#0963A9]'
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    cssEase: 'cubic-bezier(0.4, 0, 0.2, 1)',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
  };

  return (
    <section id="testimonials" className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-[20%] left-[9%] w-8 h-8 sm:w-10 sm:h-10">
        <Star className="w-full h-full text-[#0090FF] fill-[#0090FF]" />
      </div>
      <div className="absolute top-[32%] left-[6%] w-4 h-4 sm:w-5 sm:h-5">
        <Star className="w-full h-full text-[#00C6FF] fill-[#00C6FF]" />
      </div>
      <div className="absolute bottom-[20%] right-[9%] w-7 h-7 sm:w-9 sm:h-9">
        <Star className="w-full h-full text-[#FFCF06] fill-[#FFCF06]" />
      </div>
      <div className="absolute bottom-[10%] right-[5%] w-4 h-4 sm:w-5 sm:h-5">
        <Star className="w-full h-full text-[#FFCF06] fill-[#FFCF06]" />
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Header */}
        <motion.div
          {...fadeInUp}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#0F172A] mb-4 sm:mb-6 leading-tight">
            Historias reales
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#364357] outfit-medium max-w-2xl mx-auto">
            Clientes y maestros que confían en CHAMBA
          </p>
        </motion.div>

        {/* Carousel container */}
        <div className="relative">
          {/* Navigation buttons */}
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-20 w-16 h-16 items-center justify-center bg-white rounded-full shadow-[0_4px_28px_rgba(74,58,255,0.2)] hover:shadow-[0_8px_40px_rgba(74,58,255,0.3)] transition-all duration-300 hover:scale-110"
            aria-label="Anterior testimonio"
          >
            <ChevronLeft className="w-7 h-7 text-[#0090ff]" strokeWidth={2.5} />
          </button>

          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-20 w-16 h-16 items-center justify-center bg-white rounded-full shadow-[0_4px_28px_rgba(74,58,255,0.2)] hover:shadow-[0_8px_40px_rgba(74,58,255,0.3)] transition-all duration-300 hover:scale-110"
            aria-label="Siguiente testimonio"
          >
            <ChevronRight className="w-7 h-7 text-[#0090ff]" strokeWidth={2.5} />
          </button>

          {/* Carousel */}
          <Slider ref={sliderRef} {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="px-3 sm:px-4">
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex flex-col gap-4 sm:gap-6"
                >
                  {/* Card with testimonial */}
                  <div className="relative h-[240px] sm:h-[260px]">
                    <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} rounded-[32px] shadow-2xl`}>
                      {/* Decorative wave at bottom */}
                      <svg 
                        className="absolute bottom-0 left-0 w-full h-auto" 
                        viewBox="0 0 402 60" 
                        fill="none" 
                        preserveAspectRatio="none"
                      >
                        <path 
                          d="M0 30C100 10, 150 50, 250 30C350 10, 380 40, 402 30V60H0V30Z" 
                          fill="rgba(255,255,255,0.1)"
                        />
                      </svg>
                      
                      {/* Content */}
                      <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col">
                        {/* Star icon */}
                        <div className="mb-4 sm:mb-6">
                          <Star className="w-8 h-8 sm:w-9 sm:h-9 text-white fill-white" />
                        </div>
                        
                        {/* Text */}
                        <p className="text-white text-base sm:text-lg leading-relaxed outfit-medium">
                          {testimonial.text}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* User profile */}
                  <div className="flex items-center gap-4 sm:gap-5 px-2">
                    <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0">
                      <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white shadow-lg">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <div className="flex flex-col">
                      <p className="text-[#0F172A] text-lg sm:text-xl outfit-bold leading-tight">
                        {testimonial.name}
                      </p>
                      <p className="text-[#64748B] text-base sm:text-lg outfit-semibold leading-tight">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>

          {/* Mobile navigation buttons */}
          <div className="flex lg:hidden justify-center gap-4 mt-8 sm:mt-12">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full shadow-[0_4px_20px_rgba(74,58,255,0.2)] hover:shadow-[0_8px_30px_rgba(74,58,255,0.3)] transition-all duration-300 hover:scale-110"
              aria-label="Anterior testimonio"
            >
              <ChevronLeft className="w-6 h-6 text-[#0090ff]" strokeWidth={2.5} />
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full shadow-[0_4px_20px_rgba(74,58,255,0.2)] hover:shadow-[0_8px_30px_rgba(74,58,255,0.3)] transition-all duration-300 hover:scale-110"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="w-6 h-6 text-[#0090ff]" strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}