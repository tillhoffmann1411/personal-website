import Image from 'next/image';
import CornerMarks from './corner-marks';

type EducationItem = {
  degree: string;
  institution: string;
  detail: string;
  logo: string;
};

export default function EducationRow({ items }: { items: EducationItem[] }) {
  return (
    <div className="-mx-5 flex gap-4 overflow-x-auto pl-8 pr-5 pb-2 snap-x snap-mandatory sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-visible sm:px-0 sm:pl-0">
      {items.map((item) => (
        <article
          key={item.degree}
          className="relative flex min-w-[220px] snap-start flex-col items-center border border-zinc-200 bg-zinc-50/50 p-5 text-center transition-colors hover:border-brand-600 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-brand-500 sm:min-w-0"
        >
          <CornerMarks />
          <div className="mb-4 flex h-20 w-full items-center justify-center border border-zinc-200 bg-zinc-900 px-4 py-3 dark:border-zinc-800">
            <Image
              src={item.logo}
              alt={item.institution}
              width={80}
              height={80}
              className="max-h-14 w-auto object-contain"
            />
          </div>
          <h3 className="text-sm font-semibold leading-snug text-zinc-900 dark:text-zinc-100">
            {item.degree}
          </h3>
          <p className="mt-2 font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            {item.institution}
          </p>
          <p className="mt-1.5 text-xs text-zinc-400 dark:text-zinc-500">{item.detail}</p>
        </article>
      ))}
    </div>
  );
}
