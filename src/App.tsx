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

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [hasInvalidPath, setHasInvalidPath] = useState(() => !isValidPathname(window.location.pathname));

  useEffect(() => {
    const handlePopState = () => {
      setHasInvalidPath(!isValidPathname(window.location.pathname));
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
          {hasInvalidPath ? (
            <NotFoundPage invalidPath={window.location.pathname + window.location.hash} />
          ) : (
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
              {/* Fallback for invalid hash routes */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          )}
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
