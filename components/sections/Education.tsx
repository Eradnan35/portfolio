"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../SectionHeading";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionHeading
          title="Educational Qualifications"
          subtitle="My academic journey that laid the foundation for my career in technology"
        />

        <div className="mt-12 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row gap-6 p-8 card hover:border-accent/50 hover:-translate-y-1"
          >
            <div className="p-4 bg-background rounded-xl h-fit shrink-0">
              <GraduationCap className="text-accent" size={40} />
            </div>

            <div className="flex-grow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">Computer Engineering</h3>
                  <h4 className="text-xl text-muted-foreground">Kavayitri Bahinabai Chaudhari North Maharashtra University</h4>
                </div>
                <div className="mt-2 md:mt-0 text-accent font-bold">
                  2023 - 2027 (Expected)
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4">
                Currently in my final year, specializing in software engineering and system design.
                Maintaining a strong GPA and actively participating in academic projects and technical societies.
              </p>

              <div>
                <h5 className="font-semibold text-foreground mb-2">Relevant Coursework:</h5>
                <div className="flex flex-wrap gap-2">
                  {["Data Structures & Algorithms", "Operating Systems", "Computer Networks", "Database Management", "Software Engineering", "Object Oriented Programming"].map(course => (
                    <span key={course} className="px-3 py-1 bg-secondary rounded-[var(--radius)] text-sm text-secondary-foreground font-medium">
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
