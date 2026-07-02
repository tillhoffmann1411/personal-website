import Link from 'next/link';
import type { Metadata } from 'next';
import { siteContent } from '@/lib/data/site-content';

export const metadata: Metadata = {
  title: 'Impressum — Till Hoffmann',
  description: 'Impressum und Kontaktinformationen.',
};

export default function ImpressumPage() {
  const { impressum, name } = siteContent;

  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <main className="mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Impressum</h1>

        <address className="mt-8 not-italic leading-relaxed text-zinc-600 dark:text-zinc-400">
          <p className="font-medium text-zinc-900 dark:text-zinc-100">{impressum.name}</p>
          <p className="mt-2">{impressum.street}</p>
          <p>{impressum.city}</p>
          <p>{impressum.country}</p>
          <p className="mt-6">Umsatzsteuer-ID: {impressum.vatId}</p>
          <p className="mt-6">
            E-Mail:{' '}
            <a
              href={`mailto:${impressum.email}`}
              className="text-zinc-900 underline decoration-zinc-300 underline-offset-2 transition-colors hover:decoration-zinc-900 dark:text-zinc-100 dark:decoration-zinc-600 dark:hover:decoration-zinc-300"
            >
              {impressum.email}
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
