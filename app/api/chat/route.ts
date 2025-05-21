import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { message } = await req.json();

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ reply: "OpenAI API 키가 없습니다!" });
  }

  const openaiRes = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "넌 친절한 SAT 상담 AI 챗봇이야. 한글로 핵심만 쉽게 답해줘." },
        { role: "user", content: message }
      ]
    }),
  });
  const data = await openaiRes.json();
  return NextResponse.json({ reply: data.choices?.[0]?.message?.content || "AI 응답 오류!" });
}
