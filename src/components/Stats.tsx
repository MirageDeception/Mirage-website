import { AlertCircle, TrendingUp, EyeOff } from 'lucide-react';
import './Stats.css';

export function Stats() {
  return (
    <section className="stats-section section">
      <div className="container">
        <div className="stats-header text-center">
          <h2 className="section-title">The Deception Gap</h2>
          <p className="text-muted">While cloud attacks grow more sophisticated, awareness of proactive defense remains dangerously stagnant.</p>
        </div>

        <div className="stats-grid">
          {/* Stat 1 */}
          <div className="stat-card">
            <div className="stat-icon-wrapper">
              <TrendingUp size={24} />
            </div>
            <div className="stat-value">95%</div>
            <h3 className="stat-title">Rise in Cloud Exploitation</h3>
            <p className="stat-desc">Observed cloud exploitation cases have nearly doubled year-over-year as attackers bypass traditional security boundaries.</p>
          </div>

          {/* Stat 2 */}
          <div className="stat-card">
            <div className="stat-icon-wrapper">
              <AlertCircle size={24} />
            </div>
            <div className="stat-value">277 Days</div>
            <h3 className="stat-title">Average Breach Lifecycle</h3>
            <p className="stat-desc">It takes organizations an average of nearly 9 months to identify and contain a data breach using traditional reactive monitoring.</p>
          </div>

          {/* Stat 3 */}
          <div className="stat-card">
            <div className="stat-icon-wrapper">
              <EyeOff size={24} />
            </div>
            <div className="stat-value">90%</div>
            <h3 className="stat-title">Reduction in Dwell Time</h3>
            <p className="stat-desc">Organizations deploying active deception networks catch lateral movement instantly, slashing attacker dwell time to near zero.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
