export const siteUrl = 'https://till-hoffmann.me';

export const siteContent = {
  name: 'Till Hoffmann',
  handle: 'tillhoffmann',
  profileImage: '/images/profile-headshot.webp',
  tagline:
    'Freelance Founder für Softwareentwicklung und KI-Themen. Aktuell in Köln — arbeite freiberuflich und an eigenen Projekten.',
  location: 'Köln, Deutschland',
  role: 'Freelance · Gründer · Softwareentwicklung & KI',
  availability: 'Offen für Co-Founder-Anfragen',

  linkedIn: {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/tillhoffmann/',
    label: 'LinkedIn Profil',
  },

  sections: {
    about: { id: 'about', title: 'about.txt', label: 'Über mich' },
    projects: { id: 'projects', title: 'projects/', label: 'Projekte' },
    work: { id: 'work', title: 'work.log', label: 'Kundenprojekte' },
    education: { id: 'education', title: 'education.log', label: 'Ausbildung' },
  },

  education: [
    {
      degree: 'B.Sc. Wirtschaftsinformatik',
      institution: 'FH Münster',
      period: '2016 – 2020',
      detail: 'Schwerpunkt Software- und Webentwicklung',
      logo: '/logos/fh.webp',
    },
    {
      degree: 'M.Sc. Information Systems',
      institution: 'Universität Münster',
      period: '2020 – 2023',
      detail: 'Schwerpunkt Data Science',
      logo: '/logos/wwu.webp',
    },
    {
      degree: 'Auslandssemester',
      institution: 'UNIST, Südkorea',
      period: '2022',
      detail: 'Schwerpunkte in KI',
      logo: '/logos/unist.webp',
    },
  ],

  clientProjects: {
    note: 'Kundennamen anonymisiert · Details auf Anfrage',
    items: [
      {
        title: 'Testautomatisierung für sicherheitskritische Systeme',
        sector: 'BOS & Kritische Infrastruktur',
        period: 'seit 2024',
        role: 'Fullstack-Entwickler · Verantwortung Frontend & Architektur',
        summary:
          'Plattform, auf der Testfälle grafisch modelliert, automatisiert gegen reale Hardware und Anwendungen ausgeführt und in Echtzeit ausgewertet werden. Ersetzt einen zuvor mehrwöchigen manuellen Testzyklus.',
        metrics: [
          '300+ automatisierte Testfälle',
          '~10 Personen im Team',
          '2,5+ Jahre Laufzeit',
        ],
        stack: [
          'Next.js',
          'TypeScript',
          'Python / FastAPI',
          'PostgreSQL',
          'NATS JetStream',
          'Server-Sent Events',
          'Keycloak',
        ],
      },
      {
        title: 'Live-KI-Assistent für Call-Center',
        sector: 'KI-Software',
        period: '2025',
        role: 'Fullstack-Entwickler',
        summary:
          'Assistent, der Gespräche live transkribiert und Mitarbeitenden noch während des Telefonats Handlungsempfehlungen sowie Informationen aus internen Systemen einblendet.',
        metrics: [
          'unter 3 s bis zur Live-Empfehlung',
          '50 unterstützte Agents',
          '~25 parallele Gespräche',
        ],
        stack: ['AWS Transcribe', 'Kinesis', 'Lambda', 'DynamoDB', 'React', 'Serverless'],
      },
      {
        title: 'Blind-Booking-Plattform',
        sector: 'Travel Tech',
        period: 'seit 2026',
        role: 'Softwareentwickler',
        summary:
          'Suche nach Flug- und Hotelkombinationen als Optimierungsproblem unter Budget-, Zeit- und Verfügbarkeitsbedingungen — dazu eine automatisierte Verarbeitung von Flugänderungen anstelle manueller Nachpflege.',
        metrics: [],
        stack: ['React', 'Node.js', 'MongoDB', 'Mail- & CRM-Integrationen'],
      },
    ],
  },

  contact: {
    email: 'till@hoffmann.id',
  },

  impressum: {
    name: 'Till Hoffmann',
    street: 'Rathenauplatz 24',
    city: '50674 Köln',
    country: 'Deutschland',
    email: 'till@hoffmann.id',
    vatId: 'DE366760507',
  },
} as const;

export type SectionId = keyof typeof siteContent.sections;

export function scrollToSection(id: SectionId) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
