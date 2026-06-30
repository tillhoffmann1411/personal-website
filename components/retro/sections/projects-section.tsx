import { retroContent } from '@/lib/data/retro-content';
import RetroButton from '../retro-button';
import XpWindow from '../xp-window';

export default function ProjectsSection() {
  const { sections, projects } = retroContent;

  return (
    <XpWindow id={sections.projects.id}>
      <div className="space-y-3">
        {projects.map((project) => (
          <div key={project.name} className="xp-panel p-3">
            <div className="mb-1 flex flex-wrap items-center gap-2">
              <h3 className="font-bold text-[#003399]">{project.name}</h3>
              {project.status === 'coming-soon' && (
                <span className="xp-badge">🚧 UNDER CONSTRUCTION</span>
              )}
            </div>
            <p className="mb-2 text-[12px] leading-relaxed text-[#333]">
              {project.description}
            </p>
            {project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="xp-btn inline-flex items-center justify-center text-[13px] no-underline text-black"
              >
                Zur Webseite →
              </a>
            ) : (
              <RetroButton disabled className="cursor-not-allowed opacity-60">
                Bald verfügbar
              </RetroButton>
            )}
          </div>
        ))}
      </div>
    </XpWindow>
  );
}
