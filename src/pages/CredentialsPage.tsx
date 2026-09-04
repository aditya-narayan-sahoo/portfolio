import React from 'react';
import { Link } from 'react-router-dom';
import SkillsSection from '../components/SkillsSection';
import CredentialsSection from '../components/CredentialsSection';
import { Award, ArrowLeft, ArrowRight } from 'lucide-react';

export default function CredentialsPage() {
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
          <span className="breadcrumb-current">Skills</span>
        </div>

        {/* Page Header */}
        <div className="page-header">
          <div className="section-eyebrow">
            <Award size={14} />
            <span>SKILLS</span>
          </div>
          <h1 className="page-title">Skills and certs</h1>
          <p className="page-subtitle">
            Tools I use and certs I've earned.
          </p>
        </div>

        {/* Skills Section */}
        <div className="dedicated-component-wrapper">
          <SkillsSection />
        </div>

        {/* Credentials Section */}
        <div className="dedicated-component-wrapper mt-6">
          <CredentialsSection />
        </div>

        {/* Next Route Navigation Bar */}
        <div className="page-nav-footer glass-panel">
          <div className="page-nav-col">
            <span className="nav-sub">Previous</span>
            <Link to="/experience" className="nav-title-link">
              <ArrowLeft size={16} />
              <span>Work</span>
            </Link>
          </div>
          <div className="page-nav-col text-right">
            <span className="nav-sub">Next</span>
            <Link to="/contact" className="nav-title-link">
              <span>Contact</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
