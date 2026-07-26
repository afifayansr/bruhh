import { motion } from "framer-motion";
import {
  ExternalLink, MessageSquare, Phone, Github, CheckCircle2, Server,
  Bot, LayoutDashboard, Users, Settings, HardDrive, Palette,
} from "lucide-react";
import type { ComponentType, ReactNode, CSSProperties } from "react";

type Status = "live" | "completed" | "discontinued";
type ActionVariant = "primary" | "outline";

interface Action {
  label: string;
  url: string;
  icon: ComponentType<{ className?: string; style?: CSSProperties }>;
  variant: ActionVariant;
  color?: string;
}

interface Project {
  title: string;
  badge: string;
  status: Status;
  desc: string;
  features: string[];
  tags: string[];
  category: string;
  accent: string;
  img?: string;
  visual?: ReactNode;
  link: string;
  actions: Action[];
}

const STATUS_META: Record<Status, { label: string; color: string; pulse?: boolean }> = {
  live: { label: "Live", color: "hsl(130,60%,55%)", pulse: true },
  completed: { label: "Completed", color: "hsl(188,100%,55%)" },
  discontinued: { label: "Discontinued", color: "hsl(30,90%,58%)" },
};

/* ---------- Custom UI mockups (no stock photos — built from the brief) ---------- */

function SidebarIcon({ Icon, active, color }: { Icon: ComponentType<{ className?: string; style?: CSSProperties }>; active?: boolean; color: string }) {
  return (
    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
      style={{ background: active ? color + "1e" : "rgba(255,255,255,0.04)", border: active ? `1px solid ${color}45` : "1px solid transparent" }}>
      <Icon className="w-4 h-4" style={{ color: active ? color : "rgba(255,255,255,0.28)" }} />
    </div>
  );
}

function TridentVisual() {
  const c = "hsl(235,86%,68%)";
  return (
    <div className="absolute inset-0 flex" style={{ background: "linear-gradient(160deg,#0b0d1c 0%,#141131 100%)" }}>
      <div className="w-14 flex flex-col items-center gap-4 py-5 border-r border-white/5 flex-shrink-0">
        <SidebarIcon Icon={Bot} active color={c} />
        <SidebarIcon Icon={LayoutDashboard} color={c} />
        <SidebarIcon Icon={Users} color={c} />
        <SidebarIcon Icon={Settings} color={c} />
      </div>
      <div className="flex-1 p-4 sm:p-5 flex flex-col gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: c }}>
            <Bot className="w-4 h-4 text-white" />
          </div>
          <div>
            <p className="text-white text-xs font-semibold font-display">Trident</p>
            <p className="text-white/30 text-[9px] font-mono">Bot Dashboard</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {["Servers", "Members", "Commands"].map((l) => (
            <div key={l} className="rounded-lg p-2 border border-white/5" style={{ background: "rgba(255,255,255,0.03)" }}>
              <div className="h-1.5 w-8 rounded-full mb-2" style={{ background: c + "80" }} />
              <p className="text-white/30 text-[8px] font-mono uppercase tracking-wide">{l}</p>
            </div>
          ))}
        </div>
        <div className="flex-1 rounded-lg border border-white/5 p-3 space-y-2" style={{ background: "rgba(255,255,255,0.02)" }}>
          {["/moderation setup", "/welcome message", "/autorole assign"].map((cmd) => (
            <div key={cmd} className="flex items-center gap-2 text-[10px] font-mono text-white/25">
              <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: c }} />
              {cmd}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CrynoPanelVisual() {
  const c = "hsl(30,90%,58%)";
  const rows = [
    { name: "Node #01 · Survival", cpu: "62%", ram: "41%", disk: "78%" },
    { name: "Node #02 · Creative", cpu: "34%", ram: "55%", disk: "22%" },
  ];
  return (
    <div className="absolute inset-0 flex" style={{ background: "linear-gradient(160deg,#100b06 0%,#1e140a 100%)" }}>
      <div className="w-14 flex flex-col items-center gap-4 py-5 border-r border-white/5 flex-shrink-0">
        <SidebarIcon Icon={Server} color={c} />
        <SidebarIcon Icon={HardDrive} color={c} />
        <SidebarIcon Icon={Users} color={c} />
        <SidebarIcon Icon={Palette} active color={c} />
      </div>
      <div className="flex-1 p-4 sm:p-5 flex flex-col gap-2.5">
        <div className="flex items-center justify-between">
          <p className="text-white text-xs font-semibold font-display">CrynoPanel Theme</p>
          <div className="flex gap-1">
            {[c, "hsl(262,83%,58%)", "hsl(188,100%,50%)", "hsl(0,0%,92%)"].map((sw) => (
              <span key={sw} className="w-3 h-3 rounded-full border border-white/10" style={{ background: sw }} />
            ))}
          </div>
        </div>
        {rows.map((r) => (
          <div key={r.name} className="rounded-lg border border-white/5 p-2.5 space-y-2" style={{ background: "rgba(255,255,255,0.03)" }}>
            <p className="text-white/50 text-[9px] font-mono">{r.name}</p>
            <div className="flex gap-2.5">
              {[["CPU", r.cpu, c], ["RAM", r.ram, "hsl(262,83%,58%)"], ["Disk", r.disk, "hsl(188,100%,50%)"]].map(([l, v, col]) => (
                <div key={l} className="flex-1">
                  <div className="h-1 rounded-full bg-white/5 overflow-hidden"><div className="h-full rounded-full" style={{ width: v, background: col }} /></div>
                  <p className="text-[7px] text-white/25 font-mono mt-1">{l}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SmpVisual() {
  return (
    <div className="absolute inset-0 overflow-hidden"
      style={{ background: "linear-gradient(180deg,hsl(200,70%,28%) 0%,hsl(200,55%,17%) 52%,hsl(130,45%,15%) 52%,hsl(130,50%,9%) 100%)" }}>
      <div className="absolute top-6 right-8 w-9 h-9 rounded-sm"
        style={{ background: "hsl(45,100%,65%)", boxShadow: "0 0 30px hsl(45,100%,60%,0.55)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-[48%] flex items-end">
        {[3, 5, 2, 6, 4, 3, 5, 2, 4, 3, 6, 2].map((h, i) => (
          <div key={i} className="flex-1" style={{ height: `${h * 9}%`, background: "hsl(130,42%,20%)", borderTop: "3px solid hsl(130,48%,30%)" }} />
        ))}
      </div>
      <div className="absolute top-4 left-4 glass rounded-lg px-3 py-2 border border-white/10">
        <p className="text-white text-xs font-display font-bold">Join the SMP</p>
        <p className="text-white/40 text-[9px] font-mono mt-0.5">smpproject-1.afifayan.fun</p>
      </div>
      <div className="absolute bottom-4 left-4 glass rounded-lg px-3 py-1.5 border border-green-400/25 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
        <span className="text-[10px] font-mono text-green-300">Live player count widget</span>
      </div>
      <div className="absolute bottom-4 right-4 glass rounded-lg px-2.5 py-1.5 border border-white/10 flex items-center gap-1.5">
        <Bot className="w-3 h-3 text-white/50 flex-shrink-0" />
        <span className="text-[10px] font-mono text-white/40">Whitelist bot</span>
      </div>
    </div>
  );
}

/* ---------------------------------- Data ---------------------------------- */

const PROJECTS: Project[] = [
  {
    title: "PieCore™ Cloud Hosting",
    badge: "🎮 Game Hosting",
    status: "live",
    desc: "Bangladesh's best game server hosting platform. Built for Minecraft, Hytale, and other game servers. Features DDoS protection, ultra-low latency, instant deployment, and 24/7 monitoring — powered by custom hosting automation infrastructure.",
    features: [
      "One-click Minecraft & Hytale server deployment",
      "DDoS-protected network with low-latency routing",
      "Custom Pterodactyl-based control panel",
      "24/7 uptime monitoring with automated backups",
    ],
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85",
    tags: ["Node.js", "Linux", "Nginx", "Docker", "Cloudflare", "Pterodactyl"],
    link: "piecore.xyz",
    category: "Hosting Infrastructure",
    accent: "hsl(262,83%,58%)",
    actions: [
      { label: "Visit Site", url: "https://piecore.xyz", icon: ExternalLink, variant: "primary" },
      { label: "Discord", url: "https://discord.gg/piecore", icon: MessageSquare, variant: "outline" },
      { label: "Contact", url: "https://piecore.xyz/contact", icon: Phone, variant: "outline", color: "hsl(320,70%,65%)" },
    ],
  },
  {
    title: "Trident — All-in-One Discord Bot",
    badge: "🤖 Discord Bot",
    status: "completed",
    desc: "A full-featured Discord bot paired with a web dashboard, so servers can be configured, moderated, and monitored without touching a single slash command. Built for communities that want a real control panel, not a wall of commands.",
    features: [
      "Web dashboard to manage servers without touching Discord",
      "Moderation: auto-roles, warnings, welcome messages",
      "Custom embed & slash-command builder",
      "Live bot status and server analytics",
    ],
    visual: <TridentVisual />,
    tags: ["Discord.js", "Node.js", "React", "REST API", "MongoDB"],
    link: "github.com/afifayan/trident-bot-withdash",
    category: "Discord Bot Development",
    accent: "hsl(235,86%,68%)",
    actions: [
      { label: "View on GitHub", url: "https://github.com/afifayan/trident-bot-withdash", icon: Github, variant: "primary" },
    ],
  },
  {
    title: "Minecraft SMP Website",
    badge: "🧱 Minecraft SMP",
    status: "live",
    desc: "An all-in-one website for a Minecraft SMP, running on a custom Node.js backend with a companion Discord bot baked in. Server status, whitelist applications, and player stats all live in one place instead of scattered across a Discord server.",
    features: [
      "Live server status and player count widget",
      "Discord bot integration for whitelist applications",
      "Player stats, leaderboard, and rules pages",
      "Custom all-in-one Node.js backend",
    ],
    visual: <SmpVisual />,
    tags: ["Node.js", "Express", "Discord.js", "EJS/React"],
    link: "smpproject-1.afifayan.fun",
    category: "Minecraft Web + Bot",
    accent: "hsl(130,55%,50%)",
    actions: [
      { label: "Visit Site", url: "https://smpproject-1.afifayan.fun/", icon: ExternalLink, variant: "primary" },
    ],
  },
  {
    title: "CrynoPanel",
    badge: "🎨 UI Theme",
    status: "discontinued",
    desc: "A full visual theme for Pterodactyl Panel, redesigning the default server list, console, and file manager into something that actually looks intentional. Since discontinued, but the source is kept up as a reference build.",
    features: [
      "Complete visual overhaul of the default Pterodactyl UI",
      "Redesigned server list, console, and file manager views",
      "Configurable accent theming system",
      "Open-sourced — now archived and no longer maintained",
    ],
    visual: <CrynoPanelVisual />,
    tags: ["Pterodactyl", "PHP", "Blade", "CSS", "JavaScript"],
    link: "github.com/afifayanf/CrynoPanel-discontinued-",
    category: "Panel Theming",
    accent: "hsl(30,90%,58%)",
    actions: [
      { label: "View on GitHub", url: "https://github.com/afifayanf/CrynoPanel-discontinued-", icon: Github, variant: "outline" },
    ],
  },
];

const CATEGORIES = [
  "Hosting Infrastructure",
  "Discord Bot Development",
  "Minecraft Web + Bot",
  "Panel Theming",
  "Web Development",
  "Cloud Solutions",
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
            Platforms and infrastructure I've shipped across hosting, Discord bots, Minecraft, and panel development.
          </p>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-16">
            {CATEGORIES.map((c) => (
              <span key={c} className="font-mono text-[11px] border border-white/8 text-white/30 px-3 py-1 rounded-full">{c}</span>
            ))}
          </div>
        </motion.div>

        <div className="space-y-28">
          {PROJECTS.map((p, i) => {
            const statusMeta = STATUS_META[p.status];
            return (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${i % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                {/* Image / Mockup */}
                <div className="relative group">
                  <div className="absolute -inset-3 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"
                    style={{ background: `linear-gradient(135deg,${p.accent}40,${p.accent}15)` }} />
                  <div className="relative glass rounded-2xl overflow-hidden border border-white/8 transition-colors duration-500"
                    style={{ boxShadow: "0 30px 80px -20px rgba(0,0,0,0.8)" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = p.accent + "4d"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"; }}
                  >
                    <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5" style={{ background: "rgba(0,0,0,0.5)" }}>
                      <div className="w-3 h-3 rounded-full bg-red-500/60" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                      <div className="w-3 h-3 rounded-full bg-green-500/60" />
                      <div className="flex-1 mx-4 h-5 rounded bg-white/5 flex items-center px-3 gap-2">
                        <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: statusMeta.color + "80" }} />
                        <span className="font-mono text-[10px] text-white/25 truncate">{p.link}</span>
                      </div>
                    </div>
                    <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                      {p.img ? (
                        <>
                          <img src={p.img} alt={p.title}
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
                            loading="lazy" decoding="async" />
                          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg,rgba(88,28,220,0.45) 0%,transparent 50%,rgba(0,230,255,0.15) 100%)" }} />
                          <div className="absolute inset-0" style={{ background: "linear-gradient(to top,rgba(6,8,16,0.65),transparent 40%)" }} />
                        </>
                      ) : (
                        p.visual
                      )}
                      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="glass rounded-lg px-3 py-1.5 flex items-center gap-2 border"
                          style={{ borderColor: statusMeta.color + "4d", boxShadow: `0 0 15px ${statusMeta.color}30` }}>
                          <div className={`w-1.5 h-1.5 rounded-full ${statusMeta.pulse ? "animate-pulse" : ""}`} style={{ background: statusMeta.color }} />
                          <span className="font-mono text-[10px] uppercase tracking-wide" style={{ color: statusMeta.color }}>{statusMeta.label}</span>
                        </div>
                      </div>
                      <div className="absolute bottom-3 left-3">
                        <div className="glass rounded-lg px-2.5 py-1.5 flex items-center gap-1.5 border" style={{ borderColor: p.accent + "40" }}>
                          <Server className="w-3 h-3" style={{ color: p.accent }} />
                          <span className="font-mono text-[10px]" style={{ color: p.accent + "cc" }}>{p.category}</span>
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
                    <span className="font-mono text-xs border px-3 py-1 rounded-full flex items-center gap-1.5"
                      style={{ borderColor: statusMeta.color + "40", background: statusMeta.color + "0d", color: statusMeta.color }}>
                      <span className={`w-1.5 h-1.5 rounded-full ${statusMeta.pulse ? "animate-pulse" : ""}`} style={{ background: statusMeta.color }} />
                      {statusMeta.label}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white mb-3 leading-tight"
                      style={{ fontSize: "clamp(1.75rem,3vw,2.5rem)" }}>{p.title}</h3>
                    <p className="text-white/50 text-base leading-relaxed">{p.desc}</p>
                  </div>

                  {/* Feature list */}
                  <div>
                    <p className="font-mono text-xs text-white/20 tracking-widest uppercase mb-3">Key Features</p>
                    <div className="grid sm:grid-cols-2 gap-x-4 gap-y-2.5">
                      {p.features.map((f) => (
                        <div key={f} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: p.accent }} />
                          <span className="text-sm text-white/55 leading-snug">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="font-mono text-xs text-white/20 tracking-widest uppercase mb-3">Tech Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((t) => <span key={t} className="tag-chip">{t}</span>)}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 pt-1">
                    {p.actions.map((a) => {
                      const Icon = a.icon;
                      if (a.variant === "primary") {
                        return (
                          <a key={a.label} href={a.url} target="_blank" rel="noopener noreferrer"
                            className="btn-primary text-white rounded-sm text-xs flex items-center gap-2">
                            <span className="relative z-10 flex items-center gap-2"><Icon className="w-3.5 h-3.5" /> {a.label}</span>
                          </a>
                        );
                      }
                      return (
                        <a key={a.label} href={a.url} target="_blank" rel="noopener noreferrer"
                          className="btn-outline rounded-sm text-xs flex items-center gap-2"
                          style={a.color ? { borderColor: a.color + "50", color: a.color } : undefined}>
                          <Icon className="w-3.5 h-3.5" /> {a.label}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
