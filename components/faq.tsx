import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { IFAQ } from '@/lib/data/faq';
import { Headline2 } from './ui/typography';
import { FC } from 'react';

type Props = {
  question: string;
  answer: React.ReactElement;
};

const FAQEntry: FC<Props> = ({ question, answer }) => {
  return (
      <AccordionItem value={question}>
          <AccordionTrigger className="text-xl">{question}</AccordionTrigger>
          <AccordionContent>
              {answer}
          </AccordionContent>
      </AccordionItem>
  );
};

type FAQProps = {
  faqData: IFAQ[];
};

const FAQ = ({ faqData }: FAQProps) => {
  return (
    <section id="faq" className='mt-40'>
      <div className="py-6">
        <Headline2>FAQ</Headline2>
      </div>
      <Accordion type="single" collapsible>
        {faqData.map((entry, index) => (
          <FAQEntry key={index} {...entry} />
        ))}
      </Accordion>
    </section>
  );
};

export default FAQ;
