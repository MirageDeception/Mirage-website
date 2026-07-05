import { useState } from 'react';
import './Header.css';

interface HeaderProps {
  setCurrentPage: (page: 'home' | 'coming-soon') => void;
}

export function Header({ setCurrentPage }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (page: 'home' | 'coming-soon') => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container header-container">
        <div 
          className="header-logo-wrapper" 
          onClick={() => handleNavClick('home')}
          style={{ cursor: 'pointer' }}
        >
          <span style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '2px', color: 'var(--text-main)' }}>MIRAGE</span>
        </div>
        
        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          <img src={`${import.meta.env.BASE_URL}3-line-icon.png`} alt="Menu" style={{ width: '28px', height: '28px', filter: 'brightness(0) invert(1)' }} />
        </button>

        <div className={`header-content ${isMenuOpen ? 'is-open' : ''}`}>
          <nav className="header-nav">
            <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavClick('coming-soon'); }}>Blogs</a>
            <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavClick('coming-soon'); }}>Meet Team</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
