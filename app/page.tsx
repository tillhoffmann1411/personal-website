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
  return (
    <div>
      <Head>
        <title>👨🏽‍💻 Till Hoffmann</title>
        <meta name="description" content="Till Hoffmann web development portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className='-mt-24'>
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
      <Footer />
    </div >
  );
}
