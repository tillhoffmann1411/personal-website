import { AboutMe } from '../../types/definitions';
import { scrollToSection } from '../utils';

export const aboutMeData: AboutMe[] = [
    {
        title: '💻 Produkte',
        description: (
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                <li>Gründer und Entwicklung von Knowledge-in-a-Box.</li>
                <li>Entwickler von grow-content</li>
                <li>Teilen meiner eigenen Automatisierungen</li>
            </ul>
        ),
    },
    {
        title: '👨🏼‍💻 Angebot',
        description: (
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                <li>Ich bringe deine Idee zum Leben in 4 Wochen.</li>
                <li>Danach entwickeln wir dein neues Produkt zur Martkreife.</li>
            </ul>
        ),
    },
    {
        title: '💡 Mein Antrieb',
        description: (
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                <li>Ich lerne nie aus und finde es spannend, neue Prozesse kennenzulernen.</li>
                <li>Ich nutze modernste Technologien, um Prozesse effizient zu gestalten.</li>
            </ul>
        ),
    },
    {
        title: '🤝🏼',
        description: (
            <p className="leading-7 [&:not(:first-child)]:mt-6">
                Ich bin ein fan von regelmäßiger asynchroner Kommunikation. Dabei bleibt der Fokus auf das Wesentliche und Inhalte sind auch später noch zugänglich.
            </p>
        ),
    },
    {
        title: '📬 Reach Out',
        description: (
            <p className="italic leading-7 [&:not(:first-child)]:mt-6">Du bist interessiert mit mir zusammen zu arbeiten? Dann schreib mir.</p>
        ),
        function: () => scrollToSection('contact'),
    },
];