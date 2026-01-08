import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { id: "about", label: "SOBRE", num: "01" },
  { id: "projects", label: "TRABALHOS", num: "02" },
  { id: "expertise", label: "SKILLS", num: "03" },
  { id: "contact", label: "CONTATO", num: "04" },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const timer = setInterval(() => setTime(new Date()), 1000);
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(timer);
    };
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-sm border-b-2 border-foreground" : ""
        }`}
        role="navigation"
        aria-label="Navegação principal"
      >
        <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="group flex items-center gap-2"
            aria-label="Ir para o início"
          >
            <div className="w-10 h-10 bg-primary flex items-center justify-center border-2 border-foreground group-hover:bg-foreground transition-colors">
              <span className="text-primary-foreground font-mono font-bold text-lg group-hover:text-background transition-colors">
                T
              </span>
            </div>
            <span className="hidden sm:block font-mono text-xs text-muted-foreground">
              {time.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}
              <span className="animate-blink">:</span>
              {time.getSeconds().toString().padStart(2, "0")}
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="group px-4 py-2 font-mono text-sm tracking-wider text-muted-foreground hover:text-foreground hover:bg-foreground/5 transition-all"
                aria-label={`Ir para ${item.label}`}
              >
                <span className="text-primary text-xs mr-1">{item.num}</span>
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 border-2 border-foreground bg-background hover:bg-foreground group transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMobileMenuOpen}
          >
            <span className={`w-5 h-0.5 bg-foreground group-hover:bg-background transition-all ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-5 h-0.5 bg-foreground group-hover:bg-background transition-all ${isMobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`w-5 h-0.5 bg-foreground group-hover:bg-background transition-all ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu - Full Screen */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background md:hidden"
          >
            <div className="h-full flex flex-col justify-center items-center gap-4 p-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.id)}
                  className="group flex items-baseline gap-4 text-5xl font-bold hover:text-primary transition-colors"
                >
                  <span className="font-mono text-sm text-primary">{item.num}</span>
                  <span className="text-outline-thin group-hover:text-primary">{item.label}</span>
                </motion.button>
              ))}
            </div>
            
            {/* Corner decoration */}
            <div className="absolute bottom-8 left-8 font-mono text-xs text-muted-foreground">
              <div>MOGI MIRIM, SP</div>
              <div>-22.4319° / -46.9578°</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
