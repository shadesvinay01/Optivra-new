import { NextResponse } from "next/server";
import { GoogleGenAI, Type, Schema } from "@google/genai";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      console.warn("GEMINI_API_KEY is not set. Returning mock response for AI Advisor.");
      return NextResponse.json(getMockResponse(data));
    }

    const ai = new GoogleGenAI({ apiKey: apiKey });

    const prompt = `
      You are an elite Enterprise AI Consultant. Analyze the following business profile and generate a highly personalized AI Opportunity Report.
      
      Business Profile:
      - Industry: ${data.industry}
      - Organization Size: ${data.size}
      - Biggest Challenge: ${data.challenge}
      - Primary Goal: ${data.goal}
      - Current Tool Stack: ${data.tools.join(", ")}
      
      Instructions:
      1. Calculate an 'aiReadinessScore' out of 100 based on their tech stack and size. (If they use nothing, score is lower. If they use Salesforce/ERP, score is higher. If they want to scale, it's higher).
      2. Write a 'personalizedSummary' (3-4 sentences). Make it sound professional, insightful, and directly reference their industry, tools, and challenge. Tell them exactly *why* AI is a good fit for them right now.
      3. Recommend exactly 3 'topOpportunities' (Specific AI use cases like "Autonomous Support Agent", "Predictive Inventory ML", "Sales Data RAG Pipeline"). For each, provide:
         - title (String)
         - impact (String, use stars e.g. "★★★★★")
         - roi (String, "High", "Medium", or "Very High")
         - eta (String, e.g., "3-5 weeks")
      4. Estimate the ROI ('roiEstimate'). Return an object with:
         - timeSaved (String, e.g., "15-20 hours/week")
         - costReduction (String, e.g., "Medium to High")
         - readiness (String, e.g., "82%")
         - impact (String, e.g., "High")
    `;

    // Define the expected JSON schema to force Gemini into a strict structure
    const responseSchema: Schema = {
      type: Type.OBJECT,
      properties: {
        score: { type: Type.INTEGER },
        summary: { type: Type.STRING },
        opportunities: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              impact: { type: Type.STRING },
              roi: { type: Type.STRING },
              eta: { type: Type.STRING }
            },
            required: ["title", "impact", "roi", "eta"]
          }
        },
        roiEstimate: {
          type: Type.OBJECT,
          properties: {
            timeSaved: { type: Type.STRING },
            costReduction: { type: Type.STRING },
            readiness: { type: Type.STRING },
            impact: { type: Type.STRING }
          },
          required: ["timeSaved", "costReduction", "readiness", "impact"]
        }
      },
      required: ["score", "summary", "opportunities", "roiEstimate"]
    };

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
        temperature: 0.7,
      }
    });

    if (!response.text) {
      throw new Error("No response generated from Gemini");
    }

    const aiResult = JSON.parse(response.text);
    return NextResponse.json(aiResult);

  } catch (error) {
    console.error("AI Advisor Error:", error);
    // Fallback to mock data to ensure the UI doesn't break for the user
    return NextResponse.json(getMockResponse({}));
  }
}

function getMockResponse(data: any) {
  return {
    score: 78,
    summary: `Based on your responses, there are clear automation opportunities. By addressing your core challenge with targeted AI workflows, you can rapidly optimize operations and prepare for scaling.`,
    opportunities: [
      { title: "Workflow Automation Pipeline", impact: "★★★★★", roi: "High", eta: "3–4 weeks" },
      { title: "AI Knowledge Assistant", impact: "★★★★☆", roi: "Medium", eta: "2–3 weeks" },
      { title: "Predictive Analytics Dashboard", impact: "★★★★☆", roi: "High", eta: "4–6 weeks" }
    ],
    roiEstimate: {
      timeSaved: "15–20 hours/week",
      costReduction: "High",
      readiness: "78%",
      impact: "High"
    }
  };
}
