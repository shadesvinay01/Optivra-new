import { NextResponse } from 'next/server';

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const payload = {
      model: 'nousresearch/hermes-3-llama-3.1-405b:free',
      messages: [
        { role: 'system', content: 'You are Hermes, the internal autonomous AI agent for the Optivra team. Keep responses concise, highly professional, and format in Markdown.' },
        ...messages.map((m: any) => ({ role: m.role, content: m.content }))
      ],
      stream: true
    };

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'HTTP-Referer': 'https://optivra.in',
        'X-Title': 'Optivra Internal Agent',
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`OpenRouter API error: ${response.status}`);
    }

    // Pipe the raw SSE stream directly to the client
    return new Response(response.body, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      }
    });
  } catch (error) {
    console.error("Agent Error:", error);
    return new Response(JSON.stringify({ error: "Failed to connect to Hermes Agent" }), {
      status: 500,
    });
  }
}
