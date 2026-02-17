import React from 'react';
import { HiOutlineShieldCheck, HiOutlineChartBar, HiOutlineMap } from 'react-icons/hi';

const Hero = () => {
  const bulletPoints = [
    {
      icon: HiOutlineShieldCheck,
      text: 'Stress-test portfolio risk beyond lender approval'
    },
    {
      icon: HiOutlineChartBar,
      text: 'Reduce fragility across rates, DSCR assumptions, and income volatility'
    },
    {
      icon: HiOutlineMap,
      text: 'Build a refinance and acquisition roadmap for the next 12–24 months'
    }
  ];

  return (
    <section className="bg-off-white">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-24 lg:py-32">
        {/* Eyebrow */}
        <p className="text-text-muted text-sm md:text-base tracking-widest uppercase mb-4 md:mb-6">
          Private Portfolio Advisory
        </p>

        {/* H1 Headline */}
        <h1 className="font-heading text-charcoal text-[32px] md:text-[44px] lg:text-[52px] leading-tight mb-4 md:mb-6">
          Clearline Advisory
        </h1>

        {/* Subheadline */}
        <p className="text-text-primary text-lg md:text-xl lg:text-2xl max-w-2xl mb-8 md:mb-10 leading-relaxed">
          Portfolio-level strategy for residential real estate investors using DSCR and non-QM debt.
        </p>

        {/* Bullet Points */}
        <ul className="space-y-4 md:space-y-5 mb-10 md:mb-12">
          {bulletPoints.map((item, index) => (
            <li key={index} className="flex items-start gap-3 md:gap-4">
              <item.icon className="w-5 h-5 md:w-6 md:h-6 text-slate-blue flex-shrink-0 mt-0.5" />
              <span className="text-text-primary text-base md:text-lg">{item.text}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="flex flex-col items-start">
          <a
           href="https://form.typeform.com/to/Cl5ljWMv"
            target="_blank"
            rel="noopener noreferrer"
                        className="inline-block bg-slate-blue text-white text-sm md:text-base font-medium px-8 py-4 hover:bg-charcoal transition-colors duration-200"
          >
            Apply for Advisory
          </a>

          {/* Micro-Trust Line */}
          <p className="text-text-muted text-sm mt-4">
            Limited capacity. Application required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;