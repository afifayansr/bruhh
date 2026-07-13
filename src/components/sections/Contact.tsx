import { motion } from "framer-motion";
import { Mail, MessageSquare, Globe, Zap } from "lucide-react";

const LINKS = [
  { icon: Globe,         label: "Website",  val: "afifayan.fun",         href: "https://afifayan.fun",         color: "hsl(188,100%,55%)" },
  { icon: Globe,         label: "PieCore™", val: "piecore.xyz",           href: "https://piecore.xyz",           color: "hsl(262,83%,70%)" },
  { icon: MessageSquare, label: "Discord",  val: "discord.gg/piecore",    href: "https://discord.gg/piecore",    color: "hsl(320,70%,70%)" },
  { icon: Mail,          label: "Email",    val: "afifayan@piecore.xyz",  href: "mailto:afifayan@piecore.xyz",   color: "hsl(45,100%,60%)" },
];

export function Contact() {
  return (
    <section id="contact" className="py-32 relative z-10">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-[0.05] blur-3xl"
          style={{ background: "radial-gradient(ellipse,hsl(262,83%,58%),hsl(188,100%,50%),transparent 70%)" }} />
      </div>

      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.7 }} className="max-w-3xl mx-auto text-center">
          <div className="mb-4"><span className="section-tag">07 — Contact</span></div>
          <h2 className="section-title text-white mb-6">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-white/45 text-lg leading-relaxed mb-12 max-w-xl mx-auto">
            Available for web development projects, hosting infrastructure work, Minecraft server development, and game server consulting.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <a href="mailto:afifayan@piecore.xyz" className="btn-primary text-white rounded-sm flex items-center gap-2">
              <span className="relative z-10 flex items-center gap-2"><Mail className="w-4 h-4" /> Send Email</span>
            </a>
            <a href="https://piecore.xyz" target="_blank" rel="noopener noreferrer" className="btn-outline rounded-sm flex items-center gap-2">
              <Zap className="w-4 h-4" /> Visit PieCore™
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {LINKS.map((l, i) => (
              <motion.a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-5 border border-white/8 hover:border-white/15 transition-all duration-300 text-left group"
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${l.color}15`; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform"
                  style={{ background: `${l.color}15`, border: `1px solid ${l.color}25` }}>
                  <l.icon className="w-5 h-5" style={{ color: l.color }} />
                </div>
                <p className="font-mono text-xs text-white/30 tracking-wider uppercase mb-1">{l.label}</p>
                <p className="font-display font-semibold text-white text-sm break-all">{l.val}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
