import { useState } from 'react';
import { experiences } from '../data/portfolioData';
import {
  Briefcase,
  Building2,
  Calendar,
  MapPin,
  ChevronDown,
  ChevronUp,
  CheckCircle2
} from 'lucide-react';

export default function ExperienceSection() {
  const [expandedIndices, setExpandedIndices] = useState<Record<number, boolean>>({ 0: true, 1: true });

  const toggleIndex = (index: number) => {
    setExpandedIndices(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} />
            <span>Work</span>
          </div>
          <h2 className="section-title">Work history</h2>
          <p className="section-subtitle">
            From intern to data engineer. Most recent first.
          </p>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => {
            const isExpanded = !!expandedIndices[index];
            const isFeatured = exp.type === 'Client work';

            return (
              <div
                key={index}
                className={`experience-card glass-panel ${isFeatured ? 'featured-card' : ''}`}
              >
                <div className="exp-card-header" onClick={() => toggleIndex(index)}>
                  <div className="exp-title-block">
                    <div className="exp-badges-row">
                      <span className={`exp-badge ${isFeatured ? 'badge-featured' : 'badge-role'}`}>
                        {exp.badge}
                      </span>
                      <span className="exp-type-tag">{exp.type}</span>
                    </div>

                    <h3 className="exp-role">{exp.role}</h3>

                    <div className="exp-meta-items">
                      <span className="exp-meta-item">
                        <Building2 size={14} />
                        <strong>{exp.company}</strong>
                      </span>
                      <span className="exp-meta-item">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </span>
                      <span className="exp-meta-item">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </span>
                    </div>
                  </div>

                  <button
                    className="btn-toggle-expand"
                    aria-label="Toggle details"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleIndex(index);
                    }}
                  >
                    {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                </div>

                <p className="exp-summary">{exp.summary}</p>

                {isExpanded && (
                  <div className="exp-expanded-content">
                    <div className="exp-bullets">
                      {exp.bullets.map((bullet, bIdx) => (
                        <div key={bIdx} className="exp-bullet-item">
                          <CheckCircle2 size={15} className="bullet-icon text-cyan" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>

                    <div className="exp-skills-row">
                      <span className="exp-skills-label">Tools:</span>
                      <div className="exp-tags">
                        {exp.skills?.map((skill, sIdx) => (
                          <span key={sIdx} className="skill-pill-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
