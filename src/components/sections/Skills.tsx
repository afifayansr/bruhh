import { motion } from "framer-motion";
import {
  SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiTailwindcss,
  SiMongodb, SiVite, SiHtml5, SiJavascript, SiFramer,
  SiDocker, SiGit, SiLinux, SiNginx, SiCloudflare,
} from "react-icons/si";
import { Server, Globe, Gamepad2, Database } from "lucide-react";

const CATEGORIES = [
  {
    label: "Web Development",
    color: "hsl(262,83%,70%)",
    skills: [
      { name: "React",          Icon: SiReact,      color: "#61DAFB" },
      { name: "Next.js",        Icon: SiNextdotjs,  color: "#ffffff" },
      { name: "TypeScript",     Icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript",     Icon: SiJavascript, color: "#F7DF1E" },
      { name: "HTML5",          Icon: SiHtml5,      color: "#E34F26" },
      { name: "Tailwind CSS",   Icon: SiTailwindcss,color: "#06B6D4" },
      { name: "Framer Motion",  Icon: SiFramer,     color: "#0055FF" },
      { name: "Vite",           Icon: SiVite,       color: "#646CFF" },
    ],
  },
  {
    label: "Backend & Database",
    color: "hsl(188,100%,55%)",
    skills: [
      { name: "Node.js",    Icon: SiNodedotjs, color: "#339933" },
      { name: "MongoDB",    Icon: SiMongodb,   color: "#47A248" },
      { name: "REST APIs",  Icon: Globe,       color: "#60A5FA" },
      { name: "Database Mgmt", Icon: Database, color: "#A78BFA" },
    ],
  },
  {
    label: "Hosting & Infrastructure",
    color: "hsl(320,70%,70%)",
    skills: [
      { name: "Linux",       Icon: SiLinux,      color: "#FCC624" },
      { name: "Nginx",       Icon: SiNginx,      color: "#009639" },
      { name: "Docker",      Icon: SiDocker,     color: "#2496ED" },
      { name: "Cloudflare",  Icon: SiCloudflare, color: "#F48120" },
      { name: "VPS / VDS",   Icon: Server,       color: "#A78BFA" },
      { name: "Git",         Icon: SiGit,        color: "#F05032" },
    ],
  },
  {
    label: "Game Server Development",
    color: "hsl(45,100%,60%)",
    skills: [
      { name: "Minecraft Server Dev",     Icon: Gamepad2, color: "#4CAF50" },
      { name: "Minecraft Network Config", Icon: Server,   color: "#8BC34A" },
      { name: "Plugin Integration",       Icon: Gamepad2, color: "#66BB6A" },
      { name: "Hytale Server Dev",        Icon: Gamepad2, color: "#FFB300" },
      { name: "Server Optimization",      Icon: Server,   color: "#FF7043" },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-32 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <div className="mb-4"><span className="section-tag">02 — Skills</span></div>
          <h2 className="section-title text-white mb-4">Technical <span className="gradient-text">Skills</span></h2>
          <p className="text-white/40 text-lg mb-16 max-w-xl">
            Specialized across web development, game server engineering, and cloud hosting infrastructure.
          </p>
        </motion.div>

        <div className="space-y-14">
          {CATEGORIES.map((cat, ci) => (
            <motion.div key={cat.label}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: ci * 0.1, duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px flex-1 opacity-20" style={{ background: cat.color }} />
                <span className="font-mono text-xs tracking-widest uppercase" style={{ color: cat.color }}>{cat.label}</span>
                <div className="h-px flex-1 opacity-20" style={{ background: cat.color }} />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {cat.skills.map((s, i) => (
                  <motion.div
                    key={s.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: ci * 0.05 + i * 0.05, duration: 0.4 }}
                    whileHover={{ y: -4, scale: 1.05 }}
                    className="glass rounded-xl p-4 flex flex-col items-center gap-2.5 border border-white/5 hover:border-white/15 transition-all duration-300 cursor-default"
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${s.color}20`; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
                  >
                    <s.Icon className="w-7 h-7 flex-shrink-0" style={{ color: s.color }} />
                    <span className="font-mono text-[10px] text-white/45 text-center leading-tight">{s.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
