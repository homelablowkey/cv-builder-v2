'use client';

import { useEffect } from 'react';
import { allThemes } from '@/lib/data/themes';

export function ThemeProvider({ themeId, children }: { themeId: string; children: React.ReactNode }) {
  useEffect(() => {
    const theme = allThemes.find((t) => t.id === themeId) || allThemes[0];
    const root = document.documentElement;
    Object.entries(theme.vars).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }, [themeId]);

  return <>{children}</>;
}
