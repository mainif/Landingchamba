import { motion } from 'motion/react';
import { Shield, Search, CreditCard, CheckCircle } from 'lucide-react';
import imgHomePage2 from 'figma:asset/fae02b3b871f7232b2e1b59f8ea942b5205e059d.png';

export function ClientSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
  };

  const benefits = [
    {
      icon: Shield,
      text: 'Personas verificadas con identidad confirmada'
    },
    {
      icon: Search,
      text: 'Precios claros antes de contratar'
    },
    {
      icon: CreditCard,
      text: 'Tú eliges con quién trabajar'
    }
  ];

  return (
    <section id="for-clients" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F0F9FF] to-white overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute top-1/2 left-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-gradient-to-br from-[#0090ff]/10 to-transparent rounded-full blur-3xl -translate-y-1/2"></div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            {...fadeInUp}
            className="order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 bg-[#0090ff]/10 px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6">
              <div className="w-2 h-2 bg-[#0090ff] rounded-full animate-pulse"></div>
              <span className="text-sm sm:text-base text-[#0090ff] gilroy-bold">Para clientes</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#0F172A] mb-4 sm:mb-6 leading-tight">
              ¿Necesitas servicios?
            </h2>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#64748B] mb-6 sm:mb-8 md:mb-10 leading-relaxed gilroy-medium">
              Encuentra al maestro indicado en minutos para tu condominio o empresa. Todo claro, todo seguro.
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
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#0090ff] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#0F172A] pt-2 gilroy-medium">
                      {benefit.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Phone mockup usando imagen de Figma */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative mx-auto max-w-[280px] sm:max-w-sm lg:max-w-md">
              <motion.div 
                className="relative"
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 2, 0]
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
                  src={imgHomePage2} 
                  alt="App CHAMBA - Vista Cliente" 
                  className="w-full h-auto drop-shadow-2xl rounded-[3rem]"
                />
              </motion.div>

              {/* Floating checkmark */}
              <motion.div
                className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-12 h-12 sm:w-16 sm:h-16 bg-[#ffcf06] rounded-full flex items-center justify-center shadow-2xl"
                animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, type: "tween" }}
              >
                <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-[#0F172A]" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}