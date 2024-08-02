'use server';
import About from '@/components/landing-page/about';
import BlogFeed from '@/components/landing-page/blog/blog';
import Contact from '@/components/contact/contact';
import FAQ from '@/components/faq';
import Hero from '@/components/landing-page/hero/hero';
import Edu from '@/components/landing-page/edu';
import Products from '@/components/landing-page/products';
import Offer from '@/components/landing-page/offer';
import { faqData } from '@/lib/data/faq';

export default async function Home() {
  return (
    <main className='-mt-12'>
      <Hero />
      <div className="mx-auto py-10 px-5 space-y-40 md:space-y-64 sm:px-10 md:px-32 xl:px-64">
        <Edu />
        <Products />
        <Offer />
        <About />
        <BlogFeed />
        <Contact />
        <FAQ faqData={faqData} />
      </div>
    </main>
  );
}
