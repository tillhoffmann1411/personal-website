import Image from 'next/image';
import { retroContent } from '@/lib/data/retro-content';
import XpWindow from '../xp-window';

export default function AboutSection() {
  const { sections, name, role, location, tagline } = retroContent;

  return (
    <XpWindow id={sections.about.id}>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <div className="xp-panel-sunken shrink-0 self-center p-1 sm:self-start">
          <Image
            src="/images/profile-picture-2.webp"
            alt={`Profilbild von ${name}`}
            width={96}
            height={96}
            className="block h-24 w-24 object-cover"
            priority
          />
        </div>
        <div className="min-w-0 flex-1 space-y-2">
          <h1 className="text-lg font-bold leading-tight text-[#003399]">{name}</h1>
          <p className="font-bold text-[#0058e6]">{role}</p>
          <p className="text-[13px] leading-relaxed">
            {tagline}
            <span className="retro-blink ml-0.5 inline-block h-[14px] w-[7px] bg-[#003399] align-middle" />
          </p>
          <p className="text-[12px] text-[#555]">📍 {location}</p>
        </div>
      </div>
    </XpWindow>
  );
}
