'use client';

import AboutSection from './sections/about-section';
import ContactSection from './sections/contact-section';
import EducationSection from './sections/education-section';
import ProjectsSection from './sections/projects-section';
import WorkSection from './sections/work-section';
import Clippy from './clippy';
import { DesktopProvider } from './desktop-context';
import StartMenu from './start-menu';
import Taskbar from './taskbar';

export default function RetroDesktop() {
  return (
    <DesktopProvider>
      <div className="xp-desktop-bg relative min-h-screen pb-[38px]">
      <div className="relative mx-auto min-h-[calc(100vh-38px)] max-w-[1100px] px-3 py-4 md:px-0 md:py-0">
          <AboutSection />
          <EducationSection />
          <WorkSection />
          <ProjectsSection />
          <ContactSection />
        </div>
        <Clippy />
        <StartMenu />
        <Taskbar />
      </div>
    </DesktopProvider>
  );
}
