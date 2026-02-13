import React from 'react';
import { HiOutlineX } from 'react-icons/hi';

const WhoThisIsNotFor = () => {
  const bulletPoints = [
    'First-time real estate investors',
    'Borrowers seeking rate quotes or lender comparisons',
    'One-off deal reviews without portfolio context',
    'Anyone unwilling to provide portfolio-level information'
  ];

  return (
    <section className="bg-charcoal">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24">
        {/* Section Header */}
        <h2 className="font-heading text-white text-[24px] md:text-[28px] lg:text-[32px] mb-4 md:mb-6">
          Who This Is Not For
        </h2>

        {/* Intro Line */}
        <p className="text-white/80 text-base md:text-lg mb-8 md:mb-10">
          This advisory is intentionally selective.
        </p>

        {/* Bullet List */}
        <ul className="space-y-4 md:space-y-5">
          {bulletPoints.map((item, index) => (
            <li key={index} className="flex items-start gap-3 md:gap-4">
              <HiOutlineX className="w-5 h-5 md:w-6 md:h-6 text-white/60 flex-shrink-0 mt-0.5" />
              <span className="text-white/90 text-base md:text-lg">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhoThisIsNotFor;