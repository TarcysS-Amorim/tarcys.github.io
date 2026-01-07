import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar, Briefcase, GraduationCap } from "lucide-react";

const stats = [
  { value: "3+", label: "Anos de Experiência" },
  { value: "20+", label: "Projetos Entregues" },
  { value: "10+", label: "Tecnologias" },
  { value: "∞", label: "Café Consumido" },
];

const timeline = [
  {
    year: "2024",
    title: "Cybersecurity Specialist",
    description: "Foco em segurança ofensiva e pentesting",
    icon: Briefcase,
  },
  {
    year: "2023",
    title: "Full-Stack Developer",
    description: "Desenvolvimento de aplicações web completas",
    icon: Briefcase,
  },
  {
    year: "2022",
    title: "Início da Jornada",
    description: "Primeiros passos em desenvolvimento e segurança",
    icon: GraduationCap,
  },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="section bg-gradient-to-b from-background via-card/30 to-background"
      aria-labelledby="about-title"
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
              Sobre Mim
            </span>
            <h2
              id="about-title"
              className="text-3xl md:text-5xl font-bold mt-4 mb-6"
            >
              Quem está por trás do código
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Desenvolvedor apaixonado por criar soluções que importam, 
              com um olhar especial para segurança e performance.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Bio */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="glass rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="w-5 h-5 text-primary" aria-hidden="true" />
                  <span className="text-muted-foreground">
                    Mogi Mirim, São Paulo
                  </span>
                </div>

                <p className="text-foreground mb-6 leading-relaxed">
                  Sou um desenvolvedor Full-Stack com especialização em Cybersecurity. 
                  Minha missão é construir aplicações seguras, escaláveis e com 
                  experiências de usuário excepcionais.
                </p>

                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Acredito que a melhor forma de proteger sistemas é entender 
                  como eles podem ser quebrados. Por isso, combino desenvolvimento 
                  com práticas de segurança ofensiva para criar soluções robustas.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      className="text-center p-4 rounded-xl bg-secondary/50"
                    >
                      <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              <h3 className="text-xl font-semibold mb-8 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" aria-hidden="true" />
                Trajetória
              </h3>

              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.15 }}
                    className="relative pl-8 pb-6 border-l border-border last:border-0 last:pb-0"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-0 w-4 h-4 -translate-x-1/2 rounded-full bg-primary glow" aria-hidden="true" />

                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-primary text-sm">
                        {item.year}
                      </span>
                      <item.icon className="w-4 h-4 text-muted-foreground" aria-hidden="true" />
                    </div>
                    <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
