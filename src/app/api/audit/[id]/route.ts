import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const auditId = params.id;
    if (!auditId) {
      return NextResponse.json({ error: "Audit ID required" }, { status: 400 });
    }

    const audit = await prisma.audit.findUnique({
      where: { id: auditId },
    });

    if (!audit) {
      return NextResponse.json({ error: "Audit not found" }, { status: 404 });
    }

    // Parse the JSON strings back to objects for the frontend
    return NextResponse.json({
      ...audit,
      categoryScores: JSON.parse(audit.categoryScores),
      justifications: JSON.parse(audit.justifications),
      recommendations: JSON.parse(audit.recommendations),
      roiForecast: JSON.parse(audit.roiForecast),
    });
  } catch (error) {
    console.error("Fetch audit error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
