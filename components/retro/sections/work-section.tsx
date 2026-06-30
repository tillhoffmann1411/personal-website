import { retroContent } from '@/lib/data/retro-content';
import WinWindow from '../win-window';

export default function WorkSection() {
  const { sections, work } = retroContent;

  return (
    <WinWindow
      id={sections.work.id}
      title={sections.work.title}
      icon={sections.work.icon}
      offset="md"
    >
      <p className="mb-3 leading-relaxed">{work.description}</p>
      <ul className="space-y-1">
        {work.items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-[12px]">
            <span aria-hidden="true">▸</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </WinWindow>
  );
}
