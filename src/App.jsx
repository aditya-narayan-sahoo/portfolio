import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <BrowserRouter>
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
            {/* Fallback redirect */}
            <Route path="*" element={<Navigate to="/" replace />} />
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
    </BrowserRouter>
  );
}
