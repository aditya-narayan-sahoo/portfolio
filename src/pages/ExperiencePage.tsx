import React from 'react';
import { Link } from 'react-router-dom';
import ExperienceSection from '../components/ExperienceSection';
import EducationSection from '../components/EducationSection';
import { Briefcase, ArrowLeft, ArrowRight } from 'lucide-react';

export default function ExperiencePage() {
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
          <span className="breadcrumb-current">Enterprise Experience</span>
        </div>

        {/* Page Header */}
        <div className="page-header">
          <div className="section-eyebrow">
            <Briefcase size={14} />
            <span>WORK</span>
          </div>
          <h1 className="page-title">Work and school</h1>
          <p className="page-subtitle">
            IBM roles and client work for PMI, plus education.
          </p>

          <div className="page-header-meta">
            <div className="header-meta-item">
              <span className="meta-label">NOW</span>
              <span className="meta-val">Applied AI Specialist, IBM India</span>
            </div>
            <div className="header-meta-item">
              <span className="meta-label">CLIENT</span>
              <span className="meta-val">Philip Morris International</span>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="dedicated-component-wrapper">
          <ExperienceSection />
        </div>

        {/* Education Section */}
        <div className="dedicated-component-wrapper mt-6">
          <EducationSection />
        </div>

        {/* Next Route Navigation Bar */}
        <div className="page-nav-footer glass-panel">
          <div className="page-nav-col">
            <span className="nav-sub">Previous</span>
            <Link to="/pipeline" className="nav-title-link">
              <ArrowLeft size={16} />
              <span>Pipeline</span>
            </Link>
          </div>
          <div className="page-nav-col text-right">
            <span className="nav-sub">Next</span>
            <Link to="/credentials" className="nav-title-link">
              <span>Skills</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
