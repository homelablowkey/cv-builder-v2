'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import * as Lucide from 'lucide-react';
import FormPanel from './_components/FormPanel';
import { Preview } from './_components/Preview';
import { useCVStore } from '@/lib/store/useCVStore';
import { allThemes } from '@/lib/data/themes';
import { AuthGate } from '@/components/AuthGate';

export default function BuilderPage() {
  const store = useCVStore();
  const [activeTab, setActiveTab] = useState<'edit' | 'preview'>('edit');
  const [mounted, setMounted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Hydrate from localStorage on mount
  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem('cv-builder-data');
      if (saved) {
        const data = JSON.parse(saved);
        store.loadFromJSON(data);
        // Apply theme CSS vars
        const themeId = data.themeId || 'cyan';
        const theme = allThemes.find((t) => t.id === themeId) || allThemes[0];
        const root = document.documentElement;
        Object.entries(theme.vars).forEach(([key, value]) => {
          root.style.setProperty(key, value);
        });
      }
    } catch (e) { /* noop */ }
  }, []);

  // Persist to localStorage on changes
  useEffect(() => {
    if (!mounted) return;
    const data = {
      hero: store.hero,
      about: store.about,
      skills: store.skills,
      experience: store.experience,
      managementQuotes: store.managementQuotes,
      adaptability: store.adaptability,
      drives: store.drives,
      projects: store.projects,
      education: store.education,
      contact: store.contact,
      themeId: store.themeId,
    };
    localStorage.setItem('cv-builder-data', JSON.stringify(data));
  }, [
    mounted,
    store.hero, store.about, store.skills, store.experience,
    store.managementQuotes, store.adaptability, store.drives,
    store.projects, store.education, store.contact, store.themeId,
  ]);

  const exportJSON = useCallback(() => {
    const data = {
      hero: store.hero,
      about: store.about,
      skills: store.skills,
      experience: store.experience,
      managementQuotes: store.managementQuotes,
      adaptability: store.adaptability,
      drives: store.drives,
      projects: store.projects,
      education: store.education,
      contact: store.contact,
      themeId: store.themeId,
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'cv-data.json';
    a.click();
    URL.revokeObjectURL(url);
  }, [store]);

  const importJSON = useCallback((file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(String(reader.result));
        store.loadFromJSON(data);
      } catch (e) {
        alert('Invalid JSON file');
      }
    };
    reader.readAsText(file);
  }, [store]);

  const handlePrint = useCallback(() => {
    store.setPreviewMode(true);
    window.print();
  }, [store]);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-200 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin h-8 w-8 border-2 border-cyan-500 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-slate-400 text-sm">Initializing builder...</p>
        </div>
      </div>
    );
  }

  return (
    <AuthGate>
    <div className="min-h-screen bg-slate-950 text-slate-200 flex flex-col md:flex-row">
      {/* Mobile Tab Bar */}
      <div className="md:hidden glass border-b border-slate-700/50 sticky top-0 z-40">
        <div className="flex p-2">
          <button
            onClick={() => setActiveTab('edit')}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'edit' ? 'bg-cyan-600 text-white' : 'text-slate-400'
            }`}
          >Edit</button>
          <button
            onClick={() => setActiveTab('preview')}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'preview' ? 'bg-cyan-600 text-white' : 'text-slate-400'
            }`}
          >Preview</button>
        </div>
      </div>

      {/* Left Panel — Form */}
      <div
        className={`${
          activeTab === 'edit' ? 'block' : 'hidden md:block'
        } md:w-[420px] lg:w-[480px] flex-shrink-0 border-r border-slate-700/50 overflow-y-auto md:h-screen md:sticky md:top-0 custom-scrollbar`}
      >
        <div className="glass border-b border-slate-700/50 p-4 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-2">
            <Lucide.FileJson size={20} className="text-cyan-400" />
            <div>
              <span className="font-bold text-white text-sm">CV Builder</span>
              <p className="text-[10px] text-slate-500">Auto-saves to browser</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={exportJSON} title="Export JSON" className="p-2 rounded-lg hover:bg-slate-700/50 transition-colors text-slate-400 hover:text-white">
              <Lucide.Download size={16} />
            </button>
            <button onClick={() => fileInputRef.current?.click()} title="Import JSON" className="p-2 rounded-lg hover:bg-slate-700/50 transition-colors text-slate-400 hover:text-white">
              <Lucide.Upload size={16} />
            </button>
            <input
              type="file" accept=".json"
              ref={fileInputRef} className="hidden"
              onChange={(e) => e.target.files?.[0] && importJSON(e.target.files[0])}
            />
            <button onClick={handlePrint} title="Print / Save PDF" className="p-2 rounded-lg hover:bg-slate-700/50 transition-colors text-slate-400 hover:text-white">
              <Lucide.Printer size={16} />
            </button>
            <button onClick={() => store.resetToDefault()} title="Reset" className="p-2 rounded-lg hover:bg-slate-700/50 transition-colors text-slate-400 hover:text-red-400">
              <Lucide.RotateCcw size={16} />
            </button>
          </div>
        </div>
        <FormPanel />
        <div className="h-8" >{/* spacer */}</div>
      </div>

      {/* Right Panel — Preview */}
      <div
        className={`${
          activeTab === 'preview' ? 'block' : 'hidden md:block'
        } flex-1 min-h-screen overflow-y-auto bg-slate-950`}
      >
        <div className="md:hidden sticky top-0 z-30 bg-slate-950 border-b border-slate-700/50 p-2">
          <a href="/" className="text-sm text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
            <Lucide.ArrowLeft size={14} />Back to CV
          </a>
        </div>
        <Preview />
      </div>
    </div>
    </AuthGate>
  );
}
