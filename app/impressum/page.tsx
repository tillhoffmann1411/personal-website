import Link from 'next/link';
import type { Metadata } from 'next';
import { siteContent } from '@/lib/data/site-content';
import { ModeToggle } from '@/components/mode-toggle';

export const metadata: Metadata = {
  title: 'Impressum — Till Hoffmann',
  description: 'Impressum und Kontaktinformationen.',
};

export default function ImpressumPage() {
  const { impressum, name } = siteContent;

  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <header className="border-b border-zinc-200/80 bg-white dark:border-zinc-800/80 dark:bg-zinc-950">
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <Link
            href="/"
            className="text-sm font-semibold tracking-tight text-zinc-900 transition-colors hover:text-zinc-600 dark:text-zinc-100 dark:hover:text-zinc-400"
          >
            {name}
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              Zurück
            </Link>
            <ModeToggle />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Impressum</h1>

        <address className="mt-8 not-italic leading-relaxed text-zinc-600 dark:text-zinc-400">
          <p className="font-medium text-zinc-900 dark:text-zinc-100">{impressum.name}</p>
          <p className="mt-2">{impressum.street}</p>
          <p>{impressum.city}</p>
          <p>{impressum.country}</p>
          <p className="mt-6">Umsatzsteuer-ID: {impressum.vatId}</p>
          <p className="mt-6">
            <a
              href={`mailto:${impressum.email}`}
              className="inline-flex items-center rounded-full border border-zinc-200 px-4 py-2 text-sm text-zinc-700 transition-colors hover:border-zinc-900 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-400 dark:hover:text-zinc-100"
            >
              E-Mail schreiben
            </a>
          </p>
        </address>
      </main>

      <footer className="border-t border-zinc-100 py-8 text-center text-sm text-zinc-400 dark:border-zinc-800 dark:text-zinc-500">
        <p>
          © {new Date().getFullYear()} {name}
        </p>
        <Link
          href="/"
          className="mt-2 inline-block text-zinc-400 underline decoration-zinc-200 underline-offset-2 hover:text-zinc-600 dark:text-zinc-500 dark:decoration-zinc-700 dark:hover:text-zinc-300"
        >
          Zur Startseite
        </Link>
      </footer>
    </div>
  );
}
