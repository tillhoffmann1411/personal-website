import { faqData } from '../../lib/data/faq';
import FAQEntry from './faq-entry';

const FAQ = () => {
  return (
    <section id="faq">
      <div className="py-6">
        <h2 className="dark:text-white ">FAQ</h2>
      </div>
      <div className="grid divide-y divide-neutral-200 mt-2">
        {faqData.map((entry, index) => (
          <FAQEntry key={index} {...entry} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
