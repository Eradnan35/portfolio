"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../SectionHeading";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "../Icons";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Social Media Sentiment Analysis",
    description: "A full-stack sentiment analysis platform built with Python and FastAPI that monitors brand perception by analyzing social media comments in real time. Features sentiment classification using AI APIs, analytics dashboards, and interactive React frontends to help businesses understand customer feedback.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    tags: ["Python", "FastAPI", "React", "VADER", "AI APIs", "Tailwind CSS"],
    github: "https://github.com/Eradnan35/Social-Media-Sentiment-Analysis.git",
    demo: "https://example.com",
  },
  {
    id: 2,
    title: "AI Note-Taking App",
    description: "An intelligent note-taking application powered by LangChain and RAG that uses AI to summarize, organize, and suggest tags for your notes automatically. It stores embeddings in Vector Databases for fast retrieval.",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=800",
    tags: ["TypeScript", "React", "LangChain", "RAG", "Vector Databases", "OpenAI"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 3,
    title: "Smart Home Controller",
    description: "IoT project built on a Raspberry Pi using Python and FastAPI to control home appliances. Includes a mobile-responsive React web interface for remote access.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800",
    tags: ["Python", "FastAPI", "React", "IoT"],
    github: "https://github.com",
    demo: "https://example.com",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Featured Projects"
          subtitle="Some of the recent work I've built."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card group flex flex-col hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute inset-0 bg-muted animate-pulse" />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium px-3 py-1 bg-secondary/50 border border-border/50 text-secondary-foreground rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border">
                  <Link href={project.github} target="_blank" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                    <GithubIcon size={18} /> Code
                  </Link>
                  <Link href={project.demo} target="_blank" className="flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors">
                    <ExternalLink size={18} /> Live Demo
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
