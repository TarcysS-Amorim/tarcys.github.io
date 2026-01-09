import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, Linkedin, Mail, ArrowUpRight, Send, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@/lib/validation";
import { EmailService } from "@/lib/email-service";
import { useAnalytics } from "@/hooks/use-analytics";

const socials = [
  { name: "GITHUB", href: "https://github.com/TarcysAmorim", icon: Github },
  { name: "LINKEDIN", href: "https://linkedin.com/in/tarcys", icon: Linkedin },
  { name: "EMAIL", href: "mailto:contato@tarcys.dev", icon: Mail },
];

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const { trackEvent } = useAnalytics();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      await EmailService.sendEmail(data);
      trackEvent("contact_form_submit", {
        event_category: "engagement",
        event_label: "success",
      });
      toast.success("Mensagem enviada!", {
        description: "Retorno em breve.",
        duration: 5000,
      });
      reset();
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Erro ao enviar mensagem. Por favor, tente novamente.";
      setSubmitError(errorMessage);
      trackEvent("contact_form_submit", {
        event_category: "engagement",
        event_label: "error",
        error_message: errorMessage,
      });
      toast.error("Erro ao enviar", {
        description: errorMessage,
        duration: 7000,
      });
    } finally {
      setIsSubmitting(false);
    }
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
            <h3 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] mb-8 relative z-10">
              VAMOS<br />
              <span className="highlight-box relative z-10">TRABALHAR</span><br />
              <span className="text-outline relative z-10">JUNTOS?</span>
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
                  className="group flex items-center justify-between p-6 border-2 border-border hover:border-foreground hover:bg-foreground hover:text-background transition-all focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  aria-label={`Visitar ${social.name}`}
                  onClick={() => {
                    trackEvent("social_click", {
                      event_category: "engagement",
                      event_label: social.name.toLowerCase(),
                    });
                  }}
                >
                  <div className="flex items-center gap-4">
                    <social.icon className="w-6 h-6" aria-hidden="true" />
                    <span className="text-xl font-bold">{social.name}</span>
                  </div>
                  <ArrowUpRight className="w-6 h-6 group-hover:rotate-0 -rotate-45 transition-transform" aria-hidden="true" />
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

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Error Message */}
                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-destructive/10 border-2 border-destructive flex items-start gap-3"
                  >
                    <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-destructive font-mono">{submitError}</p>
                  </motion.div>
                )}

                <div>
                  <label htmlFor="name" className="block font-mono text-sm mb-2">
                    NOME *
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register("name")}
                    className={`w-full px-4 py-4 bg-secondary border-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors font-mono ${
                      errors.name ? "border-destructive" : "border-border"
                    }`}
                    placeholder="Seu nome"
                    aria-invalid={errors.name ? "true" : "false"}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-2 text-sm text-destructive font-mono" role="alert">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block font-mono text-sm mb-2">
                    EMAIL *
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email")}
                    className={`w-full px-4 py-4 bg-secondary border-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors font-mono ${
                      errors.email ? "border-destructive" : "border-border"
                    }`}
                    placeholder="seu@email.com"
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-2 text-sm text-destructive font-mono" role="alert">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block font-mono text-sm mb-2">
                    MENSAGEM *
                  </label>
                  <textarea
                    id="message"
                    {...register("message")}
                    rows={5}
                    className={`w-full px-4 py-4 bg-secondary border-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors font-mono resize-none ${
                      errors.message ? "border-destructive" : "border-border"
                    }`}
                    placeholder="Sua mensagem..."
                    aria-invalid={errors.message ? "true" : "false"}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-2 text-sm text-destructive font-mono" role="alert">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="magnetic-btn w-full py-5 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-busy={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
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
        className="mt-8 md:mt-12 border-t-2 border-foreground"
      >
        <div className="container mx-auto px-4 md:px-6 py-4 md:py-6">
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
