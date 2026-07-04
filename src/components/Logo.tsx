import './Logo.css';

interface LogoProps {
  className?: string;
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <div className={`logo-container ${className}`}>
      <div className="logo-image-wrapper">
        <img src={`${import.meta.env.BASE_URL}logo3.png`} alt="MIRAGE Cloud Deception" className="logo-img" />

        {/* Absolutely positioned SVG overlay over the entire image so animations don't clip! */}
        <svg viewBox="0 0 720 200" xmlns="http://www.w3.org/2000/svg" className="logo-svg-overlay">
          <defs>
            <linearGradient id="redGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="100%" stopColor="#991b1b" />
            </linearGradient>
          </defs>

          {/* Adjust position and size using the transform here: translate(Xpx, Ypx) scale(Z) */}
          <g className="alarm-a" style={{ transform: 'translate(-10px, 0px) scale(0.7)' }}>
            {/* The custom 'A' shape */}
            <path d="M 400 40 L 410 40 L 450 120 L 434 120 L 405 62 L 376 120 L 360 120 Z" fill="url(#redGrad)" />

            {/* Expanding signal rings from the dot */}
            <circle cx="405" cy="98" r="9" fill="none" stroke="#ef4444" strokeWidth="2" className="svg-ring ring-1" />
            <circle cx="405" cy="98" r="9" fill="none" stroke="#ef4444" strokeWidth="2" className="svg-ring ring-2" />
            <circle cx="405" cy="98" r="9" fill="none" stroke="#ef4444" strokeWidth="2" className="svg-ring ring-3" />

            {/* The red dot */}
            <circle cx="405" cy="98" r="9" fill="#dc2626" />
          </g>
        </svg>
      </div>
    </div>
  );
}
