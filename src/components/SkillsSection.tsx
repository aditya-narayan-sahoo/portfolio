import React, { useState, useMemo } from 'react';
import { skillCategories, personalInfo } from '../data/portfolioData';
import { Cpu, Search, X, CheckCircle, Sparkles } from 'lucide-react';

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeLevel, setActiveLevel] = useState<string>('all');

  // Compute skill counts
  const totalSkillsCount = useMemo(() => {
    return skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0);
  }, []);

  const levels = useMemo(() => {
    const lvlSet = new Set<string>();
    skillCategories.forEach(cat => {
      cat.skills.forEach(s => lvlSet.add(s.level));
    });
    return ['all', ...Array.from(lvlSet)];
  }, []);

  // Filtered categories and their skills
  const filteredCategories = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    return skillCategories
      .filter(category => {
        if (activeCategory === 'all') return true;
        return category.id === activeCategory;
      })
      .map(category => {
        const matchingSkills = category.skills.filter(skill => {
          const matchesQuery = !query || 
            skill.name.toLowerCase().includes(query) ||
            skill.level.toLowerCase().includes(query);

          const matchesLevel = activeLevel === 'all' || 
            skill.level.toLowerCase() === activeLevel.toLowerCase();

          return matchesQuery && matchesLevel;
        });

        return {
          ...category,
          skills: matchingSkills
        };
      })
      .filter(category => category.skills.length > 0);
  }, [activeCategory, searchQuery, activeLevel]);

  const totalFilteredSkills = useMemo(() => {
    return filteredCategories.reduce((acc, cat) => acc + cat.skills.length, 0);
  }, [filteredCategories]);

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Cpu size={14} />
            <span>Skills &amp; Capabilities</span>
          </div>
          <h2 className="section-title">Technical Expertise</h2>
          <p className="section-subtitle">
            Hands-on technologies across DevOps &amp; IaC, SRE &amp; Platform Reliability, Cloud Data platforms, and Applied AI.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="skills-filter-bar glass-panel">
          <div className="filter-tabs">
            <button
              onClick={() => setActiveCategory('all')}
              className={`filter-tab ${activeCategory === 'all' ? 'active' : ''}`}
            >
              All Domains ({totalSkillsCount})
            </button>
            {skillCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`filter-tab ${activeCategory === cat.id ? 'active' : ''}`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="skills-search-wrapper">
            <Search size={14} className="text-muted" />
            <input
              type="text"
              placeholder="Search tools (e.g. Terraform, AWX, AWS)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="skills-search-input"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="btn-clear-search"
                aria-label="Clear search"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Level Filters & Stats Bar */}
        <div className="skills-subfilter-row">
          <div className="level-chips">
            <span className="level-chip-label">Proficiency:</span>
            {levels.map(lvl => (
              <button
                key={lvl}
                onClick={() => setActiveLevel(lvl)}
                className={`level-filter-chip ${activeLevel === lvl ? 'active' : ''}`}
              >
                {lvl === 'all' ? 'All Levels' : lvl}
              </button>
            ))}
          </div>

          <div className="skills-count-badge">
            <span>Showing <strong>{totalFilteredSkills}</strong> skills</span>
          </div>
        </div>

        {/* Skills Categories Grid */}
        {filteredCategories.length > 0 ? (
          <div className="skills-categories-grid">
            {filteredCategories.map((category) => (
              <div key={category.id} className="skill-cat-card glass-panel">
                <div className="cat-header">
                  <div className="cat-title-row">
                    <h3 className="cat-title">{category.name}</h3>
                    <span className="cat-count-pill">{category.skills.length} skills</span>
                  </div>
                  <p className="cat-desc">{category.description}</p>
                </div>

                <div className="skills-grid">
                  {category.skills.map((skill, idx) => {
                    const levelClass = skill.level.toLowerCase();
                    return (
                      <div
                        key={idx}
                        className={`skill-item ${skill.highlight ? 'skill-highlight' : ''}`}
                      >
                        <div className="skill-name-row">
                          <div className="skill-title-block">
                            {skill.highlight && (
                              <Sparkles size={11} className="text-cyan skill-star" />
                            )}
                            <span className="skill-title">{skill.name}</span>
                          </div>
                          <span className={`skill-level-badge level-${levelClass}`}>
                            {skill.level}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="skills-empty-state glass-panel">
            <Cpu size={36} className="text-muted" />
            <h4 className="empty-title">No skills match your filters</h4>
            <p className="empty-desc">
              Try resetting your search query or selecting another domain.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setActiveLevel('all');
                setSearchQuery('');
              }}
              className="btn btn-secondary btn-sm"
            >
              Reset all filters
            </button>
          </div>
        )}

        {/* Domain Context: Industries & Languages */}
        <div className="skills-sub-grid">
          <div className="sub-card glass-panel">
            <h4 className="sub-card-title">Industry Domains</h4>
            <div className="sub-items">
              {personalInfo.industries.map((ind, i) => (
                <div key={i} className="sub-pill">
                  <span className="sub-pill-name">{ind.name}</span>
                  <span className="sub-pill-level">{ind.level}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="sub-card glass-panel">
            <h4 className="sub-card-title">Natural Languages</h4>
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
