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
                ? 'bg-white dark:bg-gray-900'
                : 'bg-transparent backdrop-blur-md',
            `active flex sticky top-0 z-20 justify-between transition-all duration-300
        px-5 sm:px-10 md:px-32 lg:px-64
        dark:text-white`,
        )}>
            <div className='py-1'>
                <a
                    href="#"
                    className="h-10 p-1"
                >
                    <div className="h-10 flex">
                        <div className="aspect-square h-10 mr-3">
                            <Image src="/logo.png" height={100} width={100} alt="logo" />
                        </div>
                        <p className="font-burtons text-2xl m-auto bg-gradient-to-b from-rose-400 via-fuchsia-400 to-sky-400 text-transparent bg-clip-text">
                            Till Hoffmann
                        </p>
                    </div>
                </a>
            </div>
            <ul className="flex items-center">
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