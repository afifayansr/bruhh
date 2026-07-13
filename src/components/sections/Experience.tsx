import { motion } from "framer-motion";
import { Server, Globe, Gamepad2 } from "lucide-react";

const TIMELINE = [
  {
    icon: Server,
    color: "hsl(262,83%,70%)",
    title: "Founder & Infrastructure Lead",
    company: "PieCore™ Cloud Hosting",
    link: "https://piecore.xyz",
    desc: "Founded and built PieCore™ — a game server and cloud hosting platform. Designed the infrastructure, automation systems, and customer panel from the ground up.",
  },
  {
    icon: Globe,
    color: "hsl(188,100%,55%)",
    title: "Full Stack Developer",
    company: "TBangla Shop",
    link: "https://tbangla.shop",
    desc: "Built and maintained Bangladesh's premium VPS hosting and OTT subscription platform. Developed the storefront, payment systems, and inventory management.",
  },
  {
    icon: Gamepad2,
    color: "hsl(130,60%,55%)",
    title: "Minecraft Server Developer",
    company: "Freelance & Personal Projects",
    link: null,
    desc: "Developed and managed Minecraft server networks including BungeeCord/Velocity proxy setups, custom plugin integration, network configuration, and performance optimization.",
  },
  {
    icon: Gamepad2,
    color: "hsl(30,90%,60%)",
    title: "Hytale Server Developer",
    company: "Personal Projects",
    link: null,
    desc: "Researched and developed Hytale dedicated server infrastructure, modding systems, and community server architecture in preparation for the game's ecosystem.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-32 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <div className="mb-4"><span className="section-tag">06 — Experience</span></div>
          <h2 className="section-title text-white mb-4">Development <span className="gradient-text">Experience</span></h2>
          <p className="text-white/40 text-lg mb-16 max-w-xl">Projects and roles across web development, hosting infrastructure, and game server engineering.</p>
        </motion.div>

        <div className="relative max-w-2xl">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/30 via-cyan-500/20 to-transparent" />
          <div className="space-y-10">
            {TIMELINE.map((item, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="flex gap-8"
              >
                <div className="relative flex-shrink-0 w-10 h-10 rounded-full glass flex items-center justify-center border border-white/10 z-10"
                  style={{ boxShadow: `0 0 16px ${item.color}25` }}>
                  <item.icon className="w-4 h-4" style={{ color: item.color }} />
                </div>
                <div className="glass rounded-2xl p-6 flex-1 border border-white/8 hover:border-white/15 transition-colors">
                  <h3 className="font-display font-semibold text-white text-lg mb-0.5">{item.title}</h3>
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer"
                      className="text-sm mb-3 block hover:opacity-80 transition-opacity"
                      style={{ color: item.color }}>
                      {item.company} ↗
                    </a>
                  ) : (
                    <p className="text-sm mb-3" style={{ color: item.color }}>{item.company}</p>
                  )}
                  <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
