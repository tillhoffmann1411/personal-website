'use client'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { aboutMeData } from '../../lib/data/about-me';
import { Headline2 } from '../ui/typography';
import { cn } from '../../lib/utils';

const hoverButton = (
    <div className="inline-flex items-center justify-center
      w-8 h-8 rounded-full
      transform transition-all duration-500 group-hover:rotate-90
      text-white bg-black group-hover:bg-black group-hover:text-white
      sm:bg-transparent sm:text-transparent">
        {/* Arrow to the right svg*/}
        <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12">
            <path d="M2.5 1.5l7 4-7 4" />
        </svg>
    </div>
);


export default function About() {
    return (
        <section id="about">
            <div className="py-6">
                <Headline2>Über mich</Headline2>
            </div>


            <div className="grid auto-rows-auto grid-cols-1 gap-4 sm:grid-cols-3">
                {aboutMeData.map((e, i) => (
                    <Card
                        onClick={e.function}
                        key={e.title}
                        className={`group row-span-1
                            transform transition-all duration-300 col-auto
                            ${i === 3 || i === 6 ? "sm:col-span-2" : ""}
                            ${e.function && `cursor-pointer hover:bg-primary hover:text-primary-foreground`}
                        `}
                    >
                        <CardHeader>
                            <CardTitle>
                                {e.title}
                            </CardTitle>
                            <CardDescription className={cn(e.function && 'group-hover:text-primary-foreground')}>
                                {e.description}
                            </CardDescription>
                        </CardHeader>

                        {
                            e.function && (

                                <CardFooter className="w-full flex place-content-end">
                                    {hoverButton}
                                </CardFooter>
                            )
                        }
                    </Card>
                ))}
            </div>
        </section>
    );
}
