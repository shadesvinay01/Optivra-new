import { createOpenAI } from '@ai-sdk/openai';
import { streamText } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

// Configure OpenRouter provider using the OpenAI-compatible SDK
const openrouter = createOpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: process.env.OPENROUTER_API_KEY,
  headers: {
    'HTTP-Referer': 'https://optivra.in',
    'X-Title': 'Optivra Internal Agent',
  },
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const result = await streamText({
      model: openrouter('nousresearch/hermes-3-llama-3.1-405b:free'),
      system: `You are Hermes, the internal autonomous AI agent for the Optivra team. 
      You have access to a vast array of knowledge and act as an expert technical consultant, data analyzer, and strategist. 
      Keep your responses concise, highly professional, and actionable. 
      Format your output using Markdown. Do not hallucinate.`,
      messages,
      // Note: We can add tools here via the 'tools' object later if needed (e.g. searching the web)
      // tools: { ... }
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error("Agent Error:", error);
    return new Response(JSON.stringify({ error: "Failed to connect to Hermes Agent" }), {
      status: 500,
    });
  }
}
