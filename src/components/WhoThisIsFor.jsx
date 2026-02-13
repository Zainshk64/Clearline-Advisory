import React from 'react';
import { HiOutlineCheck } from 'react-icons/hi';

const WhoThisIsFor = () => {
  const bulletPoints = [
    'Investors with $1M–$3.5M+ in residential loan exposure',
    'Owners of DSCR-financed long-term or short-term rental properties',
    'Investors planning refinances, new acquisitions, or portfolio restructuring',
    'Clients seeking strategic guidance, not lender or rate shopping'
  ];

  return (
    <section className="bg-off-white border-t border-slate-blue/10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24">
        {/* Section Header */}
        <h2 className="font-heading text-charcoal text-[24px] md:text-[28px] lg:text-[32px] mb-6 md:mb-8">
          Who This Is For
        </h2>

        {/* Body Copy */}
        <p className="text-text-primary text-base md:text-lg max-w-3xl mb-8 md:mb-10 leading-relaxed">
          Clearline Advisory is designed for experienced residential real estate investors who are past the "getting approved" phase and focused on building resilient, financeable portfolios over time.
        </p>

        {/* Bullet List */}
        <ul className="space-y-4 md:space-y-5">
          {bulletPoints.map((item, index) => (
            <li key={index} className="flex items-start gap-3 md:gap-4">
              <HiOutlineCheck className="w-5 h-5 md:w-6 md:h-6 text-slate-blue flex-shrink-0 mt-0.5" />
              <span className="text-text-primary text-base md:text-lg">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhoThisIsFor;