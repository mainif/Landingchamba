import { motion } from 'motion/react';
import { Target, Users, MessageCircle, Wrench, Star, Check } from 'lucide-react';
import imgSolicitudPublicada from '@/assets/paso 1.png';
import imgSolicitudesRecibidas from '@/assets/paso 2.png';
import imgPerfil from '@/assets/paso 3.png';
import imgHistorialTrabajos from '@/assets/paso 4.png';
import imgCalificar from '@/assets/paso 5.png';

export function HowItWorksImproved() {
  const steps = [
    {
      number: '01',
      title: 'Publica tu necesidad',
      description: 'Describe qué servicios necesitas para tu condominio o empresa',
      icon: Target,
      color: 'blue',
      image: imgSolicitudPublicada
    },
    {
      number: '02',
      title: 'Recibe propuestas',
      description: 'Maestros verificados te envían sus cotizaciones',
      icon: Users,
      color: 'yellow',
      image: imgSolicitudesRecibidas
    },
    {
      number: '03',
      title: 'Elige al mejor',
      description: 'Compara perfiles, precios y opiniones',
      icon: MessageCircle,
      color: 'blue',
      image: imgPerfil
    },
    {
      number: '04',
      title: 'Trabajo realizado',
      description: 'El maestro soluciona tu problema',
      icon: Wrench,
      color: 'yellow',
      image: imgHistorialTrabajos
    },
    {
      number: '05',
      title: 'Califica el servicio',
      description: 'Deja tu opinión y ayuda a la comunidad',
      icon: Star,
      color: 'blue',
      image: imgCalificar
    }
  ];

  return (
    <section id="how-it-works" className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Improved gradient backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f8fafc] to-white"></div>
      <div className="absolute top-0 right-0 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-gradient-to-br from-[#0090ff]/8 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-gradient-to-tr from-[#ffcf06]/8 to-transparent rounded-full blur-3xl"></div>
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, #0F172A 1px, transparent 0)',
        backgroundSize: '32px 32px'
      }}></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0090ff]/10 to-[#ffcf06]/10 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full mb-4 sm:mb-6 border border-[#0090ff]/20">
            <div className="w-2 h-2 bg-[#0090ff] rounded-full animate-pulse"></div>
            <span className="outfit-bold text-xs sm:text-sm text-[#0090ff] uppercase tracking-wide">Proceso Simple</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center text-[#0F172A] mb-4 sm:mb-6 px-4">
            Así de <span className="text-[#0090ff]">simple</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#64748B] outfit-medium max-w-2xl mx-auto px-4">
            5 pasos para conectar tu empresa con maestros verificados
          </p>
        </motion.div>

        {/* Steps - Vertical Timeline with phone mockups */}
        <div className="relative">
          {/* Central line - gradient */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0090ff] via-[#ffcf06] to-[#0090ff] opacity-30 hidden md:block"></div>

          <div className="space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-32">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              const Icon = step.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 sm:gap-8 md:gap-16 items-center`}>
                    
                    {/* Content side */}
                    <div className={`flex-1 ${isEven ? 'md:text-right md:pr-8 lg:pr-16' : 'md:pl-8 lg:pl-16'} w-full`}>
                      {/* Number with gradient */}
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                        className={`inline-flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 ${isEven ? '' : 'md:flex-row-reverse'}`}
                      >
                        <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg ${
                          step.color === 'blue' 
                            ? 'bg-gradient-to-br from-[#0090ff] to-[#0070cc]' 
                            : 'bg-gradient-to-br from-[#ffcf06] to-[#f0c200]'
                        }`}>
                          <Icon className={`w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 ${step.color === 'blue' ? 'text-white' : 'text-[#0F172A]'}`} />
                        </div>
                        <span className={`text-4xl sm:text-5xl lg:text-6xl outfit-bold ${
                          step.color === 'blue' ? 'text-[#0090ff]' : 'text-[#ffcf06]'
                        } opacity-40`}>
                          {step.number}
                        </span>
                      </motion.div>

                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A] mb-3 sm:mb-4">
                        {step.title}
                      </h3>
                      
                      <p className="text-base sm:text-lg lg:text-xl text-[#64748B] outfit-medium leading-relaxed max-w-md mx-auto md:mx-0">
                        {step.description}
                      </p>

                      {/* Features checklist */}
                      <div className={`mt-4 sm:mt-6 space-y-2 sm:space-y-3 inline-block ${isEven ? 'md:ml-auto' : ''}`}>
                        {index === 0 && (
                          <>
                            <div className="flex items-center gap-2 sm:gap-3">
                              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-[#0090ff] to-[#0070cc] flex items-center justify-center">
                                <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                              </div>
                              <span className="text-sm sm:text-base text-[#64748B] outfit-medium">Describe en segundos</span>
                            </div>
                            <div className="flex items-center gap-2 sm:gap-3">
                              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-[#0090ff] to-[#0070cc] flex items-center justify-center">
                                <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                              </div>
                              <span className="text-sm sm:text-base text-[#64748B] outfit-medium">Agrega fotos</span>
                            </div>
                          </>
                        )}
                        {index === 1 && (
                          <>
                            <div className="flex items-center gap-2 sm:gap-3">
                              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-[#ffcf06] to-[#f0c200] flex items-center justify-center">
                                <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[#0F172A]" />
                              </div>
                              <span className="text-sm sm:text-base text-[#64748B] outfit-medium">Maestros verificados</span>
                            </div>
                            <div className="flex items-center gap-2 sm:gap-3">
                              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-[#ffcf06] to-[#f0c200] flex items-center justify-center">
                                <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[#0F172A]" />
                              </div>
                              <span className="text-sm sm:text-base text-[#64748B] outfit-medium">Compara precios</span>
                            </div>
                          </>
                        )}
                        {index === 2 && (
                          <>
                            <div className="flex items-center gap-2 sm:gap-3">
                              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-[#0090ff] to-[#0070cc] flex items-center justify-center">
                                <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                              </div>
                              <span className="text-sm sm:text-base text-[#64748B] outfit-medium">Chat directo</span>
                            </div>
                            <div className="flex items-center gap-2 sm:gap-3">
                              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-[#0090ff] to-[#0070cc] flex items-center justify-center">
                                <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                              </div>
                              <span className="text-sm sm:text-base text-[#64748B] outfit-medium">Coordina horarios</span>
                            </div>
                          </>
                        )}
                        {index === 3 && (
                          <>
                            <div className="flex items-center gap-2 sm:gap-3">
                              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-[#ffcf06] to-[#f0c200] flex items-center justify-center">
                                <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[#0F172A]" />
                              </div>
                              <span className="text-sm sm:text-base text-[#64748B] outfit-medium">Seguimiento en vivo</span>
                            </div>
                            <div className="flex items-center gap-2 sm:gap-3">
                              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-[#ffcf06] to-[#f0c200] flex items-center justify-center">
                                <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[#0F172A]" />
                              </div>
                              <span className="text-sm sm:text-base text-[#64748B] outfit-medium">100% seguro</span>
                            </div>
                          </>
                        )}
                        {index === 4 && (
                          <>
                            <div className="flex items-center gap-2 sm:gap-3">
                              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-[#0090ff] to-[#0070cc] flex items-center justify-center">
                                <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                              </div>
                              <span className="text-sm sm:text-base text-[#64748B] outfit-medium">Califica fácilmente</span>
                            </div>
                            <div className="flex items-center gap-2 sm:gap-3">
                              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-[#0090ff] to-[#0070cc] flex items-center justify-center">
                                <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                              </div>
                              <span className="text-sm sm:text-base text-[#64748B] outfit-medium">Ayuda a la comunidad</span>
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Phone mockup side */}
                    <div className="flex-1 flex justify-center w-full">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                        className="relative max-w-[240px] sm:max-w-[280px] lg:max-w-[320px] w-full"
                      >
                        {/* Glow effect */}
                        <div className={`absolute inset-0 rounded-[2.5rem] sm:rounded-[3rem] blur-2xl opacity-20 ${
                          step.color === 'blue' ? 'bg-[#0090ff]' : 'bg-[#ffcf06]'
                        }`}></div>

                        {/* Image only */}
                        <motion.div 
                          className="relative z-10"
                          whileHover={{ y: -10 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <img 
                            src={step.image} 
                            alt={`Paso ${step.number}`} 
                            className="w-full h-auto rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl" 
                          />
                        </motion.div>

                        {/* Floating badge */}
                        <motion.div
                          className={`absolute -top-2 sm:-top-3 -right-2 sm:-right-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-xl z-20 ${
                            step.color === 'blue' 
                              ? 'bg-gradient-to-br from-[#0090ff] to-[#0070cc] text-white' 
                              : 'bg-gradient-to-br from-[#ffcf06] to-[#f0c200] text-[#0F172A]'
                          }`}
                          animate={{ 
                            y: [0, -8, 0],
                            rotate: [0, 5, -5, 0]
                          }}
                          transition={{ 
                            duration: 3,
                            repeat: Infinity,
                            delay: index * 0.2,
                            type: "tween"
                          }}
                        >
                          <span className="outfit-bold text-xs sm:text-sm">Paso {step.number}</span>
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:block absolute left-1/2 top-16 lg:top-20 -translate-x-1/2">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.4, type: "spring" }}
                      className={`w-4 h-4 rounded-full shadow-lg ${
                        step.color === 'blue' 
                          ? 'bg-gradient-to-br from-[#0090ff] to-[#0070cc] ring-4 ring-[#0090ff]/20' 
                          : 'bg-gradient-to-br from-[#ffcf06] to-[#f0c200] ring-4 ring-[#ffcf06]/20'
                      }`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA removed as requested */}
      </div>
    </section>
  );
}