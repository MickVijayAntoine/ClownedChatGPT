import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

export async function POST(request: NextRequest) {
  try {
    const { messages, apiKey } = await request.json();

    if (!apiKey) {
      return NextResponse.json(
        { error: 'Clé API OpenAI non fournie' },
        { status: 400 }
      );
    }

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Messages non fournis ou format incorrect' },
        { status: 400 }
      );
    }

    const openai = new OpenAI({
      apiKey: apiKey,
    });

    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: messages.map((msg: any) => ({
        role: msg.role,
        content: msg.content,
      })),
      temperature: 0.7,
      max_tokens: 1000,
    });

    return NextResponse.json({
      message: response.choices[0].message.content,
    });
  } catch (error: any) {
    console.error('Erreur API Chat:', error);
    return NextResponse.json(
      { error: `Erreur lors de la communication avec l'API OpenAI: ${error.message}` },
      { status: 500 }
    );
  }
}
