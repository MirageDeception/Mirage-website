# MIRAGE+ Product & Architecture Blueprint

## 1. What We Are Doing (The Vision)
We are transitioning MIRAGE from an open-source research initiative (PoC) into **MIRAGE+**, a fully operational, enterprise-grade SaaS platform. 

MIRAGE+ automates the deployment, management, and monitoring of a "Deception Fabric" across cloud environments (starting exclusively with AWS). It shifts the security paradigm from reactive alerts to proactive deception, creating uncertainty for attackers and drastically reducing dwell time. 

### Future Domains
Once the AWS foundation is perfected, the platform will scale to cover:
* Multi-Cloud (Azure, GCP)
* Active Directory & Identity Protection
* Network Security & Lateral Movement
* Threat Intelligence (LLM-driven alert summarization)
* AI Deception (e.g., honeypot chatbots that sandbox attackers)

---

## 2. How We Are Doing It (The User Flow & Implementation)

The platform relies on a seamless, automated user experience driven by a central web portal.

### Phase A: Authentication & Onboarding
1. **SSO Integration:** Security analysts log into the MIRAGE+ web portal via their enterprise Identity Provider (e.g., Okta).
2. **Deploying the Brain:** Upon first login, the user is prompted to set up the central "Monitoring Brain."
3. **Authentication:** The user provides the target AWS Account ID, an IAM role, and access keys. 
4. **Automation:** MIRAGE+ uses these credentials to automatically deploy the Hub infrastructure (EventBus, processing Lambdas, SNS) into that main account.

### Phase B: Deploying the Mesh (Spoke Accounts)
1. **Catalog Selection:** Users browse a catalog of deceptive "Attack Paths" in the portal.
2. **One-Click Deploy:** Users select multiple attack paths to deploy into their target Spoke accounts.
3. **Decoy Deployment:** MIRAGE+ dynamically generates and deploys the infrastructure (CloudFormation/Terraform) to spin up the exact decoy resources (S3 buckets, IAM roles, SSM parameters) in the Spoke account.

### Phase C: Operations Dashboard
* A sleek, premium UI where analysts can view the status of all deployed decoys (Online/Offline) across all accounts.
* **Toggling Paths:** If an analyst wants to disable an attack path, MIRAGE+ handles this cleanly via backend API calls (either disabling rules or deleting the specific decoy stacks) without disrupting the rest of the fabric.

---

## 3. The Depth of Implementation (The AWS Architecture)

To ensure maximum scalability and avoid AWS limits, we are using a highly decoupled, Hub-and-Spoke EventBridge architecture.

### The Spoke (Monitored Account) - "The Resource Filter"
* **Concept:** Acts as a strict whitelist. It guarantees that no background AWS noise leaves the account—only interactions with confirmed decoys are forwarded.
* **Implementation:** Instead of one rule per attack path, MIRAGE+ dynamically constructs **one consolidated EventBridge rule per account** (e.g., `event forwarding for critical resources_{account}_{team}`).
* **Depth:** When a user deploys 40 decoys, all 40 ARNs/Resource Names are injected into the `EventPattern` of this single forwarding rule. The rule targets the Global EventBus in the Hub account.

### The Hub (Monitoring Brain) - "The Action Filter"
* **Concept:** Acts as the intelligence engine. It categorizes incoming decoy interactions by service type and ensures only truly malicious API calls trigger alerts.
* **Implementation:** The Hub account uses **Service-Specific Rules** attached to the Global EventBus, rather than scenario-specific rules.
* **Depth:** 
    * A rule is created per AWS service (e.g., S3, Secrets Manager, STS).
    * The rule filters on both `source` AND an array of actionable `eventName`s.
    * Example: For S3, the rule listens for `source: aws.s3` AND `eventName: ["GetObject", "ListBucket"]`.
    * If an event matches, it triggers the Event Processor Lambda, which formats a high-fidelity alert and sends it to SNS/Dashboard.

### Why This Architecture?
By separating the "Resource Identification" (Spoke) from the "Action Identification" (Hub), the system is infinitely scalable. We don't have to constantly update the Hub account every time a new decoy is deployed in a Spoke account. The Hub simply routes events based on service taxonomy, keeping the monitoring brain lightweight and resilient.
