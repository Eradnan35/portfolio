"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../SectionHeading";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-24 bg-zinc-950/50">
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionHeading 
          title="Education" 
          subtitle="My academic background." 
        />
        
        <div className="mt-12 space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row gap-6 p-8 bg-zinc-900 border border-zinc-800 rounded-2xl hover:border-accent/30 transition-colors"
          >
            <div className="p-4 bg-zinc-950 rounded-xl h-fit shrink-0">
              <GraduationCap className="text-accent" size={40} />
            </div>
            
            <div className="flex-grow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">Bachelor of Science in Computer Engineering</h3>
                  <h4 className="text-xl text-zinc-400">University Name</h4>
                </div>
                <div className="mt-2 md:mt-0 text-accent font-bold">
                  2022 - 2026 (Expected)
                </div>
              </div>
              
              <p className="text-zinc-300 leading-relaxed mb-4">
                Currently in my final year, specializing in software engineering, embedded systems, and system design. 
                Maintaining a strong GPA and actively participating in academic projects and technical societies.
              </p>
              
              <div>
                <h5 className="font-semibold text-zinc-200 mb-2">Relevant Coursework:</h5>
                <div className="flex flex-wrap gap-2">
                  {["Data Structures & Algorithms", "Operating Systems", "Computer Networks", "Database Management", "Software Engineering", "Microprocessors"].map(course => (
                    <span key={course} className="px-3 py-1 bg-zinc-800 rounded-md text-sm text-zinc-300">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
