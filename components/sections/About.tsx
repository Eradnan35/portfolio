"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../SectionHeading";
import { Code2, Terminal, Cpu } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-zinc-950/50">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="About Me" 
          subtitle="Get to know my background and what drives me." 
        />
        
        <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-lg text-zinc-300 leading-relaxed"
          >
            <p>
              I am a final-year Computer Engineering student with a deep passion for building 
              innovative software solutions. My journey began with a curiosity about how 
              applications work under the hood, which evolved into a full-fledged pursuit 
              of software engineering.
            </p>
            <p>
              I thrive on tackling complex problems and writing clean, maintainable code. 
              Whether it's developing robust backend architectures or crafting intuitive 
              front-end interfaces, I enjoy the entire spectrum of software development.
            </p>
            <p>
              When I'm not coding, I'm usually exploring new technologies, participating in 
              hackathons, or contributing to open-source projects.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-6"
          >
            {[
              {
                icon: <Code2 className="text-accent" size={32} />,
                title: "Software Development",
                description: "Building scalable web applications from scratch.",
              },
              {
                icon: <Terminal className="text-accent" size={32} />,
                title: "System Architecture",
                description: "Designing efficient and secure software systems.",
              },
              {
                icon: <Cpu className="text-accent" size={32} />,
                title: "Computer Engineering",
                description: "Bridging the gap between hardware and software.",
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-accent/50 transition-colors"
              >
                <div className="p-3 bg-zinc-950 rounded-xl shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-zinc-400">{item.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
