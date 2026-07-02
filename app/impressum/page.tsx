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
    <div className="min-h-screen bg-white text-zinc-900">
      <header className="border-b border-zinc-200/80 bg-white">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-5 py-4 sm:px-8">
          <Link
            href="/"
            className="text-sm font-semibold tracking-tight text-zinc-900 transition-colors hover:text-zinc-600"
          >
            {name}
          </Link>
          <Link
            href="/"
            className="text-sm text-zinc-500 transition-colors hover:text-zinc-900"
          >
            Zurück
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Impressum</h1>

        <address className="mt-8 not-italic leading-relaxed text-zinc-600">
          <p className="font-medium text-zinc-900">{impressum.name}</p>
          <p className="mt-2">{impressum.street}</p>
          <p>{impressum.city}</p>
          <p>{impressum.country}</p>
          <p className="mt-6">
            <a
              href={`mailto:${impressum.email}`}
              className="inline-flex items-center rounded-full border border-zinc-200 px-4 py-2 text-sm text-zinc-700 transition-colors hover:border-zinc-900 hover:text-zinc-900"
            >
              E-Mail schreiben
            </a>
          </p>
        </address>
      </main>

      <footer className="border-t border-zinc-100 py-8 text-center text-sm text-zinc-400">
        <p>
          © {new Date().getFullYear()} {name}
        </p>
        <Link
          href="/"
          className="mt-2 inline-block text-zinc-400 underline decoration-zinc-200 underline-offset-2 hover:text-zinc-600"
        >
          Zur Startseite
        </Link>
      </footer>
    </div>
  );
}
