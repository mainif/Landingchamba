import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroImproved } from './components/HeroImproved';
import { StatsCounter } from './components/StatsCounter';
import { HowItWorksImproved } from './components/HowItWorksImproved';
import { ClientSection } from './components/ClientSection';
import { MaestroSection } from './components/MaestroSection';
import { Testimonials } from './components/Testimonials';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { MockupsGallery } from './components/MockupsGallery';
import { SVGCodeViewer } from './components/SVGCodeViewer';

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      setCurrentPage(hash || 'home');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('hashchange', handleHashChange);
    
    // Set initial page based on hash
    handleHashChange();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Render SVG code viewer page
  if (currentPage === 'svg-code') {
    return <SVGCodeViewer />;
  }

  // Render mockups gallery page
  if (currentPage === 'mockups') {
    return <MockupsGallery />;
  }

  // Render landing page
  return (
    <div className="min-h-screen bg-[#FFFDF7]">
      <Navbar />
      <HeroImproved scrollY={scrollY} />
      <ClientSection />
      <MaestroSection />
      <StatsCounter />
      <HowItWorksImproved />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
}