/** CV Data Types */
export interface Stat {
  icon: string; label: string; value: string;
}
export interface SocialLink {
  icon: string; url: string; label: string;
}
export interface HeroSection {
  tagline: string; name: string; title: string; summary: string;
  stats: Stat[]; socials: SocialLink[];
}
export interface AboutSection {
  heading: string; paragraphs: string[];
  location: string; country: string;
  quickFacts: { label: string; value: string }[];
}
export interface SkillItem { name: string; level?: 'EXPERT'|'STRONG'|'PROFICIENT'|''; }
export interface SkillCategory {
  icon: string; title: string; items: SkillItem[];
}
export interface JobDuty { text: string; highlight?: string; }
export interface WorkExperience {
  date: string; title: string; company: string; location: string;
  duties: JobDuty[];
}
export interface Quote { text: string; }
export interface AdaptabilityCard { title: string; description: string; }
export interface DriveItem { icon: string; title: string; description: string; }
export interface Project {
  icon: string; badge: string; title: string; subtitle: string; description: string;
  bullets: string[]; tags: string[]; githubUrl?: string; liveUrl?: string; liveDisabled?: boolean;
}
export interface EducationItem {
  icon: string; title: string; field: string; institution: string; period: string;
}
export interface CVData {
  hero: HeroSection;
  about: AboutSection;
  skills: SkillCategory[];
  experience: WorkExperience[];
  managementQuotes: Quote[];
  adaptability: AdaptabilityCard[];
  drives: DriveItem[];
  projects: Project[];
  education: EducationItem[];
  contact: {
    email: string; linkedin: string; github: string;
    location: string; phone?: string;
  };
}
