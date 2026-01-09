import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [currentLine, setCurrentLine] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const terminalLines = [
    "> Initializing system...",
    "> Loading assets...",
    "> Compiling components...",
    "> Establishing connection...",
    "> Ready.",
  ];

  useEffect(() => {
    // Simulate progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    // Show terminal lines progressively
    const lineInterval = setInterval(() => {
      setCurrentLine((prev) => {
        if (prev >= terminalLines.length - 1) {
          clearInterval(lineInterval);
          return terminalLines.length - 1;
        }
        return prev + 1;
      });
    }, 600);

    return () => {
      clearInterval(progressInterval);
      clearInterval(lineInterval);
    };
  }, []);

  useEffect(() => {
    if (progress >= 100 && currentLine >= terminalLines.length - 1) {
      setTimeout(() => {
        setIsComplete(true);
        setTimeout(() => {
          onComplete();
        }, 500);
      }, 500);
    }
  }, [progress, currentLine, onComplete, terminalLines.length]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] bg-background flex items-center justify-center"
        >
          <div className="w-full max-w-2xl mx-auto px-4 md:px-6">
            {/* Terminal Window */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="brutal-card p-6 md:p-8"
            >
              {/* Terminal Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-foreground">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-destructive rounded-full" />
                  <div className="w-3 h-3 bg-primary rounded-full" />
                  <div className="w-3 h-3 bg-primary/50 rounded-full" />
                </div>
                <div className="flex-1 font-mono text-xs text-muted-foreground">
                  terminal@portfolio
                </div>
                <div className="font-mono text-xs text-muted-foreground">
                  ~
                </div>
              </div>

              {/* Terminal Content */}
              <div className="space-y-2 mb-6 min-h-[120px]">
                {terminalLines.map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{
                      opacity: index <= currentLine ? 1 : 0,
                      x: index <= currentLine ? 0 : -20,
                    }}
                    transition={{ duration: 0.3 }}
                    className="font-mono text-sm"
                  >
                    <span className="text-primary">$</span>{" "}
                    <span
                      className={
                        index < currentLine
                          ? "text-foreground"
                          : index === currentLine
                          ? "text-primary"
                          : "text-muted-foreground"
                      }
                    >
                      {line}
                    </span>
                    {index === currentLine && (
                      <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{
                          duration: 0.8,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                        className="inline-block w-2 h-4 bg-primary ml-1"
                      />
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between items-center font-mono text-xs text-muted-foreground">
                  <span>LOADING</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <div className="h-6 bg-secondary border-2 border-foreground relative overflow-hidden">
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-primary"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <motion.div
                      className="absolute inset-0"
                      animate={{
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      style={{
                        width: "30%",
                        background:
                          "linear-gradient(90deg, transparent, hsl(var(--primary-foreground) / 0.4), transparent)",
                      }}
                    />
                  </motion.div>
                  <div className="absolute inset-0 flex items-center justify-center font-mono text-xs text-primary-foreground font-bold z-10">
                    {progress < 100 && `${Math.round(progress)}%`}
                  </div>
                </div>
              </div>

              {/* Loading Indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-6 flex items-center gap-2 font-mono text-xs text-muted-foreground"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="w-3 h-3 border-2 border-primary border-t-transparent rounded-full"
                />
                <span>Initializing portfolio...</span>
              </motion.div>
            </motion.div>

            {/* Corner Decoration */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-center font-mono text-xs text-muted-foreground"
            >
              <div className="flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-primary animate-pulse" />
                <span>SYSTEM BOOTING</span>
                <span className="w-2 h-2 bg-primary animate-pulse" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
