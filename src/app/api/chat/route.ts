import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    // Validation
    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Messages invalides' },
        { status: 400 }
      );
    }

    // Clé API sécurisée côté serveur
    const apiKey = process.env.OPENAI_API_KEY || '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';

    // Appel à OpenAI
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: messages,
        temperature: 0.7,
        max_tokens: 500, // Limite pour contrôler les coûts
      }),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: { message: 'Erreur de connexion' } }));
      return NextResponse.json(
        { error: error.error?.message || 'Erreur OpenAI' },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);

  } catch (error) {
    console.error('Erreur API:', error);
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}
