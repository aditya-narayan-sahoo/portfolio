import { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import {
  Mail,
  Copy,
  Check,
  MapPin,
  FileText,
  ArrowUpRight
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

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Mail size={14} />
            <span>Contact</span>
          </div>
          <h2 className="section-title">Email is best</h2>
          <p className="section-subtitle">
            I read everything. Short messages with context get the fastest reply.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info-card glass-panel">
            <div className="contact-email-box">
              <div className="email-box-meta">
                <span className="email-label">Email</span>
                <a className="email-address" href={`mailto:${personalInfo.email}`}>
                  {personalInfo.email}
                </a>
              </div>
              <button
                onClick={handleCopyEmail}
                className="btn btn-outline-cyan btn-sm btn-copy"
                title="Copy email"
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

            <div className="contact-privacy-meta">
              <div className="privacy-item">
                <MapPin size={16} className="text-cyan" />
                <div>
                  <strong>{personalInfo.location}</strong>
                  <span>Open to remote</span>
                </div>
              </div>
            </div>

            <div className="contact-links-block">
              <span className="links-title">Elsewhere</span>
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
                  <span>CV (PDF)</span>
                </button>
              </div>
            </div>

            <div style={{ marginTop: '1.5rem' }}>
              <a
                href={`mailto:${personalInfo.email}?subject=Hello Aditya`}
                className="btn btn-primary btn-submit"
              >
                <Mail size={15} />
                <span>Write email</span>
              </a>
            </div>
          </div>

          <div className="contact-form-card glass-panel">
            <h3 className="form-title">What to include</h3>
            <ul className="cv-list">
              <li>Who you are and what role or project this is about.</li>
              <li>Stack and timeline, if hiring.</li>
              <li>One link: job post, repo, or doc.</li>
            </ul>
            <p className="edu-details" style={{ marginTop: '1rem' }}>
              No form here on purpose — email avoids spam folders and fake success
              messages. You'll reach me directly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
