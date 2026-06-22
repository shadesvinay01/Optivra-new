import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import * as cheerio from "cheerio";
import { analyzeWebsiteText } from "@/lib/scoringEngine";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { url, email } = body;

    if (!url || !email) {
      return NextResponse.json(
        { error: "URL and Email are required" },
        { status: 400 }
      );
    }

    let targetUrl = url;
    if (!targetUrl.startsWith("http://") && !targetUrl.startsWith("https://")) {
      targetUrl = "https://" + targetUrl;
    }

    // 1. Fetch website HTML
    let html = "";
    try {
      const response = await fetch(targetUrl, {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) OptivraAuditBot/1.0",
        },
        // Timeout after 10s
        signal: AbortSignal.timeout(10000),
      });
      if (!response.ok) throw new Error("Failed to fetch");
      html = await response.text();
    } catch (e) {
      return NextResponse.json(
        { error: "Failed to scrape the provided URL. Make sure it is accessible." },
        { status: 400 }
      );
    }

    // 2. Parse text with Cheerio
    const $ = cheerio.load(html);
    // Remove scripts and styles for cleaner text
    $("script, style, noscript, iframe").remove();
    const textContent = $("body").text().replace(/\s+/g, " ").trim();

    // 3. Run AI Scoring Engine (Heuristic matching for MVP)
    const analysisResult = analyzeWebsiteText(targetUrl, html, textContent);

    // 4. Save to Database
    const auditRecord = await prisma.audit.create({
      data: {
        url: targetUrl,
        email,
        industry: analysisResult.industry,
        totalScore: analysisResult.totalScore,
        readinessLevel: analysisResult.readinessLevel,
        categoryScores: JSON.stringify(analysisResult.categoryScores),
        justifications: JSON.stringify(analysisResult.justifications),
        recommendations: JSON.stringify(analysisResult.recommendations),
        roiForecast: JSON.stringify(analysisResult.roiForecast),
      },
    });

    // 5. Return success and the audit ID to redirect to the results page
    return NextResponse.json({
      success: true,
      auditId: auditRecord.id,
      data: analysisResult,
    });
  } catch (error: any) {
    console.error("Audit API Error:", error);
    return NextResponse.json(
      { error: "An internal error occurred during the audit." },
      { status: 500 }
    );
  }
}
