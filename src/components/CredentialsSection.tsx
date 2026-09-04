import { credentials } from '../data/portfolioData';
import { Award, ShieldCheck } from 'lucide-react';

export default function CredentialsSection() {
  return (
    <section id="credentials" className="section credentials-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Award size={14} />
            <span>Certs</span>
          </div>
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">
            What I've completed. Happy to share verification links on request.
          </p>
        </div>

        <div className="credentials-grid">
          {credentials.map((cred, idx) => (
            <div
              key={idx}
              className={`cred-card glass-panel ${cred.featured ? 'cred-featured' : ''}`}
            >
              <div className="cred-card-top">
                <div className="cred-issuer-tag">
                  <ShieldCheck size={14} className="text-cyan" />
                  <span>{cred.issuer}</span>
                </div>
                <span className="cred-year">{cred.year}</span>
              </div>

              <h3 className="cred-title">{cred.title}</h3>

              <div className="cred-footer">
                <span className="cred-code font-mono">{cred.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
