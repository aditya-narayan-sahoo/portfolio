import { Link } from 'react-router-dom';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-container">
      <div className="container">
        <div className="footer-top-row">
          <div className="footer-brand">
            <div className="brand-monogram">
              <span>AS</span>
            </div>
            <div>
              <span className="footer-brand-name">{personalInfo.name}</span>
              <p className="footer-brand-title">{personalInfo.title}</p>
            </div>
          </div>

          <div className="footer-nav-links">
            <Link to="/" className="footer-nav-link">Home</Link>
            <Link to="/pipeline" className="footer-nav-link">Pipeline</Link>
            <Link to="/experience" className="footer-nav-link">Work</Link>
            <Link to="/credentials" className="footer-nav-link">Skills</Link>
            <Link to="/contact" className="footer-nav-link">Contact</Link>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="footer-nav-link">LinkedIn ↗</a>
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="footer-nav-link">GitHub ↗</a>
          </div>

          <div className="footer-status-box">
            <span className="footer-tag">{personalInfo.email}</span>
            <button 
              onClick={scrollToTop} 
              className="btn-back-to-top"
              aria-label="Back to top"
              title="Return to top of page"
            >
              <ArrowUp size={16} />
              <span>Top</span>
            </button>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom-row">
          <div className="footer-copy">
            <span>© {new Date().getFullYear()} {personalInfo.name}.</span>
          </div>

          <div className="footer-tags">
            <span className="footer-tag">Matillion</span>
            <span className="footer-tag">Snowflake</span>
            <span className="footer-tag">Databricks</span>
            <span className="footer-tag">AWS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
