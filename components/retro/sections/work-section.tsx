import { retroContent } from '@/lib/data/retro-content';
import XpWindow from '../xp-window';

export default function WorkSection() {
  const { sections, work } = retroContent;

  return (
    <XpWindow id={sections.work.id}>
      <p className="mb-3 leading-relaxed">{work.description}</p>
      <ul className="space-y-1">
        {work.items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-[12px]">
            <span aria-hidden="true" className="text-[#0058e6]">▸</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </XpWindow>
  );
}
