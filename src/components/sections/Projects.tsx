import { motion } from "framer-motion";
import { ExternalLink, MessageSquare, Phone, Star, Zap, Server } from "lucide-react";

const PROJECTS = [
  {
    title: "PieCore™ Cloud Hosting",
    badge: "🎮 Game Hosting",
    desc: "Bangladesh's best game server hosting platform. Built for Minecraft, Hytale, and other game servers. Features DDoS protection, ultra-low latency, instant deployment, and 24/7 monitoring — powered by custom hosting automation infrastructure.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85",
    tags: ["Node.js", "Linux", "Nginx", "Docker", "Cloudflare", "Pterodactyl"],
    link: "https://piecore.xyz",
    discord: "https://discord.gg/piecore",
    contact: "https://piecore.xyz/contact",
    category: "Hosting Infrastructure",
  },
];

const CATEGORIES = [
  "Web Development",
  "Hosting Infrastructure",
  "Minecraft Server Development",
  "Hytale Server Development",
  "Cloud Solutions",
  "Server Management",
  "Custom Hosting Projects",
];

export function Projects() {
  return (
    <section id="projects" className="py-32 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <div className="mb-4"><span className="section-tag">03 — Portfolio</span></div>
          <h2 className="section-title text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-white/40 text-lg mb-8 max-w-xl">
            A selection of platforms and infrastructure I've built across web, hosting, and game server development.
          </p>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-16">
            {CATEGORIES.map((c) => (
              <span key={c} className="font-mono text-[11px] border border-white/8 text-white/30 px-3 py-1 rounded-full">{c}</span>
            ))}
          </div>
        </motion.div>

        <div className="space-y-28">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${i % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              {/* Image */}
              <div className="relative group">
                <div className="absolute -inset-3 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"
                  style={{ background: "linear-gradient(135deg,hsl(262,83%,58%,0.4),hsl(188,100%,50%,0.25))" }} />
                <div className="relative glass rounded-2xl overflow-hidden border border-white/8 group-hover:border-purple-500/30 transition-colors duration-500"
                  style={{ boxShadow: "0 30px 80px -20px rgba(0,0,0,0.8)" }}>
                  <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5" style={{ background: "rgba(0,0,0,0.5)" }}>
                    <div className="w-3 h-3 rounded-full bg-red-500/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                    <div className="w-3 h-3 rounded-full bg-green-500/60" />
                    <div className="flex-1 mx-4 h-5 rounded bg-white/5 flex items-center px-3 gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-400/50 flex-shrink-0" />
                      <span className="font-mono text-[10px] text-white/25 truncate">{p.link.replace("https://", "")}</span>
                    </div>
                  </div>
                  <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                    <img src={p.img} alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
                      loading="lazy" decoding="async" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(135deg,rgba(88,28,220,0.45) 0%,transparent 50%,rgba(0,230,255,0.15) 100%)" }} />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top,rgba(6,8,16,0.65),transparent 40%)" }} />
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="glass rounded-lg px-3 py-1.5 flex items-center gap-2 border border-green-500/30"
                        style={{ boxShadow: "0 0 15px rgba(34,197,94,0.2)" }}>
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        <span className="font-mono text-[10px] text-green-400">LIVE</span>
                      </div>
                    </div>
                    <div className="absolute bottom-3 left-3">
                      <div className="glass rounded-lg px-2.5 py-1.5 flex items-center gap-1.5 border border-purple-500/25">
                        <Server className="w-3 h-3 text-purple-400" />
                        <span className="font-mono text-[10px] text-purple-400/80">{p.category}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="font-mono text-xs border px-3 py-1 rounded-full"
                    style={{ borderColor: "hsl(45,100%,60%,0.25)", background: "hsl(45,100%,60%,0.05)", color: "hsl(45,100%,65%)" }}>
                    {p.badge}
                  </span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-white mb-3 leading-tight"
                    style={{ fontSize: "clamp(1.75rem,3vw,2.5rem)" }}>{p.title}</h3>
                  <p className="text-white/50 text-base leading-relaxed">{p.desc}</p>
                </div>
                <div>
                  <p className="font-mono text-xs text-white/20 tracking-widest uppercase mb-3">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => <span key={t} className="tag-chip">{t}</span>)}
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 pt-1">
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="btn-primary text-white rounded-sm text-xs flex items-center gap-2">
                    <span className="relative z-10 flex items-center gap-2"><ExternalLink className="w-3.5 h-3.5" /> Visit Site</span>
                  </a>
                  <a href={p.discord} target="_blank" rel="noopener noreferrer" className="btn-outline rounded-sm text-xs flex items-center gap-2">
                    <MessageSquare className="w-3.5 h-3.5" /> Discord
                  </a>
                  <a href={p.contact} target="_blank" rel="noopener noreferrer" className="btn-outline rounded-sm text-xs flex items-center gap-2"
                    style={{ borderColor: "hsl(320,70%,65%,0.5)", color: "hsl(320,70%,75%)" }}>
                    <Phone className="w-3.5 h-3.5" /> Contact
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
