'use client';

import { useEffect, useState } from 'react';
import { clippyTips } from '@/lib/data/clippy-tips';
import { cn } from '@/lib/utils';

function ClippySvg() {
  return (
    <svg
      viewBox="0 0 80 120"
      width="72"
      height="108"
      aria-hidden="true"
      className="drop-shadow-md"
    >
      {/* Paperclip body */}
      <ellipse cx="40" cy="18" rx="14" ry="16" fill="#c8c8c8" stroke="#888" strokeWidth="1.5" />
      <ellipse cx="40" cy="18" rx="8" ry="9" fill="#e8e8e8" />
      <path
        d="M 28 28 Q 20 50 22 75 Q 24 100 40 110 Q 56 100 58 75 Q 60 50 52 28"
        fill="none"
        stroke="#a0a0a0"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path
        d="M 30 30 Q 24 52 26 74 Q 28 96 40 106 Q 52 96 54 74 Q 56 52 50 30"
        fill="none"
        stroke="#d8d8d8"
        strokeWidth="6"
        strokeLinecap="round"
      />
      {/* Eyes */}
      <ellipse cx="34" cy="16" rx="4" ry="5" fill="white" stroke="#333" strokeWidth="0.8" />
      <ellipse cx="46" cy="16" rx="4" ry="5" fill="white" stroke="#333" strokeWidth="0.8" />
      <circle cx="35" cy="17" r="2" fill="#1a1a6e" />
      <circle cx="47" cy="17" r="2" fill="#1a1a6e" />
      {/* Eyebrows */}
      <path d="M 29 10 Q 34 8 38 10" fill="none" stroke="#555" strokeWidth="1.2" />
      <path d="M 42 10 Q 46 8 51 10" fill="none" stroke="#555" strokeWidth="1.2" />
      {/* Smile */}
      <path d="M 34 24 Q 40 28 46 24" fill="none" stroke="#555" strokeWidth="1" />
    </svg>
  );
}

export default function Clippy() {
  const [tipIndex, setTipIndex] = useState(0);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    const timer = setInterval(() => {
      setTipIndex((i) => (i + 1) % clippyTips.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [dismissed]);

  if (dismissed) return null;

  return (
    <div
      className="fixed bottom-12 right-3 z-[60] flex flex-col items-end gap-2 sm:right-6"
      role="complementary"
      aria-label="Clippy Assistent"
    >
      <div className="clippy-bubble">
        <p>{clippyTips[tipIndex]}</p>
        <div className="mt-2 flex gap-2">
          <button
            type="button"
            className="xp-btn text-[11px] !px-2 !py-0.5"
            onClick={() => setTipIndex((i) => (i + 1) % clippyTips.length)}
          >
            Nächster Tipp
          </button>
          <button
            type="button"
            className="xp-btn text-[11px] !px-2 !py-0.5"
            onClick={() => setDismissed(true)}
          >
            Verstanden
          </button>
        </div>
      </div>

      <button
        type="button"
        className={cn('clippy-character bg-transparent border-0 p-0')}
        aria-label="Clippy ansprechen"
        onClick={() => setTipIndex((i) => (i + 1) % clippyTips.length)}
      >
        <ClippySvg />
      </button>
    </div>
  );
}
