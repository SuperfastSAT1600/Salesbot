// 파일 경로: app/api/chat/route.ts

import { OpenAI } from 'openai';
import { NextResponse } from 'next/server';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // .env.local 파일에 API 키가 올바르게 설정되어 있는지 확인!
});

export async function POST(req: Request) {
  console.log('[API Route /api/chat] POST 요청 수신 시작');

  try {
    const body = await req.json();
    const messages = body.messages;

    console.log('[API Route /api/chat] 수신된 메시지:', JSON.stringify(messages, null, 2));

    if (!messages || messages.length === 0) {
      console.log('[API Route /api/chat] 오류: 메시지가 비어있습니다.');
      return NextResponse.json(
        { error: '유효하지 않은 메시지 형식입니다. 대화 메시지를 배열로 보내주세요.' },
        { status: 400 }
      );
    }

    console.log('[API Route /api/chat] OpenAI API로 전달할 메시지:', JSON.stringify(messages, null, 2));

    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: messages,
    });

    const firstChoice = chatCompletion.choices[0];
    console.log('[API Route /api/chat] OpenAI API 첫 번째 선택지 (choices[0]):', JSON.stringify(firstChoice, null, 2));

    if (firstChoice && firstChoice.message) {
      console.log('[API Route /api/chat] 프론트엔드로 전달할 메시지 객체:', JSON.stringify(firstChoice.message, null, 2));
      return NextResponse.json(firstChoice.message);
    } else {
      console.error('[API Route /api/chat] 오류: OpenAI 응답에서 유효한 메시지를 찾을 수 없습니다.', JSON.stringify(firstChoice, null, 2));
      return NextResponse.json(
        { error: 'OpenAI로부터 유효한 응답 메시지를 받지 못했습니다.' },
        { status: 500 }
      );
    }

  } catch (error: any) {
    console.error('[API Route /api/chat] OpenAI API 또는 요청 처리 중 오류 발생:', error);
    let errorMessage = 'AI와 대화하는데 실패했습니다. 서버 로그를 확인해주세요.';
    let errorStatus = 500;

    if (error.response) {
      console.error('[API Route /api/chat] OpenAI Error Data:', error.response.data);
      console.error('[API Route /api/chat] OpenAI Error Status:', error.response.status);
      errorMessage = error.response.data?.error?.message || errorMessage;
      errorStatus = error.response.status || errorStatus;
    }

    return NextResponse.json(
      { error: errorMessage },
      { status: errorStatus }
    );
  }
}