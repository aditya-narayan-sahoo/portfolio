import React from 'react';
import { Link } from 'react-router-dom';
import { personalInfo } from '../data/portfolioData';
import { 
  ArrowRight, 
  Terminal, 
  ShieldCheck, 
  Database, 
  Sparkles, 
  Cloud, 
  Activity,
  Cpu
} from 'lucide-react';

export default function Hero({ onOpenResume }) {
  return (
    <section className="hero-section">
      <div className="container">
        {/* Top Badges */}
        <div className="hero-meta">
          <div className="hero-badge">
            <span className="badge-glow"></span>
            <span className="badge-text">IBM India • Applied AI Specialist</span>
          </div>
          <div className="hero-subbadge">
            <span>Assignment: Philip Morris International</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="hero-headline">
          Engineering Resilient <br />
          <span className="gradient-text">Cloud Data Platforms</span> & <br />
          AI-First Operations.
        </h1>

        {/* Subtitle / Narrative */}
        <p className="hero-summary">
          Specializing in enterprise data engineering platforms, high-throughput pipeline orchestration, 
          and mission-critical L2 production operations across <span className="highlight-tag">Matillion ETL</span>, 
          <span className="highlight-tag">Snowflake</span>, <span className="highlight-tag">Databricks</span>, and 
          <span className="highlight-tag">AWS</span>. Applying AI-first paradigms and full-stack software reliability 
          to support global market operations with 99.9%+ availability.
        </p>

        {/* Action Buttons */}
        <div className="hero-actions">
          <Link to="/pipeline" className="btn btn-primary">
            <span>Explore Pipeline Visualizer</span>
            <ArrowRight size={16} />
          </Link>
          <Link to="/experience" className="btn btn-secondary">
            <Activity size={16} />
            <span>Enterprise Experience</span>
          </Link>
          <button onClick={onOpenResume} className="btn btn-outline-cyan">
            <span>View Full CV</span>
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
          <span className="tech-strip-title">CORE PLATFORMS & RUNTIMES:</span>
          <div className="tech-pills">
            <span className="tech-pill"><Cloud size={13} /> AWS Cloud</span>
            <span className="tech-pill"><Database size={13} /> Matillion ETL & Maia</span>
            <span className="tech-pill"><Database size={13} /> Snowflake DWH</span>
            <span className="tech-pill"><Cpu size={13} /> Databricks Lakehouse</span>
            <span className="tech-pill"><Sparkles size={13} /> IBM watsonx / GenAI</span>
            <span className="tech-pill"><ShieldCheck size={13} /> L2 Incident Management</span>
          </div>
        </div>
      </div>
    </section>
  );
}
