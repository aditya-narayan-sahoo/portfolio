import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { personalInfo, experiences, credentials } from '../data/portfolioData';
import { 
  ArrowRight, 
  Layers, 
  Briefcase, 
  Award, 
  Mail, 
  CheckCircle2, 
  Cpu, 
  ShieldCheck, 
  ChevronRight,
  Database,
  Sparkles,
  TrendingUp,
  ExternalLink,
  Zap
} from 'lucide-react';

export default function HomePage({ onOpenResume }) {
  const portalCards = [
    {
      id: 'pipeline',
      tag: 'Flagship Architecture',
      icon: Layers,
      color: 'text-cyan',
      title: 'Multi-Cloud Data Pipeline & RCA Simulator',
      description: 'Interactive node-by-node pipeline inspector demonstrating Matillion ETL, AWS S3, Snowflake DWH, and Databricks Lakehouse flows with an incident triage simulator.',
      metrics: ['12 TB+ Daily Ingestion', '99.98% SLA Availability', 'Automated RCA'],
      link: '/pipeline',
      cta: 'Launch Architecture Visualizer'
    },
    {
      id: 'experience',
      tag: 'Enterprise Journey',
      icon: Briefcase,
      color: 'text-blue',
      title: 'Enterprise Experience & Seniority Velocity',
      description: 'Track record as Applied AI Specialist at IBM India and enterprise client lead for Philip Morris International, driving reliability and 35% MTTR reduction.',
      metrics: ['IBM Applied AI Specialist', 'Philip Morris Intl Lead', 'B.Tech Honors'],
      link: '/experience',
      cta: 'Explore Career Journey & Education'
    },
    {
      id: 'credentials',
      tag: 'Accreditations',
      icon: Award,
      color: 'text-purple',
      title: 'Technical Proficiencies & Certified Badges',
      description: 'Certified in Databricks, AWS, Matillion ETL, and Snowflake, backed by hands-on proficiencies in enterprise orchestration, Python, SQL, and watsonx GenAI.',
      metrics: ['Databricks Certified', 'AWS & Snowflake', 'GenAI Foundations'],
      link: '/credentials',
      cta: 'Browse Skills & Certifications'
    },
    {
      id: 'contact',
      tag: 'Communication Portal',
      icon: Mail,
      color: 'text-emerald',
      title: 'Direct Collaboration & Contact Suite',
      description: 'Reach out directly for enterprise cloud engineering initiatives, Applied AI workflows, or access a printable ATS-friendly resume.',
      metrics: ['adityasahoo@ibm.com', '< 24h Response Time', 'Printable CV'],
      link: '/contact',
      cta: 'Open Contact Portal'
    }
  ];

  return (
    <div className="page-transition">
      {/* 1. Hero Header */}
      <Hero onOpenResume={onOpenResume} />

      <div className="container">
        {/* Executive Dashboard Section */}
        <section className="dashboard-section">
          <div className="section-header">
            <div className="section-eyebrow">
              <Zap size={14} />
              <span>EXECUTIVE PORTFOLIO DASHBOARD</span>
            </div>
            <h2 className="section-title">Explore Dedicated Practice Areas</h2>
            <p className="section-subtitle">
              Select any practice area below to launch its dedicated deep-dive page, live telemetry visualizers, 
              and verified credential matrices.
            </p>
          </div>

          <div className="dashboard-portal-grid">
            {portalCards.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.id} className="portal-card glass-panel">
                  <div className="portal-card-top">
                    <div className="portal-tag-group">
                      <span className={`portal-icon ${card.color}`}>
                        <Icon size={20} />
                      </span>
                      <span className="portal-tag">{card.tag}</span>
                    </div>
                  </div>

                  <h3 className="portal-title">{card.title}</h3>
                  <p className="portal-desc">{card.description}</p>

                  <div className="portal-metrics-pills">
                    {card.metrics.map((m, mIdx) => (
                      <span key={mIdx} className="portal-pill">
                        <CheckCircle2 size={12} className="text-cyan" />
                        <span>{m}</span>
                      </span>
                    ))}
                  </div>

                  <div className="portal-card-footer">
                    <Link to={card.link} className="btn btn-primary btn-full portal-cta-btn">
                      <span>{card.cta}</span>
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Fast Action Collaboration Strip */}
        <section className="home-teaser-section mb-6">
          <div className="home-cta-card glass-panel">
            <div>
              <h3 className="cta-heading">Ready to discuss platform engineering or AI workflows?</h3>
              <p className="cta-sub">
                Connect directly via IBM internal email or review the full printable resume.
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
