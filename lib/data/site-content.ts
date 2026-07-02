export const siteContent = {
  name: 'Till Hoffmann',
  handle: 'tillhoffmann',
  tagline:
    'Freelance Founder für Softwareentwicklung und KI-Themen. Aktuell in Köln — arbeite freiberuflich und an eigenen Projekten.',
  location: 'Köln, Deutschland',
  role: 'Freelance Founder · Softwareentwicklung & KI',

  sections: {
    about: { id: 'about', title: 'about.txt', label: 'Über mich' },
    education: { id: 'education', title: 'education.log', label: 'Ausbildung' },
    work: { id: 'work', title: 'status.sh', label: 'Aktuell' },
    projects: { id: 'projects', title: 'projects/', label: 'Projekte' },
    contact: { id: 'contact', title: 'contact.enc', label: 'Kontakt' },
  },

  education: [
    {
      degree: 'Bachelor Wirtschaftsinformatik',
      institution: 'FH Münster',
      detail: 'Schwerpunkt Webentwicklung',
    },
    {
      degree: 'Master Wirtschaftsinformatik',
      institution: 'WWU Münster',
      detail: 'Schwerpunkt Machine Learning',
    },
    {
      degree: 'Auslandssemester',
      institution: 'Süd-Korea',
      detail: 'Schwerpunkte in KI',
    },
  ],

  work: {
    description:
      'Ich arbeite derzeit freiberuflich an Softwareprojekten und entwickle parallel eigene Produkte im Bereich Software und KI.',
    items: [
      'Freelancing in Softwareentwicklung',
      'Eigene Projekte & Startups',
    ],
  },

  projects: [
    {
      name: 'Knowledge in a Box',
      description:
        '2022 gegründetes Startup für kontextbasiertes Wissensmanagement. Ausgezeichnet mit dem Deutschen Innovationspreis für Digitales.',
      url: 'https://knowledge-in-a-box.de',
      status: 'active' as const,
    },
    {
      name: 'Projekt 2',
      description: 'Hier entsteht demnächst etwas Neues.',
      url: null,
      status: 'coming-soon' as const,
    },
  ],

  social: [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/tillhoffmann/',
      label: 'LinkedIn Profil',
    },
    {
      name: 'X',
      url: 'https://x.com/tillxhoffmann',
      label: 'X Profil',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/tillhoffmann1411',
      label: 'GitHub Profil',
    },
  ],
} as const;

export type SectionId = keyof typeof siteContent.sections;

export function scrollToSection(id: SectionId) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
