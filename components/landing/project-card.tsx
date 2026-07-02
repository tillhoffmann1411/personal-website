import Image from 'next/image';
import type { Project } from '@/lib/data/site-content';

type ProjectCardProps = {
  project: Project;
  reversed?: boolean;
};

export default function ProjectCard({ project, reversed = false }: ProjectCardProps) {
  const isComingSoon = project.status === 'coming-soon';

  return (
    <article
      className={`group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-shadow hover:shadow-md ${
        isComingSoon ? 'opacity-80' : ''
      }`}
    >
      <div
        className={`flex flex-col ${
          reversed ? 'md:flex-row-reverse' : 'md:flex-row'
        }`}
      >
        <div className="relative aspect-[16/10] w-full shrink-0 bg-zinc-100 md:aspect-auto md:w-2/5">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.name}
              fill
              className={`object-cover transition-transform duration-500 group-hover:scale-[1.02] ${
                isComingSoon ? 'grayscale' : ''
              }`}
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          ) : (
            <div className="flex h-full min-h-[200px] items-center justify-center bg-gradient-to-br from-zinc-100 to-zinc-200">
              <span className="font-mono text-sm text-zinc-400">coming soon</span>
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col justify-center p-6 sm:p-8">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            {project.year && (
              <span className="text-xs font-medium text-zinc-400">{project.year}</span>
            )}
            {isComingSoon && (
              <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs text-zinc-500">
                Bald verfügbar
              </span>
            )}
          </div>

          <h3 className="text-xl font-semibold tracking-tight text-zinc-900 sm:text-2xl">
            {project.name}
          </h3>

          {project.tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <p className="mt-4 leading-relaxed text-zinc-600">{project.description}</p>

          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex w-fit items-center gap-1 text-sm font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 transition-colors hover:decoration-zinc-900"
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
