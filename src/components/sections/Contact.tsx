import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useSite } from "@/lib/SiteContext";
import { iconFor } from "@/lib/icons";
import { api } from "@/lib/api";

export function Contact() {
  const { links } = useSite();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    try {
      await api.contact({
        name: form.name,
        email: form.email,
        message: form.message,
      });
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-32 relative z-10">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-[0.05] blur-3xl"
          style={{
            background:
              "radial-gradient(ellipse,hsl(262,83%,58%),hsl(188,100%,50%),transparent 70%)",
          }}
        />
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto text-center"
        >
          <div className="mb-4">
            <span className="section-tag">06 — Contact</span>
          </div>
          <h2 className="section-title text-white mb-6">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-white/45 text-lg leading-relaxed mb-16 max-w-xl mx-auto">
            Feel free to reach out if you want to chat, collaborate, or just
            say hi. I'm always happy to connect.
          </p>

          <div className="grid lg:grid-cols-2 gap-10">
            <motion.form
              onSubmit={onSubmit}
              className="space-y-4 text-left"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                <label htmlFor="contact-name" className="block text-xs font-mono text-white/30 tracking-widest uppercase mb-2">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full glass rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 border border-white/8 focus:border-purple-500/50 focus:outline-none bg-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono text-white/30 tracking-widest uppercase mb-2">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="w-full glass rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 border border-white/8 focus:border-purple-500/50 focus:outline-none bg-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-mono text-white/30 tracking-widest uppercase mb-2">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="What can I help you with?"
                  className="w-full glass rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 border border-white/8 focus:border-purple-500/50 focus:outline-none bg-transparent resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={
                  status === "sending" ||
                  !form.name ||
                  !form.email ||
                  !form.message
                }
                whileTap={{ scale: 0.97 }}
                className="btn-primary text-white rounded-xl flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {status === "sending" ? (
                    "Sending…"
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Send Message
                    </>
                  )}
                </span>
              </motion.button>

              {status === "sent" && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-2 text-green-400 text-sm font-mono"
                >
                  <CheckCircle className="w-4 h-4" />
                  Message sent! I'll get back to you soon.
                </motion.p>
              )}
              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-2 text-red-400 text-sm font-mono"
                >
                  <AlertCircle className="w-4 h-4" />
                  Something went wrong. Try again or email me directly.
                </motion.p>
              )}
            </motion.form>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <motion.a
                href="mailto:afifayan@piecore.xyz"
                className="btn-primary text-white rounded-xl flex items-center justify-center gap-2 w-full"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Mail className="w-4 h-4" /> Send Email
                </span>
              </motion.a>

              <div>
                <p className="font-mono text-xs text-white/20 tracking-widest uppercase mb-4">
                  Connect on
                </p>
                <div className="flex flex-col gap-3">
                  {links.map((l, i) => {
                    const Icon = iconFor(l.icon);
                    return (
                      <motion.a
                        key={l.id}
                        href={l.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 }}
                        whileHover={{ x: 4, scale: 1.05 }}
                        className="glass rounded-xl px-5 py-3 flex items-center gap-3 border border-white/8 hover:border-white/20 transition-all group"
                        onMouseEnter={
                          (e) =>
                            (e.currentTarget.style.boxShadow =
                              "0 0 20px rgba(139,92,246,0.1)")
                        }
                        onMouseLeave={
                          (e) => (e.currentTarget.style.boxShadow = "none")
                        }
                      >
                        <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <Icon className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                        </div>
                        <div className="text-left">
                          <p className="font-display font-semibold text-white text-sm">
                            {l.label}
                          </p>
                          <p className="text-white/30 text-xs truncate">
                            {l.url}
                          </p>
                        </div>
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
