import { FC } from 'react';
import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

type Props = {
    question: string;
    answer: React.ReactElement;
};

const FAQEntry: FC<Props> = ({ question, answer }) => {
    return (
        <AccordionItem value={question}>
            <AccordionTrigger>{question}</AccordionTrigger>
            <AccordionContent>
                {answer}
            </AccordionContent>
        </AccordionItem>
    );
};

export default FAQEntry;