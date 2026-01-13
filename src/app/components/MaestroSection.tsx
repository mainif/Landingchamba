import { motion } from 'motion/react';
import { Briefcase, TrendingUp, MessageCircle } from 'lucide-react';
import imgChambasDisponibles from '@/assets/maestor.png';

export function MaestroSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
  };

  const benefits = [
    {
      icon: Briefcase,
      text: 'Chambas disponibles todos los días'
    },
    {
      icon: MessageCircle,
      text: 'Chat directo con los clientes'
    },
    {
      icon: TrendingUp,
      text: 'Calificaciones que aumentan tu reputación'
    }
  ];

  return (
    <section id="for-maestros" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#FFFDF7] to-white overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute top-1/2 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-gradient-to-br from-[#ffcf06]/10 to-transparent rounded-full blur-3xl -translate-y-1/2"></div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* Left: Phone mockup usando imagen de Figma */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-[280px] sm:max-w-sm lg:max-w-md">
              <motion.div 
                className="relative"
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, -2, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  type: "tween"
                }}
              >
                {/* Imagen del mockup de Figma */}
                <img 
                  src={imgChambasDisponibles} 
                  alt="App CHAMBA - Vista Maestro" 
                  className="w-full h-auto drop-shadow-2xl rounded-[3rem]"
                />
              </motion.div>

              {/* Floating briefcase icon */}
              <motion.div
                className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 w-12 h-12 sm:w-16 sm:h-16 bg-[#0090ff] rounded-full flex items-center justify-center shadow-2xl"
                animate={{ scale: [1, 1.2, 1], rotate: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, type: "tween" }}
              >
                <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            {...fadeInUp}
          >
            <div className="inline-flex items-center gap-2 bg-[#ffcf06]/20 px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6">
              <div className="w-2 h-2 bg-[#ffcf06] rounded-full animate-pulse"></div>
              <span className="text-sm sm:text-base text-[#0F172A] gilroy-bold">Para maestros</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#0F172A] mb-4 sm:mb-6 leading-tight">
              ¿Buscas chamba?
            </h2>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#64748B] mb-6 sm:mb-8 md:mb-10 leading-relaxed gilroy-medium">
              Encuentra trabajos cerca de ti y construye tu reputación.
            </p>

            <div className="space-y-4 sm:space-y-5 mb-6 sm:mb-8 md:mb-10">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className="flex items-start gap-3 sm:gap-4 group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#ffcf06] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#0F172A]" />
                    </div>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#0F172A] pt-2 gilroy-medium">
                      {benefit.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}