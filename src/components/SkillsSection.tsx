import React, { useState } from 'react';
import { skillCategories, personalInfo } from '../data/portfolioData';
import { 
  Cpu, 
  Database, 
  Sparkles, 
  Terminal, 
  Code2, 
  CheckCircle, 
  Search,
  Filter,
  Check
} from 'lucide-react';

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = skillCategories.map(cat => {
    let skills = cat.skills;
    if (searchQuery.trim() !== '') {
      skills = skills.filter(s => 
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.level.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return { ...cat, skills };
  }).filter(cat => {
    if (activeTab !== 'all' && cat.id !== activeTab) return false;
    return cat.skills.length > 0;
  });

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Cpu size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">Skills & Domain Expertise</h2>
          <p className="section-subtitle">
            A comprehensive matrix of technologies, operational frameworks, and methodologies 
            honed through mission-critical enterprise platforms and software engineering.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="skills-filter-bar glass-panel">
          <div className="filter-tabs">
            <button
              onClick={() => setActiveTab('all')}
              className={`filter-tab ${activeTab === 'all' ? 'active' : ''}`}
            >
              All Domains
            </button>
            {skillCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`filter-tab ${activeTab === cat.id ? 'active' : ''}`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="skills-search-wrapper">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              placeholder="Search skill (e.g., Snowflake, AI, React)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="skills-search-input"
            />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="skills-categories-grid">
          {filteredCategories.map((category) => (
            <div key={category.id} className="skill-cat-card glass-panel">
              <div className="cat-header">
                <h3 className="cat-title">{category.name}</h3>
                <p className="cat-desc">{category.description}</p>
              </div>

              <div className="skills-grid">
                {category.skills.map((skill, idx) => (
                  <div 
                    key={idx} 
                    className={`skill-item ${skill.highlight ? 'skill-highlight' : ''}`}
                  >
                    <div className="skill-name-row">
                      <span className="skill-title">{skill.name}</span>
                      <span className={`skill-level-badge level-${skill.level.toLowerCase()}`}>
                        {skill.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Industries & Languages Sub-strip */}
        <div className="skills-sub-grid">
          {/* Industry Experience */}
          <div className="sub-card glass-panel">
            <h4 className="sub-card-title">Industry Domain Knowledge</h4>
            <div className="sub-items">
              {personalInfo.industries.map((ind, i) => (
                <div key={i} className="sub-pill">
                  <span className="sub-pill-name">{ind.name}</span>
                  <span className="sub-pill-level">{ind.level}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="sub-card glass-panel">
            <h4 className="sub-card-title">Languages</h4>
            <div className="sub-items">
              {personalInfo.languages.map((lang, i) => (
                <div key={i} className="sub-pill">
                  <span className="sub-pill-name">{lang.name}</span>
                  <span className="sub-pill-level">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
