'use client';
import { useScrollPosition, useWindowHeight } from '../lib/hooks';
import { FC } from 'react';
import { scrollToSection } from '../lib/utils';
import { ModeToggle } from './mode-toggle';
import { Button } from '@/components/ui/button';
import confetti from 'canvas-confetti';
import Link from 'next/link';

const Navbar: FC = () => {
    const scrollPosition = useScrollPosition();
    const innerHeight = useWindowHeight();
    const path = typeof window !== 'undefined' ? window.location.pathname : '';


    const classNames = (...classes: string[]) => {
        return classes.filter(Boolean).join(' ')
    };

    const onClick = () => {
        confetti({
            particleCount: 150,
            spread: 100,
            origin: { y: 1 },
        });
    };

    const showNavbar = () => {
        return (scrollPosition === 0) && (path === '/');
    }

    return (
        <nav className={classNames(
            showNavbar()
                ? 'opacity-0'
                : 'opacity-100',
            scrollPosition > innerHeight
                ? 'bg-background shadow-md'
                : 'bg-transparent backdrop-blur-md',
            `active flex sticky top-0 z-20 justify-between transition-all duration-300
            hover:opacity-100
            px-2 sm:px-10 md:px-32 xl:px-64`,
        )}>
            <div className="flex py-4">
                <Link
                    className="group relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-lg font-semibold hover:bg-primary cursor-default hover:text-primary-foreground"
                    onClick={onClick}
                    href="/"
                >
                    <span className='select-none group-active:hidden' >Till Hoffmann</span>
                    <span className='hidden select-none group-active:inline'>Whooooo 🎉</span>
                </Link>
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