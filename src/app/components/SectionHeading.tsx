import React from "react";
import { motion } from 'motion/react';
import type { LucideIcon } from 'lucide-react';

interface SectionHeadingProps {
  icon: LucideIcon;
  label: string;
  title: string;
  gradient?: string;
}

export function SectionHeading({
  icon: Icon,
  label,
  title,
  gradient = 'from-cyan-400 to-blue-500',
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="mb-14"
    >
      <div className="flex items-center gap-2 mb-4">
        <div className={`p-2 rounded-lg bg-gradient-to-br ${gradient} bg-opacity-10`}>
          <Icon className="w-4 h-4 text-white" />
        </div>
        <span
          className="text-[0.75rem] tracking-wider uppercase text-gray-500"
          style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 500 }}
        >
          {label}
        </span>
      </div>
      <h2
        className="text-[2rem] md:text-[2.5rem] text-white tracking-tight"
        style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}
      >
        {title}
      </h2>
    </motion.div>
  );
}
