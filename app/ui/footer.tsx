'use client'
import {
    AiFillLinkedin,
    AiFillGithub,
} from "react-icons/ai";
import { scrollToSection } from '../lib/utils';
import { FC } from 'react';
import { Button } from '@/components/ui/button';

const quickLinks = [
    {
        title: "Home",
        link: "hero",
    },
    {
        title: "About me",
        link: "about",
    },
    {
        title: "Skills",
        link: "services",
    },
    {
        title: "Blog",
        link: "blog",
    },
    {
        title: "Portfolio",
        link: "portfolio",
    },
    {
        title: "Contact",
        link: "contact",
    },
    {
        title: "FAQ",
        link: "faq",
    },
];

const Footer: FC = () => {
    return (
        <footer className="relative flex flex-col items-center overflow-hidden px-5 py-20 md:py-20 mx-auto bg-secondary">
            <div className="container relative z-[1]">
                <div className="flex flex-wrap justify-between md:flex-nowrap">
                    <div className="flex w-full space-x-12 text-secondary-foreground sm:w-7/12 justify-between">
                        <ul className="list-inside space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.title}>
                                    <Button
                                        variant="ghost"
                                        onClick={() => scrollToSection(link.link)}
                                    >
                                        {link.title}
                                    </Button>
                                </li>
                            ))}
                        </ul>

                        <ul role="list" className="space-y-6">
                            <li>
                                <a
                                    href="https://github.com/tillhoffmann1411"
                                    className="flex items-center space-x-3 transition hover:text-primary"
                                >
                                    <span className="text-xl">
                                        <AiFillGithub />
                                    </span>
                                    <span>Github</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/tillhoffmann/"
                                    className="flex items-center space-x-3 transition hover:text-primary"
                                >
                                    <span className="text-xl">
                                        <AiFillLinkedin />
                                    </span>
                                    <span>LinkedIn</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <p className="w-full mt-4 space-y-6 text-center sm:w-5/12 sm:text-right sm:mt-0">
                        <span className="block">
                            Let&apos;s work together!
                        </span>
                        <span className="block">
                            Need help?{" "}
                            <Button
                                variant="ghost"
                                onClick={() => scrollToSection('contact')}
                            >
                                Contact Me
                            </Button>
                        </span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
