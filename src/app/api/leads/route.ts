import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // In a real production environment, you can use Google Apps Script to create a Webhook
    // that directly appends rows to a Google Sheet.
    const googleSheetsWebhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

    // We flatten the full assessment & generated AI report data to send it to the webhook
    const payload = {
      timestamp: new Date().toISOString(),
      name: data.contact?.name || "Unknown",
      email: data.contact?.email || "Unknown",
      company: data.contact?.company || "Unknown",
      country: data.contact?.country || "Unknown",
      phone: data.contact?.phone || "",
      industry: data.assessment?.industry || "",
      challenge: data.assessment?.challenge || "",
      size: data.assessment?.size || "",
      tools: Array.isArray(data.assessment?.tools) ? data.assessment.tools.join(", ") : (data.assessment?.tools || ""),
      goal: data.assessment?.goal || "",
      aiScore: data.result?.score || 0,
      summary: data.result?.summary || "",
      topOpportunities: data.result?.opportunities ? data.result.opportunities.map((o: any) => `${o.title} (Impact: ${o.impact}, ROI: ${o.roi}, ETA: ${o.eta})`).join(" | ") : "",
      timeSaved: data.result?.roiEstimate?.timeSaved || "",
      costReduction: data.result?.roiEstimate?.costReduction || "",
      readiness: data.result?.roiEstimate?.readiness || "",
    };

    if (googleSheetsWebhookUrl) {
      // Send to Google Sheets via Webhook (Google Apps Script redirects 302 to output)
      const response = await fetch(googleSheetsWebhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        redirect: "follow",
      });

      if (!response.ok) {
        console.error("Failed to send lead to Google Sheets webhook", await response.text());
      }
    } else {
      // If no webhook is configured, log the detailed report payload to console
      console.log("============= NEW LEAD & AI REPORT CAPTURED =============");
      console.log(JSON.stringify(payload, null, 2));
      console.log("========================================================");
      console.log("Note: Configure GOOGLE_SHEETS_WEBHOOK_URL in environment variables to capture all full reports directly into Google Sheets.");
    }

    return NextResponse.json({ success: true, message: "Lead captured successfully" });

  } catch (error) {
    console.error("Error capturing lead:", error);
    return NextResponse.json({ success: false, error: "Failed to process lead" }, { status: 500 });
  }
}
