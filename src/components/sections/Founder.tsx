import { motion } from "framer-motion";
import { Code2, Server, Brain, Terminal, Gamepad2, Globe, Zap, ChevronRight, Sparkles } from "lucide-react";

const SKILLS = [
  { label: "Full Stack Web Development", Icon: Code2,     color: "hsl(262,83%,70%)", acc: "hsl(262,83%,58%)" },
  { label: "Frontend Development",       Icon: Globe,     color: "hsl(188,100%,55%)", acc: "hsl(188,100%,45%)" },
  { label: "Backend Development",        Icon: Server,    color: "hsl(320,70%,70%)",  acc: "hsl(320,70%,55%)" },
  { label: "Node.js Development",        Icon: Zap,       color: "hsl(130,60%,55%)",  acc: "hsl(130,60%,45%)" },
  { label: "API Development",            Icon: Brain,     color: "hsl(262,83%,70%)", acc: "hsl(262,83%,58%)" },
  { label: "Database Management",        Icon: Server,    color: "hsl(188,100%,55%)", acc: "hsl(188,100%,45%)" },
  { label: "Linux Server Administration",Icon: Terminal,  color: "hsl(45,100%,60%)",  acc: "hsl(45,100%,50%)" },
  { label: "Cloud Infrastructure",       Icon: Globe,     color: "hsl(200,80%,60%)",  acc: "hsl(200,80%,50%)" },
  { label: "VPS & VDS Management",       Icon: Server,    color: "hsl(320,70%,70%)",  acc: "hsl(320,70%,55%)" },
  { label: "Minecraft Server Dev",       Icon: Gamepad2,  color: "hsl(130,60%,55%)",  acc: "hsl(130,60%,45%)" },
  { label: "Minecraft Network Config",   Icon: Gamepad2,  color: "hsl(150,60%,50%)",  acc: "hsl(150,60%,40%)" },
  { label: "Hytale Server Dev",          Icon: Gamepad2,  color: "hsl(30,90%,60%)",   acc: "hsl(30,90%,50%)" },
  { label: "Hosting Automation",         Icon: Zap,       color: "hsl(262,83%,70%)", acc: "hsl(262,83%,58%)" },
  { label: "Panel Management",           Icon: Terminal,  color: "hsl(188,100%,55%)", acc: "hsl(188,100%,45%)" },
  { label: "DevOps Fundamentals",        Icon: Server,    color: "hsl(45,100%,60%)",  acc: "hsl(45,100%,50%)" },
];

export function Founder() {
  return (
    <section id="founder" className="py-32 relative z-10" aria-labelledby="founder-heading">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-[0.04] blur-3xl"
          style={{ background: "radial-gradient(circle,hsl(262,83%,58%),transparent 70%)" }} />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] opacity-[0.03] blur-3xl"
          style={{ background: "radial-gradient(circle,hsl(188,100%,50%),transparent 70%)" }} />
      </div>

      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <div className="mb-4"><span className="section-tag">05 — Founder</span></div>
          <h2 id="founder-heading" className="section-title text-white mb-4">
            About <span className="gradient-text">Afifayan</span>
          </h2>
          <p className="text-white/40 text-lg mb-20 max-w-xl">
            Developer and Founder of PieCore™ Cloud Hosting.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_340px] gap-16 items-start">
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="space-y-8">

            {/* Info card */}
            <div className="glass rounded-2xl p-8 border border-white/8 hover:border-purple-500/20 transition-colors duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 opacity-10 pointer-events-none"
                style={{ background: "radial-gradient(circle at top right,hsl(262,83%,58%),transparent 70%)" }} />

              <div className="flex items-start gap-5">
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden border border-purple-500/30"
                    style={{ boxShadow: "0 0 25px hsl(262,83%,58%,0.3)" }}>
                    <img src="/profile.png" alt="Afifayan"
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        const t = e.currentTarget;
                        t.style.display = "none";
                        const d = t.parentElement;
                        if (d) {
                          d.style.cssText += ";background:linear-gradient(135deg,hsl(262,83%,25%),hsl(188,100%,12%));display:flex;align-items:center;justify-content:center";
                          d.innerHTML = '<span style="font-size:26px;font-weight:900;color:hsl(262,83%,75%)">A</span>';
                        }
                      }}
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-green-400 border-2 border-[#060810]"
                    style={{ boxShadow: "0 0 8px rgba(74,222,128,0.6)" }} />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="w-4 h-4 text-purple-400" />
                    <span className="font-mono text-xs text-purple-400/70 tracking-widest uppercase">Developer & Founder</span>
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white mb-1">Afifayan</h3>
                  <p className="font-mono text-sm text-purple-400/80">Founder · PieCore™ Cloud Hosting</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <a href="https://piecore.xyz" target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs px-3 py-1 rounded-full border transition-all hover:scale-105"
                      style={{ borderColor: "hsl(188,100%,50%,0.35)", background: "hsl(188,100%,50%,0.08)", color: "hsl(188,100%,62%)", boxShadow: "0 0 12px hsl(188,100%,50%,0.1)" }}>
                      ☁️ piecore.xyz
                    </a>
                    <span className="inline-flex items-center gap-1.5 font-mono text-xs px-3 py-1 rounded-full border"
                      style={{ borderColor: "hsl(130,60%,55%,0.3)", background: "hsl(130,60%,55%,0.07)", color: "hsl(130,60%,65%)" }}>
                      🎮 Minecraft Dev
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-mono text-xs px-3 py-1 rounded-full border"
                      style={{ borderColor: "hsl(30,90%,60%,0.3)", background: "hsl(30,90%,60%,0.07)", color: "hsl(30,90%,65%)" }}>
                      🎯 Hytale Dev
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/5">
                <p className="text-white/55 leading-relaxed text-base">
                  Afifayan is a developer and the Founder of PieCore™ Cloud Hosting. He specializes in web development,
                  hosting infrastructure, Minecraft server development, Hytale server development, and server management.
                  His work focuses on building modern web platforms, scalable hosting solutions, custom game server systems,
                  and reliable cloud infrastructure.
                </p>
              </div>
            </div>

            {/* Skill list */}
            <div>
              <p className="font-mono text-xs text-white/20 tracking-widest uppercase mb-5">Full Skill Set</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SKILLS.map((s, i) => (
                  <motion.div key={s.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04, duration: 0.45 }}
                    className="group flex items-center gap-3 rounded-xl px-4 py-3 border border-white/5 cursor-default transition-all duration-300"
                    style={{ background: "rgba(255,255,255,0.02)" }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = s.acc + "35";
                      el.style.boxShadow = "0 0 20px " + s.acc + "12";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = "rgba(255,255,255,0.05)";
                      el.style.boxShadow = "none";
                    }}
                  >
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
                      style={{ background: s.color + "18", border: "1px solid " + s.color + "28" }}>
                      <s.Icon className="w-4 h-4" style={{ color: s.color }} />
                    </div>
                    <span className="text-sm text-white/55 group-hover:text-white/85 transition-colors font-medium">{s.label}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-white/10 group-hover:text-white/30 ml-auto transition-colors" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Profile image */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }} className="relative lg:sticky lg:top-28">
            <div className="absolute -inset-4 rounded-3xl opacity-50 blur-2xl animate-glow-pulse"
              style={{ background: "linear-gradient(135deg,hsl(262,83%,58%,0.35),hsl(320,70%,65%,0.2),hsl(188,100%,50%,0.2))" }} />
            <div className="relative rounded-2xl p-[1px]"
              style={{ background: "linear-gradient(135deg,hsl(262,83%,58%,0.6),hsl(320,70%,65%,0.4),hsl(188,100%,50%,0.5))" }}>
              <div className="rounded-2xl overflow-hidden relative">
                <img src="/profile.png" alt="Afifayan — Full Stack Developer & Founder of PieCore™"
                  className="w-full object-cover object-top" style={{ aspectRatio: "4/5" }}
                  loading="lazy" decoding="async"
                  onError={(e) => {
                    const t = e.currentTarget;
                    const p = t.parentElement;
                    t.style.display = "none";
                    if (p) {
                      p.style.cssText += ";background:linear-gradient(135deg,hsl(262,83%,15%),hsl(188,100%,8%));aspect-ratio:4/5;display:flex;align-items:center;justify-content:center";
                      p.innerHTML = '<div style="text-align:center"><div style="font-size:80px;font-weight:900;color:hsl(262,83%,65%)">A</div><div style="color:rgba(255,255,255,0.3);font-size:12px;font-family:monospace;margin-top:8px">Afifayan</div></div>';
                    }
                  }}
                />
                <div className="absolute inset-0 pointer-events-none"
                  style={{ background: "linear-gradient(to top,rgba(6,8,16,0.7) 0%,rgba(6,8,16,0.1) 40%,transparent 70%)" }} />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="glass rounded-xl px-4 py-3 border border-purple-500/25"
                    style={{ boxShadow: "0 0 25px hsl(262,83%,58%,0.18)" }}>
                    <p className="font-display font-semibold text-sm text-white">Afifayan</p>
                    <p className="gradient-text font-mono text-xs mt-0.5">Founder · PieCore™ Cloud Hosting</p>
                    <a href="https://piecore.xyz" target="_blank" rel="noopener noreferrer"
                      className="font-mono text-[10px] text-cyan-400/70 mt-1 block hover:text-cyan-400 transition-colors">
                      🌐 piecore.xyz
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full blur-sm opacity-65" style={{ background: "hsl(188,100%,50%)" }} />
            <div className="absolute -bottom-3 -left-3 w-8 h-8 rounded-full blur-md opacity-55" style={{ background: "hsl(262,83%,58%)" }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
