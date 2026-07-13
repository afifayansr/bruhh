import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music2, Upload, Play, Pause, X, CheckCircle2, Wifi, Shield, Smartphone, List, Loader2 } from "lucide-react";

interface Track { id: string; name: string; size: string; url: string }

const FEATURES = [
  { Icon: Upload,     label: "Upload MP3 directly" },
  { Icon: Music2,     label: "Drag & Drop support" },
  { Icon: Play,       label: "Audio preview player" },
  { Icon: Wifi,       label: "Fast CDN delivery" },
  { Icon: Shield,     label: "Secure storage" },
  { Icon: Smartphone, label: "Mobile responsive" },
  { Icon: List,       label: "Playlist support" },
  { Icon: Loader2,    label: "Real-time progress" },
];

export function SongUploader() {
  const [tracks, setTracks]       = useState<Track[]>([]);
  const [dragging, setDragging]   = useState(false);
  const [uploading, setUploading] = useState(false);
  const [prog, setProg]           = useState(0);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const process = useCallback((files: FileList | null) => {
    if (!files) return;
    const mp3s = Array.from(files).filter(f => f.type === "audio/mpeg" || f.name.endsWith(".mp3"));
    if (!mp3s.length) return;
    setUploading(true); setProg(0);
    let p = 0;
    const iv = setInterval(() => {
      p += Math.random() * 18 + 4;
      if (p >= 100) {
        p = 100; clearInterval(iv);
        setTimeout(() => {
          setTracks(prev => [...prev, ...mp3s.map(f => ({ id: Math.random().toString(36).slice(2), name: f.name.replace(/\.mp3$/i, ""), size: (f.size / 1024 / 1024).toFixed(1) + " MB", url: URL.createObjectURL(f) }))]);
          setUploading(false); setProg(0);
        }, 350);
      }
      setProg(Math.min(p, 100));
    }, 100);
  }, []);

  const togglePlay = (t: Track) => {
    if (playingId === t.id) { audioRef.current?.pause(); setPlayingId(null); }
    else { if (audioRef.current) { audioRef.current.src = t.url; audioRef.current.play(); } setPlayingId(t.id); }
  };
  const remove = (id: string) => {
    if (playingId === id) { audioRef.current?.pause(); setPlayingId(null); }
    setTracks(p => p.filter(t => t.id !== id));
  };

  return (
    <section id="uploader" className="py-32 relative z-10" aria-labelledby="uploader-heading">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] opacity-[0.07] blur-3xl"
          style={{ background: "radial-gradient(ellipse,hsl(280,90%,50%),hsl(262,83%,40%),transparent 70%)" }}/>
      </div>
      <audio ref={audioRef} onEnded={() => setPlayingId(null)}/>
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <div className="mb-4"><span className="section-tag">07 — Music</span></div>
          <h2 id="uploader-heading" className="section-title text-white mb-4">Song <span className="gradient-text">Uploader</span></h2>
          <p className="text-white/40 text-lg mb-16 max-w-xl">Upload, preview and manage tracks with instant CDN delivery.</p>
        </motion.div>
        <div className="grid lg:grid-cols-[1fr_260px] gap-10">
          <div className="space-y-5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              onDragOver={e => { e.preventDefault(); setDragging(true); }}
              onDragLeave={() => setDragging(false)}
              onDrop={e => { e.preventDefault(); setDragging(false); process(e.dataTransfer.files); }}
              onClick={() => inputRef.current?.click()}
              className="relative rounded-2xl border-2 border-dashed cursor-pointer transition-all duration-300 overflow-hidden"
              style={{ borderColor: dragging ? "hsl(280,90%,60%)" : "rgba(139,92,246,0.22)", background: dragging ? "linear-gradient(135deg,rgba(139,92,246,0.1),rgba(99,102,241,0.07))" : "linear-gradient(135deg,rgba(255,255,255,0.02),rgba(139,92,246,0.03))", boxShadow: dragging ? "0 0 50px hsl(280,90%,50%,0.18)" : "none" }}
              role="button" tabIndex={0} aria-label="Upload MP3" onKeyDown={e => e.key === "Enter" && inputRef.current?.click()}
            >
              <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(139,92,246,1) 1px,transparent 1px),linear-gradient(90deg,rgba(139,92,246,1) 1px,transparent 1px)", backgroundSize: "44px 44px" }}/>
              <div className="relative py-20 px-8 flex flex-col items-center gap-5 text-center">
                <motion.div animate={{ y: dragging ? -8 : 0, scale: dragging ? 1.12 : 1 }} transition={{ duration: 0.3 }}
                  className="w-24 h-24 rounded-2xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg,rgba(139,92,246,0.18),rgba(99,102,241,0.1))", border: "1px solid rgba(139,92,246,0.3)", boxShadow: dragging ? "0 0 40px rgba(139,92,246,0.35)" : "0 0 20px rgba(139,92,246,0.15)" }}>
                  <Music2 className="w-11 h-11 text-purple-400"/>
                </motion.div>
                <div>
                  <p className="font-display font-semibold text-white text-xl mb-2">{dragging ? "Release to upload ✦" : "Drag & Drop MP3 files"}</p>
                  <p className="text-white/30 text-sm">or click to browse • MP3 only</p>
                </div>
                <div className="flex gap-2">
                  {["CDN","Secure","Fast"].map(t => <span key={t} className="font-mono text-xs text-purple-400/50 border border-purple-500/15 bg-purple-500/5 px-2.5 py-0.5 rounded-full">{t}</span>)}
                </div>
              </div>
              <input ref={inputRef} type="file" accept=".mp3,audio/mpeg" multiple className="hidden" onChange={e => process(e.target.files)}/>
            </motion.div>

            <AnimatePresence>
              {uploading && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
                  className="glass rounded-xl p-5 border border-purple-500/20" style={{ boxShadow: "0 0 30px rgba(139,92,246,0.07)" }}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2"><Loader2 className="w-3.5 h-3.5 text-purple-400 animate-spin"/><span className="font-mono text-sm text-white/60">Uploading to CDN…</span></div>
                    <span className="font-mono text-sm text-purple-400 font-bold tabular-nums">{Math.round(prog)}%</span>
                  </div>
                  <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.05)" }}>
                    <motion.div className="h-full rounded-full" style={{ background: "linear-gradient(90deg,hsl(262,83%,58%),hsl(280,90%,65%),hsl(188,100%,55%))", width: `${prog}%` }} animate={{ width: `${prog}%` }} transition={{ duration: 0.15 }}/>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {tracks.length > 0 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-2.5">
                  <div className="flex items-center justify-between py-1">
                    <p className="font-mono text-xs text-white/20 tracking-widest uppercase">Playlist · {tracks.length} track{tracks.length !== 1 ? "s" : ""}</p>
                    <div className="flex items-center gap-1.5 text-green-400/60 text-[11px] font-mono"><CheckCircle2 className="w-3 h-3"/> CDN Live</div>
                  </div>
                  {tracks.map((t, i) => {
                    const isP = playingId === t.id;
                    return (
                      <motion.div key={t.id} initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 24 }} transition={{ delay: i * 0.04 }}
                        className="group flex items-center gap-4 rounded-xl px-4 py-3 border transition-all duration-300"
                        style={{ background: isP ? "rgba(139,92,246,0.08)" : "rgba(255,255,255,0.02)", borderColor: isP ? "rgba(139,92,246,0.35)" : "rgba(255,255,255,0.05)", boxShadow: isP ? "0 0 25px rgba(139,92,246,0.12)" : "none" }}>
                        <button onClick={() => togglePlay(t)} aria-label={isP ? "Pause" : "Play"}
                          className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200"
                          style={{ background: isP ? "linear-gradient(135deg,hsl(262,83%,55%),hsl(280,90%,60%))" : "rgba(255,255,255,0.04)", boxShadow: isP ? "0 0 18px rgba(139,92,246,0.4)" : "none" }}>
                          {isP ? <Pause className="w-4 h-4 text-white"/> : <Play className="w-4 h-4 text-white/40 group-hover:text-white transition-colors"/>}
                        </button>
                        <div className="flex-1 min-w-0"><p className="text-sm font-medium text-white truncate">{t.name}</p><p className="font-mono text-[11px] text-white/25">{t.size}</p></div>
                        {isP && (
                          <div className="flex items-end gap-[3px] h-5 flex-shrink-0">
                            {[1, 0.6, 0.8, 0.45].map((h, bi) => (
                              <div key={bi} className="w-1 rounded-full" style={{ background: "linear-gradient(to top,hsl(262,83%,60%),hsl(188,100%,55%))", height: `${h * 100}%`, animation: `eq${bi + 1} ${0.35 + bi * 0.1}s ease-in-out infinite alternate` }}/>
                            ))}
                          </div>
                        )}
                        <button onClick={() => remove(t.id)} aria-label="Remove" className="w-7 h-7 rounded-lg flex items-center justify-center text-white/20 hover:text-red-400 hover:bg-red-500/10 opacity-0 group-hover:opacity-100 transition-all duration-200 flex-shrink-0">
                          <X className="w-3.5 h-3.5"/>
                        </button>
                      </motion.div>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.aside initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="space-y-3">
            <p className="font-mono text-xs text-white/20 tracking-widest uppercase mb-4">Features</p>
            {FEATURES.map((f, i) => (
              <motion.div key={f.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.055 }}
                className="group flex items-center gap-3 rounded-xl px-4 py-3 border border-white/5 transition-all duration-300 cursor-default"
                style={{ background: "rgba(255,255,255,0.02)" }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(139,92,246,0.25)"; el.style.boxShadow = "0 0 18px rgba(139,92,246,0.07)"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(255,255,255,0.05)"; el.style.boxShadow = "none"; }}
              >
                <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.18)" }}>
                  <f.Icon className="w-3.5 h-3.5 text-purple-400"/>
                </div>
                <span className="text-sm text-white/45 group-hover:text-white/75 transition-colors">{f.label}</span>
              </motion.div>
            ))}
          </motion.aside>
        </div>
      </div>
      <style>{`@keyframes eq1{from{transform:scaleY(.2)}to{transform:scaleY(1)}}@keyframes eq2{from{transform:scaleY(.5)}to{transform:scaleY(.9)}}@keyframes eq3{from{transform:scaleY(.3)}to{transform:scaleY(1)}}@keyframes eq4{from{transform:scaleY(.6)}to{transform:scaleY(.85)}}`}</style>
    </section>
  );
}
