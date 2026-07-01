'use client';

import { useCallback, useState } from 'react';
import { siteContent, type SectionId } from '@/lib/data/site-content';
import AboutSection from './sections/about-section';
import ContactSection from './sections/contact-section';
import EducationSection from './sections/education-section';
import ProjectsSection from './sections/projects-section';
import WorkSection from './sections/work-section';
import CommandTerminal from './command-terminal';
import { GlitchText, Scanlines } from './ui';

const sectionComponents: Record<SectionId, () => JSX.Element> = {
  about: AboutSection,
  education: EducationSection,
  work: WorkSection,
  projects: ProjectsSection,
  contact: ContactSection,
};

type MainSiteProps = {
  onReboot: () => void;
};

export default function MainSite({ onReboot }: MainSiteProps) {
  const [activeSection, setActiveSection] = useState<SectionId>('about');
  const [transitioning, setTransitioning] = useState(false);

  const navigate = useCallback((id: SectionId) => {
    setTransitioning(true);
    setActiveSection(id);
    setTimeout(() => setTransitioning(false), 300);
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const ActiveComponent = sectionComponents[activeSection];

  return (
    <div className="mr-site relative min-h-screen bg-mr-black pb-48 font-mono text-mr-green">
      <Scanlines />

      <header className="sticky top-0 z-30 border-b border-mr-green/20 bg-mr-black/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3 sm:px-6">
          <div>
            <GlitchText as="h1" className="text-sm font-bold text-mr-white sm:text-base">
              {siteContent.handle}
            </GlitchText>
            <p className="text-[10px] text-mr-green/50 sm:text-xs">
              uid=0(root) gid=0(root) groups=0(root)
            </p>
          </div>
          <div className="hidden text-right text-[10px] text-mr-red/80 sm:block sm:text-xs">
            <span className="mr-flicker">● REC</span>
            <span className="ml-3 text-mr-green/40">fsociety</span>
          </div>
        </div>

        <nav
          className="mx-auto flex max-w-4xl gap-1 overflow-x-auto px-4 pb-2 sm:gap-2 sm:px-6"
          aria-label="Section navigation"
        >
          {Object.values(siteContent.sections).map((section) => (
            <button
              key={section.id}
              type="button"
              onClick={() => navigate(section.id as SectionId)}
              className={`shrink-0 border px-2 py-1.5 text-[10px] transition-all sm:px-3 sm:text-xs ${
                activeSection === section.id
                  ? 'border-mr-red bg-mr-red/10 text-mr-red'
                  : 'border-mr-green/30 text-mr-green/70 hover:border-mr-green hover:text-mr-green'
              }`}
            >
              {section.title}
            </button>
          ))}
        </nav>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-6 sm:px-6 sm:py-8">
        <div
          className={`transition-opacity duration-300 ${transitioning ? 'opacity-50' : 'opacity-100'}`}
        >
          <div id={activeSection}>
            <ActiveComponent />
          </div>
        </div>

        <aside className="mt-8 border border-mr-green/10 bg-mr-dark/30 p-4 text-xs text-mr-green/40">
          <p className="mb-1 text-mr-red/60">{'// easter eggs detected'}</p>
          <p>Try: fsociety · hello · control · ecorp · quote · reboot</p>
        </aside>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 z-50">
        <CommandTerminal
          activeSection={activeSection}
          onNavigate={navigate}
          onReboot={onReboot}
        />
      </footer>
    </div>
  );
}
