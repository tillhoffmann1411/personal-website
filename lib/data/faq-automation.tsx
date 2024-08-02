export type IFAQ = {
    question: string;
    answer: React.ReactElement;
};

export const faqData = [
    {
        question: "Welche Tools nutze ich?",
        answer: (
            <div>
                <p className='leading-7 [&:not(:first-child)]:mt-6'>
                    Generell passe ich mich an die Tools an, die sowieso schon im Unternehmen verwendet werden. Standard Tools, die in der Vergangenheit häufiger verwendet wurden sind foldende:
                </p>
                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                    <li>- CRM Tools, wie z.B. Hubspot, Pipedrive, etc.</li>
                    <li>- Dokumentations Tools, wie z.B. Confluence, Notion etc. </li>
                    <li>- Projektmanagement Tools, wie z.B. Trello, Asana, etc.</li>
                    <li>- Workflow Tools, wie z.B. Zapier, Make oder n8n.io</li>
                    <li>... und viele mehr.</li>
                </ul>
                <p className='leading-7 [&:not(:first-child)]:mt-6'>
                    Am Ende kommt es immer auf den konkreten Kontext an, daher bin ich generell Tool offen.
                </p>
            </div>
        ),
    },
    {
        question: "Ist das Datenschutz-komform?",
        answer: (
            <span>
                <p className='leading-7 [&:not(:first-child)]:mt-6'>
                    Das kommt natürlich auf die Tools und Use Case an. Prinzipiell ist es oft möglich auch selbst gehostet Alternativen zu verwenden. Tatsächlich versuche ich jedoch möglichst nur schon bestehende Tools zu nutzen und so muss der Datenschutz nicht erneut überprüft werden.
                </p>
            </span>
        ),
    },
    {
        question: "Wie lange dauert es, einen Prozess zu automatisieren?",
        answer: (
            <div>
                <p className='leading-7 [&:not(:first-child)]:mt-6'>
                    Dies hängt stark von der Komplexität ab. Ein einfacher Prozess kann in wenigen Tagen umgesetzt werden. Ein komplexer Prozess kann aber auch mal mehreren Wochen benötigen.
                </p>
            </div>
        ),
    },
];