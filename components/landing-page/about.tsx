'use client'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { aboutMeData } from '../../lib/data/about-me';

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
        <section id="about" className='mt-40'>
            <div className="py-6">
                <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">About me</h2>
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
                        </CardHeader>

                        <CardContent>
                            {e.description}
                        </CardContent>
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

            <p className="text-xs text-gray-400">Updated 2024-01-12 - inspired by <a href="https://nownownow.com/" className="underline">now</a></p>



        </section>
    );
}
