import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Application',
      description: 'Submit a short application to determine whether this advisory is potentially a fit.'
    },
    {
      number: '02',
      title: 'Preliminary Fit Call',
      description: 'If your application appears aligned, a brief 15-minute conversation is scheduled to confirm scope, objectives, and whether a paid diagnostic review is appropriate.'
    },
    {
      number: '03',
      title: 'Preliminary Portfolio Diagnostic (Paid)',
      description: 'If both parties agree to proceed, a paid Preliminary Portfolio Diagnostic is initiated. High-level portfolio data is collected and reviewed offline to assess risk, constraints, and strategic positioning.'
    },
    {
      number: '04',
      title: 'Diagnostic Review & Next-Step Determination',
      description: 'Findings are reviewed together, and—if appropriate—you may be invited to continue into a longer-term advisory engagement.'
    },
    {
      number: '05',
      title: 'Ongoing Advisory (Invite-Only)',
      description: 'For qualified clients, ongoing advisory is structured on a quarterly basis and focused on portfolio strategy, refinancing decisions, acquisition guardrails, and forward planning.'
    }
  ];

  return (
    <section className="bg-off-white border-t border-slate-blue/10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24">
        {/* Section Header */}
        <h2 className="font-heading text-charcoal text-[24px] md:text-[28px] lg:text-[32px] mb-10 md:mb-12">
          How It Works
        </h2>

        {/* Steps */}
        <div className="space-y-8 md:space-y-10">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-5 md:gap-8">
              {/* Step Number */}
              <div className="flex-shrink-0">
                <span className="text-slate-blue font-heading text-2xl md:text-3xl font-semibold">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 pt-1">
                <h3 className="font-heading text-charcoal text-lg md:text-xl mb-2 md:mb-3">
                  {step.title}
                </h3>
                <p className="text-text-muted text-base md:text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-text-muted text-sm md:text-base mt-10 md:mt-12 italic">
          Not all diagnostic engagements result in an invitation to ongoing advisory.
        </p>
      </div>
    </section>
  );
};

export default HowItWorks;