import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, FileText, Shield, X } from 'lucide-react';
import chambaLogo from 'figma:asset/0199ac367f38328e9cbab82108c85f56d68cd27d.png';
import svgPaths from '@/imports/svg-cfkl1es9jv';
import { useState } from 'react';

export function Footer() {
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <>
      <footer className="bg-gradient-to-br from-[#0F172A] via-[#1a2332] to-[#0F172A] text-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0090ff] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#ffcf06] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20 relative z-10">
          
          {/* Logo and Description */}
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <motion.div 
              className="h-14 sm:h-16 lg:h-20 w-auto max-w-[180px] lg:max-w-[200px] mb-5 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img src={chambaLogo} alt="CHAMBA" className="h-full w-auto object-contain" />
            </motion.div>
            <motion.p 
              className="text-[#94a3b8] outfit-medium text-base sm:text-lg leading-relaxed max-w-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              La app peruana que conecta empresas y condominios con maestros verificados.
            </motion.p>
          </div>

          {/* Grid de Secciones */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-16 mb-12 sm:mb-16">
            
            {/* Sección: Enlaces */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-white outfit-bold uppercase tracking-wider text-sm sm:text-base mb-5 sm:mb-6">Enlaces</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#for-clients" className="text-[#94a3b8] hover:text-[#0090ff] transition-colors outfit-medium text-base sm:text-lg block group">
                    <span className="inline-block group-hover:translate-x-1 transition-transform">Para Clientes</span>
                  </a>
                </li>
                <li>
                  <a href="#for-maestros" className="text-[#94a3b8] hover:text-[#ffcf06] transition-colors outfit-medium text-base sm:text-lg block group">
                    <span className="inline-block group-hover:translate-x-1 transition-transform">Para Maestros</span>
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="text-[#94a3b8] hover:text-white transition-colors outfit-medium text-base sm:text-lg block group">
                    <span className="inline-block group-hover:translate-x-1 transition-transform">Cómo Funciona</span>
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="text-[#94a3b8] hover:text-white transition-colors outfit-medium text-base sm:text-lg block group">
                    <span className="inline-block group-hover:translate-x-1 transition-transform">Testimonios</span>
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Sección: Descarga */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-white outfit-bold uppercase tracking-wider text-sm sm:text-base mb-5 sm:mb-6">Disponible en</h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://apps.apple.com/app/chamba" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#94a3b8] hover:text-white transition-colors outfit-medium text-base sm:text-lg flex items-center gap-3 group"
                  >
                    <svg className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 24">
                      <path d={svgPaths.p19650700} />
                    </svg>
                    <span>App Store</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://play.google.com/store/apps/chamba" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#94a3b8] hover:text-white transition-colors outfit-medium text-base sm:text-lg flex items-center gap-3 group"
                  >
                    <svg className="w-[13.5px] h-[22.5px] flex-shrink-0 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 13.5 22.5">
                      <path d={svgPaths.p2a73a300} />
                    </svg>
                    <span>Google Play</span>
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Sección: Contacto */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-white outfit-bold uppercase tracking-wider text-sm sm:text-base mb-5 sm:mb-6">Contacto</h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="mailto:contacto@chamba.click" 
                    className="text-[#94a3b8] hover:text-[#0090ff] transition-colors outfit-medium text-base sm:text-lg flex items-center gap-3 group"
                  >
                    <Mail className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="break-all">contacto@chamba.click</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="tel:+51987654321" 
                    className="text-[#94a3b8] hover:text-[#0090ff] transition-colors outfit-medium text-base sm:text-lg flex items-center gap-3 group"
                  >
                    <Phone className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span>+51 987 654 321</span>
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Sección: Redes Sociales */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-white outfit-bold uppercase tracking-wider text-sm sm:text-base mb-5 sm:mb-6">Síguenos</h3>
              <div className="flex items-center gap-3">
                <motion.a 
                  href="https://facebook.com/chamba.pe" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-[#0090ff] hover:bg-[#0080e6] rounded-2xl flex items-center justify-center transition-all shadow-lg hover:shadow-[#0090ff]/50"
                  aria-label="Facebook"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 28 28">
                    <path d={svgPaths.p3ffd07a0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </motion.a>
                <motion.a 
                  href="https://instagram.com/chamba.pe" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-[#ffcf06] hover:bg-[#f0c200] rounded-2xl flex items-center justify-center transition-all shadow-lg hover:shadow-[#ffcf06]/50"
                  aria-label="Instagram"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-6 h-6" fill="white" viewBox="0 0 26 26">
                    <path d={svgPaths.p2ed50d90} />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-[#334155] to-transparent mb-8"></div>

          {/* Bottom: Copyright + Legal */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-between gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <p className="text-[#64748b] outfit-medium text-sm sm:text-base text-center sm:text-left">
              © 2026 CHAMBA. Todos los derechos reservados
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 outfit-medium text-sm sm:text-base">
              <button 
                onClick={() => setShowTerms(true)} 
                className="text-[#64748b] hover:text-white transition-colors"
              >
                Términos y Condiciones
              </button>
              <span className="text-[#64748b]">•</span>
              <button 
                onClick={() => setShowPrivacy(true)} 
                className="text-[#64748b] hover:text-white transition-colors"
              >
                Política de Privacidad
              </button>
            </div>
          </motion.div>
        </div>
      </footer>

      {/* Modal: Términos */}
      <AnimatePresence>
        {showTerms && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowTerms(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "tween", duration: 0.2 }}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gradient-to-r from-[#0090ff] to-[#0070dd] p-6 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white outfit-bold text-xl">Términos y Condiciones</h3>
                    <p className="text-white/80 text-xs">Actualizado 2026</p>
                  </div>
                </div>
                <button 
                  onClick={() => setShowTerms(false)} 
                  className="text-white hover:bg-white/20 w-9 h-9 rounded-xl flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-6 overflow-y-auto max-h-[calc(85vh-140px)] space-y-5">
                <div>
                  <h4 className="font-bold text-[#0F172A] text-base mb-2">1. Naturaleza de la Plataforma</h4>
                  <p className="text-[#64748B] text-sm leading-relaxed">
                    CHAMBA conecta empresas y condominios con profesionales independientes. No somos empleadores ni contratamos directamente.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-[#0F172A] text-base mb-2">2. Responsabilidades</h4>
                  <p className="text-[#64748B] text-sm leading-relaxed mb-2">
                    <strong>CHAMBA:</strong> Verifica identidad, facilita conexión y procesa pagos.
                  </p>
                  <p className="text-[#64748B] text-sm leading-relaxed">
                    <strong>Maestros:</strong> Responsables de calidad, impuestos y obligaciones laborales.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-[#0F172A] text-base mb-2">3. Limitación de Responsabilidad</h4>
                  <p className="text-[#64748B] text-sm leading-relaxed">
                    No asumimos responsabilidad laboral, contractual ni tributaria sobre servicios prestados.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-[#0F172A] text-base mb-2">4. Condiciones de Uso</h4>
                  <p className="text-[#64748B] text-sm leading-relaxed">
                    Debes ser mayor de 18 años y proporcionar información veraz.
                  </p>
                </div>

                <div className="bg-[#0090ff]/10 border-l-4 border-[#0090ff] p-4 rounded-r-xl">
                  <p className="text-[#0F172A] text-sm outfit-semibold">
                    Al usar CHAMBA, aceptas estos términos y condiciones.
                  </p>
                </div>
              </div>
              
              <div className="border-t bg-gray-50 p-4 flex justify-end">
                <button 
                  onClick={() => setShowTerms(false)} 
                  className="px-6 py-2.5 bg-[#0090ff] text-white rounded-xl text-sm font-semibold hover:bg-[#0070dd] transition-colors"
                >
                  Cerrar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal: Privacidad */}
      <AnimatePresence>
        {showPrivacy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowPrivacy(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "tween", duration: 0.2 }}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gradient-to-r from-[#ffcf06] to-[#ffc700] p-6 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#0F172A]/10 rounded-xl flex items-center justify-center">
                    <Shield className="w-5 h-5 text-[#0F172A]" />
                  </div>
                  <div>
                    <h3 className="text-[#0F172A] outfit-bold text-xl">Política de Privacidad</h3>
                    <p className="text-[#0F172A]/70 text-xs">Tus datos protegidos</p>
                  </div>
                </div>
                <button 
                  onClick={() => setShowPrivacy(false)} 
                  className="text-[#0F172A] hover:bg-[#0F172A]/10 w-9 h-9 rounded-xl flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-6 overflow-y-auto max-h-[calc(85vh-140px)] space-y-5">
                <div>
                  <h4 className="font-bold text-[#0F172A] text-base mb-2">1. Información Recopilada</h4>
                  <p className="text-[#64748B] text-sm leading-relaxed">
                    Recopilamos: nombre, email, teléfono, ubicación, datos de perfil y pagos procesados de forma segura.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-[#0F172A] text-base mb-2">2. Uso de la Información</h4>
                  <p className="text-[#64748B] text-sm leading-relaxed">
                    Para conectar empresas y condominios con maestros, verificar identidad, procesar pagos y mejorar continuamente nuestros servicios.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-[#0F172A] text-base mb-2">3. Protección de Datos</h4>
                  <p className="text-[#64748B] text-sm leading-relaxed">
                    Implementamos encriptación SSL/TLS y almacenamiento seguro. No vendemos tu información a terceros.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-[#0F172A] text-base mb-2">4. Tus Derechos</h4>
                  <p className="text-[#64748B] text-sm leading-relaxed">
                    Puedes acceder, corregir, eliminar o exportar tu información en cualquier momento.
                  </p>
                </div>
                
                <div className="bg-[#ffcf06]/10 border-l-4 border-[#ffcf06] p-4 rounded-r-xl">
                  <p className="text-[#0F172A] text-sm outfit-semibold">
                    📧 Contacto: <a href="mailto:privacidad@chamba.pe" className="text-[#0090ff] underline">privacidad@chamba.pe</a>
                  </p>
                </div>
              </div>
              
              <div className="border-t bg-gray-50 p-4 flex justify-end">
                <button 
                  onClick={() => setShowPrivacy(false)} 
                  className="px-6 py-2.5 bg-[#ffcf06] text-[#0F172A] rounded-xl text-sm font-semibold hover:bg-[#f0c200] transition-colors"
                >
                  Cerrar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}