export const maxDuration = 30;

// Comprehensive list of free models on OpenRouter
// The first entry uses OpenRouter's own auto-router which picks any available free model
const FREE_MODELS = [
  'openrouter/auto',                              // OpenRouter auto-selects best available free model
  'meta-llama/llama-3.3-70b-instruct:free',
  'meta-llama/llama-3.1-8b-instruct:free',
  'google/gemma-3-27b-it:free',
  'google/gemma-3-12b-it:free',
  'google/gemma-3-4b-it:free',
  'mistralai/mistral-7b-instruct:free',
  'mistralai/mistral-small-3.2-24b-instruct:free',
  'qwen/qwen3-8b:free',
  'qwen/qwen3-14b:free',
  'qwen/qwen3-30b-a3b:free',
  'deepseek/deepseek-r1-0528:free',
  'deepseek/deepseek-chat-v3-5:free',
  'microsoft/phi-4-reasoning:free',
  'nvidia/llama-3.1-nemotron-70b-instruct:free',
  'tngtech/deepseek-r1t-chimera:free',
];

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const apiKey = process.env.OPENROUTER_API_KEY;

    if (!apiKey) {
      return Response.json({
        reply: '❌ OPENROUTER_API_KEY is missing. Please add it in Vercel Settings → Environment Variables.',
      });
    }

    const buildPayload = (model: string) => ({
      model,
      stream: false,
      messages: [
        {
          role: 'system',
          content:
            'You are Hermes, the internal AI agent for Optivra — an AI consulting company. Be helpful, professional, and concise. Format replies in Markdown.',
        },
        ...messages.map((m: { role: string; content: string }) => ({
          role: m.role,
          content: m.content,
        })),
      ],
    });

    for (let i = 0; i < FREE_MODELS.length; i++) {
      const model = FREE_MODELS[i];

      // Add a small delay between retries to avoid hammering rate limits
      if (i > 0) await delay(300);

      try {
        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
            'HTTP-Referer': 'https://optivra.in',
            'X-Title': 'Optivra Hermes Agent',
          },
          body: JSON.stringify(buildPayload(model)),
        });

        // Rate limit or upstream error → try next model
        if (response.status === 429 || response.status === 503 || response.status === 502) {
          console.warn(`⚠️ Model ${model} rate-limited (${response.status}), trying next...`);
          continue;
        }

        if (!response.ok) {
          const errText = await response.text();
          console.warn(`❌ Model ${model} failed (${response.status}): ${errText.slice(0, 200)}`);
          continue;
        }

        const data = await response.json();
        const reply = data?.choices?.[0]?.message?.content?.trim();

        if (!reply) {
          console.warn(`⚠️ Model ${model} returned empty content.`);
          continue;
        }

        console.log(`✅ Hermes responded via: ${model}`);
        return Response.json({ reply, model });

      } catch (modelErr) {
        console.warn(`❌ Model ${model} threw error:`, modelErr);
        continue;
      }
    }

    return Response.json({
      reply:
        '⚠️ All AI models are currently busy. This is a temporary issue with free-tier rate limits. Please wait 1 minute and try again.',
    });

  } catch (err: any) {
    console.error('Hermes Agent fatal error:', err);
    return Response.json({ reply: `❌ Server error: ${err?.message ?? 'Unknown error'}` });
  }
}
