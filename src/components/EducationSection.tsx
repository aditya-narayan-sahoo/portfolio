import { education } from '../data/portfolioData';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export default function EducationSection() {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={14} />
            <span>School</span>
          </div>
          <h2 className="section-title">Education</h2>
        </div>

        <div className="education-grid">
          {education.map((edu, idx) => (
            <div key={idx} className="edu-card glass-panel">
              <div className="edu-card-top">
                <div className="edu-meta-badge">
                  <Calendar size={13} />
                  <span>{edu.year}</span>
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
