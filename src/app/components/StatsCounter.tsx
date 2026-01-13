import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { TrendingUp, ShieldCheck, Award, Zap } from 'lucide-react';

function Counter({ target, suffix = '', duration = 2, isDecimal = false }: { target: number; suffix?: string; duration?: number; isDecimal?: boolean }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => isDecimal ? Number(latest.toFixed(1)) : Math.round(latest));
  const nodeRef = useRef<HTMLSpanElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [isInView]);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, target, { duration });
    return controls.stop;
  }, [target, duration, count, isInView]);

  useEffect(() => {
    const unsubscribe = rounded.on('change', (latest) => {
      if (nodeRef.current) {
        const displayValue = isDecimal ? latest.toFixed(1) : latest.toLocaleString();
        nodeRef.current.textContent = displayValue + suffix;
      }
    });

    return () => unsubscribe();
  }, [suffix, rounded, isDecimal]);

  return <span ref={nodeRef}>0{suffix}</span>;
}

export function StatsCounter() {
  const stats = [
    {
      icon: TrendingUp,
      value: 5000,
      suffix: '+',
      label: 'Usuarios activos',
      color: 'from-[#0090ff] to-[#0070cc]'
    },
    {
      icon: ShieldCheck,
      value: 1200,
      suffix: '+',
      label: 'Maestros verificados',
      color: 'from-[#ffcf06] to-[#f0c200]'
    },
    {
      icon: Award,
      value: 4.8,
      suffix: '',
      label: 'Rating promedio',
      color: 'from-[#0090ff] to-[#0070cc]',
      decimal: true
    },
    {
      icon: Zap,
      value: 30,
      suffix: ' min',
      label: 'Tiempo respuesta',
      color: 'from-[#ffcf06] to-[#f0c200]'
    }
  ];

  return (
    <section className="py-16 px-4 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, #0F172A 1px, transparent 0)',
        backgroundSize: '32px 32px'
      }}></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl text-[#0F172A] mb-2">
            CHAMBA en números
          </h3>
          <p className="text-lg text-[#64748B] outfit-medium">
            Resultados que hablan por sí solos
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const isYellow = stat.color.includes('ffcf06');
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                {/* Icon with gradient */}
                <motion.div
                  className="inline-flex items-center justify-center mb-4"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                >
                  <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}>
                    <Icon className={`w-7 h-7 md:w-8 md:h-8 ${isYellow ? 'text-[#0F172A]' : 'text-white'}`} />
                  </div>
                </motion.div>

                {/* Animated number */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-2"
                >
                  <Counter 
                    target={stat.value} 
                    suffix={stat.suffix} 
                    duration={2.5} 
                    isDecimal={stat.decimal || false}
                  />
                </motion.div>

                {/* Label */}
                <div className="text-sm md:text-base text-[#64748B] outfit-medium">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}