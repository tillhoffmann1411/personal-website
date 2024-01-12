import { useScrollPosition, useWindowHeight } from '../lib/hooks';
import { FC } from 'react';
import { scrollToSection } from '../lib/utils';
import { ModeToggle } from './mode-toggle';
import { Button } from '@/components/ui/button';

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
                ? 'bg-background shadow-md'
                : 'bg-transparent backdrop-blur-md',
            `active flex sticky top-0 z-20 justify-between transition-all duration-300
        px-5 sm:px-10 md:px-32 xl:px-64`,
        )}>
            <div className="flex py-4">
                <p className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-lg font-semibold hover:bg-primary cursor-default hover:text-primary-foreground">
                    Till Hoffmann
                </p>
            </div>
            <ul className="flex items-center gap-3">
                <li>
                    <ModeToggle />
                </li>
                <li>
                    <Button
                        onClick={() => scrollToSection('contact')}
                    >
                        Contact
                    </Button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;