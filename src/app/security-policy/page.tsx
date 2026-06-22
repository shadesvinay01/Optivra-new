import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Security Policy | Optivra",
  description:
    "Optivra's comprehensive security policy covering data encryption, access control, incident response, and compliance standards.",
};

export default function SecurityPolicyPage() {
  return (
    <div className="bg-black min-h-screen text-white">
      <div className="container mx-auto px-6 py-24 max-w-4xl">
        <Link
          href="/"
          className="text-gray-600 hover:text-primary text-xs tracking-widest uppercase transition-colors mb-12 block"
        >
          ← Back to Home
        </Link>

        <p className="text-[10px] tracking-[0.4em] uppercase text-primary font-bold mb-4">
          Legal
        </p>
        <h1 className="text-4xl md:text-6xl font-sans font-black text-white mb-4">
          Security Policy
        </h1>
        <p className="text-gray-500 text-sm mb-16">
          Last updated: January 2025
        </p>

        <div className="prose prose-invert max-w-none space-y-12">
          {[
            {
              title: "1. Data Encryption",
              content:
                "All data transmitted between clients and Optivra systems is encrypted using TLS 1.3 or higher. Data at rest is encrypted using AES-256. We use industry-standard cryptographic protocols to ensure the confidentiality and integrity of all client data at every stage of processing and storage.",
            },
            {
              title: "2. Access Control",
              content:
                "Optivra enforces strict role-based access control (RBAC) across all internal systems. Access to client data is granted on a need-to-know basis and is regularly audited. Multi-factor authentication (MFA) is mandatory for all team members with access to production environments. We conduct quarterly access reviews to revoke unnecessary permissions.",
            },
            {
              title: "3. Data Isolation",
              content:
                "Client data is logically isolated within our infrastructure. We maintain strict data separation policies to ensure that data belonging to one client is never accessible to another. All production environments use dedicated, isolated compute resources where required by contract.",
            },
            {
              title: "4. Incident Response",
              content:
                "Optivra maintains a documented Incident Response Plan (IRP). In the event of a security incident, we commit to notifying affected clients within 72 hours of discovery. Our incident response team conducts root cause analysis and provides detailed post-incident reports to affected parties. All incidents are logged and reviewed to improve our defenses.",
            },
            {
              title: "5. Data Retention & Deletion",
              content:
                "Client data is retained only for the duration required to deliver contracted services, or as specified in the Master Service Agreement (MSA). Upon contract termination or client request, all client data is securely purged from our systems within 30 days. We provide written confirmation of data deletion upon request.",
            },
            {
              title: "6. Third-Party Security",
              content:
                "All third-party vendors and sub-processors used by Optivra are vetted for security compliance. We require vendors handling client data to maintain at minimum SOC 2 Type II certification. We maintain an up-to-date register of all sub-processors and can provide this upon request.",
            },
            {
              title: "7. Vulnerability Management",
              content:
                "Optivra conducts regular internal security assessments and participates in periodic third-party penetration testing. Critical vulnerabilities are patched within 48 hours of discovery. High and medium severity issues are remediated within 14 and 30 days respectively. We maintain a responsible disclosure policy for external security researchers.",
            },
            {
              title: "8. Physical Security",
              content:
                "Our engineering operations run primarily on Tier-1 cloud infrastructure providers (AWS, GCP, Azure) that maintain SOC 2 Type II, ISO 27001, and PCI DSS Level 1 certifications. All physical access to data centers is controlled by our cloud providers' security protocols.",
            },
          ].map((section, i) => (
            <div key={i} className="border-t border-white/10 pt-8">
              <h2 className="text-xl font-sans font-bold text-white mb-4">
                {section.title}
              </h2>
              <p className="text-gray-400 leading-relaxed font-light">
                {section.content}
              </p>
            </div>
          ))}

          <div className="border-t border-white/10 pt-8">
            <h2 className="text-xl font-sans font-bold text-white mb-4">
              9. Contact Our Security Team
            </h2>
            <p className="text-gray-400 leading-relaxed font-light mb-4">
              To report a security vulnerability or for any security-related inquiries, please contact us at:
            </p>
            <a
              href="mailto:hello@optivra.in"
              className="text-primary font-bold hover:underline"
            >
              hello@optivra.in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
