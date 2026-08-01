import { useEffect } from "react";
import { motion } from "framer-motion";

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 1800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.05, transition: { duration: 0.6 } }}
      className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden bg-black"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex items-center justify-center w-14 h-14"
      >
        <motion.div
          animate={{ opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 rounded-full"
          style={{
            boxShadow: "0 0 40px 8px rgba(255, 30, 60, 0.35)",
            filter: "blur(1px)",
          }}
        />

        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <motion.circle
            cx="28"
            cy="28"
            r="22"
            strokeWidth="2.5"
            stroke="rgba(255, 30, 60, 0.18)"
            fill="none"
          />
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i / 12) * Math.PI * 2;
            const cos = Math.cos(angle);
            const sin = Math.sin(angle);
            const x1 = 28 + 18 * cos;
            const y1 = 28 + 18 * sin;
            const x2 = 28 + 24 * cos;
            const y2 = 28 + 24 * sin;
            return (
              <motion.line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="rgba(255, 30, 60, 0.55)"
                strokeWidth="2.2"
                strokeLinecap="round"
                initial={{ opacity: 0.15, scale: 0.8 }}
                animate={{
                  opacity: [0.15, 0.7, 0.15],
                  scale: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  delay: (i * 0.08) % 1.4,
                  ease: "easeInOut",
                }}
              />
            );
          })}
          <motion.circle
            cx="28"
            cy="28"
            r="6"
            fill="rgba(255, 30, 60, 0.8)"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}
