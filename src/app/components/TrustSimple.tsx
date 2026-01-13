import { motion } from 'motion/react';
import { ShieldCheck, Star, MessageCircle, FileText, Users, Award, Clock, CheckCircle2 } from 'lucide-react';

export function TrustSimple() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
  };

  const trustItems = [
    {
      icon: ShieldCheck,
      title: 'Perfiles verificados',
      description: 'Cada maestro pasa por validación de identidad y antecedentes antes de trabajar',
      emoji: '🛡️',
      gradient: 'from-[#0090ff] via-[#0080e6] to-[#0070cc]',
      iconBg: 'bg-white/30'
    },
    {
      icon: Award,
      title: 'Calificaciones reales',
      description: 'Sistema de estrellas y opiniones verificadas de clientes auténticos',
      emoji: '⭐',
      gradient: 'from-[#ffcf06] via-[#ffb800] to-[#ffa500]',
      iconBg: 'bg-[#0F172A]/20'
    },
    {
      icon: FileText,
      title: 'Historial completo',
      description: 'Revisa todos los trabajos completados, tiempos y calificaciones anteriores',
      emoji: '📋',
      gradient: 'from-[#0090ff] via-[#0080e6] to-[#0070cc]',
      iconBg: 'bg-white/30'
    },
    {
      icon: CheckCircle2,
      title: 'Pagos seguros',
      description: 'Sistema de pago protegido con liberación automática al completar el trabajo',
      emoji: '💳',
      gradient: 'from-[#ffcf06] via-[#ffb800] to-[#ffa500]',
      iconBg: 'bg-[#0F172A]/20'
    }
  ];

  return (
    <section id="trust" className="py-16 sm:py-20 md:py-28 lg:py-36 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#f8fafc] to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #0090ff 1.5px, transparent 0)`,
          backgroundSize: '64px 64px'
        }}></div>
      </div>

      {/* Floating shapes */}
      <motion.div
        className="absolute top-20 left-[5%] w-20 h-20 rounded-full bg-[#0090ff]/10 blur-2xl"
        animate={{ 
          y: [0, 30, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-[8%] w-32 h-32 rounded-full bg-[#ffcf06]/10 blur-3xl"
        animate={{ 
          y: [0, -40, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Header with enhanced styling */}
        <motion.div
          {...fadeInUp}
          className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-[#0090ff]/10 to-[#ffcf06]/10 rounded-full mb-4 sm:mb-6 border-2 border-[#0090ff]/20"
          >
            <ShieldCheck className="w-5 h-5 text-[#0090ff]" />
            <span className="text-sm sm:text-base text-[#0F172A] outfit-bold">CONFIANZA Y SEGURIDAD</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#0F172A] mb-4 sm:mb-6 leading-tight px-4">
            Todo queda <span className="text-[#0090ff]">transparente</span><br className="hidden sm:block" /> y <span className="text-[#ffcf06]">seguro</span>
          </h2>
          
          <p className="text-[#64748B] text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto outfit-medium px-4 leading-relaxed">
            Sistema diseñado para proteger cada trabajo con verificaciones de seguridad en cada paso
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-7">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            const isYellow = item.gradient.includes('ffcf06');
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -20, 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-40 transition-all duration-500 scale-95 group-hover:scale-110`}></div>

                {/* Card principal */}
                <div className={`relative bg-gradient-to-br ${item.gradient} rounded-2xl sm:rounded-3xl p-6 sm:p-7 lg:p-8 shadow-xl group-hover:shadow-2xl overflow-hidden h-full border-2 ${isYellow ? 'border-[#ffcf06]/30' : 'border-[#0090ff]/30'} transition-all duration-500`}>
                  
                  {/* Pattern decorativo */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-28 sm:w-36 h-28 sm:h-36 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-24 sm:w-28 h-24 sm:h-28 bg-white rounded-full blur-2xl"></div>
                  </div>

                  {/* Número decorativo grande */}
                  <motion.div
                    className={`absolute top-3 sm:top-4 left-3 sm:left-4 text-7xl sm:text-8xl lg:text-9xl font-black ${isYellow ? 'text-[#0F172A]/5' : 'text-white/8'} leading-none pointer-events-none`}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: index * 0.1 + 0.3, 
                      type: "spring",
                      stiffness: 150
                    }}
                  >
                    {index + 1}
                  </motion.div>

                  <div className="relative z-10">
                    {/* Icono animado */}
                    <motion.div
                      className={`inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-2xl sm:rounded-3xl ${item.iconBg} backdrop-blur-sm mb-5 sm:mb-6 lg:mb-7 shadow-2xl ring-2 ${isYellow ? 'ring-[#0F172A]/10' : 'ring-white/20'}`}
                      whileHover={{ 
                        rotate: [0, -12, 12, -12, 0], 
                        scale: 1.15,
                        transition: { duration: 0.5 }
                      }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <Icon className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 ${isYellow ? 'text-[#0F172A]' : 'text-white'}`} strokeWidth={2.5} />
                    </motion.div>
                    
                    {/* Título */}
                    <h3 className={`text-xl sm:text-2xl lg:text-3xl mb-3 sm:mb-4 outfit-bold ${isYellow ? 'text-[#0F172A]' : 'text-white'} leading-tight`}>
                      {item.title}
                    </h3>

                    {/* Descripción mejorada */}
                    <p className={`text-sm sm:text-base lg:text-lg outfit-medium ${isYellow ? 'text-[#0F172A]/85' : 'text-white/95'} leading-relaxed`}>
                      {item.description}
                    </p>

                    {/* Decoración emoji flotante */}
                    <motion.div
                      className={`absolute bottom-4 sm:bottom-5 right-4 sm:right-5 text-5xl sm:text-6xl lg:text-7xl ${isYellow ? 'opacity-15' : 'opacity-20'} group-hover:opacity-40 transition-opacity pointer-events-none`}
                      animate={{ 
                        y: [0, -15, 0],
                        rotate: [0, 8, -8, 0]
                      }}
                      transition={{ 
                        duration: 6,
                        repeat: Infinity,
                        delay: index * 0.5,
                        ease: "easeInOut"
                      }}
                    >
                      {item.emoji}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom trust badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 sm:mt-16 lg:mt-20 text-center"
        >
          <div className="inline-flex items-center gap-3 sm:gap-4 px-6 sm:px-8 py-4 sm:py-5 bg-white rounded-2xl shadow-xl border-2 border-[#0090ff]/10">
            <Users className="w-6 h-6 sm:w-7 sm:h-7 text-[#0090ff]" />
            <div className="text-left">
              <p className="text-[#0F172A] outfit-bold text-base sm:text-lg">+15,000 trabajos completados</p>
              <p className="text-[#64748B] text-xs sm:text-sm outfit-medium">Con calificación promedio de 4.8 ⭐</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}