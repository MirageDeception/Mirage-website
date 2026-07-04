import './Platform.css';

export function Platform() {
  return (
    <section id="platform" className="platform-section section">
      <div className="container">
        <div className="platform-header text-center">
          <h2 className="section-title">How <span className="text-gradient">MIRAGE</span> is Different</h2>
          <p className="text-muted" style={{maxWidth: '750px', margin: '0 auto'}}>
            An open-source, community-driven deception framework designed to secure your most critical attack surfaces without relying on generic anomaly detection.
          </p>
        </div>

        {/* OLD SAAS-STYLE LAYOUT COMMENTED OUT
        <div className="platform-content">
          <div className="platform-row">
            <div className="platform-text">
              <div className="platform-icon-badge blue">
                <Cloud size={24} />
              </div>
              <h3>Cloud-Native Deception Packs</h3>
              <p className="text-muted">
                Agentless, multi-cloud threat detection. Deploy and monitor decoy workloads, fake S3 buckets, and deceptive IAM roles across AWS, Azure, and GCP instantly using our open-source Terraform modules.
              </p>
              <a href="#" className="platform-link">Explore Cloud Packs &rarr;</a>
            </div>
            <div className="platform-image-placeholder">
              <img src={`${import.meta.env.BASE_URL}cloud-sec.png`} alt="Cloud Security" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>

          <div className="platform-row reverse">
            <div className="platform-text">
              <div className="platform-icon-badge purple">
                <Users size={24} />
              </div>
              <h3>Identity & Credential Traps</h3>
              <p className="text-muted">
                Stop lateral movement and credential theft in its tracks. We embed honeytokens, fake service accounts, and deceptive privilege escalation paths. Attackers steal the wrong keys, every time.
              </p>
              <a href="#" className="platform-link">Explore Identity Traps &rarr;</a>
            </div>
            <div className="platform-image-placeholder">
              <img src={`${import.meta.env.BASE_URL}ad.png`} alt="Identity Protection" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>

          <div className="platform-row">
            <div className="platform-text">
              <div className="platform-icon-badge red">
                <Activity size={24} />
              </div>
              <h3>High-Fidelity Telemetry</h3>
              <p className="text-muted">
                Gain real-time insights from the adversary's own actions. Our centralized open-source Control Plane aggregates telemetry from every decoy interaction, providing your SOC with actionable IOCs and TTPs with near-zero false positives.
              </p>
              <a href="#" className="platform-link">Explore The Control Plane &rarr;</a>
            </div>
            <div className="platform-image-placeholder">
              <img src={`${import.meta.env.BASE_URL}ti.png`} alt="Threat Intelligence" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
        */}

        <div className="comparison-table-container glass-panel">
          <div className="table-responsive">
            <table className="mirage-comparison-table">
              <thead>
                <tr>
                  <th>Feature / Aspect</th>
                  <th className="col-traditional">Existing Enterprise Deception</th>
                  <th className="col-mirage text-gradient">The MIRAGE Framework</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="row-title">Approach & Strategy</td>
                  <td>Deploys single, isolated decoy resources (basic honeypots).</td>
                  <td className="highlight-cell"><strong>Deception Mesh & Honey Paths.</strong> We surround the attacker with a dynamic, interconnected web of lucrative fake paths.</td>
                </tr>
                <tr>
                  <td className="row-title">Core Objective</td>
                  <td>Focuses solely on detection and sending alerts to your SOC.</td>
                  <td className="highlight-cell"><strong>Derail & Exhaust.</strong> We don't just detect; we actively derail the attacker into endless labyrinths, wasting their time and resources.</td>
                </tr>
                <tr>
                  <td className="row-title">Philosophy & Code</td>
                  <td>Proprietary, Black-Box Software. You cannot see how the detection logic actually works.</td>
                  <td className="highlight-cell"><strong>Open-Source & Transparent.</strong> Built for the community. Audit the code, improve it, and trust the telemetry.</td>
                </tr>
                <tr>
                  <td className="row-title">Deployment</td>
                  <td>Heavy agents, complex integrations, and vendor-managed appliances.</td>
                  <td className="highlight-cell"><strong>Agentless & Native.</strong> Deployed seamlessly via Terraform modules directly into your existing environments <em>(currently for AWS only)</em>.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
