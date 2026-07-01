'use client';

import {
  FormEvent,
  KeyboardEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { elliotQuotes, terminalCommands } from '@/lib/data/mr-robot-easter-eggs';
import { siteContent, type SectionId } from '@/lib/data/site-content';

type TerminalLine = { type: 'input' | 'output' | 'error'; text: string };

type CommandTerminalProps = {
  activeSection: SectionId;
  onNavigate: (section: SectionId) => void;
  onReboot: () => void;
};

function sectionListText() {
  return Object.values(siteContent.sections)
    .map((s) => `  ${s.title.padEnd(16)} # ${s.label}`)
    .join('\n');
}

function socialText() {
  return siteContent.social
    .map((s) => `  ${s.name.padEnd(10)} → ${s.url}`)
    .join('\n');
}

export default function CommandTerminal({
  activeSection,
  onNavigate,
  onReboot,
}: CommandTerminalProps) {
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: 'output', text: 'Type "help" for available commands.' },
  ]);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [lines]);

  const append = useCallback((entries: TerminalLine[]) => {
    setLines((prev) => [...prev.slice(-40), ...entries]);
  }, []);

  const runCommand = useCallback(
    (raw: string) => {
      const cmd = raw.trim().toLowerCase();
      if (!cmd) return;

      append([{ type: 'input', text: `$ ${raw}` }]);

      const [command, ...args] = cmd.split(/\s+/);
      const arg = args[0];

      switch (command) {
        case 'help':
          append([{ type: 'output', text: terminalCommands.help }]);
          break;
        case 'clear':
          setLines([]);
          break;
        case 'whoami':
          append([
            {
              type: 'output',
              text: `${siteContent.name}\n${siteContent.role}\n${siteContent.location}`,
            },
          ]);
          break;
        case 'ls':
          append([{ type: 'output', text: sectionListText() }]);
          break;
        case 'social':
          append([{ type: 'output', text: socialText() }]);
          break;
        case 'fsociety':
          append([{ type: 'output', text: terminalCommands.fsociety }]);
          break;
        case 'hello':
          append([{ type: 'output', text: terminalCommands.hello }]);
          break;
        case 'control':
          append([{ type: 'output', text: terminalCommands.control }]);
          break;
        case 'ecorp':
        case 'e':
          if (arg === 'corp' || command === 'ecorp') {
            append([{ type: 'output', text: terminalCommands.ecorp }]);
          } else {
            append([{ type: 'error', text: `command not found: ${cmd}` }]);
          }
          break;
        case 'reboot':
          append([{ type: 'output', text: 'Rebooting...' }]);
          setTimeout(onReboot, 600);
          break;
        case 'quote':
          append([
            {
              type: 'output',
              text: elliotQuotes[Math.floor(Math.random() * elliotQuotes.length)],
            },
          ]);
          break;
        case 'cat':
        case 'open': {
          const fileMap: Record<string, SectionId> = {
            about: 'about',
            'about.txt': 'about',
            education: 'education',
            'education.log': 'education',
            work: 'work',
            'status.sh': 'work',
            projects: 'projects',
            contact: 'contact',
            'contact.enc': 'contact',
          };
          const target = fileMap[arg ?? ''];
          if (!target) {
            append([{ type: 'error', text: `file not found: ${arg ?? '(none)'}` }]);
            break;
          }
          if (command === 'open') onNavigate(target);
          append([
            {
              type: 'output',
              text: command === 'open'
                ? `Opening ${siteContent.sections[target].title}...`
                : `See panel: ${siteContent.sections[target].label}`,
            },
          ]);
          if (command === 'cat') onNavigate(target);
          break;
        }
        default:
          append([{ type: 'error', text: `command not found: ${cmd}` }]);
      }
    },
    [append, onNavigate, onReboot],
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setHistory((h) => [...h, input]);
    setHistoryIndex(-1);
    runCommand(input);
    setInput('');
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length === 0) return;
      const next = historyIndex < 0 ? history.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(next);
      setInput(history[next]);
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex < 0) return;
      const next = historyIndex + 1;
      if (next >= history.length) {
        setHistoryIndex(-1);
        setInput('');
      } else {
        setHistoryIndex(next);
        setInput(history[next]);
      }
    }
  };

  return (
    <div className="mr-panel border-t border-mr-green/30 bg-mr-black/95">
      <div className="max-h-36 overflow-y-auto px-3 py-2 font-mono text-xs sm:max-h-44 sm:text-sm">
        {lines.map((line, i) => (
          <div
            key={`${i}-${line.text.slice(0, 20)}`}
            className={
              line.type === 'input'
                ? 'text-mr-white/90'
                : line.type === 'error'
                  ? 'text-mr-red'
                  : 'text-mr-green/80 whitespace-pre-wrap'
            }
          >
            {line.text}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 border-t border-mr-green/20 px-3 py-2"
      >
        <span className="shrink-0 text-base text-mr-red sm:text-sm">
          till@{activeSection}:~$
        </span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="min-w-0 flex-1 bg-transparent font-mono text-base text-mr-green outline-none placeholder:text-mr-green/30 sm:text-sm"
          placeholder="help"
          autoComplete="off"
          spellCheck={false}
          aria-label="Terminal command input"
        />
      </form>
    </div>
  );
}
