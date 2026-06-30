'use client';

import { useEffect, useState } from 'react';
import { retroContent } from '@/lib/data/retro-content';
import RetroButton from './retro-button';

function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function Clock() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString('de-DE', {
          hour: '2-digit',
          minute: '2-digit',
        }),
      );
    };
    update();
    const interval = setInterval(update, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="win-inset-dark flex items-center px-2 py-0.5 text-[11px] tabular-nums">
      {time}
    </div>
  );
}

export default function Taskbar() {
  const sectionList = Object.values(retroContent.sections);

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 win-outset border-t-2 border-win-border-light bg-win-silver">
      <div className="flex items-center gap-1 overflow-x-auto px-1 py-1">
        <RetroButton
          className="shrink-0 gap-1 font-bold"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span aria-hidden="true">🪟</span>
          <span className="hidden sm:inline">Start</span>
        </RetroButton>

        <div className="flex min-w-0 flex-1 gap-1 overflow-x-auto">
          {sectionList.map((section) => (
            <RetroButton
              key={section.id}
              className="shrink-0 max-w-[120px] truncate text-[11px] sm:max-w-none sm:text-[13px]"
              onClick={() => scrollToSection(section.id)}
            >
              <span className="mr-1" aria-hidden="true">
                {section.icon}
              </span>
              <span className="truncate">{section.title}</span>
            </RetroButton>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-1">
          {retroContent.social.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
              className="win-outset flex h-7 w-7 items-center justify-center text-[11px] font-bold hover:bg-[#dfdfdf] focus:outline-none focus-visible:ring-2 focus-visible:ring-win-titlebar"
            >
              {link.name === 'LinkedIn' && 'in'}
              {link.name === 'X' && 'X'}
              {link.name === 'GitHub' && 'GH'}
            </a>
          ))}
          <Clock />
        </div>
      </div>
    </footer>
  );
}
