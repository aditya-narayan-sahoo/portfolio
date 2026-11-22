import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import {
  Mail,
  Copy,
  Check,
  MapPin,
  FileText,
  ArrowUpRight,
  Clock,
  Sparkles,
  Send
} from 'lucide-react';

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28Z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"/>
  </svg>
);

interface ContactSectionProps {
  onOpenResume?: () => void;
}

export default function ContactSection({ onOpenResume }: ContactSectionProps) {
  const [copied, setCopied] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string>('DevOps / SRE Opportunity');

  const topics = [
    'DevOps / SRE Opportunity',
    'IaC & AWX Automation',
    'Cloud Data & Reliability',
    'General Consultation'
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const mailtoHref = `mailto:${personalInfo.email}?subject=${encodeURIComponent(`[Contact] ${selectedTopic} - via Portfolio`)}`;

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Mail size={14} />
            <span>Contact</span>
          </div>
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            Open to DevOps &amp; Site Reliability Engineering opportunities, infrastructure automation initiatives, and platform discussions.
          </p>
        </div>

        <div className="contact-grid">
          {/* Main Direct Contact Card */}
          <div className="contact-info-card glass-panel">
            <div className="contact-email-box">
              <div className="email-box-meta">
                <span className="email-label">PRIMARY INBOX</span>
                <a className="email-address" href={mailtoHref}>
                  {personalInfo.email}
                </a>
              </div>
              <button
                onClick={handleCopyEmail}
                className="btn btn-outline-cyan btn-sm btn-copy"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check size={14} className="text-emerald" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick Topic Selector */}
            <div className="contact-topic-selector">
              <span className="topic-selector-label">Quick Subject Preset:</span>
              <div className="topic-chips">
                {topics.map(topic => (
                  <button
                    key={topic}
                    onClick={() => setSelectedTopic(topic)}
                    className={`topic-chip ${selectedTopic === topic ? 'active' : ''}`}
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>

            <div className="contact-privacy-meta">
              <div className="privacy-item">
                <MapPin size={16} className="text-cyan" />
                <div>
                  <strong>{personalInfo.location}</strong>
                  <span>Open to remote &amp; hybrid roles</span>
                </div>
              </div>
              <div className="privacy-item">
                <Clock size={16} className="text-emerald" />
                <div>
                  <strong>Fast turnaround</strong>
                  <span>Usually responds within 24 hours</span>
                </div>
              </div>
            </div>

            <div className="contact-links-block">
              <span className="links-title">Professional Profiles</span>
              <div className="links-row">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn glass-panel"
                >
                  <LinkedInIcon />
                  <span>LinkedIn</span>
                  <ArrowUpRight size={13} className="link-arrow" />
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn glass-panel"
                >
                  <GitHubIcon />
                  <span>GitHub</span>
                  <ArrowUpRight size={13} className="link-arrow" />
                </a>

                <button
                  onClick={onOpenResume}
                  className="social-btn glass-panel btn-cv-trigger"
                >
                  <FileText size={16} />
                  <span>Curriculum Vitae</span>
                </button>
              </div>
            </div>

            <div style={{ marginTop: '1.75rem' }}>
              <a
                href={mailtoHref}
                className="btn btn-primary btn-submit btn-full"
              >
                <Send size={15} />
                <span>Launch Email ({selectedTopic})</span>
              </a>
            </div>
          </div>

          {/* Context & What to Include Card */}
          <div className="contact-form-card glass-panel">
            <div className="form-card-badge">
              <Sparkles size={14} className="text-cyan" />
              <span>COMMUNICATION GUIDE</span>
            </div>
            <h3 className="form-title">What helps in your message</h3>
            <ul className="cv-list">
              <li>
                <strong>Role &amp; Team context:</strong> Target title (DevOps, SRE, Platform Engineer), team mission, and organization.
              </li>
              <li>
                <strong>Tech Stack:</strong> Primary tools used (Terraform, Ansible, AWS, Kubernetes, CI/CD, Data platforms).
              </li>
              <li>
                <strong>Arrangement &amp; Timeline:</strong> Location, remote flexibility, and hiring schedule.
              </li>
              <li>
                <strong>Verification Links:</strong> Happy to supply credential verification badges and GitHub references upon request.
              </li>
            </ul>

            <div className="contact-guarantee-box">
              <p className="edu-details">
                Direct email communication ensures zero third-party spam filtering or contact form drop-offs.
                Every genuine inquiry receives a thoughtful, direct response.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
