import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Globe } from 'lucide-react';
import heroImage from '@/assets/aditya-hero.jpg';

const Hero = () => {
  const firstNameRef = useRef<HTMLHeadingElement>(null);
  const lastNameRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const codeByRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    // Animate "Code by" first
    tl.from(codeByRef.current, {
      opacity: 0,
      y: 80,
      duration: 0.8,
      ease: "power3.out"
    })
    // Then first name
    .from(firstNameRef.current, {
      opacity: 0,
      y: 80,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.3")
    // Then last name
    .from(lastNameRef.current, {
      opacity: 0,
      y: 80,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.5")
    // Then subtitle
    .from(subtitleRef.current, {
      opacity: 0,
      y: 80,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.4");

    // Floating animation for hero image
    gsap.to(imageRef.current, {
      y: -15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    // Marquee animation
    gsap.to(marqueeRef.current, {
      x: "-50%",
      duration: 20,
      repeat: -1,
      ease: "none"
    });

    return () => {
      tl.kill();
    };
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#A7A7A7' }}>
      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-8 md:px-12 lg:px-20 py-6">
        {/* Copyright */}
        <div ref={codeByRef} className="text-xs md:text-sm text-black/70">
          © Code by Aditya
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-6 md:gap-8 text-sm md:text-base text-black font-medium">
          <button onClick={() => scrollToSection('projects')} className="nav-link relative hover:opacity-70 transition-opacity">
            Work
          </button>
          <span className="text-black/40">·</span>
          <button onClick={() => scrollToSection('about')} className="nav-link relative hover:opacity-70 transition-opacity">
            About
          </button>
          <span className="text-black/40">·</span>
          <button onClick={() => scrollToSection('contact')} className="nav-link relative hover:opacity-70 transition-opacity">
            Contact
          </button>
        </nav>
      </div>

      {/* Marquee Text Behind Image */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-10">
        <div ref={marqueeRef} className="whitespace-nowrap">
          <span className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-heading font-bold tracking-tight text-black/10 select-none">
            ADITYA JAIN — ADITYA JAIN — 
          </span>
        </div>
      </div>

      {/* Hero Portrait - Centered */}
      <img 
        ref={imageRef}
        src={heroImage}
        alt="Aditya Jain"
        className="relative z-20 w-[280px] md:w-[380px] lg:w-[430px] h-auto object-cover rounded-3xl shadow-2xl"
        style={{ 
          transform: 'rotate(-2deg)',
          filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.3))'
        }}
      />

      {/* Location Badge - Bottom Left */}
      <div className="absolute left-6 md:left-10 lg:left-12 bottom-12 md:bottom-16 z-30 bg-black text-white px-5 md:px-6 py-3 md:py-4 rounded-full flex items-center gap-3 shadow-xl">
        <div className="text-left">
          <p className="text-[10px] md:text-xs opacity-70 font-light">Located in</p>
          <p className="text-xs md:text-sm font-medium">India</p>
        </div>
        <Globe className="w-5 h-5 md:w-6 md:h-6 opacity-80" />
      </div>

      {/* Right Side - Name Reveal */}
      <div className="absolute right-6 md:right-12 lg:right-20 top-1/2 -translate-y-1/2 z-30 max-w-xs space-y-6">
        <div className="space-y-2">
          <h1 ref={firstNameRef} className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-black leading-none">
            Aditya
          </h1>
          <h1 ref={lastNameRef} className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-black leading-none">
            Jain
          </h1>
        </div>

        <div ref={subtitleRef}>
          <p className="text-base md:text-lg text-black/60">
            Game Developer
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;