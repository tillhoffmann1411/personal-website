export const siteContent = {
  name: 'Till Hoffmann',
  handle: 'tillhoffmann',
  profileImage: '/images/profile-headshot.webp',
  tagline:
    'Freelance Founder für Softwareentwicklung und KI-Themen. Aktuell in Köln — arbeite freiberuflich und an eigenen Projekten.',
  location: 'Köln, Deutschland',
  role: 'Freelance · Founder · Softwareentwicklung & KI',

  linkedIn: {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/tillhoffmann/',
    label: 'LinkedIn Profil',
  },

  sections: {
    about: { id: 'about', title: 'about.txt', label: 'Über mich' },
    education: { id: 'education', title: 'education.log', label: 'Ausbildung' },
    projects: { id: 'projects', title: 'projects/', label: 'Projekte' },
    contact: { id: 'contact', title: 'contact.enc', label: 'Kontakt' },
  },

  education: [
    {
      degree: 'Bachelor Wirtschaftsinformatik',
      institution: 'FH Münster',
      detail: 'Schwerpunkt Webentwicklung',
      logo: '/logos/fh.webp',
    },
    {
      degree: 'Master Wirtschaftsinformatik',
      institution: 'WWU Münster',
      detail: 'Schwerpunkt Machine Learning',
      logo: '/logos/wwu.webp',
    },
    {
      degree: 'Auslandssemester',
      institution: 'Süd-Korea',
      detail: 'Schwerpunkte in KI',
      logo: '/logos/unist.webp',
    },
  ],

  projects: [
    {
      name: 'Knowledge in a Box',
      description:
        'Startup für kontextbasiertes Wissensmanagement. Verbindet Informationen aus verschiedenen Quellen in einem Wissensgraph — per Web-App oder Browser-Erweiterung.',
      url: 'https://knowledge-in-a-box.de',
      status: 'active' as const,
      image: '/portfolio/kiab-mock.webp',
      tags: ['Startup', 'KI', 'Wissensmanagement'],
      year: '2022',
      awards: [
        {
          title: 'Deutscher Innovationspreis für Digitales',
          logo: '/logos/gruender-preis.webp',
        },
        {
          title: 'EXIST Gründerförderung',
          logo: '/logos/exist.webp',
        },
      ],
    },
    {
      name: 'Snaplete',
      description:
        'KI-basiertes Event-Foto-Matching: Selfie hochladen, in Sekunden alle eigenen Eventfotos finden. DSGVO-konform, Daten in Deutschland — Selfies werden nach 24 Stunden automatisch gelöscht.',
      url: 'https://snaplete.de',
      status: 'active' as const,
      image: 'https://snaplete.de/apple-touch-icon.png',
      tags: ['KI', 'Event', 'DSGVO'],
      year: null,
      awards: [],
    },
  ],

  contact: {
    email: 'till@hoffmann.id',
  },

  impressum: {
    name: 'Till Hoffmann',
    street: 'Rathenauplatz 24',
    city: '50674 Köln',
    country: 'Deutschland',
    email: 'till@hoffmann.id',
  },
} as const;

export type SectionId = keyof typeof siteContent.sections;

export type Project = (typeof siteContent.projects)[number];

export function scrollToSection(id: SectionId) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
