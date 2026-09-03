import React from 'react';
import { Link } from 'react-router-dom';
import ExperienceSection from '../components/ExperienceSection';
import EducationSection from '../components/EducationSection';
import { Briefcase, ArrowLeft, ArrowRight, Activity, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function ExperiencePage() {
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
          <span className="breadcrumb-current">Enterprise Experience</span>
        </div>

        {/* Page Header */}
        <div className="page-header">
          <div className="section-eyebrow">
            <Briefcase size={14} />
            <span>PROFESSIONAL TRACK RECORD</span>
          </div>
          <h1 className="page-title">Enterprise Experience & Global Engagements</h1>
          <p className="page-subtitle">
            Reliability engineering, cloud orchestration, and applied AI workflows delivered at IBM India 
            and client assignments including Philip Morris International.
          </p>

          <div className="page-header-meta">
            <div className="header-meta-item">
              <span className="meta-label">CURRENT ROLE</span>
              <span className="meta-val">Applied AI Specialist @ IBM India</span>
            </div>
            <div className="header-meta-item">
              <span className="meta-label">KEY ENGAGEMENT</span>
              <span className="meta-val">Philip Morris International (Global)</span>
            </div>
            <div className="header-meta-item">
              <span className="meta-label">PLATFORM AVAILABILITY</span>
              <span className="meta-val">99.98% Strict SLA Compliance</span>
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
            <span className="nav-sub">Previous Section</span>
            <Link to="/pipeline" className="nav-title-link">
              <ArrowLeft size={16} />
              <span>Pipeline & Architecture</span>
            </Link>
          </div>
          <div className="page-nav-col text-right">
            <span className="nav-sub">Next Section</span>
            <Link to="/credentials" className="nav-title-link">
              <span>Skills & Credentials</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
