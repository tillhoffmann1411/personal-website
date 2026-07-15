import LandingPage from '@/components/landing/landing-page';
import { siteContent } from '@/lib/data/site-content';

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteContent.name,
  jobTitle: 'Freelance Founder für Softwareentwicklung und KI',
  url: 'https://till-hoffmann.me',
  image: `https://till-hoffmann.me${siteContent.profileImage}`,
  email: `mailto:${siteContent.contact.email}`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Köln',
    addressCountry: 'DE',
  },
  sameAs: [siteContent.linkedIn.url, 'https://till-hoffmann.me'],
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
