import { motion } from "framer-motion";
import { Code2, Server, Database } from "lucide-react";

const SERVICES = [
  {
    Icon: Code2,
    title: "Web Development",
    desc: "Building simple, responsive websites and interfaces with HTML, CSS, and JavaScript.",
    color: "hsl(262,83%,65%)",
  },
  {
    Icon: Server,
    title: "Backend Basics",
    desc: "Learning to build small backend services and APIs with Node.js.",
    color: "hsl(188,100%,55%)",
  },
  {
    Icon: Database,
    title: "Hosting & Databases",
    desc: "Experimenting with MongoDB for data storage and Pterodactyl for server hosting.",
    color: "hsl(45,100%,60%)",
  },
];

export function Services() {
  return (
    <section id="services" className="py-32 relative z-10">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] opacity-[0.04] blur-3xl rounded-full"
          style={{
            background:
              "radial-gradient(ellipse,hsl(262,83%,58%),hsl(188,100%,50%),transparent)",
          }}
        />
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-4">
            <span className="section-tag">02 — What I Do</span>
          </div>
          <h2 className="section-title text-white mb-4">
            What I'm <span className="gradient-text">Learning</span>
          </h2>
          <p className="text-white/40 text-lg mb-16 max-w-xl">
            Still early in my journey — here's what I'm focused on building
            and improving right now.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl p-6 group relative overflow-hidden border border-white/5 hover:border-white/12 transition-all duration-300"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 0 30px " + s.color + "10";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(90deg,transparent," + s.color + ",transparent)",
                }}
              />
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200"
                style={{
                  background: s.color + "15",
                  border: "1px solid " + s.color + "25",
                }}
              >
                <s.Icon className="w-5 h-5" style={{ color: s.color }} />
              </div>
              <h3 className="font-display font-semibold text-white text-sm mb-2">
                {s.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
