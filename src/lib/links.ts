import type { SocialLink } from "./api";

const STORAGE_KEY = "portfolio:socialLinks";
const CACHE_TTL = 1000 * 60 * 60;

function tryGetCache(): SocialLink[] | null {
  try {
    const cached = localStorage.getItem(STORAGE_KEY);
    if (!cached) return null;
    const { data, ts } = JSON.parse(cached);
    if (Date.now() - ts < CACHE_TTL) return sortLinks(data);
    return null;
  } catch {
    return null;
  }
}

function trySetCache(data: SocialLink[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ data, ts: Date.now() }));
  } catch {}
}

export async function fetchLinks(): Promise<SocialLink[]> {
  const cached = tryGetCache();
  if (cached) return cached;

  const res = await fetch("/links.json", { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to load social links");
  const data: SocialLink[] = await res.json();
  trySetCache(data);
  return sortLinks(data);
}

function sortLinks(links: SocialLink[]): SocialLink[] {
  return [...links].sort(
    (a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0)
  );
}
