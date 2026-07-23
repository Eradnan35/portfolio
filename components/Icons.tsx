import React from "react";

export const GithubIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.1-.34 6.33-1.53 6.33-6.88 0-1.5-.5-2.73-1.33-3.66.13-.33.6-1.73-.13-3.6 0 0-1.1-.35-3.6 1.34a12.5 12.5 0 0 0-6.6 0C6.3 3.37 5.2 3.72 5.2 3.72c-.73 1.87-.26 3.27-.13 3.6-.83.93-1.33 2.16-1.33 3.66 0 5.33 3.23 6.52 6.33 6.88-.97.28-1.5 1.02-1.73 2.12-.4.18-1.4.45-2.27-.65-.7-1-1.25-1.14-1.25-1.14-.9-.05-1.4.45-1.4.45.65.65 1.15 1.7 1.15 1.7.5 1.5 2.1 1.05 2.8 1.05v2.9" />
  </svg>
);

export const LinkedinIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
