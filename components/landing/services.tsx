import CornerMarks from './corner-marks';

type Service = {
  title: string;
  points: readonly string[];
};

type ServicesProps = {
  intro: string;
  items: readonly Service[];
  cta: string;
  email: string;
};

export default function Services({ intro, items, cta, email }: ServicesProps) {
  return (
    <div>
      <p className="mb-8 max-w-2xl leading-relaxed text-zinc-600 dark:text-zinc-400">{intro}</p>

      <div className="grid gap-6 sm:grid-cols-2">
        {items.map((item) => (
          <article
            key={item.title}
            className="relative border border-zinc-200 bg-zinc-50/50 p-6 transition-colors hover:border-brand-600 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-brand-500 sm:p-8"
          >
            <CornerMarks />
            <h3 className="text-lg font-semibold leading-snug tracking-tight text-zinc-900 dark:text-zinc-100">
              {item.title}
            </h3>
            <ul className="mt-4 space-y-2">
              {item.points.map((point) => (
                <li key={point} className="flex gap-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  <span aria-hidden="true" className="text-brand-600 dark:text-brand-400">
                    ▸
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-4 border-t border-dashed border-zinc-300 pt-6 dark:border-zinc-700 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{cta}</p>
        <a
          href={`mailto:${email}`}
          className="inline-flex shrink-0 items-center justify-center border border-brand-900 bg-brand-900 px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-white transition-colors hover:border-brand-800 hover:bg-brand-800 dark:border-brand-100 dark:bg-brand-100 dark:text-brand-900 dark:hover:bg-white"
        >
          Gespräch anfragen
        </a>
      </div>
    </div>
  );
}
