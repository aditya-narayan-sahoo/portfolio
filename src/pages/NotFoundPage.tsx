import React from 'react';
import { Home, AlertCircle, ArrowRight, Layers, Briefcase, Award, Mail } from 'lucide-react';
import { useLocation } from 'react-router-dom';

interface NotFoundPageProps {
  invalidPath?: string;
}

export default function NotFoundPage({ invalidPath }: NotFoundPageProps) {
  let location;
  try {
    location = useLocation();
  } catch {
    location = null;
  }

  const displayPath = invalidPath || (location ? location.pathname : window.location.pathname);

  const handleGoHome = () => {
    const isGhPages = window.location.pathname.startsWith('/portfolio');
    const cleanBase = isGhPages ? '/portfolio/' : '/';
    // Cleanly replace URL in address bar to eliminate invalid pathname segments
    window.location.replace(window.location.origin + cleanBase + '#/');
  };

  const handleNavigateTo = (hashRoute: string) => {
    const isGhPages = window.location.pathname.startsWith('/portfolio');
    const cleanBase = isGhPages ? '/portfolio/' : '/';
    window.location.replace(window.location.origin + cleanBase + '#/' + hashRoute);
  };

  return (
    <div className="container not-found-page-wrapper">
      <div className="not-found-card glass-panel">
        <div className="not-found-badge">
          <AlertCircle size={15} />
          <span>404 ERROR</span>
        </div>

        <h1 className="not-found-title">Page not found</h1>

        <p className="not-found-desc">
          No page exists at this address. You may have mistyped the URL or the resource was moved.
        </p>

        {displayPath && displayPath !== '/' && (
          <div className="not-found-path-box">
            <span className="not-found-path-label">Requested address:</span>
            <code className="not-found-code">{displayPath}</code>
          </div>
        )}

        <div className="not-found-actions">
          <button onClick={handleGoHome} className="btn btn-primary">
            <Home size={16} />
            <span>Return to Home</span>
          </button>
        </div>

        <div className="not-found-suggestions">
          <span className="suggestions-label">Or jump straight to:</span>
          <div className="suggestions-grid">
            <button onClick={() => handleNavigateTo('pipeline')} className="suggestion-chip">
              <Layers size={14} className="text-cyan" />
              <span>Pipeline Examples</span>
              <ArrowRight size={12} />
            </button>
            <button onClick={() => handleNavigateTo('experience')} className="suggestion-chip">
              <Briefcase size={14} className="text-blue" />
              <span>Work History</span>
              <ArrowRight size={12} />
            </button>
            <button onClick={() => handleNavigateTo('credentials')} className="suggestion-chip">
              <Award size={14} className="text-purple" />
              <span>Skills & Certs</span>
              <ArrowRight size={12} />
            </button>
            <button onClick={() => handleNavigateTo('contact')} className="suggestion-chip">
              <Mail size={14} className="text-emerald" />
              <span>Contact</span>
              <ArrowRight size={12} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
