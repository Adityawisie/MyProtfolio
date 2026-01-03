import { useEffect, useRef } from 'react';
import gsap from 'gsap';

<<<<<<< HEAD
// Only 5 languages for faster loading
=======
>>>>>>> 8676ce8ef5d993ddd0ab0c250fdcc91c7132a661
const greetings = [
  "Hello",
  "नमस्ते", 
  "こんにちは",
<<<<<<< HEAD
  "Hola",
  "Bonjour"
=======
  "안녕하세요",
  "Hola",
  "Bonjour",
  "Hallo",
  "مرحبا",
  "Ciao",
  "Γειά σου"
>>>>>>> 8676ce8ef5d993ddd0ab0c250fdcc91c7132a661
];

interface PreloaderProps {
  onLoadComplete: () => void;
}

const Preloader = ({ onLoadComplete }: PreloaderProps) => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const greetingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        // Fade and scale out the preloader
        gsap.to(preloaderRef.current, {
          opacity: 0,
          scale: 0.95,
          duration: 0.8,
          ease: "power2.inOut",
          onComplete: onLoadComplete
        });
      }
    });

<<<<<<< HEAD
    // Animate greetings with yoyo and repeat - original smooth animation
=======
    // Animate greetings with yoyo and repeat
>>>>>>> 8676ce8ef5d993ddd0ab0c250fdcc91c7132a661
    greetings.forEach((greeting) => {
      tl.to(greetingRef.current, {
        opacity: 1,
        duration: 0.22,
        ease: "power2.out",
        yoyo: true,
        repeat: 1,
        onStart: () => {
          if (greetingRef.current) {
            greetingRef.current.textContent = greeting;
          }
        }
      }, `+=${0.09}`);
    });

    return () => {
      tl.kill();
    };
  }, [onLoadComplete]);

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
    >
      <div
        ref={greetingRef}
        className="text-2xl font-heading font-light tracking-tight opacity-0 text-center"
      >
        Hello
      </div>
    </div>
  );
};

export default Preloader;