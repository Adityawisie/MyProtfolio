import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current?.querySelector('.bio'), {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        opacity: 0,
        y: 40,
        filter: "blur(8px)",
        duration: 1,
        ease: "power3.out"
      });

      gsap.from(cardsRef.current?.children || [], {
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 70%",
        },
        opacity: 0,
        y: 30,
        filter: "blur(5px)",
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out"
      });
    });

    return () => ctx.revert();
  }, []);

  const codingLanguages = [
    "C#",
    "Java",
    "C",
    "Python"
  ];

  const skillsAndTools = [
    "Unity 2D",
    "Unity 3D",
    "Maya",
    "Blender",
    "Unreal"
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="reveal-section relative py-32 px-6 md:px-12 lg:px-20 bg-background"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left - Bio */}
        <div className="bio space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight">
            About
          </h2>
          
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
            Hi, my name is Aditya Jain.
          </p>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
            My journey into technology began back in 9th grade during the lockdown. I was bored at home and wanted to do something productive, so I asked my uncle for his old laptop. It wasn't powerful, but it opened the door to something life-changing. At first, I used it for online classes—then slowly, for exploring games like Valorant and CS:GO, which I still enjoy today.
          </p>
          
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
            But it didn't take long for me to realize that I didn't just want to play games—I wanted to create them.
          </p>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
            That curiosity pushed me toward online learning. I picked up a free web development course on HTML, CSS, and JavaScript, but everything changed when I discovered Unity. There wasn't much structured content available at the time, yet I managed to teach myself enough to build my first 3D prototype. It wasn't perfect (the end-game UI never got finished), but completing that small project gave me a huge sense of achievement.
          </p>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
            When 10th grade started, life became busy, but one thing stayed the same: my passion for game development.
          </p>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
            So I restarted from scratch—more focused, more intentional—and eventually built two fully playable games on my own. Each project has strengthened my skills in gameplay programming, C#, physics, systems design, and world-building.
          </p>
          
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Today, I continue to learn, experiment, and push my abilities forward. Every new idea, mechanic, and prototype brings me closer to my goal: becoming a professional game developer who builds experiences players remember.
          </p>
        </div>

        {/* Right - Brand Cards */}
        <div ref={cardsRef} className="space-y-6">
          {/* Tagline */}
          <div className="p-8 rounded-3xl bg-panel border border-border">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Tagline
            </p>
            <p className="text-2xl font-heading font-semibold tracking-tight">
              Building interactive games and digital products with clear interaction and technical depth.
            </p>
          </div>

          {/* Coding Languages */}
          <div className="p-8 rounded-3xl bg-panel border border-border">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
              Coding Languages
            </p>
            <div className="flex flex-wrap gap-3">
              {codingLanguages.map((language, idx) => (
                <span 
                  key={idx}
                  className="px-4 py-2 text-sm border border-border rounded-full hover:border-foreground/30 transition-colors"
                >
                  {language}
                </span>
              ))}
            </div>
          </div>

          {/* Skills & Tools */}
          <div className="p-8 rounded-3xl bg-panel border border-border">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
              Skills & Tools
            </p>
            <div className="flex flex-wrap gap-3">
              {skillsAndTools.map((skill, idx) => (
                <span 
                  key={idx}
                  className="px-4 py-2 text-sm border border-border rounded-full hover:border-foreground/30 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
