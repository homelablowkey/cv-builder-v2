'use client';
import { useState } from 'react';
import * as Lucide from 'lucide-react';
import { useCVStore } from '@/lib/store/useCVStore';
import { JobDuty, SkillItem } from '@/lib/types/cv';
import { allThemes } from '@/lib/data/themes';

function Field({ label, children, hint }: { label: string; children: React.ReactNode; hint?: string }) {
  return (
    <div className="mb-3">
      <label className="block text-xs font-medium text-slate-400 mb-1 uppercase tracking-wider">{label}</label>
      {children}
      {hint && <p className="text-[10px] text-slate-500 mt-1">{hint}</p>}
    </div>
  );
}

function Input({ value, onChange, placeholder = '' }: { value: string; onChange: (v: string) => void; placeholder?: string }) {
  return (
    <input
      value={value} onChange={(e) => onChange(e.target.value)}
      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
      placeholder={placeholder}
    />
  );
}

function TextArea({ value, onChange, rows = 3 }: { value: string; onChange: (v: string) => void; rows?: number }) {
  return (
    <textarea
      value={value} onChange={(e) => onChange(e.target.value)}
      rows={rows}
      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-y"
    />
  );
}

function Accordion({ title, defaultOpen = false, icon: Icon, children }: { title: string; defaultOpen?: boolean; icon?: React.ElementType; children: React.ReactNode }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-slate-700/50 rounded-xl mb-3 overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center gap-2 px-4 py-3 bg-slate-800/40 hover:bg-slate-800/60 text-left transition-colors">
        {Icon && <Icon size={16} className="text-cyan-400" />}
        <span className="flex-1 text-sm font-semibold text-slate-200">{title}</span>
        <Lucide.ChevronDown size={16} className={`text-slate-400 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <div className="p-4 border-t border-slate-700/30">{children}</div>}
    </div>
  );
}

export default function FormPanel() {
  const store = useCVStore();

  return (
    <div className="p-4">
      {/* Section Visibility & Theme */}
      <div className="glass rounded-2xl p-4 mb-6">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Visible Sections</h3>
        <div className="grid grid-cols-2 gap-2 mb-4">
          {Object.entries(store.sections).map(([key, visible]) => (
            <label key={key} className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer">
              <input type="checkbox" checked={visible} onChange={(e) => store.setSection(key, e.target.checked)} className="accent-cyan-500" />
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </label>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-400">Theme:</span>
          <div className="flex items-center gap-2">
            {allThemes.map((t) => (
              <button
                key={t.id}
                onClick={() => store.setThemeId(t.id)}
                title={t.name}
                className={`w-6 h-6 rounded-full border-2 transition-all ${store.themeId === t.id ? 'border-white scale-110' : 'border-transparent hover:border-white/30'}`}
                style={{ background: t.vars['--accent'] }}
              />
            ))}
          </div>
          <span className="text-xs text-slate-500 font-mono">{allThemes.find(t => t.id === store.themeId)?.name || 'Cyan'}</span>
        </div>
      </div>

      <Accordion title="Hero Section" defaultOpen icon={Lucide.Home}>
        <Field label="Name"><Input value={store.hero.name} onChange={(v) => store.setHero({ ...store.hero, name: v })} /></Field>
        <Field label="Title"><Input value={store.hero.title} onChange={(v) => store.setHero({ ...store.hero, title: v })} /></Field>
        <Field label="Tagline"><Input value={store.hero.tagline} onChange={(v) => store.setHero({ ...store.hero, tagline: v })} /></Field>
        <Field label="Summary"><TextArea value={store.hero.summary} onChange={(v) => store.setHero({ ...store.hero, summary: v })} rows={3} /></Field>
        <Field label="Stats">
          {store.hero.stats.map((s, i) => (
            <div key={i} className="flex items-center gap-2 mb-2">
              <Input value={s.label} onChange={(v) => { const arr = [...store.hero.stats]; arr[i] = { ...arr[i], label: v }; store.setHero({ ...store.hero, stats: arr }); }} placeholder="Label" />
              <Input value={s.value} onChange={(v) => { const arr = [...store.hero.stats]; arr[i] = { ...arr[i], value: v }; store.setHero({ ...store.hero, stats: arr }); }} placeholder="Value" />
              <button onClick={() => store.setHero({ ...store.hero, stats: store.hero.stats.filter((_, idx) => idx !== i) })} className="text-red-400 hover:text-red-300 p-1"><Lucide.Trash2 size={14} /></button>
            </div>
          ))}
          <button onClick={() => store.setHero({ ...store.hero, stats: [...store.hero.stats, { icon: 'Users', label: '', value: '' }] })} className="text-xs flex items-center gap-1 text-cyan-400 hover:text-cyan-300 mt-2"><Lucide.Plus size={14} /> Add Stat</button>
        </Field>
        <Field label="Socials">
          {store.hero.socials.map((s, i) => (
            <div key={i} className="flex items-center gap-2 mb-2">
              <Input value={s.label} onChange={(v) => { const arr = [...store.hero.socials]; arr[i] = { ...arr[i], label: v }; store.setHero({ ...store.hero, socials: arr }); }} placeholder="Label" />
              <Input value={s.url} onChange={(v) => { const arr = [...store.hero.socials]; arr[i] = { ...arr[i], url: v }; store.setHero({ ...store.hero, socials: arr }); }} placeholder="URL" />
              <button onClick={() => store.setHero({ ...store.hero, socials: store.hero.socials.filter((_, idx) => idx !== i) })} className="text-red-400 hover:text-red-300 p-1"><Lucide.Trash2 size={14} /></button>
            </div>
          ))}
          <button onClick={() => store.setHero({ ...store.hero, socials: [...store.hero.socials, { icon: 'Globe', url: '', label: '' }] })} className="text-xs flex items-center gap-1 text-cyan-400 hover:text-cyan-300 mt-2"><Lucide.Plus size={14} /> Add Social</button>
        </Field>
      </Accordion>

      <Accordion title="About" icon={Lucide.User}>
        <Field label="Heading"><Input value={store.about.heading} onChange={(v) => store.setAbout({ ...store.about, heading: v })} /></Field>
        <Field label="Paragraphs">
          {store.about.paragraphs.map((p, i) => (
            <div key={i} className="flex gap-2 mb-2">
              <TextArea value={p} onChange={(v) => { const arr = [...store.about.paragraphs]; arr[i] = v; store.setAbout({ ...store.about, paragraphs: arr }); }} rows={2} />
              <button onClick={() => store.setAbout({ ...store.about, paragraphs: store.about.paragraphs.filter((_, idx) => idx !== i) })} className="text-red-400 hover:text-red-300 self-start p-1"><Lucide.Trash2 size={14} /></button>
            </div>
          ))}
          <button onClick={() => store.setAbout({ ...store.about, paragraphs: [...store.about.paragraphs, ''] })} className="text-xs flex items-center gap-1 text-cyan-400 hover:text-cyan-300 mt-1"><Lucide.Plus size={14} /> Add Paragraph</button>
        </Field>
        <Field label="Location"><Input value={store.about.location} onChange={(v) => store.setAbout({ ...store.about, location: v })} /></Field>
        <Field label="Country"><Input value={store.about.country} onChange={(v) => store.setAbout({ ...store.about, country: v })} /></Field>
        <Field label="Quick Facts">
          {store.about.quickFacts.map((f, i) => (
            <div key={i} className="flex items-center gap-2 mb-2">
              <Input value={f.label} onChange={(v) => { const arr = [...store.about.quickFacts]; arr[i] = { ...arr[i], label: v }; store.setAbout({ ...store.about, quickFacts: arr }); }} placeholder="Label" />
              <Input value={f.value} onChange={(v) => { const arr = [...store.about.quickFacts]; arr[i] = { ...arr[i], value: v }; store.setAbout({ ...store.about, quickFacts: arr }); }} placeholder="Value" />
              <button onClick={() => store.setAbout({ ...store.about, quickFacts: store.about.quickFacts.filter((_, idx) => idx !== i) })} className="text-red-400 hover:text-red-300 p-1"><Lucide.Trash2 size={14} /></button>
            </div>
          ))}
          <button onClick={() => store.setAbout({ ...store.about, quickFacts: [...store.about.quickFacts, { label: '', value: '' }] })} className="text-xs flex items-center gap-1 text-cyan-400 hover:text-cyan-300 mt-1"><Lucide.Plus size={14} /> Add Fact</button>
        </Field>
      </Accordion>

      <Accordion title="Skills" icon={Lucide.Wrench}>
        {store.skills.map((cat, ci) => (
          <div key={ci} className="border border-slate-700/30 rounded-lg p-3 mb-3">
            <div className="flex items-center gap-2 mb-2">
              <Input value={cat.title} onChange={(v) => { const arr = [...store.skills]; arr[ci] = { ...arr[ci], title: v }; store.setSkills(arr); }} />
              <button onClick={() => store.setSkills(store.skills.filter((_, idx) => idx !== ci))} className="text-red-400 hover:text-red-300 p-1"><Lucide.Trash2 size={14} /></button>
            </div>
            <div className="mb-2">
              {cat.items.map((item, ii) => (
                <div key={ii} className="flex items-center gap-2 mb-2">
                  <Input value={item.name} onChange={(v) => { const arr = [...store.skills]; const items = [...arr[ci].items]; items[ii] = { ...items[ii], name: v }; arr[ci] = { ...arr[ci], items }; store.setSkills(arr); }} placeholder="Skill name" />
                  <select value={item.level || ''} onChange={(e) => { const arr = [...store.skills]; const items = [...arr[ci].items]; items[ii] = { ...items[ii], level: (e.target.value as SkillItem['level']) || undefined }; arr[ci] = { ...arr[ci], items }; store.setSkills(arr); }} className="bg-slate-900 border border-slate-700 rounded-lg px-2 py-2 text-xs text-slate-200">
                    <option value="">None</option>
                    <option value="EXPERT">Expert</option>
                    <option value="STRONG">Strong</option>
                    <option value="PROFICIENT">Proficient</option>
                  </select>
                  <button onClick={() => { const arr = [...store.skills]; arr[ci] = { ...arr[ci], items: arr[ci].items.filter((_, idx) => idx !== ii) }; store.setSkills(arr); }} className="text-red-400 hover:text-red-300 p-1"><Lucide.Trash2 size={14} /></button>
                </div>
              ))}
              <button onClick={() => { const arr = [...store.skills]; arr[ci] = { ...arr[ci], items: [...arr[ci].items, { name: '', level: undefined }] }; store.setSkills(arr); }} className="text-xs flex items-center gap-1 text-cyan-400 hover:text-cyan-300"><Lucide.Plus size={14} /> Add Skill</button>
            </div>
          </div>
        ))}
        <button onClick={() => store.setSkills([...store.skills, { icon: 'Wrench', title: 'New Category', items: [] }])} className="text-xs flex items-center gap-1 text-cyan-400 hover:text-cyan-300 mt-2"><Lucide.Plus size={14} /> Add Category</button>
      </Accordion>

      <Accordion title="Experience" icon={Lucide.Briefcase}>
        {store.experience.map((job, i) => (
          <div key={i} className="border border-slate-700/30 rounded-lg p-3 mb-3">
            <button onClick={() => store.setExperience(store.experience.filter((_, idx) => idx !== i))} className="text-red-400 hover:text-red-300 float-right p-1"><Lucide.Trash2 size={14} /></button>
            <Field label="Date"><Input value={job.date} onChange={(v) => { const arr = [...store.experience]; arr[i] = { ...arr[i], date: v }; store.setExperience(arr); }} /></Field>
            <Field label="Title"><Input value={job.title} onChange={(v) => { const arr = [...store.experience]; arr[i] = { ...arr[i], title: v }; store.setExperience(arr); }} /></Field>
            <Field label="Company"><Input value={job.company} onChange={(v) => { const arr = [...store.experience]; arr[i] = { ...arr[i], company: v }; store.setExperience(arr); }} /></Field>
            <Field label="Location"><Input value={job.location} onChange={(v) => { const arr = [...store.experience]; arr[i] = { ...arr[i], location: v }; store.setExperience(arr); }} /></Field>
            <Field label="Duties">
              {job.duties.map((d, di) => (
                <div key={di} className="flex gap-2 mb-2">
                  <TextArea value={d.text} onChange={(v) => { const arr = [...store.experience]; const duties = [...arr[i].duties]; duties[di] = { ...duties[di], text: v }; arr[i] = { ...arr[i], duties }; store.setExperience(arr); }} rows={2} />
                  <div className="flex flex-col gap-1">
                    <Input value={d.highlight || ''} onChange={(v) => { const arr = [...store.experience]; const duties = [...arr[i].duties]; duties[di] = { ...duties[di], highlight: v || undefined }; arr[i] = { ...arr[i], duties }; store.setExperience(arr); }} placeholder="Highlight" />
                    <button onClick={() => { const arr = [...store.experience]; arr[i] = { ...arr[i], duties: arr[i].duties.filter((_, idx) => idx !== di) }; store.setExperience(arr); }} className="text-red-400 hover:text-red-300 self-start p-1"><Lucide.Trash2 size={14} /></button>
                  </div>
                </div>
              ))}
              <button onClick={() => { const arr = [...store.experience]; arr[i] = { ...arr[i], duties: [...arr[i].duties, { text: '' }] }; store.setExperience(arr); }} className="text-xs flex items-center gap-1 text-cyan-400 hover:text-cyan-300 mt-1"><Lucide.Plus size={14} /> Add Duty</button>
            </Field>
          </div>
        ))}
        <button onClick={() => store.setExperience([...store.experience, { date: '', title: '', company: '', location: '', duties: [{ text: '' }] }])} className="text-xs flex items-center gap-1 text-cyan-400 hover:text-cyan-300 mt-2"><Lucide.Plus size={14} /> Add Job</button>
      </Accordion>

      <Accordion title="Management Quotes" icon={Lucide.MessageSquare}>
        {store.managementQuotes.map((q, i) => (
          <div key={i} className="flex gap-2 mb-2">
            <TextArea value={q.text} onChange={(v) => { const arr = [...store.managementQuotes]; arr[i] = { text: v }; store.setManagementQuotes(arr); }} rows={2} />
            <button onClick={() => store.setManagementQuotes(store.managementQuotes.filter((_, idx) => idx !== i))} className="text-red-400 hover:text-red-300 self-start p-1"><Lucide.Trash2 size={14} /></button>
          </div>
        ))}
        <button onClick={() => store.setManagementQuotes([...store.managementQuotes, { text: '' }])} className="text-xs flex items-center gap-1 text-cyan-400 hover:text-cyan-300 mt-1"><Lucide.Plus size={14} /> Add Quote</button>
      </Accordion>

      <Accordion title="Adaptability" icon={Lucide.ShieldCheck}>
        {store.adaptability.map((a, i) => (
          <div key={i} className="border border-slate-700/30 rounded-lg p-3 mb-3">
            <Field label="Title"><Input value={a.title} onChange={(v) => { const arr = [...store.adaptability]; arr[i] = { ...arr[i], title: v }; store.setAdaptability(arr); }} /></Field>
            <Field label="Description"><TextArea value={a.description} onChange={(v) => { const arr = [...store.adaptability]; arr[i] = { ...arr[i], description: v }; store.setAdaptability(arr); }} rows={2} /></Field>
            <button onClick={() => store.setAdaptability(store.adaptability.filter((_, idx) => idx !== i))} className="text-xs text-red-400 hover:text-red-300 flex items-center gap-1 mt-1"><Lucide.Trash2 size={12} /> Remove</button>
          </div>
        ))}
        <button onClick={() => store.setAdaptability([...store.adaptability, { title: '', description: '' }])} className="text-xs flex items-center gap-1 text-cyan-400 hover:text-cyan-300 mt-2"><Lucide.Plus size={14} /> Add Card</button>
      </Accordion>

      <Accordion title="What Drives Me" icon={Lucide.Zap}>
        {store.drives.map((d, i) => (
          <div key={i} className="border border-slate-700/30 rounded-lg p-3 mb-3">
            <Field label="Title"><Input value={d.title} onChange={(v) => { const arr = [...store.drives]; arr[i] = { ...arr[i], title: v }; store.setDrives(arr); }} /></Field>
            <Field label="Icon Name"><Input value={d.icon} onChange={(v) => { const arr = [...store.drives]; arr[i] = { ...arr[i], icon: v }; store.setDrives(arr); }} placeholder="e.g. Hammer, Target, Users" /></Field>
            <Field label="Description"><TextArea value={d.description} onChange={(v) => { const arr = [...store.drives]; arr[i] = { ...arr[i], description: v }; store.setDrives(arr); }} rows={2} /></Field>
            <button onClick={() => store.setDrives(store.drives.filter((_, idx) => idx !== i))} className="text-xs text-red-400 hover:text-red-300 flex items-center gap-1 mt-1"><Lucide.Trash2 size={12} /> Remove</button>
          </div>
        ))}
        <button onClick={() => store.setDrives([...store.drives, { icon: 'Zap', title: '', description: '' }])} className="text-xs flex items-center gap-1 text-cyan-400 hover:text-cyan-300 mt-2"><Lucide.Plus size={14} /> Add Drive</button>
      </Accordion>

      <Accordion title="Projects" icon={Lucide.FolderOpen}>
        {store.projects.map((p, i) => (
          <div key={i} className="border border-slate-700/30 rounded-lg p-3 mb-3">
            <button onClick={() => store.setProjects(store.projects.filter((_, idx) => idx !== i))} className="text-red-400 hover:text-red-300 float-right p-1"><Lucide.Trash2 size={14} /></button>
            <Field label="Title"><Input value={p.title} onChange={(v) => { const arr = [...store.projects]; arr[i] = { ...arr[i], title: v }; store.setProjects(arr); }} /></Field>
            <Field label="Badge"><Input value={p.badge} onChange={(v) => { const arr = [...store.projects]; arr[i] = { ...arr[i], badge: v }; store.setProjects(arr); }} /></Field>
            <Field label="Subtitle"><Input value={p.subtitle} onChange={(v) => { const arr = [...store.projects]; arr[i] = { ...arr[i], subtitle: v }; store.setProjects(arr); }} /></Field>
            <Field label="Description"><TextArea value={p.description} onChange={(v) => { const arr = [...store.projects]; arr[i] = { ...arr[i], description: v }; store.setProjects(arr); }} rows={2} /></Field>
            <Field label="Bullets">
              {p.bullets.map((b, bi) => (
                <div key={bi} className="flex gap-2 mb-1">
                  <TextArea value={b} onChange={(v) => { const arr = [...store.projects]; const bullets = [...arr[i].bullets]; bullets[bi] = v; arr[i] = { ...arr[i], bullets }; store.setProjects(arr); }} rows={1} />
                  <button onClick={() => { const arr = [...store.projects]; arr[i] = { ...arr[i], bullets: arr[i].bullets.filter((_, idx) => idx !== bi) }; store.setProjects(arr); }} className="text-red-400 hover:text-red-300 self-start p-1"><Lucide.Trash2 size={14} /></button>
                </div>
              ))}
              <button onClick={() => { const arr = [...store.projects]; arr[i] = { ...arr[i], bullets: [...arr[i].bullets, ''] }; store.setProjects(arr); }} className="text-xs flex items-center gap-1 text-cyan-400 hover:text-cyan-300 mt-1"><Lucide.Plus size={14} /> Add Bullet</button>
            </Field>
            <Field label="Tags (comma separated)"><Input value={p.tags.join(', ')} onChange={(v) => { const arr = [...store.projects]; arr[i] = { ...arr[i], tags: v.split(',').map(s => s.trim()).filter(Boolean) }; store.setProjects(arr); }} /></Field>
            <Field label="GitHub URL"><Input value={p.githubUrl || ''} onChange={(v) => { const arr = [...store.projects]; arr[i] = { ...arr[i], githubUrl: v }; store.setProjects(arr); }} /></Field>
            <Field label="Live Demo URL"><Input value={p.liveUrl || ''} onChange={(v) => { const arr = [...store.projects]; arr[i] = { ...arr[i], liveUrl: v }; store.setProjects(arr); }} /></Field>
          </div>
        ))}
        <button onClick={() => store.setProjects([...store.projects, { icon: 'FolderOpen', badge: 'New', title: '', subtitle: '', description: '', bullets: [], tags: [], githubUrl: '', liveUrl: '' }])} className="text-xs flex items-center gap-1 text-cyan-400 hover:text-cyan-300 mt-2"><Lucide.Plus size={14} /> Add Project</button>
      </Accordion>

      <Accordion title="Education" icon={Lucide.GraduationCap}>
        {store.education.map((e, i) => (
          <div key={i} className="border border-slate-700/30 rounded-lg p-3 mb-3">
            <button onClick={() => store.setEducation(store.education.filter((_, idx) => idx !== i))} className="text-red-400 hover:text-red-300 float-right p-1"><Lucide.Trash2 size={14} /></button>
            <Field label="Title"><Input value={e.title} onChange={(v) => { const arr = [...store.education]; arr[i] = { ...arr[i], title: v }; store.setEducation(arr); }} /></Field>
            <Field label="Field"><Input value={e.field} onChange={(v) => { const arr = [...store.education]; arr[i] = { ...arr[i], field: v }; store.setEducation(arr); }} /></Field>
            <Field label="Institution"><Input value={e.institution} onChange={(v) => { const arr = [...store.education]; arr[i] = { ...arr[i], institution: v }; store.setEducation(arr); }} /></Field>
            <Field label="Period"><Input value={e.period} onChange={(v) => { const arr = [...store.education]; arr[i] = { ...arr[i], period: v }; store.setEducation(arr); }} /></Field>
            <Field label="Icon Name"><Input value={e.icon} onChange={(v) => { const arr = [...store.education]; arr[i] = { ...arr[i], icon: v }; store.setEducation(arr); }} placeholder="e.g. GraduationCap, Certificate, Award" /></Field>
          </div>
        ))}
        <button onClick={() => store.setEducation([...store.education, { icon: 'GraduationCap', title: '', field: '', institution: '', period: '' }])} className="text-xs flex items-center gap-1 text-cyan-400 hover:text-cyan-300 mt-2"><Lucide.Plus size={14} /> Add Education</button>
      </Accordion>

      <Accordion title="Contact" icon={Lucide.Phone}>
        <Field label="Email"><Input value={store.contact.email} onChange={(v) => store.setContact({ ...store.contact, email: v })} /></Field>
        <Field label="LinkedIn"><Input value={store.contact.linkedin} onChange={(v) => store.setContact({ ...store.contact, linkedin: v })} /></Field>
        <Field label="GitHub"><Input value={store.contact.github} onChange={(v) => store.setContact({ ...store.contact, github: v })} /></Field>
        <Field label="Location"><Input value={store.contact.location} onChange={(v) => store.setContact({ ...store.contact, location: v })} /></Field>
      </Accordion>
    </div>
  );
}
