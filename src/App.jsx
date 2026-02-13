import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Advisory from './pages/Advisory';
import Privacy from './pages/Privacy';
import TermsPage from './pages/TermsPage';
import DisclosuresPage from './pages/DisclosuresPage';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Routes>
      {/* Redirect root to /advisory */}
      <Route path="/" element={<Navigate to="/advisory" replace />} />
      <Route path="/advisory" element={<Advisory />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/disclosures" element={<DisclosuresPage />} />
    </Routes>
  );
}

export default App;