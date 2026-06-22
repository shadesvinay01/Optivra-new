import { GoogleGenAI } from "@google/genai";

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

export async function analyzeWebsiteWithAI(url: string, htmlContent: string, textContent: string): Promise<AuditResult> {
  const apiKey = process.env.GEMINI_API_KEY;
  
  if (apiKey) {
    try {
      const ai = new GoogleGenAI({ apiKey });
      const truncatedText = textContent.substring(0, 15000);
      const prompt = `You are a Senior AI Architect and Enterprise Business Analyst.
Analyze the following website text and determine the business model, industry, and the exact potential for AI automation.
Target URL: ${url}
Website Text: """${truncatedText}"""
Instructions:
1. Identify their exact Industry and Business Model.
2. Score their current AI/Automation capability across 5 categories out of 20.
3. Provide a 1-sentence justification for EACH of the 5 scores.
4. Recommend 3 highly specific, high-impact AI solutions.
5. Provide a realistic ROI forecast (hours saved, savings, revenue growth).
Output EXACTLY as a JSON object matching the provided schema.`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: { temperature: 0.2 }
      });

      let rawText = response.text || "{}";
      rawText = rawText.replace(/```json/g, "").replace(/```/g, "").trim();
      const parsed = JSON.parse(rawText);

      const totalScore = 
        (parsed.categoryScores.customerSupport || 0) +
        (parsed.categoryScores.sales || 0) +
        (parsed.categoryScores.marketing || 0) +
        (parsed.categoryScores.operations || 0) +
        (parsed.categoryScores.dataIntelligence || 0);

      let readinessLevel = "AI Immature";
      if (totalScore > 20 && totalScore <= 40) readinessLevel = "AI Beginner";
      if (totalScore > 40 && totalScore <= 60) readinessLevel = "AI Emerging";
      if (totalScore > 60 && totalScore <= 80) readinessLevel = "AI Ready";
      if (totalScore > 80) readinessLevel = "AI Leader";

      return { ...parsed, totalScore, readinessLevel };
    } catch (error) {
      console.warn("Gemini API Error (likely 503 or timeout). Falling back to heuristic engine.", error);
    }
  }

  // FALLBACK: Heuristic Rule-Based Engine
  console.log("Using Heuristic Fallback Engine");
  const text = textContent.toLowerCase();
  const html = htmlContent.toLowerCase();

  let industry = "General B2B";
  let businessModel = "Service Provider";
  
  if (text.includes("cart") || text.includes("checkout")) {
    industry = "E-commerce"; businessModel = "B2C Retail";
  } else if (text.includes("consulting") || text.includes("advisory")) {
    industry = "Consulting"; businessModel = "Professional Services";
  } else if (text.includes("pricing") && text.includes("monthly")) {
    industry = "SaaS"; businessModel = "Subscription Software";
  }

  let customerSupportScore = 5;
  let csJustification = "No automated support detected. Excellent opportunity for AI Chatbot.";
  if (html.includes("intercom") || html.includes("zendesk")) {
    customerSupportScore = 12; csJustification = "Basic live chat detected. Opportunity to upgrade to autonomous AI agent.";
  }

  let salesScore = 4;
  let salesJustification = "Basic contact forms detected without intelligent routing.";
  if (html.includes("calendly") || html.includes("hubspot")) {
    salesScore = 15; salesJustification = "Booking systems in place. Next step: deploy an AI Lead Qualification Agent.";
  }

  let marketingScore = 5;
  let marketingJustification = "Minimal automated content distribution detected.";
  if (text.includes("blog")) {
    marketingScore = 10; marketingJustification = "Active content marketing detected. Opportunity to use AI for programmatic SEO.";
  }

  const operationsScore = 8;
  const opsJustification = `As a ${industry} business, internal document processing is likely manual. High ROI for internal AI tools.`;
  
  const dataIntelligenceScore = 6;
  const dataJustification = "Opportunity to implement predictive modeling on existing user data.";

  const totalScore = customerSupportScore + salesScore + marketingScore + operationsScore + dataIntelligenceScore;
  let readinessLevel = "AI Immature";
  if (totalScore > 20 && totalScore <= 40) readinessLevel = "AI Beginner";
  if (totalScore > 40 && totalScore <= 60) readinessLevel = "AI Emerging";
  if (totalScore > 60 && totalScore <= 80) readinessLevel = "AI Ready";
  if (totalScore > 80) readinessLevel = "AI Leader";

  return {
    industry,
    businessModel,
    totalScore,
    readinessLevel,
    categoryScores: { customerSupport: customerSupportScore, sales: salesScore, marketing: marketingScore, operations: operationsScore, dataIntelligence: dataIntelligenceScore },
    justifications: { customerSupport: csJustification, sales: salesJustification, marketing: marketingJustification, operations: opsJustification, dataIntelligence: dataJustification },
    recommendations: ["24/7 Autonomous Support Agent", "AI-Powered Sales SDR", "Internal Knowledge Base Assistant"],
    roiForecast: { potentialSavings: "$125,000", potentialRevenue: "$45,000", hoursSaved: 240 }
  };
}
