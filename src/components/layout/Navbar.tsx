import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";

const NAV = [
  { label: "About",      href: "#about" },
  { label: "Skills",     href: "#skills" },
  { label: "Projects",   href: "#projects" },
  { label: "Services",   href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Contact",    href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.6, type: "spring" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass border-b border-white/5" : ""}`}
    >
      <nav className="container mx-auto px-6 h-20 flex items-center justify-between" aria-label="Main navigation">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl overflow-hidden group-hover:scale-110 transition-transform ring-1 ring-white/15"
            style={{ boxShadow: "0 0 20px hsl(262,83%,58%,0.35)" }}>
            <img src="/profile.png" alt="Afifayan" className="w-full h-full object-cover" />
          </div>
          <div>
            <span className="font-display font-bold text-lg gradient-text">Afifayan</span>
            <p className="font-mono text-[9px] text-white/25 -mt-0.5 tracking-widest">piecore.xyz</p>
          </div>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7">
          {NAV.map((n) => (
            <li key={n.label}>
              <a href={n.href}
                className="font-display text-sm tracking-wide text-white/50 hover:text-white transition-colors relative group">
                {n.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                  style={{ background: "linear-gradient(90deg,hsl(262,83%,70%),hsl(188,100%,55%))" }} />
              </a>
            </li>
          ))}
          <li>
            <a href="https://piecore.xyz" target="_blank" rel="noopener noreferrer"
              className="btn-primary text-white rounded-sm text-xs px-5 py-2.5">
              <span className="relative z-10 flex items-center gap-1.5"><Zap className="w-3.5 h-3.5" /> PieCore™</span>
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button className="md:hidden text-white/70 hover:text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="glass md:hidden border-t border-white/5 px-6 py-8 flex flex-col gap-5">
            {NAV.map((n) => (
              <a key={n.label} href={n.href} className="font-display text-white/70 hover:text-white text-lg"
                onClick={() => setOpen(false)}>{n.label}</a>
            ))}
            <a href="https://piecore.xyz" target="_blank" rel="noopener noreferrer"
              className="btn-primary text-white w-fit rounded-sm mt-2">
              <span className="relative z-10">PieCore™ Hosting</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
