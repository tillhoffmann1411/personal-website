import { retroContent } from '@/lib/data/retro-content';
import WinWindow from '../win-window';

export default function EducationSection() {
  const { sections, education } = retroContent;

  return (
    <WinWindow
      id={sections.education.id}
      title={sections.education.title}
      icon={sections.education.icon}
      offset="sm"
    >
      <ul className="space-y-3">
        {education.map((item) => (
          <li key={item.degree} className="win-inset p-2">
            <p className="font-bold">{item.degree}</p>
            <p className="text-[12px]">{item.institution}</p>
            <p className="text-[11px] text-gray-600">{item.detail}</p>
          </li>
        ))}
      </ul>
    </WinWindow>
  );
}
