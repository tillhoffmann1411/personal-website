'use client';
import { useState, useEffect } from 'react';
import Carousel from './portfolio-carousel';
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
        <section className='mt-40' id='portfolio'>
            <div className='py-6'>
                <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>Portfolio</h2>
            </div>
            <div className='py-6'>
                <Filter options={techStack} onChange={onChange} />
            </div>
            <Carousel projects={projects} />
        </section>

    );
}

export default Portfolio;