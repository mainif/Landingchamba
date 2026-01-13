import { motion } from 'motion/react';
import appScreenshot from 'figma:asset/72d2a070fb39f00cb861545fb9db018a4e0562f9.png';

export function PhoneMockupWithApp() {
  return (
    <div className="relative inline-block">
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-[3rem] blur-2xl opacity-20 bg-[#0090ff]"></div>

      {/* Phone frame */}
      <motion.div 
        className="relative bg-[#0F172A] rounded-[2.5rem] p-3 shadow-2xl z-10"
        whileHover={{ y: -10 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="bg-white rounded-[2rem] overflow-hidden">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#0F172A] h-7 w-32 rounded-b-3xl z-10"></div>
          
          {/* Screen content - CHAMBA App Screenshot */}
          <div className="relative w-[320px] h-[650px] bg-white">
            <img 
              src={appScreenshot} 
              alt="CHAMBA App Interface" 
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </motion.div>

      {/* Floating badge */}
      <motion.div
        className="absolute -top-3 -right-3 px-4 py-2 rounded-full shadow-xl z-20 bg-gradient-to-br from-[#0090ff] to-[#0070cc] text-white outfit-bold text-sm"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, type: "spring" }}
      >
        ⚡ App Real
      </motion.div>
    </div>
  );
}
