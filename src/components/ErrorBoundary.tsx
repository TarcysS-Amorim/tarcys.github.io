import { Component, ReactNode } from "react";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: string;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: "",
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: error.stack || error.message,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to console in development
    if (import.meta.env.DEV) {
      console.error("ErrorBoundary caught an error:", error, errorInfo);
    }

    // In production, you could send to error tracking service
    // Example: Sentry.captureException(error);
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: "",
    });
  };

  handleGoHome = () => {
    window.location.href = "/";
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-background p-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl w-full brutal-card p-8 md:p-12 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="mb-6 flex justify-center"
            >
              <div className="w-20 h-20 bg-destructive/20 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-10 h-10 text-destructive" />
              </div>
            </motion.div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Ops! Algo deu errado
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Ocorreu um erro inesperado. Por favor, tente novamente.
            </p>

            {import.meta.env.DEV && this.state.error && (
              <details className="mb-8 text-left bg-secondary p-4 border-2 border-border">
                <summary className="cursor-pointer font-mono text-sm text-muted-foreground mb-2">
                  Detalhes do erro (apenas em desenvolvimento)
                </summary>
                <pre className="text-xs text-destructive font-mono overflow-auto mt-2">
                  {this.state.error.toString()}
                  {this.state.errorInfo && `\n\n${this.state.errorInfo}`}
                </pre>
              </details>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={this.handleReset}
                className="magnetic-btn px-8 py-4 text-sm flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                Tentar Novamente
              </button>
              <button
                onClick={this.handleGoHome}
                className="px-8 py-4 text-sm font-bold uppercase tracking-wider border-2 border-foreground hover:bg-foreground hover:text-background transition-colors flex items-center justify-center gap-2"
              >
                <Home className="w-4 h-4" />
                Ir para Início
              </button>
            </div>
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

