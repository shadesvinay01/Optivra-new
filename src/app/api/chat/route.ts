export const maxDuration = 30;

const FREE_MODELS = [
  'meta-llama/llama-3.3-70b-instruct:free',
  'google/gemma-3-27b-it:free',
  'mistralai/mistral-7b-instruct:free',
  'qwen/qwen3-8b:free',
  'microsoft/phi-4-reasoning:free',
  'deepseek/deepseek-r1-0528:free',
];

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const apiKey = process.env.OPENROUTER_API_KEY;

    if (!apiKey) {
      return Response.json({
        reply: '❌ ERROR: OPENROUTER_API_KEY is missing from Vercel environment variables.',
      });
    }

    const payload = (model: string) => ({
      model,
      stream: false,
      messages: [
        {
          role: 'system',
          content:
            'You are Hermes, the internal AI agent for the Optivra team. Be helpful, concise, and professional. Format replies using Markdown.',
        },
        ...messages.map((m: { role: string; content: string }) => ({
          role: m.role,
          content: m.content,
        })),
      ],
    });

    // Try each model until one succeeds (handles rate limits automatically)
    for (const model of FREE_MODELS) {
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
          'HTTP-Referer': 'https://optivra.in',
          'X-Title': 'Optivra Hermes Agent',
        },
        body: JSON.stringify(payload(model)),
      });

      if (response.status === 429 || response.status === 503) {
        console.warn(`Model ${model} is rate-limited, trying next...`);
        continue; // Try next model
      }

      if (!response.ok) {
        const errText = await response.text();
        console.warn(`Model ${model} failed (${response.status}): ${errText}`);
        continue;
      }

      const data = await response.json();
      const reply =
        data?.choices?.[0]?.message?.content?.trim() ??
        '❌ Model returned empty content.';

      console.log(`✅ Hermes replied using: ${model}`);
      return Response.json({ reply, model });
    }

    return Response.json({
      reply:
        '⚠️ All free models are currently rate-limited. Please wait 30 seconds and try again.',
    });
  } catch (err: any) {
    console.error('Hermes Agent Error:', err);
    return Response.json({ reply: `❌ Server error: ${err?.message ?? 'Unknown'}` });
  }
}
