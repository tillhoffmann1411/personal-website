'use client';

import Image from 'next/image';
import { siteContent } from '@/lib/data/site-content';
import { TerminalPanel } from '../ui';

export default function AboutSection() {
  const { name, role, location, tagline } = siteContent;

  return (
    <TerminalPanel title="~/about.txt">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
        <div className="mx-auto shrink-0 border border-mr-green/30 p-1 sm:mx-0">
          <Image
            src="/images/profile-picture-2.webp"
            alt={`Profilbild von ${name}`}
            width={96}
            height={96}
            className="block h-24 w-24 object-cover grayscale contrast-125"
            priority
          />
        </div>
        <div className="min-w-0 flex-1 space-y-3">
          <p className="text-mr-green/50 text-xs">$ cat about.txt</p>
          <h2 className="text-lg font-bold text-mr-white sm:text-xl">{name}</h2>
          <p className="text-mr-amber">{role}</p>
          <p className="leading-relaxed text-mr-white/80">{tagline}</p>
          <p className="text-sm text-mr-green/70">
            <span className="text-mr-red">loc:</span> {location}
          </p>
        </div>
      </div>
    </TerminalPanel>
  );
}
