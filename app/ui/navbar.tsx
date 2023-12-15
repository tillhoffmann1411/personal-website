import { BsFillMoonStarsFill } from "react-icons/bs";
import Image from "next/image";
import { useScrollPosition, useWindowHeight } from '../lib/hooks';
import { FC } from 'react';
import { scrollToSection } from '../lib/utils';

type Props = {
    darkMode: boolean;
    setDarkMode: (darkMode: boolean) => void;
};

const Navbar: FC<Props> = ({ darkMode, setDarkMode }) => {
    const scrollPosition = useScrollPosition();
    const innerHeight = useWindowHeight();

    const classNames = (...classes: string[]) => {
        return classes.filter(Boolean).join(' ')
    };

    return (
        <nav className={classNames(
            scrollPosition === 0
                ? 'opacity-0'
                : 'opacity-100',
            scrollPosition > innerHeight
                ? 'bg-white dark:bg-gray-900 shadow-md'
                : 'bg-transparent backdrop-blur-md',
            `active flex sticky top-0 z-20 justify-between transition-all duration-300
        px-5 sm:px-10 md:px-32 xl:px-64
        dark:text-white`,
        )}>
            <div>
                <a
                    href="#"
                    className="p-1"
                >
                    <div className="flex">
                        <Image src="/logo.webp" height={100} width={100} className='mr-3 h-6 w-6 sm:h-10 sm:w-10' alt="logo" />
                        <p className="font-burtons text-xl  m-auto bg-gradient-to-b from-rose-400 via-fuchsia-400 to-sky-400 text-transparent bg-clip-text sm:text-2xl">
                            Till Hoffmann
                        </p>
                    </div>
                </a>
            </div>
            <ul className="flex items-center scale-75 sm:scale-100">
                <li>
                    <BsFillMoonStarsFill
                        onClick={() => setDarkMode(!darkMode)}
                        className=" cursor-pointer text-2xl hover:text-yellow-500"
                    />
                </li>
                <li>
                    <span
                        className="rounded-full cursor-pointer bg-black flex text-white px-4 py-2 border-none ml-8 hover:bg-purple-900 dark:bg-white dark:text-black dark:hover:bg-purple-200"
                        onClick={() => scrollToSection('contact')}
                    >
                        Contact
                    </span>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;