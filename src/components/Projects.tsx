import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Lock, Globe, Terminal } from "lucide-react";

const projects = [
  {
    title: "SecureAuth Platform",
    description:
      "Sistema de autenticação multi-fator com análise de comportamento e detecção de anomalias em tempo real.",
    tags: ["React", "Node.js", "PostgreSQL", "JWT"],
    icon: Lock,
    color: "from-primary/20 to-cyber-blue/20",
    link: "#",
    github: "#",
  },
  {
    title: "Network Monitor",
    description:
      "Dashboard para monitoramento de tráfego de rede com alertas inteligentes e visualização em tempo real.",
    tags: ["Python", "FastAPI", "Redis", "WebSocket"],
    icon: Globe,
    color: "from-cyber-purple/20 to-primary/20",
    link: "#",
    github: "#",
  },
  {
    title: "CLI Security Tools",
    description:
      "Suite de ferramentas de linha de comando para automação de testes de segurança e análise de vulnerabilidades.",
    tags: ["Rust", "Linux", "Shell Script"],
    icon: Terminal,
    color: "from-cyber-blue/20 to-cyber-purple/20",
    link: "#",
    github: "#",
  },
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      className="section"
      aria-labelledby="projects-title"
    >
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-mono text-sm uppercase tracking-widest">
              Portfolio
            </span>
            <h2
              id="projects-title"
              className="text-3xl md:text-5xl font-bold mt-4 mb-6"
            >
              Projetos em Destaque
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Uma seleção de projetos que demonstram minha experiência em 
              desenvolvimento full-stack e segurança da informação.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                className="group relative"
              >
                <div className="h-full glass rounded-2xl p-6 flex flex-col transition-all duration-300 hover:border-primary/50 animated-border">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-br ${project.color}`}
                    >
                      <project.icon
                        className="w-6 h-6 text-primary"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-accent transition-all"
                        aria-label={`Ver código do ${project.title} no GitHub`}
                      >
                        <Github className="w-5 h-5" aria-hidden="true" />
                      </a>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-accent transition-all"
                        aria-label={`Ver demo do ${project.title}`}
                      >
                        <ExternalLink className="w-5 h-5" aria-hidden="true" />
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm flex-grow mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-mono rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* View More */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <a
              href="https://github.com/TarcysAmorim"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              <Github className="w-5 h-5" aria-hidden="true" />
              Ver mais no GitHub
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
