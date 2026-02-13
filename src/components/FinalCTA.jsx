import React, { useState } from 'react';
import { HiOutlineChevronDown } from 'react-icons/hi';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What makes this different from deal-level advice?',
      answer: 'Most investors focus on getting individual deals approved. This advisory evaluates how financing decisions interact across your entire portfolio over time.'
    },
    {
      question: 'Do you help with refinancing strategy?',
      answer: 'Yes. Refinance planning and sequencing is a core component of the advisory.'
    },
    {
      question: 'Is this a mortgage application or lender service?',
      answer: 'No. This is portfolio-level advisory and strategy. There is no obligation to originate or place loans.'
    },
    {
      question: 'How long does the advisory last?',
      answer: 'Engagement structure and scope are discussed after application and acceptance.'
    },
    {
      question: 'What does it cost?',
      answer: 'Fees are shared only with accepted applicants after portfolio review.'
    },
    {
      question: 'Is this tax or legal advice?',
      answer: 'No. This advisory does not replace tax, legal, or accounting professionals.'
    },
    {
      question: 'How soon can we begin?',
      answer: 'Accepted applicants can typically begin within a short on-boarding window.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-charcoal">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24">
        {/* Section Header */}
        <h2 className="font-heading text-white text-[24px] md:text-[28px] lg:text-[32px] mb-10 md:mb-12">
          Frequently Asked Questions
        </h2>

        {/* FAQ Items */}
        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border-b border-white/10 last:border-b-0"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full py-5 md:py-6 flex items-center justify-between text-left cursor-pointer group"
              >
                <span className="text-white text-base md:text-lg pr-4 group-hover:text-white/80 transition-colors">
                  {faq.question}
                </span>
                <HiOutlineChevronDown 
                  className={`w-5 h-5 text-white/60 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index ? 'max-h-40 pb-5 md:pb-6' : 'max-h-0'
                }`}
              >
                <p className="text-white/70 text-base md:text-lg leading-relaxed pr-8">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;