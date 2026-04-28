import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Tracks from './components/Tracks';
import Timeline from './components/Timeline';
import Prizes from './components/Prizes';
import Team from './components/Team';
import Organizers from './components/Organizers';
import Sponsors from './components/Sponsors';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import MobileMenu from './components/MobileMenu';
import { MatrixCanvas, ParticleCanvas, BackToTop } from './components/CanvasEffects';
import './index.css';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle('overflow-hidden');
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.classList.remove('overflow-hidden');
  };

  return (
    <>
      <MatrixCanvas />
      <ParticleCanvas />
      
      <Header onMenuToggle={toggleMenu} menuOpen={menuOpen} />
      <MobileMenu isOpen={menuOpen} onClose={closeMenu} />

      <main className="relative z-10 pt-20">
        <Hero />
        <About />
        <Tracks />
        <Timeline />
        <Prizes />
        <Team />
        <Organizers />
        <Sponsors />
        <FAQ />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}