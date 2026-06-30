import { retroContent } from '@/lib/data/retro-content';
import RetroButton from '../retro-button';
import WinWindow from '../win-window';

export default function ProjectsSection() {
  const { sections, projects } = retroContent;

  return (
    <WinWindow
      id={sections.projects.id}
      title={sections.projects.title}
      icon={sections.projects.icon}
      offset="lg"
    >
      <div className="space-y-3">
        {projects.map((project) => (
          <div key={project.name} className="win-inset p-3">
            <div className="mb-1 flex flex-wrap items-center gap-2">
              <h3 className="font-bold">{project.name}</h3>
              {project.status === 'coming-soon' && (
                <span className="win-outset bg-[#ffff00] px-1.5 py-0.5 text-[10px] font-bold text-black">
                  🚧 UNDER CONSTRUCTION
                </span>
              )}
            </div>
            <p className="mb-2 text-[12px] leading-relaxed text-gray-800">
              {project.description}
            </p>
            {project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="win-outset inline-flex items-center justify-center px-3 py-1 text-[13px] hover:bg-[#dfdfdf] focus:outline-none focus-visible:ring-2 focus-visible:ring-win-titlebar"
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
    </WinWindow>
  );
}
