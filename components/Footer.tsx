import React from "react";
import { Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12 text-center">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <h3 className="text-2xl font-bold tracking-tighter text-foreground mb-6">
          Adnan Kakar <span className="text-accent"></span>
        </h3>

        <div className="flex gap-6 mb-8">
          <Link href="https://github.com/Eradnan35" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-accent hover:scale-110 transition-all duration-300">
            <GithubIcon size={24} />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://www.linkedin.com/in/adnan-kakar" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-accent hover:scale-110 transition-all duration-300">
            <LinkedinIcon size={24} />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="mailto:kakaradnan359@gmail.com" className="text-muted-foreground hover:text-accent hover:scale-110 transition-all duration-300">
            <Mail size={24} />
            <span className="sr-only">Email</span>
          </Link>
        </div>

        <p className="text-muted-foreground text-sm flex items-center justify-center gap-1">
          Designed and built with <Heart size={14} className="text-red-500" /> by Adnan Kakar
        </p>
        <p className="text-muted-foreground/80 text-xs mt-2">
          &copy; {currentYear} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
