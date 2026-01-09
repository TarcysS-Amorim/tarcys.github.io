import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl w-full text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="mb-8"
        >
          <h1 className="text-[clamp(6rem,20vw,12rem)] font-bold leading-none text-outline">
            404
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            PÁGINA NÃO ENCONTRADA
          </h2>
          <p className="text-lg text-muted-foreground mb-2">
            A rota <code className="px-2 py-1 bg-secondary font-mono text-sm">{location.pathname}</code> não existe.
          </p>
          <p className="text-muted-foreground">
            Você pode ter digitado o endereço incorretamente ou a página foi movida.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/"
            className="magnetic-btn px-8 py-4 text-sm flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            Ir para Início
          </Link>
          <button
            onClick={() => window.history.back()}
            className="px-8 py-4 text-sm font-bold uppercase tracking-wider border-2 border-foreground hover:bg-foreground hover:text-background transition-colors flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 font-mono text-xs text-muted-foreground"
        >
          <p>ERROR 404: ROUTE_NOT_FOUND</p>
          <p className="mt-2">PATH: {location.pathname}</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
