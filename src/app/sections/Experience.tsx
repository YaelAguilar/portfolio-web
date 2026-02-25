import React, { useRef, useEffect, useState } from "react";
import { motion } from 'motion/react';
import { Award, ExternalLink, ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { experiences } from '../../data/experiences';
import { getTagStyle, getBorderHover } from '../../utils/experienceHelpers';

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const experienceRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [dotPosition, setDotPosition] = useState(0);

  useEffect(() => {
    const updateActiveExperience = () => {
      const viewportCenter = window.innerHeight / 2;
      let closestIndex = 0;
      let closestDistance = Infinity;

      experienceRefs.current.forEach((ref, index) => {
        if (!ref) return;

        const rect = ref.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const distance = Math.abs(elementCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);

      // Calcular posición del dot
      const activeRef = experienceRefs.current[closestIndex];
      const container = containerRef.current;
      if (activeRef && container) {
        const containerRect = container.getBoundingClientRect();
        const activeRect = activeRef.getBoundingClientRect();
        const relativeTop = activeRect.top - containerRect.top;
        // top-6 = 24px (1.5rem), ajustamos para alinear el dot con el card
        setDotPosition(relativeTop + 24); // 24px es el top-6
      }
    };

    // Throttle para mejor rendimiento
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveExperience();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Inicializar después de que el DOM esté listo
    const initTimeout = setTimeout(() => {
      updateActiveExperience();
    }, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(initTimeout);
    };
  }, []);

  const activeExperience = experiences[activeIndex];
  const activeDotColor = activeExperience?.dotColor || 'bg-cyan-400 shadow-cyan-400/50';

  return (
    <section id="experience" className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          icon={Award}
          label="Trayectoria"
          title="Experiencia Profesional"
          gradient="from-cyan-400 to-blue-500"
        />

        <div ref={containerRef} className="relative">
          {/* Timeline line */}
          <div className="absolute left-[11px] top-4 bottom-4 w-px bg-gradient-to-b from-cyan-500/40 via-violet-500/40 to-amber-500/40 hidden md:block" />

          {/* Single animated dot */}
          <motion.div
            className={`absolute left-0 w-[23px] h-[23px] rounded-full border-[3px] border-[#f5f7fa] dark:border-[#0a0a1a] ${activeDotColor} shadow-lg hidden md:block z-10`}
            animate={{ top: dotPosition }}
            transition={{ type: 'spring', stiffness: 200, damping: 25 }}
          />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                ref={(el) => {
                  experienceRefs.current[index] = el;
                }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative md:pl-12"
              >

                <div
                  className={`group relative bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-7 md:p-8 transition-all duration-500 ${getBorderHover(exp.accent)} hover:bg-gray-50 dark:hover:bg-white/[0.04]`}
                >
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-5">
                    <div>
                      <h3
                        className="text-[1.25rem] text-gray-900 dark:text-white mb-1"
                        style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
                      >
                        {exp.company}
                      </h3>
                      <p
                        className="text-[0.9rem] text-gray-600 dark:text-gray-400"
                        style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 400 }}
                      >
                        {exp.role}
                      </p>
                    </div>
                    <span
                      className="text-[0.75rem] text-gray-400 dark:text-gray-600 whitespace-nowrap shrink-0 pt-1"
                      style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 400 }}
                    >
                      {exp.period}
                    </span>
                  </div>

                  {/* Description */}
                  <ul className="space-y-3 mb-6">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-gray-400 dark:text-gray-600 mt-1.5 shrink-0">
                          <ExternalLink className="w-3 h-3" />
                        </span>
                        <span
                          className="text-[0.875rem] text-gray-600 dark:text-gray-400 leading-relaxed"
                          style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 400 }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 text-[0.7rem] rounded-full border ${getTagStyle(exp.accent)}`}
                        style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 500 }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Demo Button */}
                  {exp.demoUrl && (
                    <a
                      href={exp.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-violet-500 dark:from-cyan-400 dark:to-violet-400 text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 dark:hover:shadow-cyan-400/25 hover:scale-[1.02]"
                      style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 500 }}
                    >
                      <span className="text-[0.875rem]">Ver Demo</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
