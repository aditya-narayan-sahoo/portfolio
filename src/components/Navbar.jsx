import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { 
  Terminal, 
  Home,
  Layers, 
  Briefcase, 
  Cpu, 
  Award, 
  Mail, 
  FileText, 
  Sun,
  Moon
} from 'lucide-react';

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', to: '/', icon: Home, end: true },
    { name: 'Architecture', to: '/pipeline', icon: Layers },
    { name: 'Experience', to: '/experience', icon: Briefcase },
    { name: 'Credentials', to: '/credentials', icon: Award },
    { name: 'Contact', to: '/contact', icon: Mail }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand */}
        <Link to="/" className="nav-brand" onClick={() => setMobileMenuOpen(false)}>
          <div className="brand-monogram">
            <span>AS</span>
          </div>
          <span className="brand-name">Aditya N. Sahoo</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="nav-links">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <NavLink
                key={link.name}
                to={link.to}
                end={link.end}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                <Icon size={15} />
                <span>{link.name}</span>
              </NavLink>
            );
          })}
        </div>

        {/* Header Actions */}
        <div className="nav-actions">
          <button 
            className="nav-btn nav-btn-cv"
            onClick={onOpenResume}
            title="View full printable CV"
          >
            <FileText size={14} />
            <span>View CV</span>
          </button>

          {/* Dark/Light Theme Toggle */}
          <button 
            className="btn-theme-toggle"
            onClick={toggleTheme}
            title={theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
            aria-label="Toggle color theme"
          >
            {theme === 'dark' ? <Sun size={16} className="text-amber" /> : <Moon size={16} className="text-cyan" />}
          </button>

          <Link to="/contact" className="nav-btn nav-btn-connect">
            <span>Connect</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
