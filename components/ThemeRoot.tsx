'use client';

import { useEffect } from 'react';
import { allThemes } from '@/lib/data/themes';

export function ThemeRoot({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let themeId = 'cyan';
    try {
      const saved = localStorage.getItem('cv-builder-data');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.themeId) themeId = parsed.themeId;
      }
    } catch { /* noop */ }

    const theme = allThemes.find((t) => t.id === themeId) || allThemes[0];
    const root = document.documentElement;
    Object.entries(theme.vars).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }, []);

  return <>{children}</>;
}
