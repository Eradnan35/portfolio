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
              I am a final year Computer Engineering student. I really like building software and I want to know how technology works. What started as curiosity has grown into a passion for creating solutions that are useful and make a difference. I have learned a lot about software engineering and computer science fundamentals. I always look for ways to learn more get better and challenge myself.
            </p>
            <p>
              My main interests are in backend development, system design and AI-powered applications. I like working on projects where I design APIs build systems that can handle a lot of users and try out technologies, like Large Language Models and Retrieval-Augmented Generation. Each project teaches me something and helps me grow as a developer and a problem solver. I am proud of writing clean code and building software that serves a purpose.
            </p>
            <p>
              Outside of coding I try out technologies work with others on projects and keep up with what is happening in the tech industry. I think it is important to learn, work together and share ideas with others who like technology. My goal is to start my career as a software engineer and help build products that make a difference. For me Computer Engineering is not something I study. It is something I like to work with every day. I like Computer Engineering. I want to work with it every day.
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
