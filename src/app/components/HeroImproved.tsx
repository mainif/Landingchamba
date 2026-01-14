import { motion } from 'motion/react';
import { Wrench, Star, Check, Zap, Sparkles, Download } from 'lucide-react';

interface HeroProps {
  scrollY: number;
}

export function HeroImproved({ scrollY }: HeroProps) {
  // Animated doodles data - más visibles
  const doodles = [
    { Icon: Star, color: '#ffcf06', delay: 0, x: '5%', y: '15%', size: 'w-20 h-20' },
    { Icon: Wrench, color: '#0090ff', delay: 0.2, x: '92%', y: '20%', size: 'w-18 h-18' },
    { Icon: Check, color: '#ffcf06', delay: 0.4, x: '8%', y: '75%', size: 'w-16 h-16' },
    { Icon: Zap, color: '#0090ff', delay: 0.6, x: '88%', y: '70%', size: 'w-20 h-20' },
    { Icon: Sparkles, color: '#ffcf06', delay: 0.3, x: '50%', y: '8%', size: 'w-16 h-16' },
    { Icon: Star, color: '#0090ff', delay: 0.5, x: '15%', y: '40%', size: 'w-14 h-14' },
    { Icon: Check, color: '#ffcf06', delay: 0.7, x: '85%', y: '45%', size: 'w-14 h-14' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-[#FFFDF7] via-white to-[#FFFDF7]">
      {/* Animated background doodles - más visibles */}
      {doodles.map((doodle, i) => {
        const Icon = doodle.Icon;
        return (
          <motion.div
            key={i}
            className="absolute pointer-events-none hidden lg:block"
            style={{ 
              left: doodle.x, 
              top: doodle.y,
              color: doodle.color
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.25, 0.5, 0.25],
              scale: [1, 1.2, 1],
              rotate: [0, 15, -15, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
              type: "tween"
            }}
          >
            <Icon className={doodle.size} strokeWidth={2.5} />
          </motion.div>
        );
      })}

      <div className="max-w-[1440px] mx-auto relative z-10 w-full pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-20">
        {/* Centered layout */}
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl px-4"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#0F172A] mb-6 sm:mb-8 leading-[1.1] tracking-tight">
              Encuentra al <span className="text-[#ffcf06]">maestro perfecto</span><br className="hidden sm:block" />
              <span className="block sm:inline"> para tu condominio</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#334155] outfit-bold leading-relaxed max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20">
              Multiservicios a tu alcance
            </p>

            {/* CTA Button - más abajo */}
            <motion.button
              className="bg-[#0090ff] hover:bg-[#0080e6] text-white px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 rounded-full shadow-2xl outfit-bold text-base sm:text-lg md:text-xl inline-flex items-center gap-2 sm:gap-3 group mt-4 sm:mt-8"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 144, 255, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              <span>Descargar CHAMBA</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}