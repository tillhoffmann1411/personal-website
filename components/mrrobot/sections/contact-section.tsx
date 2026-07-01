import { siteContent } from '@/lib/data/site-content';
import { TerminalPanel } from '../ui';

export default function ContactSection() {
  const { social, name } = siteContent;

  return (
    <TerminalPanel title="~/contact.enc">
      <p className="mb-4 text-xs text-mr-green/50">$ gpg --decrypt contact.enc</p>
      <p className="mb-4 text-sm text-mr-white/70">
        Decrypted channels for {name}:
      </p>
      <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
        {social.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="mr-btn border border-mr-green/30 px-4 py-2 text-sm text-mr-green transition-colors hover:border-mr-red hover:text-mr-white"
          >
            [{link.name}] → connect
          </a>
        ))}
      </div>
    </TerminalPanel>
  );
}
