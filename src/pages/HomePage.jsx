import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { personalInfo, experiences, credentials } from '../data/portfolioData';
import { 
  ArrowRight, 
  Layers, 
  Activity, 
  Award, 
  Mail, 
  CheckCircle2, 
  Cpu, 
  ShieldCheck, 
  ExternalLink,
  ChevronRight,
  Database,
  Sparkles
} from 'lucide-react';

export default function HomePage({ onOpenResume }) {
  const currentRole = experiences[0];
  const previousRole = experiences[1];

  return (
    <div className="page-transition">
      {/* 1. Hero Header */}
      <Hero onOpenResume={onOpenResume} />

      <div className="container">
        {/* Section 2: Architecture & Pipeline Showcase Teaser */}
        <section className="home-teaser-section">
          <div className="section-header">
            <div className="section-eyebrow">
              <Layers size={14} />
              <span>FLAGSHIP ARCHITECTURE</span>
            </div>
            <h2 className="section-title">Multi-Cloud Data Pipeline & Incident Simulator</h2>
            <p className="section-subtitle">
              Enterprise ETL orchestration, petabyte-scale lakehouse ingestion, and live telemetry RCA simulator.
            </p>
          </div>

          <div className="teaser-card glass-panel highlight-border">
            <div className="teaser-card-body">
              <div className="teaser-badges">
                <span className="badge badge-accent">Interactive Visualizer</span>
                <span className="badge badge-blue">Snowflake & Databricks</span>
                <span className="badge badge-purple">Matillion ETL & Maia AI</span>
              </div>
              <h3 className="teaser-title">Live Pipeline Telemetry & Incident RCA Simulation</h3>
              <p className="teaser-desc">
                Explore an interactive node-by-node pipeline walkthrough showing data flows from source systems through
                AWS S3 landing zones, Matillion transformation jobs, Snowflake enterprise data warehouse, and Databricks AI analytics.
                Test our interactive Root-Cause Analysis (RCA) simulation to see live incident triage in action.
              </p>

              <div className="teaser-highlights-grid">
                <div className="mini-feature">
                  <span className="mini-icon text-cyan"><Database size={18} /></span>
                  <div>
                    <strong>Petabyte Processing</strong>
                    <p>Sub-minute batch runs across distributed clusters</p>
                  </div>
                </div>
                <div className="mini-feature">
                  <span className="mini-icon text-blue"><ShieldCheck size={18} /></span>
                  <div>
                    <strong>L2 Telemetry & RCA</strong>
                    <p>Automated root-cause diagnostics & fast recovery</p>
                  </div>
                </div>
                <div className="mini-feature">
                  <span className="mini-icon text-purple"><Sparkles size={18} /></span>
                  <div>
                    <strong>watsonx & Maia AI</strong>
                    <p>AI-assisted query tuning & automated alert routing</p>
                  </div>
                </div>
              </div>

              <div className="teaser-action-row">
                <Link to="/pipeline" className="btn btn-primary">
                  <span>Open Interactive Visualizer & Simulator</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Enterprise Experience Teaser */}
        <section className="home-teaser-section">
          <div className="section-header">
            <div className="section-eyebrow">
              <Activity size={14} />
              <span>ENTERPRISE ENGAGEMENTS</span>
            </div>
            <h2 className="section-title">Applied AI & Reliability Engineering at IBM</h2>
            <p className="section-subtitle">
              Supporting global mission-critical platforms with strict SLA adherence and incident response excellence.
            </p>
          </div>

          <div className="experience-teaser-grid">
            <div className="exp-teaser-card glass-panel">
              <div className="exp-teaser-header">
                <div>
                  <span className="role-company-badge">IBM India</span>
                  <h3 className="exp-teaser-role">{currentRole.role}</h3>
                  <span className="exp-teaser-period">{currentRole.period}</span>
                </div>
                <span className="status-pill">Active Engagement</span>
              </div>
              <p className="exp-teaser-desc">{currentRole.summary}</p>
              <ul className="exp-teaser-points">
                {currentRole.highlights.slice(0, 3).map((pt, i) => (
                  <li key={i}>
                    <CheckCircle2 size={14} className="text-cyan point-icon" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <div className="exp-teaser-footer">
                <Link to="/experience" className="link-arrow">
                  <span>View Full Experience Details</span>
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>

            <div className="exp-teaser-card glass-panel">
              <div className="exp-teaser-header">
                <div>
                  <span className="role-company-badge">Client Engagement</span>
                  <h3 className="exp-teaser-role">{previousRole.role}</h3>
                  <span className="exp-teaser-period">{previousRole.company}</span>
                </div>
                <span className="status-pill status-dim">Global Market</span>
              </div>
              <p className="exp-teaser-desc">{previousRole.summary}</p>
              <ul className="exp-teaser-points">
                {previousRole.highlights.slice(0, 3).map((pt, i) => (
                  <li key={i}>
                    <CheckCircle2 size={14} className="text-cyan point-icon" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <div className="exp-teaser-footer">
                <Link to="/experience" className="link-arrow">
                  <span>View Full Experience Details</span>
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Skills & Credentials Snapshot */}
        <section className="home-teaser-section">
          <div className="credentials-teaser-banner glass-panel">
            <div className="cred-teaser-content">
              <div className="section-eyebrow">
                <Award size={14} />
                <span>CREDENTIALS & TECH STACK</span>
              </div>
              <h3 className="cred-teaser-title">Certified In Cloud Data Architectures & Applied AI</h3>
              <p className="cred-teaser-desc">
                Holding accredited certifications in Databricks, AWS, Matillion ETL, and Snowflake, backed by deep operational competencies in enterprise orchestration and software reliability.
              </p>
              <div className="cred-teaser-badges">
                {credentials.slice(0, 4).map((cred) => (
                  <div key={cred.id} className="cred-mini-badge">
                    <span className="cred-issuer">{cred.issuer}</span>
                    <span className="cred-name">{cred.title}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <Link to="/credentials" className="btn btn-secondary">
                  <span>View All Skills & Certifications</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Fast Contact Banner */}
        <section className="home-teaser-section mb-6">
          <div className="home-cta-card glass-panel">
            <div>
              <h3 className="cta-heading">Ready to discuss platform engineering or AI workflows?</h3>
              <p className="cta-sub">
                Reach out directly via IBM internal email or through the dedicated contact suite.
              </p>
            </div>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                <Mail size={16} />
                <span>Get in Touch</span>
              </Link>
              <button onClick={onOpenResume} className="btn btn-outline-cyan">
                <span>View CV</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
