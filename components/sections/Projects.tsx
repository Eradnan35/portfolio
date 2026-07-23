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
    title: "E-Commerce Dashboard",
    description: "A full-stack analytics dashboard for e-commerce platforms. Features real-time sales data, inventory management, and beautiful charts.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 2,
    title: "AI Note-Taking App",
    description: "An intelligent note-taking application that uses AI to summarize, organize, and suggest tags for your notes automatically.",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Node.js", "OpenAI", "MongoDB"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 3,
    title: "Smart Home Controller",
    description: "IoT project built on a Raspberry Pi to control home appliances. Includes a mobile-responsive web interface for remote access.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800",
    tags: ["Python", "Flask", "React", "IoT"],
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
              className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden group hover:border-accent/50 transition-colors flex flex-col"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute inset-0 bg-zinc-800 animate-pulse" />
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
                <p className="text-zinc-400 mb-6 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium px-2.5 py-1 bg-zinc-800 text-zinc-300 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-zinc-800">
                  <Link href={project.github} target="_blank" className="flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-foreground transition-colors">
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
