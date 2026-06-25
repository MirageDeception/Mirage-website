import { Database, Lock, Server, ShieldCheck } from 'lucide-react';
import './Architecture.css';

export function Architecture() {
  return (
    <section className="architecture-section section">
      <div className="container">
        <h2 className="section-title text-center">
          <span className="text-gradient">MIRAGE</span> Architecture Blueprint
        </h2>
        
        <div className="architecture-grid">
          {/* Tier 1 */}
          <div className="tier control-plane glass-panel">
            <div className="tier-badge mono">TIER 01</div>
            <h3>The Brain (Control Plane)</h3>
            <p className="text-muted">An isolated, highly secure environment that ingests telemetry and triggers alerts. Attackers never see this layer.</p>
            
            <div className="tier-content">
              <div className="arch-node">
                <ShieldCheck className="icon-glow" size={20} />
                <span>Monitoring Engine</span>
              </div>
              <div className="arch-node">
                <Database className="icon-glow" size={20} />
                <span>Log Aggregation</span>
              </div>
            </div>
          </div>

          <div className="connection-lines">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>

          {/* Tier 2 */}
          <div className="tier data-plane glass-panel">
            <div className="tier-badge mono">TIER 02</div>
            <h3>The Trap Zone (Data Plane)</h3>
            <p className="text-muted">Decoys are deployed directly into your production member accounts, blending in perfectly with real infrastructure.</p>
            
            <div className="mesh-grid">
              <div className="arch-node target-node">
                <Lock size={16} />
                <span>Decoy IAM Roles</span>
              </div>
              <div className="arch-node target-node">
                <Server size={16} />
                <span>Trapped S3 Buckets</span>
              </div>
              <div className="arch-node target-node">
                <Database size={16} />
                <span>Fake Databases</span>
              </div>
              <div className="arch-node target-node empty-node">
                <span>Honeytokens</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
