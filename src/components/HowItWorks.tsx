import { useEffect, useState } from 'react';
import { Database, Server, HardDrive, Users, Cloud, Network, Shield, Key } from 'lucide-react';
import './HowItWorks.css';

export function HowItWorks() {
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const blueIcons = [
    <Server size={20} />, <Database size={20} />, <Cloud size={20} />, <Users size={20} />, 
    <Network size={20} />, <HardDrive size={20} />, <Server size={20} />, <Database size={20} />, 
    <Cloud size={20} />, <Users size={20} />, <Network size={20} />, <HardDrive size={20} />
  ];

  const redIcons = [
    <Key size={20} />, <Shield size={20} />, <Server size={20} />, <Database size={20} />,
    <Users size={20} />, <Key size={20} />, <Network size={20} />, <HardDrive size={20} />
  ];

  return (
    <section id="how-it-works" className="how-it-works-section section">
      <div className="container">
        <div className="text-center" style={{marginBottom: '4rem'}}>
          <h2 className="section-title">The Deception Process</h2>
          <p className="text-muted mx-auto" style={{maxWidth: '600px'}}>
            How MIRAGE creates a high-uncertainty environment that disrupts the stable ground truth attackers depend on.
          </p>
        </div>

        <div className="process-layout">
          {/* Explanation Text */}
          <div className="process-steps">
            <div className={`process-step ${animationPhase === 0 ? 'active' : ''}`}>
              <div className="step-number mono">01</div>
              <div>
                <h3>Real Network Mapping</h3>
                <p>An established, valid network is mapped by the adversary during the reconnaissance phase. They believe they have found the true path.</p>
              </div>
            </div>
            
            <div className={`process-step ${animationPhase === 1 ? 'active' : ''}`}>
              <div className="step-number mono">02</div>
              <div>
                <h3>Imposing the Deception Layer</h3>
                <p>MIRAGE overlays a second, falsified network of honeytokens, decoys, and deceptive paths, mimicking the true map perfectly.</p>
              </div>
            </div>

            <div className={`process-step ${animationPhase === 2 ? 'active' : ''}`}>
              <div className="step-number mono">03</div>
              <div>
                <h3>The Perceived Environment</h3>
                <p>The adversary is isolated. The combined deceptive data points are left without real connections, trapping them in a mirage while sounding a silent alarm.</p>
              </div>
            </div>
          </div>

          {/* The Animation */}
          <div className="process-visual">
            <div className={`animation-container phase-${animationPhase}`}>
              <div className="network-grid">
                
                {/* Connections SVG - Base layer */}
                <svg className="connections-svg" width="100%" height="100%">
                  <g className="blue-lines">
                    <line x1="20%" y1="20%" x2="50%" y2="10%" />
                    <line x1="20%" y1="20%" x2="40%" y2="15%" />
                    <line x1="40%" y1="15%" x2="50%" y2="30%" />
                    <line x1="50%" y1="10%" x2="50%" y2="30%" />
                    <line x1="50%" y1="30%" x2="80%" y2="25%" />
                    <line x1="50%" y1="30%" x2="30%" y2="60%" />
                    <line x1="30%" y1="60%" x2="60%" y2="70%" />
                    <line x1="60%" y1="70%" x2="80%" y2="75%" />
                    <line x1="80%" y1="75%" x2="80%" y2="25%" />
                    <line x1="80%" y1="75%" x2="80%" y2="90%" />
                    <line x1="60%" y1="70%" x2="40%" y2="85%" />
                    <line x1="40%" y1="85%" x2="30%" y2="60%" />
                    <line x1="20%" y1="20%" x2="45%" y2="45%" />
                    <line x1="45%" y1="45%" x2="80%" y2="25%" />
                    <line x1="45%" y1="45%" x2="85%" y2="45%" />
                  </g>
                  <g className="red-lines">
                    {/* r1 to r0 */}
                    <line x1="20%" y1="25%" x2="30%" y2="40%" />
                    {/* r1 to r5 */}
                    <line x1="20%" y1="25%" x2="15%" y2="60%" />
                    {/* r0 to r5 */}
                    <line x1="30%" y1="40%" x2="15%" y2="60%" />
                    {/* r0 to r2 */}
                    <line x1="30%" y1="40%" x2="65%" y2="35%" />
                    {/* r0 to r6 */}
                    <line x1="30%" y1="40%" x2="25%" y2="75%" />
                    {/* r2 to r7 */}
                    <line x1="65%" y1="35%" x2="85%" y2="55%" />
                    {/* r2 to r4 */}
                    <line x1="65%" y1="35%" x2="60%" y2="90%" />
                    {/* r2 to r6 */}
                    <line x1="65%" y1="35%" x2="25%" y2="75%" />
                    {/* r7 to r4 */}
                    <line x1="85%" y1="55%" x2="60%" y2="90%" />
                    {/* r6 to r4 */}
                    <line x1="25%" y1="75%" x2="60%" y2="90%" />
                    {/* r6 to r3 */}
                    <line x1="25%" y1="75%" x2="20%" y2="85%" />
                    {/* r5 to r3 */}
                    <line x1="15%" y1="60%" x2="20%" y2="85%" />
                  </g>
                </svg>

                {/* Blue Nodes */}
                {blueIcons.map((icon, i) => (
                  <div key={`blue-${i}`} className={`node node-blue node-${i}`}>
                    {icon}
                  </div>
                ))}

                {/* Red Nodes */}
                {redIcons.map((icon, i) => (
                  <div key={`red-${i}`} className={`node node-red node-r-${i}`}>
                    {icon}
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
