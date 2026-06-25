import { useState, useEffect } from 'react';
import './Loader.css';

export function Loader() {
  const [isFading, setIsFading] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // Prevent scrolling while loader is active
    document.body.style.overflow = 'hidden';

    // Keep the loader visible for 2.2 seconds, then trigger the fade out
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
      // Re-enable scrolling right as it starts fading out so the user can interact
      document.body.style.overflow = '';
    }, 2200);

    // Completely unmount the loader after the fade transition finishes
    const hideTimer = setTimeout(() => {
      setIsHidden(true);
    }, 3200);

    return () => {
      // Ensure scroll is always unlocked if component unmounts early
      document.body.style.overflow = '';
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (isHidden) return null;

  return (
    <div className={`loader-container ${isFading ? 'fade-out' : ''}`}>
      <div className="alerting-a-wrapper">
        <svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg" className="loader-svg-a">
          <defs>
            <linearGradient id="redGradLoader" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="100%" stopColor="#991b1b" />
            </linearGradient>
          </defs>
          {/* The custom 'A' shape */}
          <path d="M 45 20 L 55 20 L 95 100 L 79 100 L 50 42 L 21 100 L 5 100 Z" fill="url(#redGradLoader)" />
          {/* The red dot */}
          <circle cx="50" cy="78" r="9" fill="#dc2626" />
        </svg>
      </div>
    </div>
  );
}
