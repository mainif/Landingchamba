import { motion } from 'motion/react';
import { Copy, Check, Download, ArrowLeft } from 'lucide-react';
import { useState } from 'react';

export function SVGCodeViewer() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const svgMockups = [
    {
      name: '⭐ Mockup Completo Premium - Con TODOS los Iconos',
      description: 'Mockup completo con rating 4.8, badge 15K descargas, estrellas animadas, glow multi-color',
      code: `<svg width="500" height="1000" viewBox="0 0 500 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- BACKGROUND EFFECTS -->
  <defs>
    <!-- Multi-layer glow gradients -->
    <radialGradient id="blueGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#0090ff" stop-opacity="0.5"/>
      <stop offset="50%" stop-color="#00c6ff" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#0090ff" stop-opacity="0"/>
    </radialGradient>
    
    <radialGradient id="yellowGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ffcf06" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#ffcf06" stop-opacity="0"/>
    </radialGradient>

    <!-- Gradient for badges -->
    <linearGradient id="blueBadge" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0090ff"/>
      <stop offset="100%" stop-color="#0070cc"/>
    </linearGradient>
    
    <linearGradient id="yellowBadge" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffcf06"/>
      <stop offset="100%" stop-color="#f0c200"/>
    </linearGradient>

    <!-- Shadow filters -->
    <filter id="phoneShadow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="20"/>
      <feOffset dx="0" dy="30" result="offsetblur"/>
      <feComponentTransfer>
        <feFuncA type="linear" slope="0.6"/>
      </feComponentTransfer>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>

    <filter id="badgeShadow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="8"/>
      <feOffset dx="0" dy="5"/>
      <feComponentTransfer>
        <feFuncA type="linear" slope="0.5"/>
      </feComponentTransfer>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>

    <!-- Screen shine -->
    <linearGradient id="screenShine" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="white" stop-opacity="0.15"/>
      <stop offset="50%" stop-color="white" stop-opacity="0"/>
      <stop offset="100%" stop-color="white" stop-opacity="0.08"/>
    </linearGradient>
  </defs>

  <!-- BACKGROUND GLOW LAYERS -->
  <ellipse cx="250" cy="500" rx="200" ry="450" fill="url(#blueGlow)"/>
  <ellipse cx="250" cy="500" rx="180" ry="420" fill="url(#yellowGlow)"/>
  
  <!-- FLOATING DECORATIVE STARS -->
  <g opacity="0.7">
    <!-- Left star -->
    <path d="M 60 250 L 64 260 L 74 260 L 66 266 L 70 276 L 60 270 L 50 276 L 54 266 L 46 260 L 56 260 Z" fill="#ffcf06">
      <animateTransform attributeName="transform" type="rotate" from="0 60 263" to="360 60 263" dur="10s" repeatCount="indefinite"/>
    </path>
    
    <!-- Right star -->
    <path d="M 440 650 L 445 662 L 457 662 L 447 670 L 452 682 L 440 675 L 428 682 L 433 670 L 423 662 L 435 662 Z" fill="#0090ff">
      <animateTransform attributeName="transform" type="rotate" from="0 440 666" to="-360 440 666" dur="12s" repeatCount="indefinite"/>
    </path>
    
    <!-- Top right small star -->
    <path d="M 430 380 L 433 386 L 440 386 L 435 390 L 437 397 L 430 393 L 423 397 L 425 390 L 420 386 L 427 386 Z" fill="#ffcf06">
      <animateTransform attributeName="transform" type="rotate" from="0 430 391" to="360 430 391" dur="8s" repeatCount="indefinite"/>
    </path>
  </g>

  <!-- PHONE MOCKUP WITH SHADOW -->
  <g filter="url(#phoneShadow)">
    <!-- Phone outer frame - Black -->
    <rect x="95" y="120" width="310" height="740" rx="50" fill="#0F172A"/>
    
    <!-- Volume buttons (left side) -->
    <rect x="73" y="280" width="22" height="85" rx="8" fill="#1E293B"/>
    <rect x="75" y="282" width="18" height="81" rx="7" fill="#334155"/>
    
    <!-- Silent switch (left side top) -->
    <rect x="73" y="230" width="22" height="50" rx="8" fill="#1E293B"/>
    <rect x="75" y="232" width="18" height="46" rx="7" fill="#334155"/>
    
    <!-- Power button (right side) -->
    <rect x="405" y="310" width="22" height="115" rx="8" fill="#1E293B"/>
    <rect x="407" y="312" width="18" height="111" rx="7" fill="#334155"/>
    
    <!-- Inner bezel -->
    <rect x="107" y="132" width="286" height="716" rx="42" fill="#1E293B"/>
    
    <!-- White screen area -->
    <rect x="111" y="136" width="278" height="708" rx="38" fill="white"/>
    
    <!-- Notch (Dynamic Island style) -->
    <path d="M 205 136 L 205 148 Q 205 160 217 160 L 230 160 Q 237 160 237 167 L 237 172 Q 237 179 244 179 L 256 179 Q 263 179 263 172 L 263 167 Q 263 160 270 160 L 283 160 Q 295 160 295 148 L 295 136 Z" fill="#0F172A"/>
    
    <!-- Notch details - camera and speaker -->
    <circle cx="250" cy="155" r="4.5" fill="#1E293B" opacity="0.9"/>
    <ellipse cx="268" cy="155" rx="16" ry="6" fill="#1E293B" opacity="0.5"/>
    
    <!-- Screen reflection/shine overlay -->
    <rect x="111" y="136" width="278" height="708" rx="38" fill="url(#screenShine)" opacity="0.7"/>
    
    <!-- Bottom gesture bar -->
    <rect x="215" y="828" width="70" height="6" rx="3" fill="#CBD5E1" opacity="0.6"/>
  </g>

  <!-- FLOATING BADGE - TOP RIGHT (RATING) -->
  <g filter="url(#badgeShadow)">
    <rect x="365" y="90" width="110" height="60" rx="25" fill="url(#blueBadge)"/>
    
    <!-- Star icon -->
    <path d="M 395 115 L 399 126 L 411 126 L 401 133 L 405 144 L 395 137 L 385 144 L 389 133 L 379 126 L 391 126 Z" fill="white"/>
    
    <!-- Rating text -->
    <text x="420" y="128" font-family="Arial, sans-serif" font-size="22" font-weight="bold" fill="white">4.8</text>
    
    <!-- Pulse animation -->
    <animate attributeName="opacity" values="1;0.85;1" dur="2s" repeatCount="indefinite"/>
  </g>

  <!-- FLOATING BADGE - BOTTOM LEFT (DOWNLOADS) -->
  <g filter="url(#badgeShadow)">
    <rect x="30" y="850" width="185" height="60" rx="25" fill="url(#yellowBadge)"/>
    
    <!-- Lightning bolt icon -->
    <path d="M 55 870 L 48 890 L 62 887 L 58 905 L 75 883 L 63 885 Z" fill="#0F172A"/>
    
    <!-- Downloads text -->
    <text x="85" y="888" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#0F172A">15K+ Descargas</text>
    
    <!-- Pulse animation -->
    <animate attributeName="opacity" values="1;0.85;1" dur="2s" repeatCount="indefinite" begin="0.5s"/>
  </g>

  <!-- SPARKLES/SHINE EFFECT (floating icons) -->
  <g opacity="0.8">
    <!-- Sparkle 1 -->
    <g>
      <path d="M 420 200 L 422 206 L 428 206 L 423 210 L 425 216 L 420 212 L 415 216 L 417 210 L 412 206 L 418 206 Z" fill="#00c6ff">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite"/>
      </path>
    </g>
    
    <!-- Sparkle 2 -->
    <g>
      <path d="M 80 500 L 82 506 L 88 506 L 83 510 L 85 516 L 80 512 L 75 516 L 77 510 L 72 506 L 78 506 Z" fill="#ffcf06">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="2.5s" repeatCount="indefinite" begin="0.5s"/>
      </path>
    </g>
    
    <!-- Sparkle 3 -->
    <g>
      <path d="M 440 750 L 442 754 L 447 754 L 443 757 L 445 762 L 440 759 L 435 762 L 437 757 L 433 754 L 438 754 Z" fill="#00c6ff">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" begin="1s"/>
      </path>
    </g>
  </g>

  <!-- CHAMBA BRANDING -->
  <text x="250" y="975" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#0090ff" text-anchor="middle">CHAMBA</text>
  <text x="250" y="995" font-family="Arial, sans-serif" font-size="12" fill="#64748B" text-anchor="middle">Phone Mockup Pro</text>
</svg>`
    },
    {
      name: '📱 Template Editable - Para Insertar TU FOTO',
      description: 'Template con todos los iconos flotantes + área marcada para insertar tu screenshot',
      code: `<svg width="500" height="1000" viewBox="0 0 500 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="blueGlow2" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#0090ff" stop-opacity="0.5"/>
      <stop offset="50%" stop-color="#00c6ff" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#0090ff" stop-opacity="0"/>
    </radialGradient>
    
    <radialGradient id="yellowGlow2" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ffcf06" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#ffcf06" stop-opacity="0"/>
    </radialGradient>

    <linearGradient id="blueBadge2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0090ff"/>
      <stop offset="100%" stop-color="#0070cc"/>
    </linearGradient>
    
    <linearGradient id="yellowBadge2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffcf06"/>
      <stop offset="100%" stop-color="#f0c200"/>
    </linearGradient>

    <filter id="phoneShadow2" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="20"/>
      <feOffset dx="0" dy="30"/>
      <feComponentTransfer>
        <feFuncA type="linear" slope="0.6"/>
      </feComponentTransfer>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>

    <filter id="badgeShadow2" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="8"/>
      <feOffset dx="0" dy="5"/>
      <feComponentTransfer>
        <feFuncA type="linear" slope="0.5"/>
      </feComponentTransfer>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>

    <pattern id="grid2" width="25" height="25" patternUnits="userSpaceOnUse">
      <path d="M 25 0 L 0 0 0 25" fill="none" stroke="#E0F2FE" stroke-width="0.8"/>
    </pattern>
  </defs>

  <ellipse cx="250" cy="500" rx="200" ry="450" fill="url(#blueGlow2)"/>
  <ellipse cx="250" cy="500" rx="180" ry="420" fill="url(#yellowGlow2)"/>
  
  <g opacity="0.7">
    <path d="M 60 250 L 64 260 L 74 260 L 66 266 L 70 276 L 60 270 L 50 276 L 54 266 L 46 260 L 56 260 Z" fill="#ffcf06">
      <animateTransform attributeName="transform" type="rotate" from="0 60 263" to="360 60 263" dur="10s" repeatCount="indefinite"/>
    </path>
    
    <path d="M 440 650 L 445 662 L 457 662 L 447 670 L 452 682 L 440 675 L 428 682 L 433 670 L 423 662 L 435 662 Z" fill="#0090ff">
      <animateTransform attributeName="transform" type="rotate" from="0 440 666" to="-360 440 666" dur="12s" repeatCount="indefinite"/>
    </path>
    
    <path d="M 430 380 L 433 386 L 440 386 L 435 390 L 437 397 L 430 393 L 423 397 L 425 390 L 420 386 L 427 386 Z" fill="#ffcf06">
      <animateTransform attributeName="transform" type="rotate" from="0 430 391" to="360 430 391" dur="8s" repeatCount="indefinite"/>
    </path>
  </g>

  <g filter="url(#phoneShadow2)">
    <rect x="95" y="120" width="310" height="740" rx="50" fill="#0F172A"/>
    
    <rect x="73" y="280" width="22" height="85" rx="8" fill="#1E293B"/>
    <rect x="75" y="282" width="18" height="81" rx="7" fill="#334155"/>
    
    <rect x="73" y="230" width="22" height="50" rx="8" fill="#1E293B"/>
    <rect x="75" y="232" width="18" height="46" rx="7" fill="#334155"/>
    
    <rect x="405" y="310" width="22" height="115" rx="8" fill="#1E293B"/>
    <rect x="407" y="312" width="18" height="111" rx="7" fill="#334155"/>
    
    <rect x="107" y="132" width="286" height="716" rx="42" fill="#1E293B"/>
    
    <!-- ÁREA BLANCA PARA TU FOTO -->
    <rect x="111" y="136" width="278" height="708" rx="38" fill="white"/>
    
    <!-- Grid de guía -->
    <rect x="111" y="136" width="278" height="708" rx="38" fill="url(#grid2)"/>
    
    <!-- INSTRUCCIÓN CENTRAL -->
    <g id="instruction">
      <rect x="180" y="455" width="140" height="90" rx="12" fill="#0090ff" opacity="0.95"/>
      <text x="250" y="485" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="white" text-anchor="middle">
        COLOCA TU
      </text>
      <text x="250" y="508" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="white" text-anchor="middle">
        FOTO AQUÍ
      </text>
      <text x="250" y="530" font-family="Arial, sans-serif" font-size="11" fill="white" text-anchor="middle" opacity="0.9">
        278×708px
      </text>
    </g>
    
    <!-- Guías de esquinas -->
    <rect x="121" y="146" width="35" height="3" fill="#ffcf06"/>
    <rect x="121" y="146" width="3" height="35" fill="#ffcf06"/>
    
    <rect x="354" y="146" width="35" height="3" fill="#ffcf06"/>
    <rect x="386" y="146" width="3" height="35" fill="#ffcf06"/>
    
    <rect x="121" y="831" width="35" height="3" fill="#ffcf06"/>
    <rect x="121" y="799" width="3" height="35" fill="#ffcf06"/>
    
    <rect x="354" y="831" width="35" height="3" fill="#ffcf06"/>
    <rect x="386" y="799" width="3" height="35" fill="#ffcf06"/>
    
    <path d="M 205 136 L 205 148 Q 205 160 217 160 L 230 160 Q 237 160 237 167 L 237 172 Q 237 179 244 179 L 256 179 Q 263 179 263 172 L 263 167 Q 263 160 270 160 L 283 160 Q 295 160 295 148 L 295 136 Z" fill="#0F172A"/>
    
    <circle cx="250" cy="155" r="4.5" fill="#1E293B" opacity="0.9"/>
    <ellipse cx="268" cy="155" rx="16" ry="6" fill="#1E293B" opacity="0.5"/>
    
    <rect x="215" y="828" width="70" height="6" rx="3" fill="#CBD5E1" opacity="0.6"/>
  </g>

  <!-- BADGES FLOTANTES -->
  <g filter="url(#badgeShadow2)">
    <rect x="365" y="90" width="110" height="60" rx="25" fill="url(#blueBadge2)"/>
    <path d="M 395 115 L 399 126 L 411 126 L 401 133 L 405 144 L 395 137 L 385 144 L 389 133 L 379 126 L 391 126 Z" fill="white"/>
    <text x="420" y="128" font-family="Arial, sans-serif" font-size="22" font-weight="bold" fill="white">4.8</text>
    <animate attributeName="opacity" values="1;0.85;1" dur="2s" repeatCount="indefinite"/>
  </g>

  <g filter="url(#badgeShadow2)">
    <rect x="30" y="850" width="185" height="60" rx="25" fill="url(#yellowBadge2)"/>
    <path d="M 55 870 L 48 890 L 62 887 L 58 905 L 75 883 L 63 885 Z" fill="#0F172A"/>
    <text x="85" y="888" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#0F172A">15K+ Descargas</text>
    <animate attributeName="opacity" values="1;0.85;1" dur="2s" repeatCount="indefinite" begin="0.5s"/>
  </g>

  <!-- SPARKLES -->
  <g opacity="0.8">
    <path d="M 420 200 L 422 206 L 428 206 L 423 210 L 425 216 L 420 212 L 415 216 L 417 210 L 412 206 L 418 206 Z" fill="#00c6ff">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite"/>
    </path>
    
    <path d="M 80 500 L 82 506 L 88 506 L 83 510 L 85 516 L 80 512 L 75 516 L 77 510 L 72 506 L 78 506 Z" fill="#ffcf06">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="2.5s" repeatCount="indefinite" begin="0.5s"/>
    </path>
    
    <path d="M 440 750 L 442 754 L 447 754 L 443 757 L 445 762 L 440 759 L 435 762 L 437 757 L 433 754 L 438 754 Z" fill="#00c6ff">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" begin="1s"/>
    </path>
  </g>

  <text x="250" y="975" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#0090ff" text-anchor="middle">CHAMBA</text>
  <text x="250" y="995" font-family="Arial, sans-serif" font-size="12" fill="#64748B" text-anchor="middle">Template con Iconos</text>
</svg>`
    },
    {
      name: '💬 Testimonial Cliente - Template',
      description: 'Template de testimonial con foto, badge "✓ Cliente", chat bubble y datos personales',
      code: `<svg width="600" height="800" viewBox="0 0 600 800" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Gradient for client badge -->
    <linearGradient id="clientBadge" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0090ff"/>
      <stop offset="100%" stop-color="#0070cc"/>
    </linearGradient>
    
    <!-- Photo gradient overlay -->
    <linearGradient id="photoOverlay" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0090ff" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#0070cc" stop-opacity="0.3"/>
    </linearGradient>
    
    <!-- Shadow filters -->
    <filter id="cardShadow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="10"/>
      <feOffset dx="0" dy="10"/>
      <feComponentTransfer>
        <feFuncA type="linear" slope="0.3"/>
      </feComponentTransfer>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>

    <filter id="badgeShadow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="5"/>
      <feOffset dx="0" dy="3"/>
      <feComponentTransfer>
        <feFuncA type="linear" slope="0.4"/>
      </feComponentTransfer>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>

    <!-- Clip path for rounded photo -->
    <clipPath id="photoClip">
      <rect x="50" y="50" width="500" height="450" rx="30"/>
    </clipPath>
  </defs>

  <!-- Background -->
  <rect width="600" height="800" fill="#FFFDF7"/>

  <!-- Photo Container with shadow -->
  <g filter="url(#cardShadow)">
    <!-- Photo background -->
    <rect x="50" y="50" width="500" height="450" rx="30" fill="#E0F2FE"/>
    
    <!-- Photo placeholder (replace with your image) -->
    <rect x="50" y="50" width="500" height="450" rx="30" fill="url(#photoOverlay)" clip-path="url(#photoClip)"/>
    
    <!-- Placeholder text for photo -->
    <text x="300" y="260" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="white" text-anchor="middle" opacity="0.8">
      COLOCA FOTO
    </text>
    <text x="300" y="290" font-family="Arial, sans-serif" font-size="18" fill="white" text-anchor="middle" opacity="0.8">
      500×450px
    </text>
  </g>

  <!-- Badge floating (Cliente) -->
  <g filter="url(#badgeShadow)">
    <rect x="445" y="70" width="85" height="35" rx="17.5" fill="url(#clientBadge)"/>
    <text x="487.5" y="93" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white" text-anchor="middle">
      ✓ Cliente
    </text>
  </g>

  <!-- Chat bubble with shadow -->
  <g filter="url(#cardShadow)">
    <!-- Main bubble -->
    <rect x="50" y="520" width="500" height="160" rx="30" fill="white" stroke="#E5E7EB" stroke-width="1"/>
    
    <!-- Small triangle for chat effect -->
    <rect x="85" y="677" width="20" height="20" fill="white" transform="rotate(45 95 687)" stroke="#E5E7EB" stroke-width="1"/>
    
    <!-- Quote icon -->
    <path d="M 510 540 L 515 545 Q 520 540 525 545 L 530 540 M 520 548 Q 520 555 515 558 Q 510 555 510 548" stroke="#E0F2FE" stroke-width="3" fill="none" opacity="0.5"/>
    <circle cx="515" cy="542" r="18" stroke="#E0F2FE" stroke-width="3" fill="none" opacity="0.3"/>
    
    <!-- Quote text -->
    <text x="80" y="560" font-family="Arial, sans-serif" font-size="20" font-weight="500" fill="#0F172A">
      <tspan x="80" dy="0">"¡Increíble! En menos de 2 horas encontré</tspan>
      <tspan x="80" dy="30">un gasfitero certificado. La app es súper</tspan>
      <tspan x="80" dy="30">fácil de usar y los precios son justos."</tspan>
    </text>
  </g>

  <!-- User info -->
  <text x="70" y="730" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="#0F172A">
    María González
  </text>
  <text x="70" y="760" font-family="Arial, sans-serif" font-size="18" font-weight="600" fill="#475569">
    Ama de casa en San Isidro
  </text>

  <!-- CHAMBA branding -->
  <text x="300" y="795" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#0090ff" text-anchor="middle">
    CHAMBA • Template Testimonial Cliente
  </text>
</svg>`
    },
    {
      name: '⚡ Testimonial Maestro - Template',
      description: 'Template de testimonial con foto, badge "⚡ Maestro", chat bubble y datos profesionales',
      code: `<svg width="600" height="800" viewBox="0 0 600 800" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Gradient for maestro badge -->
    <linearGradient id="maestroBadge" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffcf06"/>
      <stop offset="100%" stop-color="#f0c200"/>
    </linearGradient>
    
    <!-- Photo gradient overlay -->
    <linearGradient id="photoOverlayMaestro" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffcf06" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#f0c200" stop-opacity="0.3"/>
    </linearGradient>
    
    <!-- Shadow filters -->
    <filter id="cardShadow2" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="10"/>
      <feOffset dx="0" dy="10"/>
      <feComponentTransfer>
        <feFuncA type="linear" slope="0.3"/>
      </feComponentTransfer>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>

    <filter id="badgeShadow2" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="5"/>
      <feOffset dx="0" dy="3"/>
      <feComponentTransfer>
        <feFuncA type="linear" slope="0.4"/>
      </feComponentTransfer>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>

    <!-- Clip path for rounded photo -->
    <clipPath id="photoClip2">
      <rect x="50" y="50" width="500" height="450" rx="30"/>
    </clipPath>
  </defs>

  <!-- Background -->
  <rect width="600" height="800" fill="#FFFDF7"/>

  <!-- Photo Container with shadow -->
  <g filter="url(#cardShadow2)">
    <!-- Photo background -->
    <rect x="50" y="50" width="500" height="450" rx="30" fill="#FFF7E6"/>
    
    <!-- Photo placeholder -->
    <rect x="50" y="50" width="500" height="450" rx="30" fill="url(#photoOverlayMaestro)" clip-path="url(#photoClip2)"/>
    
    <!-- Placeholder text for photo -->
    <text x="300" y="260" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="#0F172A" text-anchor="middle" opacity="0.6">
      COLOCA FOTO
    </text>
    <text x="300" y="290" font-family="Arial, sans-serif" font-size="18" fill="#0F172A" text-anchor="middle" opacity="0.6">
      500×450px
    </text>
  </g>

  <!-- Badge floating (Maestro) -->
  <g filter="url(#badgeShadow2)">
    <rect x="435" y="70" width="95" height="35" rx="17.5" fill="url(#maestroBadge)"/>
    <text x="482.5" y="93" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#0F172A" text-anchor="middle">
      ⚡ Maestro
    </text>
  </g>

  <!-- Chat bubble with shadow -->
  <g filter="url(#cardShadow2)">
    <!-- Main bubble -->
    <rect x="50" y="520" width="500" height="160" rx="30" fill="white" stroke="#E5E7EB" stroke-width="1"/>
    
    <!-- Small triangle for chat effect -->
    <rect x="85" y="677" width="20" height="20" fill="white" transform="rotate(45 95 687)" stroke="#E5E7EB" stroke-width="1"/>
    
    <!-- Quote icon -->
    <path d="M 510 540 L 515 545 Q 520 540 525 545 L 530 540 M 520 548 Q 520 555 515 558 Q 510 555 510 548" stroke="#FEF3C7" stroke-width="3" fill="none" opacity="0.5"/>
    <circle cx="515" cy="542" r="18" stroke="#FEF3C7" stroke-width="3" fill="none" opacity="0.3"/>
    
    <!-- Quote text -->
    <text x="80" y="560" font-family="Arial, sans-serif" font-size="20" font-weight="500" fill="#0F172A">
      <tspan x="80" dy="0">"Desde que uso CHAMBA, consigo más</tspan>
      <tspan x="80" dy="30">trabajos y siempre me pagan justo. La</tspan>
      <tspan x="80" dy="30">verificación me da confianza."</tspan>
    </text>
  </g>

  <!-- User info -->
  <text x="70" y="730" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="#0F172A">
    Carlos Ramírez
  </text>
  <text x="70" y="760" font-family="Arial, sans-serif" font-size="18" font-weight="600" fill="#475569">
    Gasfitero certificado • 12 años exp.
  </text>

  <!-- CHAMBA branding -->
  <text x="300" y="795" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#ffcf06" text-anchor="middle">
    CHAMBA • Template Testimonial Maestro
  </text>
</svg>`
    }
  ];

  const handleCopy = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 3000);
  };

  const handleDownload = (code: string, filename: string) => {
    const blob = new Blob([code], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
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
              📱 Código SVG de Mockups CHAMBA
            </h1>
            <p className="text-xl md:text-2xl text-white/90 outfit-medium">
              Copia el código SVG completo y pégalo en tu archivo .svg
            </p>
          </motion.div>
        </div>
      </div>

      {/* SVG Code Sections */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="space-y-12">
          {svgMockups.map((mockup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-[#ffcf06]"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-[#0090ff] to-[#0070cc] text-white p-6">
                <h2 className="text-3xl mb-2">{mockup.name}</h2>
                <p className="text-lg text-white/90 outfit-medium">{mockup.description}</p>
              </div>

              {/* Preview */}
              <div className="p-8 bg-gradient-to-br from-[#F8FAFC] to-white">
                <div className="max-w-md mx-auto">
                  <div 
                    dangerouslySetInnerHTML={{ __html: mockup.code }}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Actions */}
              <div className="p-6 bg-[#F8FAFC] flex flex-col sm:flex-row gap-4">
                <motion.button
                  onClick={() => handleCopy(mockup.code, index)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 flex items-center justify-center gap-3 bg-gradient-to-r from-[#0090ff] to-[#0070cc] text-white px-8 py-4 rounded-xl outfit-bold text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  {copiedIndex === index ? (
                    <>
                      <Check className="w-6 h-6" />
                      ¡Copiado al portapapeles!
                    </>
                  ) : (
                    <>
                      <Copy className="w-6 h-6" />
                      Copiar Código SVG
                    </>
                  )}
                </motion.button>

                <motion.button
                  onClick={() => handleDownload(mockup.code, `chamba-mockup-${index + 1}.svg`)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 flex items-center justify-center gap-3 bg-gradient-to-r from-[#ffcf06] to-[#f0c200] text-[#0F172A] px-8 py-4 rounded-xl outfit-bold text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  <Download className="w-6 h-6" />
                  Descargar .svg
                </motion.button>
              </div>

              {/* Code textarea */}
              <div className="p-6 bg-[#0F172A]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[#ffcf06] outfit-bold">Código SVG:</span>
                  <button
                    onClick={() => handleCopy(mockup.code, index)}
                    className="text-white/70 hover:text-white transition-colors text-sm outfit-medium flex items-center gap-2"
                  >
                    <Copy className="w-4 h-4" />
                    {copiedIndex === index ? '¡Copiado!' : 'Copiar'}
                  </button>
                </div>
                <textarea
                  readOnly
                  value={mockup.code}
                  className="w-full h-64 bg-[#1E293B] text-[#E0F2FE] p-4 rounded-xl font-mono text-sm resize-none outline-none border-2 border-[#334155] focus:border-[#0090ff] transition-colors"
                  onClick={(e) => e.currentTarget.select()}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-gradient-to-br from-[#ffcf06] to-[#f0c200] text-[#0F172A] rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <h2 className="text-3xl md:text-4xl mb-6">
            📝 Cómo usar el código SVG
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl outfit-bold mb-3 flex items-center gap-2">
                <span className="bg-[#0F172A] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                Copiar el código
              </h3>
              <p className="text-[#0F172A]/80 outfit-medium leading-relaxed">
                Haz clic en "Copiar Código SVG" para copiar todo el código al portapapeles.
              </p>
            </div>

            <div>
              <h3 className="text-xl outfit-bold mb-3 flex items-center gap-2">
                <span className="bg-[#0F172A] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                Crear archivo .svg
              </h3>
              <p className="text-[#0F172A]/80 outfit-medium leading-relaxed">
                Crea un archivo nuevo con extensión .svg (ejemplo: mockup-chamba.svg)
              </p>
            </div>

            <div>
              <h3 className="text-xl outfit-bold mb-3 flex items-center gap-2">
                <span className="bg-[#0F172A] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
                Pegar el código
              </h3>
              <p className="text-[#0F172A]/80 outfit-medium leading-relaxed">
                Pega todo el código SVG copiado dentro del archivo y guárdalo.
              </p>
            </div>

            <div>
              <h3 className="text-xl outfit-bold mb-3 flex items-center gap-2">
                <span className="bg-[#0F172A] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">4</span>
                Usar o editar
              </h3>
              <p className="text-[#0F172A]/80 outfit-medium leading-relaxed">
                Abre el archivo .svg en tu navegador, Figma, Illustrator o cualquier editor SVG.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}