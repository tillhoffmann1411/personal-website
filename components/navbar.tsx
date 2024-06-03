'use client';
import { useScrollPosition, useWindowHeight } from '../lib/hooks';
import { FC, useState } from 'react';
import { scrollToSection } from '../lib/utils';
import { ModeToggle } from './mode-toggle';
import { Button } from '@/components/ui/button';
import confetti from 'canvas-confetti';
import Link from 'next/link';
import { HoveredLink, Menu, MenuItem, ProductItem } from '@/components/ui/nav-menu';

import kiab from '@/public/portfolio/kiab-dashboard.png';
import gumroad from '@/public/portfolio/gumroad.png';
import growContent from '@/public/portfolio/grow-content.png';

const Navbar: FC = () => {
    const scrollPosition = useScrollPosition();
    const innerHeight = useWindowHeight();
    const path = typeof window !== 'undefined' ? window.location.pathname : '';
    const [active, setActive] = useState<string | null>(null);


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
            <div className="hidden py-4 sm:flex">
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
                <div>
                    <Menu setActive={setActive}>
                        <MenuItem setActive={setActive} active={active} item="About me">
                            <div className="flex flex-col">
                                <HoveredLink href="/education">Education</HoveredLink>
                                <HoveredLink href="/experience">Experience</HoveredLink>
                                <HoveredLink href="/projects">Projects</HoveredLink>
                                <HoveredLink href="/philosophy">Philosophy</HoveredLink>
                            </div>
                        </MenuItem>
                        <MenuItem setActive={setActive} active={active} item="Services">
                            <div className="flex flex-col">
                                <HoveredLink href="/services/prod-dev">Product Development</HoveredLink>
                                <HoveredLink href="/services/mvp-dev">MVP Development</HoveredLink>
                                <HoveredLink href="/services/automation">Automation</HoveredLink>
                            </div>
                        </MenuItem>
                        <MenuItem setActive={setActive} active={active} item="Products">
                            <div className="text-sm grid-cols-1 grid w-full gap-2 p-2 sm:grid-cols-2 sm:w-auto">
                                <ProductItem
                                    title="Knowledge in a Box"
                                    href="https://Knowledge-in-a-box.de"
                                    src={kiab}
                                    description="Take your intranet to the next level."
                                />
                                <ProductItem
                                    title="Grow-Content"
                                    href=""
                                    src={growContent}
                                    description="Gamify your content creation process. (coming soon)"
                                    disabled
                                />
                                <ProductItem
                                    title="Templates"
                                    href="https://gomoonbeam.com"
                                    src={gumroad}
                                    description="My personal collection of notion and n8n templates."
                                    disabled
                                />
                            </div>
                        </MenuItem>
                    </Menu>
                </div>
                <div className='hidden sm:flex'>
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
                </div>
            </ul>
        </nav>
    );
};

export default Navbar;