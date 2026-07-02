import Image from 'next/image';
import type { Project } from '@/lib/data/site-content';

type ProjectCardProps = {
  project: Project;
  reversed?: boolean;
};

function isExternalImage(src: string) {
  return src.startsWith('http');
}

export default function ProjectCard({ project, reversed = false }: ProjectCardProps) {
  const awards = 'awards' in project ? project.awards : [];

  return (
    <article className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-none dark:hover:shadow-lg dark:hover:shadow-black/20">
      <div
        className={`flex flex-col ${
          reversed ? 'md:flex-row-reverse' : 'md:flex-row'
        }`}
      >
        <div className="relative aspect-[16/10] w-full shrink-0 bg-zinc-100 dark:bg-zinc-800 md:aspect-auto md:w-2/5">
          {project.image ? (
            isExternalImage(project.image) ? (
              <div className="flex h-full min-h-[200px] items-center justify-center bg-gradient-to-br from-zinc-900 to-zinc-800 p-8 md:min-h-full">
                <img
                  src={project.image}
                  alt={project.name}
                  className="max-h-32 w-auto object-contain"
                />
              </div>
            ) : (
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
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
          <div className="mb-3 flex flex-wrap items-center gap-2">
            {project.year && (
              <span className="text-xs font-medium text-zinc-400 dark:text-zinc-500">{project.year}</span>
            )}
          </div>

          <h3 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-2xl">
            {project.name}
          </h3>

          {project.tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">{project.description}</p>

          {awards.length > 0 && (
            <div className="mt-5 flex flex-wrap items-center gap-5 border-t border-zinc-100 pt-5 dark:border-zinc-800">
              {awards.map((award) => (
                <div
                  key={award.title}
                  className="flex items-center gap-3"
                  title={award.title}
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-zinc-900 p-1.5">
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
              className="mt-6 inline-flex w-fit items-center gap-1 text-sm font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 transition-colors hover:decoration-zinc-900 dark:text-zinc-100 dark:decoration-zinc-600 dark:hover:decoration-zinc-300"
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
