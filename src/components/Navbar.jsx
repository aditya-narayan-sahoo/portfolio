import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Terminal, 
  Layers, 
  Briefcase, 
  Cpu, 
  Award, 
  Mail, 
  FileText, 
  Menu, 
  X,
  ExternalLink,
  Sun,
  Moon
} from 'lucide-react';

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
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

      const sections = ['pipeline', 'experience', 'skills', 'credentials', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Architecture', href: '#pipeline', icon: Layers },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Skills', href: '#skills', icon: Cpu },
    { name: 'Credentials', href: '#credentials', icon: Award },
    { name: 'Contact', href: '#contact', icon: Mail }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand */}
        <a href="#" className="nav-brand">
          <div className="brand-avatar">
            <span className="brand-code">&gt;_</span>
          </div>
          <div className="brand-text">
            <span className="brand-name">Aditya N. Sahoo</span>
            <span className="brand-role">Cloud & Data / Applied AI @ IBM</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="nav-links">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`nav-link ${isActive ? 'active' : ''}`}
              >
                <Icon size={15} />
                <span>{link.name}</span>
              </a>
            );
          })}
        </div>

        {/* Header Actions */}
        <div className="nav-actions">
          <div className="status-pill nav-status" title="Platform telemetry active">
            <span className="status-dot"></span>
            <span>L2 Operations Live</span>
          </div>

          <button 
            className="btn btn-secondary btn-sm"
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

          <a href="#contact" className="btn btn-primary btn-sm">
            <span>Connect</span>
          </a>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-links">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="mobile-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Icon size={18} />
                  <span>{link.name}</span>
                </a>
              );
            })}
            <div className="mobile-menu-divider"></div>
            <button 
              className="btn btn-secondary btn-full mb-2"
              onClick={toggleTheme}
            >
              {theme === 'dark' ? <><Sun size={16} className="text-amber" /> <span>Light Mode</span></> : <><Moon size={16} className="text-cyan" /> <span>Dark Mode</span></>}
            </button>
            <button 
              className="btn btn-primary btn-full"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
            >
              <FileText size={16} />
              <span>View Full Resume</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
