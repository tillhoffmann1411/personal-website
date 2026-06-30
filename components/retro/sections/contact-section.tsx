import { retroContent } from '@/lib/data/retro-content';
import WinWindow from '../win-window';

export default function ContactSection() {
  const { sections, social, name } = retroContent;

  return (
    <WinWindow
      id={sections.contact.id}
      title={sections.contact.title}
      icon={sections.contact.icon}
      offset="sm"
    >
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
            className="win-outset inline-flex items-center justify-center px-3 py-1 text-[13px] hover:bg-[#dfdfdf] focus:outline-none focus-visible:ring-2 focus-visible:ring-win-titlebar"
          >
            {link.name} →
          </a>
        ))}
      </div>
    </WinWindow>
  );
}
