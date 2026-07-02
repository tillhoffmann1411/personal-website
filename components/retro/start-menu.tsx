'use client';

import { useEffect, useRef } from 'react';
import { retroContent } from '@/lib/data/retro-content';
import { useDesktop } from './desktop-context';

export default function StartMenu() {
  const { startMenuOpen, setStartMenuOpen, openWindow } = useDesktop();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startMenuOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        const startBtn = document.getElementById('xp-start-button');
        if (startBtn && startBtn.contains(e.target as Node)) return;
        setStartMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [startMenuOpen, setStartMenuOpen]);

  if (!startMenuOpen) return null;

  const sections = Object.values(retroContent.sections);

  return (
    <div
      ref={menuRef}
      className="xp-start-menu fixed bottom-[38px] left-0 z-[55]"
      role="menu"
      aria-label="Startmenü"
    >
      <div className="xp-start-menu-header">{retroContent.name}</div>
      <div className="bg-white py-1">
        {sections.map((section) => (
          <button
            key={section.id}
            type="button"
            role="menuitem"
            className="xp-start-menu-item w-full text-left"
            onClick={() => openWindow(section.id as keyof typeof retroContent.sections)}
          >
            <span aria-hidden="true">{section.icon}</span>
            <span>{section.title}</span>
          </button>
        ))}
        <div className="my-1 border-t border-[#aca899]" />
        {retroContent.social.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            role="menuitem"
            className="xp-start-menu-item text-inherit no-underline"
            onClick={() => setStartMenuOpen(false)}
          >
            <span aria-hidden="true">🔗</span>
            <span>{link.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
