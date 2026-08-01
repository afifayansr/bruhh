import {
  SiFacebook,
  SiYoutube,
  SiDiscord,
  SiGithub,
  SiX,
  SiInstagram,
  SiTiktok,
  SiTelegram,
  SiWhatsapp,
} from "react-icons/si";

import {
  Mail,
  Link,
  Linkedin,
} from "lucide-react";

import type { ComponentType } from "react";

const MAP: Record<string, ComponentType<{ className?: string }>> = {
  facebook: SiFacebook,
  youtube: SiYoutube,
  discord: SiDiscord,
  github: SiGithub,
  twitter: SiX,
  x: SiX,
  instagram: SiInstagram,
  linkedin: Linkedin,
  tiktok: SiTiktok,
  telegram: SiTelegram,
  whatsapp: SiWhatsapp,
  mail: Mail,
  email: Mail,
  link: Link,
};

export function iconFor(name: string): ComponentType<{ className?: string }> {
  if (!name) return Link;
  return MAP[name.toLowerCase()] ?? Link;
}

export function sortedIcons(names: string[]): ComponentType<{ className?: string }>[] {
  return names.map((n) => iconFor(n));
}
