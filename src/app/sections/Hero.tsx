import React from "react";
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { contactLinks } from '../../data/contact';
import profilePhoto from '../../assets/wpp.jpg';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-12 overflow-hidden"
    >
      {/* Animated orb behind name */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-cyan-500/20 to-violet-600/20 blur-[100px] pointer-events-none"
      />

      <div className="relative z-10 max-w-4xl w-full">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Profile photo circle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative shrink-0 md:self-start md:mt-2"
          >
            {/* Animated border glow */}
            <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500 via-violet-500 to-cyan-500 rounded-full opacity-50 blur-lg animate-pulse" />
            
            {/* Photo container */}
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-white/[0.03] backdrop-blur-xl border border-white/10 overflow-hidden">
              <img 
                src={profilePhoto} 
                alt="Yael Cruz Aguilar" 
                className="w-full h-full object-cover" 
              />
            </div>
          </motion.div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[3rem] sm:text-[4rem] md:text-[5rem] leading-[1.05] mb-6 tracking-tight"
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}
            >
              <span className="text-white">Yael Cruz</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
                Aguilar
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="text-[1.125rem] md:text-[1.25rem] text-gray-400 max-w-2xl leading-relaxed mb-12"
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 400 }}
            >
              2 años de experiencia construyendo aplicaciones backend, plataformas web y
              sistemas de visión por computadora en entornos productivos. Especializado en{' '}
              <span className="text-cyan-400">Python</span> y{' '}
              <span className="text-violet-400">TypeScript</span>, diseño de APIs escalables y
              despliegue en{' '}
              <span className="text-amber-400">AWS</span>.
            </motion.p>

            {/* Contact links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex flex-wrap gap-3 justify-center md:justify-start"
            >
              {contactLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className={`group flex items-center gap-2.5 px-5 py-2.5 bg-white/[0.03] border border-white/10 rounded-xl transition-all duration-300 hover:bg-white/[0.06] hover:shadow-lg ${link.color}`}
                >
                  <link.icon className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
                  <span
                    className="text-[0.8125rem] text-gray-400 group-hover:text-white transition-colors"
                    style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 500 }}
                  >
                    {link.label}
                  </span>
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-gray-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}
