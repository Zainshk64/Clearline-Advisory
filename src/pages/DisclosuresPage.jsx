import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineArrowLeft } from 'react-icons/hi';

const DisclosuresPage = () => {
  return (
    <main className="min-h-screen bg-off-white">
      <div className="max-w-[800px] mx-auto px-6 md:px-8 py-12 md:py-16 lg:py-20">
        {/* Back Link */}
        <Link 
          to="/advisory" 
          className="inline-flex items-center gap-2 text-text-muted hover:text-charcoal text-sm mb-8 transition-colors"
        >
          <HiOutlineArrowLeft className="w-4 h-4" />
          Back to Advisory
        </Link>

        {/* Page Title */}
        <h1 className="font-heading text-charcoal text-[28px] md:text-[36px] mb-6">
          Disclosures
        </h1>

        {/* Content */}
        <div className="space-y-8 text-text-primary text-base leading-relaxed">
          <p>
            Clearline Advisory provides portfolio-level educational and strategic advisory services related to residential real estate investing and financing concepts.
          </p>

          <section>
            <h2 className="font-heading text-charcoal text-xl mb-3">Not a Lending Entity</h2>
            <p>
              Clearline Advisory is not a lender and does not issue loan commitments through this website.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-charcoal text-xl mb-3">No Obligation to Originate</h2>
            <p>
              Participation in advisory services does not obligate any client to use any specific lender, loan product, or service provider.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-charcoal text-xl mb-3">Licensing</h2>
            <p>
              Any mortgage origination activity, if applicable, is conducted separately and in compliance with applicable licensing requirements. Advisory services are independent of loan origination.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-charcoal text-xl mb-3">Compensation Disclosure</h2>
            <p>
              In some cases, Clearline Advisory or its principals may receive compensation for mortgage origination or related services only if a client independently elects to pursue those services under a separate agreement. There is no requirement to do so.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-charcoal text-xl mb-3">No Fiduciary Relationship</h2>
            <p>
              Advisory services do not create a fiduciary, legal, or agency relationship.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default DisclosuresPage;