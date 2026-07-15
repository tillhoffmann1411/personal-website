'use client';

import { useEffect, useState } from 'react';
import CommandTerminal from './command-terminal';
import BootSequence from './boot-sequence';

export default function TerminalChatBubble() {
  const [open, setOpen] = useState(false);
  const [booting, setBooting] = useState(false);

  useEffect(() => {
    if (!open) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [open]);

  if (booting) {
    return <BootSequence onComplete={() => setBooting(false)} />;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {open && (
        <div
          className="mr-chat-panel relative flex w-[calc(100vw-2rem)] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-xl border border-mr-green/30 bg-mr-black shadow-2xl sm:w-[360px] sm:max-w-[calc(100vw-2rem)] lg:h-[min(420px,70vh)] lg:w-[min(440px,calc(100vw-3rem))] lg:min-h-[260px] lg:min-w-[320px] lg:max-h-[85vh] lg:max-w-[min(720px,90vw)] lg:resize lg:overflow-auto"
          role="dialog"
          aria-label="Terminal"
        >
          <div className="flex shrink-0 items-center justify-between border-b border-mr-green/20 bg-mr-dark px-3 py-2">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-mr-red" />
              <span className="h-2.5 w-2.5 rounded-full bg-mr-amber" />
              <span className="h-2.5 w-2.5 rounded-full bg-mr-green" />
              <span className="ml-1 font-mono text-xs text-mr-green/70">terminal</span>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="font-mono text-sm text-mr-green/60 transition-colors hover:text-mr-red"
              aria-label="Terminal schließen"
            >
              ×
            </button>
          </div>
          <CommandTerminal onReboot={() => setBooting(true)} />
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="mr-chat-fab flex h-14 w-14 items-center justify-center rounded-full border border-mr-green/40 bg-mr-black font-mono text-lg text-mr-green shadow-lg transition-transform hover:scale-105 active:scale-95"
        aria-label={open ? 'Terminal schließen' : 'Terminal öffnen'}
        aria-expanded={open}
      >
        {open ? '×' : '>_'}
      </button>
    </div>
  );
}
