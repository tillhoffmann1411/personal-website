'use client';
import {
    AiFillLinkedin,
    AiFillGithub,
} from "react-icons/ai";
import { scrollToSection } from '../lib/utils';
import { FC } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import StatusBadge from '../../components/status-badge';

const Hero: FC = () => {
    return (
        <section id="hero" className="min-h-screen flex
            px-5 sm:px-10 md:px-32 xl:px-64
            w-full">
            <div className="
              flex flex-col justify-center p-6 mx-auto w-full max-w-1248
              sm:py-12
              lg:py-24 lg:flex-row lg:justify-between lg:bg-secondary lg:rounded-2xl lg:shadow-lg lg:aspect-video lg:my-auto lg:w-full
              2xl:max-w-[1248px]
            ">
                <div className="flex flex-col justify-center p-6 text-center lg:text-left">
                    <h1 className='pb-6 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
                        Till Hoffmann
                    </h1>
                    <h2 className="pb-2 scroll-m-20 border-b text-3xl font-semibold tracking-tight first:mt-0">
                        Professional{' '}
                        <code className='relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono font-semibold'>Next.js</code>
                        {' '}developer
                    </h2>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                        Passionate about clean web development and automation
                    </p>

                    <div className="flex py-6 text-5xl self-center items-center gap-3 break-after-column lg:m-0 lg:self-start">
                        <Button
                            size="lg"
                            className=''
                            onClick={() => scrollToSection('contact')}
                        >
                            Contact
                        </Button>

                        <TooltipProvider>

                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button variant="outline" size="icon" asChild>
                                        <Link href="https://github.com/tillhoffmann1411" aria-label="Go to GitHub profile of Till Hoffmann" target="_blank" rel="noreferrer">
                                            <AiFillGithub className="h-7 w-7" />
                                        </Link>
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Go to my GitHub profile</p>
                                </TooltipContent>
                            </Tooltip>

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
        </section>
    );
}

export default Hero;