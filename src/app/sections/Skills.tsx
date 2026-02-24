import React from "react";
import { motion } from 'motion/react';
import { Code2 } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { skillCategories } from '../../data/skills';

export function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          icon={Code2}
          label="Herramientas"
          title="Tecnologias & Skills"
          gradient="from-violet-400 to-purple-500"
        />

        {/* Tech categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={`group bg-white/[0.02] border ${category.accentBorder} rounded-2xl p-6 transition-all duration-400 hover:bg-white/[0.04]`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`p-2 rounded-lg ${category.accentBg} ${category.accentText}`}>
                  <category.icon className="w-5 h-5" />
                </div>
                <h3
                  className="text-[0.9375rem] text-white"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
                >
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-[0.75rem] text-gray-400 bg-white/[0.04] border border-white/[0.06] rounded-lg transition-all duration-200 hover:text-white hover:border-white/15 hover:bg-white/[0.07]"
                    style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 400 }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
