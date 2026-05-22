import { Metadata } from "next";
import "./globals.css";
import cvData from "../lib/data/cv-data.json";
import { ThemeRoot } from "@/components/ThemeRoot";

const name = cvData.hero.name;
const title = cvData.hero.title;
const tagline = cvData.hero.tagline;
const company = cvData.experience?.[0]?.company ?? "";
const location = cvData.about.location;
const socialSummary = `${name} — ${title} @ ${company}. ${tagline}. Based in ${location}.`;

export const metadata: Metadata = {
  title: `${name} — ${title} | Portfolio`,
  description: socialSummary,
  keywords: ["Fullstack Developer", "Next.js", "NestJS", "Fintech", "Malaysia"],
  authors: [{ name: name }],
  openGraph: {
    title: `${name} — ${title}`,
    description: socialSummary,
    url: "https://cv-builder.loki-co.com/",
    siteName: `${name} — Portfolio`,
    type: "profile",
    locale: "en_US",
    images: [
      {
        url: "https://cv-builder.loki-co.com/favicon.ico?favicon.0x3dzn~oxb6tn.ico",
        width: 256,
        height: 256,
        alt: `${name} portfolio photo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${name} — ${title}`,
    description: socialSummary,
  },
  alternates: {
    canonical: "https://cv-builder.loki-co.com/",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased overflow-x-hidden">
        <ThemeRoot>{children}</ThemeRoot>
      </body>
    </html>
  );
}
