import { siteContent } from '@/lib/data/site-content';
import { TerminalPanel } from '../ui';

export default function WorkSection() {
  const { work } = siteContent;

  return (
    <TerminalPanel title="~/status.sh">
      <p className="mb-4 text-xs text-mr-green/50">$ ./status.sh --now</p>
      <p className="mb-4 leading-relaxed text-mr-white/80">{work.description}</p>
      <ul className="space-y-2">
        {work.items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm">
            <span className="text-mr-red">&gt;</span>
            <span className="text-mr-green">{item}</span>
          </li>
        ))}
      </ul>
    </TerminalPanel>
  );
}
