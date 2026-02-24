import { Mail, LinkedinIcon, GithubIcon } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface ContactLink {
  href: string;
  icon: LucideIcon;
  label: string;
  color: string;
  external?: boolean;
}

export const contactLinks: ContactLink[] = [
  {
    href: 'mailto:yael2laguilarc@gmail.com',
    icon: Mail,
    label: 'yael2laguilarc@gmail.com',
    color: 'hover:border-cyan-500/50 hover:shadow-cyan-500/10',
  },
  {
    href: 'https://linkedin.com/in/yael-aguilar',
    icon: LinkedinIcon,
    label: 'LinkedIn',
    color: 'hover:border-blue-500/50 hover:shadow-blue-500/10',
    external: true,
  },
  {
    href: 'https://github.com/YaelAguilar',
    icon: GithubIcon,
    label: 'GitHub',
    color: 'hover:border-violet-500/50 hover:shadow-violet-500/10',
    external: true,
  },
];

export interface SocialLink {
  href: string;
  icon: LucideIcon;
  label: string;
  value: string;
  external?: boolean;
}

export const socialLinks: SocialLink[] = [
  {
    href: 'mailto:yael2laguilarc@gmail.com',
    icon: Mail,
    label: 'Email',
    value: 'yael2laguilarc@gmail.com',
  },
  {
    href: 'https://linkedin.com/in/yael-aguilar',
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: '/in/yael-aguilar',
    external: true,
  },
];
