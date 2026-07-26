import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ExternalLink, Mail, ChevronRight, FolderGit2 } from "lucide-react";

const ROLES = [
  "Full Stack Developer",
  "Discord Bot Developer",
  "Minecraft Server Developer",
  "Hytale Server Developer",
  "Founder of PieCore™ Cloud Hosting",
];

function Typewriter({ words, speed = 80, pause = 1800 }: { words: string[]; speed?: number; pause?: number }) {
  const [wi, setWi] = useState(0);
  const [ci, setCi] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wi] ?? "";
    const delay = deleting ? speed / 2 : ci === word.length ? pause : speed;
    const t = setTimeout(() => {
      if (!deleting && ci < word.length) setCi((c) => c + 1);
      else if (!deleting && ci === word.length) setDeleting(true);
      else if (deleting && ci > 0) setCi((c) => c - 1);
      else { setDeleting(false); setWi((w) => (w + 1) % words.length); }
    }, delay);
    return () => clearTimeout(t);
  }, [wi, ci, deleting, words, speed, pause]);

  return (
    <span className="gradient-text">
      {(words[wi] ?? "").slice(0, ci)}
      <span className="animate-blink text-purple-400">|</span>
    </span>
  );
}

const FLOAT_ITEMS = [
  { emoji: "⚡", label: "PieCore™ Founder", top: "18%", left: "2%", delay: 0, color: "hsl(262,83%,58%)" },
  { emoji: "🤖", label: "Discord Bot Dev",  top: "14%", right: "2%", delay: 0.8, color: "hsl(235,86%,68%)" },
  { emoji: "🧱", label: "Minecraft SMP Dev",bottom: "24%", left: "1%", delay: 1.6, color: "hsl(130,55%,50%)" },
  { emoji: "🎨", label: "Panel Theming",    bottom: "22%", right: "2%", delay: 1.2, color: "hsl(30,90%,58%)" },
];

const STATS = [
  { value: "4", label: "Projects Shipped" },
  { value: "1", label: "Company Founded" },
  { value: "24/7", label: "Infra Monitoring" },
];

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center pt-24 pb-12 overflow-hidden">
      {/* Subtle dot grid for premium depth */}
      <div className="absolute inset-0 opacity-[0.25] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 35%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 35%, black 40%, transparent 100%)",
        }} />

      {/* Background blobs */}
      <div className="blob w-[500px] h-[500px] opacity-[0.18]"
        style={{ top: "20%", right: "20%", background: "radial-gradient(circle,hsl(262,83%,58%),transparent 70%)", animation: "float 9s ease-in-out infinite" }} />
      <div className="blob w-[380px] h-[380px] opacity-[0.12]"
        style={{ bottom: "15%", left: "10%", background: "radial-gradient(circle,hsl(188,100%,50%),transparent 70%)", animation: "float 11s ease-in-out infinite reverse" }} />
      <div className="blob w-[250px] h-[250px] opacity-[0.08]"
        style={{ top: "50%", left: "40%", background: "radial-gradient(circle,hsl(320,70%,60%),transparent 70%)", animation: "float 7s ease-in-out infinite" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1fr_420px] gap-16 items-center">

          {/* Left */}
          <div className="flex flex-col gap-7">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
              <span className="section-tag flex items-center gap-2">
                <span className="w-8 h-px" style={{ background: "hsl(262,83%,58%)" }} />
                Available for Projects
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse ml-1" />
              </span>
            </motion.div>

            <motion.h1
              className="font-display font-bold leading-[1.05] text-white"
              style={{ fontSize: "clamp(3rem,7vw,5.5rem)" }}
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}
            >
              Afifayan
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-white/60 font-light h-9"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
            >
              <Typewriter words={ROLES} />
            </motion.p>

            <motion.p
              className="text-base md:text-lg text-white/50 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
            >
              Creating Discord bots, Minecraft infrastructure, hosting panels, and scalable cloud environments — from working prototype to production.
            </motion.p>

            <motion.div className="flex flex-wrap gap-4 mt-2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}>
              <a href="#projects" className="btn-primary text-white rounded-sm flex items-center gap-2">
                <span className="relative z-10 flex items-center gap-2">
                  <FolderGit2 className="w-4 h-4" /> View Projects <ChevronRight className="w-4 h-4" />
                </span>
              </a>
              <a href="#contact" className="btn-outline rounded-sm flex items-center gap-2">
                <Mail className="w-4 h-4" /> Hire Me
              </a>
            </motion.div>

            {/* PieCore ghost link */}
            <motion.a
              href="https://piecore.xyz" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-white/35 hover:text-cyan-400 transition-colors w-fit -mt-1"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.62 }}
            >
              <ExternalLink className="w-3 h-3" /> or visit my company, PieCore™ Cloud Hosting ↗
            </motion.a>

            {/* Quick stats */}
            <motion.div
              className="flex flex-wrap items-center gap-8 mt-3 pt-6 border-t border-white/8"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
            >
              {STATS.map((s) => (
                <div key={s.label}>
                  <p className="font-display font-bold text-2xl md:text-3xl gradient-text">{s.value}</p>
                  <p className="font-mono text-[10px] tracking-widest uppercase text-white/30 mt-1">{s.label}</p>
                </div>
              ))}
            </motion.div>

            {/* Tech badges */}
            <motion.div className="flex flex-wrap items-center gap-3 mt-1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }}>
              {["Web Dev", "Discord Bots", "Minecraft", "Hytale", "VPS/VDS", "Linux"].map((b) => (
                <span key={b} className="font-mono text-[11px] text-white/35 border border-white/8 px-3 py-1 rounded-full">{b}</span>
              ))}
            </motion.div>
          </div>

          {/* Right – profile + floating cards */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, type: "spring", bounce: 0.3, delay: 0.2 }}
          >
            {/* Floating stat cards */}
            {FLOAT_ITEMS.map((item, i) => (
              <motion.div
                key={i}
                className="absolute glass rounded-xl px-3 py-2.5 hidden md:flex items-center gap-2.5 z-20"
                style={{
                  top: item.top,
                  bottom: (item as { bottom?: string }).bottom,
                  left: (item as { left?: string }).left,
                  right: (item as { right?: string }).right,
                  boxShadow: `0 0 20px ${item.color}20`,
                  border: `1px solid ${item.color}25`,
                }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: item.delay }}
              >
                <span className="text-base">{item.emoji}</span>
                <span className="font-mono text-xs text-white/60">{item.label}</span>
              </motion.div>
            ))}

            {/* Profile image */}
            <div className="relative w-72 md:w-[320px]">
              <div className="absolute -inset-2 rounded-2xl border border-purple-500/15 animate-glow-pulse" />
              <div className="absolute -inset-6 rounded-2xl border border-cyan-500/8" />
              <div className="absolute inset-0 rounded-2xl blur-2xl opacity-40"
                style={{ background: "linear-gradient(135deg,hsl(262,83%,58%,0.5),hsl(188,100%,50%,0.2))" }} />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl" style={{ aspectRatio: "3/4" }}>
                <img
                  src="/profile.png"
                  alt="Afifayan — Full Stack Developer & Minecraft Server Developer"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    const t = e.currentTarget;
                    t.style.display = "none";
                    const p = t.parentElement;
                    if (p) {
                      p.style.cssText += ";background:linear-gradient(135deg,hsl(262,83%,15%),hsl(188,100%,8%));display:flex;align-items:center;justify-content:center";
                      p.innerHTML = '<span style="font-size:90px;font-weight:900;color:hsl(262,83%,60%)">A</span>';
                    }
                  }}
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top,rgba(6,8,16,0.6) 0%,transparent 50%)" }} />
                {/* Name chip */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="glass rounded-xl px-4 py-2.5 border border-purple-500/25"
                    style={{ boxShadow: "0 0 20px hsl(262,83%,58%,0.2)" }}>
                    <p className="font-display font-bold text-sm text-white">Afifayan</p>
                    <p className="font-mono text-[10px] text-purple-400/80 mt-0.5">Founder · PieCore™ Cloud Hosting</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
      >
        <span className="font-mono text-[9px] tracking-[.4em] uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
