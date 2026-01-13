import { motion } from 'motion/react';
import { Smartphone, Download, Star, Shield, Zap, Users, TrendingUp, Clock } from 'lucide-react';
import imgAppMockup from 'figma:asset/fae02b3b871f7232b2e1b59f8ea942b5205e059d.png';

export function AppShowcase() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
  };

  const features = [
    {
      icon: TrendingUp,
      title: 'Gestión Centralizada',
      description: 'Administra todos tus servicios de mantenimiento desde una sola plataforma'
    },
    {
      icon: Clock,
      title: 'Respuesta Inmediata',
      description: 'Atención prioritaria para emergencias y proyectos urgentes'
    },
    {
      icon: Shield,
      title: 'Profesionales Verificados',
      description: 'Maestros con antecedentes penales y policiales revisados'
    }
  ];

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F0F9FF] via-white to-[#FFFDF7] overflow-hidden">
      {/* Decorative gradient blobs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#0090ff]/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#ffcf06]/10 to-transparent rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* Left: Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative mx-auto max-w-[320px] sm:max-w-md lg:max-w-lg">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0090ff]/30 to-[#ffcf06]/30 rounded-[4rem] blur-3xl scale-110"></div>
              
              <motion.div 
                className="relative"
                animate={{ 
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  type: "tween"
                }}
              >
                <img 
                  src={imgAppMockup} 
                  alt="App CHAMBA para empresas" 
                  className="w-full h-auto drop-shadow-2xl relative z-10 rounded-[3rem]"
                />
              </motion.div>

              {/* Floating badge - Empresas */}
              <motion.div
                className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-white rounded-2xl shadow-2xl p-3 sm:p-4 z-20 border-2 border-[#0090ff]/20"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-[#0090ff]" />
                  <div>
                    <p className="text-[#0F172A] gilroy-bold text-sm sm:text-base">500+</p>
                    <p className="text-[#64748B] text-[10px] sm:text-xs gilroy-medium">Empresas</p>
                  </div>
                </div>
              </motion.div>

              {/* Professional badge */}
              <motion.div
                className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-gradient-to-br from-[#ffcf06] to-[#F0B800] rounded-2xl shadow-2xl p-3 sm:p-4 z-20"
                animate={{ 
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-[#0F172A]" />
                  <div>
                    <p className="text-[#0F172A] gilroy-bold text-xs sm:text-sm">Verificados</p>
                    <p className="text-[#0F172A]/70 text-[10px] sm:text-xs gilroy-medium">100%</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            {...fadeInUp}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 bg-[#0090ff]/10 px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6">
              <Smartphone className="w-4 h-4 text-[#0090ff]" />
              <span className="text-sm sm:text-base text-[#0090ff] gilroy-bold">Solución Empresarial</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#0F172A] mb-4 sm:mb-6 leading-tight">
              Profesionales para tu empresa, cuando los necesites
            </h2>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#64748B] mb-6 sm:mb-8 md:mb-10 leading-relaxed gilroy-medium">
              Gestiona servicios de mantenimiento y reparaciones para tu negocio de manera eficiente con maestros verificados.
            </p>

            {/* Features */}
            <div className="space-y-4 sm:space-y-5 mb-6 sm:mb-8 md:mb-10">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className="flex items-start gap-3 sm:gap-4 group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#0090ff] to-[#0965AC] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg md:text-xl text-[#0F172A] gilroy-bold mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm sm:text-base text-[#64748B] gilroy-medium">
                        {feature.description}
                      </p>
                    </div>
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