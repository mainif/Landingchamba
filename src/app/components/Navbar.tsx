import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { motion } from 'motion/react';
import chambaLogo from '@/assets/CHAMPA_LOGO.png';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2 md:py-3' 
          : 'bg-white/90 backdrop-blur-sm py-3 md:py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <img src={chambaLogo} alt="CHAMBA" className="h-10 md:h-14" />
          </motion.div>

          {/* Desktop Menu - Centered usando flex-grow */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10 flex-grow justify-center">
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-[#0F172A] hover:text-[#0090ff] transition-colors outfit-semibold text-base py-2 px-3"
            >
              Cómo funciona
            </button>
            <button
              onClick={() => scrollToSection('for-clients')}
              className="text-[#0F172A] hover:text-[#0090ff] transition-colors outfit-semibold text-base py-2 px-3"
            >
              Necesito un servicio
            </button>
            <button
              onClick={() => scrollToSection('for-maestros')}
              className="text-[#0F172A] hover:text-[#0090ff] transition-colors outfit-semibold text-base py-2 px-3"
            >
              Quiero chamba
            </button>
          </div>

          {/* Desktop CTA - Al costado derecho */}
          <motion.button 
            className="hidden lg:flex bg-[#ffcf06] hover:bg-[#f0c200] text-[#0F172A] px-6 xl:px-7 py-3 rounded-full shadow-lg items-center gap-2 relative overflow-hidden group outfit-bold text-base flex-shrink-0"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 207, 6, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"
            />
            <Download className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Descargar</span>
          </motion.button>

          {/* Mobile Menu Button - SOLO visible en móvil */}
          <button
            className="lg:hidden p-3 -mr-2 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isMenuOpen ? (
              <X className="h-7 w-7 text-[#0F172A]" />
            ) : (
              <Menu className="h-7 w-7 text-[#0F172A]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            className="lg:hidden pb-5 pt-4 space-y-2 mt-2 border-t border-gray-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="block w-full text-left px-5 py-3.5 text-[#0F172A] hover:bg-[#0090ff]/10 rounded-xl outfit-semibold text-base active:bg-[#0090ff]/20 transition-colors"
            >
              Cómo funciona
            </button>
            <button
              onClick={() => scrollToSection('for-clients')}
              className="block w-full text-left px-5 py-3.5 text-[#0F172A] hover:bg-[#0090ff]/10 rounded-xl outfit-semibold text-base active:bg-[#0090ff]/20 transition-colors"
            >
              Necesito un servicio
            </button>
            <button
              onClick={() => scrollToSection('for-maestros')}
              className="block w-full text-left px-5 py-3.5 text-[#0F172A] hover:bg-[#0090ff]/10 rounded-xl outfit-semibold text-base active:bg-[#0090ff]/20 transition-colors"
            >
              Quiero chamba
            </button>
            <div className="pt-2 flex justify-center">
              <button className="bg-[#ffcf06] hover:bg-[#f0c200] active:bg-[#e0b200] text-[#0F172A] px-6 py-4 rounded-xl shadow-lg inline-flex items-center gap-2 outfit-bold text-base transition-all">
                <Download className="w-5 h-5" />
                Descargar CHAMBA
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}