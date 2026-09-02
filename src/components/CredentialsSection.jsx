import React, { useState } from 'react';
import { credentials } from '../data/portfolioData';
import { 
  Award, 
  CheckCircle2, 
  ExternalLink, 
  ShieldCheck, 
  Sparkles, 
  Cloud, 
  Layers,
  Search
} from 'lucide-react';

export default function CredentialsSection() {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Credentials' },
    { id: 'AI', label: 'AI & Generative AI' },
    { id: 'Cloud', label: 'Cloud & Azure' },
    { id: 'Data', label: 'Matillion & Data' },
    { id: 'Enterprise', label: 'Enterprise & Red Hat' },
    { id: 'Methodology', label: 'Agile & Design Thinking' }
  ];

  const filteredCredentials = credentials.filter(cred => {
    if (filter === 'all') return true;
    return cred.category === filter;
  });

  return (
    <section id="credentials" className="section credentials-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Award size={14} />
            <span>Verified Credentials & Training</span>
          </div>
          <h2 className="section-title">Certifications & Digital Badges</h2>
          <p className="section-subtitle">
            Industry and IBM enterprise credentials in Generative AI, cloud infrastructure, 
            data engineering platforms, and agile delivery methodologies.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="cred-filter-row">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`cred-filter-btn ${filter === cat.id ? 'active' : ''}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Credentials Grid */}
        <div className="credentials-grid">
          {filteredCredentials.map((cred, idx) => {
            return (
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
                  <span className="cred-code font-mono">{cred.code}</span>
                  <span className="cred-verified">
                    <CheckCircle2 size={13} className="text-emerald" />
                    <span>Verified</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
