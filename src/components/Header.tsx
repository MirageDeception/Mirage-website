import { useState } from 'react';
import './Header.css';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-container">
        <div className="header-logo-wrapper">
          <span style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '2px', color: 'var(--text-main)' }}>MIRAGE</span>
        </div>
        
        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          <img src="/3-line-icon.png" alt="Menu" style={{ width: '28px', height: '28px', filter: 'brightness(0) invert(1)' }} />
        </button>

        <div className={`header-content ${isMenuOpen ? 'is-open' : ''}`}>
          <nav className="header-nav">
            <a href="#platform" className="nav-link" onClick={() => setIsMenuOpen(false)}>Platform</a>
            <a href="#how-it-works" className="nav-link" onClick={() => setIsMenuOpen(false)}>How it Works</a>
            <a href="#architecture" className="nav-link" onClick={() => setIsMenuOpen(false)}>Architecture</a>
          </nav>
          <div className="header-actions">
            <button className="btn btn-secondary btn-sm" onClick={() => setIsMenuOpen(false)}>Log In</button>
            <button className="btn btn-primary btn-sm" onClick={() => setIsMenuOpen(false)}>Get a Demo</button>
          </div>
        </div>
      </div>
    </header>
  );
}
