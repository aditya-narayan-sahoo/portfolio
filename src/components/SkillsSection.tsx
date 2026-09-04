import { skillCategories, personalInfo } from '../data/portfolioData';
import { Cpu } from 'lucide-react';

export default function SkillsSection() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Cpu size={14} />
            <span>Skills</span>
          </div>
          <h2 className="section-title">What I use</h2>
          <p className="section-subtitle">
            Grouped by area. No proficiency bars — ask me if you want detail.
          </p>
        </div>

        <div className="skills-categories-grid">
          {skillCategories.map((category) => (
            <div key={category.id} className="skill-cat-card glass-panel">
              <div className="cat-header">
                <h3 className="cat-title">{category.name}</h3>
                <p className="cat-desc">{category.description}</p>
              </div>

              <div className="skills-grid">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <div className="skill-name-row">
                      <span className="skill-title">{skill.name}</span>
                      <span className="skill-level-badge">{skill.level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-sub-grid">
          <div className="sub-card glass-panel">
            <h4 className="sub-card-title">Industries</h4>
            <div className="sub-items">
              {personalInfo.industries.map((ind, i) => (
                <div key={i} className="sub-pill">
                  <span className="sub-pill-name">{ind.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="sub-card glass-panel">
            <h4 className="sub-card-title">Languages</h4>
            <div className="sub-items">
              {personalInfo.languages.map((lang, i) => (
                <div key={i} className="sub-pill">
                  <span className="sub-pill-name">{lang.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
