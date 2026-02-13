import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal border-t border-white/10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12 py-8 md:py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Copyright */}
          <p className="text-white/60 text-sm">
            © {currentYear} Clearline Advisory. All rights reserved.
          </p>

          {/* Footer Links */}
          <div className="flex items-center gap-2 text-sm">
            <Link 
              to="/privacy" 
              className="text-white/60 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-white/30">|</span>
            <Link 
              to="/terms" 
              className="text-white/60 hover:text-white transition-colors"
            >
              Terms
            </Link>
            <span className="text-white/30">|</span>
            <Link 
              to="/disclosures" 
              className="text-white/60 hover:text-white transition-colors"
            >
              Disclosures
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;