import { useState } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import './Header.css';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log('Login Success:', tokenResponse);
      setIsLoggedIn(true);
      setIsMenuOpen(false);
    },
    onError: (error) => {
      console.error('Login Failed:', error);
      alert('Login Failed. Please make sure you have added a valid Google Client ID to your .env file.');
    },
  });

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
          <img src={`${import.meta.env.BASE_URL}3-line-icon.png`} alt="Menu" style={{ width: '28px', height: '28px', filter: 'brightness(0) invert(1)' }} />
        </button>

        <div className={`header-content ${isMenuOpen ? 'is-open' : ''}`}>
          <nav className="header-nav">
            <a href="#" className="nav-link" onClick={() => setIsMenuOpen(false)}>Blogs</a>
            <a href="#" className="nav-link" onClick={() => setIsMenuOpen(false)}>Meet Team</a>
          </nav>
          <div className="header-actions">
            {isLoggedIn ? (
              <button className="btn btn-primary btn-sm" onClick={() => setIsLoggedIn(false)}>Sign Out</button>
            ) : (
              <button className="btn btn-secondary btn-sm" onClick={() => login()}>Log In with Google</button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
