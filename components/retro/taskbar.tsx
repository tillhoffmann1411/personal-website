'use client';

import { useEffect, useState } from 'react';
import { retroContent } from '@/lib/data/retro-content';
import { useDesktop } from './desktop-context';

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

  return <div className="xp-clock tabular-nums">{time}</div>;
}

export default function Taskbar() {
  const {
    windows,
    activeWindowId,
    startMenuOpen,
    setStartMenuOpen,
    taskbarClick,
  } = useDesktop();

  const openWindows = windows.filter((w) => !w.closed);

  return (
    <footer className="xp-taskbar fixed bottom-0 left-0 right-0 z-50 h-[38px]">
      <div className="flex h-full items-center gap-1 overflow-x-auto px-1">
        <button
          id="xp-start-button"
          type="button"
          className={`xp-start-btn shrink-0 ${startMenuOpen ? 'xp-start-btn-active' : ''}`}
          onClick={() => setStartMenuOpen(!startMenuOpen)}
          aria-expanded={startMenuOpen}
          aria-haspopup="menu"
        >
          <span
            aria-hidden="true"
            className="flex h-5 w-5 items-center justify-center rounded-sm bg-gradient-to-br from-red-500 via-yellow-400 to-green-500 text-[8px] font-bold text-white shadow-sm"
          >
            ⊞
          </span>
          <span>Start</span>
        </button>

        <div className="mx-1 h-6 w-px shrink-0 bg-[#1e52b7] opacity-60" />

        <div className="flex min-w-0 flex-1 gap-1 overflow-x-auto">
          {openWindows.map((win) => (
            <button
              key={win.id}
              type="button"
              className={`xp-taskbar-item shrink-0 ${
                activeWindowId === win.id && !win.minimized
                  ? 'xp-taskbar-item-active'
                  : ''
              } ${win.minimized ? 'xp-taskbar-item-minimized' : ''}`}
              onClick={() => taskbarClick(win.id)}
              title={win.title}
            >
              <span className="mr-1" aria-hidden="true">
                {win.icon}
              </span>
              {win.title}
            </button>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-2 pl-1">
          {retroContent.social.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
              className="xp-taskbar-item !max-w-none !px-2 text-[11px]"
            >
              {link.name}
            </a>
          ))}
          <Clock />
        </div>
      </div>
    </footer>
  );
}
