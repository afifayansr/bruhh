import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const total = 1800;
    const id = setInterval(() => {
      const elapsed = Date.now() - start;
      const p = Math.min(100, Math.floor((elapsed / total) * 100));
      setPct(p);
      if (p >= 100) { clearInterval(id); setTimeout(onComplete, 300); }
    }, 16);
    return () => clearInterval(id);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        key="loading"
        className="fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden"
        exit={{ opacity: 0, scale: 1.05, transition: { duration: 0.6 } }}
        style={{
          background: "linear-gradient(135deg, #060810 0%, #1a0a2e 50%, #0f0f1e 100%)",
        }}
      >
        {/* Animated background orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ 
              x: [0, 100, -100, 0],
              y: [0, -100, 100, 0],
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute -top-40 -left-40 w-80 h-80 rounded-full blur-3xl opacity-20"
            style={{ background: "linear-gradient(135deg, hsl(262,83%,58%), hsl(188,100%,50%))" }}
          />
          <motion.div
            animate={{ 
              x: [100, -100, 100, -100],
              y: [0, 100, -100, 0],
            }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full blur-3xl opacity-15"
            style={{ background: "linear-gradient(135deg, #ff006e, #8338ec)" }}
          />
        </div>

        {/* Animated logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.3, rotateZ: -45 }}
          animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15, duration: 0.9 }}
          className="mb-16 relative z-10"
        >
          {/* Outer glow rings */}
          <motion.div
            animate={{ scale: [1, 1.15, 1], rotate: [0, 360] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0 rounded-2xl"
            style={{
              border: "2px solid rgba(88,28,220,0.3)",
              width: "120px",
              height: "120px",
              left: "-50px",
              top: "-50px",
            }}
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], rotate: [360, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute inset-0 rounded-2xl"
            style={{
              border: "1px solid rgba(0,230,255,0.2)",
              width: "140px",
              height: "140px",
              left: "-60px",
              top: "-60px",
            }}
          />

          {/* Main logo box */}
          <div 
            className="w-24 h-24 rounded-2xl flex items-center justify-center relative"
            style={{
              background: "linear-gradient(135deg, hsl(262,83%,58%), hsl(188,100%,50%))",
              boxShadow: "0 0 40px rgba(88,28,220,0.5), inset 0 0 30px rgba(255,255,255,0.1)",
            }}
          >
            <motion.span 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="font-display font-bold text-4xl text-white drop-shadow-lg"
            >
              A
            </motion.span>
          </div>

          {/* Pulsing glow */}
          <motion.div
            animate={{ 
              scale: [1, 1.5],
              opacity: [0.8, 0],
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute inset-0 rounded-2xl"
            style={{
              background: "linear-gradient(135deg, hsl(262,83%,58%), hsl(188,100%,50%))",
              width: "96px",
              height: "96px",
              left: "0",
              top: "0",
            }}
          />
        </motion.div>

        {/* Text sections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="relative z-10 text-center space-y-4"
        >
          <p className="font-display font-semibold text-xl text-white tracking-wide">
            Crafting <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Digital Experiences</span>
          </p>
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-white/50">
            Initializing Portfolio System
          </p>
        </motion.div>

        {/* Enhanced progress bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="relative z-10 mt-12 space-y-4"
        >
          <div className="relative w-64 h-1.5 rounded-full overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.05)",
              boxShadow: "inset 0 0 15px rgba(0,0,0,0.5)"
            }}
          >
            {/* Glow effect behind progress */}
            <motion.div
              animate={{ width: `${pct}%` }}
              transition={{ ease: "linear" }}
              className="absolute inset-y-0 left-0 blur-lg opacity-50"
              style={{
                background: "linear-gradient(90deg, hsl(262,83%,58%), hsl(188,100%,50%))",
              }}
            />
            {/* Main progress bar */}
            <motion.div
              className="h-full rounded-full relative"
              animate={{ width: `${pct}%` }}
              transition={{ ease: "linear" }}
              style={{
                background: "linear-gradient(90deg, hsl(262,83%,58%), hsl(188,100%,50%))",
                boxShadow: "0 0 20px rgba(88,28,220,0.8)"
              }}
            />
          </div>

          {/* Progress text with animations */}
          <div className="flex justify-between items-center">
            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="font-mono text-xs text-white/40"
            >
              {pct < 25 && "Initializing..."}
              {pct >= 25 && pct < 50 && "Loading assets..."}
              {pct >= 50 && pct < 75 && "Rendering interface..."}
              {pct >= 75 && "Finalizing..."}
            </motion.p>
            <span className="font-mono text-sm font-semibold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {pct}%
            </span>
          </div>
        </motion.div>

        {/* Floating particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.cos(i) * 50, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
            className="absolute w-1 h-1 rounded-full bg-cyan-400 blur-sm"
            style={{
              left: `${20 + i * 15}%`,
              bottom: "0%",
            }}
          />
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
