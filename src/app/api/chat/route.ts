export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const apiKey = process.env.OPENROUTER_API_KEY;

    // Debug: confirm key is loaded
    if (!apiKey) {
      return Response.json({ reply: '❌ ERROR: OPENROUTER_API_KEY is missing from Vercel environment variables. Please add it and redeploy.' });
    }

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'HTTP-Referer': 'https://optivra.in',
        'X-Title': 'Optivra Hermes Agent',
      },
      body: JSON.stringify({
        model: 'meta-llama/llama-3.3-70b-instruct:free',
        stream: false, // Simple non-streaming for reliability
        messages: [
          {
            role: 'system',
            content: 'You are Hermes, the internal AI agent for the Optivra team. Be helpful, concise, and professional.',
          },
          ...messages.map((m: { role: string; content: string }) => ({
            role: m.role,
            content: m.content,
          })),
        ],
      }),
    });

    if (!response.ok) {
      const errBody = await response.text();
      console.error('OpenRouter error:', response.status, errBody);
      return Response.json({ reply: `❌ OpenRouter API error (${response.status}): ${errBody}` });
    }

    const data = await response.json();
    const reply = data?.choices?.[0]?.message?.content ?? '❌ No reply content from model.';
    return Response.json({ reply });

  } catch (err: any) {
    console.error('Server error:', err);
    return Response.json({ reply: `❌ Server error: ${err?.message ?? 'Unknown error'}` });
  }
}
