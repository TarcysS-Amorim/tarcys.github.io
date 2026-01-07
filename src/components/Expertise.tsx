import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "Tailwind CSS", level: 95 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 90 },
      { name: "PostgreSQL", level: 80 },
      { name: "REST APIs", level: 90 },
    ],
  },
  {
    title: "Security",
    skills: [
      { name: "Pentesting", level: 75 },
      { name: "Linux", level: 90 },
      { name: "Network Security", level: 80 },
      { name: "OWASP", level: 85 },
    ],
  },
  {
    title: "DevOps",
    skills: [
      { name: "Docker", level: 85 },
      { name: "Git", level: 95 },
      { name: "CI/CD", level: 75 },
      { name: "AWS", level: 70 },
    ],
  },
];

export const Expertise = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="expertise"
      className="section bg-gradient-to-b from-background via-card/30 to-background"
      aria-labelledby="expertise-title"
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
              Skills
            </span>
            <h2
              id="expertise-title"
              className="text-3xl md:text-5xl font-bold mt-4 mb-6"
            >
              Áreas de Expertise
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Tecnologias e ferramentas que utilizo para transformar ideias em 
              soluções digitais seguras e eficientes.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + catIndex * 0.1 }}
                className="glass rounded-2xl p-6"
              >
                <h3 className="text-xl font-semibold mb-6 text-primary">
                  {category.title}
                </h3>
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground font-mono">
                          {skill.level}%
                        </span>
                      </div>
                      <div
                        className="h-2 bg-secondary rounded-full overflow-hidden"
                        role="progressbar"
                        aria-valuenow={skill.level}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={`${skill.name}: ${skill.level}%`}
                      >
                        <motion.div
                          className="h-full bg-gradient-to-r from-primary to-cyber-blue rounded-full"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{
                            duration: 1,
                            delay: 0.5 + catIndex * 0.1 + skillIndex * 0.1,
                            ease: "easeOut",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tools Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <p className="text-sm text-muted-foreground mb-6">
              Também trabalho com
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "GraphQL",
                "Redis",
                "MongoDB",
                "Nginx",
                "Bash",
                "Figma",
                "Burp Suite",
                "Wireshark",
              ].map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 text-sm rounded-full bg-secondary/50 text-muted-foreground border border-border hover:border-primary/50 hover:text-foreground transition-all duration-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
