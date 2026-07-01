import { siteContent } from '@/lib/data/site-content';
import { TerminalPanel } from '../ui';

export default function EducationSection() {
  return (
    <TerminalPanel title="~/education.log">
      <p className="mb-4 text-xs text-mr-green/50">$ tail -n 3 education.log</p>
      <ul className="space-y-3">
        {siteContent.education.map((item, i) => (
          <li
            key={item.degree}
            className="border-l-2 border-mr-green/40 pl-4 transition-colors hover:border-mr-red hover:pl-5"
          >
            <p className="font-bold text-mr-white">
              <span className="text-mr-green/40 mr-2">[{String(i + 1).padStart(2, '0')}]</span>
              {item.degree}
            </p>
            <p className="text-sm text-mr-green/80">{item.institution}</p>
            <p className="text-xs text-mr-white/50">{item.detail}</p>
          </li>
        ))}
      </ul>
    </TerminalPanel>
  );
}
