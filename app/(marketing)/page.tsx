'use client';
import { useEffect, useState } from 'react';
import cvDataJson from '@/lib/data/cv-data.json';
import { CVData } from '@/lib/types/cv';

function Icon({ name, className = '', size = 20, style }: { name: string; className?: string; size?: number; style?: React.CSSProperties }) {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const Lucide = require('lucide-react');
  const C = Lucide[name] || Lucide.Circle;
  return <C className={className} size={size} style={style} />;
}

export default function HomePage() {
  const [cv, setCv] = useState<CVData>(cvDataJson as CVData);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('cv-builder-data');
      if (saved) {
        const data = JSON.parse(saved);
        setCv(data);
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_) { /* ignore parse errors */ }
  }, []);

  useEffect(() => {
    document.title = cv.hero.name + ' — Portfolio';
  }, [cv.hero.name]);

  const accent = 'var(--accent)';

  return (
    <div className="bg-slate-950 text-slate-200 antialiased overflow-x-hidden">
      {/* Top Bar */}
      <div className="no-print fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between">
        <span className="text-sm font-bold text-white">{cv.hero.name}</span>
        <button
          onClick={() => window.print()}
          className="px-4 py-2 rounded-lg text-sm font-medium text-white hover:opacity-90 transition-opacity"
          style={{ background: 'var(--accent)' }}
        >
          Export PDF
        </button>
      </div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-8">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm" style={{ background: 'rgba(15, 23, 42, 0.4)', border: 'var(--accent-08)', color: accent }}>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: accent }} />
                  <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: accent }} />
                </span>
                {cv.hero.tagline}
              </div>
              <div>
                <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tight">
                  Hi, I&apos;m <br/>
                  <span className="text-transparent bg-clip-text"
                    style={{ backgroundImage: `linear-gradient(to right, ${accent}, 'var(--accent-gradient-end)')` }}>{cv.hero.name}</span>
                </h1>
                <p className="mt-4 text-2xl md:text-3xl font-light text-slate-400">{cv.hero.title}</p>
              </div>
              <p className="text-lg text-slate-400 max-w-xl leading-relaxed">{cv.hero.summary}</p>
              <div className="flex items-center gap-4 pt-4">
                {cv.hero.socials.map((s, i) => (
                  <a key={i} href={s.url} className="w-11 h-11 rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-all border border-transparent"
                    style={{ backdropFilter: 'blur(8px)', background: 'rgba(15,23,42,0.4)' }}>
                    <Icon name={s.icon} size={18} />
                  </a>
                ))}
              </div>
            </div>
            <div className="lg:col-span-2 space-y-4">
              {cv.hero.stats.map((st, i) => (
                <div key={i} className="rounded-3xl p-6 card-hover" style={{ background: 'rgba(15,23,42,0.7)', border: '1px solid var(--accent-08)', backdropFilter: 'blur(12px)' }}>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'var(--accent-10)' }}>
                      <Icon name={st.icon} size={20} style={{ color: accent }} />
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-white">{st.value}</p>
                      <p className="text-sm text-slate-400">{st.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6" style={{ background: 'rgba(15,23,42,0.4)', color: accent, border: 'var(--accent-08)' }}>About Me</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">{cv.about.heading}</h2>
            <div className="mt-8 max-w-2xl mx-auto space-y-4">
              {cv.about.paragraphs.map((p, i) => <p key={i} className="text-slate-400 text-lg leading-relaxed">{p}</p>)}
            </div>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <span className="px-4 py-2 rounded-full text-sm text-slate-300" style={{ background: 'rgba(15,23,42,0.7)', border: '1px solid var(--accent-08)' }}>📍 {cv.about.location}</span>
              <span className="px-4 py-2 rounded-full text-sm text-slate-300" style={{ background: 'rgba(15,23,42,0.7)', border: '1px solid var(--accent-08)' }}>🌍 {cv.about.country}</span>
              {cv.about.languages && (
                <span className="px-4 py-2 rounded-full text-sm text-slate-300" style={{ background: 'rgba(15,23,42,0.7)', border: '1px solid var(--accent-08)' }}>🗣️ {cv.about.languages}</span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6" style={{ background: 'rgba(15,23,42,0.4)', color: accent, border: 'var(--accent-08)' }}>Technical Expertise</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">My <span style={{ color: accent }}>Tech Stack</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cv.skills.map((cat, ci) => (
              <div key={ci} className="rounded-3xl p-6 card-hover" style={{ background: 'rgba(15,23,42,0.7)', border: '1px solid var(--accent-08)', backdropFilter: 'blur(12px)' }}>
                <h3 className="text-xl font-bold text-white mb-4">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item, ii) => (
                    <span key={ii} className="px-3 py-1.5 rounded-lg text-sm text-slate-300"
                      style={{ background: 'rgba(15,23,42,0.4)', border: '1px solid var(--accent-10)' }}>
                      {item.name}{item.level ? ` · ${item.level}` : ''}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6" style={{ background: 'rgba(15,23,42,0.4)', color: accent, border: 'var(--accent-08)' }}>Professional Journey</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Work <span style={{ color: accent }}>Experience</span></h2>
          </div>
          <div className="space-y-12">
            {cv.experience.map((job, i) => (
              <div key={i} className="rounded-2xl p-6 md:p-8" style={{ background: 'rgba(15,23,42,0.7)', border: '1px solid var(--accent-08)', backdropFilter: 'blur(12px)' }}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <span className="font-mono text-sm" style={{ color: accent }}>{job.date}</span>
                    <h3 className="text-2xl font-bold text-white mt-1">{job.title}</h3>
                    <p className="text-slate-400 font-medium">{job.company} · {job.location}</p>
                    {job.techStack && job.techStack.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {job.techStack.map((tech, ti) => (
                          <span key={ti} className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wide text-slate-300" style={{ background: 'var(--accent-10)', border: '1px solid var(--accent-15)' }}>{tech}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <ul className="space-y-2">
                  {job.duties.map((d, di) => (
                    <li key={di} className="text-slate-400 text-sm leading-relaxed">
                      {d.text}{d.highlight && <> <strong style={{ color: accent }}>{d.highlight}</strong></>}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6" style={{ background: 'rgba(15,23,42,0.4)', color: accent, border: 'var(--accent-08)' }}>Featured Work</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Side <span style={{ color: accent }}>Projects</span></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {cv.projects.map((p, i) => (
              <div key={i} className="rounded-3xl p-8 card-hover" style={{ background: 'rgba(15,23,42,0.7)', border: '1px solid var(--accent-08)', backdropFilter: 'blur(12px)' }}>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs" style={{ color: accent }}>{p.badge}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{p.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{p.description}</p>
                {p.bullets.length > 0 && (
                  <ul className="space-y-1 text-slate-400 text-sm mb-4 list-disc list-inside">
                    {p.bullets.map((b, bi) => <li key={bi}>{b}</li>)}
                  </ul>
                )}
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t, ti) => (
                    <span key={ti} className="px-2.5 py-1 rounded-md text-xs text-slate-300" style={{ background: 'rgba(15,23,42,0.4)', border: '1px solid var(--accent-10)' }}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6" style={{ background: 'rgba(15,23,42,0.4)', color: accent, border: 'var(--accent-08)' }}>Learning & Credentials</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Education & <span style={{ color: accent }}>Certifications</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {cv.education.map((e, i) => (
              <div key={i} className="rounded-3xl p-6 card-hover text-center" style={{ background: 'rgba(15,23,42,0.7)', border: '1px solid var(--accent-08)', backdropFilter: 'blur(12px)' }}>
                <h3 className="text-lg font-bold text-white mb-2">{e.title}</h3>
                <p className="font-medium mb-1" style={{ color: accent }}>{e.field}</p>
                <p className="text-slate-400 text-sm mb-3">{e.institution}</p>
                <span className="inline-block px-3 py-1 rounded-full text-xs text-slate-400" style={{ background: 'rgba(15,23,42,0.4)', border: '1px solid var(--accent-10)' }}>{e.period}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Ready to <span style={{ color: accent }}>Build</span> Something?</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a href={`mailto:${cv.contact.email}`} className="px-8 py-4 text-white font-semibold rounded-2xl hover:shadow-xl transition-all text-lg"
              style={{ background: accent }}>
              Get In Touch
            </a>
          </div>
          <p className="text-slate-400 text-sm mt-8">📍 {cv.contact.location}</p>
        </div>
      </section>

      <footer className="py-8 border-t border-slate-800/50">
        <div className="max-w-6xl mx-auto px-6 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} {cv.hero.name}. Built with passion & code.
        </div>
      </footer>
    </div>
  );
}
