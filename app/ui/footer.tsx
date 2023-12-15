import {
    AiFillLinkedin,
    AiFillGithub,
    AiFillTwitterCircle,
} from "react-icons/ai";
import { scrollToSection } from '../lib/utils';
import { FC } from 'react';

const Footer: FC = () => {
    return (
        <footer className="relative flex flex-col items-center overflow-hidden px-5 py-20 md:py-20 bg-gray-200 dark:bg-gray-900 mx-auto">
            <div className="container relative z-[1]">
                <div className="flex flex-wrap justify-between md:flex-nowrap">
                    <div className="flex w-full space-x-12 text-gray-600 dark:text-gray-300 sm:w-7/12 justify-between">
                        <ul className="list-inside space-y-6">
                            <li>
                                <a href="#hero" className="transition hover:text-primary">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="transition hover:text-primary">
                                    About me
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="transition hover:text-primary">
                                    Skills
                                </a>
                            </li>
                            <li>
                                <a href="#blog" className="transition hover:text-primary">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#portfolio" className="transition hover:text-primary">
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <span
                                    onClick={() => scrollToSection('contact')}
                                    className="transition hover:text-primary cursor-pointer"
                                >
                                    Contact
                                </span>
                            </li>
                            <li>
                                <a href="#faq" className="transition hover:text-primary">
                                    FAQ
                                </a>
                            </li>
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
                                    href="https://twitter.com/tillxhoffmann"
                                    className="flex items-center space-x-3 transition hover:text-primary"
                                >
                                    <span className="text-xl">
                                        <AiFillTwitterCircle />
                                    </span>
                                    <span>Twitter</span>
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
                    <div className="w-full mt-4 space-y-6 text-center sm:w-5/12 sm:text-right sm:mt-0">
                        <span className="block text-gray-500 dark:text-gray-400">
                            Let&apos;s work together!
                        </span>
                        <span className="block text-gray-500 dark:text-gray-400">
                            Need help?{" "}
                            <span
                                onClick={() => scrollToSection('contact')}
                                className="font-semibold cursor-pointer text-gray-600 dark:text-gray-400 hover:text-purple-900"
                            >
                                {" "}
                                Contact Me
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
