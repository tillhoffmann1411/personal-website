export const bootLines = [
  { text: '[ OK ] Initializing kernel 5.4.0-mr', delay: 0 },
  { text: '[ OK ] Loading encrypted modules', delay: 120 },
  { text: '[ OK ] Mounting /dev/sda1 ... secure', delay: 240 },
  { text: '[ OK ] Starting tor.service', delay: 380 },
  { text: '[ OK ] Handshake: AES-256-GCM verified', delay: 520 },
  { text: '[ OK ] Routing through 3 hops', delay: 660 },
  { text: '[ OK ] Connection established', delay: 800 },
  { text: '[ OK ] Session token: 0x7f3a...9c2e', delay: 940 },
] as const;

export const elliotQuotes = [
  'Control is an illusion, but influence is real.',
  'The world is a dangerous place. Not because of those who do evil, but because of those who look on and do nothing.',
  'Every day, we change the world. But to change the world in a way that means anything, that takes more time than most people have.',
  'I\'m only a vigilante hacker at night. By day, I build software.',
] as const;

export const terminalCommands = {
  help: `Available commands:
  help          — show this message
  whoami        — identity file
  ls            — list directories
  cat <file>    — read a file (about, education, work, projects, contact)
  open <file>   — navigate to section
  social        — external links
  fsociety      — ???
  hello         — greet the system
  control       — ...
  ecorp         — corporate database
  clear         — clear terminal
  reboot        — restart boot sequence`,

  fsociety: `
  ┌─────────────────────────────────────┐
  │  WE ARE fsociety.                   │
  │  WE ARE LEGION.                     │
  │  WE DO NOT FORGIVE.                 │
  │  WE DO NOT FORGET.                  │
  │                                     │
  │  ...just kidding. This is a portfolio. │
  └─────────────────────────────────────┘`,

  hello: 'Hello, friend. Hello, friend? That\'s lame. Maybe I should give you a name...',

  control: 'Control is an illusion.',

  ecorp: `E Corp — "Evil Corp"
  Status: NOT FOUND in this filesystem.
  Note: You might be looking for tillhoffmann.me`,

  social: '', // generated dynamically
} as const;
