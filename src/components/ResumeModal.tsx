import React from 'react';
import { personalInfo, experiences, skillCategories, credentials, education } from '../data/portfolioData';
import { X, Printer, Download, Mail, Phone, MapPin, Building2, ExternalLink } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="resume-modal-overlay" onClick={onClose}>
      <div className="resume-modal-container glass-panel" onClick={(e) => e.stopPropagation()}>
        {/* Modal Toolbar */}
        <div className="resume-modal-toolbar">
          <div className="toolbar-title">
            <span>CURRICULUM VITAE PREVIEW</span>
            <span className="toolbar-author">• {personalInfo.name}</span>
          </div>
          <div className="toolbar-actions">
            <button onClick={handlePrint} className="btn btn-primary btn-sm">
              <Printer size={14} />
              <span>Print / Save PDF</span>
            </button>
            <button onClick={onClose} className="btn-modal-close" aria-label="Close modal">
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Printable CV Paper */}
        <div className="printable-cv" id="printable-cv">
          {/* Header */}
          <header className="cv-header">
            <div>
              <h1 className="cv-name">{personalInfo.name}</h1>
              <h2 className="cv-role">{personalInfo.title}</h2>
            </div>
            <div className="cv-contact-info">
              <div><Mail size={13} /> {personalInfo.email}</div>
              <div><Phone size={13} /> {personalInfo.phone}</div>
              <div><MapPin size={13} /> {personalInfo.location}</div>
            </div>
          </header>

          {/* Profile Summary */}
          <section className="cv-section">
            <h3 className="cv-heading">Profile</h3>
            <p className="cv-text">{personalInfo.summary}</p>
          </section>

          {/* Experience */}
          <section className="cv-section">
            <h3 className="cv-heading">Work Experience & Assignments</h3>
            {experiences.map((exp, idx) => (
              <div key={idx} className="cv-exp-block">
                <div className="cv-exp-header">
                  <strong>{exp.role}</strong>
                  <span className="cv-date">{exp.period}</span>
                </div>
                <div className="cv-exp-sub">
                  <span>{exp.company}</span> | <span>{exp.location}</span>
                </div>
                <ul className="cv-list">
                  {exp.bullets.map((b, bI) => (
                    <li key={bI}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Skills */}
          <section className="cv-section">
            <h3 className="cv-heading">Technical Skills</h3>
            <div className="cv-skills-grid">
              {skillCategories.map((cat, idx) => (
                <div key={idx} className="cv-skill-group">
                  <strong>{cat.name}:</strong>
                  <span> {cat.skills.map(s => s.name).join(', ')}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Digital Credentials */}
          <section className="cv-section">
            <h3 className="cv-heading">Digital Credentials & Training</h3>
            <div className="cv-creds-list">
              {credentials.map((cred, idx) => (
                <div key={idx} className="cv-cred-line">
                  • <strong>{cred.title}</strong> — {cred.issuer}, {cred.year}
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="cv-section">
            <h3 className="cv-heading">Education</h3>
            {education.map((edu, idx) => (
              <div key={idx} className="cv-edu-item">
                <div className="cv-edu-header">
                  <strong>{edu.degree}</strong>
                  <span className="cv-date">{edu.year}</span>
                </div>
                <div>{edu.institution}, {edu.location}</div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}
