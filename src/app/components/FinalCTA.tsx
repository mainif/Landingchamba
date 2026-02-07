import { motion } from 'motion/react';
import { Download, Star, Wrench } from 'lucide-react';
import { useState } from 'react';

export function FinalCTA() {
  const [formData, setFormData] = useState({ 
    nombre: '', 
    asunto: '', 
    email: '', 
    telefono: '' 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formsubmit.co/informes@chamba.click', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          nombre: formData.nombre,
          email: formData.email,
          telefono: formData.telefono,
          asunto: formData.asunto,
          _subject: `[CHAMBA] Nuevo contacto: ${formData.asunto}`,
          _template: 'table',
          _captcha: 'false'
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ nombre: '', asunto: '', email: '', telefono: '' });
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#4BAFFF] via-[#4096DB] to-[#2D6999] overflow-hidden">
      {/* Decorative stars - matching Figma design */}
      <div className="absolute top-[20%] left-[7.5%] w-14 h-14 sm:w-16 sm:h-16 pointer-events-none">
        <Star className="w-full h-full text-[#FFF2BA]" strokeWidth={1.5} />
      </div>
      
      <div className="absolute top-[18%] right-[58%] w-10 h-10 sm:w-12 sm:h-12 pointer-events-none">
        <Star className="w-full h-full text-[#BFE2F5]" strokeWidth={1.5} />
      </div>

      <div className="absolute top-[30%] left-[6.9%] w-10 h-10 sm:w-12 sm:h-12 pointer-events-none">
        <Star className="w-full h-full text-[#BFE2F5]" strokeWidth={1.5} />
      </div>

      <div className="absolute top-[33%] right-[2.6%] w-9 h-9 sm:w-10 sm:h-10 pointer-events-none">
        <Star className="w-full h-full text-[#BFE2F5]" strokeWidth={1.5} />
      </div>

      <div className="absolute bottom-[20%] left-[32%] w-14 h-14 sm:w-16 sm:h-16 pointer-events-none">
        <Star className="w-full h-full text-[#FFF2BA]" strokeWidth={1.5} />
      </div>

      <div className="absolute bottom-[10%] right-[38%] w-20 h-20 sm:w-24 sm:h-24 pointer-events-none">
        <Star className="w-full h-full text-[#BBE0FE]" strokeWidth={1.5} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
          
          {/* Left: CTA Text */}
          <motion.div
            {...fadeInUp}
            className="text-left space-y-6 sm:space-y-8"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#0F172A] leading-tight tracking-tight">
              Conecta tu condominio con maestros verificados.
            </h2>
            
            <p className="text-xl sm:text-2xl lg:text-3xl text-[#364357] outfit-bold">
              Descarga CHAMBA y empieza hoy.
            </p>

            <motion.a
              href="https://drive.google.com/file/d/1ivmGE5_QZbbZKKYVRZB_rt0aPdwk5moF/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#FDD323] hover:bg-[#f0c200] text-[#2D3444] px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-5 rounded-3xl shadow-[0.401px_0.401px_0.567px_-0.945px_rgba(9,172,255,0.52),1.217px_1.217px_1.721px_-1.89px_rgba(9,172,255,0.49),3.216px_3.216px_4.548px_-2.834px_rgba(9,172,255,0.42),10.078px_10.078px_14.253px_-3.779px_rgba(9,172,255,0.18)] relative overflow-hidden inline-flex items-center gap-3 gilroy-extrabold text-xl sm:text-2xl"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 25px 50px rgba(253, 211, 35, 0.5)" 
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
                style={{ opacity: 0.2 }}
              />
              <Download className="w-5 h-5 sm:w-6 sm:h-6 relative z-10 text-[#2D3444]" strokeWidth={2.5} />
              <span className="relative z-10">Descargar CHAMBA</span>
            </motion.a>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="max-w-lg mx-auto lg:mx-0 lg:ml-auto w-full"
          >
            <div className="bg-white rounded-3xl shadow-[4.106px_1.026px_52.86px_0px_rgba(221,228,234,0.57)] p-6 sm:p-8 md:p-10">
              <div className="mb-6 sm:mb-8">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl text-[#0F172A] mb-3 leading-tight">
                  ¿Tienes preguntas?
                </h3>
                <p className="text-lg sm:text-xl text-[#364357] gilroy-medium">
                  Contáctanos y te respondemos pronto
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div>
                  <label htmlFor="nombre" className="block text-lg sm:text-xl text-[#364357] gilroy-extrabold mb-3">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    placeholder="Ej. Juan Perez"
                    className="w-full px-5 sm:px-6 py-4 sm:py-5 rounded-3xl border-4 border-[#ECEDF0] focus:border-[#0090ff] focus:outline-none transition-colors gilroy-medium text-lg sm:text-xl text-[#8F939B] placeholder:text-[#8F939B]"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="asunto" className="block text-lg sm:text-xl text-[#364357] gilroy-extrabold mb-3">
                    Asunto
                  </label>
                  <select
                    id="asunto"
                    value={formData.asunto}
                    onChange={(e) => setFormData({ ...formData, asunto: e.target.value })}
                    className="w-full px-5 sm:px-6 py-4 sm:py-5 rounded-3xl border-4 border-[#ECEDF0] focus:border-[#0090ff] focus:outline-none transition-colors gilroy-medium text-lg sm:text-xl text-[#8F939B]"
                    required
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="condominio">Información para condominios</option>
                    <option value="empresa">Información para empresas</option>
                    <option value="maestro">Información para maestros</option>
                    <option value="soporte">Soporte técnico</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="email" className="block text-lg sm:text-xl text-[#364357] gilroy-extrabold mb-3">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="tucorreo@ejemplo.com"
                    className="w-full px-5 sm:px-6 py-4 sm:py-5 rounded-3xl border-4 border-[#ECEDF0] focus:border-[#0090ff] focus:outline-none transition-colors gilroy-medium text-lg sm:text-xl text-[#8F939B] placeholder:text-[#8F939B]"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="telefono" className="block text-lg sm:text-xl text-[#364357] gilroy-extrabold mb-3">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    placeholder="987 888 999"
                    className="w-full px-5 sm:px-6 py-4 sm:py-5 rounded-3xl border-4 border-[#ECEDF0] focus:border-[#0090ff] focus:outline-none transition-colors gilroy-medium text-lg sm:text-xl text-[#8F939B] placeholder:text-[#8F939B]"
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full ${isSubmitting ? 'bg-gray-400' : 'bg-[#0090FF] hover:bg-[#0080e6]'} text-white px-6 sm:px-8 py-5 sm:py-6 rounded-3xl shadow-[0.401px_0.401px_0.567px_-0.945px_rgba(9,172,255,0.52),1.217px_1.217px_1.721px_-1.89px_rgba(9,172,255,0.49),3.216px_3.216px_4.548px_-2.834px_rgba(9,172,255,0.42),10.078px_10.078px_14.253px_-3.779px_rgba(9,172,255,0.18)] relative overflow-hidden group gilroy-extrabold text-xl sm:text-2xl flex items-center justify-center`}
                  whileHover={!isSubmitting ? { scale: 1.02, boxShadow: "0 25px 50px rgba(0, 144, 255, 0.4)" } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  <span className="relative z-10">
                    {isSubmitting ? 'Enviando...' : submitStatus === 'success' ? '¡Enviado!' : 'Enviar Mensaje'}
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20"
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
                
                {submitStatus === 'success' && (
                  <p className="text-green-600 text-center gilroy-medium text-lg">
                    ¡Mensaje enviado exitosamente! Te contactaremos pronto.
                  </p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-600 text-center gilroy-medium text-lg">
                    Hubo un error. Por favor, intenta de nuevo o escribe a informes@chamba.click
                  </p>
                )}
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}