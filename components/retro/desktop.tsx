'use client';

import AboutSection from './sections/about-section';
import ContactSection from './sections/contact-section';
import EducationSection from './sections/education-section';
import ProjectsSection from './sections/projects-section';
import WorkSection from './sections/work-section';
import Taskbar from './taskbar';

export default function RetroDesktop() {
  return (
    <div className="retro-desktop-bg min-h-screen pb-12">
      <div className="mx-auto max-w-[900px] space-y-4 px-3 py-6 sm:px-4 sm:py-8">
        <AboutSection />
        <EducationSection />
        <WorkSection />
        <ProjectsSection />
        <ContactSection />
      </div>
      <Taskbar />
    </div>
  );
}
