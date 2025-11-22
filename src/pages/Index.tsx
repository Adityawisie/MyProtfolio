import { useState, useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Preloader from '@/components/Preloader';
import CustomCursor from '@/components/CustomCursor';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize Lenis smooth scroll after loading
    if (!loading) {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      // Initialize scroll animations for reveal sections
      const revealSections = document.querySelectorAll('.reveal-section');
      revealSections.forEach((section) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          },
          opacity: 0,
          y: 60,
          duration: 1,
          ease: "power3.out"
        });
      });

      return () => {
        lenis.destroy();
      };
    }
  }, [loading]);

  return (
    <>
      {loading && <Preloader onLoadComplete={() => setLoading(false)} />}
      
      {!loading && (
        <div className="custom-cursor">
          <CustomCursor />
          <main className="relative z-2">
            <Hero />
            <About />
            <Projects />
            <Contact />
            <Footer />
          </main>
        </div>
      )}
    </>
  );
};

export default Index;
