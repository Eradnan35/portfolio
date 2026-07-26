"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../SectionHeading";
import { Trophy, Star, Award } from "lucide-react";

const achievements = [
  {
    icon: <Trophy className="text-yellow-500" size={32} />,
    title: "1st Place - National Hackathon 2025",
    description: "Built an AI-powered accessibility tool that won the grand prize among 200+ participating teams.",
  },
  {
    icon: <Award className="text-purple-500" size={32} />,
    title: "Dean's List Award (Multiple Semesters)",
    description: "Maintained top 5% ranking in the Computer Engineering batch for outstanding academic performance.",
  },
  {
    icon: <Star className="text-blue-500" size={32} />,
    title: "Open Source Contributor",
    description: "Merged over 20+ pull requests to popular open-source frameworks like React and Tailwind CSS.",
  }
];

export function Achievements() {
  return (
    <section id="achievements" className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Achievements" 
          subtitle="Milestones and recognitions I'm proud of." 
        />
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {achievements.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card p-8 flex flex-col items-center text-center hover:shadow-md hover:border-accent/50 hover:-translate-y-1"
            >
              <div className="mb-6 p-4 bg-background rounded-full border border-border shadow-inner">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
