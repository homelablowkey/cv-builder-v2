'use client';
import { create } from 'zustand';
import { CVData } from '@/lib/types/cv';
import cvDataJson from '@/lib/data/cv-data.json';

const defaultCV = cvDataJson as CVData;

interface CVStore extends CVData {
  // Section visibility toggles
  sections: Record<string, boolean>;
  setSection: (key: string, visible: boolean) => void;

  // Theme
  themeId: string;
  setThemeId: (id: string) => void;

  // Full data setters (generic)
  setHero: (hero: CVData['hero']) => void;
  setAbout: (about: CVData['about']) => void;
  setSkills: (skills: CVData['skills']) => void;
  setExperience: (exp: CVData['experience']) => void;
  setManagementQuotes: (q: CVData['managementQuotes']) => void;
  setAdaptability: (a: CVData['adaptability']) => void;
  setDrives: (d: CVData['drives']) => void;
  setProjects: (p: CVData['projects']) => void;
  setEducation: (e: CVData['education']) => void;
  setContact: (c: CVData['contact']) => void;

  // Import / Reset
  loadFromJSON: (data: CVData) => void;
  resetToDefault: () => void;
  // Preview mode
  previewMode: boolean;
  setPreviewMode: (v: boolean) => void;
}

const initialSections: Record<string, boolean> = {
  hero: true,
  about: true,
  skills: true,
  experience: true,
  management: true,
  adaptability: true,
  drives: true,
  projects: true,
  education: true,
  contact: true,
};

export const useCVStore = create<CVStore>((set) => ({
  ...defaultCV,
  sections: { ...initialSections },
  themeId: 'cyan',
  previewMode: false,

  setSection: (key, visible) =>
    set((s) => ({ sections: { ...s.sections, [key]: visible } })),

  setThemeId: (themeId) => set({ themeId }),

  setHero: (hero) => set({ hero }),
  setAbout: (about) => set({ about }),
  setSkills: (skills) => set({ skills }),
  setExperience: (experience) => set({ experience }),
  setManagementQuotes: (managementQuotes) => set({ managementQuotes }),
  setAdaptability: (adaptability) => set({ adaptability }),
  setDrives: (drives) => set({ drives }),
  setProjects: (projects) => set({ projects }),
  setEducation: (education) => set({ education }),
  setContact: (contact) => set({ contact }),

  loadFromJSON: (data) =>
    set({
      ...data,
      sections: { ...initialSections },
    }),

  resetToDefault: () =>
    set({
      ...defaultCV,
      sections: { ...initialSections },
      themeId: 'cyan',
      previewMode: false,
    }),

  setPreviewMode: (previewMode) => set({ previewMode }),
}));
