import type { LucideIcon } from 'lucide-react';
import { Code2, Database, Cloud, Brain, Layers } from 'lucide-react';

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: string[];
  accentBorder: string;
  accentBg: string;
  accentText: string;
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Stack Principal',
    icon: Code2,
    skills: ['Python', 'TypeScript', 'Node.js', 'React', 'Django', 'MySQL', 'AWS', 'Docker'],
    accentBorder: 'border-cyan-500/20 hover:border-cyan-500/40',
    accentBg: 'bg-cyan-500/10',
    accentText: 'text-cyan-600 dark:text-cyan-400',
  },
  {
    title: 'Backend & Frameworks',
    icon: Layers,
    skills: ['Laravel', 'Express', 'Flask', 'Java', 'Go', 'PHP'],
    accentBorder: 'border-violet-500/20 hover:border-violet-500/40',
    accentBg: 'bg-violet-500/10',
    accentText: 'text-violet-600 dark:text-violet-400',
  },
  {
    title: 'Bases de Datos',
    icon: Database,
    skills: ['PostgreSQL', 'MongoDB', 'SQL Server'],
    accentBorder: 'border-emerald-500/20 hover:border-emerald-500/40',
    accentBg: 'bg-emerald-500/10',
    accentText: 'text-emerald-600 dark:text-emerald-400',
  },
  {
    title: 'Computer Vision & ML',
    icon: Brain,
    skills: ['OpenCV', 'YOLO'],
    accentBorder: 'border-amber-500/20 hover:border-amber-500/40',
    accentBg: 'bg-amber-500/10',
    accentText: 'text-amber-600 dark:text-amber-400',
  },
  {
    title: 'Arquitectura',
    icon: Cloud,
    skills: ['MVC', 'Hexagonal', 'Clean Architecture'],
    accentBorder: 'border-rose-500/20 hover:border-rose-500/40',
    accentBg: 'bg-rose-500/10',
    accentText: 'text-rose-600 dark:text-rose-400',
  },
];
