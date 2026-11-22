import React, { useState } from 'react';
import { experiences } from '../data/portfolioData';
import {
  Briefcase,
  Building2,
  Calendar,
  MapPin,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Sparkles,
  Layers
} from 'lucide-react';

export default function ExperienceSection() {
  const [expandedIndices, setExpandedIndices] = useState<Record<number, boolean>>({ 0: true, 1: true });

  const toggleIndex = (index: number) => {
    setExpandedIndices(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const allExpanded = experiences.every((_, idx) => !!expandedIndices[idx]);

  const toggleAll = () => {
    if (allExpanded) {
      setExpandedIndices({});
    } else {
      const all: Record<number, boolean> = {};
      experiences.forEach((_, idx) => {
        all[idx] = true;
      });
      setExpandedIndices(all);
    }
  };

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-row">
          <div className="section-header">
            <div className="section-tag">
              <Briefcase size={14} />
              <span>Work</span>
            </div>
            <h2 className="section-title">Work Experience</h2>
            <p className="section-subtitle">
              From associate systems engineer to cloud data, DevOps &amp; SRE automation. Most recent first.
            </p>
          </div>

          <div className="section-header-action">
            <button 
              onClick={toggleAll}
              className="btn btn-secondary btn-sm"
              title={allExpanded ? "Collapse all positions" : "Expand all positions"}
            >
              <Layers size={14} />
              <span>{allExpanded ? 'Collapse All' : 'Expand All'}</span>
            </button>
          </div>
        </div>

        {/* Timeline */}
        <div className="experience-timeline">
          {experiences.map((exp, index) => {
            const isExpanded = !!expandedIndices[index];
            const isCurrent = exp.badge === 'Current';

            return (
              <div
                key={index}
                className={`experience-card glass-panel ${isCurrent ? 'featured-card active-role-card' : ''}`}
              >
                <div className="exp-card-header" onClick={() => toggleIndex(index)}>
                  <div className="exp-title-block">
                    <div className="exp-badges-row">
                      {isCurrent ? (
                        <span className="exp-badge badge-current-active">
                          <span className="current-pulse-dot"></span>
                          <span>Active Role • {exp.badge}</span>
                        </span>
                      ) : (
                        <span className="exp-badge badge-role">
                          {exp.badge}
                        </span>
                      )}
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
                      <span className="exp-skills-label">Core stack:</span>
                      <div className="exp-tags">
                        {exp.skills?.map((skill, sIdx) => {
                          const isHighlighted = skill.includes('AWX') || skill.includes('Terraform') || skill.includes('DevOps') || skill.includes('SRE');
                          return (
                            <span 
                              key={sIdx} 
                              className={`skill-pill-sm ${isHighlighted ? 'skill-pill-featured' : ''}`}
                            >
                              {skill}
                            </span>
                          );
                        })}
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
