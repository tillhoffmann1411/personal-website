import { Accordion } from '@/components/ui/accordion';
import { faqData } from '@/app/lib/data/faq';
import FAQEntry from './faq-entry';

const FAQ = () => {
  return (
    <section id="faq" className='mt-40'>
      <div className="py-6">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">FAQ</h2>
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
