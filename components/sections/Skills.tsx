"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../SectionHeading";

const skillCategories = [
  {
    title: "Programming & Core CS",
    skills: ["Python", "SQL", "Data Structures & Algorithms", "DBMS", "Operating Systems", "Computer Networks"],
  },
  {
    title: "Backend Development",
    skills: ["FastAPI", "Flask", "REST APIs", "SQLAlchemy", "Pydantic", "API Design"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "SQLite", "Database Design", "Data Modeling"],
  },
  {
    title: "AI & LLM Engineering",
    skills: ["Prompt Engineering", "RAG", "Vector Databases", "Embedding Models", "LangChain", "LangGraph", "AI Agent Development"],
  },
  {
    title: "Tools & Deployment",
    skills: ["Git/GitHub", "VS Code", "Postman", "Vercel", "Linux"],
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
              className="card p-8 hover:shadow-accent/5 hover:-translate-y-1"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6 pb-4 border-b border-border">
                {category.title}
              </h3>
              <ul className="space-y-4">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-muted-foreground font-medium">{skill}</span>
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
