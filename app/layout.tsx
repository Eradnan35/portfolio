import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adnan-kakar.vercel.app"),
  title: "Adnan Kakar | Computer Engineering Student & AI Developer",
  description: "Portfolio of Adnan Kakar, a Computer Engineering student specializing in Backend Development, AI Integration, FastAPI, LangChain, RAG, and Scalable Systems.",
  keywords: [
    "Adnan Kakar",
    "Kakar Adnan",
    "Adnan Kakar Portfolio",
    "Adnan Kakar Computer Engineer",
    "Adnan Kakar Backend Developer",
    "Adnan Kakar AI Developer",
    "Computer Engineering Student India",
    "FastAPI Developer",
    "LangChain Developer",
    "RAG Developer",
    "Python Developer",
    "React Developer"
  ],
  authors: [{ name: "Adnan Kakar", url: "https://adnan-kakar.vercel.app" }],
  creator: "Adnan Kakar",
  publisher: "Adnan Kakar",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://adnan-kakar.vercel.app",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://adnan-kakar.vercel.app",
    title: "Adnan Kakar | Computer Engineering Student & AI Developer",
    description: "Portfolio of Adnan Kakar, specializing in Backend Development, AI Integration, and Scalable Systems.",
    siteName: "Adnan Kakar Portfolio",
    images: [
      {
        url: "/images/passport-photo.jpeg", // Replace with a more specific OG image if available later
        width: 1200,
        height: 630,
        alt: "Adnan Kakar - Computer Engineering Student and AI Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adnan Kakar | Computer Engineering Student & AI Developer",
    description: "Portfolio of Adnan Kakar, a Computer Engineering student specializing in Backend Development and AI.",
    creator: "@AdnanKakar", // Optional: Update if there's a specific handle
    images: ["/images/passport-photo.jpeg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://adnan-kakar.vercel.app/#person",
      "name": "Adnan Kakar",
      "alternateName": "Kakar Adnan",
      "jobTitle": "Computer Engineering Student",
      "description": "Backend Developer, AI Integration, FastAPI, LangChain, RAG, and Scalable Systems.",
      "url": "https://adnan-kakar.vercel.app",
      "image": "https://adnan-kakar.vercel.app/images/passport-photo.jpeg",
      "nationality": "Indian",
      "sameAs": [
        "https://github.com/Eradnan35", // Ensure correct username
        "https://www.linkedin.com/in/adnan-kakar", // Ensure correct username
        "mailto:your.email@example.com" // Ensure correct email if available, or placeholder for now
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://adnan-kakar.vercel.app/#website",
      "url": "https://adnan-kakar.vercel.app",
      "name": "Adnan Kakar Portfolio",
      "publisher": {
        "@id": "https://adnan-kakar.vercel.app/#person"
      }
    },
    {
      "@type": "ProfilePage",
      "@id": "https://adnan-kakar.vercel.app/#profilepage",
      "url": "https://adnan-kakar.vercel.app",
      "mainEntity": {
        "@id": "https://adnan-kakar.vercel.app/#person"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${robotoMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
