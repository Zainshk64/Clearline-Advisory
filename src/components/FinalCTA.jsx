// components/FinalCTA.tsx
import React from 'react';

const FinalCTA = () => {
  return (
    <section className="py-20 md:py-24 lg:py-28 bg-off-white">
      <div className="max-w-[1100px] mx-auto px-6 md:px-8 lg:px-10">
        {/* Content Container */}
        <div className="max-w-2xl">
          {/* Section Header */}
          <h2 className="font-heading text-3xl md:text-[32px] font-semibold text-charcoal mb-6">
            Apply for Clearline Advisory
          </h2>

          {/* Body Copy */}
          <p className="text-base md:text-lg text-text-muted leading-relaxed mb-10">
            If you are managing DSCR-financed residential real estate and want a clear, portfolio-level strategy, apply below.
          </p>

          {/* Primary CTA Button */}
          <a
            href="https://form.typeform.com/to/Cl5ljWMv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-slate-blue text-white text-sm md:text-base font-medium hover:bg-charcoal transition-colors duration-200"
          >
            Apply for Advisory
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;