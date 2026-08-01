import { motion } from "framer-motion";

const EXPERTISE = [
  {
    emoji: "🐧",
    title: "Linux Administration",
    desc: "Server management, shell scripting, process control, security hardening, and system maintenance across production Linux environments.",
    color: "hsl(45,100%,60%)",
  },
  {
    emoji: "☁️",
    title: "Hosting Infrastructure",
    desc: "VPS/VDS deployment, Nginx/Apache configuration, SSL, DNS, Cloudflare, reverse proxies, and load balancing for high-availability services.",
    color: "hsl(188,100%,55%)",
  },
  {
    emoji: "🖥️",
    title: "Server Development",
    desc: "Building and operating scalable Node.js backends, REST APIs, WebSocket servers, and custom game server infrastructure.",
    color: "hsl(262,83%,65%)",
  },
];

const STATS = [
  { value: "50+", label: "Servers Deployed" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "4", label: "Projects Shipped" },
];

export function About() {
  return (
    <section id="about" className="py-32 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-4">
            <span className="section-tag">01 — About</span>
          </div>
            <h2 className="section-title text-white mb-16">
              Who is <span className="gradient-text">Afifayan</span>
            </h2>

          <div className="grid lg:grid-cols-[1fr_320px] gap-14 items-start">
            <div className="space-y-6">
              <p className="text-lg text-white/60 leading-relaxed">
                Afifayan is a <span className="gradient-text font-semibold">MERN Stack Developer</span> and the{" "}
                <a
                  href="https://piecore.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gradient-text font-semibold hover:opacity-80 transition-opacity"
                >
                  Founder of PieCore™ Cloud Hosting
                </a>
                . He specializes in full-stack web development, hosting
                infrastructure, Minecraft server development, Hytale server
                development, and server management.
              </p>

              <p className="text-lg text-white/60 leading-relaxed">
                His work focuses on building modern web platforms, scalable
                hosting solutions, custom game server systems, and reliable
                cloud infrastructure — from working prototype to production.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                {[
                  "MERN Stack",
                  "Full Stack Web Dev",
                  "MongoDB & PostgreSQL",
                  "Node.js Backends",
                  "Express.js APIs",
                  "React & Next.js",
                  "TypeScript",
                  "Linux Administration",
                  "Hosting Infrastructure",
                  "VPS & VDS Management",
                  "Minecraft Server Dev",
                  "Hytale Server Dev",
                ].map((t) => (
                  <span key={t} className="tag-chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="glass rounded-2xl p-6 border border-white/8 space-y-4"
            >
              <div
                className="relative rounded-xl overflow-hidden"
                style={{ aspectRatio: "1/1" }}
              >
                <img
                  src="/assets/profile.png"
                  alt="Afifayan"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                  onError={(e) => {
                    const t = e.currentTarget;
                    t.style.display = "none";
                    const p = t.parentElement;
                    if (p) {
                      p.style.cssText +=
                        ";background:linear-gradient(135deg,hsl(262,83%,18%),hsl(188,100%,10%));display:flex;align-items:center;justify-content:center";
                      p.innerHTML =
                        '<span style="font-size:70px;font-weight:900;color:hsl(262,83%,65%)">A</span>';
                    }
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top,rgba(6,8,16,0.5),transparent 60%)",
                  }}
                />
              </div>
              <div>
                <p className="font-display font-bold text-white text-lg">
                  Afifayan
                </p>
                <p className="font-mono text-xs text-purple-400/80 mt-1">
                  Founder · PieCore™ Cloud Hosting
                </p>
                <a
                  href="https://piecore.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs mt-3 px-3 py-1.5 rounded-full border transition-all hover:scale-105"
                  style={{
                    borderColor: "hsl(188,100%,50%,0.35)",
                    background: "hsl(188,100%,50%,0.08)",
                    color: "hsl(188,100%,62%)",
                  }}
                >
                  🌐 piecore.xyz
                </a>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-20 pt-12 border-t border-white/5">
            {STATS.map((s) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-6 text-center border border-white/5"
              >
                <p className="font-display font-bold text-2xl gradient-text">
                  {s.value}
                </p>
                <p className="font-mono text-[10px] tracked-widest uppercase text-white/30 mt-1">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16">
            <div className="flex items-center gap-3 mb-8">
              <div
                className="h-px flex-1 opacity-20"
                style={{ background: "hsl(262,83%,58%)" }}
              />
              <span className="font-mono text-xs tracking-widest uppercase text-white/25">
                Areas of Expertise
              </span>
              <div
                className="h-px flex-1 opacity-20"
                style={{ background: "hsl(262,83%,58%)" }}
              />
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {EXPERTISE.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.6 }}
                  whileHover={{ y: -6 }}
                  className="glass rounded-2xl p-6 border border-white/5 hover:border-white/12 transition-all duration-300 relative overflow-hidden group"
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 0 30px " + item.color + "15";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div
                      className="absolute -top-8 -right-8 w-24 h-24 rounded-full blur-2xl"
                      style={{ background: item.color, opacity: 0.08 }}
                    />
                  </div>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-2xl"
                    style={{
                      background: item.color + "15",
                      border: "1px solid " + item.color + "25",
                    }}
                  >
                    {item.emoji}
                  </div>
                  <h3 className="font-display font-semibold text-white text-sm mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/40 text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
