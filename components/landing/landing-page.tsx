import Image from 'next/image';
import Link from 'next/link';
import { siteContent } from '@/lib/data/site-content';
import { projects } from '@/lib/data/projects';
import TerminalChatBubble from '@/components/mrrobot/terminal-chat-bubble';
import { ModeToggle } from '@/components/mode-toggle';
import EducationRow from './education-row';
import ProjectCard from './project-card';
import ScrollNavButton from './scroll-nav-button';

const navItems = Object.values(siteContent.sections);

export default function LandingPage() {
  const { linkedIn, contact, profileImage } = siteContent;

  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <header className="sticky top-0 z-30 border-b border-zinc-200/80 bg-white/90 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/90">
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <ScrollNavButton
            id="about"
            className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100"
          >
            {siteContent.name}
          </ScrollNavButton>
          <div className="flex items-center gap-3 sm:gap-4">
            <nav className="hidden gap-6 sm:flex" aria-label="Hauptnavigation">
              {navItems.map((item) => (
                <ScrollNavButton
                  key={item.id}
                  id={item.id}
                  className="text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                >
                  {item.label}
                </ScrollNavButton>
              ))}
            </nav>
            <ModeToggle />
          </div>
        </div>
        <nav
          className="flex gap-4 overflow-x-auto border-t border-zinc-100 px-5 py-2 dark:border-zinc-800 sm:hidden"
          aria-label="Mobile navigation"
        >
          {navItems.map((item) => (
            <ScrollNavButton
              key={item.id}
              id={item.id}
              className="shrink-0 text-sm text-zinc-500 dark:text-zinc-400"
            >
              {item.label}
            </ScrollNavButton>
          ))}
        </nav>
      </header>

      <main className="mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
        <section id="about" className="scroll-mt-20 pb-16 sm:pb-20">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
            <div className="shrink-0 self-center sm:self-start">
              <Image
                src={profileImage}
                alt={`Profilbild von ${siteContent.name}`}
                width={128}
                height={128}
                className="h-32 w-32 rounded-full object-cover ring-2 ring-zinc-200 dark:ring-zinc-800"
                priority
              />
            </div>
            <div className="min-w-0 flex-1 space-y-4 text-center sm:text-left">
              <div>
                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  {siteContent.name}
                </h1>
                <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">{siteContent.role}</p>
              </div>
              <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">{siteContent.tagline}</p>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">{siteContent.location}</p>
              <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-start">
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center rounded-full border border-zinc-200 px-4 py-2 text-sm text-zinc-700 transition-colors hover:border-zinc-900 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-400 dark:hover:text-zinc-100"
                >
                  E-Mail schreiben
                </a>
                <a
                  href={linkedIn.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-4 py-2 text-sm text-zinc-700 transition-colors hover:border-zinc-900 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-400 dark:hover:text-zinc-100"
                >
                  {linkedIn.name}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="scroll-mt-20 border-t border-zinc-100 py-16 dark:border-zinc-800 sm:py-20">
          <h2 className="mb-8 text-sm font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            Ausbildung
          </h2>
          <EducationRow items={[...siteContent.education]} />
        </section>

        <section id="projects" className="scroll-mt-20 border-t border-zinc-100 py-16 dark:border-zinc-800 sm:py-20">
          <h2 className="mb-8 text-sm font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            Projekte
          </h2>
          <div className="space-y-10">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.name}
                project={project}
                reversed={index % 2 === 1}
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-100 py-8 text-center text-sm text-zinc-400 dark:border-zinc-800 dark:text-zinc-500">
        <p>© {new Date().getFullYear()} {siteContent.name}</p>
        <Link
          href="/impressum"
          className="mt-2 inline-block text-zinc-400 underline decoration-zinc-200 underline-offset-2 hover:text-zinc-600 dark:text-zinc-500 dark:decoration-zinc-700 dark:hover:text-zinc-300"
        >
          Impressum
        </Link>
      </footer>

      <TerminalChatBubble />
    </div>
  );
}
