import React from 'react';
import Hero from '../components/Hero';
import WhoThisIsFor from '../components/WhoThisIsFor';
import WhoThisIsNotFor from '../components/WhoThisIsNotFor';
import WhatYouReceive from '../components/WhatYouReceive';
import HowItWorks from '../components/HowItWorks';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

const Advisory = () => {
  return (
    <main className="min-h-screen bg-off-white">
      <Hero />
      <WhoThisIsFor />
      <WhoThisIsNotFor />
      <WhatYouReceive />
      <HowItWorks />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Advisory;