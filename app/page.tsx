'use server';

import About from '../components/landing-page/about';
import BlogFeed from '../components/landing-page/blog/blog';
import Contact from '../components/landing-page/contact/contact';
import FAQ from '../components/landing-page/faq/faq';
import Hero from '../components/landing-page/hero/hero';
import Portfolio from '../components/landing-page/portfolio/portfolio';
import Skills from '../components/landing-page/skills';

export default async function Home() {
  return (
    <main className='-mt-12'>
      <Hero />
      <div className="mx-auto py-10 px-5 sm:px-10 md:px-32 xl:px-64">
        <BlogFeed />
        <Skills />
        <About />
        <Portfolio />
        <Contact />
        <FAQ />
      </div>
    </main>
  );
}
