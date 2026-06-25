# MIRAGE+ MVP Implementation Plan (Showcase)

To quickly build a high-impact MVP that you can use to showcase the platform's capabilities, we need to prioritize speed of development and visual excellence while still proving the core AWS integration works.

## 1. MVP Technology Recommendation: Next.js

For an MVP showcase, **Next.js is absolutely the best choice**. 

**Why?**
1. **Speed:** We can build the frontend portal and the backend AWS deployment logic in the exact same codebase simultaneously. No need to manage separate servers or complex AWS API Gateways yet.
2. **Showcase Ready:** It compiles quickly and can be run locally or hosted instantly on Vercel for demonstrations.
3. **Handling the AWS Catch:** For the MVP, when we trigger a CloudFormation deployment (which takes minutes), we will simply have the frontend poll the backend every few seconds to check the stack status. It is a perfectly acceptable workaround for an MVP and keeps the architecture simple.

## 2. The MVP Scope (What we will actually build)

To have a functioning showcase, we will build these core flows:

### A. The "Wow Factor" Dashboard
* A premium, dark-mode dashboard (Vanilla CSS) that looks like a high-end security operations center.
* A mocked-up overview page showing active alerts and a world map or node-graph of the deception fabric (to look impressive during a showcase).

### B. The Deployment Flow (Real AWS Integration)
* **Hub Deployment:** A functional setup page where you input an AWS Account ID and Role ARN. The Next.js backend will use the AWS SDK to deploy the actual `monitoring-brain.yaml` CloudFormation stack.
* **The Mesh Catalog:** A page listing a few core attack paths (e.g., S3 Bucket Decoy, IAM Role Decoy). You click deploy, and it pushes the resources to the spoke account.

### C. Live Monitoring (Polling)
* A status page that polls AWS CloudFormation to show when the decoys shift from "Deploying" to "Online".

## 3. Execution Steps

1. **Scaffold:** Run `npx create-next-app` inside the `Mirage+ for enterprise` folder.
2. **Styling:** Set up `index.css` with the premium dark theme and glassmorphism utilities.
3. **Views:** Build the static UI for the Dashboard, Catalog, and Setup flows.
4. **AWS SDK:** Integrate `aws-sdk/client-cloudformation` into Next.js API routes to trigger actual deployments.
