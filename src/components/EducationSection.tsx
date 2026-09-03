import React, { useState, useEffect, useRef } from 'react';
import { education } from '../data/portfolioData';
import { GraduationCap, Calendar, MapPin, BookOpen, Award, CheckCircle2 } from 'lucide-react';

export default function EducationSection() {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const timelineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let animationFrameId: number | null = null;

    const handleScroll = () => {
      if (!timelineRef.current) return;

      animationFrameId = requestAnimationFrame(() => {
        if (!timelineRef.current) return;
        const rect = timelineRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const triggerPoint = windowHeight * 0.6;
        const distance = triggerPoint - rect.top;
        const rawProgress = distance / (rect.height || 1);
        setScrollProgress(Math.min(Math.max(rawProgress, 0), 1));
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="education" className="section education-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={14} />
            <span>Academic Foundation</span>
          </div>
          <h2 className="section-title">Education & Core Foundations</h2>
          <p className="section-subtitle">
            Rigorous engineering foundation in distributed systems, software engineering, algorithms, 
            and enterprise computing architectures.
          </p>
        </div>

        {/* Standardized Glowing Timeline */}
        <div className="education-timeline-container" ref={timelineRef}>
          {/* Vertical Glowing Spine & Traveling Dot */}
          <div className="timeline-spine-wrapper" aria-hidden="true">
            <div className="timeline-spine-rail"></div>
            <div 
              className="timeline-spine-fill" 
              style={{ height: `${scrollProgress * 100}%` }}
            ></div>
            <div 
              className="timeline-traveler-dot"
              style={{ top: `${scrollProgress * 100}%` }}
            >
              <div className="dot-inner-core"></div>
              <div className="dot-pulse-ring"></div>
            </div>
          </div>

          <div className="timeline-cards-list">
            {education.map((edu, idx) => (
              <div key={idx} className="education-timeline-row row-active">
                {/* Spine Node Marker */}
                <div className="timeline-node-marker marker-active">
                  <div className="node-marker-ring">
                    <BookOpen size={13} className="text-cyan node-icon" />
                  </div>
                  <div className="node-marker-connector"></div>
                </div>

                {/* Education Card */}
                <div className="edu-card glass-panel active-highlight-card">
                  <div className="edu-card-top">
                    <div className="edu-badges-row">
                      <span className="exp-badge badge-role">B.Tech Degree</span>
                      <span className="exp-type-tag">Full-Time</span>
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

                  <div className="edu-foundation-tags">
                    <span className="foundation-pill">Distributed Systems</span>
                    <span className="foundation-pill">Data Structures & Algorithms</span>
                    <span className="foundation-pill">Database Management Systems</span>
                    <span className="foundation-pill">Cloud Architecture</span>
                    <span className="foundation-pill">Software Engineering</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
