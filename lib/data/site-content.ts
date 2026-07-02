export const siteContent = {
  name: 'Till Hoffmann',
  handle: 'tillhoffmann',
  profileImage: '/images/profile-headshot.webp',
  tagline:
    'Freelance Founder für Softwareentwicklung und KI-Themen. Aktuell in Köln — arbeite freiberuflich und an eigenen Projekten.',
  location: 'Köln, Deutschland',
  role: 'Freelance · Gründer · Softwareentwicklung & KI',

  linkedIn: {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/tillhoffmann/',
    label: 'LinkedIn Profil',
  },

  sections: {
    about: { id: 'about', title: 'about.txt', label: 'Über mich' },
    education: { id: 'education', title: 'education.log', label: 'Ausbildung' },
    projects: { id: 'projects', title: 'projects/', label: 'Projekte' },
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
