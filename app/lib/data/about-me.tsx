import { AboutMe } from '../definitions';
import { scrollToSection } from '../utils';

export const aboutMeData: AboutMe[] = [
    {
        title: '👨🏽‍💻 Professional Aim',
        description: (
            <ul className="space-y-1 list-disc list-inside">
                <li>Driving product and strategic orientation at Knowledge in a Box.</li>
                <li>Consulting with a focus on knowledge graphs and process automation.</li>
                <li>Optimizing and automating processes for growing companies.</li>
            </ul>
        ),
    },
    {
        title: '🌍 Personal Exploration',
        description: (
            <ul className="space-y-1 list-disc list-inside">
                <li>Learning new languages and international recipes.</li>
                <li>Exploring remote work globally.</li>
            </ul>
        ),
    },
    {
        title: '💡 Learning and Growth',
        description: (
            <ul className="space-y-1 list-disc list-inside">
                <li>Started my own <a href="https://medium.com/@hoffmann.webdev" className="underline">blog</a> to share my knowledge and improve my writing.</li>
                <li>Trying more ways of asynchronous communication.</li>
            </ul>
        ),
    },
    {
        title: '🎓 Background',
        description: (
            <p className="text-sm">Tech enthusiast passionate about efficiency and solving real-world problems. Master&apos;s in Information Systems with international experience.</p>
        ),
    },
    {
        title: '📬 Reach Out',
        description: (
            <p className="italic text-sm">Discuss projects, collaborations, or tech. Contact me.</p>
        ),
        function: () => scrollToSection('contact'
        ),
    },
];