'use client';
import { useCVStore } from '@/lib/store/useCVStore';
import { Icon } from '@/components/Icon';
import { useEffect } from 'react';
import * as Lucide from 'lucide-react';

const brand = '#00bcd4';

export function Preview() {
  return (
    <div id="cv-preview" className="bg-slate-950 text-slate-200 antialiased overflow-x-hidden w-full">
      <HeroPreview />
      <AboutPreview />
      <SkillsPreview />
      <ExperiencePreview />
      <ManagementPreview />
      <AdaptabilityPreview />
      <DrivesPreview />
      <ProjectsPreview />
      <EducationPreview />
      <ContactPreview />
      <FooterPreview />
    </div>
  );
}

function Section({ id, children, className = '' }: { id: string; children: React.ReactNode; className?: string }) {
  const visible = useCVStore((s) => s.sections[id] !== false);
  if (!visible) return null;
  return <section id={id} className={className}>{children}</section>;
}

function HeroPreview() {
  const hero = useCVStore((s) => s.hero);
  const accent = useCVStore((s) => s.accentColor);
  return (
    <Section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 pb-8">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm" style={{ background: 'rgba(15, 23, 42, 0.4)', border: `1px solid ${accent}1a`, color: accent }}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: accent }} />
                <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: accent }} />
              </span>
              {hero.tagline}
            </div>
            <div>
              <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tight">
                Hi, I'm <br/>
                <span className="text-transparent bg-clip-text text-glow" style={{ backgroundImage: `linear-gradient(to right, ${accent}, #67e8f9)` }}>{hero.name}</span>
              </h1>
              <p className="mt-4 text-2xl md:text-3xl font-light text-slate-400">{hero.title}</p>
            </div>
            <p className="text-lg text-slate-400 max-w-xl leading-relaxed">{hero.summary}</p>
            <div className="flex flex-wrap gap-4">
              <a href="#experience" className="px-8 py-4 text-white font-semibold rounded-2xl transition-all hover:shadow-xl hover:-translate-y-0.5" style={{ background: accent }}>View My Work</a>
            </div>
            <div className="flex items-center gap-4 pt-4">
              {hero.socials.map((s, i) => (
                <a key={i} href={s.url} className="w-11 h-11 rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-all border border-transparent hover:border-opacity-50" style={{ backdropFilter: 'blur(8px)', background: 'rgba(15,23,42,0.4)' }}>
                  <Icon name={s.icon} size={18} />
                </a>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2 space-y-4">
            {hero.stats.map((s, i) => (
              <div key={i} className="rounded-3xl p-6 card-hover" style={{ background: 'rgba(15,23,42,0.7)', border: '1px solid rgba(0,188,212,0.08)', backdropFilter: 'blur(12px)' }}>
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${accent}1a` }}>
                    <Icon name={s.icon} className="" size={20} style={{ color: accent }} />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white">{s.value}</p>
                    <p className="text-sm text-slate-400">{s.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-slate-500 hover:text-cyan-400 transition-colors">
          <Lucide.ChevronDown size={24} />
        </a>
      </div>
    </Section>
  );
}

function AboutPreview() {
  const about = useCVStore((s) => s.about);
  const accent = useCVStore((s) => s.accentColor);
  return (
    <Section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6" style={{ background: 'rgba(15,23,42,0.4)', color: accent, border: `1px solid ${accent}1a` }}>About Me</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{about.heading.split(' ').slice(0, -1).join(' ')} <span style={{ color: accent }}>{about.heading.split(' ').at(-1)}</span></h2>
            {about.paragraphs.map((p, i) => (<p key={i} className="text-slate-400 leading-relaxed text-lg mb-4">{p}</p>))}
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full text-sm" style={{ background: 'rgba(15,23,42,0.7)', color: accent, border: '1px solid rgba(0,188,212,0.08)' }}>
                <Lucide.MapPin size={14} className="inline mr-2" style={{ color: accent }} />{about.location}
              </span>
              <span className="px-4 py-2 rounded-full text-sm" style={{ background: 'rgba(15,23,42,0.7)', color: accent, border: '1px solid rgba(0,188,212,0.08)' }}>
                <Lucide.Flag size={14} className="inline mr-2" style={{ color: accent }} />{about.country}
              </span>
            </div>
          </div>
          <div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl blur-2xl" style={{ background: `linear-gradient(to right, ${accent}33, #67e8f933)` }} />
              <div className="rounded-3xl p-8 relative" style={{ background: 'rgba(15,23,42,0.7)', border: '1px solid rgba(0,188,212,0.08)', backdropFilter: 'blur(12px)' }}>
                <h3 className="text-xl font-bold text-white mb-6">Quick Facts</h3>
                <div className="grid grid-cols-2 gap-6">
                  {about.quickFacts.map((f, i) => (
                    <div key={i} className="text-center p-4 rounded-2xl" style={{ background: 'rgba(15,23,42,0.4)', border: '1px solid rgba(0,188,212,0.1)' }}>
                      <p className="text-3xl font-bold" style={{ color: accent }}>{f.value}</p>
                      <p className="text-sm text-slate-400 mt-1">{f.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function SkillsPreview() {
  const skills = useCVStore((s) => s.skills);
  const accent = useCVStore((s) => s.accentColor);
  const levelColors: Record<string, string> = { EXPERT: accent, STRONG: `${accent}cc`, PROFICIENT: '#94a3b8', '': '#64748b' };
  return (
    <Section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6" style={{ background: 'rgba(15,23,42,0.4)', color: accent, border: `1px solid ${accent}1a` }}>Technical Expertise</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">My <span style={{ color: accent }}>Tech Stack</span></h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">A versatile toolkit built over years of building production systems at scale.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((cat, ci) => (
            <div key={ci} className="rounded-3xl p-8 card-hover" style={{ background: 'rgba(15,23,42,0.7)', border: '1px solid rgba(0,188,212,0.08)', backdropFilter: 'blur(12px)' }}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background: `${accent}1a` }}>
                <Icon name={cat.icon} size={24} style={{ color: accent }} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item, ii) => (
                  <span key={ii} className="skill-pill px-3 py-1.5 rounded-lg text-sm text-slate-300 inline-flex items-center gap-1.5" style={{ background: 'rgba(15,23,42,0.4)', border: '1px solid rgba(0,188,212,0.1)' }}>
                    {item.name}
                    {item.level && (
                      <span className="inline-flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: levelColors[item.level] || '#64748b' }} />
                        <span className="text-[10px] uppercase tracking-wide" style={{ color: levelColors[item.level] || '#64748b' }}>{item.level}</span>
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function ExperiencePreview() {
  const exp = useCVStore((s) => s.experience);
  const accent = useCVStore((s) => s.accentColor);
  return (
    <Section id="experience" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6" style={{ background: 'rgba(15,23,42,0.4)', color: accent, border: `1px solid ${accent}1a` }}>Professional Journey</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Work <span style={{ color: accent }}>Experience</span></h2>
        </div>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 timeline-line transform md:-translate-x-1/2" />
          {exp.map((job, i) => (
            <div key={i} className={`relative mb-16 ${i % 2 === 1 ? 'md:grid md:grid-cols-2 md:gap-12 items-start' : 'md:grid md:grid-cols-2 md:gap-12 items-start'}`}>
              {i % 2 === 0 ? (
                <>
                  <div className="md:text-right md:pr-12">
                    <div className="hidden md:block absolute right-0 top-0 w-4 h-4 rounded-full ring-4 ring-slate-950 transform translate-x-1/2" style={{ background: accent, boxShadow: `0 0 20px ${accent}40` }} />
                    <span className="font-mono text-sm" style={{ color: accent }}>{job.date}</span>
                    <h3 className="text-2xl font-bold text-white mt-2">{job.title}</h3>
                    <p className="text-slate-400 font-medium">{job.company}</p>
                    <p className="text-slate-500 text-sm mt-1"><Lucide.MapPin size={12} className="inline mr-1" />{job.location}</p>
                  </div>
                  <div className="mt-4 md:mt-0 md:pl-12">
                    <div className="rounded-2xl p-6 card-hover" style={{ background: 'rgba(15,23,42,0.7)', border: '1px solid rgba(0,188,212,0.08)', backdropFilter: 'blur(12px)' }}>
                      <ul className="space-y-3 text-slate-400 text-sm leading-relaxed">
                        {job.duties.map((d, di) => (
                          <li key={di} className="flex gap-3">
                            <Lucide.CheckCircle size={14} className="mt-1 flex-shrink-0" style={{ color: accent }} />
                            <span>
                              {d.text}
                              {d.highlight && <> <strong style={{ color: accent }}>{d.highlight}</strong></>}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="md:text-right md:pr-12 md:order-1 order-2">
                    <div className="rounded-2xl p-6 card-hover" style={{ background: 'rgba(15,23,42,0.7)', border: '1px solid rgba(0,188,212,0.08)', backdropFilter: 'blur(12px)' }}>
                      <ul className="space-y-3 text-slate-400 text-sm leading-relaxed">
                        {job.duties.map((d, di) => (
                          <li key={di} className="flex gap-3">
                            <Lucide.CheckCircle size={14} className="mt-1 flex-shrink-0" style={{ color: accent }} />
                            <span>
                              {d.text}
                              {d.highlight && <> <strong style={{ color: accent }}>{d.highlight}</strong></>}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="md:pl-12 mt-4 md:mt-0 md:order-2 order-1">
                    <div className="hidden md:block absolute left-0 top-0 w-4 h-4 rounded-full ring-4 ring-slate-950 transform -translate-x-1/2" style={{ background: accent, boxShadow: `0 0 20px ${accent}40` }} />
                    <span className="font-mono text-sm" style={{ color: accent }}>{job.date}</span>
                    <h3 className="text-2xl font-bold text-white mt-2">{job.title}</h3>
                    <p className="text-slate-400 font-medium">{job.company}</p>
                    <p className="text-slate-500 text-sm mt-1"><Lucide.MapPin size={12} className="inline mr-1" />{job.location}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function ManagementPreview() {
  const quotes = useCVStore((s) => s.managementQuotes);
  const accent = useCVStore((s) => s.accentColor);
  return (
    <Section id="management" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6" style={{ background: 'rgba(15,23,42,0.4)', color: accent, border: `1px solid ${accent}1a` }}>Leadership</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">My Management <span style={{ color: accent }}>Style</span></h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {quotes.map((q, i) => (
            <div key={i} className="rounded-3xl p-6 card-hover" style={{ background: 'rgba(15,23,42,0.7)', border: '1px solid rgba(0,188,212,0.08)', backdropFilter: 'blur(12px)' }}>
              <Lucide.MessageSquare size={32} className="mb-4" style={{ color: `${accent}4d` }} />
              <p className="text-slate-300 text-base leading-relaxed">"{q.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function AdaptabilityPreview() {
  const cards = useCVStore((s) => s.adaptability);
  const accent = useCVStore((s) => s.accentColor);
  return (
    <Section id="adaptability" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6" style={{ background: 'rgba(15,23,42,0.4)', color: accent, border: `1px solid ${accent}1a` }}>Adaptability</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Thriving in Any <span style={{ color: accent }}>Environment</span></h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((c, i) => (
            <div key={i} className="rounded-3xl p-8 card-hover" style={{ background: 'rgba(15,23,42,0.7)', border: '1px solid rgba(0,188,212,0.08)', backdropFilter: 'blur(12px)' }}>
              <h3 className="text-xl font-bold text-white mb-3">{c.title}</h3>
              <p className="text-slate-400 leading-relaxed">{c.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function DrivesPreview() {
  const drives = useCVStore((s) => s.drives);
  const accent = useCVStore((s) => s.accentColor);
  return (
    <Section id="drives" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6" style={{ background: 'rgba(15,23,42,0.4)', color: accent, border: `1px solid ${accent}1a` }}>Motivation</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What <span style={{ color: accent }}>Drives</span> Me</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {drives.map((d, i) => (
            <div key={i} className="rounded-3xl p-8 card-hover text-center" style={{ background: 'rgba(15,23,42,0.7)', border: '1px solid rgba(0,188,212,0.08)', backdropFilter: 'blur(12px)' }}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 mx-auto" style={{ background: `${accent}1a` }}>
                <Icon name={d.icon} size={24} style={{ color: accent }} />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{d.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{d.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function ProjectsPreview() {
  const projects = useCVStore((s) => s.projects);
  const accent = useCVStore((s) => s.accentColor);
  return (
    <Section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6" style={{ background: 'rgba(15,23,42,0.4)', color: accent, border: `1px solid ${accent}1a` }}>Featured Work</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Side <span style={{ color: accent }}>Projects</span></h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="rounded-3xl overflow-hidden card-hover" style={{ background: 'rgba(15,23,42,0.7)', border: '1px solid rgba(0,188,212,0.08)', backdropFilter: 'blur(12px)' }}>
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: `${accent}1a` }}>
                    <Icon name={p.icon} size={24} style={{ color: accent }} />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono" style={{ background: 'rgba(15,23,42,0.4)', color: accent, border: '1px solid rgba(0,188,212,0.1)' }}>{p.badge}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{p.title}</h3>
                <p className="text-sm font-mono mb-4" style={{ color: accent }}>{p.subtitle}</p>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{p.description}</p>
                {p.bullets.length > 0 && (
                  <ul className="space-y-2 text-slate-400 text-sm mb-6 list-disc list-inside">
                    {p.bullets.map((b, bi) => (<li key={bi}>{b}</li>))}
                  </ul>
                )}
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tags.map((t, ti) => (
                    <span key={ti} className="px-2.5 py-1 rounded-md text-xs text-slate-300" style={{ background: 'rgba(15,23,42,0.4)', border: '1px solid rgba(0,188,212,0.1)' }}>{t}</span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {p.githubUrl && (
                    <a href={p.githubUrl} target="_blank" rel="noopener" className="flex-1 text-center px-4 py-2.5 text-white text-sm font-semibold rounded-xl transition-all" style={{ background: accent }}>
                      <Lucide.Github size={14} className="inline mr-2" />View Code
                    </a>
                  )}
                  {p.liveUrl && (
                    <a href={p.liveUrl} className={`flex-1 text-center px-4 py-2.5 text-white text-sm font-semibold rounded-xl transition-all border border-slate-700 ${p.liveDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:border-cyan-500/50'}`} style={{ background: 'rgba(15,23,42,0.4)' }}>
                      <Lucide.Globe size={14} className="inline mr-2" />Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function EducationPreview() {
  const education = useCVStore((s) => s.education);
  const accent = useCVStore((s) => s.accentColor);
  return (
    <Section id="education" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6" style={{ background: 'rgba(15,23,42,0.4)', color: accent, border: `1px solid ${accent}1a` }}>Learning & Credentials</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Education & <span style={{ color: accent }}>Certifications</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {education.map((e, i) => (
            <div key={i} className="rounded-3xl p-8 card-hover" style={{ background: 'rgba(15,23,42,0.7)', border: '1px solid rgba(0,188,212,0.08)', backdropFilter: 'blur(12px)' }}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background: `${accent}1a` }}>
                <Icon name={e.icon} size={24} style={{ color: accent }} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{e.title}</h3>
              <p className="font-medium mb-1" style={{ color: accent }}>{e.field}</p>
              <p className="text-slate-400 text-sm mb-3">{e.institution}</p>
              <span className="inline-block px-3 py-1 rounded-full text-xs text-slate-400" style={{ background: 'rgba(15,23,42,0.4)', border: '1px solid rgba(0,188,212,0.1)' }}>{e.period}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function ContactPreview() {
  const contact = useCVStore((s) => s.contact);
  const accent = useCVStore((s) => s.accentColor);
  return (
    <Section id="contact" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6" style={{ background: 'rgba(15,23,42,0.4)', color: accent, border: `1px solid ${accent}1a` }}>Let&apos;s Connect</div>
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Ready to <span style={{ color: accent }}>Build</span> Something?</h2>
        <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
          I&apos;m currently open to new opportunities and collaborations. Whether you have a project in mind or just want to chat about tech — let&apos;s talk.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a href={`mailto:${contact.email}`} className="px-8 py-4 text-white font-semibold rounded-2xl transition-all hover:shadow-xl hover:-translate-y-0.5 text-lg" style={{ background: accent }}>
            <Lucide.Send size={18} className="inline mr-2" />Get In Touch
          </a>
        </div>
        <div className="flex items-center justify-center gap-4 mb-12">
          <a href={`mailto:${contact.email}`} className="w-12 h-12 rounded-2xl flex items-center justify-center text-slate-400 hover:text-white transition-all border border-transparent" style={{ background: 'rgba(15,23,42,0.7)', borderColor: 'rgba(0,188,212,0.08)' }}>
            <Lucide.Mail size={18} />
          </a>
          {contact.linkedin && contact.linkedin !== '#' && (
            <a href={contact.linkedin} target="_blank" rel="noopener" className="w-12 h-12 rounded-2xl flex items-center justify-center text-slate-400 hover:text-white transition-all border border-transparent" style={{ background: 'rgba(15,23,42,0.7)', borderColor: 'rgba(0,188,212,0.08)' }}>
              <Lucide.Linkedin size={18} />
            </a>
          )}
          {contact.github && contact.github !== '#' && (
            <a href={contact.github} target="_blank" rel="noopener" className="w-12 h-12 rounded-2xl flex items-center justify-center text-slate-400 hover:text-white transition-all border border-transparent" style={{ background: 'rgba(15,23,42,0.7)', borderColor: 'rgba(0,188,212,0.08)' }}>
              <Lucide.Github size={18} />
            </a>
          )}
        </div>
        <div className="rounded-2xl p-6 inline-block" style={{ background: 'rgba(15,23,42,0.7)', border: '1px solid rgba(0,188,212,0.08)' }}>
          <p className="text-slate-400 text-sm">
            <Lucide.MapPin size={14} className="inline mr-2" style={{ color: accent }} />{contact.location}
          </p>
        </div>
      </div>
    </Section>
  );
}

function FooterPreview() {
  const accent = useCVStore((s) => s.accentColor);
  const name = useCVStore((s) => s.hero.name);
  useEffect(() => {
    const y = document.getElementById('year');
    if (y) y.textContent = String(new Date().getFullYear());
  }, []);
  return (
    <footer className="py-8 border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-white tracking-tight">
              <span style={{ color: accent }}>&lt;</span>{name}<span style={{ color: accent }}>/&gt;</span>
            </span>
          </div>
          <p className="text-slate-500 text-sm">
            &copy; <span id="year"></span> {name}. Built with passion & code.
          </p>
          <div className="flex items-center gap-4">
            {['About','Skills','Experience','Projects'].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="text-slate-500 hover:text-cyan-400 text-sm transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
