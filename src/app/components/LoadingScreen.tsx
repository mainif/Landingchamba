import { motion } from 'motion/react';
import { useEffect } from 'react';
import chambaLogo from '@/assets/CHAMPA_LOGO.png';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoadingComplete();
    }, 3000); // 3 segundos

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo principal con animación */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ 
          scale: 1, 
          opacity: 1
        }}
        transition={{ 
          duration: 0.6,
          ease: "easeOut"
        }}
        className="mb-8"
      >
        <img 
          src={chambaLogo} 
          alt="CHAMBA" 
          className="h-32 md:h-40 lg:h-48 w-auto"
        />
      </motion.div>

      {/* Puntos de carga animados */}
      <div className="flex gap-2">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-3 h-3 bg-[#0090ff] rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
