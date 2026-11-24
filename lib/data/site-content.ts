export const siteUrl = 'https://till-hoffmann.me';

export const siteContent = {
  name: 'Till Hoffmann',
  handle: 'tillhoffmann',
  profileImage: '/images/profile-headshot.webp',
  tagline:
    'Ich helfe kleinen und mittelständischen Unternehmen, ihre digitale Welt ins KI-Zeitalter zu bringen: von den Prozessen über Daten und Schnittstellen bis zur fertigen Software.',
  location: 'Köln, Deutschland',
  role: 'KI-Transformation & Softwareentwicklung für KMU',
  availability: 'Neue Projekte ab Januar 2027',

  linkedIn: {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/tillhoffmann/',
    label: 'LinkedIn Profil',
  },

  sections: {
    about: { id: 'about', title: 'about.txt', label: 'Über mich' },
    services: { id: 'services', title: 'services/', label: 'Leistungen' },
    projects: { id: 'projects', title: 'projects/', label: 'Projekte' },
    work: { id: 'work', title: 'work.log', label: 'Kundenprojekte' },
    education: { id: 'education', title: 'education.log', label: 'Ausbildung' },
  },

  services: {
    intro:
      'Ich setze KI dort ein, wo sie im Alltag wirklich etwas verändert. Zuerst verstehe ich Prozesse, Daten und bestehende Tools, dann wähle ich passende Modelle und Werkzeuge aus und verbinde alles zu einem System, das funktioniert. Wo es keine fertige Lösung gibt, entwickle ich sie selbst.',
    items: [
      {
        title: 'KI-Transformation für KMU',
        points: [
          'Prozesse aufnehmen und dort ansetzen, wo KI Zeit oder Fehler spart',
          'Datenbestand ordnen und eine Knowledge Base aufbauen',
          'Schnittstellen schaffen und bestehende Systeme verknüpfen',
          'KI-Modelle und Tools auswählen, passend zu Aufgabe, Datenschutz und Budget',
          'Schulungen und Workshops, damit Teams KI sicher selbst nutzen',
        ],
      },
      {
        title: 'KI-gestützte Softwareentwicklung',
        points: [
          'Individuelle Webanwendungen von der Idee bis zum Betrieb',
          'Integration von KI und LLMs in bestehende Produkte',
          'Beratung von Entwicklungsteams beim Aufsetzen KI-gestützter Entwicklungsprozesse',
        ],
      },
    ],
    cta: 'Ab Januar 2027 habe ich wieder Kapazität für neue Projekte. Erzählen Sie mir, wo es in Ihrem Unternehmen hakt – ein erstes Gespräch ist unverbindlich.',
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
    note: 'Einige Kundennamen anonymisiert · Details auf Anfrage',
    items: [
      {
        title: 'Testautomatisierung für sicherheitskritische Systeme',
        sector: 'BOS & Kritische Infrastruktur',
        period: '2024 – 2026',
        role: 'Fullstack-Entwickler · Verantwortung Frontend & Architektur',
        summary:
          'Von Grund auf neu entwickelte Plattform, die zuvor rein manuelle, mehrwöchige Testzyklen ersetzt: Tests grafisch erstellen, parallel auf Windows-Clients, Browsern und Robotern ausführen und live zuschauen, inklusive Fehleranalyse, Video, Screenshots und automatischen Berichten.',
        metrics: [
          'mehrere hundert Ergebnisse pro Testlauf',
          'parallele Ausführung, live gestreamt',
          '~3 Jahre Laufzeit',
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
        title: 'blookery – Prozessautomatisierung im Travel Tech',
        sector: 'Reisebranche',
        period: 'seit 2026',
        role: 'Freelance-Entwickler',
        summary:
          'Flugänderungen werden automatisch aus eingehenden E-Mails erkannt und im CRM gepflegt, statt von Hand nachgetragen. Dazu Benchmarking von Such- und Optimierungsalgorithmen für Flug- und Hotelkombinationen.',
        metrics: [],
        stack: ['React', 'Node.js', 'MongoDB', 'Gmail API', 'Pipedrive'],
      },
      {
        title: 'Automatisierte Kursplanung',
        sector: 'Bildung & Kursbetrieb',
        period: '2024',
        role: 'Entwickler',
        summary:
          'Anwendung zur automatischen Erstellung optimierter Kurspläne. Kern ist ein Algorithmus zur Trainerzuordnung, der Verfügbarkeiten, Qualifikationen und eine faire Verteilung als Constraint-Problem löst.',
        metrics: [],
        stack: ['React', 'SQL', 'Scheduling-Algorithmus', 'Constraint Solving'],
      },
      {
        title: 'Datenpipeline im Gesundheitswesen',
        sector: 'Daten & Cloud',
        period: '2022',
        role: 'Software-Entwickler · codecentric AG',
        summary:
          'Automatisierte Pipeline, die Daten aus mehreren Systemen per Schnittstelle abholt, in BigQuery zusammenführt und serverlos betrieben für Auswertungen und Dashboards bereitstellt.',
        metrics: [],
        stack: ['Python', 'BigQuery', 'Cloud Functions', 'Looker Studio'],
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
