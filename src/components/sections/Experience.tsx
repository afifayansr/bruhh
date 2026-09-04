import { motion } from "framer-motion";
import { Server, Code2 } from "lucide-react";

const TIMELINE = [
  {
    icon: Server,
    color: "hsl(262,83%,70%)",
    title: "Founder",
    company: "PieCore™ Cloud Hosting",
    link: "https://piecore.xyz",
    desc: "Founded PieCore™, a hosting project built on Pterodactyl, and manage it alongside learning web development.",
  },
  {
    icon: Code2,
    color: "hsl(188,100%,55%)",
    title: "Self-Taught Developer",
    company: "Personal Projects",
    link: null,
    desc: "Learning HTML, CSS, JavaScript, Node.js, and MongoDB by building and experimenting with personal projects.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-32 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <div className="mb-4"><span className="section-tag">04 — Experience</span></div>
          <h2 className="section-title text-white mb-4">My <span className="gradient-text">Journey</span></h2>
          <p className="text-white/40 text-lg mb-16 max-w-xl">A quick look at what I've been doing while learning to code.</p>
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
