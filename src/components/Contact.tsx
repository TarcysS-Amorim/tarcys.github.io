import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, Linkedin, Mail, ArrowUpRight, Send } from "lucide-react";
import { toast } from "sonner";

const socials = [
  { name: "GITHUB", href: "https://github.com/TarcysAmorim", icon: Github },
  { name: "LINKEDIN", href: "https://linkedin.com/in/tarcys", icon: Linkedin },
  { name: "EMAIL", href: "mailto:contato@tarcys.dev", icon: Mail },
];

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    toast.success("Mensagem enviada!", { description: "Retorno em breve." });
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      className="section bg-background"
      aria-labelledby="contact-title"
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
            <span className="font-mono text-primary text-sm">04</span>
            <div className="h-px flex-1 bg-border" />
            <h2 id="contact-title" className="text-sm font-mono tracking-widest text-muted-foreground">
              CONTATO
            </h2>
          </motion.div>

          {/* Big CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-20"
          >
            <h3 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] mb-8">
              VAMOS<br />
              <span className="highlight-box">TRABALHAR</span><br />
              <span className="text-outline">JUNTOS?</span>
            </h3>
            <p className="text-xl text-muted-foreground max-w-xl">
              Tem um projeto em mente? Precisa de alguém para quebrar seu sistema 
              (de forma legal)? Ou só quer trocar uma ideia?
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left - Social Links */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-4"
            >
              <p className="font-mono text-sm text-muted-foreground mb-8">
                // CONECTE-SE
              </p>
              
              {socials.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="group flex items-center justify-between p-6 border-2 border-border hover:border-foreground hover:bg-foreground hover:text-background transition-all"
                >
                  <div className="flex items-center gap-4">
                    <social.icon className="w-6 h-6" />
                    <span className="text-xl font-bold">{social.name}</span>
                  </div>
                  <ArrowUpRight className="w-6 h-6 group-hover:rotate-0 -rotate-45 transition-transform" />
                </motion.a>
              ))}

              {/* Location Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="pt-8 border-t-2 border-dashed border-border mt-8"
              >
                <div className="grid grid-cols-2 gap-4 font-mono text-sm">
                  <div>
                    <p className="text-muted-foreground mb-1">LOCAL</p>
                    <p>Mogi Mirim, SP</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">TIMEZONE</p>
                    <p>GMT-3</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p className="font-mono text-sm text-muted-foreground mb-8">
                // ENVIE UMA MENSAGEM
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-mono text-sm mb-2">
                    NOME *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-4 bg-secondary border-2 border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors font-mono"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-mono text-sm mb-2">
                    EMAIL *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-4 bg-secondary border-2 border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors font-mono"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-mono text-sm mb-2">
                    MENSAGEM *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full px-4 py-4 bg-secondary border-2 border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors font-mono resize-none"
                    placeholder="Sua mensagem..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="magnetic-btn w-full py-5 flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground animate-spin" />
                      ENVIANDO...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      ENVIAR MENSAGEM
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 1 }}
        className="mt-32 border-t-2 border-foreground"
      >
        <div className="container mx-auto px-4 md:px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="font-mono text-sm text-muted-foreground">
              © {new Date().getFullYear()} TARCYS AMORIM
            </div>
            <div className="font-mono text-xs text-muted-foreground flex items-center gap-2">
              <span className="w-2 h-2 bg-primary animate-pulse" />
              BUILT WITH PASSION & COFFEE
            </div>
          </div>
        </div>
      </motion.footer>
    </section>
  );
};
