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

    // Floating animation for hero image - only on desktop
    const floatingAnimation = gsap.to(imageRef.current, {
      y: -15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      paused: true
    });

    // Enable floating only on desktop
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const handleResize = () => {
      if (mediaQuery.matches) {
        floatingAnimation.play();
      } else {
        floatingAnimation.pause();
        gsap.set(imageRef.current, { y: 0 });
      }
    };

    handleResize();
    mediaQuery.addEventListener('change', handleResize);

    // Marquee animation
    gsap.to(marqueeRef.current, {
      x: "-50%",
      duration: 20,
      repeat: -1,
      ease: "none"
    });

    return () => {
      tl.kill();
      floatingAnimation.kill();
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 md:py-0" style={{ backgroundColor: '#A7A7A7' }}>
      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-6 md:px-12 lg:px-20 py-6">
        {/* Copyright */}
        <div ref={codeByRef} className="text-xs md:text-sm text-black/70">
          © Code by Aditya
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-4 md:gap-6 lg:gap-8 text-xs md:text-sm lg:text-base text-black font-medium">
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

      {/* Marquee Text Behind Image - Hidden on mobile */}
      <div className="hidden md:block absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-10">
        <div ref={marqueeRef} className="whitespace-nowrap">
          <span className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-heading font-bold tracking-tight text-black/10 select-none">
            ADITYA JAIN — ADITYA JAIN — 
          </span>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full px-6 md:px-20 mt-10 md:mt-20 gap-8 md:gap-12 z-20">
        {/* Hero Text - Left side on desktop, top on mobile */}
        <div className="text-center md:text-left order-2 md:order-1 max-w-md">
          <div className="space-y-3 md:space-y-4">
            <h1 ref={firstNameRef} className="text-5xl md:text-7xl font-heading font-bold text-black leading-tight">
              Aditya
            </h1>
            <h1 ref={lastNameRef} className="text-5xl md:text-7xl font-heading font-bold text-black leading-tight">
              Jain
            </h1>
          </div>

          <div ref={subtitleRef} className="mt-6 md:mt-8">
            <p className="text-lg md:text-xl text-black/60">
              Game Developer
            </p>
          </div>
        </div>

        {/* Hero Portrait - Right side on desktop, center on mobile */}
        <img 
          ref={imageRef}
          src={heroImage}
          alt="Aditya Jain"
          className="w-60 sm:w-72 md:w-[420px] h-auto object-cover rounded-3xl shadow-2xl order-1 md:order-2 mx-auto md:mx-0"
          style={{ 
            transform: 'rotate(-2deg)',
            filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.3))'
          }}
        />
      </div>

      {/* Location Badge - Bottom Left */}
      <div className="absolute left-6 md:left-10 lg:left-12 bottom-8 md:bottom-12 lg:bottom-16 z-30 bg-black text-white px-4 md:px-5 lg:px-6 py-2 md:py-3 lg:py-4 rounded-full flex items-center gap-2 md:gap-3 shadow-xl">
        <div className="text-left">
          <p className="text-[9px] md:text-[10px] lg:text-xs opacity-70 font-light">Located in</p>
          <p className="text-[11px] md:text-xs lg:text-sm font-medium">India</p>
        </div>
        <Globe className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 opacity-80" />
      </div>
    </section>
  );
};

export default Hero;