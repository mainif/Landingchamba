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
import { LoadingScreen } from './components/LoadingScreen';

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

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

  // Mostrar pantalla de carga
  if (isLoading) {
    return <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />;
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