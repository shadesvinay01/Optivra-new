"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Play, Zap, DollarSign, Users, Activity, MessageSquare, Megaphone, 
  Calendar, BookOpen, FileText, Video, Phone, BarChart3, CheckCircle2,
  ChevronRight, CircleDashed, TerminalSquare, Bell
} from "lucide-react";

type AgentStatus = "Live" | "Beta" | "Building";

interface WorkflowStep {
  text: string;
  duration: number;
}

interface Agent {
  id: string;
  name: string;
  status: AgentStatus;
  icon: any;
  description: string;
  trigger: string;
  workflow: WorkflowStep[];
  result: { title: string, desc: string };
}

const AGENTS: Agent[] = [
  {
    id: "sales",
    name: "Sales Agent",
    status: "Live",
    icon: Zap,
    description: "Qualifies leads, books meetings, and updates your CRM autonomously.",
    trigger: "New Inbound Lead via Web Form",
    workflow: [
      { text: "Enriching lead data via Clearbit & LinkedIn...", duration: 1200 },
      { text: "Scoring lead based on ICP parameters... [Score: 92/100]", duration: 1500 },
      { text: "Updating CRM pipeline value to $45,000...", duration: 1000 },
      { text: "Drafting personalised email & proposing meeting times...", duration: 1800 },
      { text: "Email sent. Awaiting response.", duration: 500 }
    ],
    result: { title: "Meeting Proposed", desc: "Sent custom intro to Acme Corp for Thursday 2 PM." }
  },
  {
    id: "support",
    name: "Support Agent",
    status: "Live",
    icon: MessageSquare,
    description: "Resolves L1/L2 tickets and handles customer inquiries 24/7.",
    trigger: "Ticket #8492: 'API Rate Limit Error'",
    workflow: [
      { text: "Analysing ticket context and user subscription tier...", duration: 1000 },
      { text: "Querying internal engineering wiki for error code...", duration: 1500 },
      { text: "Identified solution: 'Upgrade to Enterprise for higher limits.'", duration: 1200 },
      { text: "Generating response and applying temporary limit bump...", duration: 1500 },
      { text: "Ticket resolved. Customer notified.", duration: 500 }
    ],
    result: { title: "Ticket Resolved", desc: "Response sent and temporary limit increase applied automatically." }
  },
  {
    id: "marketing",
    name: "Marketing Agent",
    status: "Live",
    icon: Megaphone,
    description: "Drafts campaigns, schedules posts, and optimises ad spend.",
    trigger: "Q3 Campaign Launch Initiated",
    workflow: [
      { text: "Analysing historical ad performance data...", duration: 1500 },
      { text: "Generating 5 A/B test ad copies tailored to SaaS audience...", duration: 2000 },
      { text: "Allocating $10k budget evenly across LinkedIn and Google...", duration: 1200 },
      { text: "Scheduling posts for optimal engagement times...", duration: 1000 },
      { text: "Campaign live. Monitoring ROAS.", duration: 500 }
    ],
    result: { title: "Campaign Live", desc: "$10k allocated across 5 A/B tests on LinkedIn & Google." }
  },
  {
    id: "hr",
    name: "HR Agent",
    status: "Beta",
    icon: Users,
    description: "Screens resumes, schedules interviews, and answers policy FAQs.",
    trigger: "New Application Received: Senior Engineer",
    workflow: [
      { text: "Parsing resume and extracting key skills...", duration: 1200 },
      { text: "Cross-referencing skills with job description... [Match: 88%]", duration: 1500 },
      { text: "Sending automated coding assessment link...", duration: 1000 },
      { text: "Coordinating calendar availability with hiring managers...", duration: 1800 },
      { text: "Interview scheduled for Tuesday 10 AM.", duration: 500 }
    ],
    result: { title: "Interview Scheduled", desc: "Candidate booked for Tuesday 10 AM technical screen." }
  },
  {
    id: "finance",
    name: "Finance Agent",
    status: "Beta",
    icon: DollarSign,
    description: "Generates invoices, tracks expenses, and reconciles accounts.",
    trigger: "Monthly Retainer Contract Signed (Acme Corp)",
    workflow: [
      { text: "Extracting payment terms from signed contract...", duration: 1200 },
      { text: "Generating $15,000 PDF invoice...", duration: 1500 },
      { text: "Syncing transaction record with Xero/Quickbooks...", duration: 1000 },
      { text: "Sending invoice to accounts@acmecorp.com...", duration: 1200 },
      { text: "Invoice sent. Setting 7-day payment reminder.", duration: 500 }
    ],
    result: { title: "Invoice Generated", desc: "$15,000 invoice created, synced to Xero, and emailed to client." }
  },
  {
    id: "operations",
    name: "Operations Agent",
    status: "Building",
    icon: Activity,
    description: "Monitors supply chain, tracks inventory, and alerts on delays.",
    trigger: "Shipment #9284 Delayed at Port",
    workflow: [
      { text: "Detecting anomaly in logistics tracking API...", duration: 1200 },
      { text: "Calculating ETA impact on downstream manufacturing...", duration: 1800 },
      { text: "Identifying alternative local suppliers for affected parts...", duration: 2000 },
      { text: "Drafting urgent supplier RFQ...", duration: 1200 },
      { text: "Alert routed to Supply Chain Manager.", duration: 500 }
    ],
    result: { title: "Alert Routed", desc: "Impact calculated and alternative supplier RFQ sent to Manager." }
  },
  {
    id: "exec",
    name: "Executive Assistant",
    status: "Live",
    icon: Calendar,
    description: "Manages your inbox, calendar, and prioritises urgent tasks.",
    trigger: "Urgent Meeting Request Received",
    workflow: [
      { text: "Scanning inbox for high-priority sender...", duration: 1000 },
      { text: "Analysing request context: 'Need to discuss board deck.'", duration: 1500 },
      { text: "Checking current calendar for 30-min opening...", duration: 1200 },
      { text: "Rescheduling internal 1:1 to accommodate request...", duration: 1500 },
      { text: "Meeting confirmed and Zoom link added.", duration: 500 }
    ],
    result: { title: "Calendar Updated", desc: "Internal 1:1 rescheduled. Board prep meeting booked with Zoom link." }
  },
  {
    id: "knowledge",
    name: "Knowledge Agent",
    status: "Live",
    icon: BookOpen,
    description: "Searches internal wikis to answer complex employee questions.",
    trigger: "Employee Query: 'How do I request parental leave?'",
    workflow: [
      { text: "Parsing query intent...", duration: 800 },
      { text: "Searching Notion/Confluence HR workspaces...", duration: 1500 },
      { text: "Synthesizing 2026 parental leave policy details...", duration: 1800 },
      { text: "Formatting step-by-step instructions...", duration: 1000 },
      { text: "Answer delivered via Slack integration.", duration: 500 }
    ],
    result: { title: "Query Answered", desc: "Policy details successfully synthesized and sent to employee via Slack." }
  },
  {
    id: "proposal",
    name: "Proposal Generator",
    status: "Live",
    icon: FileText,
    description: "Drafts tailored business proposals based on client notes.",
    trigger: "Sales Call Notes Uploaded",
    workflow: [
      { text: "Extracting client pain points from Gong transcript...", duration: 1500 },
      { text: "Selecting appropriate case studies (Healthcare sector)...", duration: 1200 },
      { text: "Generating 12-page custom slide deck...", duration: 2500 },
      { text: "Applying company branding and formatting...", duration: 1500 },
      { text: "Proposal drafted. Ready for review.", duration: 500 }
    ],
    result: { title: "Proposal Drafted", desc: "12-page customized slide deck generated for Healthcare client." }
  },
  {
    id: "meeting",
    name: "Meeting Assistant",
    status: "Live",
    icon: Video,
    description: "Joins calls, takes notes, and assigns action items to the team.",
    trigger: "Zoom Call Ended (Project Kickoff)",
    workflow: [
      { text: "Processing 45-minute audio transcript...", duration: 1500 },
      { text: "Summarizing key decisions made...", duration: 1800 },
      { text: "Extracting 6 action items and mapping to assignees...", duration: 2000 },
      { text: "Creating Jira/Linear tickets automatically...", duration: 1500 },
      { text: "Summary distributed to all attendees.", duration: 500 }
    ],
    result: { title: "Tickets Created", desc: "6 action items extracted from call and added to Linear/Jira." }
  },
  {
    id: "voice",
    name: "Voice Agent",
    status: "Beta",
    icon: Phone,
    description: "Handles inbound phone calls with human-like conversational AI.",
    trigger: "Inbound Phone Call Received",
    workflow: [
      { text: "Answering call with custom greeting...", duration: 1000 },
      { text: "Transcribing customer voice query in real-time...", duration: 1500 },
      { text: "Querying database for order status (#99201)...", duration: 1200 },
      { text: "Synthesizing voice response: 'Your order arrives tomorrow.'", duration: 1500 },
      { text: "Call completed. Summary logged in CRM.", duration: 500 }
    ],
    result: { title: "Call Handled", desc: "Customer query resolved autonomously. CRM log updated." }
  },
  {
    id: "data",
    name: "Data Analyst",
    status: "Live",
    icon: BarChart3,
    description: "Pulls metrics from databases and generates visual reports.",
    trigger: "Request: 'Show churn rate for Q2 vs Q1'",
    workflow: [
      { text: "Translating natural language to SQL query...", duration: 1200 },
      { text: "Executing query against Snowflake warehouse...", duration: 2000 },
      { text: "Calculating cohort churn variance...", duration: 1500 },
      { text: "Generating interactive bar chart...", duration: 1000 },
      { text: "Report generated and embedded in dashboard.", duration: 500 }
    ],
    result: { title: "Report Generated", desc: "Cohort churn variance calculated and bar chart embedded." }
  }
];

export default function InteractiveDemo() {
  const [selectedAgentId, setSelectedAgentId] = useState<string>(AGENTS[0].id);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(-1);
  const [realResult, setRealResult] = useState<string | null>(null);
  const logRef = useRef<HTMLDivElement>(null);

  const selectedAgent = AGENTS.find(a => a.id === selectedAgentId)!;

  // Auto-scroll the log
  useEffect(() => {
    if (logRef.current) {
      logRef.current.scrollTop = logRef.current.scrollHeight;
    }
  }, [currentStepIndex]);

  const runSimulation = async () => {
    if (isPlaying || selectedAgent.status === "Building") return;
    setIsPlaying(true);
    setCurrentStepIndex(-1);
    setRealResult(null);

    // Fire the real backend request if Marketing Agent is selected
    let backendPromise: Promise<string> | null = null;
    if (selectedAgent.id === "marketing") {
      backendPromise = fetch("http://localhost:8000/api/run-marketing-crew", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic: "Optivra AI Services" })
      })
      .then(res => res.json())
      .then(data => data.result || "No result from API.")
      .catch(err => "Failed to fetch from backend: " + err.message);
    }

    for (let i = 0; i < selectedAgent.workflow.length; i++) {
      await new Promise(r => setTimeout(r, selectedAgent.workflow[i].duration));
      setCurrentStepIndex(i);
    }

    // Wait for the real backend if it was triggered
    if (backendPromise) {
      // If the backend takes longer than the fake animation, the UI will wait here (or we could show a loader)
      const result = await backendPromise;
      setRealResult(result);
    }

    setIsPlaying(false);
  };

  const getStatusColor = (status: AgentStatus) => {
    switch (status) {
      case "Live": return "text-emerald-400 bg-emerald-400/10 border-emerald-400/20";
      case "Beta": return "text-blue-400 bg-blue-400/10 border-blue-400/20";
      case "Building": return "text-gray-400 bg-gray-400/10 border-gray-400/20";
    }
  };

  return (
    <section id="demo" className="py-24 px-6 max-w-7xl mx-auto z-10 relative">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-4">
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB]">Workforce.</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
          Select an AI agent from the directory to see how they automate complex business workflows in real time.
        </p>
      </div>

      <div className="relative flex flex-col items-center justify-center">

        {/* ── LAPTOP MOCKUP ── */}
        <div className="relative w-full max-w-5xl z-10">
          {/* Glow */}
          <div className="absolute inset-0 bg-[#D4AF37]/10 blur-[100px] rounded-full -z-10" />

          {/* Screen */}
          <div className="w-full bg-[#0a0a0a] rounded-t-[1.2rem] border border-[#2a2a2a] shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_40px_80px_rgba(0,0,0,0.8)] overflow-hidden"
               style={{ aspectRatio: "16/10" }}>
            
            {/* Browser / App traffic lights bar */}
            <div className="h-9 bg-[#050505] border-b border-white/[0.05] flex items-center px-4 justify-between shrink-0">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#28C840]" />
              </div>
              <div className="flex items-center gap-1.5 bg-white/[0.04] border border-white/[0.06] rounded-md px-3 py-0.5">
                <span className="text-[10px] text-gray-500">app.optivra.in/agents</span>
              </div>
              <div className="flex gap-3 items-center">
                <Bell className="w-3.5 h-3.5 text-gray-600" />
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#FFDF00]" />
              </div>
            </div>

            {/* App content layout */}
            <div className="flex h-[calc(100%-36px)]">
              
              {/* Agent Directory (Sidebar) */}
              <div className="w-1/3 max-w-[280px] bg-[#030303] border-r border-white/[0.05] flex flex-col shrink-0">
                <div className="p-4 border-b border-white/[0.05] shrink-0">
                  <h3 className="text-white font-bold text-sm tracking-wide">Agent Directory</h3>
                  <p className="text-[10px] text-gray-500 mt-1">12 Specialised AI Models</p>
                </div>
                
                <div className="flex-1 overflow-y-auto p-2 flex flex-col gap-1 custom-scrollbar">
                  {AGENTS.map((agent) => (
                    <button
                      key={agent.id}
                      onClick={() => {
                        if (!isPlaying) {
                          setSelectedAgentId(agent.id);
                          setCurrentStepIndex(-1);
                        }
                      }}
                      disabled={isPlaying}
                      className={`w-full text-left p-3 rounded-lg flex items-start gap-3 transition-all ${
                        selectedAgentId === agent.id 
                          ? "bg-white/[0.06] border border-white/10" 
                          : "border border-transparent hover:bg-white/[0.03]"
                      }`}
                    >
                      <div className={`mt-0.5 w-6 h-6 rounded flex items-center justify-center shrink-0 ${selectedAgentId === agent.id ? "bg-[#D4AF37]/20 text-[#D4AF37]" : "bg-white/5 text-gray-500"}`}>
                        <agent.icon className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-0.5">
                          <p className={`text-xs font-bold ${selectedAgentId === agent.id ? "text-white" : "text-gray-300"}`}>{agent.name}</p>
                          <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded border uppercase tracking-widest ${getStatusColor(agent.status)}`}>
                            {agent.status}
                          </span>
                        </div>
                        <p className="text-[10px] text-gray-500 line-clamp-1">{agent.description}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Main Area: The Workflow Simulator */}
              <div className="flex-1 bg-[#050505] flex flex-col relative overflow-hidden">
                
                {/* Agent Header */}
                <div className="p-6 md:p-8 border-b border-white/[0.05] shrink-0 bg-gradient-to-b from-white/[0.02] to-transparent">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                          <selectedAgent.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h2 className="text-xl font-black text-white">{selectedAgent.name}</h2>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className={`text-[9px] font-bold px-2 py-0.5 rounded border uppercase tracking-widest ${getStatusColor(selectedAgent.status)}`}>
                              {selectedAgent.status}
                            </span>
                            <span className="text-[10px] text-gray-500">Auto-configured</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-400 mt-4 max-w-md">{selectedAgent.description}</p>
                    </div>
                    
                    <button
                      onClick={runSimulation}
                      disabled={isPlaying || selectedAgent.status === "Building"}
                      className="px-6 py-3 rounded-lg bg-[#D4AF37] text-black font-black text-xs tracking-wide hover:bg-[#F3E5AB] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Play className="w-3.5 h-3.5 fill-black" />
                      {isPlaying ? "Simulating..." : selectedAgent.status === "Building" ? "In Development" : "Run Simulation"}
                    </button>
                  </div>
                </div>

                {/* Workflow Log */}
                <div className="flex-1 p-6 md:p-8 overflow-hidden flex flex-col">
                  
                  <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
                    <TerminalSquare className="w-4 h-4" /> Action Log
                  </div>

                  <div 
                    ref={logRef}
                    className="flex-1 bg-[#020202] border border-white/[0.05] rounded-xl p-5 overflow-y-auto font-mono text-xs flex flex-col gap-4 shadow-inner"
                  >
                    {!isPlaying && currentStepIndex === -1 ? (
                      <div className="h-full flex flex-col items-center justify-center text-gray-600 italic">
                        <TerminalSquare className="w-8 h-8 mb-3 opacity-20" />
                        Awaiting manual trigger...
                      </div>
                    ) : (
                      <>
                        <div className="flex items-start gap-3 text-white">
                          <div className="w-5 h-5 rounded flex items-center justify-center bg-white/10 shrink-0 mt-0.5">
                            <ChevronRight className="w-3 h-3" />
                          </div>
                          <div>
                            <span className="text-gray-500 block mb-0.5">TRIGGER DETECTED</span>
                            <span className="text-[#D4AF37] font-bold bg-[#D4AF37]/10 px-2 py-0.5 rounded">
                              {selectedAgent.trigger}
                            </span>
                          </div>
                        </div>

                        {selectedAgent.workflow.map((step, index) => (
                          <AnimatePresence key={index}>
                            {currentStepIndex >= index - 1 && (
                              <motion.div 
                                initial={{ opacity: 0, x: -10 }} 
                                animate={{ opacity: 1, x: 0 }} 
                                className="flex items-start gap-3"
                              >
                                <div className="w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
                                  {currentStepIndex === index - 1 ? (
                                    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}>
                                      <CircleDashed className="w-4 h-4 text-gray-500" />
                                    </motion.div>
                                  ) : (
                                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                  )}
                                </div>
                                <div className={`${currentStepIndex === index - 1 ? "text-gray-400" : "text-gray-200"}`}>
                                  {step.text}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        ))}

                        {/* Result Output Card */}
                        <AnimatePresence>
                          {!isPlaying && currentStepIndex === selectedAgent.workflow.length - 1 && (
                            <motion.div
                              initial={{ opacity: 0, y: 10, scale: 0.98 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              transition={{ duration: 0.4, ease: "easeOut" }}
                              className="mt-2 bg-[#D4AF37]/5 border border-[#D4AF37]/20 rounded-lg p-4 shadow-[0_0_15px_rgba(212,175,55,0.05)]"
                            >
                              <div className="flex items-center gap-2 mb-2">
                                <selectedAgent.icon className="w-4 h-4 text-[#D4AF37]" />
                                <span className="text-[#D4AF37] font-bold text-xs uppercase tracking-wider">Outcome: {selectedAgent.result.title}</span>
                              </div>
                              <div className="text-gray-300 text-xs leading-relaxed pl-6 border-l-2 border-[#D4AF37]/30 ml-2 whitespace-pre-wrap max-h-[300px] overflow-y-auto custom-scrollbar">
                                {realResult ? realResult : selectedAgent.result.desc}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    )}
                  </div>

                </div>

              </div>
            </div>
          </div>

          {/* Laptop hinge + base */}
          <div className="w-full h-2 bg-gradient-to-b from-[#888] to-[#666] rounded-b-sm" />
          <div className="mx-auto w-[60%] h-3 bg-gradient-to-b from-[#555] to-[#444] rounded-b-xl shadow-[0_8px_30px_rgba(0,0,0,0.6)]" />
        </div>
      </div>
    </section>
  );
}
