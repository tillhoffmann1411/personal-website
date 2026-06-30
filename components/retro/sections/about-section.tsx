import Image from 'next/image';
import { retroContent } from '@/lib/data/retro-content';
import WinWindow from '../win-window';

export default function AboutSection() {
  const { sections, name, role, location, tagline } = retroContent;

  return (
    <WinWindow
      id={sections.about.id}
      title={sections.about.title}
      icon={sections.about.icon}
      offset="none"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <div className="win-inset shrink-0 self-center p-1 sm:self-start">
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
          <h1 className="text-lg font-bold leading-tight">{name}</h1>
          <p className="font-bold text-win-titlebar">{role}</p>
          <p className="text-[13px] leading-relaxed">
            {tagline}
            <span className="retro-blink ml-0.5 inline-block h-[14px] w-[7px] bg-black align-middle" />
          </p>
          <p className="text-[12px] text-gray-700">📍 {location}</p>
        </div>
      </div>
    </WinWindow>
  );
}
