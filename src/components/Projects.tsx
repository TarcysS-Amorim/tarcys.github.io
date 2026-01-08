import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    num: "01",
    title: "SECUREAUTH",
    subtitle: "PLATFORM",
    description: "Sistema de autenticação multi-fator com análise de comportamento e detecção de anomalias.",
    tags: ["React", "Node.js", "PostgreSQL", "JWT"],
    year: "2024",
    category: "SECURITY",
    github: "https://github.com/TarcysAmorim",
    link: "#",
  },
  {
    num: "02",
    title: "NETWORK",
    subtitle: "MONITOR",
    description: "Dashboard para monitoramento de tráfego de rede com alertas inteligentes em tempo real.",
    tags: ["Python", "FastAPI", "Redis", "WebSocket"],
    year: "2024",
    category: "DEVOPS",
    github: "https://github.com/TarcysAmorim",
    link: "#",
  },
  {
    num: "03",
    title: "CLI",
    subtitle: "SECURITY",
    description: "Suite de ferramentas de linha de comando para automação de testes de segurança.",
    tags: ["Rust", "Linux", "Shell"],
    year: "2023",
    category: "TOOLS",
    github: "https://github.com/TarcysAmorim",
    link: "#",
  },
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="section bg-background stripes"
      aria-labelledby="projects-title"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div ref={ref} className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-16"
          >
            <span className="font-mono text-primary text-sm">02</span>
            <div className="h-px flex-1 bg-border" />
            <h2 id="projects-title" className="text-sm font-mono tracking-widest text-muted-foreground">
              TRABALHOS
            </h2>
          </motion.div>

          {/* Big Title */}
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-16"
          >
            PROJETOS<br />
            <span className="text-outline">SELECIONADOS</span>
          </motion.h3>

          {/* Projects List */}
          <div className="space-y-2">
            {projects.map((project, index) => (
              <motion.article
                key={project.num}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative"
              >
                <div className={`border-t-2 border-b-2 border-border py-8 md:py-12 transition-all duration-300 ${
                  hoveredIndex === index ? "bg-foreground text-background border-foreground" : ""
                }`}>
                  <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
                    {/* Number */}
                    <span className={`font-mono text-sm transition-colors ${
                      hoveredIndex === index ? "text-primary" : "text-muted-foreground"
                    }`}>
                      {project.num}
                    </span>

                    {/* Title */}
                    <div className="flex-1">
                      <h4 className="text-3xl md:text-5xl font-bold tracking-tight">
                        {project.title}
                        <span className={`ml-2 transition-colors ${
                          hoveredIndex === index ? "text-primary" : "text-muted-foreground"
                        }`}>
                          {project.subtitle}
                        </span>
                      </h4>
                    </div>

                    {/* Category & Year */}
                    <div className="flex items-center gap-8">
                      <span className="font-mono text-xs hidden md:block">
                        {project.category}
                      </span>
                      <span className="font-mono text-sm">
                        {project.year}
                      </span>
                      
                      {/* Arrow */}
                      <ArrowUpRight className={`w-8 h-8 transition-all duration-300 ${
                        hoveredIndex === index ? "rotate-0" : "-rotate-45"
                      }`} />
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <motion.div
                    initial={false}
                    animate={{ 
                      height: hoveredIndex === index ? "auto" : 0,
                      opacity: hoveredIndex === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-8 grid md:grid-cols-2 gap-8">
                      <p className={`text-lg ${
                        hoveredIndex === index ? "text-background/80" : "text-muted-foreground"
                      }`}>
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap items-center gap-4">
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 flex-1">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className={`px-3 py-1 text-xs font-mono border transition-colors ${
                                hoveredIndex === index 
                                  ? "border-background/30 text-background/80" 
                                  : "border-border text-muted-foreground"
                              }`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Links */}
                        <div className="flex gap-3">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-3 border-2 transition-colors ${
                              hoveredIndex === index 
                                ? "border-background hover:bg-background hover:text-foreground" 
                                : "border-foreground hover:bg-foreground hover:text-background"
                            }`}
                            aria-label={`GitHub - ${project.title}`}
                          >
                            <Github className="w-5 h-5" />
                          </a>
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-3 border-2 transition-colors ${
                              hoveredIndex === index 
                                ? "border-background bg-primary text-primary-foreground hover:bg-background hover:text-foreground" 
                                : "border-foreground bg-primary text-primary-foreground"
                            }`}
                            aria-label={`Demo - ${project.title}`}
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* More Projects CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <a
              href="https://github.com/TarcysAmorim"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-lg font-medium hover:text-primary transition-colors group"
            >
              <Github className="w-5 h-5" />
              Ver todos no GitHub
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
