import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { personalInfo } from '../data/portfolioData';
import { 
  ArrowRight, 
  Database, 
  Sparkles, 
  Cloud, 
  Activity,
  Cpu,
  Settings,
  Building,
  Mail,
  Copy,
  Check
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section className="hero-section">
      <div className="container">
        {/* Top Badges & Status */}
        <div className="hero-meta">
          <div className="hero-badge">
            <span className="badge-glow"></span>
            <span className="badge-text">DevOps &amp; SRE • Cloud Automation</span>
          </div>

          <div className="hero-status-pill">
            <span className="status-dot-pulse"></span>
            <span>Available for DevOps &amp; SRE Roles</span>
          </div>

          <div className="hero-subbadge">
            <span>IBM India • Client Assignment: Philip Morris International</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="hero-headline">
          I'm Aditya. I automate <br />
          <span className="gradient-text">DevOps &amp; cloud</span> platforms.
        </h1>

        {/* Subtitle / Narrative */}
        <p className="hero-summary">
          Transitioning into DevOps and Site Reliability Engineering (SRE) with Terraform Enterprise
          and Ansible AWX. Building on hands-on experience operating AWS, Matillion, Snowflake, and
          Databricks—focused on Infrastructure as Code, configuration automation, and resilient production systems.
        </p>

        {/* Action Buttons */}
        <div className="hero-actions">
          <Link to="/pipeline" className="btn btn-primary">
            <span>Explore architecture &amp; SRE</span>
            <ArrowRight size={16} />
          </Link>
          <Link to="/experience" className="btn btn-secondary">
            <Activity size={16} />
            <span>Work history</span>
          </Link>
          <button onClick={onOpenResume} className="btn btn-outline-cyan">
            <span>View CV</span>
          </button>
          <button 
            onClick={handleCopyEmail} 
            className="btn btn-secondary btn-hero-copy"
            title="Copy email to clipboard"
          >
            {copiedEmail ? (
              <>
                <Check size={14} className="text-emerald" />
                <span>Copied email!</span>
              </>
            ) : (
              <>
                <Copy size={14} />
                <span>{personalInfo.email}</span>
              </>
            )}
          </button>
        </div>

        {/* KPI Metrics Dashboard Grid */}
        <div className="hero-metrics-grid">
          {personalInfo.metrics.map((metric, idx) => (
            <div key={idx} className="metric-card glass-panel">
              <div className="metric-value">{metric.value}</div>
              <div className="metric-label">{metric.label}</div>
              <div className="metric-desc">{metric.description}</div>
            </div>
          ))}
        </div>

        {/* Quick Tech Highlights Bar */}
        <div className="hero-tech-strip">
          <span className="tech-strip-title">CORE STACK:</span>
          <div className="tech-pills">
            <span className="tech-pill tech-pill-highlight"><Settings size={13} /> Ansible AWX</span>
            <span className="tech-pill tech-pill-highlight"><Building size={13} /> Terraform Enterprise</span>
            <span className="tech-pill"><Cloud size={13} /> AWS</span>
            <span className="tech-pill"><Database size={13} /> Matillion</span>
            <span className="tech-pill"><Database size={13} /> Snowflake</span>
            <span className="tech-pill"><Cpu size={13} /> Databricks</span>
            <span className="tech-pill"><Sparkles size={13} /> Claude Code</span>
            <span className="tech-pill"><Sparkles size={13} /> watsonx</span>
          </div>
        </div>
      </div>
    </section>
  );
}
