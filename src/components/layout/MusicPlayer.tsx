import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, SkipForward, SkipBack, Music2, X, Volume2 } from "lucide-react";
import { useSite } from "@/lib/SiteContext";

export function MusicPlayer() {
  const { site } = useSite();
  const songs = site?.songs ?? [];
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [vol, setVol] = useState(0.7);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const song = songs[idx];

  useEffect(() => {
    const a = audioRef.current;
    if (!a || !song) return;
    a.src = song.url;
    a.volume = vol;
    if (playing) a.play().catch(() => setPlaying(false));
  }, [idx, song]);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) a.play().catch(() => setPlaying(false));
    else a.pause();
  }, [playing]);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = vol;
  }, [vol]);

  const onTimeUpdate = () => {
    const a = audioRef.current;
    if (!a || !a.duration) return;
    setProgress((a.currentTime / a.duration) * 100);
  };

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const a = audioRef.current;
    if (!a || !a.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    a.currentTime = ((e.clientX - rect.left) / rect.width) * a.duration;
  };

  if (songs.length === 0) return null;

  return (
    <>
      <audio ref={audioRef} onTimeUpdate={onTimeUpdate} onEnded={() => setIdx((i) => (i + 1) % songs.length)} />

      <motion.button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 left-6 z-40 w-12 h-12 rounded-full glass flex items-center justify-center text-white/70 hover:text-white border border-white/10 hover:border-white/30 transition-all"
        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
        animate={playing ? { boxShadow: ["0 0 0 0 rgba(139,92,246,0.3)", "0 0 0 12px rgba(139,92,246,0)", "0 0 0 0 rgba(139,92,246,0)"] } : {}}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <Music2 className="w-5 h-5" />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-20 left-6 z-40 w-72 glass rounded-2xl border border-white/10 p-5 shadow-2xl"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="font-mono text-xs tracking-widest text-white/30 uppercase">Now Playing</span>
              <button onClick={() => setOpen(false)} className="text-white/30 hover:text-white"><X className="w-4 h-4" /></button>
            </div>

            {song?.coverUrl ? (
              <img src={song.coverUrl} alt={song.title} className="w-full aspect-square object-cover rounded-xl mb-4" />
            ) : (
              <div className="w-full aspect-square rounded-xl mb-4 flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, hsl(262,83%,30%), hsl(188,100%,20%))" }}>
                <Music2 className="w-12 h-12 text-white/20" />
              </div>
            )}

            <p className="font-display font-semibold text-white truncate">{song?.title}</p>
            <p className="text-sm text-white/40 truncate mb-4">{song?.artist}</p>

            {/* Progress bar */}
            <div className="h-1 bg-white/10 rounded-full mb-4 cursor-pointer" onClick={seek}>
              <div className="h-full rounded-full transition-all" style={{ width: `${progress}%`, background: "linear-gradient(90deg,hsl(262,83%,58%),hsl(188,100%,50%))" }} />
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-5 mb-4">
              <button onClick={() => setIdx((i) => (i - 1 + songs.length) % songs.length)} className="text-white/40 hover:text-white transition-colors">
                <SkipBack className="w-5 h-5" />
              </button>
              <button
                onClick={() => setPlaying(!playing)}
                className="w-10 h-10 rounded-full flex items-center justify-center text-white"
                style={{ background: "linear-gradient(135deg,hsl(262,83%,58%),hsl(188,100%,50%))" }}
              >
                {playing ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
              </button>
              <button onClick={() => setIdx((i) => (i + 1) % songs.length)} className="text-white/40 hover:text-white transition-colors">
                <SkipForward className="w-5 h-5" />
              </button>
            </div>

            {/* Volume */}
            <div className="flex items-center gap-2">
              <Volume2 className="w-3 h-3 text-white/30" />
              <input type="range" min={0} max={1} step={0.01} value={vol} onChange={(e) => setVol(Number(e.target.value))}
                className="flex-1 accent-purple-500 h-1" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
