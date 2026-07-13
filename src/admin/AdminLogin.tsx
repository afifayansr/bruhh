import { useState } from "react";
import { motion } from "framer-motion";
import { api } from "@/lib/api";

export function AdminLogin({ onLogin }: { onLogin: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); setError("");
    try {
      await api.login(email, password);
      onLogin();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#060810] px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-sm glass rounded-2xl p-8 border border-white/10"
      >
        <div className="mb-8 text-center">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
            style={{ background: "linear-gradient(135deg,hsl(262,83%,58%),hsl(188,100%,50%))" }}>
            <span className="font-display font-bold text-2xl text-white">A</span>
          </div>
          <h1 className="font-display font-bold text-2xl text-white">Admin Login</h1>
          <p className="text-white/30 text-sm mt-1">Portfolio Dashboard</p>
        </div>

        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="block text-xs font-mono text-white/30 tracking-widest uppercase mb-2">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required
              placeholder="admin@email.com"
              className="w-full glass rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 border border-white/8 focus:border-purple-500/50 focus:outline-none bg-transparent" />
          </div>
          <div>
            <label className="block text-xs font-mono text-white/30 tracking-widest uppercase mb-2">Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required
              placeholder="••••••••"
              className="w-full glass rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 border border-white/8 focus:border-purple-500/50 focus:outline-none bg-transparent" />
          </div>
          {error && <p className="text-red-400 text-xs text-center">{error}</p>}
          <button type="submit" disabled={loading}
            className="btn-primary w-full text-white rounded-xl flex items-center justify-center gap-2 disabled:opacity-50 mt-6">
            <span className="relative z-10">
              {loading ? "Signing in…" : "Sign In"}
            </span>
          </button>
        </form>

        <p className="text-center mt-6">
          <a href="/" className="text-xs text-white/20 hover:text-white/50 transition-colors">← Back to Portfolio</a>
        </p>
      </motion.div>
    </div>
  );
}
