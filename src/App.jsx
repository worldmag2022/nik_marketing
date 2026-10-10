import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandStatement from './components/BrandStatement';
import Services from './components/Services';
import SelectedWork from './components/SelectedWork';
import Process from './components/Process';
import Results from './components/Results';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import DiscoveryModal from './components/DiscoveryModal';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [isDiscoveryOpen, setIsDiscoveryOpen] = useState(false);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
      // Initialize Lenis for buttery smooth scrolling matching Framer's Powder template
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
      });

      // Synchronize Lenis with GSAP ScrollTrigger
      lenis.on('scroll', ScrollTrigger.update);

      const updateGsap = (time) => {
        lenis.raf(time * 1000);
      };

      gsap.ticker.add(updateGsap);
      gsap.ticker.lagSmoothing(0);

      return () => {
        gsap.ticker.remove(updateGsap);
        lenis.destroy();
      };
    }
  }, []);

  return (
    <div className="bg-black text-[#F3F3F0] min-h-screen selection:bg-[#FFC300]/30 selection:text-white relative">
      {/* Navigation */}
      <Navbar onOpenDiscovery={() => setIsDiscoveryOpen(true)} />

      {/* Main Homepage Flow */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenDiscovery={() => setIsDiscoveryOpen(true)} />

        {/* 2. Brand Statement / Editorial Intro */}
        <BrandStatement />

        {/* 3. Distinctive Services Pillars */}
        <Services onOpenDiscovery={() => setIsDiscoveryOpen(true)} />

        {/* 4. Selected Work / Portfolio */}
        <SelectedWork onOpenDiscovery={() => setIsDiscoveryOpen(true)} />

        {/* 5. Process / 4-Stage Operating System */}
        <Process onOpenDiscovery={() => setIsDiscoveryOpen(true)} />

        {/* 6. Results / Verified Business Outcomes */}
        <Results />

        {/* 7. Testimonials / Growth Leadership Endorsements */}
        <Testimonials />

        {/* 8. FAQ Accordion */}
        <FAQ onOpenDiscovery={() => setIsDiscoveryOpen(true)} />

        {/* 9. Final Call to Action */}
        <ContactCTA onOpenDiscovery={() => setIsDiscoveryOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenDiscovery={() => setIsDiscoveryOpen(true)} />

      {/* Interactive Discovery Intake Modal */}
      <DiscoveryModal
        isOpen={isDiscoveryOpen}
        onClose={() => setIsDiscoveryOpen(false)}
      />
    </div>
  );
}
