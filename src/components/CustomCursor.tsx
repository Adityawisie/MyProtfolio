import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check if screen is desktop size
    const checkScreenSize = () => {
      const isDesktopSize = window.innerWidth >= 768;
      setIsDesktop(isDesktopSize);
    };

    // Initial check
    checkScreenSize();

    // Add resize listener
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  useEffect(() => {
    // Early return if not desktop - don't attach any listeners
    if (!isDesktop) return;

    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!dot || !ring) return;

    const moveCursor = (e: MouseEvent) => {
      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out"
      });

      gsap.to(ring, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseEnter = () => {
      gsap.to(ring, {
        scale: 1.5,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(ring, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    window.addEventListener('mousemove', moveCursor);
    
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [isDesktop]);

  // Don't render cursor on mobile/tablet
  if (!isDesktop) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot -translate-x-1/2 -translate-y-1/2 hidden md:block" />
      <div ref={ringRef} className="cursor-ring -translate-x-1/2 -translate-y-1/2 hidden md:block" />
    </>
  );
};

export default CustomCursor;