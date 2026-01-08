import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "FULL-STACK DEV",
  "SECURITY RESEARCHER", 
  "PROBLEM SOLVER",
  "CODE BREAKER",
];

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-background"
      aria-label="Seção principal"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 grid-brutal opacity-30" aria-hidden="true" />
      
      {/* Floating shapes that follow cursor */}
      <motion.div
        className="absolute w-96 h-96 border border-primary/20 rotate-45"
        style={{
          left: mousePos.x * 0.02,
          top: mousePos.y * 0.02,
        }}
        transition={{ type: "spring", stiffness: 50 }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute right-0 bottom-0 w-64 h-64 bg-primary/5"
        style={{
          right: mousePos.x * 0.01,
          bottom: mousePos.y * 0.01,
        }}
        transition={{ type: "spring", stiffness: 30 }}
        aria-hidden="true"
      />

      {/* Main Content */}
      <div className="flex-1 flex items-center relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl">
            {/* Status */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-3 h-3 bg-primary animate-pulse" />
              <span className="font-mono text-sm text-muted-foreground uppercase tracking-widest">
                Disponível para projetos
              </span>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-4"
            >
              <h1 className="text-[clamp(3rem,15vw,12rem)] font-bold leading-[0.85] tracking-tighter">
                <span className="text-outline block">TARCYS</span>
                <span className="block">
                  <span className="highlight-box">AMORIM</span>
                </span>
              </h1>
            </motion.div>

            {/* Role Switcher */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="h-12 mb-8 overflow-hidden"
            >
              <motion.div
                key={roleIndex}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="font-mono text-xl md:text-2xl text-primary"
              >
                {`> ${roles[roleIndex]}_`}
              </motion.div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mb-12 leading-relaxed"
            >
              Construindo software que importa. 
              Quebrando sistemas para torná-los mais fortes.
              <br />
              <span className="text-foreground font-medium">
                Código é arte. Segurança é ciência.
              </span>
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={scrollToProjects}
                className="magnetic-btn px-8 py-4 text-sm"
              >
                VER TRABALHOS
              </button>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-4 text-sm font-bold uppercase tracking-wider border-2 border-foreground hover:bg-foreground hover:text-background transition-colors"
              >
                CONTATO
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="border-t-2 border-b-2 border-foreground py-4 bg-primary overflow-hidden"
      >
        <div className="marquee">
          <div className="marquee-content">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-8 text-primary-foreground font-bold text-sm tracking-widest whitespace-nowrap">
                <span>REACT</span>
                <span className="text-2xl">◆</span>
                <span>TYPESCRIPT</span>
                <span className="text-2xl">◆</span>
                <span>NODE.JS</span>
                <span className="text-2xl">◆</span>
                <span>PYTHON</span>
                <span className="text-2xl">◆</span>
                <span>PENTESTING</span>
                <span className="text-2xl">◆</span>
                <span>LINUX</span>
                <span className="text-2xl">◆</span>
                <span>DOCKER</span>
                <span className="text-2xl">◆</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-24 right-8 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="font-mono text-xs text-muted-foreground writing-mode-vertical rotate-180"
          style={{ writingMode: "vertical-rl" }}
        >
          SCROLL ↓
        </motion.div>
      </motion.div>

      {/* Corner Numbers */}
      <div className="absolute top-24 right-8 font-mono text-xs text-muted-foreground hidden md:block">
        <div>LAT -22.4319</div>
        <div>LON -46.9578</div>
      </div>
    </section>
  );
};
