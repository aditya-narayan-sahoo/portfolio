import React, { useState, useEffect, useRef } from 'react';
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
  Award,
  ArrowRight,
  TrendingUp,
  Cpu
} from 'lucide-react';

export default function ExperienceSection() {
  // Default first 2 expanded
  const [expandedIndices, setExpandedIndices] = useState<Record<number, boolean>>({ 0: true, 1: true });
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [activeItemIndex, setActiveItemIndex] = useState<number>(0);
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleIndex = (index: number) => {
    setExpandedIndices(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Scroll listener for glowing spine fill and traveling neon dot
  useEffect(() => {
    let animationFrameId: number | null = null;

    const handleScroll = () => {
      if (!timelineRef.current) return;

      animationFrameId = requestAnimationFrame(() => {
        if (!timelineRef.current) return;
        const timelineRect = timelineRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculate how much of the timeline has scrolled past
        const triggerPoint = windowHeight * 0.55;
        const timelineTop = timelineRect.top;
        const timelineHeight = timelineRect.height;

        const distanceScrolled = triggerPoint - timelineTop;
        const rawProgress = distanceScrolled / (timelineHeight || 1);
        const clampedProgress = Math.min(Math.max(rawProgress, 0), 1);
        setScrollProgress(clampedProgress);

        // Find which card is currently closest to the trigger line
        let closestIndex = 0;
        let smallestDistance = Infinity;

        cardRefs.current.forEach((el, idx) => {
          if (!el) return;
          const cardRect = el.getBoundingClientRect();
          const cardCenter = cardRect.top + cardRect.height * 0.3;
          const dist = Math.abs(cardCenter - triggerPoint);
          if (dist < smallestDistance) {
            smallestDistance = dist;
            closestIndex = idx;
          }
        });

        setActiveItemIndex(closestIndex);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const scrollToCard = (index: number) => {
    const target = cardRefs.current[index];
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // Ensure expanded
      setExpandedIndices(prev => ({ ...prev, [index]: true }));
    }
  };

  // Career trajectory list (chronological: Intern -> ASE -> PMI -> Applied AI)
  const trajectorySteps = [
    { name: 'Internship', company: 'KPIT Tech', targetIndex: 3, role: 'Software Intern' },
    { name: 'Associate Eng.', company: 'IBM India', targetIndex: 2, role: 'Associate Systems Eng.' },
    { name: 'Client Engagement', company: 'Philip Morris Int.', targetIndex: 1, role: 'Data & Cloud Eng.' },
    { name: 'AI Specialist', company: 'IBM India', targetIndex: 0, role: 'Applied AI Specialist' }
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} />
            <span>Track Record & Career Progression</span>
          </div>
          <h2 className="section-title">Professional Experience & Seniority Velocity</h2>
          <p className="section-subtitle">
            Chronological engineering evolution from automotive software foundations into mission-critical enterprise
            cloud reliability and Applied AI platform leadership.
          </p>
        </div>

        {/* Career Trajectory Stepper Strip */}
        <div className="career-trajectory-stepper glass-panel">
          <div className="stepper-meta">
            <TrendingUp size={15} className="text-cyan" />
            <span className="stepper-meta-text">CAREER PROGRESSION TRAJECTORY:</span>
          </div>
          <div className="stepper-stages">
            {trajectorySteps.map((step, sIdx) => {
              const isActive = activeItemIndex === step.targetIndex;
              return (
                <button
                  key={sIdx}
                  type="button"
                  className={`stepper-chip ${isActive ? 'active' : ''}`}
                  onClick={() => scrollToCard(step.targetIndex)}
                  title={`Scroll to ${step.role} at ${step.company}`}
                >
                  <span className="stepper-num">{sIdx + 1}</span>
                  <div className="stepper-label-group">
                    <span className="stepper-chip-title">{step.name}</span>
                    <span className="stepper-chip-sub">{step.company}</span>
                  </div>
                  {sIdx < trajectorySteps.length - 1 && (
                    <ArrowRight size={13} className="stepper-arrow" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Animated Experience Timeline with Glowing Spine */}
        <div className="experience-timeline-container" ref={timelineRef}>
          {/* Vertical Glowing Spine & Traveling Neon Dot */}
          <div className="timeline-spine-wrapper" aria-hidden="true">
            {/* Background Rail */}
            <div className="timeline-spine-rail"></div>
            {/* Dynamic Scroll Fill */}
            <div 
              className="timeline-spine-fill" 
              style={{ height: `${scrollProgress * 100}%` }}
            ></div>
            {/* Traveling Glowing Neon Pulse Dot */}
            <div 
              className="timeline-traveler-dot"
              style={{ top: `${scrollProgress * 100}%` }}
            >
              <div className="dot-inner-core"></div>
              <div className="dot-pulse-ring"></div>
            </div>
          </div>

          {/* Cards Stack */}
          <div className="timeline-cards-list">
            {experiences.map((exp, index) => {
              const isExpanded = !!expandedIndices[index];
              const isFeatured = exp.type === 'Client Assignment';
              const isCurrent = exp.badge === 'Current Role';
              const isActiveNode = activeItemIndex === index;

              return (
                <div 
                  key={index} 
                  ref={(el) => { cardRefs.current[index] = el; }}
                  className={`experience-timeline-row ${isActiveNode ? 'row-active' : ''}`}
                >
                  {/* Spine Node Marker */}
                  <div className={`timeline-node-marker ${isActiveNode ? 'marker-active' : ''}`}>
                    <div className="node-marker-ring">
                      {isCurrent ? (
                        <Sparkles size={13} className="text-cyan node-icon" />
                      ) : (
                        <div className="node-marker-core"></div>
                      )}
                    </div>
                    <div className="node-marker-connector"></div>
                  </div>

                  {/* Experience Card */}
                  <div 
                    className={`experience-card glass-panel ${isFeatured ? 'featured-card' : ''} ${isActiveNode ? 'active-highlight-card' : ''}`}
                  >
                    {/* Card Header */}
                    <div className="exp-card-header" onClick={() => toggleIndex(index)}>
                      <div className="exp-title-block">
                        <div className="exp-badges-row">
                          <span className={`exp-badge ${isFeatured ? 'badge-featured' : 'badge-role'}`}>
                            {exp.badge}
                          </span>
                          <span className="exp-type-tag">{exp.type}</span>
                          {isActiveNode && (
                            <span className="exp-inview-pill">
                              <span className="inview-pulse"></span>
                              Active View
                            </span>
                          )}
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

                    {/* Summary */}
                    <p className="exp-summary">{exp.summary}</p>

                    {/* Expanded Content */}
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

                        {/* Skill Tags */}
                        <div className="exp-skills-row">
                          <span className="exp-skills-label">Applied Technologies:</span>
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
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
