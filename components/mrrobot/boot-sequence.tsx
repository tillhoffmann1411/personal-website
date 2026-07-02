'use client';

import { useEffect, useState } from 'react';
import { bootLines } from '@/lib/data/mr-robot-easter-eggs';
import { useTypewriter } from './hooks';

type BootSequenceProps = {
  onComplete: () => void;
};

export default function BootSequence({ onComplete }: BootSequenceProps) {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [linesDone, setLinesDone] = useState(false);
  const [readyForInput, setReadyForInput] = useState(false);

  const { displayed: helloText, done: helloDone } = useTypewriter(
    'Hello, friend.',
    70,
    linesDone,
  );

  useEffect(() => {
    const timers = bootLines.map((line, index) =>
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, line.text]);
        if (index === bootLines.length - 1) {
          setTimeout(() => setLinesDone(true), 400);
        }
      }, line.delay),
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (helloDone) {
      const timer = setTimeout(() => setReadyForInput(true), 500);
      return () => clearTimeout(timer);
    }
  }, [helloDone]);

  useEffect(() => {
    if (!readyForInput) return;

    const handleInput = () => onComplete();

    window.addEventListener('keydown', handleInput);
    window.addEventListener('click', handleInput);
    window.addEventListener('touchstart', handleInput);

    return () => {
      window.removeEventListener('keydown', handleInput);
      window.removeEventListener('click', handleInput);
      window.removeEventListener('touchstart', handleInput);
    };
  }, [readyForInput, onComplete]);

  return (
    <div className="mr-boot fixed inset-0 z-[100] flex flex-col bg-mr-black font-mono text-sm text-mr-green sm:text-base">
      <div className="mr-scanlines pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="flex-1 overflow-hidden p-4 sm:p-8">
        <div className="mb-6 space-y-1 opacity-70">
          {visibleLines.map((line) => (
            <div key={line} className="mr-flicker">
              {line}
            </div>
          ))}
        </div>

        <div className="flex flex-1 flex-col items-center justify-center px-4 text-center">
          <p className="text-xl tracking-wide text-mr-white sm:text-3xl md:text-4xl">
            {helloText}
            {!helloDone && linesDone && (
              <span className="mr-cursor ml-1 inline-block h-[1em] w-[0.55em] bg-mr-green align-middle" />
            )}
          </p>

          {helloDone && (
            <p className="mr-press-enter mt-8 font-sans text-xs uppercase tracking-[0.35em] text-mr-red sm:text-sm">
              press enter
            </p>
          )}
        </div>
      </div>

      <div className="border-t border-mr-green/20 px-4 py-2 text-[10px] text-mr-green/40 sm:text-xs">
        tillhoffmann@fsociety:~$ awaiting input...
      </div>
    </div>
  );
}
