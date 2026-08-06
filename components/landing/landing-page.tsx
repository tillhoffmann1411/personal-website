import Image from 'next/image';
import Link from 'next/link';
import { siteContent } from '@/lib/data/site-content';
import { projects } from '@/lib/data/projects';
import TerminalChatBubble from '@/components/mrrobot/terminal-chat-bubble';
import { ModeToggle } from '@/components/mode-toggle';
import ClientProjects from './client-projects';
import CornerMarks from './corner-marks';
import EducationRow from './education-row';
import ProjectCard from './project-card';
import ScrollNavButton from './scroll-nav-button';
import SiteNav from './site-nav';

const navItems = Object.values(siteContent.sections);

const navLinkClass =
  'font-mono text-xs uppercase tracking-widest text-zinc-500 border-b-2 pb-1 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100';
const navLinkActiveClass = 'border-brand-700 text-brand-800 dark:border-brand-400 dark:text-brand-300';
const mobileNavLinkClass = `shrink-0 ${navLinkClass}`;

export default function LandingPage() {
  const { linkedIn, contact, profileImage } = siteContent;

  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <header className="sticky top-0 z-30 border-b border-zinc-200/80 bg-white/90 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/90">
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <ScrollNavButton
            id="about"
            className="flex items-center gap-2.5 text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100"
          >
            <Image src="/logo-mark.svg" alt="" width={22} height={22} className="shrink-0" aria-hidden="true" />
            <span className="font-mono text-xs uppercase tracking-widest">{siteContent.name}</span>
          </ScrollNavButton>
          <div className="flex items-center gap-3 sm:gap-4">
            <SiteNav
              items={navItems}
              className="hidden gap-7 sm:flex"
              linkClassName={navLinkClass}
              activeLinkClassName={navLinkActiveClass}
            />
            <ModeToggle />
          </div>
        </div>
        <SiteNav
          items={navItems}
          className="flex gap-4 overflow-x-auto border-t border-zinc-100 px-5 py-2 dark:border-zinc-800 sm:hidden"
          linkClassName={mobileNavLinkClass}
          activeLinkClassName={navLinkActiveClass}
        />
      </header>

      <main className="mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
        <section id="about" className="relative scroll-mt-20 overflow-hidden pb-16 sm:pb-20">
          <div
            aria-hidden="true"
            className="bg-dot-grid pointer-events-none absolute inset-0 -z-10 text-zinc-200/70 dark:text-zinc-800/60"
          />
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
            <div className="shrink-0 self-center sm:self-start">
              <div className="relative border border-brand-700/40 p-2 dark:border-brand-500/30">
                <CornerMarks />
                <Image
                  src={profileImage}
                  alt={`Profilbild von ${siteContent.name}`}
                  width={128}
                  height={128}
                  className="h-32 w-32 rounded-full object-cover"
                  priority
                />
              </div>
            </div>
            <div className="min-w-0 flex-1 space-y-4 text-center sm:text-left">
              <div>
                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  {siteContent.name}
                </h1>
                <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">{siteContent.role}</p>
              </div>
              <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">{siteContent.tagline}</p>
              <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-start">
                <span className="inline-flex items-center gap-2 border border-brand-600 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-brand-700 dark:border-brand-600/70 dark:text-brand-300">
                  <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 bg-brand-500" />
                  {siteContent.availability}
                </span>
                <span className="text-sm text-zinc-400 dark:text-zinc-500">{siteContent.location}</span>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2 sm:justify-start">
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center border border-brand-900 bg-brand-900 px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-white transition-colors hover:bg-brand-800 hover:border-brand-800 dark:border-brand-100 dark:bg-brand-100 dark:text-brand-900 dark:hover:bg-white"
                >
                  E-Mail schreiben
                </a>
                <a
                  href={linkedIn.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-zinc-300 px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-zinc-700 transition-colors hover:border-brand-700 hover:text-brand-800 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-brand-400 dark:hover:text-brand-300"
                >
                  {linkedIn.name}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-20 border-t border-zinc-100 py-16 dark:border-zinc-800 sm:py-20">
          <h2 className="mb-8 font-mono text-sm font-medium uppercase tracking-widest text-brand-700 dark:text-brand-400">
            {'// Projekte'}
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

        <section id="work" className="scroll-mt-20 border-t border-zinc-100 py-16 dark:border-zinc-800 sm:py-20">
          <h2 className="mb-2 font-mono text-sm font-medium uppercase tracking-widest text-brand-700 dark:text-brand-400">
            {'// Kundenprojekte'}
          </h2>
          <p className="mb-8 max-w-xl text-sm text-zinc-500 dark:text-zinc-400">
            Eine Auswahl laufender und abgeschlossener Projekte — die vollständige Liste gibt es auf Anfrage.
          </p>
          <ClientProjects items={siteContent.clientProjects.items} />
          <p className="mt-6 font-mono text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            {siteContent.clientProjects.note}
          </p>
        </section>

        <section id="education" className="scroll-mt-20 border-t border-zinc-100 py-16 dark:border-zinc-800 sm:py-20">
          <h2 className="mb-8 font-mono text-sm font-medium uppercase tracking-widest text-brand-700 dark:text-brand-400">
            {'// Ausbildung'}
          </h2>
          <EducationRow items={siteContent.education} />
        </section>
      </main>

      <footer className="border-t border-zinc-800 bg-zinc-950 px-5 py-6 sm:px-8">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-widest text-zinc-400 sm:justify-between">
          <span>© {new Date().getFullYear()} {siteContent.name}</span>
          <span>{siteContent.location}</span>
          <Link href="/impressum" className="transition-colors hover:text-brand-300">
            Impressum
          </Link>
        </div>
      </footer>

      <TerminalChatBubble />
    </div>
  );
}
