import React from 'react';
import { Link } from 'react-router-dom';
import { personalInfo } from '../data/portfolioData';
import { 
  ArrowRight, 
  ShieldCheck, 
  Database, 
  Sparkles, 
  Cloud, 
  Activity,
  Cpu
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
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
          I'm Aditya. I work on <br />
          <span className="gradient-text">data pipelines</span> that stay up.
        </h1>

        {/* Subtitle / Narrative */}
        <p className="hero-summary">
          I'm a Data Engineer at IBM, currently supporting PMI's data platform.
          I work with Matillion, Snowflake, Databricks, and AWS — mostly pipeline support,
          incident triage, and small fixes that prevent repeats.
        </p>

        {/* Action Buttons */}
        <div className="hero-actions">
          <Link to="/pipeline" className="btn btn-primary">
            <span>See pipeline examples</span>
            <ArrowRight size={16} />
          </Link>
          <Link to="/experience" className="btn btn-secondary">
            <Activity size={16} />
            <span>Work history</span>
          </Link>
          <button onClick={onOpenResume} className="btn btn-outline-cyan">
            <span>View CV</span>
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
          <span className="tech-strip-title">I USE:</span>
          <div className="tech-pills">
            <span className="tech-pill"><Cloud size={13} /> AWS</span>
            <span className="tech-pill"><Database size={13} /> Matillion</span>
            <span className="tech-pill"><Database size={13} /> Snowflake</span>
            <span className="tech-pill"><Cpu size={13} /> Databricks</span>
            <span className="tech-pill"><Sparkles size={13} /> watsonx</span>
            <span className="tech-pill"><ShieldCheck size={13} /> L2 support</span>
          </div>
        </div>
      </div>
    </section>
  );
}
