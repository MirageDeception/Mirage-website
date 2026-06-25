import { Cloud, CheckCircle, Users, Box } from 'lucide-react';
import './Roadmap.css';

export function Roadmap() {
  const steps = [
    {
      title: "AWS Native Deployment",
      desc: "Fully functional 2-tier automated deployment mesh.",
      status: "completed",
      icon: <CheckCircle className="status-icon" size={24} />
    },
    {
      title: "Azure Expansion",
      desc: "Native integration of deception architecture into Microsoft Azure.",
      status: "upcoming",
      icon: <Cloud className="status-icon" size={24} />
    },
    {
      title: "GCP Integration",
      desc: "Expanding the dynamic mesh to Google Cloud Platform.",
      status: "upcoming",
      icon: <Cloud className="status-icon" size={24} />
    },
    {
      title: "Active Directory Environments",
      desc: "Deploying lucrative AD traps and privilege escalation decoys.",
      status: "upcoming",
      icon: <Users className="status-icon" size={24} />
    },
    {
      title: "Multi-Cloud Platform (MCP) Decoys",
      desc: "Unified deception fabric across all major cloud providers.",
      status: "upcoming",
      icon: <Box className="status-icon" size={24} />
    }
  ];

  return (
    <section className="roadmap-section section">
      <div className="container">
        <h2 className="section-title text-center">
          Expansion <span className="text-gradient">Roadmap</span>
        </h2>
        
        <div className="timeline">
          {steps.map((step, index) => (
            <div key={index} className={`timeline-item ${step.status}`}>
              <div className="timeline-marker">
                {step.icon}
                {index < steps.length - 1 && <div className="timeline-line"></div>}
              </div>
              <div className="timeline-content glass-panel">
                <h3 className="mono">{step.title}</h3>
                <p className="text-muted">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
