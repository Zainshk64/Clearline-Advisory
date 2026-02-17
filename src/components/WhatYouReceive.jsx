// components/WhatYouReceive.tsx
import React from 'react';

const WhatYouReceive = () => {
  const deliverables = [
    {
      title: 'Portfolio intake and diagnostic review',
      description: 'Comprehensive assessment of your current DSCR portfolio structure and exposure levels.'
    },
    {
      title: 'Risk mapping across DSCR sensitivity, rate resets, income stability, and concentration',
      description: 'Detailed analysis of vulnerabilities and stress points across your holdings.'
    },
    {
      title: 'Refinance timing and sequencing strategy',
      description: 'Optimal scheduling for refinance events to minimize risk and maximize flexibility.'
    },
    {
      title: 'Acquisition guardrails and rejection criteria',
      description: 'Clear parameters for evaluating new opportunities and knowing when to walk away.'
    },
    {
      title: 'A written roadmap aligned to your goals and constraints',
      description: 'Documented strategy tailored to your specific situation and objectives.'
    },
    {
      title: 'Ongoing strategy support for qualified engagements',
      description: 'Continued advisory relationship for implementation and evolving decisions.'
    }
  ];

  return (
    <section className="py-20 md:py-24 lg:py-28 bg-off-white">
      <div className="max-w-[1100px] mx-auto px-6 md:px-8 lg:px-10">
        {/* Section Header */}
        <h2 className="font-heading text-3xl md:text-[32px] font-semibold text-charcoal mb-12 md:mb-16">
          What You Receive
        </h2>

        {/* Deliverables List */}
        <div className="space-y-8 md:space-y-10">
          {deliverables.map((item, index) => (
            <div 
              key={index}
              className="flex gap-4 md:gap-6"
            >
              {/* Bullet/Icon */}
              <div className="flex-shrink-0 mt-1.5">
                <div className="w-2 h-2 bg-slate-blue rounded-full" />
              </div>
              
              {/* Content */}
              <div>
                <p className="text-base md:text-lg text-charcoal leading-relaxed">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouReceive;