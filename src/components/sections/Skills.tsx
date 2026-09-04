import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiNodedotjs,
  SiMongodb,
  SiPterodactyl,
} from "react-icons/si";
import type { ComponentType, CSSProperties } from "react";

function hexToRgba(hex: string, alpha: number): string {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 2), 16);
  const b = parseInt(h.slice(4, 2), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

interface Skill {
  name: string;
  Icon: ComponentType<{ className?: string; style?: CSSProperties }>;
  color: string;
}

interface Category {
  label: string;
  color: string;
  skills: Skill[];
}

const CATEGORIES: Category[] = [
  {
    label: "Frontend",
    color: "hsl(188,100%,55%)",
    skills: [
      { name: "HTML", Icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", Icon: SiCss, color: "#264DE4" },
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
    ],
  },
  {
    label: "Backend",
    color: "hsl(262,83%,70%)",
    skills: [
      { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
    ],
  },
  {
    label: "Database",
    color: "hsl(320,70%,70%)",
    skills: [
      { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
    ],
  },
  {
    label: "Hosting / Infrastructure",
    color: "hsl(45,100%,60%)",
    skills: [
      { name: "Pterodactyl", Icon: SiPterodactyl, color: "#5865F2" },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-32 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-4">
            <span className="section-tag">03 — Skills</span>
          </div>
          <h2 className="section-title text-white mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-white/40 text-lg mb-16 max-w-xl">
            The tools I'm currently learning and building with. Still growing
            this list as I take on new projects.
          </p>
        </motion.div>

        <div className="space-y-16">
          {CATEGORIES.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.08, duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="h-px flex-1 opacity-20"
                  style={{ background: cat.color }}
                />
                <span
                  className="font-mono text-xs tracking-widest uppercase"
                  style={{ color: cat.color }}
                >
                  {cat.label}
                </span>
                <div
                  className="h-px flex-1 opacity-20"
                  style={{ background: cat.color }}
                />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {cat.skills.map((s, i) => (
                  <motion.div
                    key={s.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: ci * 0.05 + i * 0.04,
                      duration: 0.4,
                    }}
                    whileHover={{ y: -4, scale: 1.05 }}
                    className="glass rounded-xl p-4 flex flex-col items-center gap-2.5 border border-white/5 hover:border-white/15 transition-all duration-300 cursor-default"
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow =
                        "0 0 20px " + hexToRgba(s.color, 0.2);
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    }}
                  >
                    <s.Icon
                      className="w-7 h-7 flex-shrink-0"
                      style={{ color: s.color }}
                    />
                    <span className="font-mono text-[10px] text-white/45 text-center leading-tight">
                      {s.name}
                    </span>
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
