'use client';
import { useScrollPosition, useWindowHeight } from '../lib/hooks';
import { FC, useState } from 'react';
import { cn, scrollToSection } from '../lib/utils';
import { Button } from '@/components/ui/button';
import confetti from 'canvas-confetti';
import Link from 'next/link';
import Image, { StaticImageData } from "next/image";

import kiab from '@/public/portfolio/kiab-dashboard.png';
import gumroad from '@/public/portfolio/gumroad.png';
import growContent from '@/public/portfolio/grow-content.png';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from './ui/navigation-menu';
import { AnimatedTooltip } from './ui/animated-tooltip';
import React from 'react';
import { Book, Home } from 'lucide-react';
import { ModeToggle } from './mode-toggle';

const ProductItem = ({
    title,
    description,
    href,
    src,
    disabled,
}: {
    title: string;
    description: string;
    href: string;
    src: string | StaticImageData;
    disabled?: boolean;
}) => {
    const link = (
        <NavigationMenuLink asChild onClick={(e) => {disabled && e.preventDefault(); disabled && e.stopPropagation()}}>
            <Link
                href={disabled ? '' : href} 
                onClick={(e) => {disabled && e.preventDefault(); disabled && e.stopPropagation()}}
                className={cn("flex space-x-2 group rounded-lg p-4", disabled ? "cursor-default" : "hover:bg-card transition-color")}
            >
                <Image
                    src={src}
                    width={140}
                    height={70}
                    alt={title}
                    className={cn("flex-shrink-0 w-[80px] md:w-auto rounded-md shadow-2xl", !disabled && "group-hover:shadow-lg transition-shadow")}
                />
                <div>
                    <div className={cn("text-sm font-medium leading-none", disabled ? "text-foreground/70" : "group-hover:text-primary")}>
                        {title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {description}
                    </p>
                </div>
            </Link>
        </NavigationMenuLink>
    )
    return disabled ? <AnimatedTooltip title="Coming soon" description="Stay tuned for updates!">{link}</AnimatedTooltip> : link;
};

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
});
ListItem.displayName = "ListItem"

const Navbar: FC = () => {
    const scrollPosition = useScrollPosition();
    const innerHeight = useWindowHeight();
    const path = typeof window !== 'undefined' ? window.location.pathname : '';

    const showNavbar = () => {
        return (scrollPosition === 0) && (path === '/');
    }

    return (
        <nav className={cn(
            showNavbar()
                ? 'opacity-0'
                : 'opacity-100',
            scrollPosition > innerHeight
                ? 'bg-background shadow-md'
                : 'bg-transparent backdrop-blur-md',
            `active flex sticky top-0 z-20 justify-between transition-all duration-300 h-16
            hover:opacity-100
            px-2 sm:px-10 md:px-32 xl:px-64`,
        )}>
            <div className="hidden py-4 sm:flex">
                <Link
                    className="group relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-lg font-semibold hover:bg-primary cursor-default hover:text-primary-foreground"
                    href="/"
                >
                    <span className='select-none group-active:hidden' >Till Hoffmann</span>
                    <span className='hidden select-none group-active:inline'>Whooooo 🎉</span>
                </Link>
            </div>
            <div className="flex items-center gap-3">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-3 p-6 w-[340px] md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                    <li className="row-span-3">
                                        <NavigationMenuLink asChild>
                                            <Link
                                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                href="/"
                                            >
                                                <Home className="h-6 w-6" />
                                                <div className="mb-2 mt-4 text-lg font-medium">
                                                    Home
                                                </div>
                                                <div className="text-sm leading-tight text-muted-foreground">
                                                    Alles über mich in kürze.
                                                </div>
                                            </Link>
                                        </NavigationMenuLink>
                                    </li>
                                    <ListItem href="/#education" title="Auszeichnungen">
                                        Meine Ausbildung und Auszeichnungen.
                                    </ListItem>
                                    <ListItem href="/#about" title="Über mich">
                                        Einige Details über mich und meine Arbeit.
                                    </ListItem>
                                    <ListItem href="/#blog" title="Blog">
                                        Mein Blog auf Medium, auf dem ich verschiedenste Themen behandel.
                                    </ListItem>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[340px] md:w-[400px] gap-2 p-2 lg:w-[500px]">
                                    <ListItem
                                        title="Produkt Entwicklung"
                                        href="/services/prod-dev"
                                    >
                                        Ich entwickle deine Webanwendung in 4-12 Wochen.
                                    </ListItem>
                                    <ListItem
                                        title="Prototyp Entwicklung"
                                        href="/services/prototyp-dev"
                                    >
                                        Ich erwecke deine Idee zum leben in 4 Wochen.
                                    </ListItem>
                                    <ListItem
                                        title="Automatisierung"
                                        href="/services/automation"
                                    >
                                        Ich automatisiere deine Prozesse.
                                    </ListItem>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Produkte</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="text-sm grid w-[340px] md:w-[400px] gap-2 p-2 lg:w-[500px]">
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
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                    </NavigationMenuList>
                </NavigationMenu>
                <div className='hidden space-x-2 sm:flex'>
                    <div className=''>
                        <ModeToggle />
                    </div>
                    <Button
                        onClick={() => scrollToSection('contact')}
                    >
                        Kontakt
                    </Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;