import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(footerRef.current, {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        },
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out"
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <footer 
      ref={footerRef}
      className="reveal-section relative border-t border-border py-12 px-6 md:px-12 lg:px-20 bg-background"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Aditya Jain. All rights reserved.
        </p>
        
        <p className="text-sm text-muted-foreground">
          Game & Web Developer — India
        </p>
      </div>
    </footer>
  );
};

export default Footer;
