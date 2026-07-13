export interface Settings {
  id: number; brandName: string; logoUrl: string; tagline: string;
  shopUrl: string; contactEmail: string; backgroundImageUrl: string;
  heroImageUrl: string; aboutImageUrl: string; shopImageUrl: string;
  cvUrl: string; accentColor: string;
}
export interface SocialLink { id: number; label: string; url: string; icon: string; sortOrder: number; }
export interface Song { id: number; title: string; artist: string; url: string; coverUrl: string; sortOrder: number; }
export interface Message { id: number; name: string; email: string; message: string; createdAt: string; }
export interface PublicSite { settings: Settings; links: SocialLink[]; songs: Song[]; }

const BASE = "/api";

async function req<T>(path: string, opts: RequestInit = {}): Promise<T> {
  const r = await fetch(BASE + path, { credentials: "include", headers: { "Content-Type": "application/json" }, ...opts });
  if (!r.ok) { const e = await r.json().catch(() => ({})); throw new Error((e as { error?: string }).error ?? r.statusText); }
  if (r.status === 204) return undefined as T;
  return r.json();
}

export const api = {
  getSite: () => req<PublicSite>("/public/site"),
  login: (email: string, password: string) => req<{ ok: boolean }>("/auth/login", { method: "POST", body: JSON.stringify({ email, password }) }),
  logout: () => req<void>("/auth/logout", { method: "POST" }),
  me: () => req<{ email: string; ok: boolean }>("/auth/me"),
  contact: (d: { name: string; email: string; message: string }) => req<{ ok: boolean }>("/contact", { method: "POST", body: JSON.stringify(d) }),
  // Admin
  getSettings: () => req<Settings>("/admin/settings"),
  updateSettings: (d: Partial<Settings>) => req<Settings>("/admin/settings", { method: "PUT", body: JSON.stringify(d) }),
  getLinks: () => req<SocialLink[]>("/admin/links"),
  createLink: (d: Omit<SocialLink, "id">) => req<SocialLink>("/admin/links", { method: "POST", body: JSON.stringify(d) }),
  updateLink: (id: number, d: Partial<SocialLink>) => req<SocialLink>(`/admin/links/${id}`, { method: "PUT", body: JSON.stringify(d) }),
  deleteLink: (id: number) => req<void>(`/admin/links/${id}`, { method: "DELETE" }),
  getSongs: () => req<Song[]>("/admin/songs"),
  createSong: (d: Omit<Song, "id">) => req<Song>("/admin/songs", { method: "POST", body: JSON.stringify(d) }),
  deleteSong: (id: number) => req<void>(`/admin/songs/${id}`, { method: "DELETE" }),
  getMessages: () => req<Message[]>("/admin/messages"),
  deleteMessage: (id: number) => req<void>(`/admin/messages/${id}`, { method: "DELETE" }),
};
