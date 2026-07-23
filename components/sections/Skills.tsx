"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../SectionHeading";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML/CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Python", "SQL", "MongoDB", "RESTful APIs"],
  },
  {
    title: "Tools & Technologies",
    skills: ["Git & GitHub", "Docker", "AWS", "Linux", "VS Code", "Figma"],
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Technical Skills" 
          subtitle="A comprehensive list of technologies I work with." 
        />
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:shadow-xl hover:shadow-accent/5 transition-all"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6 pb-4 border-b border-zinc-800">
                {category.title}
              </h3>
              <ul className="space-y-4">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-zinc-300 font-medium">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
