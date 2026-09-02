import React from 'react';
import { Link } from 'react-router-dom';
import SkillsSection from '../components/SkillsSection';
import CredentialsSection from '../components/CredentialsSection';
import { Award, ArrowLeft, ArrowRight, Cpu, ShieldCheck } from 'lucide-react';

export default function CredentialsPage() {
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
          <span className="breadcrumb-current">Skills & Credentials</span>
        </div>

        {/* Page Header */}
        <div className="page-header">
          <div className="section-eyebrow">
            <Award size={14} />
            <span>VERIFIED CAPABILITIES & CERTIFICATIONS</span>
          </div>
          <h1 className="page-title">Technical Proficiencies & Industry Certifications</h1>
          <p className="page-subtitle">
            Comprehensive skill matrix spanning cloud data infrastructure, data warehousing, AI/ML engineering, 
            and operational observability, backed by recognized vendor certifications.
          </p>

          <div className="page-header-meta">
            <div className="header-meta-item">
              <span className="meta-label">CERTIFIED BY</span>
              <span className="meta-val">Databricks • AWS • Matillion • Snowflake</span>
            </div>
            <div className="header-meta-item">
              <span className="meta-label">CORE FOCUS</span>
              <span className="meta-val">Lakehouse, DWH & Applied GenAI</span>
            </div>
          </div>
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
            <span className="nav-sub">Previous Section</span>
            <Link to="/experience" className="nav-title-link">
              <ArrowLeft size={16} />
              <span>Enterprise Experience</span>
            </Link>
          </div>
          <div className="page-nav-col text-right">
            <span className="nav-sub">Next Section</span>
            <Link to="/contact" className="nav-title-link">
              <span>Contact & Connect</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
