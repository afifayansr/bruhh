import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { useSite } from "@/lib/SiteContext";
import { iconFor } from "@/lib/icons";

const NAV = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { links } = useSite();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: "spring" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b border-white/5" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 h-20 flex items-center justify-between" aria-label="Main navigation">
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl overflow-hidden group-hover:scale-110 transition-transform ring-1 ring-white/15">
            <img src="/assets/profile.png" alt="Afifayan" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div>
            <span className="font-display font-bold text-lg gradient-text">Afifayan</span>
            <p className="font-mono text-[9px] text-white/20 -mt-0.5 tracking-widest">piecore.xyz</p>
          </div>
        </a>

        <ul className="hidden md:flex items-center gap-7">
          {NAV.map((n) => (
            <li key={n.label}>
              <a
                href={n.href}
                className="font-display text-sm tracking-wide text-white/50 hover:text-white transition-colors relative group"
              >
                {n.label}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                  style={{
                    background:
                      "linear-gradient(90deg,hsl(262,83%,70%),hsl(188,100%,55%))",
                  }}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          {links.slice(0, 4).map((l, i) => {
            const Icon = iconFor(l.icon);
            return (
              <motion.a
                key={l.id}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="w-8 h-8 rounded-full glass flex items-center justify-center text-white/40 hover:text-white border border-white/8 hover:border-white/20 transition-all"
              >
                <Icon className="w-3.5 h-3.5" />
              </motion.a>
            );
          })}
          <a
            href="https://piecore.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-white rounded-sm text-xs px-5 py-2.5"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5" /> PieCore™
            </span>
          </a>
        </div>

        <motion.button
          className="md:hidden text-white/70 hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.9 }}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass md:hidden border-t border-white/5 px-6 py-8 flex flex-col gap-5"
          >
            {NAV.map((n) => (
              <a
                key={n.label}
                href={n.href}
                className="font-display text-white/70 hover:text-white text-lg"
                onClick={() => setOpen(false)}
              >
                {n.label}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-2">
              {links.slice(0, 4).map((l) => {
                const Icon = iconFor(l.icon);
                return (
                  <a
                    key={l.id}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full glass flex items-center justify-center text-white/50 hover:text-white border border-white/8 hover:border-white/20"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
            <a
              href="https://piecore.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-white w-fit rounded-sm mt-2"
            >
              <span className="relative z-10">PieCore™ Hosting</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
