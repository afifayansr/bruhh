import { motion } from "framer-motion";
import { useSite } from "@/lib/SiteContext";
import { iconFor } from "@/lib/icons";
import { Zap } from "lucide-react";

export function Footer() {
  const { links } = useSite();

  return (
    <footer className="border-t border-white/5 py-10 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg overflow-hidden ring-1 ring-white/15">
              <img src="/assets/profile.png" alt="Afifayan" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div>
              <span className="font-display font-bold text-lg gradient-text">Afifayan</span>
              <p className="font-mono text-[9px] text-white/20 tracking-widest">piecore.xyz</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {links.map((l, i) => {
              const Icon = iconFor(l.icon);
              return (
                <motion.a
                  key={l.id}
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.25, rotate: 5 }}
                  transition={{ delay: i * 0.06, type: "spring", stiffness: 400 }}
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center text-white/50 hover:text-white border border-white/8 hover:border-white/20 transition-all group"
                  style={{ boxShadow: "0 0 12px rgba(139,92,246,0.1)" }}
                >
                  <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </motion.a>
              );
            })}
          </div>

          <p className="font-mono text-xs text-white/20 text-center">
            © {new Date().getFullYear()} Afifayan · Founder of{" "}
            <a
              href="https://piecore.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-text hover:opacity-80 transition-opacity"
            >
              PieCore™ Cloud Hosting
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
