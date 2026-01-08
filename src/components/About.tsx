import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "03", label: "ANOS", suffix: "+" },
  { value: "20", label: "PROJETOS", suffix: "+" },
  { value: "∞", label: "CAFÉ", suffix: "" },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="section bg-background"
      aria-labelledby="about-title"
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
            <span className="font-mono text-primary text-sm">01</span>
            <div className="h-px flex-1 bg-border" />
            <h2 id="about-title" className="text-sm font-mono tracking-widest text-muted-foreground">
              SOBRE
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Left - Big Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-7"
            >
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
                DESENVOLVEDOR COM{" "}
                <span className="text-outline">OBSESSÃO</span>{" "}
                POR <span className="highlight-box">SEGURANÇA</span>
              </h3>
              
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Minha filosofia é simples: para proteger sistemas, você precisa 
                  entender como quebrá-los. Combino desenvolvimento full-stack 
                  com práticas de segurança ofensiva.
                </p>
                <p>
                  Cada linha de código que escrevo considera não apenas 
                  funcionalidade, mas também as vulnerabilidades que ela pode criar.
                </p>
              </div>

              {/* Quote */}
              <motion.blockquote
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-12 pl-6 border-l-4 border-primary"
              >
                <p className="text-xl md:text-2xl font-medium italic text-foreground">
                  "O melhor hacker é aquele que pensa como um desenvolvedor. 
                  O melhor desenvolvedor é aquele que pensa como um hacker."
                </p>
              </motion.blockquote>
            </motion.div>

            {/* Right - Stats & Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-5"
            >
              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mb-12">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="brutal-card p-4 text-center"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-primary font-mono">
                      {stat.value}
                      <span className="text-lg">{stat.suffix}</span>
                    </div>
                    <div className="text-xs font-mono text-muted-foreground mt-2">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Info Box */}
              <div className="brutal-card p-6 space-y-4">
                <div className="flex justify-between items-center border-b border-border pb-4">
                  <span className="font-mono text-sm text-muted-foreground">LOCALIZAÇÃO</span>
                  <span className="font-medium">Mogi Mirim, SP</span>
                </div>
                <div className="flex justify-between items-center border-b border-border pb-4">
                  <span className="font-mono text-sm text-muted-foreground">FOCO</span>
                  <span className="font-medium">Full-Stack + Security</span>
                </div>
                <div className="flex justify-between items-center border-b border-border pb-4">
                  <span className="font-mono text-sm text-muted-foreground">STATUS</span>
                  <span className="text-primary font-medium flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary animate-pulse" />
                    Disponível
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-mono text-sm text-muted-foreground">CAFÉ/DIA</span>
                  <span className="font-medium">███████░░░ 7</span>
                </div>
              </div>

              {/* Experience Tags */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="mt-8 flex flex-wrap gap-2"
              >
                {["Web Apps", "APIs", "Pentesting", "DevOps", "Automation", "CLI Tools"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 text-xs font-mono uppercase tracking-wider border-2 border-border hover:border-primary hover:text-primary transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
