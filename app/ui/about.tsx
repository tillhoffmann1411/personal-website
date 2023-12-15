import { aboutMeData } from '../lib/data/about-me';


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
                <h2 className="dark:text-white">Now</h2>
            </div>

            <div className="grid auto-rows-auto grid-cols-1 gap-4 sm:grid-cols-3">
                {aboutMeData.map((e, i) => (
                    <div
                        onClick={e.function}
                        key={e.title}
                        className={`group row-span-1 rounded-2xl
                            transform transition-all duration-300
                            bg-gray-200 p-6 dark:bg-gray-900 dark:text-white col-auto
                            ${i === 3 || i === 6 ? "sm:col-span-2" : ""}
                            ${e.function && `cursor-pointer hover:bg-purple-200 hover:dark:bg-purple-900`}
                        `}
                    >
                        <h3 className="mb-2">{e.title}</h3>
                        <div className="border-t-2 border-gray-400 dark:border-gray-600 mt-2"></div>
                        <div className="mt-6">{e.description}</div>
                        {
                            e.function && (
                                <div className="w-full flex place-content-end">
                                    {hoverButton}
                                </div>
                            )
                        }
                    </div>
                ))}
            </div>

            <p className="text-xs text-gray-400">Updated 2023-12-14 - inspired by <a href="https://nownownow.com/" className="underline">now</a></p>



        </section>
    );
}
