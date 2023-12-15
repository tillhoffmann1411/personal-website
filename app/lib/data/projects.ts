import boreg from '@/public/portfolio/boreg-mock.webp';
import koreaBlog from '@/public/portfolio/blog-mock.webp';
import geneticprogramming from '@/public/portfolio/geneticprogramming-mock.webp';
import flatrate from '@/public/portfolio/flatrate-mock.webp';
import heizungssteuerung from '@/public/portfolio/heizungssteuerung-mock.webp';
import kiab from '@/public/portfolio/kiab-mock.webp';
import { Project } from '../definitions';

export const projectsData: Project[] = [
    {
        title: 'Knowledge in a Box',
        description: 'Knowledge in a Box is a Startup I co-founded with two friends in 2023. We are building a tool for context-based knowledge management. This Startup won the German Digital Innovation Award from the German Federal Ministry of Economics and Technology. The core of the product is a knowledge graph that is able to connect information from different sources. Users can access the data through a web app or a browser extension which is able to recommend relevant information based on the context of the user.',
        imageSrc: kiab,
        website: 'https://knowledge-in-a-box.de',
        code: '',
        documentation: 'https://chrome.google.com/webstore/detail/knowledge-in-a-box/ocmeaamkiiohccacdiommkdmljmjcpjm?hl=de',
        techStack: ['TypeScript', 'React', 'node.js'],
        bgColor: 'bg-gray-200',
        bgColorDark: 'dark:from-sky-700'
    },
    {
        title: 'Boreg',
        description: 'This website provides a user based board game recommender. It was part of the project for the university module "Data Integration". The project was graded with 1.0. I was responsible for the project architecture, implementation of the frontend and backend, as well as setting up the infrastructure.',
        imageSrc: boreg,
        website: 'http://168.119.115.148/',
        code: '',
        techStack: ['TypeScript', 'Angular', 'Python', 'Django'],
        documentation: 'https://drive.google.com/file/d/1SGDCBP1f1iq2InqN8lFdihA6fEcQAgrn/view?usp=sharing',
        bgColor: 'bg-gray-200',
        bgColorDark: 'dark:from-blue-700'
    },
    {
        title: 'Personal Blog',
        description: 'This website provides some personal blog posts about my time in South Korea. It was a hobby project to get to know the jekyll framework, a very simple way to publish a personal blog and host it for free on github pages. It was meant to keep friends and family updated about my time in South Korea.',
        imageSrc: koreaBlog,
        website: 'https://till-in-korea.de/',
        code: 'https://github.com/tillhoffmann1411/korea-blog',
        documentation: '',
        techStack: [],
        bgColor: 'bg-gray-200',
        bgColorDark: 'dark:from-yellow-700'
    },
    {
        title: 'Genetic Programming',
        description: 'This project was part of the university seminar "Heuristic Algorithms". I implemented a genetic programming algorithm in Python with the Deap package. The goal was to generate an algorithm that finds investment strategies for the stock market based on historical data.',
        imageSrc: geneticprogramming,
        website: '',
        code: 'https://github.com/tillhoffmann1411/genetic-programming/tree/main',
        documentation: 'https://drive.google.com/file/d/1xAGpMr1Xg3zGOgcCFwR3fU2VhH3pVJm_/view?usp=sharing',
        techStack: ['Python'],
        bgColor: 'bg-gray-200',
        bgColorDark: 'dark:from-teal-700'
    },
    {
        title: 'Flatrate',
        description: 'This project started because my flatmates and I felt overwelmed by the amount of flatmate applications we received. We wanted to create a website where we could rate the flatmates and share our experiences with other flatmates. This app was created with React and Firebase.',
        imageSrc: flatrate,
        website: 'https://flatrate.web.app/',
        code: 'https://github.com/tillhoffmann1411/flatrate',
        documentation: '',
        techStack: ['React', 'TypeScript'],
        bgColor: 'bg-gray-200',
        bgColorDark: 'dark:from-fuchsia-700'
    },
    {
        title: 'FB Heizungssteuerung',
        description: 'This project started as a freelancing project for a local organization. They wanted to create a tool to book rooms and trigger the heating. This app was created with LitElement and Firebase.',
        imageSrc: heizungssteuerung,
        website: 'https://demo.gigarocket.de/',
        code: 'https://github.com/JonathanHartmann/fbcontrolv4',
        documentation: '',
        techStack: ['TypeScript'],
        bgColor: 'bg-gray-200',
        bgColorDark: 'dark:from-amber-700'
    },
];
