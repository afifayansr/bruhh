import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LogOut, Settings as SettingsIcon, Link2, Music, MessageSquare, Save, Plus, Trash2, ChevronRight } from "lucide-react";
import { api, type Settings, type SocialLink, type Song, type Message } from "@/lib/api";
import { useSite } from "@/lib/SiteContext";

type Tab = "settings" | "links" | "songs" | "messages";

function TabBtn({ active, onClick, icon: Icon, label }: { active: boolean; onClick: () => void; icon: React.ComponentType<{ className?: string }>; label: string }) {
  return (
    <button onClick={onClick}
      className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-display font-medium transition-all ${active ? "text-white" : "text-white/40 hover:text-white/70"}`}
      style={active ? { background: "hsl(262,83%,58%,0.15)", border: "1px solid hsl(262,83%,58%,0.3)" } : {}}>
      <Icon className="w-4 h-4" /> {label}
    </button>
  );
}

export function AdminDashboard({ onLogout }: { onLogout: () => void }) {
  const { refresh } = useSite();
  const [tab, setTab] = useState<Tab>("settings");
  const [settings, setSettings] = useState<Settings | null>(null);
  const [links, setLinks] = useState<SocialLink[]>([]);
  const [songs, setSongs] = useState<Song[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  // New link form
  const [newLink, setNewLink] = useState({ label: "", url: "", icon: "", sortOrder: 0 });
  // New song form
  const [newSong, setNewSong] = useState({ title: "", artist: "", url: "", coverUrl: "", sortOrder: 0 });

  useEffect(() => {
    api.getSettings().then(setSettings);
    api.getLinks().then(setLinks);
    api.getSongs().then(setSongs);
    api.getMessages().then(setMessages);
  }, []);

  const saveSettings = async () => {
    if (!settings) return;
    setSaving(true);
    try {
      await api.updateSettings(settings);
      await refresh();
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } finally { setSaving(false); }
  };

  const logout = async () => { await api.logout(); onLogout(); };

  const addLink = async () => {
    if (!newLink.label || !newLink.url || !newLink.icon) return;
    const item = await api.createLink(newLink);
    setLinks((l) => [...l, item]);
    setNewLink({ label: "", url: "", icon: "", sortOrder: 0 });
  };

  const removeLink = async (id: number) => {
    await api.deleteLink(id);
    setLinks((l) => l.filter((x) => x.id !== id));
  };

  const addSong = async () => {
    if (!newSong.title || !newSong.artist || !newSong.url) return;
    const item = await api.createSong(newSong);
    setSongs((s) => [...s, item]);
    setNewSong({ title: "", artist: "", url: "", coverUrl: "", sortOrder: 0 });
  };

  const removeSong = async (id: number) => {
    await api.deleteSong(id);
    setSongs((s) => s.filter((x) => x.id !== id));
  };

  const removeMessage = async (id: number) => {
    await api.deleteMessage(id);
    setMessages((m) => m.filter((x) => x.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#060810] text-white">
      {/* Header */}
      <div className="glass border-b border-white/5 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg,hsl(262,83%,58%),hsl(188,100%,50%))" }}>
            <span className="font-display font-bold text-sm">A</span>
          </div>
          <span className="font-display font-semibold">Portfolio Admin</span>
        </div>
        <div className="flex items-center gap-3">
          <a href="/" target="_blank" className="text-xs text-white/30 hover:text-white flex items-center gap-1 transition-colors">
            View Site <ChevronRight className="w-3 h-3" />
          </a>
          <button onClick={logout} className="flex items-center gap-2 text-xs text-white/30 hover:text-red-400 transition-colors">
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8 max-w-4xl">
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          <TabBtn active={tab === "settings"} onClick={() => setTab("settings")} icon={SettingsIcon} label="Settings" />
          <TabBtn active={tab === "links"} onClick={() => setTab("links")} icon={Link2} label={`Links (${links.length})`} />
          <TabBtn active={tab === "songs"} onClick={() => setTab("songs")} icon={Music} label={`Songs (${songs.length})`} />
          <TabBtn active={tab === "messages"} onClick={() => setTab("messages")} icon={MessageSquare} label={`Messages (${messages.length})`} />
        </div>

        <motion.div key={tab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>

          {/* Settings */}
          {tab === "settings" && settings && (
            <div className="space-y-5">
              {([
                ["Brand Name", "brandName", "text"],
                ["Tagline", "tagline", "text"],
                ["Shop URL", "shopUrl", "url"],
                ["Contact Email", "contactEmail", "email"],
                ["CV / Resume URL", "cvUrl", "url"],
                ["Logo URL", "logoUrl", "url"],
                ["Hero Image URL", "heroImageUrl", "url"],
                ["About Image URL", "aboutImageUrl", "url"],
                ["Shop Image URL", "shopImageUrl", "url"],
                ["Background Image URL", "backgroundImageUrl", "url"],
                ["Accent Color", "accentColor", "text"],
              ] as [string, keyof Settings, string][]).map(([label, key, type]) => (
                <div key={key}>
                  <label className="block text-xs font-mono text-white/30 tracking-widest uppercase mb-2">{label}</label>
                  <input type={type} value={String(settings[key] ?? "")}
                    onChange={(e) => setSettings((s) => s ? { ...s, [key]: e.target.value } : s)}
                    className="w-full glass rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 border border-white/8 focus:border-purple-500/50 focus:outline-none bg-transparent" />
                </div>
              ))}
              <button onClick={saveSettings} disabled={saving}
                className="btn-primary text-white rounded-xl flex items-center gap-2 disabled:opacity-50">
                <span className="relative z-10 flex items-center gap-2">
                  <Save className="w-4 h-4" /> {saved ? "Saved!" : saving ? "Saving…" : "Save Settings"}
                </span>
              </button>
            </div>
          )}

          {/* Links */}
          {tab === "links" && (
            <div className="space-y-4">
              {links.map((l) => (
                <div key={l.id} className="glass rounded-xl px-5 py-4 flex items-center justify-between border border-white/8">
                  <div>
                    <p className="font-display font-medium text-white">{l.label}</p>
                    <p className="text-xs text-white/30 truncate max-w-xs">{l.url}</p>
                    <p className="text-xs text-purple-400/60 font-mono">{l.icon}</p>
                  </div>
                  <button onClick={() => removeLink(l.id)} className="text-white/20 hover:text-red-400 transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
              <div className="glass rounded-xl p-5 border border-white/8 space-y-3">
                <p className="text-xs font-mono text-white/30 tracking-widest uppercase">Add New Link</p>
                <div className="grid grid-cols-2 gap-3">
                  {(["label", "url", "icon"] as const).map((field) => (
                    <input key={field} placeholder={field} value={newLink[field]}
                      onChange={(e) => setNewLink((x) => ({ ...x, [field]: e.target.value }))}
                      className="glass rounded-lg px-3 py-2 text-sm text-white placeholder-white/20 border border-white/8 bg-transparent focus:outline-none focus:border-purple-500/50" />
                  ))}
                  <input type="number" placeholder="sortOrder" value={newLink.sortOrder}
                    onChange={(e) => setNewLink((x) => ({ ...x, sortOrder: Number(e.target.value) }))}
                    className="glass rounded-lg px-3 py-2 text-sm text-white placeholder-white/20 border border-white/8 bg-transparent focus:outline-none" />
                </div>
                <p className="text-xs text-white/20">Icon: facebook, youtube, discord, github, twitter, instagram, linkedin, telegram, whatsapp, tiktok</p>
                <button onClick={addLink} className="btn-primary text-white rounded-lg text-xs flex items-center gap-2">
                  <span className="relative z-10 flex items-center gap-2"><Plus className="w-3.5 h-3.5" /> Add Link</span>
                </button>
              </div>
            </div>
          )}

          {/* Songs */}
          {tab === "songs" && (
            <div className="space-y-4">
              {songs.map((s) => (
                <div key={s.id} className="glass rounded-xl px-5 py-4 flex items-center justify-between border border-white/8">
                  <div>
                    <p className="font-display font-medium text-white">{s.title}</p>
                    <p className="text-xs text-white/30">{s.artist}</p>
                    <p className="text-xs text-purple-400/60 font-mono truncate max-w-xs">{s.url}</p>
                  </div>
                  <button onClick={() => removeSong(s.id)} className="text-white/20 hover:text-red-400 transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
              <div className="glass rounded-xl p-5 border border-white/8 space-y-3">
                <p className="text-xs font-mono text-white/30 tracking-widest uppercase">Add New Song</p>
                <div className="grid grid-cols-2 gap-3">
                  {(["title", "artist", "url", "coverUrl"] as const).map((field) => (
                    <input key={field} placeholder={field} value={newSong[field]}
                      onChange={(e) => setNewSong((x) => ({ ...x, [field]: e.target.value }))}
                      className="glass rounded-lg px-3 py-2 text-sm text-white placeholder-white/20 border border-white/8 bg-transparent focus:outline-none focus:border-purple-500/50" />
                  ))}
                </div>
                <button onClick={addSong} className="btn-primary text-white rounded-lg text-xs flex items-center gap-2">
                  <span className="relative z-10 flex items-center gap-2"><Plus className="w-3.5 h-3.5" /> Add Song</span>
                </button>
              </div>
            </div>
          )}

          {/* Messages */}
          {tab === "messages" && (
            <div className="space-y-4">
              {messages.length === 0 && <p className="text-white/30 text-sm text-center py-12">No messages yet.</p>}
              {messages.map((m) => (
                <div key={m.id} className="glass rounded-xl p-5 border border-white/8">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <p className="font-display font-medium text-white">{m.name}</p>
                      <p className="text-xs text-purple-400/70">{m.email}</p>
                      <p className="text-xs text-white/20 font-mono mt-1">{new Date(m.createdAt).toLocaleString()}</p>
                    </div>
                    <button onClick={() => removeMessage(m.id)} className="text-white/20 hover:text-red-400 transition-colors flex-shrink-0">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed">{m.message}</p>
                </div>
              ))}
            </div>
          )}

        </motion.div>
      </div>
    </div>
  );
}
