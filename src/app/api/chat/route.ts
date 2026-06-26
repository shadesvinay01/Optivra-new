export const maxDuration = 30;

// Try multiple free models in order until one works
const FREE_MODELS = [
  'meta-llama/llama-3.3-70b-instruct:free',
  'microsoft/phi-4-reasoning:free',
  'google/gemma-3-27b-it:free',
  'mistralai/mistral-7b-instruct:free',
];

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const apiKey = process.env.OPENROUTER_API_KEY;

    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: 'OPENROUTER_API_KEY is not configured on the server.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Try each model until one responds successfully
    for (const model of FREE_MODELS) {
      const payload = {
        model,
        messages: [
          { role: 'system', content: 'You are Hermes, the internal AI agent for the Optivra team. Be helpful, concise, and professional. Format replies in Markdown.' },
          ...messages.map((m: { role: string; content: string }) => ({ role: m.role, content: m.content }))
        ],
        stream: true,
      };

      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
          'HTTP-Referer': 'https://optivra.in',
          'X-Title': 'Optivra Hermes Agent',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok && response.body) {
        console.log(`Hermes Agent: Using model ${model}`);
        return new Response(response.body, {
          headers: {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
          },
        });
      } else {
        const errText = await response.text();
        console.warn(`Model ${model} failed (${response.status}): ${errText}`);
      }
    }

    return new Response(
      JSON.stringify({ error: 'All free models failed. Please try again later.' }),
      { status: 502, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Hermes Agent Error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
