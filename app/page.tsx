'use client';
import Head from "next/head";
import { useState, useEffect } from "react";
import Navbar from './ui/navbar';
import About from './ui/about';
import BlogFeed from './ui/blog/blog';
import Contact from './ui/contact';
import FAQ from './ui/faq/faq';
import Footer from './ui/footer';
import Hero from './ui/hero';
import Portfolio from './ui/portfolio/portfolio';
import Skills from './ui/skills';


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const mqListener = ((e: MediaQueryListEvent) => {
      setDarkMode(e.matches);
    });
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    darkThemeMq.addEventListener('change', mqListener);
    setDarkMode(darkThemeMq.matches);
    return () => darkThemeMq.removeEventListener('change', mqListener);
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>👨🏽‍💻 Till Hoffmann</title>
        <meta name="description" content="Till Hoffmann web development portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="-mt-24">
        <Hero />
      </div>
      <main className="bg-white dark:bg-black/95">
        <div className="mx-auto py-10 px-5 sm:px-10 md:px-32 xl:px-64">
          <BlogFeed />
          <About />
          <Skills />
        </div>
        <Portfolio />
        <div className="mx-auto py-10 px-5 sm:px-10 md:px-32 xl:px-64">
          <Contact />
          <FAQ />
        </div>
      </main>
      <Footer />
    </div >
  );
}
