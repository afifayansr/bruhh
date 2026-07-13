import { motion } from "framer-motion";
import { Code2, Server, Gamepad2, Globe, Terminal, Zap } from "lucide-react";

const SERVICES = [
  {
    Icon: Globe,
    title: "Website Development",
    desc: "Modern full-stack web applications built with React, Next.js, Node.js, and TypeScript. Clean code, fast performance, responsive design.",
    color: "hsl(262,83%,65%)",
  },
  {
    Icon: Code2,
    title: "Backend Development",
    desc: "REST APIs, server-side logic, database design and management. Built with Node.js, Express, and MongoDB.",
    color: "hsl(188,100%,55%)",
  },
  {
    Icon: Server,
    title: "Hosting Infrastructure Setup",
    desc: "Complete VPS and VDS deployment, server configuration, Nginx setup, SSL certificates, and Cloudflare integration.",
    color: "hsl(320,70%,65%)",
  },
  {
    Icon: Zap,
    title: "VPS & VDS Deployment",
    desc: "Provisioning and configuring virtual servers for production workloads. Includes hardening, monitoring, and performance tuning.",
    color: "hsl(45,100%,60%)",
  },
  {
    Icon: Gamepad2,
    title: "Minecraft Server Development",
    desc: "Custom Minecraft server setup, network configuration (BungeeCord/Velocity), plugin integration, and performance optimization.",
    color: "hsl(130,60%,55%)",
  },
  {
    Icon: Gamepad2,
    title: "Minecraft Network Setup",
    desc: "Multi-server Minecraft networks with proxy setup, cross-server communication, and custom gameplay systems.",
    color: "hsl(150,60%,50%)",
  },
  {
    Icon: Gamepad2,
    title: "Hytale Server Development",
    desc: "Hytale dedicated server setup, configuration, modding infrastructure, and community server management.",
    color: "hsl(30,90%,60%)",
  },
  {
    Icon: Terminal,
    title: "Linux Administration",
    desc: "Linux server management, shell scripting, process management, security hardening, and system maintenance.",
    color: "hsl(55,90%,60%)",
  },
  {
    Icon: Server,
    title: "Server Optimization",
    desc: "Performance tuning for web servers, game servers, and databases. Resource optimization and bottleneck analysis.",
    color: "hsl(200,80%,60%)",
  },
  {
    Icon: Globe,
    title: "Cloud Hosting Solutions",
    desc: "Custom cloud hosting architecture design and deployment via PieCore™ infrastructure or third-party cloud providers.",
    color: "hsl(262,83%,75%)",
  },
];

export function Services() {
  return (
    <section id="services" className="py-32 relative z-10">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] opacity-[0.04] blur-3xl rounded-full"
          style={{ background: "radial-gradient(ellipse,hsl(262,83%,58%),hsl(188,100%,50%),transparent)" }} />
      </div>

      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <div className="mb-4"><span className="section-tag">04 — Services</span></div>
          <h2 className="section-title text-white mb-4">What I <span className="gradient-text">Build</span></h2>
          <p className="text-white/40 text-lg mb-16 max-w-xl">
            From web platforms to game server networks — professional development and infrastructure services.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl p-6 group relative overflow-hidden border border-white/5 hover:border-white/12 transition-all duration-300"
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${s.color}10`; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
            >
              <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg,transparent,${s.color},transparent)` }} />
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200"
                style={{ background: `${s.color}15`, border: `1px solid ${s.color}25` }}>
                <s.Icon className="w-5 h-5" style={{ color: s.color }} />
              </div>
              <h3 className="font-display font-semibold text-white text-sm mb-2">{s.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
