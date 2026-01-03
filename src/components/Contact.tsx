import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = sectionRef.current?.querySelectorAll('.animate-element');
      
      gsap.from(elements, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out"
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="reveal-section relative py-32 px-6 md:px-12 lg:px-20 bg-background"
    >
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Headline */}
        <div className="animate-element space-y-6">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight">
            Let's build something.
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            I'm currently available for freelance projects and collaborations. 
            Whether you're building a game, web application, or something in between — let's talk.
          </p>
        </div>

        {/* Email CTA */}
        <div className="animate-element pt-8">
          <Button 
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90 font-medium text-lg px-10 py-7 rounded-full group"
            asChild
          >
            <a href="mailto:adityawisie@gmail.com" className="inline-flex items-center gap-3">
              <Mail className="w-5 h-5" />
              adityawisie@gmail.com
            </a>
          </Button>
        </div>

        {/* Social Links */}
        <div className="animate-element flex flex-wrap items-center justify-center gap-4 pt-8">
          <Button 
            variant="outline"
            className="rounded-full px-6 hover:border-foreground/30"
            asChild
          >
            <a 
              href="https://github.com/Adityawisie" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </Button>

          <Button 
            variant="outline"
            className="rounded-full px-6 hover:border-foreground/30"
            asChild
          >
            <a 
              href="https://www.linkedin.com/in/adityanjain/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </Button>

          <Button 
            variant="outline"
            className="rounded-full px-6 hover:border-foreground/30"
            asChild
          >
            <a 
              href="https://adityawisie.itch.io/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Itch.io
            </a>
          </Button>
        </div>

        {/* Availability Note */}
        <div className="animate-element pt-8">
          <p className="text-white font-light text-lg md:text-xl tracking-wide drop-shadow-[0_0_12px_rgba(0,255,255,0.45)] animate-pulse-slow">
            Currently open to new opportunities and collaborations
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
