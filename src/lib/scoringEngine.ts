export interface AuditResult {
  industry: string;
  businessModel: string;
  totalScore: number;
  readinessLevel: string;
  categoryScores: {
    customerSupport: number;
    sales: number;
    marketing: number;
    operations: number;
    dataIntelligence: number;
  };
  justifications: {
    customerSupport: string;
    sales: string;
    marketing: string;
    operations: string;
    dataIntelligence: string;
  };
  recommendations: string[];
  roiForecast: {
    potentialSavings: string;
    potentialRevenue: string;
    hoursSaved: number;
  };
}

export function analyzeWebsiteText(url: string, htmlContent: string, textContent: string): AuditResult {
  const text = textContent.toLowerCase();
  const html = htmlContent.toLowerCase();

  // 1. Industry Detection
  let industry = "General B2B";
  let businessModel = "Service Provider";
  
  if (text.includes("add to cart") || text.includes("checkout") || text.includes("shipping")) {
    industry = "E-commerce";
    businessModel = "B2C Retail";
  } else if (text.includes("consulting") || text.includes("advisory") || text.includes("strategy")) {
    industry = "Consulting";
    businessModel = "Professional Services";
  } else if (text.includes("pricing") && (text.includes("per user") || text.includes("monthly") || text.includes("annual"))) {
    industry = "SaaS";
    businessModel = "Subscription Software";
  } else if (text.includes("patient") || text.includes("medical") || text.includes("clinic")) {
    industry = "Healthcare";
    businessModel = "Healthcare Provider";
  } else if (text.includes("property") || text.includes("real estate") || text.includes("listing")) {
    industry = "Real Estate";
    businessModel = "Brokerage/Agency";
  }

  // 2. Customer Support Analysis (Max 20)
  let customerSupportScore = 5; // Default low score (high opportunity for AI)
  let csJustification = "No automated support detected. High volume of manual inquiries likely. Excellent opportunity for AI Chatbot.";
  if (html.includes("intercom") || html.includes("drift") || html.includes("zendesk")) {
    customerSupportScore = 12;
    csJustification = "Basic live chat/helpdesk detected. Opportunity to upgrade to autonomous AI agent for instant resolution.";
  }
  if (text.includes("faq") || text.includes("frequently asked questions")) {
    customerSupportScore += 3;
    csJustification = "Large FAQ section found. Perfect candidate for an AI Knowledge Assistant to prevent tickets.";
  }

  // 3. Sales Automation Analysis (Max 20)
  let salesScore = 4;
  let salesJustification = "Basic contact forms detected without intelligent routing or lead scoring. Prime for an AI SDR.";
  if (html.includes("calendly") || html.includes("hubspot") || html.includes("book")) {
    salesScore = 15;
    salesJustification = "Booking systems in place. Next step: deploy an AI Lead Qualification Agent before the booking step.";
  }

  // 4. Marketing Automation Analysis (Max 20)
  let marketingScore = 5;
  let marketingJustification = "Minimal automated content distribution detected. Need an AI Content Engine for SEO scaling.";
  if (text.includes("blog") || text.includes("article") || text.includes("news")) {
    marketingScore = 10;
    marketingJustification = "Active content marketing detected. Opportunity to use AI for high-volume, programmatic SEO generation.";
  }

  // 5. Operations & Data Intelligence Analysis (Max 20 + 20)
  const operationsScore = 8;
  const opsJustification = `As a ${industry} business, internal document processing and workflows are likely manual. High ROI for internal AI tools.`;
  
  const dataIntelligenceScore = 6;
  let dataJustification = "No advanced tracking or predictive analytics detected.";
  if (html.includes("google-analytics") || html.includes("gtag")) {
    dataJustification = "Basic analytics found. Opportunity to implement predictive modeling on existing user data.";
  }

  // 6. Final Score Calculation
  const totalScore = customerSupportScore + salesScore + marketingScore + operationsScore + dataIntelligenceScore;
  
  let readinessLevel = "AI Immature";
  if (totalScore > 20 && totalScore <= 40) readinessLevel = "AI Beginner";
  if (totalScore > 40 && totalScore <= 60) readinessLevel = "AI Emerging";
  if (totalScore > 60 && totalScore <= 80) readinessLevel = "AI Ready";
  if (totalScore > 80) readinessLevel = "AI Leader";

  // 7. Dynamic Recommendations
  const recommendations = [];
  if (industry === "Consulting") {
    recommendations.push("AI Lead Qualification Agent");
    recommendations.push("Automated Proposal Generator");
    recommendations.push("Meeting Insights & CRM Assistant");
  } else if (industry === "E-commerce") {
    recommendations.push("Generative Product Recommendation Engine");
    recommendations.push("24/7 Autonomous Support Bot");
    recommendations.push("Inventory Forecasting ML Model");
  } else if (industry === "SaaS") {
    recommendations.push("Customer Success Agent");
    recommendations.push("Automated Onboarding Assistant");
    recommendations.push("Predictive Churn Model");
  } else {
    recommendations.push("24/7 Autonomous Support Agent");
    recommendations.push("AI-Powered Sales SDR");
    recommendations.push("Internal Knowledge Base Assistant");
  }

  // 8. ROI Forecast
  const hoursSaved = Math.floor(Math.random() * (500 - 100) + 100); // 100 to 500 hours
  const savings = "$" + (hoursSaved * 45 * 12).toLocaleString(); // Assuming $45/hr fully loaded cost
  const revenue = "$" + ((100 - totalScore) * 1500).toLocaleString(); // Arbitrary correlation

  return {
    industry,
    businessModel,
    totalScore,
    readinessLevel,
    categoryScores: {
      customerSupport: customerSupportScore,
      sales: salesScore,
      marketing: marketingScore,
      operations: operationsScore,
      dataIntelligence: dataIntelligenceScore
    },
    justifications: {
      customerSupport: csJustification,
      sales: salesJustification,
      marketing: marketingJustification,
      operations: opsJustification,
      dataIntelligence: dataJustification
    },
    recommendations,
    roiForecast: {
      potentialSavings: savings,
      potentialRevenue: revenue,
      hoursSaved
    }
  };
}
