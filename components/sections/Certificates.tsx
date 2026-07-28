"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "../SectionHeading";
import { Award, ExternalLink } from "lucide-react";
import Link from "next/link";

const certificates = [
  {
    title: "GenAI Powered Data Analytics",
    issuer: "TATA",
    date: "June 23, 2025",
    credentialUrl: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_3uEYq3JQNhBgxbLGQ_1750678467946_completion_certificate.pdf",
    skills: ["AI ANALYTICS", "MODEL SELECTION", "MODEL VALIDATION"],
  },
  {
    title: "Data Analytics",
    issuer: "Deloitte",
    date:"June 20, 2025",
    credentialUrl:"https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_3uEYq3JQNhBgxbLGQ_1750398797186_completion_certificate.pdf",
    skills:["Computer Networkin","Python","Data Structure"]
  }
  // Add more certificates here
];

export function Certificates() {
  return (
    <section id="certificates" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionHeading
          title="Certificates"
          subtitle="Certifications and courses I've completed."
        />

        <div className="mt-12 space-y-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col md:flex-row gap-6 p-8 card hover:border-accent/50 hover:-translate-y-1"
            >
              <div className="p-4 bg-background rounded-xl h-fit shrink-0">
                <Award className="text-accent" size={40} />
              </div>

              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">{cert.title}</h3>
                    <h4 className="text-xl text-muted-foreground">{cert.issuer}</h4>
                  </div>
                  <div className="mt-2 md:mt-0 text-accent font-bold shrink-0">
                    {cert.date}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map(skill => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-secondary rounded-[var(--radius)] text-sm text-secondary-foreground font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {cert.credentialUrl && (
                  <Link
                    href={cert.credentialUrl}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
                  >
                    <ExternalLink size={16} /> View Credential
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
