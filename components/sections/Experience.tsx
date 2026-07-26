"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../SectionHeading";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Software Engineering Intern",
    company: "Tech Innovators Inc.",
    duration: "June 2025 - August 2025",
    description: "Developed and maintained full-stack web applications using Next.js and Node.js. Collaborated with the design team to implement responsive UIs and optimized API response times by 20%.",
  },
  {
    id: 2,
    role: "Frontend Developer (Freelance)",
    company: "Various Clients",
    duration: "Jan 2024 - Present",
    description: "Built custom portfolio sites, landing pages, and e-commerce frontends. Focused on SEO, accessibility, and modern design principles.",
  },
  {
    id: 3,
    role: "Computer Engineering Student",
    company: "University Name",
    duration: "2022 - 2026",
    description: "Actively involved in coding clubs and hackathons. Built multiple academic projects focusing on algorithms, system design, and AI integrations.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionHeading 
          title="Experience" 
          subtitle="My professional journey and academic highlights." 
        />
        
        <div className="mt-16 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-5 gap-8 items-start relative">
                {/* Timeline Line (Desktop) */}
                <div className="hidden md:block absolute left-[19.5%] top-0 bottom-0 w-px bg-border" />
                
                {/* Timeline Dot (Desktop) */}
                <div className="hidden md:flex absolute left-[19.5%] top-1 -translate-x-1/2 w-8 h-8 rounded-full bg-card border-2 border-accent items-center justify-center z-10">
                  <Briefcase size={14} className="text-accent" />
                </div>

                {/* Timeline Line (Mobile) */}
                <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-border" />
                
                {/* Timeline Dot (Mobile) */}
                <div className="md:hidden absolute left-0 top-1 -translate-x-1/2 w-6 h-6 rounded-full bg-card border-2 border-accent flex items-center justify-center z-10">
                  <Briefcase size={10} className="text-accent" />
                </div>

                <div className="md:col-span-1 mb-4 md:mb-0 md:text-right md:pr-12 pt-1">
                  <span className="text-sm font-bold text-accent">{exp.duration}</span>
                </div>
                <div className="md:col-span-4 card p-6 md:p-8 hover:border-accent/50 hover:-translate-y-1">
                  <h3 className="text-2xl font-bold text-foreground mb-1">{exp.role}</h3>
                  <h4 className="text-lg text-muted-foreground mb-4">{exp.company}</h4>
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
