import Image from 'next/image';
import type { Project } from '@/lib/data/projects';
import CornerMarks from './corner-marks';

type ProjectCardProps = {
  project: Project;
  reversed?: boolean;
};

function isExternalImage(src: string) {
  return src.startsWith('http');
}

export default function ProjectCard({ project, reversed = false }: ProjectCardProps) {
  const awards = project.awards ?? [];

  return (
    <article className="group relative overflow-hidden border border-zinc-200 bg-white transition-colors hover:border-brand-600 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-brand-500">
      <CornerMarks />
      <div
        className={`flex flex-col ${
          reversed ? 'md:flex-row-reverse' : 'md:flex-row'
        }`}
      >
        <div className="relative flex w-full shrink-0 items-center justify-center border-b border-zinc-200 bg-zinc-100 p-4 dark:border-zinc-800 dark:bg-zinc-800 aspect-[16/10] md:aspect-auto md:w-2/5 md:min-h-[240px] md:self-stretch md:border-b-0">
          {project.image ? (
            isExternalImage(project.image) ? (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-900 to-zinc-800 p-6">
                <img
                  src={project.image}
                  alt={project.name}
                  className="max-h-32 max-w-full object-contain"
                />
              </div>
            ) : (
              <Image
                src={project.image}
                alt={project.name}
                width={1200}
                height={750}
                className="h-auto max-h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            )
          ) : (
            <div className="flex h-full min-h-[200px] items-center justify-center bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900">
              <span className="font-mono text-sm text-zinc-400 dark:text-zinc-500">coming soon</span>
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col justify-center p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-2xl">
              {project.name}
            </h3>
            {project.status === 'active' && (
              <span className="inline-flex items-center gap-1.5 border border-brand-600 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-brand-700 dark:border-brand-600/70 dark:text-brand-300">
                <span className="h-1.5 w-1.5 shrink-0 bg-brand-500" />
                Aktiv
              </span>
            )}
          </div>

          <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">{project.description}</p>

          {awards.length > 0 && (
            <div className="mt-5 flex flex-wrap items-center gap-5 border-t border-dashed border-zinc-300 pt-5 dark:border-zinc-700">
              {awards.map((award) => (
                <div
                  key={award.title}
                  className="flex items-center gap-3"
                  title={award.title}
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-zinc-800 bg-zinc-900 p-1.5">
                    <Image
                      src={award.logo}
                      alt={award.title}
                      width={40}
                      height={40}
                      className="max-h-9 w-auto object-contain"
                    />
                  </div>
                  <span className="max-w-[140px] text-xs leading-snug text-zinc-500 dark:text-zinc-400">
                    {award.title}
                  </span>
                </div>
              ))}
            </div>
          )}

          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex w-fit items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-zinc-700 transition-colors hover:text-brand-700 dark:text-zinc-300 dark:hover:text-brand-300"
            >
              Zur Webseite
              <span aria-hidden="true">→</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
