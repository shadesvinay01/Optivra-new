import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | Optivra",
  description:
    "Optivra's refund and cancellation policy for AI consulting, product engineering, and managed service engagements.",
};

export default function RefundPolicyPage() {
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
          Refund & Cancellation Policy
        </h1>
        <p className="text-gray-500 text-sm mb-16">
          Last updated: January 2025
        </p>

        <div className="space-y-12">
          {[
            {
              title: "1. General Principles",
              content:
                "Optivra delivers high-value AI consulting, product engineering, and managed technology services. Due to the nature of professional services, where time, expertise, and resources are invested immediately upon project commencement, our refund policy is structured around project milestones and deliverables rather than a flat-rate return window.",
            },
            {
              title: "2. Project Cancellation",
              content:
                "Clients may cancel an engagement at any time by providing written notice to hello@optivra.in. Upon cancellation:\n\n• Work completed up to the date of cancellation notice will be billed at the agreed project rate.\n• Any prepaid amounts for work not yet commenced will be refunded within 14 business days.\n• Cancellations made within 48 hours of project kick-off are subject to a 10% administrative fee on the total contract value.",
            },
            {
              title: "3. Milestone-Based Refunds",
              content:
                "For milestone-based projects:\n\n• Milestone payments are non-refundable once the milestone deliverable has been approved or deemed accepted by the client.\n• If a milestone deliverable does not meet the agreed specifications, Optivra will, at its discretion, revise the deliverable at no additional cost or provide a partial refund proportional to the unmet scope.\n• Approval of a milestone by the client constitutes acceptance of that deliverable.",
            },
            {
              title: "4. Retainer & Monthly Services",
              content:
                "For monthly retainer engagements:\n\n• Monthly retainer fees are billed in advance and are non-refundable once the billing period has commenced.\n• Clients may cancel monthly retainers with 30 days written notice. No refund will be issued for the current billing month.\n• Cancellations made with less than 30 days notice will be charged for the following month's retainer as a notice period fee.",
            },
            {
              title: "5. Dispute Resolution",
              content:
                "In the event of a billing dispute, clients must notify Optivra in writing within 10 business days of the invoice date. Optivra will investigate and respond within 5 business days. Disputes are resolved through good-faith negotiation first. If no resolution is reached, disputes will be referred to arbitration in accordance with the Indian Arbitration and Conciliation Act, 1996, in the jurisdiction of Kolkata, West Bengal, India.",
            },
            {
              title: "6. Non-Refundable Items",
              content:
                "The following are strictly non-refundable:\n\n• Discovery and scoping sessions that have been completed.\n• Third-party costs incurred on behalf of the client (API costs, cloud infrastructure, software licenses, etc.).\n• Completed and approved design, architecture, or strategy documents.",
            },
            {
              title: "7. How to Request a Refund",
              content:
                "To request a refund or initiate a cancellation, please email us at hello@optivra.in with your company name, project name, and the specific reason for your request. Our accounts team will respond within 3 business days.",
            },
          ].map((section, i) => (
            <div key={i} className="border-t border-white/10 pt-8">
              <h2 className="text-xl font-sans font-bold text-white mb-4">
                {section.title}
              </h2>
              <p className="text-gray-400 leading-relaxed font-light whitespace-pre-line">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <p className="text-gray-500 text-sm">
            For any questions about this policy, contact{" "}
            <a href="mailto:hello@optivra.in" className="text-primary hover:underline">
              hello@optivra.in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
