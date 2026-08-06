import CornerMarks from './corner-marks';

type ClientProject = {
  title: string;
  sector: string;
  period: string;
  role: string;
  summary: string;
  metrics: readonly string[];
  stack: readonly string[];
};

export default function ClientProjects({ items }: { items: readonly ClientProject[] }) {
  return (
    <div className="space-y-6">
      {items.map((item) => (
        <article
          key={item.title}
          className="relative border border-zinc-200 bg-zinc-50/50 p-6 transition-colors hover:border-brand-600 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-brand-500 sm:p-8"
        >
          <CornerMarks />

          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 font-mono text-xs uppercase tracking-widest">
            <span className="text-brand-700 dark:text-brand-400">{item.sector}</span>
            <span className="text-zinc-400 dark:text-zinc-500">{item.period}</span>
          </div>

          <h3 className="mt-3 text-lg font-semibold leading-snug tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-xl">
            {item.title}
          </h3>
          <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">{item.role}</p>

          <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">{item.summary}</p>

          {item.metrics.length > 0 && (
            <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 border-t border-dashed border-zinc-300 pt-4 dark:border-zinc-700">
              {item.metrics.map((metric) => (
                <li
                  key={metric}
                  className="font-mono text-xs text-zinc-600 dark:text-zinc-300"
                >
                  <span aria-hidden="true" className="mr-2 text-brand-600 dark:text-brand-400">
                    ▸
                  </span>
                  {metric}
                </li>
              ))}
            </ul>
          )}

          <ul className="mt-5 flex flex-wrap gap-2">
            {item.stack.map((tech) => (
              <li
                key={tech}
                className="border border-zinc-200 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-zinc-500 dark:border-zinc-700 dark:text-zinc-400"
              >
                {tech}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
