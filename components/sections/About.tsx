"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../SectionHeading";
import { Code2, Terminal, Cpu } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
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
            className="space-y-6 text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              Hi, I'm Kakar Adnan. I’m a final-year Computer Engineering student passionate about building scalable
              software and AI-powered applications. My journey into technology started with a
              curiosity about how systems work behind the scenes, which gradually led me to software
              engineering and modern AI technologies.
            </p>
            <p>
              As an aspiring FastAPI Developer and LangChain Developer, I’ve developed a strong foundation in Python, databases,
              and computer science fundamentals. I enjoy solving real-world problems by designing
              efficient backend systems and integrating AI capabilities as a RAG Developer, utilizing Retrieval-Augmented Generation,
              vector databases, and Large Language Models.
            </p>
            <p>
              I believe great software is not just about writing code—it's about creating reliable, maintainable, and
              impactful solutions. Whether I'm developing APIs, building full-stack applications, or experimenting with
              emerging AI tools, I’m always eager to learn and improve.
            </p>
            <p>
              Beyond academics, I spend my time exploring new technologies, working on personal projects, contributing
              to collaborative development efforts, and continuously preparing myself for a career in software engineering.
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
                title: "Backend Development",
                description: "Building scalable APIs and robust server-side applications.",
              },
              {
                icon: <Terminal className="text-accent" size={32} />,
                title: "AI Engineering",
                description: "Exploring RAG, LLMs, vector databases, and intelligent systems.",
              },
              {
                icon: <Cpu className="text-accent" size={32} />,
                title: "Computer Engineering",
                description: "Combining software fundamentals with problem-solving and system design.",
              }
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 card hover:border-accent/50"
              >
                <div className="p-3 bg-background rounded-xl shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
