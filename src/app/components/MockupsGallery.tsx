import { motion } from 'motion/react';
import { Download, Eye, Copy, Check, ArrowLeft } from 'lucide-react';
import { useState } from 'react';

export function MockupsGallery() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const mockups = [
    {
      name: 'Mockup Completo Premium',
      description: '🎨 Mockup completo con todos los iconos, badges y efectos incluidos - Listo para usar',
      file: '/chamba-mockup-completo.svg',
      preview: '/chamba-mockup-completo.svg',
      size: '500×1000px',
      features: ['⭐ Rating 4.8 visible', '⚡ Badge 15K descargas', 'Estrellas animadas', 'Glow multi-color', 'Listo para usar'],
      highlighted: true
    },
    {
      name: 'Template con Iconos',
      description: '📱 Template editable con todos los iconos flotantes para insertar tu foto',
      file: '/chamba-mockup-con-iconos.svg',
      preview: '/chamba-mockup-con-iconos.svg',
      size: '500×1000px',
      features: ['Todos los iconos incluidos', 'Guías de colocación', 'Grid de referencia', 'Badges flotantes'],
      highlighted: true
    },
    {
      name: 'Template Editable Simple',
      description: '🎯 Template básico con guías visuales para insertar tu imagen fácilmente',
      file: '/chamba-phone-template.svg',
      preview: '/chamba-phone-template.svg',
      size: '450×900px',
      features: ['Guías visuales', 'Grid de referencia', 'Instrucciones incluidas', 'Sin iconos extras']
    },
    {
      name: 'Premium CHAMBA',
      description: 'Mockup completo con glow multi-color, badges flotantes y efectos premium',
      file: '/chamba-phone-premium.svg',
      preview: '/chamba-phone-premium.svg',
      size: '450×900px',
      features: ['Glow multi-capa', 'Badges animados', 'Sombras profesionales', 'Estrellas decorativas']
    },
    {
      name: 'Detallado Pro',
      description: 'Versión detallada con botones realistas, cámara y barra de gestos',
      file: '/phone-mockup-detailed.svg',
      preview: '/phone-mockup-detailed.svg',
      size: '380×760px',
      features: ['Botones volumen', 'Silent switch', 'Power button', 'Reflejo en pantalla']
    },
    {
      name: 'Simple Limpio',
      description: 'Diseño minimalista y limpio perfecto para presentaciones',
      file: '/chamba-phone-simple.svg',
      preview: '/chamba-phone-simple.svg',
      size: '360×740px',
      features: ['Ultra limpio', 'Glow sutil', 'Ligero', 'Fácil de editar']
    },
    {
      name: 'Básico CHAMBA',
      description: 'Mockup básico con notch moderno y colores CHAMBA',
      file: '/chamba-phone-mockup.svg',
      preview: '/chamba-phone-mockup.svg',
      size: '340×700px',
      features: ['Glow azul CHAMBA', 'Notch Dynamic Island', 'Compacto', 'Marca optimizada']
    },
    {
      name: 'Estándar',
      description: 'Mockup estándar simple con glow y botones laterales',
      file: '/phone-mockup.svg',
      preview: '/phone-mockup.svg',
      size: '360×730px',
      features: ['Simple y efectivo', 'Glow incluido', 'Botones laterales', 'Versátil']
    }
  ];

  const handleCopyPath = (path: string, index: number) => {
    navigator.clipboard.writeText(path);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFFDF7] via-white to-[#FFFDF7]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0090ff] to-[#0070cc] text-white py-8 px-4 sticky top-0 z-50 shadow-2xl">
        <div className="max-w-7xl mx-auto">
          <motion.a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = '';
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 mb-4 text-white/80 hover:text-white transition-colors outfit-medium cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
            Volver a la Landing
          </motion.a>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-3">
              Mockups SVG CHAMBA
            </h1>
            <p className="text-xl md:text-2xl text-white/90 outfit-medium">
              Descarga los mockups de celular en formato SVG editable
            </p>
          </motion.div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockups.map((mockup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white rounded-3xl shadow-2xl overflow-hidden border ${
                mockup.highlighted 
                  ? 'border-[#ffcf06] border-4 shadow-[0_20px_60px_rgba(255,207,6,0.3)]' 
                  : 'border-gray-100'
              } hover:shadow-[0_20px_60px_rgba(0,144,255,0.15)] transition-all duration-300`}
            >
              {/* Preview */}
              <div className="bg-gradient-to-br from-[#F8FAFC] to-white p-8 flex items-center justify-center h-80 relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0090ff]/5 to-[#ffcf06]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <img 
                  src={mockup.preview} 
                  alt={mockup.name}
                  className="max-h-full max-w-full object-contain transform group-hover:scale-105 transition-transform duration-500 relative z-10"
                />
                
                {/* Highlighted badge */}
                {mockup.highlighted && (
                  <motion.div
                    initial={{ scale: 0, rotate: -12 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="absolute top-4 left-4 bg-gradient-to-r from-[#ffcf06] to-[#f0c200] text-[#0F172A] px-4 py-2 rounded-full text-xs outfit-bold shadow-xl"
                  >
                    ⭐ RECOMENDADO
                  </motion.div>
                )}
                
                {/* Preview badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="absolute top-4 right-4 bg-[#0090ff] text-white px-3 py-1 rounded-full text-xs outfit-bold shadow-lg"
                >
                  {mockup.size}
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl text-[#0F172A] mb-2 outfit-bold">
                  {mockup.name}
                </h3>
                <p className="text-[#64748B] outfit-medium mb-4">
                  {mockup.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {mockup.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="bg-[#E0F2FE] text-[#0090ff] px-3 py-1 rounded-full text-sm outfit-semibold"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-3">
                  {/* Download button */}
                  <motion.a
                    href={mockup.file}
                    download={`${mockup.name.toLowerCase().replace(/\s+/g, '-')}.svg`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#0090ff] to-[#0070cc] text-white px-6 py-3 rounded-xl outfit-bold shadow-lg hover:shadow-xl transition-all w-full"
                  >
                    <Download className="w-5 h-5" />
                    Descargar SVG
                  </motion.a>

                  {/* Copy path button */}
                  <motion.button
                    onClick={() => handleCopyPath(mockup.file, index)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-3 bg-white text-[#0090ff] px-6 py-3 rounded-xl outfit-bold border-2 border-[#0090ff]/20 hover:border-[#0090ff] transition-all w-full"
                  >
                    {copiedIndex === index ? (
                      <>
                        <Check className="w-5 h-5" />
                        ¡Copiado!
                      </>
                    ) : (
                      <>
                        <Copy className="w-5 h-5" />
                        Copiar ruta
                      </>
                    )}
                  </motion.button>

                  {/* Preview in new tab */}
                  <motion.a
                    href={mockup.preview}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-3 bg-[#F8FAFC] text-[#475569] px-6 py-3 rounded-xl outfit-bold hover:bg-[#F1F5F9] transition-all w-full"
                  >
                    <Eye className="w-5 h-5" />
                    Vista previa
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instructions section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 bg-gradient-to-br from-[#0090ff] to-[#0070cc] text-white rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <h2 className="text-3xl md:text-4xl mb-6">
            📱 Cómo usar los mockups
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl outfit-bold mb-3 flex items-center gap-2">
                <span className="bg-white/20 w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                Descargar SVG
              </h3>
              <p className="text-white/90 outfit-medium leading-relaxed">
                Haz clic en "Descargar SVG" para guardar el archivo en tu computadora. El formato SVG es editable en cualquier programa de diseño.
              </p>
            </div>

            <div>
              <h3 className="text-xl outfit-bold mb-3 flex items-center gap-2">
                <span className="bg-white/20 w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                Editar en Figma/Illustrator
              </h3>
              <p className="text-white/90 outfit-medium leading-relaxed">
                Abre el SVG en Figma, Adobe Illustrator o cualquier editor vectorial. Puedes cambiar colores, tamaños y agregar tu screenshot.
              </p>
            </div>

            <div>
              <h3 className="text-xl outfit-bold mb-3 flex items-center gap-2">
                <span className="bg-white/20 w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
                Añadir tu captura
              </h3>
              <p className="text-white/90 outfit-medium leading-relaxed">
                Inserta tu screenshot de la app dentro del área blanca del mockup. Asegúrate de que las proporciones coincidan con el tamaño del screen.
              </p>
            </div>

            <div>
              <h3 className="text-xl outfit-bold mb-3 flex items-center gap-2">
                <span className="bg-white/20 w-8 h-8 rounded-full flex items-center justify-center text-sm">4</span>
                Exportar y usar
              </h3>
              <p className="text-white/90 outfit-medium leading-relaxed">
                Exporta como PNG, JPG o mantén en SVG para web. Úsalo en tu landing, presentaciones, o redes sociales.
              </p>
            </div>
          </div>

          {/* Tips */}
          <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <h4 className="text-lg outfit-bold mb-3">💡 Tips profesionales:</h4>
            <ul className="space-y-2 text-white/90 outfit-medium">
              <li>• Los SVG con glow se ven mejor en fondos claros</li>
              <li>• Usa el mockup "Premium" para marketing y redes sociales</li>
              <li>• El mockup "Simple" es ideal para documentación técnica</li>
              <li>• Puedes cambiar los colores del glow editando los gradientes en el SVG</li>
            </ul>
          </div>
        </motion.div>

        {/* Back to landing CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="/"
            className="inline-flex items-center gap-3 bg-[#ffcf06] text-[#0F172A] px-8 py-4 rounded-full outfit-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
          >
            <ArrowLeft className="w-6 h-6" />
            Volver a la Landing CHAMBA
          </a>
        </motion.div>
      </div>
    </div>
  );
}