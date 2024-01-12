'use server';
import About from './ui/about';
import BlogFeed from './ui/blog/blog';
import Contact from './ui/contact';
import FAQ from './ui/faq/faq';
import Hero from './ui/hero';
import Portfolio from './ui/portfolio/portfolio';
import Skills from './ui/skills';

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
