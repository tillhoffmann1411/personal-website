'use client';

import Image from 'next/image';
import { siteContent, scrollToSection, type SectionId } from '@/lib/data/site-content';
import TerminalChatBubble from '@/components/mrrobot/terminal-chat-bubble';

type LandingPageProps = {
  onReboot: () => void;
};

const navItems = Object.values(siteContent.sections);

export default function LandingPage({ onReboot }: LandingPageProps) {
  const handleNav = (id: SectionId) => scrollToSection(id);

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <header className="sticky top-0 z-30 border-b border-zinc-200/80 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-4 sm:px-8">
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

      <main className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
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
            </div>
          </div>
        </section>

        <section id="education" className="scroll-mt-20 border-t border-zinc-100 py-16 sm:py-20">
          <h2 className="mb-8 text-sm font-medium uppercase tracking-widest text-zinc-400">
            Ausbildung
          </h2>
          <ul className="space-y-8">
            {siteContent.education.map((item) => (
              <li key={item.degree}>
                <p className="font-medium text-zinc-900">{item.degree}</p>
                <p className="mt-1 text-zinc-600">{item.institution}</p>
                <p className="mt-0.5 text-sm text-zinc-400">{item.detail}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="work" className="scroll-mt-20 border-t border-zinc-100 py-16 sm:py-20">
          <h2 className="mb-8 text-sm font-medium uppercase tracking-widest text-zinc-400">
            Aktuell
          </h2>
          <p className="mb-6 leading-relaxed text-zinc-600">
            {siteContent.work.description}
          </p>
          <ul className="space-y-2">
            {siteContent.work.items.map((item) => (
              <li key={item} className="flex items-center gap-3 text-zinc-700">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-900" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section id="projects" className="scroll-mt-20 border-t border-zinc-100 py-16 sm:py-20">
          <h2 className="mb-8 text-sm font-medium uppercase tracking-widest text-zinc-400">
            Projekte
          </h2>
          <div className="space-y-8">
            {siteContent.projects.map((project) => (
              <article key={project.name} className="space-y-3">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg font-medium text-zinc-900">{project.name}</h3>
                  {project.status === 'coming-soon' && (
                    <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs text-zinc-500">
                      Bald verfügbar
                    </span>
                  )}
                </div>
                <p className="leading-relaxed text-zinc-600">{project.description}</p>
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex text-sm font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 transition-colors hover:decoration-zinc-900"
                  >
                    Zur Webseite →
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="scroll-mt-20 border-t border-zinc-100 py-16 sm:py-20">
          <h2 className="mb-8 text-sm font-medium uppercase tracking-widest text-zinc-400">
            Kontakt
          </h2>
          <p className="mb-6 text-zinc-600">
            Du findest mich auf folgenden Plattformen:
          </p>
          <div className="flex flex-wrap gap-3">
            {siteContent.social.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-zinc-200 px-4 py-2 text-sm text-zinc-700 transition-colors hover:border-zinc-900 hover:text-zinc-900"
              >
                {link.name}
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-100 py-8 text-center text-sm text-zinc-400">
        © {new Date().getFullYear()} {siteContent.name}
      </footer>

      <TerminalChatBubble onReboot={onReboot} onNavigate={handleNav} />
    </div>
  );
}
