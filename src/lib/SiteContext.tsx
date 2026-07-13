import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { api, type PublicSite } from "./api";

type Ctx = { site: PublicSite | null; loading: boolean; refresh: () => Promise<void> };
const Ctx = createContext<Ctx>({ site: null, loading: true, refresh: async () => {} });

export function SiteProvider({ children }: { children: ReactNode }) {
  const [site, setSite] = useState<PublicSite | null>(null);
  const [loading, setLoading] = useState(true);

  const refresh = async () => {
    try { setSite(await api.getSite()); } catch { /* use fallbacks */ } finally { setLoading(false); }
  };

  useEffect(() => { void refresh(); }, []);

  useEffect(() => {
    const url = site?.settings.backgroundImageUrl?.trim();
    document.body.style.backgroundImage = url
      ? `linear-gradient(rgba(6,8,16,0.82),rgba(6,8,16,0.95)),url("${url}")`
      : "";
    if (url) {
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundAttachment = "fixed";
      document.body.style.backgroundPosition = "center";
    }
  }, [site?.settings.backgroundImageUrl]);

  return <Ctx.Provider value={{ site, loading, refresh }}>{children}</Ctx.Provider>;
}

export const useSite = () => useContext(Ctx);
