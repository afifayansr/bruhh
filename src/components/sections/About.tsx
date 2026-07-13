import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-32 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }}
        >
          <div className="mb-4"><span className="section-tag">01 — About</span></div>
          <h2 className="section-title text-white mb-16">
            Who is <span className="gradient-text">Afifayan</span>
          </h2>

          <div className="grid lg:grid-cols-[1fr_320px] gap-14 items-start">
            <div className="space-y-6">
              <p className="text-lg text-white/60 leading-relaxed">
                Afifayan is a developer and the Founder of{" "}
                <a href="https://piecore.xyz" target="_blank" rel="noopener noreferrer"
                  className="gradient-text font-semibold hover:opacity-80 transition-opacity">
                  PieCore™ Cloud Hosting
                </a>
                . He specializes in web development, hosting infrastructure, Minecraft server development,
                Hytale server development, and server management.
              </p>
              <p className="text-lg text-white/60 leading-relaxed">
                His work focuses on building modern web platforms, scalable hosting solutions, custom game
                server systems, and reliable cloud infrastructure.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {[
                  "Full Stack Web Dev",
                  "Minecraft Server Dev",
                  "Hytale Server Dev",
                  "Hosting Infrastructure",
                  "Linux Administration",
                  "Cloud Infrastructure",
                  "VPS & VDS Management",
                  "Node.js",
                ].map((t) => (
                  <span key={t} className="tag-chip">{t}</span>
                ))}
              </div>
            </div>

            {/* Profile card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="glass rounded-2xl p-6 border border-white/8 space-y-4"
            >
              <div className="relative rounded-xl overflow-hidden" style={{ aspectRatio: "1/1" }}>
                <img
                  src="/profile.png"
                  alt="Afifayan"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                  onError={(e) => {
                    const t = e.currentTarget;
                    t.style.display = "none";
                    const p = t.parentElement;
                    if (p) {
                      p.style.cssText += ";background:linear-gradient(135deg,hsl(262,83%,18%),hsl(188,100%,10%));display:flex;align-items:center;justify-content:center";
                      p.innerHTML = '<span style="font-size:70px;font-weight:900;color:hsl(262,83%,65%)">A</span>';
                    }
                  }}
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top,rgba(6,8,16,0.5),transparent 60%)" }} />
              </div>
              <div>
                <p className="font-display font-bold text-white text-lg">Afifayan</p>
                <p className="font-mono text-xs text-purple-400/80 mt-1">Founder · PieCore™ Cloud Hosting</p>
                <a href="https://piecore.xyz" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs mt-3 px-3 py-1.5 rounded-full border transition-all hover:scale-105"
                  style={{ borderColor: "hsl(188,100%,50%,0.35)", background: "hsl(188,100%,50%,0.08)", color: "hsl(188,100%,62%)" }}>
                  🌐 piecore.xyz
                </a>
              </div>
            </motion.div>
          </div>

          {/* Focus areas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-20 pt-12 border-t border-white/5">
            {[
              { emoji: "🌐", title: "Web Platforms", desc: "Modern full-stack web applications" },
              { emoji: "🎮", title: "Game Servers", desc: "Minecraft & Hytale server systems" },
              { emoji: "☁️", title: "Cloud Hosting", desc: "Scalable infrastructure solutions" },
              { emoji: "🖥️", title: "Server Mgmt", desc: "Linux administration & DevOps" },
            ].map((f, i) => (
              <motion.div key={f.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-6 hover:border-white/15 transition-all border border-white/5"
              >
                <div className="text-3xl mb-3">{f.emoji}</div>
                <div className="font-display font-semibold text-white text-sm mb-1">{f.title}</div>
                <div className="text-xs font-mono text-white/30 leading-relaxed">{f.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
