import './ComingSoon.css';
import { ArrowLeft } from 'lucide-react';

interface ComingSoonProps {
  onBack?: () => void;
}

export function ComingSoon({ onBack }: ComingSoonProps) {
  return (
    <div className="coming-soon-container">
      <div className="alerting-a-wrapper" style={{ position: 'relative', width: '100px', height: '120px', marginBottom: '2rem' }}>
        <svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg" className="loader-svg-a">
          <defs>
            <linearGradient id="redGradLoader2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="100%" stopColor="#991b1b" />
            </linearGradient>
          </defs>
          <path d="M 45 20 L 55 20 L 95 100 L 79 100 L 50 42 L 21 100 L 5 100 Z" fill="url(#redGradLoader2)" />
          <circle cx="50" cy="78" r="9" fill="#dc2626" />
        </svg>
      </div>
      <h1 className="coming-soon-title">Coming Soon...</h1>
      <p className="coming-soon-subtitle">We are working hard to bring you this content.</p>
      
      {onBack && (
        <button className="btn btn-secondary" onClick={onBack} style={{ marginTop: '2rem' }}>
          <ArrowLeft size={20} />
          Back to Home
        </button>
      )}
    </div>
  );
}
