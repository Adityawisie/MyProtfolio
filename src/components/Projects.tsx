import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ArrowUpRight, Github, ExternalLink, FileText } from 'lucide-react';
import cellverseImg from '@/assets/Cellverse.png';
import flappyBirdImg from '@/assets/flappy-bird.png';
import shadowwoodLegendsImg from '@/assets/shadowwood-legends.png';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = sectionRef.current?.querySelectorAll('.project-card');
      
      cards?.forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
          opacity: 0,
          y: 60,
          filter: "blur(10px)",
          duration: 1,
          ease: "power3.out"
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      title: "Cellverse",
      role: "Game Developer",
      tech: "Unity, C#, SpacetimeDB",
      description: "A server-authoritative MMO arcade game inspired by .io mechanics, where hundreds to thousands of players coexist in a persistent world, growing by absorbing smaller entities while avoiding larger threats.",
      year: "2026",
      tags: ["Unity", "C#", "SpacetimeDB", "MMO"],
      status: "In Progress",
      gddLink: "/assets/GDD/CellverseGDD.pdf",
      gameLink: null,
      githubLink: null
    },
    {
      title: "Shadowwood Legends",
      role: "Game Developer",
      tech: "Unity, C#, RPG Systems",
      description: "An action RPG featuring complex combat systems, inventory management, and quest mechanics. Built with modular architecture for extensibility and player immersion.",
      year: "2025",
      tags: ["Unity", "C#", "Game Design", "RPG"],
      githubLink: "https://github.com/Adityawisie/Shadowwood-Legends/tree/master",
      gameLink: "https://adityawisie.itch.io/shadowwood-legends"
    },
    {
      title: "Flappy Bird",
      role: "Game Developer",
      tech: "C#, Unity, Canvas",
      description: "A recreation of the classic Flappy Bird game with smooth physics, responsive controls, and polished UI. Focuses on tight gameplay mechanics and visual feedback.",
      year: "2025",
      tags: ["C#", "Unity", "Canvas", "2D"],
      githubLink: "https://github.com/Adityawisie/Flappy-Bird",
      gameLink: "https://adityawisie.itch.io/flappy-bird"
    }
  ];

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="reveal-section relative py-32 px-6 md:px-12 lg:px-20 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight mb-4">
            Selected Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A collection of games, prototypes, and web applications showcasing 
            technical problem-solving and creative execution.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-8">
          {projects.map((project, idx) => (
            <article 
              key={idx}
              className="project-card group relative p-8 md:p-10 lg:p-12 rounded-[2rem] border border-border bg-panel hover:border-foreground/20 transition-all duration-700 overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
              </div>

              <div className="relative grid lg:grid-cols-3 gap-8 lg:gap-12">
                {/* Left - Title & Meta */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <p className="text-xs uppercase tracking-widest text-muted-foreground">
                          {project.role} — {project.tech}
                        </p>
                        {project.status && (
                          <span className="px-2.5 py-1 text-xs font-medium bg-accent/10 text-accent border border-accent/20 rounded-full whitespace-nowrap">
                            {project.status}
                          </span>
                        )}
                      </div>
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                        {project.title}
                      </h3>
                    </div>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">
                      {project.year}
                    </span>
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, tagIdx) => (
                      <span 
                        key={tagIdx}
                        className="px-3 py-1 text-xs border border-border rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-2">
                    {project.gddLink ? (
                      <a
                        href={project.gddLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm border border-border rounded-full hover:border-foreground/30 transition-colors"
                      >
                        <FileText className="w-4 h-4" />
                        View GDD
                      </a>
                    ) : null}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm border border-border rounded-full hover:border-foreground/30 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        GitHub
                      </a>
                    )}
                    {project.gameLink ? (
                      <a
                        href={project.gameLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm border border-border rounded-full hover:border-foreground/30 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Play Game
                      </a>
                    ) : project.status === "In Progress" ? (
                      <button
                        disabled
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm border border-border rounded-full opacity-50 cursor-not-allowed"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Coming Soon
                      </button>
                    ) : null}
                  </div>
                </div>

                {/* Right - Game Screenshot */}
                <div className="flex items-center justify-center lg:justify-end">
                  <div className="w-full max-w-xs aspect-square rounded-2xl border border-border overflow-hidden group-hover:border-foreground/20 transition-colors duration-500">
                    <img 
                      src={idx === 0 ? cellverseImg : idx === 1 ? shadowwoodLegendsImg : flappyBirdImg}
                      alt={project.title}
                      className={`w-full h-full object-cover ${project.status === "In Progress" ? "opacity-75 grayscale-[15%]" : ""}`}
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;