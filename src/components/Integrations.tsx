import './Integrations.css';

export function Integrations() {
  return (
    <section id="integrations" className="integrations-section section">
      <svg style={{ width: 0, height: 0, position: 'absolute' }} aria-hidden="true" focusable="false">
        <filter id="solid-white-outline">
          <feMorphology in="SourceAlpha" result="dilated" operator="dilate" radius="2" />
          <feFlood floodColor="#ffffff" floodOpacity="1" result="color" />
          <feComposite in="color" in2="dilated" operator="in" result="outline" />
          <feMerge>
            <feMergeNode in="outline" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </svg>
      <div className="container">
        <h2 className="integrations-title">
          Available & Upcoming Deception Packs
        </h2>
        
        <div className="integrations-grid">
          <div className="integration-item active-integration">
            <img src="/aws-logo.webp" alt="AWS" className="integration-image active-integration" />
          </div>
          <div className="integration-item">
            <img src="/azure.png" alt="Azure" className="integration-image" />
          </div>
          <div className="integration-item">
            <img src="/google-cloud.png" alt="Google Cloud" className="integration-image" />
          </div>
          <div className="integration-item">
            <img src="/ms-ad.png" alt="Active Directory" className="integration-image" />
          </div>
          <div className="integration-item">
            <img src="/kubernetes.png" alt="Kubernetes" className="integration-image" />
          </div>
        </div>
      </div>
    </section>
  );
}
