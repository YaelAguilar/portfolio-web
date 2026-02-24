import React from "react";
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { socialLinks } from '../../data/contact';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="relative py-20 px-6">
      {/* Top border gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 max-w-md h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-white/10 to-transparent" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p
            className="text-[0.875rem] text-gray-400 dark:text-gray-600 mb-2"
            style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 400 }}
          >
            Contáctame
          </p>
          <h3
            className="text-[1.5rem] md:text-[2rem] text-gray-900 dark:text-white"
            style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}
          >
            Yael Cruz Aguilar
          </h3>
        </motion.div>

        {/* Contact links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-16"
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="group flex items-center gap-3 px-5 py-4 bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/[0.06] rounded-xl transition-all duration-300 hover:bg-gray-50 dark:hover:bg-white/[0.05] hover:border-gray-300 dark:hover:border-white/15"
            >
              <link.icon className="w-4 h-4 text-gray-400 dark:text-gray-600 group-hover:text-gray-900 dark:group-hover:text-white transition-colors shrink-0" />
              <div className="min-w-0 flex-1">
                <p
                  className="text-[0.6875rem] text-gray-400 dark:text-gray-600 uppercase tracking-wider"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  {link.label}
                </p>
                <p
                  className="text-[0.8125rem] text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors truncate"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 500 }}
                >
                  {link.value}
                </p>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-gray-300 dark:text-gray-700 group-hover:text-gray-900 dark:group-hover:text-white transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
            </a>
          ))}
        </motion.div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-gray-200 dark:border-white/[0.04]">
          <span
            className="text-[0.75rem] text-gray-400 dark:text-gray-700"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            &copy; {currentYear} Yael Cruz Aguilar
          </span>
          <span
            className="text-[0.75rem] text-gray-400 dark:text-gray-700"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            Hecho con React + TypeScript
          </span>
        </div>
      </div>
    </footer>
  );
}
