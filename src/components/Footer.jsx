import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Terminal, Shield, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-container">
      <div className="container">
        <div className="footer-top-row">
          <div className="footer-brand">
            <div className="brand-avatar">
              <span className="brand-code">&gt;_</span>
            </div>
            <div>
              <span className="footer-brand-name">{personalInfo.name}</span>
              <p className="footer-brand-title">{personalInfo.title}</p>
            </div>
          </div>

          <div className="footer-status-box">
            <div className="status-pill">
              <span className="status-dot"></span>
              <span>All Cloud Systems Operational (99.98% SLA)</span>
            </div>
            <button 
              onClick={scrollToTop} 
              className="btn-back-to-top"
              aria-label="Back to top"
              title="Return to top of page"
            >
              <ArrowUp size={16} />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom-row">
          <div className="footer-copy">
            <span>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</span>
            <span className="footer-subcopy">Built with modern React, pure CSS, and cloud platform precision.</span>
          </div>

          <div className="footer-tags">
            <span className="footer-tag">Matillion ETL</span>
            <span className="footer-tag">Snowflake</span>
            <span className="footer-tag">Databricks</span>
            <span className="footer-tag">AWS Cloud</span>
            <span className="footer-tag">IBM watsonx</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
