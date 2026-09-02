import React from 'react';
import { education } from '../data/portfolioData';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';

export default function EducationSection() {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={14} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">Education & Foundation</h2>
          <p className="section-subtitle">
            Strong computer science foundation covering algorithms, distributed systems, 
            cloud architecture, and analytical engineering.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="education-grid">
          {education.map((edu, idx) => (
            <div key={idx} className="edu-card glass-panel">
              <div className="edu-card-top">
                <div className="edu-icon-badge">
                  <BookOpen size={20} className="text-cyan" />
                </div>
                <div className="edu-meta-badge">
                  <Calendar size={13} />
                  <span>Class of {edu.year}</span>
                </div>
              </div>

              <h3 className="edu-degree">{edu.degree}</h3>
              <h4 className="edu-institution">{edu.institution}</h4>

              <div className="edu-location">
                <MapPin size={14} />
                <span>{edu.location}</span>
              </div>

              <p className="edu-details">{edu.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
