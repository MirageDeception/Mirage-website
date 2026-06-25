import { Search, ShieldAlert, Zap } from 'lucide-react';
import './ValueProps.css';

export function ValueProps() {
  return (
    <section className="values-section section">
      <div className="values-wave-container">
        <div className="values-wave"></div>
        <div className="values-wave"></div>
        <div className="values-wave"></div>
        <div className="values-wave"></div>
      </div>
      <div className="values-wave-container bottom-right">
        <div className="values-wave"></div>
        <div className="values-wave"></div>
        <div className="values-wave"></div>
        <div className="values-wave"></div>
      </div>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="section-title text-center mx-auto" style={{ maxWidth: '700px', marginBottom: '4rem' }}>
          The Core Advantages of <span className="text-gradient">MIRAGE</span>
        </h2>

        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">
              <ShieldAlert size={28} />
            </div>
            <h3>High-Fidelity Detection</h3>
            <p>
              Because deception assets have no business value, any interaction with them is inherently malicious. MIRAGE delivers zero-noise telemetry, allowing your SOC to act with absolute certainty.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <Zap size={28} />
            </div>
            <h3>Breaks Attack Automation</h3>
            <p>
              MIRAGE disrupts the stable ground truth that automated scripts and AI adversaries rely on. By dynamically altering the perceived environment, we force tools to fail and attackers to expose themselves.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <Search size={28} />
            </div>
            <h3>Reduces Dwell Time</h3>
            <p>
              Catch lateral movement and credential abuse the second it happens. Our honeytokens and decoy IAM roles provide an early warning system that stops breaches before data exfiltration occurs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
