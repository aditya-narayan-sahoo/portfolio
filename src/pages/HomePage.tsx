import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { 
  ArrowRight, 
  Layers, 
  Briefcase, 
  Award, 
  Mail
} from 'lucide-react';

interface HomePageProps {
  onOpenResume: () => void;
}

export default function HomePage({ onOpenResume }: HomePageProps) {
  const portalCards = [
    {
      id: 'pipeline',
      tag: 'Pipeline',
      icon: Layers,
      color: 'text-cyan',
      title: 'Pipeline examples',
      description: 'How a typical Matillion → S3 → Snowflake → Databricks flow fits together, with three incident write-ups.',
      link: '/pipeline',
      cta: 'See examples'
    },
    {
      id: 'experience',
      tag: 'Work',
      icon: Briefcase,
      color: 'text-blue',
      title: 'Work history',
      description: 'IBM roles from associate engineer to AI specialist, plus client work for PMI.',
      link: '/experience',
      cta: 'Work history'
    },
    {
      id: 'credentials',
      tag: 'Skills',
      icon: Award,
      color: 'text-purple',
      title: 'Skills and certs',
      description: 'Tools I use and certs I hold — IBM, Azure, Matillion, Red Hat.',
      link: '/credentials',
      cta: 'Skills and certs'
    },
    {
      id: 'contact',
      tag: 'Contact',
      icon: Mail,
      color: 'text-emerald',
      title: 'Contact',
      description: 'Email is best. CV available as PDF.',
      link: '/contact',
      cta: 'Contact'
    }
  ];

  return (
    <div className="page-transition">
      {/* 1. Hero Header */}
      <Hero onOpenResume={onOpenResume} />

      <div className="container">
        <section className="dashboard-section">
          <div className="section-header">
            <h2 className="section-title">Sections</h2>
            <p className="section-subtitle">
              Four short pages. Pick one.
            </p>
          </div>

          <div className="dashboard-portal-grid">
            {portalCards.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.id} className="portal-card glass-panel">
                  <div className="portal-card-top">
                    <div className="portal-tag-group">
                      <span className={`portal-icon ${card.color}`}>
                        <Icon size={20} />
                      </span>
                      <span className="portal-tag">{card.tag}</span>
                    </div>
                  </div>

                  <h3 className="portal-title">{card.title}</h3>
                  <p className="portal-desc">{card.description}</p>

                  <div className="portal-card-footer">
                    <Link to={card.link} className="btn btn-primary btn-full portal-cta-btn">
                      <span>{card.cta}</span>
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="home-teaser-section mb-6">
          <div className="home-cta-card glass-panel">
            <div>
              <h3 className="cta-heading">Want to talk?</h3>
              <p className="cta-sub">
                Email me. I usually reply within a day or two.
              </p>
            </div>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                <Mail size={16} />
                <span>Contact</span>
              </Link>
              <button onClick={onOpenResume} className="btn btn-outline-cyan">
                <span>View CV</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
