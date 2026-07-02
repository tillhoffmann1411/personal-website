'use client';

import Image from 'next/image';
import { siteContent, scrollToSection, type SectionId } from '@/lib/data/site-content';
import TerminalChatBubble from '@/components/mrrobot/terminal-chat-bubble';
import EducationRow from './education-row';
import ProjectCard from './project-card';

type LandingPageProps = {
  onReboot: () => void;
};

const navItems = Object.values(siteContent.sections).filter(
  (s) => s.id !== 'impressum',
);

export default function LandingPage({ onReboot }: LandingPageProps) {
  const handleNav = (id: SectionId) => scrollToSection(id);
  const { impressum, linkedIn, contact } = siteContent;

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <header className="sticky top-0 z-30 border-b border-zinc-200/80 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-5 py-4 sm:px-8">
          <button
            type="button"
            onClick={() => scrollToSection('about')}
            className="text-sm font-semibold tracking-tight text-zinc-900"
          >
            {siteContent.name}
          </button>
          <nav className="hidden gap-6 sm:flex" aria-label="Hauptnavigation">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNav(item.id as SectionId)}
                className="text-sm text-zinc-500 transition-colors hover:text-zinc-900"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
        <nav
          className="flex gap-4 overflow-x-auto border-t border-zinc-100 px-5 py-2 sm:hidden"
          aria-label="Mobile navigation"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNav(item.id as SectionId)}
              className="shrink-0 text-sm text-zinc-500"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </header>

      <main className="mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
        <section id="about" className="scroll-mt-20 pb-16 sm:pb-20">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
            <div className="shrink-0 self-center sm:self-start">
              <Image
                src="/images/profile-picture-2.webp"
                alt={`Profilbild von ${siteContent.name}`}
                width={112}
                height={112}
                className="h-28 w-28 rounded-full object-cover"
                priority
              />
            </div>
            <div className="min-w-0 flex-1 space-y-4 text-center sm:text-left">
              <div>
                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  {siteContent.name}
                </h1>
                <p className="mt-2 text-lg text-zinc-600">{siteContent.role}</p>
              </div>
              <p className="leading-relaxed text-zinc-600">{siteContent.tagline}</p>
              <p className="text-sm text-zinc-400">{siteContent.location}</p>
              <a
                href={linkedIn.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-4 py-2 text-sm text-zinc-700 transition-colors hover:border-zinc-900 hover:text-zinc-900"
              >
                {linkedIn.name} →
              </a>
            </div>
          </div>
        </section>

        <section id="education" className="scroll-mt-20 border-t border-zinc-100 py-16 sm:py-20">
          <h2 className="mb-8 text-sm font-medium uppercase tracking-widest text-zinc-400">
            Ausbildung
          </h2>
          <EducationRow items={[...siteContent.education]} />
        </section>

        <section id="projects" className="scroll-mt-20 border-t border-zinc-100 py-16 sm:py-20">
          <h2 className="mb-8 text-sm font-medium uppercase tracking-widest text-zinc-400">
            Projekte
          </h2>
          <div className="space-y-10">
            {siteContent.projects.map((project, index) => (
              <ProjectCard
                key={project.name}
                project={project}
                reversed={index % 2 === 1}
              />
            ))}
          </div>
        </section>

        <section id="contact" className="scroll-mt-20 border-t border-zinc-100 py-16 sm:py-20">
          <h2 className="mb-8 text-sm font-medium uppercase tracking-widest text-zinc-400">
            Kontakt
          </h2>
          <p className="text-zinc-600">
            Schreib mir gerne eine E-Mail:{' '}
            <a
              href={`mailto:${contact.email}`}
              className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900"
            >
              {contact.email}
            </a>
          </p>
        </section>

        <section id="impressum" className="scroll-mt-20 border-t border-zinc-100 py-16 sm:py-20">
          <h2 className="mb-6 text-sm font-medium uppercase tracking-widest text-zinc-400">
            Impressum
          </h2>
          <address className="not-italic leading-relaxed text-zinc-600">
            <p className="font-medium text-zinc-900">{impressum.name}</p>
            <p className="mt-2">{impressum.street}</p>
            <p>{impressum.city}</p>
            <p>{impressum.country}</p>
            <p className="mt-3">
              <a
                href={`mailto:${impressum.email}`}
                className="text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900"
              >
                {impressum.email}
              </a>
            </p>
          </address>
        </section>
      </main>

      <footer className="border-t border-zinc-100 py-8 text-center text-sm text-zinc-400">
        <p>© {new Date().getFullYear()} {siteContent.name}</p>
        <button
          type="button"
          onClick={() => scrollToSection('impressum')}
          className="mt-2 text-zinc-400 underline decoration-zinc-200 underline-offset-2 hover:text-zinc-600"
        >
          Impressum
        </button>
      </footer>

      <TerminalChatBubble onReboot={onReboot} onNavigate={handleNav} />
    </div>
  );
}
