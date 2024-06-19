'use client';
import {
    AiFillLinkedin,
} from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";

import { FC } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import StatusBadge from './status-badge';
import { scrollToSection } from '@/lib/utils';
import { HeroHighlight, Highlight } from '../../ui/hero-highlight';
import { Headline1 } from '../../ui/typography';
import { usePlausible } from 'next-plausible';

const Hero: FC = () => {
    const plausible = usePlausible();
    return (
        <section id="hero" className="flex w-full h-screen">
            <HeroHighlight
                className="h-full w-full flex px-5 sm:px-10 md:px-32 xl:px-64 z-auto"
                containerClassName="h-full w-full"
>
            <div className="
              flex flex-col justify-center p-6 mx-auto w-full max-w-1248
              sm:py-12
              lg:py-24 lg:flex-row lg:justify-between lg:bg-secondary/80 lg:rounded-2xl lg:shadow-lg lg:aspect-video lg:my-auto lg:w-full
              2xl:max-w-[1248px]
            ">
                <div className="flex flex-col justify-center p-6 text-center lg:text-left">
                    <Headline1>
                            <Highlight>Produkte</Highlight>
                            {' '}mit Leidenschaft
                    </Headline1>
                    <p className="[&:not(:first-child)]:mt-6">
                            Ich schaffe intuitive Produkte und automatisierte Prozesse.
                    </p>

                    <div className="flex py-6 text-5xl self-center items-center gap-3 break-after-column lg:m-0 lg:self-start">
                        <Button
                            size="lg"
                            className=''
                            onClick={() => {
                                scrollToSection('contact')
                                plausible('click-contact', { props: { location: 'hero', href: '#contact' } });
                            }}
                        >
                            Kontakt
                        </Button>

                        <TooltipProvider>

                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button variant="outline" size="icon" asChild>
                                        <Link href="https://www.linkedin.com/in/tillhoffmann/" aria-label="Go to LinkedIn profile of Till Hoffmann" target="_blank" rel="noreferrer">
                                            <AiFillLinkedin className="h-7 w-7" />
                                        </Link>
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Go to my LinkedIn profile</p>
                                </TooltipContent>
                            </Tooltip>

                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button variant="outline" size="icon" asChild>
                                        <Link href="https://x.com/tillxhoffmann" aria-label="Go to X profile of Till Hoffmann" target="_blank" rel="noreferrer">
                                            <BsTwitterX className="h-6 w-6" />
                                        </Link>
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Go to my X profile</p>
                                </TooltipContent>
                            </Tooltip>

                        </TooltipProvider>
                    </div>

                </div>

                <div className="flex m-auto w-auto max-w-sm relative">
                    <Avatar className='w-full h-full'>
                        <AvatarImage src="/images/profile-picture-2.webp" />
                        <AvatarFallback className='h-full w-full'>TH</AvatarFallback>
                    </Avatar>
                    <div className='absolute right-6 -top-4 md:right-8 md:-top-2'>
                        <StatusBadge />
                    </div>
                </div>
            </div>
            </HeroHighlight>
        </section>
    );
}

export default Hero;