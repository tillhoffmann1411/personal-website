import {
    AiFillLinkedin,
    AiFillGithub,
} from "react-icons/ai";
import Image from "next/image";
import { scrollToSection } from '../lib/utils';
import { FC } from 'react';

const Hero: FC = () => {
    return (
        <section id="hero" className="min-h-screen flex pt-1
            px-5 sm:px-10 md:px-32 xl:px-64
            w-full
            bg-gradient-to-b bg-blur-lg animate-gradient-xy
            from-rose-300 via-fuchsia-300 to-sky-300
            dark:from-rose-800 dark:via-fuchsia-800 dark:to-sky-800">
            <div className="
              flex flex-col justify-center p-6 mx-auto w-full max-w-1248
              sm:py-12
              lg:py-24 lg:flex-row lg:justify-between lg:bg-white/20 lg:rounded-2xl lg:shadow-lg lg:aspect-video lg:my-auto lg:w-full
              2xl:max-w-[1248px]
            ">
                <div className="flex flex-col justify-center p-6 text-center lg:text-left">
                    <h1 className="text-black text dark:text-white">
                        Till Hoffmann
                    </h1>
                    <h2 className="pb-8 dark:text-white">
                        Elevating Ideas, Crafting Solutions
                    </h2>
                    <p className="leading-8 text-gray-800 dark:text-gray-200">
                        Founder and Freelancer in software and product development.
                    </p>

                    <div className="flex py-6 text-5xl self-center items-center gap-6 break-after-column lg:m-0 lg:self-start">
                        <span
                            rel="noreferrer"
                            className="text-xl cursor-pointer bg-black text-purple-200 flex px-12 py-4 border-none rounded-full hover:bg-purple-900 dark:bg-white dark:hover:bg-purple-300 dark:text-purple-900"
                            onClick={() => scrollToSection('contact')}
                        >
                            Contact
                        </span>
                        <a href="https://github.com/tillhoffmann1411" target="_blank" rel="noreferrer" className="hover:text-purple-900 dark:hover:text-purple-300 dark:text-white"><AiFillGithub /></a>
                        <a href="https://www.linkedin.com/in/tillhoffmann/" target="_blank" rel="noreferrer" className="hover:text-purple-900 dark:hover:text-purple-300 dark:text-white"><AiFillLinkedin /></a>
                    </div>

                </div>

                <div className="flex m-auto w-auto max-w-full">
                    <Image src='/images/profile.png' alt="Till Hoffmann profile picture" width={500} height={500} className="m-auto" />
                </div>
            </div>
        </section>
    );
}

export default Hero;