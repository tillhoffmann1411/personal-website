import { Muted } from '../../components/ui/typography';
import { AboutMe } from '../../types/definitions';
import { scrollToSection } from '../utils';

export const aboutMeData: AboutMe[] = [
    {
        title: '💻 Passion',
        description: (
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                <li>Ich bin begeistert von Produkten, die sich wie Magie anfühlen.</li>
                <li>Dabei treibt mich eine ständige Neugier an mich ständig weiter zu entwickeln.</li>
            </ul>
        ),
    },
    {
        title: '👨🏼‍🎓 Ausbildung',
        description: (
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                <li>Bachelor in Wirtschaftsinformatik an der FH Münster</li>
                <li>Master in Wirtschaftsinformatik and der WWU Münster</li>
                <li>Auslandssemester in Süd-Korea</li>
            </ul>
        ),
    },
    {
        title: '💡 Arbeitsweise',
        description: (
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                <li>Ich arbeite in kurzen und schnellen Iterationen.</li>
                <li>Asynchrone Kommunikation hilft dabei Feedbackschleifen kurz zu halten.</li>
                <li>Klare Ziele und Termine helfen Projekte zu beenden.</li>
            </ul>
        ),
    },
    {
        title: '🤝🏼 ',
        description: (
            <div className="leading-7 [&:not(:first-child)]:mt-6">
                Wir sollten zusammenarbeiten, wenn du eine spannende Idee hast, deine Prozesse effizienter gestalten möchtest oder du Hilfe bei deiner Produktentwicklung benötigst.
            </div>
        ),
    },
    {
        title: '📬 Reach Out',
        description: (
            <div className="italic leading-7 [&:not(:first-child)]:mt-6">Du bist interessiert mit mir zusammen zu arbeiten? Dann schreib mir.</div>
        ),
        function: () => scrollToSection('contact'),
    },
];