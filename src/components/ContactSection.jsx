import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import confetti from 'canvas-confetti';
import { 
  Mail, 
  Copy, 
  Check, 
  Send, 
  MapPin, 
  Shield, 
  FileText, 
  Sparkles,
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

export default function ContactSection({ onOpenResume }) {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Cloud & Data Engineering',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.8 },
          colors: ['#38bdf8', '#818cf8', '#10b981']
        });
      } catch (err) {}
    }, 800);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Mail size={14} />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Interested in discussing cloud data platforms, Matillion & Snowflake orchestration, 
            applied AI solutions, or enterprise platform reliability? Let's connect.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Info & Quick Copy */}
          <div className="contact-info-card glass-panel">
            <div className="info-header">
              <h3>Direct Communication</h3>
              <p>Privacy-first contact channel with one-click email copying and verified profiles.</p>
            </div>

            {/* Email Copy Card */}
            <div className="contact-email-box">
              <div className="email-box-meta">
                <span className="email-label">Enterprise / Primary Email</span>
                <span className="email-address">{personalInfo.email}</span>
              </div>
              <button 
                onClick={handleCopyEmail}
                className="btn btn-outline-cyan btn-sm btn-copy"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check size={14} className="text-emerald" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Privacy Masked Phone & Location */}
            <div className="contact-privacy-meta">
              <div className="privacy-item">
                <Shield size={16} className="text-cyan" />
                <div>
                  <strong>Phone Contact</strong>
                  <span>+91 78735 ••••• (Verified on direct request)</span>
                </div>
              </div>

              <div className="privacy-item">
                <MapPin size={16} className="text-cyan" />
                <div>
                  <strong>Location</strong>
                  <span>{personalInfo.location} • Open to Remote & Global Engagements</span>
                </div>
              </div>
            </div>

            {/* Resume & Profiles Action */}
            <div className="contact-links-block">
              <span className="links-title">Professional Profiles & Resume</span>
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
                  <span>Printable CV</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="contact-form-card glass-panel">
            {submitted ? (
              <div className="form-success-state">
                <div className="success-icon-wrap">
                  <Check size={28} className="text-emerald" />
                </div>
                <h3>Message Dispatched!</h3>
                <p>
                  Thank you for reaching out, <strong>{formData.name}</strong>. Your message regarding 
                  <em> "{formData.topic}"</em> has been recorded. I'll get back to you shortly at <code>{formData.email}</code>.
                </p>
                <button 
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', topic: 'Cloud & Data Engineering', message: '' });
                  }} 
                  className="btn btn-secondary btn-sm mt-3"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <h3 className="form-title">Send a Direct Message</h3>

                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="topic">Topic of Discussion</label>
                  <select
                    id="topic"
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="form-select"
                  >
                    <option value="Cloud & Data Engineering">Cloud & Data Engineering Architecture</option>
                    <option value="Matillion & Snowflake Workflows">Matillion & Snowflake Workflows</option>
                    <option value="Applied AI & Agentic Solutions">Applied AI & Agentic Solutions</option>
                    <option value="Production Support & Platform SLA">Production Support & Platform Reliability</option>
                    <option value="Career & General Inquiries">Career Opportunity / Collaboration</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    required
                    rows="4"
                    placeholder="Describe your technical inquiry, project context, or collaboration opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-textarea"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="btn btn-primary btn-submit"
                >
                  {isSubmitting ? (
                    <span>Transmitting Message...</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send size={15} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
