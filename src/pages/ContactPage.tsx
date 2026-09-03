import React from 'react';
import { Link } from 'react-router-dom';
import ContactSection from '../components/ContactSection';
import { Mail, ArrowLeft, Home, FileText, CheckCircle2 } from 'lucide-react';

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
            <span>Back to Overview</span>
          </Link>
          <span className="breadcrumb-sep">/</span>
          <span className="breadcrumb-current">Contact & Communications</span>
        </div>

        {/* Page Header */}
        <div className="page-header">
          <div className="section-eyebrow">
            <Mail size={14} />
            <span>GET IN TOUCH</span>
          </div>
          <h1 className="page-title">Direct Communication & Collaboration</h1>
          <p className="page-subtitle">
            Connect directly for enterprise cloud data engineering initiatives, Applied AI platform workflows, 
            or production reliability reviews.
          </p>

          <div className="page-header-meta">
            <div className="header-meta-item">
              <span className="meta-label">PRIMARY INBOX</span>
              <span className="meta-val">adityasahoo@ibm.com</span>
            </div>
            <div className="header-meta-item">
              <span className="meta-label">RESPONSE TIME</span>
              <span className="meta-val">Typically within 24 business hours</span>
            </div>
            <div className="header-meta-item">
              <span className="meta-label">RESUME ACCESS</span>
              <span className="meta-val">Printable ATS-Friendly CV Available</span>
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
            <span className="nav-sub">Previous Section</span>
            <Link to="/credentials" className="nav-title-link">
              <ArrowLeft size={16} />
              <span>Skills & Credentials</span>
            </Link>
          </div>
          <div className="page-nav-col text-right">
            <span className="nav-sub">Return Home</span>
            <Link to="/" className="nav-title-link">
              <span>Overview & Hero</span>
              <Home size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
