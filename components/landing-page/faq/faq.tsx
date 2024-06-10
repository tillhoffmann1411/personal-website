import { Accordion } from '@/components/ui/accordion';
import { faqData } from '@/lib/data/faq';
import FAQEntry from './faq-entry';
import { Headline2 } from '../../ui/typography';

const FAQ = () => {
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
