import { retroContent } from '@/lib/data/retro-content';
import XpWindow from '../xp-window';

export default function EducationSection() {
  const { sections, education } = retroContent;

  return (
    <XpWindow id={sections.education.id}>
      <ul className="space-y-2">
        {education.map((item) => (
          <li key={item.degree} className="xp-panel p-3">
            <p className="font-bold text-[#003399]">{item.degree}</p>
            <p className="text-[12px]">{item.institution}</p>
            <p className="text-[11px] text-[#666]">{item.detail}</p>
          </li>
        ))}
      </ul>
    </XpWindow>
  );
}
