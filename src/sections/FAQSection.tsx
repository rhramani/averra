import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Which type of peanuts are used in Averra Oil?',
    answer: 'We exclusively use the G20 variety of peanuts, which are known for their superior taste, high nutritional value, and perfect oil content. These are harvested once a year in November.',
  },
  {
    question: 'Is Averra oil cold-pressed or wood-pressed?',
    answer: 'Averra is traditional Ghani Oil, mechanically pressed at extremely low temperatures without any external heat. This unique process preserves the natural vitamins, minerals, and original aroma of the groundnuts.',
  },
  {
    question: 'Is the oil refined?',
    answer: 'Absolutely not. Averra oil is 100% unrefined. Instead of chemical refining, we use a natural filtration process through multiple layers of cotton cloth, keeping the oil pure and healthy.',
  },
  {
    question: 'What is the shelf life of Averra Oil?',
    answer: 'Due to its purity and unrefined nature, Averra oil has a shelf life of 12 months from the date of extraction. We recommend storing it in a cool, dry place away from direct sunlight.',
  },
  {
    question: 'Are there any chemicals or preservatives used?',
    answer: 'No. Our commitment to "Original Goodness" means zero chemicals, zero preservatives, and zero cholesterol. You get 100% pure, natural groundnut oil.',
  },
  {
    question: 'What are the delivery charges?',
    answer: 'We offer free delivery for all orders across Gujarat. For orders outside Gujarat, standard shipping charges apply.',
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-white to-[#FFF8E7]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#5A3E2B] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-[#5A3E2B]/70 max-w-2xl mx-auto">
            Everything you need to know about our traditional extraction process and products.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="border border-[#F5C542]/20 rounded-2xl px-6 bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left text-[#5A3E2B] font-bold hover:text-[#F5C542] py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-lg text-[#5A3E2B]/70 leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
