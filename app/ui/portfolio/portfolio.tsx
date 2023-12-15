import { useState, useEffect } from 'react';

import Carousel from './carousel';
import Filter from './filter';
import { projectsData } from '../../lib/data/projects';

const Portfolio = () => {
    const [techStack, setTechStack] = useState<string[]>([]);
    const [projects, setProjects] = useState(projectsData);

    useEffect(() => {
        const techStacks = projectsData.map(e => e.techStack).flat();
        const uniqueTechStacks = Array.from(new Set(techStacks));
        setTechStack(uniqueTechStacks);
    }, [setTechStack]);

    const onChange = (filter: string | undefined) => {
        if (filter === undefined) {
            setProjects(projectsData);
        } else {
            setProjects(projectsData.filter(e => e.techStack.includes(filter)));
        }
    };

    return (
        <section className='mt-10 max-h-lg' id='portfolio'>
            <div className='mx-auto py-10 px-5 sm:px-10 md:px-32 xl:px-64'>
                <h2 className='dark:text-white'>Portfolio</h2>
            </div>
            <div className='mx-auto py-10 px-5 sm:px-10 md:px-32 xl:px-64'>
                <Filter options={techStack} onChange={onChange} />
            </div>
            <div className='px-5'>
                <Carousel projects={projects} />
            </div>
        </section>

    );
}

export default Portfolio;