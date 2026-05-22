import { Theme } from '../types/theme';

export const cyanTheme: Theme = {
  id: 'cyan',
  name: 'Cyan',
  vars: {
    '--accent': '#00bcd4',
    '--accent-dim': '#26c6da',
    '--accent-gradient-end': '#67e8f9',
    '--accent-10': 'rgba(0,188,212,0.1)',
    '--accent-08': 'rgba(0,188,212,0.08)',
    '--accent-15': 'rgba(0,188,212,0.15)',
    '--accent-25': 'rgba(0,188,212,0.25)',
    '--accent-30': 'rgba(0,188,212,0.3)',
    '--accent-40': 'rgba(0,188,212,0.4)',
    '--accent-50': 'rgba(0,188,212,0.5)',
    '--border-color': 'rgba(0,188,212,0.08)',
  },
};

export const purpleTheme: Theme = {
  id: 'purple',
  name: 'Purple',
  vars: {
    '--accent': '#a855f7',
    '--accent-dim': '#c084fc',
    '--accent-gradient-end': '#d8b4fe',
    '--accent-10': 'rgba(168,85,247,0.1)',
    '--accent-08': 'rgba(168,85,247,0.08)',
    '--accent-15': 'rgba(168,85,247,0.15)',
    '--accent-25': 'rgba(168,85,247,0.25)',
    '--accent-30': 'rgba(168,85,247,0.3)',
    '--accent-40': 'rgba(168,85,247,0.4)',
    '--accent-50': 'rgba(168,85,247,0.5)',
    '--border-color': 'rgba(168,85,247,0.08)',
  },
};

export const emeraldTheme: Theme = {
  id: 'emerald',
  name: 'Emerald',
  vars: {
    '--accent': '#10b981',
    '--accent-dim': '#34d399',
    '--accent-gradient-end': '#6ee7b7',
    '--accent-10': 'rgba(16,185,129,0.1)',
    '--accent-08': 'rgba(16,185,129,0.08)',
    '--accent-15': 'rgba(16,185,129,0.15)',
    '--accent-25': 'rgba(16,185,129,0.25)',
    '--accent-30': 'rgba(16,185,129,0.3)',
    '--accent-40': 'rgba(16,185,129,0.4)',
    '--accent-50': 'rgba(16,185,129,0.5)',
    '--border-color': 'rgba(16,185,129,0.08)',
  },
};

export const allThemes: Theme[] = [cyanTheme, purpleTheme, emeraldTheme];
export const defaultThemeId = 'cyan';
