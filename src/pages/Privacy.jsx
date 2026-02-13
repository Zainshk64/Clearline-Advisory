import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineArrowLeft } from 'react-icons/hi';

const Privacy = () => {
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
        <h1 className="font-heading text-charcoal text-[28px] md:text-[36px] mb-2">
          Privacy Policy
        </h1>
        <p className="text-text-muted text-sm mb-10">
          Effective Date: January 2025
        </p>

        {/* Content */}
        <div className="space-y-8 text-text-primary text-base leading-relaxed">
          <p>
            Clearline Advisory ("we," "us," or "our") respects your privacy and is committed to protecting the personal information you provide through this website.
          </p>

          <section>
            <h2 className="font-heading text-charcoal text-xl mb-3">Information We Collect</h2>
            <p className="mb-3">
              We may collect personal information you voluntarily provide, including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-1 text-text-muted ml-4">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>High-level information about your real estate portfolio or investment objectives</li>
            </ul>
            <p className="mt-3">
              We do not knowingly collect sensitive personal data beyond what is necessary for advisory qualification purposes.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-charcoal text-xl mb-3">How We Use Information</h2>
            <p className="mb-3">Information collected is used to:</p>
            <ul className="list-disc list-inside space-y-1 text-text-muted ml-4">
              <li>Review advisory applications</li>
              <li>Determine fit for advisory services</li>
              <li>Communicate regarding next steps or services</li>
              <li>Improve internal processes and service delivery</li>
            </ul>
            <p className="mt-3">We do not sell or rent your personal information.</p>
          </section>

          <section>
            <h2 className="font-heading text-charcoal text-xl mb-3">Information Sharing</h2>
            <p>We may share information only:</p>
            <ul className="list-disc list-inside space-y-1 text-text-muted ml-4 mt-2">
              <li>With service providers assisting in form processing, hosting, or communications</li>
              <li>When required by law</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-charcoal text-xl mb-3">Data Security</h2>
            <p>
              We take reasonable administrative and technical measures to protect your information. However, no method of transmission over the internet is completely secure.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-charcoal text-xl mb-3">Your Choices</h2>
            <p>
              You may request access to, correction of, or deletion of your personal information by contacting us.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-charcoal text-xl mb-3">Contact</h2>
            <p>
              For privacy-related inquiries, contact:{' '}
              <a href="mailto:info@clearlineadvisory.co" className="text-slate-blue hover:underline">
                info@clearlineadvisory.co
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Privacy;