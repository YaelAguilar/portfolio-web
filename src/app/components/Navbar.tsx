import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../../data/navLinks';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import { useScroll } from '../../hooks/useScroll';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollToSection } = useSmoothScroll();
  const scrolled = useScroll(50); // Detecta scroll después de 50px
  
  // Detectar qué sección está activa
  const sectionIds = navLinks.map(link => link.href);
  const activeSection = useScrollSpy(sectionIds, { offset: 80 });

  const handleClick = (href: string) => {
    setMobileOpen(false);
    scrollToSection(href, { offset: 80 }); // Offset para compensar el navbar fijo
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0a0a1a]/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-cyan-500/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => handleClick('#hero')}
            className="relative group"
          >
            <span
              className="text-[1.25rem] tracking-tight text-white"
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}
            >
              YCA
              <span className="text-cyan-400">.</span>
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-violet-500 group-hover:w-full transition-all duration-300" />
          </button>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              
              return (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className={`px-4 py-2 text-[0.875rem] transition-all duration-200 rounded-lg relative ${
                    isActive
                      ? 'text-white bg-white/10'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                  style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 500 }}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cyan-400" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-gray-400 hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#0a0a1a]/95 backdrop-blur-xl pt-20 px-6"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;
                
                return (
                  <button
                    key={link.href}
                    onClick={() => handleClick(link.href)}
                    className={`text-left px-4 py-4 text-[1.125rem] rounded-xl transition-all ${
                      isActive
                        ? 'text-white bg-white/10 border-l-2 border-cyan-400'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                    style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 500 }}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}