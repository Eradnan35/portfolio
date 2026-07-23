import React from "react";
import { Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-12 text-center">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <h3 className="text-2xl font-bold tracking-tighter text-foreground mb-6">
          Adnan<span className="text-accent">.</span>
        </h3>
        
        <div className="flex gap-6 mb-8">
          <Link href="https://github.com" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-accent transition-colors">
            <GithubIcon size={24} />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-accent transition-colors">
            <LinkedinIcon size={24} />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="mailto:contact@example.com" className="text-zinc-400 hover:text-accent transition-colors">
            <Mail size={24} />
            <span className="sr-only">Email</span>
          </Link>
        </div>

        <p className="text-zinc-500 text-sm flex items-center justify-center gap-1">
          Designed and built with <Heart size={14} className="text-red-500" /> by Adnan Kakar
        </p>
        <p className="text-zinc-600 text-xs mt-2">
          &copy; {currentYear} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
