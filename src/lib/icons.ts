import {
  SiFacebook,
  SiYoutube,
  SiDiscord,
  SiGithub,
  SiX,
  SiInstagram,
  SiTiktok,
  SiTelegram,
  SiWhatsapp
} from "react-icons/si";

import {
  Link,
  Linkedin
} from "lucide-react";

import type { ComponentType } from "react";

const MAP: Record<string, ComponentType<{ className?: string }>> = {
  facebook: SiFacebook,
  youtube: SiYoutube,
  discord: SiDiscord,
  github: SiGithub,
  twitter: SiX,
  instagram: SiInstagram,
  linkedin: Linkedin,
  tiktok: SiTiktok,
  telegram: SiTelegram,
  whatsapp: SiWhatsapp,
};

export function iconFor(name: string): ComponentType<{ className?: string }> {
  return MAP[name.toLowerCase()] ?? Link;
}