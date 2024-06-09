'use server';

import About from '../components/landing-page/about';
import BlogFeed from '../components/landing-page/blog/blog';
import Contact from '../components/contact/contact';
import FAQ from '../components/landing-page/faq/faq';
import Hero from '../components/landing-page/hero/hero';
import Portfolio from '../components/landing-page/portfolio/portfolio';
import Skills from '../components/landing-page/skills';
import Logos from '../components/landing-page/logos';

export default async function Home() {
  return (
    <main className='-mt-12'>
      <Hero />
      <div className="mx-auto py-10 px-5 sm:px-10 md:px-32 xl:px-64">
        <Logos />
        <BlogFeed />
        {/* <Skills /> */}
        <About />
        {/* <Portfolio /> */}
        <Contact />
        <FAQ />
      </div>
    </main>
  );
}
