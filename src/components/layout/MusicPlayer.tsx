import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.35);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = volume;

    const timer = setTimeout(() => {
      audio.play()
        .then(() => setPlaying(true))
        .catch(() => {
          const unlock = () => {
            audio.play()
              .then(() => setPlaying(true))
              .catch(() => {});
          };
          document.addEventListener("click", unlock, { once: true });
          document.addEventListener("keydown", unlock, { once: true });
        });
    }, 560);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.volume = volume;
      audio.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/music.mp3"
        loop
        preload="auto"
        onError={() => audioRef.current?.removeAttribute("src")}
      />

      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: 20, x: 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ delay: 2, duration: 0.5 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2"
          >
            <AnimatePresence>
              {playing && (
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "80px" }}
                  exit={{ opacity: 0, width: 0 }}
                  className="overflow-hidden"
                >
                  <input
                    type="range"
                    min={0}
                    max={1}
                    step={0.01}
                    value={volume}
                    onChange={(e) => {
                      const v = parseFloat(e.target.value);
                      setVolume(v);
                      if (audioRef.current) audioRef.current.volume = v;
                    }}
                    className="w-20 h-1 cursor-pointer"
                    style={{ accentColor: "hsl(262,83%,65%)" }}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {playing && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[10px] font-mono text-white/50"
                  style={{ background: "rgba(6,8,16,0.8)", borderColor: "rgba(139,92,246,0.2)" }}
                >
                  {[1, 2, 3].map((n) => (
                    <motion.span
                      key={n}
                      className="block w-0.5 rounded-full bg-purple-400"
                      animate={{ height: ["4px", "10px", "4px"] }}
                      transition={{ duration: 0.8, repeat: Infinity, delay: n * 0.15, ease: "easeInOut" }}
                    />
                  ))}
                  <span>Playing</span>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              onClick={toggle}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full flex items-center justify-center border transition-all"
              style={{
                background: playing
                  ? "linear-gradient(135deg,hsl(262,83%,45%),hsl(235,86%,55%))"
                  : "rgba(6,8,16,0.85)",
                borderColor: playing ? "hsl(262,83%,58%)" : "rgba(255,255,255,0.1)",
                boxShadow: playing ? "0 0 20px rgba(139,92,246,0.5)" : "none",
              }}
              title={playing ? "Pause music" : "Play background music"}
            >
              {playing ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                  <rect x="6" y="4" width="4" height="16" rx="1" />
                  <rect x="14" y="4" width="4" height="16" rx="1" />
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white" style={{ marginLeft: "2px" }}>
                  <path d="M5 3l14 9-14 9V3z" />
                </svg>
              )}
            </motion.button>

            <motion.button
              onClick={() => setVisible(false)}
              whileHover={{ scale: 1.1 }}
              className="w-5 h-5 rounded-full flex items-center justify-center text-white/20 hover:text-white/60 transition-colors"
              title="Hide player"
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}