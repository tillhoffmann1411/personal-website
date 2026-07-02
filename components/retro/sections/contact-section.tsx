import { retroContent } from '@/lib/data/retro-content';
import XpWindow from '../xp-window';

export default function ContactSection() {
  const { sections, social, name } = retroContent;

  return (
    <XpWindow id={sections.contact.id}>
      <p className="mb-3 text-[12px] leading-relaxed">
        Du findest {name} auf folgenden Plattformen:
      </p>
      <div className="flex flex-wrap gap-2">
        {social.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="xp-btn inline-flex items-center justify-center text-[13px] no-underline text-black"
          >
            {link.name} →
          </a>
        ))}
      </div>
    </XpWindow>
  );
}
