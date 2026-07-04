import { AlertTriangle, Crosshair, Network } from 'lucide-react';
import './ProblemSpace.css';

export function ProblemSpace() {
  return (
    <section id="problem" className="problem-section section">
      <div className="container">
        <h2 className="section-title text-center" style={{ marginTop: '4rem', paddingBottom: '4rem' }}>
          The <span className="text-gradient">Drawbacks</span> of Traditional Security
        </h2>
        
        <div className="problem-zigzag">
          
          {/* Row 1 */}
          <div className="zigzag-row">
            <div className="zigzag-text">
              <div className="card-header">
                <AlertTriangle className="icon-warning" size={24} />
                <h3 className="mono">Drowning in False Positives</h3>
              </div>
              <p className="zigzag-desc text-muted">
                Traditional SIEMs generate thousands of meaningless alerts every day. Your SOC analysts are exhausted from hunting down anomalies that turn out to be benign administrative actions, making it impossible to spot the real attacker in the noise.
              </p>
            </div>
            <div className="zigzag-image-container glass-panel">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" alt="Alert Fatigue Dashboard" className="zigzag-image" />
            </div>
          </div>

          {/* Row 2 */}
          <div className="zigzag-row reverse">
            <div className="zigzag-text">
              <div className="card-header">
                <Network className="icon-warning" size={24} />
                <h3 className="mono">Bypassing the Perimeter</h3>
              </div>
              <p className="zigzag-desc text-muted">
                Attackers know that once they breach the outer perimeter, modern flat cloud networks offer little resistance. They can easily move laterally, enumerate resources, and steal credentials because the internal network blindly trusts authenticated traffic.
              </p>
            </div>
            <div className="zigzag-image-container glass-panel">
              <img src={`${import.meta.env.BASE_URL}cloud-network-breach.png`} alt="Cloud Network Breach Diagram" className="zigzag-image" />
            </div>
          </div>

          {/* Row 3 */}
          <div className="zigzag-row">
            <div className="zigzag-text">
              <div className="card-header">
                <Crosshair className="icon-warning" size={24} />
                <h3 className="mono">Static Canaries are Dead</h3>
              </div>
              <p className="zigzag-desc text-muted">
                Isolated, resource-based honeypots are easily identified and bypassed by modern attackers. Static canary tokens create single points of failure that alert you too late, without derailing the attacker's path or draining their resources.
              </p>
            </div>
            <div className="zigzag-image-container glass-panel">
              <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800" alt="Hacker Code Screen" className="zigzag-image" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
