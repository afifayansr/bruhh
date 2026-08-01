import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  CheckCircle2,
  Code2,
  Server,
  Bot,
  Database,
  Globe,
} from "lucide-react";
import type { ComponentType, ReactNode, CSSProperties } from "react";

type ActionVariant = "primary" | "outline";

interface Action {
  label: string;
  url: string;
  icon: ComponentType<{ className?: string; style?: CSSProperties }>;
  variant: ActionVariant;
}

interface Project {
  title: string;
  badge: string;
  desc: string;
  features: string[];
  techBadges: { name: string; Icon: ComponentType<{ className?: string; style?: CSSProperties }>; color: string }[];
  accent: string;
  actions: Action[];
  visual: ReactNode;
}

function hslToHsla(hsl: string, alpha: number): string {
  return hsl.replace("hsl(", "hsla(").replace(")", `, ${alpha})`);
}

function TechBadge({
  name,
  Icon,
  color,
  delay,
}: {
  name: string;
  Icon: ComponentType<{ className?: string; style?: CSSProperties }>;
  color: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5, type: "spring", stiffness: 300 }}
      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border text-xs font-mono"
      style={{
        borderColor: color + "30",
        background: color + "0d",
        color: color,
      }}
    >
      <Icon className="w-3 h-3" style={{ color }} />
      {name}
    </motion.div>
  );
}

function ScreenshotVisual({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-2xl">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to top, rgba(6,8,16,0.55) 0%, transparent 60%)",
        }}
      />
    </div>
  );
}

const PROJECTS: Project[] = [
  {
    title: "SMP Project — AfifMC",
    badge: "Minecraft Web",
    desc: "An all-in-one website for a Minecraft SMP, running on a custom Node.js backend with a companion Discord bot. Server status, whitelist applications, player stats, and rules — all live in one place.",
    features: [
      "Live server status and player count widget",
      "Discord bot integration for whitelist applications",
      "Player stats, leaderboard, and rules pages",
      "Custom all-in-one Node.js backend with Express",
    ],
    techBadges: [
      { name: "Node.js", Icon: Server, color: "#339933" },
      { name: "Express", Icon: Code2, color: "#8B5CF6" },
      { name: "Discord.js", Icon: Bot, color: "#5865F2" },
      { name: "EJS", Icon: Code2, color: "#D75A49" },
    ],
    accent: "hsl(130,60%,55%)",
    visual: <ScreenshotVisual src="/project-smp.png" alt="AfifMC Minecraft SMP Website" />,
    actions: [
      { label: "Live Demo", url: "https://smpproject-1.afifayan.fun", icon: ExternalLink, variant: "primary" },
      { label: "GitHub", url: "https://github.com/afifayan/smp-project", icon: Github, variant: "outline" },
    ],
  },
  {
    title: "Trident — Discord Bot",
    badge: "Discord Bot",
    desc: "A full-featured Discord bot serving 1,000+ servers and 50,000+ users — with moderation, economy, leveling, music, giveaways, and an anti-nuke system. One bot. Unlimited power.",
    features: [
      "Advanced moderation & anti-nuke protection",
      "Economy system with shop & leaderboards",
      "Leveling, giveaways & auto-roles",
      "Music player with high-quality audio",
    ],
    techBadges: [
      { name: "Discord.js", Icon: Bot, color: "#5865F2" },
      { name: "React", Icon: Code2, color: "#61DAFB" },
      { name: "MongoDB", Icon: Database, color: "#47A248" },
      { name: "REST API", Icon: Server, color: "#A78BFA" },
    ],
    accent: "hsl(235,86%,68%)",
    visual: <ScreenshotVisual src="/project-trident.png" alt="Trident Discord Bot Banner" />,
    actions: [
      { label: "Live Demo", url: "https://trident-piecore.xyz", icon: ExternalLink, variant: "primary" },
      { label: "GitHub", url: "https://github.com/afifayan/trident-bot-withdash", icon: Github, variant: "outline" },
    ],
  },
  {
    title: "Dr. Imdadul Haque Memorial Degree College",
    badge: "Educational",
    desc: "A modern, responsive educational website for the college — featuring course listings, faculty profiles, admission portals, and event announcements built with a full MERN stack.",
    features: [
      "Responsive course and faculty profile pages",
      "Admission inquiry form with admin panel",
      "Event announcement and notice board system",
      "SEO-optimized static site generation",
    ],
    techBadges: [
      { name: "React", Icon: Code2, color: "#61DAFB" },
      { name: "Node.js", Icon: Server, color: "#339933" },
      { name: "MongoDB", Icon: Database, color: "#47A248" },
      { name: "Tailwind", Icon: Code2, color: "#06B6D4" },
    ],
    accent: "hsl(188,100%,55%)",
    visual: <ScreenshotVisual src="/project-college.png" alt="DIHC College Website" />,
    actions: [
      { label: "Live Demo", url: "https://dihc.edu.bd", icon: ExternalLink, variant: "primary" },
      { label: "GitHub", url: "https://github.com/afifayan/dihc-website", icon: Github, variant: "outline" },
    ],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-32 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-4">
            <span className="section-tag">04 — Projects</span>
          </div>
          <h2 className="section-title text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-white/40 text-lg mb-8 max-w-xl">
            A curated selection of platforms and systems I've shipped across
            web development, Discord bots, Minecraft, and educational technology.
          </p>
        </motion.div>

        <div className="space-y-24">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
            >
              <div className={`relative group ${i % 2 !== 0 ? "lg:order-2" : ""}`}>
                <div
                  className="absolute -inset-4 rounded-[28px] opacity-0 group-hover:opacity-100 transition-all duration-700 blur-2xl"
                  style={{ background: `linear-gradient(135deg,${p.accent},${p.accent})` }}
                />
                <motion.div
                  className="relative glass rounded-2xl overflow-hidden border transition-colors duration-500"
                  style={{
                    borderColor: hslToHsla(p.accent, 0.1),
                    boxShadow: "0 30px 80px -20px rgba(0,0,0,0.8)",
                    minHeight: "280px",
                  }}
                >
                  {p.visual}
                  <div className="absolute top-3 right-3">
                    <div
                      className="glass rounded-lg px-3 py-1.5 flex items-center gap-2 border"
                      style={{
                        borderColor: hslToHsla(p.accent, 0.3),
                        boxShadow: `0 0 15px ${p.accent}`,
                      }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      <span
                        className="font-mono text-[10px] uppercase tracking-wide"
                        style={{ color: "hsl(130,60%,70%)" }}
                      >
                        Live
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className={`space-y-6 ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                <div className="flex items-center gap-3 flex-wrap">
                  <span
                    className="font-mono text-xs border px-3 py-1 rounded-full"
                    style={{
                      borderColor: hslToHsla(p.accent, 0.25),
                      background: hslToHsla(p.accent, 0.05),
                      color: p.accent,
                    }}
                  >
                    {p.badge}
                  </span>
                  <div className="flex gap-1 flex-wrap">
                    {p.techBadges.map((t) => (
                      <TechBadge key={t.name} name={t.name} Icon={t.Icon} color={t.color} delay={i * 0.1} />
                    ))}
                  </div>
                </div>

                <div>
                  <h3
                    className="font-display font-bold text-white mb-3 leading-tight"
                    style={{ fontSize: "clamp(1.75rem,3vw,2.5rem)" }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-white/50 text-base leading-relaxed">{p.desc}</p>
                </div>

                <div>
                  <p className="font-mono text-xs text-white/20 tracking-widest uppercase mb-3">
                    Key Features
                  </p>
                  <div className="grid sm:grid-cols-2 gap-x-4 gap-y-2.5">
                    {p.features.map((f) => (
                      <div key={f} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: p.accent }} />
                        <span className="text-sm text-white/55 leading-snug">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-1">
                  {p.actions.map((a) => {
                    const Icon = a.icon;
                    if (a.variant === "primary") {
                      return (
                        <a
                          key={a.label}
                          href={a.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary text-white rounded-sm text-xs flex items-center gap-2"
                        >
                          <span className="relative z-10 flex items-center gap-2">
                            <Icon className="w-3.5 h-3.5" /> {a.label}
                          </span>
                        </a>
                      );
                    }
                    return (
                      <a
                        key={a.label}
                        href={a.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline rounded-sm text-xs flex items-center gap-2"
                      >
                        <Icon className="w-3.5 h-3.5" /> {a.label}
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
