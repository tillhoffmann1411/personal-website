import { siteContent } from '@/lib/data/site-content';
import { TerminalPanel } from '../ui';

export default function ProjectsSection() {
  return (
    <TerminalPanel title="~/projects/">
      <p className="mb-4 text-xs text-mr-green/50">$ ls -la projects/</p>
      <div className="space-y-4">
        {siteContent.projects.map((project) => (
          <div
            key={project.name}
            className="border border-mr-green/20 bg-mr-black/50 p-4 transition-colors hover:border-mr-red/50"
          >
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <h3 className="font-bold text-mr-white">{project.name}</h3>
              {project.status === 'coming-soon' && (
                <span className="border border-mr-red/60 px-2 py-0.5 text-[10px] uppercase tracking-wider text-mr-red">
                  [encrypted]
                </span>
              )}
            </div>
            <p className="mb-3 text-sm leading-relaxed text-mr-white/60">
              {project.description}
            </p>
            {project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="mr-btn inline-block text-sm text-mr-green hover:text-mr-white"
              >
                $ open {project.name.toLowerCase().replace(/\s/g, '-')} --external
              </a>
            ) : (
              <span className="text-sm text-mr-white/30">$ access denied</span>
            )}
          </div>
        ))}
      </div>
    </TerminalPanel>
  );
}
