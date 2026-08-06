import LandingPage from '@/components/landing/landing-page';
import { siteContent, siteUrl } from '@/lib/data/site-content';

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${siteUrl}/#person`,
  name: siteContent.name,
  jobTitle: 'Freelance Founder für Softwareentwicklung und KI',
  description: siteContent.tagline,
  url: siteUrl,
  image: `${siteUrl}${siteContent.profileImage}`,
  email: `mailto:${siteContent.contact.email}`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Köln',
    addressCountry: 'DE',
  },
  alumniOf: siteContent.education.map((item) => ({
    '@type': 'EducationalOrganization',
    name: item.institution,
  })),
  knowsAbout: [
    'Softwareentwicklung',
    'Künstliche Intelligenz',
    'React',
    'Next.js',
    'TypeScript',
    'Python',
    'Realtime-Architekturen',
    'SaaS',
  ],
  knowsLanguage: ['de', 'en'],
  sameAs: [siteContent.linkedIn.url, 'https://hoffmann.id'],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <LandingPage />
    </>
  );
}
