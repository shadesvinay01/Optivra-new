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
  
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not configured on the server.");
  }

  const ai = new GoogleGenAI({ apiKey });

  // Truncate text content to avoid token limits, focus on the first 15000 chars which usually contains the main pitch
  const truncatedText = textContent.substring(0, 15000);

  const prompt = `
You are a Senior AI Architect and Enterprise Business Analyst.
Analyze the following website text and determine the business model, industry, and the exact potential for AI automation.

Target URL: ${url}

Website Text:
"""
${truncatedText}
"""

Instructions:
1. Identify their exact Industry and Business Model.
2. Score their current AI/Automation capability across 5 categories out of 20 (0 = highly manual, 20 = highly automated). Since most companies are manual, score them realistically (usually between 2 and 10).
3. Provide a 1-sentence justification for EACH of the 5 scores, explicitly citing evidence from the text if possible (e.g. "You use traditional contact forms, an AI SDR would increase velocity").
4. Recommend 3 highly specific, high-impact AI solutions they should build.
5. Provide a realistic ROI forecast (hours saved per month, potential annual savings in $, potential annual revenue growth in $).

Output EXACTLY as a JSON object matching this schema. Do not include markdown formatting like \`\`\`json, just return the raw JSON object.
{
  "industry": "String",
  "businessModel": "String",
  "categoryScores": {
    "customerSupport": number,
    "sales": number,
    "marketing": number,
    "operations": number,
    "dataIntelligence": number
  },
  "justifications": {
    "customerSupport": "String",
    "sales": "String",
    "marketing": "String",
    "operations": "String",
    "dataIntelligence": "String"
  },
  "recommendations": ["String", "String", "String"],
  "roiForecast": {
    "potentialSavings": "String (e.g. $120,000)",
    "potentialRevenue": "String",
    "hoursSaved": number
  }
}
`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        temperature: 0.2,
      }
    });

    let rawText = response.text || "{}";
    
    // Clean up potential markdown formatting from the response
    rawText = rawText.replace(/```json/g, "").replace(/```/g, "").trim();
    
    const parsed = JSON.parse(rawText);

    // Calculate total score
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

    return {
      ...parsed,
      totalScore,
      readinessLevel
    };
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to process website data with AI Engine.");
  }
}
