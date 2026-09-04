import React from 'react';
import { Link } from 'react-router-dom';
import ContactSection from '../components/ContactSection';
import { Mail, ArrowLeft, Home } from 'lucide-react';

interface ContactPageProps {
  onOpenResume?: () => void;
}

export default function ContactPage({ onOpenResume }: ContactPageProps) {
  return (
    <div className="page-transition page-container">
      <div className="container">
        {/* Page Breadcrumb / Nav */}
        <div className="page-breadcrumb">
          <Link to="/" className="breadcrumb-link">
            <ArrowLeft size={14} />
            <span>Back to Home</span>
          </Link>
          <span className="breadcrumb-sep">/</span>
          <span className="breadcrumb-current">Contact</span>
        </div>

        {/* Page Header */}
        <div className="page-header">
          <div className="section-eyebrow">
            <Mail size={14} />
            <span>CONTACT</span>
          </div>
          <h1 className="page-title">Contact</h1>
          <p className="page-subtitle">
            Email is best. I usually reply within a day or two.
          </p>

          <div className="page-header-meta">
            <div className="header-meta-item">
              <span className="meta-label">EMAIL</span>
              <span className="meta-val">adityasahoo@ibm.com</span>
            </div>
          </div>
        </div>

        {/* Contact Section Component */}
        <div className="dedicated-component-wrapper">
          <ContactSection onOpenResume={onOpenResume} />
        </div>

        {/* Next Route Navigation Bar */}
        <div className="page-nav-footer glass-panel">
          <div className="page-nav-col">
            <span className="nav-sub">Previous</span>
            <Link to="/credentials" className="nav-title-link">
              <ArrowLeft size={16} />
              <span>Skills</span>
            </Link>
          </div>
          <div className="page-nav-col text-right">
            <span className="nav-sub">Return</span>
            <Link to="/" className="nav-title-link">
              <span>Home</span>
              <Home size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
