import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  Layers, 
  Briefcase, 
  Award, 
  Mail 
} from 'lucide-react';

export default function MobileNavDock() {
  const dockLinks = [
    { name: 'Overview', to: '/', icon: Home, end: true },
    { name: 'Architecture', to: '/pipeline', icon: Layers },
    { name: 'Experience', to: '/experience', icon: Briefcase },
    { name: 'Credentials', to: '/credentials', icon: Award },
    { name: 'Contact', to: '/contact', icon: Mail }
  ];

  return (
    <nav className="mobile-nav-dock" aria-label="Mobile Bottom Navigation">
      <div className="dock-container glass-panel">
        {dockLinks.map((link) => {
          const Icon = link.icon;
          return (
            <NavLink
              key={link.name}
              to={link.to}
              end={link.end}
              className={({ isActive }) => `dock-item ${isActive ? 'active' : ''}`}
            >
              <div className="dock-icon-wrapper">
                <Icon size={18} className="dock-icon" />
                <span className="dock-active-glow"></span>
              </div>
              <span className="dock-label">{link.name}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
