import { Shield, Terminal } from 'lucide-react';
import { Logo } from './Logo';
import './Hero.css';

export function Hero() {
  return (
    <section id="home" className="hero-section">

      <div className="hero-main-area">
        <div className="edge-alarm edge-alarm-left"></div>
        <div className="edge-alarm edge-alarm-right"></div>

        <div className="container hero-layout-center">

          <div className="hero-content text-center">
            <Logo className="hero-logo" />

            <div className="hero-tagline">
              <span className="tagline-word word-1">DECEIVE</span>
              <span className="tagline-word word-2">DETECT</span>
              <span className="tagline-word word-3">DEFEND</span>
            </div>

            <p className="hero-subtitle mx-auto">
              MIRAGE is an open-source proactive defense platform being developed to deliver a dynamic multi-cloud deception mesh. It aims to break AI attack automation, detect lateral movement, and reduce dwell time.
            </p>

            <div className="hero-cta-group justify-center">
              <a href="https://github.com/arham7006/Project-Mirage" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ textDecoration: 'none' }}>
                <Shield size={20} />
                Deploy the Mesh
              </a>
              <a href="https://github.com/arham7006/Project-Mirage" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ textDecoration: 'none' }}>
                <Terminal size={20} />
                Contribute on GitHub
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
