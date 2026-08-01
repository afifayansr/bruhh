import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowDown, ExternalLink, Mail, ChevronRight, FolderGit2 } from "lucide-react";
import { useSite } from "@/lib/SiteContext";
import { iconFor } from "@/lib/icons";

const ROLES = [
  "MERN Stack Developer",
  "Full Stack Web Developer",
  "Software Maker",
  "Web Designer",
  "Student",
];

function Typewriter({ words, speed = 80, pause = 1800 }: { words: string[]; speed?: number; pause?: number }) {
  const [wi, setWi] = useState(0);
  const [ci, setCi] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wi] ?? "";
    const delay = deleting ? speed / 2 : ci === word.length ? pause : speed;
    const t = setTimeout(() => {
      if (!deleting && ci < word.length) setCi((c) => c + 1);
      else if (!deleting && ci === word.length) setDeleting(true);
      else if (deleting && ci > 0) setCi((c) => c - 1);
      else {
        setDeleting(false);
        setWi((w) => (w + 1) % words.length);
      }
    }, delay);
    return () => clearTimeout(t);
  }, [wi, ci, deleting, words, speed, pause]);

  return (
    <span className="gradient-text">
      {(words[wi] ?? "").slice(0, ci)}
      <span className="animate-blink text-purple-400">|</span>
    </span>
  );
}

function ProfileTilt() {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const spring = { type: "spring", stiffness: 300, damping: 20 };
  const sx = useSpring(x, spring);
  const sy = useSpring(y, spring);

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    x.set(dx * 8);
    y.set(dy * 8);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ perspective: "1000px" }}
      className="relative w-72 md:w-[340px]"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <motion.img
        src="/assets/profile.png"
        alt="Afifayan — MERN Stack Developer & Founder of PieCore™"
        style={{
          rotateX: sy,
          rotateY: sx,
          transformStyle: "preserve-3d",
        }}
        className="w-full h-full object-cover object-top rounded-2xl shadow-2xl"
        loading="eager"
        onError={(e) => {
          const t = e.currentTarget;
          t.style.display = "none";
          const p = t.parentElement;
          if (p) {
            p.style.cssText +=
              ";background:linear-gradient(135deg,hsl(262,83%,15%),hsl(188,100%,8%));display:flex;align-items:center;justify-content:center";
            p.innerHTML =
              '<span style="font-size:100px;font-weight:900;color:hsl(262,83%,65%)">A</span>';
          }
        }}
      />
    </motion.div>
  );
}

export function Hero() {
  const { links } = useSite();

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center pt-24 pb-12 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.25] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 35%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 35%, black 40%, transparent 100%)",
        }}
      />

      <div
        className="blob w-[500px] h-[500px] opacity-[0.18]"
        style={{
          top: "20%",
          right: "20%",
          background: "radial-gradient(circle,hsl(262,83%,58%),transparent 70%)",
          animation: "float 9s ease-in-out infinite",
        }}
      />
      <div
        className="blob w-[380px] h-[380px] opacity-[0.12]"
        style={{
          bottom: "15%",
          left: "10%",
          background: "radial-gradient(circle,hsl(188,100%,50%),transparent 70%)",
          animation: "float 11s ease-in-out infinite reverse",
        }}
      />
      <div
        className="blob w-[250px] h-[250px] opacity-[0.08]"
        style={{
          top: "50%",
          left: "40%",
          background: "radial-gradient(circle,hsl(320,70%,60%),transparent 70%)",
          animation: "float 7s ease-in-out infinite",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[380px_1fr] gap-16 items-center">
          {/* Left col — profile + social icons */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="flex flex-col items-center justify-center gap-8"
          >
            <div className="relative">
              <motion.div
                animate={{
                  scale: [1, 1.03, 1],
                  rotate: [0, 1, -1, 0],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <div
                  className="w-64 h-64 md:w-80 md:h-80 rounded-full blur-[6px]"
                  style={{
                    background:
                      "radial-gradient(circle,hsl(262,83%,58%),hsl(239,7,43%),transparent 70%)",
                  }}
                />
              </motion.div>

              <div className="absolute inset-0 flex items-center justify-center">
                <ProfileTilt />
              </div>

              <motion.div
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute -inset-4 rounded-[28px] border blur-[2px]"
                style={{ borderColor: "hsl(239,7,43%,0.15)" }}
              />
            </div>

            {/* Social icons — cleanly below profile */}
            <motion.div
              className="flex gap-3 flex-wrap justify-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              {links.map((l, i) => {
                const Icon = iconFor(l.icon);
                return (
                  <motion.a
                    key={l.id}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 + i * 0.1 }}
                    whileHover={{ scale: 1.25, rotate: 5 }}
                    title={l.label}
                    className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/50 hover:text-white border border-white/10 hover:border-purple-400/40 transition-all group"
                    style={{ boxShadow: "0 0 16px rgba(139,92,246,0.15)" }}
                  >
                    <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right col — text */}
          <motion.div
            className="flex flex-col gap-7"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <motion.span
              className="section-tag flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="w-8 h-px" style={{ background: "hsl(262,83%,58%)" }} />
              Open to new opportunities
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: "hsl(239,7,43%)" }}
              />
            </motion.span>

            <motion.h1
              className="font-display font-bold leading-[1.05] text-white"
              style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
            >
              Hi, I'm <span className="gradient-text">Afifayan</span>
            </motion.h1>

            <motion.p
              className="text-2xl md:text-3xl text-white/60 font-light h-9"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
            >
              I'm a <Typewriter words={ROLES} />
            </motion.p>

            <motion.p
              className="text-base md:text-lg text-white/50 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
            >
              MERN Stack Developer and Founder of PieCore™ Cloud Hosting. I build
              full-stack web applications, Discord bots, Minecraft server
              infrastructure, and scalable cloud hosting solutions.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
            >
              <a
                href="#projects"
                className="btn-primary text-white rounded-sm flex items-center gap-2"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <FolderGit2 className="w-4 h-4" /> View Projects{" "}
                  <ChevronRight className="w-4 h-4" />
                </span>
              </a>
              <a
                href="#contact"
                className="btn-outline rounded-sm flex items-center gap-2"
              >
                <Mail className="w-4 h-4" /> Contact Me
              </a>
            </motion.div>

            <motion.a
              href="https://piecore.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-white/35 hover:text-cyan-400 transition-colors w-fit -mt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75 }}
            >
              <ExternalLink className="w-3 h-3" />
              or visit my company, PieCore™ Cloud Hosting ↗
            </motion.a>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="font-mono text-[9px] tracking-[.4em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
