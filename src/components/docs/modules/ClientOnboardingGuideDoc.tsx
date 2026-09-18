"use client";

import React from "react";
import { CheckCircle2, MessageSquare, Shield, Clock, Rocket } from "lucide-react";

export default function ClientOnboardingGuideDoc() {
  return (
    <div className="space-y-8 text-gray-900 leading-relaxed font-sans text-xs max-w-[800px] mx-auto bg-white p-2">
      <div className="bg-slate-900 text-white rounded-2xl p-8 space-y-2 border border-slate-800">
        <span className="px-3 py-1 bg-[#D4AF37] text-slate-950 text-xs font-bold rounded uppercase tracking-widest">
          OPTIVRA • CLIENT ENABLEMENT PLAYBOOK
        </span>
        <h1 className="text-3xl font-black">Client Onboarding & Project Enablement Guide</h1>
        <p className="text-gray-300">Welcome to Optivra! Here is your step-by-step roadmap for kickstarting project execution smoothly.</p>
      </div>

      <div className="space-y-6">
        <div className="p-4 border border-gray-200 rounded-xl bg-gray-50 space-y-2">
          <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-slate-900 text-[#D4AF37] flex items-center justify-center text-xs">1</span>
            Step 1: Team Allocation & Project Kickoff
          </div>
          <p className="text-gray-600 pl-8">
            Following agreement execution, your dedicated engineering team and technical lead are assigned. We schedule a Kickoff Call to align on goals, scope, timelines, and access privileges.
          </p>
        </div>

        <div className="p-4 border border-gray-200 rounded-xl bg-gray-50 space-y-2">
          <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-slate-900 text-[#D4AF37] flex items-center justify-center text-xs">2</span>
            Step 2: Communication & Collaboration Channels
          </div>
          <div className="pl-8 space-y-1 text-gray-600">
            <p>• <strong>Communication Channel:</strong> Dedicated private channel (Slack/Teams/Email) established for regular updates.</p>
            <p>• <strong>Task Management Access:</strong> Live task tracking board (Jira/Linear) for sprint transparency.</p>
            <p>• <strong>Sprint Demos & Reviews:</strong> Scheduled regular reviews to demonstrate progress and gather feedback.</p>
          </div>
        </div>

        <div className="p-4 border border-gray-200 rounded-xl bg-gray-50 space-y-2">
          <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-slate-900 text-[#D4AF37] flex items-center justify-center text-xs">3</span>
            Step 3: Technical Access & Infrastructure Checklist
          </div>
          <div className="pl-8 grid grid-cols-2 gap-2 text-gray-600">
            <div>✓ Code Repository Access</div>
            <div>✓ Cloud Environment Access Permissions</div>
            <div>✓ Design Assets & Wireframes</div>
            <div>✓ Required API Credentials & Staging Keys</div>
          </div>
        </div>
      </div>
    </div>
  );
}

