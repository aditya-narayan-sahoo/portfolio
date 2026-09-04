import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MobileNavDock from './components/MobileNavDock';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import ScrollToTop from './components/ScrollToTop';

// Pages
import HomePage from './pages/HomePage';
import PipelinePage from './pages/PipelinePage';
import ExperiencePage from './pages/ExperiencePage';
import CredentialsPage from './pages/CredentialsPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

function isValidPathname(pathname: string): boolean {
  const cleanPath = pathname.replace(/\/+$/, '') || '/';
  const allowed = ['/', '/index.html', '/portfolio', '/portfolio/index.html'];
  return allowed.includes(cleanPath);
}

// Synchronous URL normalization on initialization:
// If the user typed an invalid path (e.g. /sfdfdf, /uno, /bdsdgdfdf):
// Capture the invalid path, strip it from the browser address bar immediately via history.replaceState,
// and route to '#/404' so the URL cleanly becomes 'http://.../#/404' instead of corrupting subsequent links.
let initialInvalidPath = '';
if (typeof window !== 'undefined' && !isValidPathname(window.location.pathname)) {
  initialInvalidPath = window.location.pathname;
  const isGhPages = window.location.pathname.startsWith('/portfolio');
  const cleanBase = isGhPages ? '/portfolio/' : '/';
  const existingHash = window.location.hash;
  const targetHash = existingHash && existingHash !== '#/' ? existingHash : '#/404';
  window.history.replaceState(null, '', cleanBase + targetHash);
}

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      if (!isValidPathname(window.location.pathname)) {
        const isGhPages = window.location.pathname.startsWith('/portfolio');
        const cleanBase = isGhPages ? '/portfolio/' : '/';
        const existingHash = window.location.hash;
        const targetHash = existingHash && existingHash !== '#/' ? existingHash : '#/404';
        window.history.replaceState(null, '', cleanBase + targetHash);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="portfolio-app">
        {/* Persistent Global Navigation */}
        <Navbar onOpenResume={() => setIsResumeOpen(true)} />

        {/* Multi-Page Routes */}
        <main className="main-content-router">
          <Routes>
            <Route 
              path="/" 
              element={<HomePage onOpenResume={() => setIsResumeOpen(true)} />} 
            />
            <Route 
              path="/pipeline" 
              element={<PipelinePage />} 
            />
            <Route 
              path="/experience" 
              element={<ExperiencePage />} 
            />
            <Route 
              path="/credentials" 
              element={<CredentialsPage />} 
            />
            <Route 
              path="/contact" 
              element={<ContactPage onOpenResume={() => setIsResumeOpen(true)} />} 
            />
            <Route 
              path="/404" 
              element={<NotFoundPage invalidPath={initialInvalidPath} />} 
            />
            {/* Fallback for invalid hash routes */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Globally Accessible Resume Modal */}
        <ResumeModal 
          isOpen={isResumeOpen} 
          onClose={() => setIsResumeOpen(false)} 
        />

        {/* Mobile Floating Bottom Navigation Dock */}
        <MobileNavDock />
      </div>
    </HashRouter>
  );
}
