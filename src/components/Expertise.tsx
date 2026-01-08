import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    title: "FRONTEND",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
    level: 90,
  },
  {
    title: "BACKEND",
    skills: ["Node.js", "Python", "PostgreSQL", "Redis", "REST/GraphQL"],
    level: 85,
  },
  {
    title: "SECURITY",
    skills: ["Pentesting", "OWASP", "Burp Suite", "Network Analysis", "CTF"],
    level: 80,
  },
  {
    title: "DEVOPS",
    skills: ["Docker", "Linux", "CI/CD", "AWS", "Git"],
    level: 75,
  },
];

export const Expertise = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="expertise"
      className="section bg-card"
      aria-labelledby="expertise-title"
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
            <span className="font-mono text-primary text-sm">03</span>
            <div className="h-px flex-1 bg-border" />
            <h2 id="expertise-title" className="text-sm font-mono tracking-widest text-muted-foreground">
              SKILLS
            </h2>
          </motion.div>

          {/* Title + Skills Grid */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left - Title */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-4"
            >
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight sticky top-32">
                ARSENAL<br />
                <span className="text-outline">TÉCNICO</span>
              </h3>
              
              <p className="mt-8 text-muted-foreground text-lg">
                Ferramentas e tecnologias que uso para transformar ideias em realidade.
              </p>
            </motion.div>

            {/* Right - Skills */}
            <div className="lg:col-span-8 space-y-8">
              {skillGroups.map((group, groupIndex) => (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + groupIndex * 0.1 }}
                  className="brutal-card p-6 md:p-8"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
                    <h4 className="text-2xl font-bold flex items-center gap-3">
                      <span className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center font-mono text-sm">
                        {String(groupIndex + 1).padStart(2, "0")}
                      </span>
                      {group.title}
                    </h4>
                    
                    {/* Progress Bar */}
                    <div className="flex-1">
                      <div className="h-2 bg-secondary relative overflow-hidden">
                        <motion.div
                          className="absolute inset-y-0 left-0 bg-primary"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${group.level}%` } : {}}
                          transition={{ duration: 1, delay: 0.5 + groupIndex * 0.15 }}
                        />
                      </div>
                    </div>
                    
                    <span className="font-mono text-primary text-lg">
                      {group.level}%
                    </span>
                  </div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-3">
                    {group.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ 
                          duration: 0.3, 
                          delay: 0.6 + groupIndex * 0.1 + skillIndex * 0.05 
                        }}
                        className="px-4 py-2 text-sm font-mono bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* Additional Tools */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="text-center pt-8 border-t-2 border-dashed border-border"
              >
                <p className="font-mono text-sm text-muted-foreground mb-6">
                  + OUTRAS FERRAMENTAS
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {["Wireshark", "Nmap", "Figma", "Nginx", "MongoDB", "Bash"].map((tool) => (
                    <span
                      key={tool}
                      className="px-4 py-2 text-xs font-mono border border-dashed border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
