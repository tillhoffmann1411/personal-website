export type IFAQ = {
    question: string;
    answer: React.ReactElement;
};

export const faqData = [
    {
        question: "Was ist bei dir der Unterschied zu einem normalen Software Entwickler?",
        answer: (
            <span>
                <p className='leading-7 [&:not(:first-child)]:mt-6'>
                    Zusammen mit dir entwickeln wir zusammen deine Idee weiter. Diese nutzen wir dann, um Features, Tasks und Schnittstellen zu definieren. Daraus leite ich Anforderungen an die Software ab. Dabei beachte ich immer deinen konkreten Kontext.
                </p>
                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                    <li>Wie viele Nutzer werden die Software nutzen?</li>
                    <li>Auf welchen Geräten wird die Software laufen?</li>
                    <li>Welche Technologien werden bereits im Unternehmen verwendet?</li>
                    <li>... und vieles mehr.</li>
                </ul>
                <p className='leading-7 [&:not(:first-child)]:mt-6'>
                    Am Ende der Planung stelle ich dir alles vor und ich beginne mit der Entwicklung.
                </p>
            </span>
        ),
    },
    {
        question:
            "Wie schaffst du es in 4 Wochen einen Prototypen zu entwickeln?",
        answer: (
            <div>
                <p className='leading-7 [&:not(:first-child)]:mt-6'>
                    Durch strukturiertes Vorgehen und fokusieren auf die Kernfunktion, schaffe ich es deine Idee in 4 Wochen zu realisieren. Dabei werde ich dir alles vorbereiten, was du brauchst, um deine umgesetzte Idee zu präsentieren.
                </p>
            </div>
        ),
    },
    {
        question: "Wie lange entwickelst du schon Produkte?",
        answer: (
            <p className='leading-7 [&:not(:first-child)]:mt-6'>
                Ich entwickle Produkte nun schon seit mehereren Jahren. Dabei habe ich eigene Produkte entwickelt, die vom Ministerium für Wirtschaft und Klimaschutz für digitale Innovation ausgezeichnet wurde. Daneben habe ich mehrere Produkte für andere Unternehmen entwickelt.
            </p>
        ),
    },
    // Weitere FAQ-Einträge hier
];