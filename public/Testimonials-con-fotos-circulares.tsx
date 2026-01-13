// ===================================================================
// COMPONENTE TESTIMONIALS CON FOTOS CIRCULARES PEQUEÑAS ABAJO
// ===================================================================
// 
// CAMBIOS REALIZADOS:
// ✅ Fotos circulares pequeñas (80x80px) abajo del testimonial
// ✅ Quote/chat bubble arriba primero
// ✅ Badge flotante en esquina del quote
// ✅ Layout: Quote → Foto circular + Nombre/Rol
// ✅ Animaciones spring en foto circular
// ✅ Ring/border con hover effects
// ✅ Gradiente overlay sutil en foto
//
// INSTALACIÓN REQUERIDA:
// npm install motion/react lucide-react react-slick
// npm install slick-carousel
//
// ===================================================================

import { motion } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export function Testimonials() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
  };

  const testimonials = [
    {
      name: 'Carlos Mendoza',
      role: 'Maestro Gasfitero',
      quote: 'Consigo más chambas gracias a CHAMBA. La app es fácil de usar y los pagos llegan rápido.',
      photo: 'https://images.unsplash.com/photo-1520830728141-11a09a804d95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJ1dmlhbiUyMHBsdW1iZXIlMjB3b3JrZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjczNDIyNzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'bg-[#ffcf06]',
      type: 'maestro'
    },
    {
      name: 'María González',
      role: 'Clienta',
      quote: 'Encontré gasfitero en minutos con la app. Todo quedó perfecto y el precio fue justo.',
      photo: 'https://images.unsplash.com/photo-1643892055607-192cf75e93f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXRpbmElMjB3b21hbiUyMHNtaWxpbmclMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY3MzQyMjc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'bg-[#0090ff]',
      type: 'cliente'
    },
    {
      name: 'José Ramírez',
      role: 'Maestro Electricista',
      quote: 'Trabajo todos los días. Los clientes llegan directos y la comunicación es clara.',
      photo: 'https://images.unsplash.com/photo-1757697654584-544e1246d796?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2lhbiUyMHdvcmtlciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NzM0MjI3NHww&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'bg-[#0090ff]',
      type: 'maestro'
    },
    {
      name: 'Familia Castillo',
      role: 'Clientes',
      quote: 'Descarga la app y encuentras maestros confiables al instante. Muy recomendado.',
      photo: 'https://images.unsplash.com/photo-1578496780896-7081cc23c111?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXNwYW5pYyUyMGZhbWlseSUyMGhvbWV8ZW58MXx8fHwxNzY3MzQyMjc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'bg-[#0090ff]',
      type: 'cliente'
    },
    {
      name: 'Miguel Torres',
      role: 'Maestro Carpintero',
      quote: 'La app es clara. Me llegan chambas de calidad cada día y construyo mi reputación.',
      photo: 'https://images.unsplash.com/photo-1598972676363-683a7b5845a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJwZW50ZXIlMjB3b29kd29ya2VyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNjczNDIyNzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'bg-[#ffcf06]',
      type: 'maestro'
    },
    {
      name: 'Ana López',
      role: 'Clienta',
      quote: 'Rápido, seguro y confiable. Ahora puedo arreglar mi casa sin preocupaciones.',
      photo: 'https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NzI4MzM5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'bg-[#0090ff]',
      type: 'cliente'
    }
  ];

  // Custom arrow components
  const CustomPrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <motion.button
        onClick={onClick}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-[#0090ff] text-[#0090ff] hover:text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 border-2 border-[#0090ff]/20 hover:border-[#0090ff] hover:scale-110"
        whileHover={{ x: -5 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronLeft className="w-7 h-7" strokeWidth={3} />
      </motion.button>
    );
  };

  const CustomNextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <motion.button
        onClick={onClick}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-[#0090ff] text-[#0090ff] hover:text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 border-2 border-[#0090ff]/20 hover:border-[#0090ff] hover:scale-110"
        whileHover={{ x: 5 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronRight className="w-7 h-7" strokeWidth={3} />
      </motion.button>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
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
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="py-32 px-4 bg-gradient-to-br from-[#FFFDF7] to-white relative overflow-hidden">
      {/* Background circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#0090ff]/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-br from-[#ffcf06]/5 to-transparent rounded-full blur-3xl"></div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        <motion.div
          {...fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl text-[#0F172A] mb-4">
            Historias reales
          </h2>
          <p className="text-xl md:text-2xl text-[#64748B] outfit-medium max-w-2xl mx-auto">
            Clientes y maestros que confían en CHAMBA
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto testimonials-slider">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => {
              const isYellow = testimonial.gradient.includes('ffcf06');
              const isMaestro = testimonial.type === 'maestro';
              return (
                <div key={index} className="px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative group h-full"
                  >
                    {/* ============================================ */}
                    {/* CAMBIO 1: CHAT BUBBLE QUOTE ARRIBA PRIMERO */}
                    {/* ============================================ */}
                    <div className="bg-white p-8 rounded-3xl shadow-2xl border-2 border-gray-100 relative mb-8 hover:shadow-xl transition-shadow duration-300">
                      {/* Badge flotante */}
                      <motion.div
                        className={`absolute -top-4 -right-4 ${testimonial.gradient} ${isYellow ? 'text-[#0F172A]' : 'text-white'} px-6 py-3 rounded-full shadow-lg outfit-bold text-sm z-10`}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                      >
                        {isMaestro ? '⚡ Maestro' : '✓ Cliente'}
                      </motion.div>

                      <Quote className="absolute top-6 right-6 w-12 h-12 text-[#E0F2FE]" />
                      
                      <p className="text-xl text-[#0F172A] leading-[1.8] relative z-10 outfit-medium mb-0 pt-2">
                        "{testimonial.quote}"
                      </p>
                    </div>

                    {/* ======================================================== */}
                    {/* CAMBIO 2: FOTO CIRCULAR PEQUEÑA ABAJO CON NOMBRE/ROL */}
                    {/* ======================================================== */}
                    <div className="flex items-center gap-4">
                      {/* Foto circular pequeña 80x80px */}
                      <motion.div 
                        className="relative flex-shrink-0"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
                      >
                        <div className="w-20 h-20 rounded-full overflow-hidden shadow-xl border-4 border-white ring-4 ring-gray-100 group-hover:ring-[#0090ff]/20 transition-all">
                          <ImageWithFallback
                            src={testimonial.photo}
                            alt={`${testimonial.name} - ${testimonial.role}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {/* Gradient overlay en la foto */}
                        <div className={`absolute inset-0 rounded-full ${testimonial.gradient} opacity-20 mix-blend-multiply`}></div>
                      </motion.div>

                      {/* Nombre y rol al lado */}
                      <div className="flex-1">
                        <div className="text-2xl text-[#0F172A] outfit-bold mb-1">{testimonial.name}</div>
                        <div className="text-lg text-[#475569] outfit-semibold">{testimonial.role}</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>

      <style>{`
        .testimonials-slider .slick-dots {
          bottom: -50px;
        }
        
        .testimonials-slider .slick-dots li button:before {
          font-size: 12px;
          color: #0090ff;
          opacity: 0.3;
        }
        
        .testimonials-slider .slick-dots li.slick-active button:before {
          color: #0090ff;
          opacity: 1;
        }

        .testimonials-slider .slick-prev,
        .testimonials-slider .slick-next {
          z-index: 10;
          width: 48px;
          height: 48px;
        }

        .testimonials-slider .slick-prev {
          left: -60px;
        }

        .testimonials-slider .slick-next {
          right: -60px;
        }

        .testimonials-slider .slick-prev:before,
        .testimonials-slider .slick-next:before {
          font-size: 48px;
          opacity: 0.5;
          color: #0090ff;
        }

        .testimonials-slider .slick-prev:hover:before,
        .testimonials-slider .slick-next:hover:before {
          opacity: 1;
        }

        @media (max-width: 1280px) {
          .testimonials-slider .slick-prev {
            left: -40px;
          }
          
          .testimonials-slider .slick-next {
            right: -40px;
          }
        }

        @media (max-width: 768px) {
          .testimonials-slider .slick-prev {
            left: 10px;
          }
          
          .testimonials-slider .slick-next {
            right: 10px;
          }
        }
      `}</style>
    </section>
  );
}

// ===================================================================
// RESUMEN DE CAMBIOS:
// ===================================================================
//
// ANTES:
// - Foto grande arriba (450px altura)
// - Badge flotante en la foto
// - Quote abajo en chat bubble
// - Nombre y rol debajo del quote
//
// AHORA:
// - Quote/chat bubble arriba PRIMERO
// - Badge flotante en esquina del quote (-top-4 -right-4)
// - Foto circular PEQUEÑA abajo (80x80px)
// - Nombre y rol al lado de la foto
// - Ring con hover effect (gray-100 → blue/20)
// - Border blanco de 4px
// - Shadow-xl para profundidad
// - Animación spring type en la foto
// - Gradient overlay sutil en foto circular
//
// EFECTOS VISUALES:
// - Hover en card: shadow aumenta
// - Hover en foto: ring cambia de gray a blue
// - Badge aparece con spring animation
// - Foto aparece con spring animation
// - Smooth transitions en todos los elementos
//
// ===================================================================
