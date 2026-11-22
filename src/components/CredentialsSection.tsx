import React, { useState, useMemo } from 'react';
import { credentials } from '../data/portfolioData';
import { 
  Award, 
  ShieldCheck, 
  Search, 
  Sparkles, 
  Check, 
  Copy, 
  X,
  Filter
} from 'lucide-react';

export default function CredentialsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = Array.from(new Set(credentials.map(c => c.category)));
    return ['All', 'Featured', ...cats];
  }, []);

  const filteredCredentials = useMemo(() => {
    return credentials.filter(cred => {
      // Category match
      let matchesCat = true;
      if (selectedCategory === 'Featured') {
        matchesCat = cred.featured;
      } else if (selectedCategory !== 'All') {
        matchesCat = cred.category.toLowerCase() === selectedCategory.toLowerCase();
      }

      // Search match
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        cred.title.toLowerCase().includes(q) ||
        cred.issuer.toLowerCase().includes(q) ||
        cred.category.toLowerCase().includes(q) ||
        cred.code.toLowerCase().includes(q);

      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <section id="credentials" className="section credentials-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Award size={14} />
            <span>Certs</span>
          </div>
          <h2 className="section-title">Certifications &amp; Credentials</h2>
          <p className="section-subtitle">
            Professional certifications, cloud &amp; AI credentials, and technical accreditations.
            Verification identifiers available for validation.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="cred-filter-bar glass-panel">
          <div className="cred-filter-row">
            <div className="filter-prefix">
              <Filter size={14} className="text-muted" />
              <span>Filter:</span>
            </div>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`cred-filter-btn ${selectedCategory === cat ? 'active' : ''}`}
              >
                {cat === 'Featured' ? (
                  <>
                    <Sparkles size={12} className="inline-icon text-cyan" />
                    <span>Featured</span>
                  </>
                ) : (
                  cat
                )}
              </button>
            ))}
          </div>

          <div className="cred-search-wrapper">
            <Search size={14} className="text-muted" />
            <input
              type="text"
              placeholder="Search by title, issuer, or ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="cred-search-input"
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

        {/* Results Counter */}
        <div className="cred-meta-bar">
          <span className="cred-count-text">
            Showing <strong>{filteredCredentials.length}</strong> of <strong>{credentials.length}</strong> certifications
            {selectedCategory !== 'All' && <span> in <em>{selectedCategory}</em></span>}
            {searchQuery && <span> matching "<em>{searchQuery}</em>"</span>}
          </span>
          {(selectedCategory !== 'All' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="btn-reset-filters"
            >
              Reset filters
            </button>
          )}
        </div>

        {/* Credentials Grid */}
        {filteredCredentials.length > 0 ? (
          <div className="credentials-grid">
            {filteredCredentials.map((cred, idx) => {
              const isCopied = copiedCode === cred.code;
              const isAnthropic = cred.issuer.toLowerCase().includes('anthropic');
              const is2026 = cred.year === '2026';

              return (
                <div
                  key={idx}
                  className={`cred-card glass-panel ${cred.featured ? 'cred-featured' : ''} ${isAnthropic ? 'cred-anthropic' : ''}`}
                >
                  <div className="cred-card-top">
                    <div className="cred-issuer-tag">
                      {isAnthropic ? (
                        <Sparkles size={14} className="text-amber" />
                      ) : (
                        <ShieldCheck size={14} className="text-cyan" />
                      )}
                      <span>{cred.issuer}</span>
                    </div>

                    <div className="cred-badges-row">
                      {is2026 && (
                        <span className="badge-new">2026</span>
                      )}
                      {cred.featured && (
                        <span className="badge-featured-pill">Featured</span>
                      )}
                    </div>
                  </div>

                  <h3 className="cred-title">{cred.title}</h3>

                  <div className="cred-footer">
                    <span className="cred-category-badge font-mono">{cred.category}</span>
                    
                    <button
                      onClick={() => handleCopyCode(cred.code)}
                      className="cred-code-btn font-mono"
                      title="Click to copy credential code"
                    >
                      {isCopied ? (
                        <>
                          <Check size={12} className="text-emerald" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy size={12} className="text-muted" />
                          <span>{cred.code}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="cred-empty-state glass-panel">
            <Award size={36} className="text-muted" />
            <h4 className="empty-title">No matching certifications found</h4>
            <p className="empty-desc">
              Try adjusting your category filter or search query.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="btn btn-secondary btn-sm"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
