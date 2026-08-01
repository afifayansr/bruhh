import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { api, type PublicSite, type SocialLink } from "./api";
import { fetchLinks } from "./links";

type Ctx = {
  site: PublicSite | null;
  links: SocialLink[];
  loading: boolean;
  refresh: () => Promise<void>;
};

const Ctx = createContext<Ctx>({
  site: null,
  links: [],
  loading: true,
  refresh: async () => {},
});

export function SiteProvider({ children }: { children: ReactNode }) {
  const [site, setSite] = useState<PublicSite | null>(null);
  const [links, setLinks] = useState<SocialLink[]>([]);
  const [loading, setLoading] = useState(true);

  const refresh = async () => {
    try {
      const siteData = await api.getSite();
      setSite(siteData);
      if (siteData.links && siteData.links.length) {
        setLinks(siteData.links);
        localStorage.setItem("portfolio:socialLinks", JSON.stringify({ data: siteData.links, ts: Date.now() }));
      } else {
        const fileLinks = await fetchLinks();
        setLinks(fileLinks);
      }
    } catch {
      try {
        const fileLinks = await fetchLinks();
        setLinks(fileLinks);
      } catch {
        /* use empty links */
      }
    } finally {
      setLoading(false);
    }
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

  return (
    <Ctx.Provider value={{ site, links, loading, refresh }}>
      {children}
    </Ctx.Provider>
  );
}

export const useSite = () => useContext(Ctx);
