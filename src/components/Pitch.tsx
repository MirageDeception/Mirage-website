import { Terminal, GitBranch, Mail } from 'lucide-react';
import './Pitch.css';

export function Pitch() {
  return (
    <section id="pitch" className="pitch-section section">
      <div className="container">
        <div className="pitch-box glass-panel">
          <div className="pitch-content">
            <Terminal className="icon-glow mb-4" size={32} />
            <h2 className="section-title">
              Help Build the <span className="text-gradient">Future of Defense</span>
            </h2>
            <p className="pitch-desc">
              We are assembling a team of elite security engineers, cloud architects, and offensive researchers. If you believe in proactive disruption over reactive alerts, join the mission to build the ultimate deception mesh.
            </p>
            
            <div className="pitch-actions">
              <a href="https://github.com/arham7006/Project-Mirage" target="_blank" rel="noopener noreferrer" className="btn btn-primary mono">
                <GitBranch size={18} />
                Contribute on GitHub
              </a>
              <a href="#" className="btn btn-secondary mono">
                <Mail size={18} />
                Contact the Team
              </a>
            </div>
          </div>
          <div className="pitch-bg-glow"></div>
        </div>
      </div>
    </section>
  );
}
