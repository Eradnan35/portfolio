"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-purple-500/10 rounded-full blur-[150px] -z-10" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="inline-block">
            <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20">
              Available for Internships & Roles
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-foreground leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500">Adnan Kakar</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-lg leading-relaxed">
            A final-year Computer Engineering student passionate about crafting clean, efficient, and scalable software solutions.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-4">
            <a 
              href="/resume.pdf" 
              download 
              className="px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-all flex items-center gap-2 shadow-lg shadow-accent/25"
            >
              <Download size={20} />
              Download Resume
            </a>
            <Link 
              href="#projects" 
              className="px-6 py-3 bg-zinc-800 text-foreground font-semibold rounded-lg hover:bg-zinc-700 transition-all flex items-center gap-2 border border-zinc-700"
            >
              View Work
              <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative hidden md:block"
        >
          {/* Placeholder for an image or 3D element. Right now, a styled graphic. */}
          <div className="w-full aspect-square relative rounded-full border border-zinc-800 p-8">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex items-center justify-center border border-zinc-700/50 shadow-2xl relative overflow-hidden">
               <div className="absolute inset-0 bg-grid-zinc-700/[0.2] bg-[size:20px_20px]" />
               <h2 className="text-9xl font-black text-zinc-800/50 select-none">AK</h2>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
