// 파일 경로: app/api/chat/route.ts (Vercel 배포 최종 버전)

import OpenAI from 'openai';
import { NextResponse } from 'next/server';
// fs와 path 모듈은 더 이상 필요 없으므로 삭제합니다.

// OpenAI API 클라이언트 초기화
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// .env.local 파일에서 어시스턴트 ID 가져오기
const assistantIdFromEnv = process.env.ASSISTANT_ID;

// 비동기 작업을 위한 간단한 sleep 함수
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// ★★★ Vercel 환경에 맞게 수정된 로그 함수 ★★★
// 파일에 쓰는 대신, 모든 정보를 담은 JSON 객체를 console.log로 출력합니다.
function logConversation(threadId: string, userInput: string, assistantResponse: string) {
  const logData = {
    timestamp: new Date().toISOString(),
    threadId: threadId,
    userMessage: userInput,
    botResponse: assistantResponse,
  };

  // Vercel 로그에서 쉽게 필터링할 수 있도록 고유한 접두사를 붙여줍니다.
  console.log(`[CONVERSATION_LOG]`, JSON.stringify(logData));
}
// ★★★ 여기까지 수정된 로그 함수 ★★★


export async function POST(req: Request) {
  // 디버깅용 console.log는 이제 삭제해도 좋습니다.
  console.log('[API Route /api/chat] POST 요청 수신');

  if (!assistantIdFromEnv) {
    console.error("[API Route /api/chat] 심각한 오류: ASSISTANT_ID가 설정되지 않았습니다.");
    return NextResponse.json({ error: '서버 설정 오류: 어시스턴트 ID가 구성되지 않았습니다.' }, { status: 500 });
  }

  try {
    const body = await req.json();
    const userInput: string = body.message;
    let threadId: string | null = body.threadId;

    if (!userInput) {
      return NextResponse.json({ error: '메시지를 입력해주세요.' }, { status: 400 });
    }

    if (!threadId) {
      const thread = await openai.beta.threads.create();
      threadId = thread.id;
    }

    await openai.beta.threads.messages.create(threadId, {
      role: "user",
      content: userInput,
    });

    let run = await openai.beta.threads.runs.create(threadId, {
      assistant_id: assistantIdFromEnv,
    });

    const pollingInterval = 1000;
    const maxAttempts = 35;
    let attempts = 0;

    while (['queued', 'in_progress'].includes(run.status) && attempts < maxAttempts) {
      await sleep(pollingInterval);
      run = await openai.beta.threads.runs.retrieve(threadId, run.id);
      console.log(`[API Route /api/chat] Run 상태: ${run.status}`);
      attempts++;
    }

    if (run.status === 'completed') {
      const messagesPage = await openai.beta.threads.messages.list(threadId, {
        limit: 1,
        order: 'desc',
      });

      const assistantMessage = messagesPage.data.find(msg => msg.role === 'assistant');

      if (assistantMessage && assistantMessage.content[0].type === 'text') {
        const responseContent = assistantMessage.content[0].text.value
            .replace(/【\d+:\d+†.*?】|【\d+†.*?】/g, '').trim()
            .replace(/\*\*(.*?)\*\*/g, '$1').trim();

        // ★★★ 수정된 로그 함수 호출 ★★★
        logConversation(threadId, userInput, responseContent);

        return NextResponse.json({
          role: "assistant",
          content: responseContent,
          threadId: threadId,
        });
      } else {
        console.warn('[API Route /api/chat] 어시스턴트 메시지를 찾을 수 없음');
        return NextResponse.json({ error: 'AI 응답 내용을 가져올 수 없습니다.' }, { status: 500 });
      }
    } else {
      console.error(`[API Route /api/chat] Run 최종 상태가 completed가 아님: ${run.status}`);
      return NextResponse.json({ error: `AI 응답 처리 실패 (상태: ${run.status})` }, { status: 500 });
    }

  } catch (error: any) {
    console.error('[API Route /api/chat] 처리 중 예외 발생:', error);
    return NextResponse.json({ error: 'AI 챗봇 처리 중 오류가 발생했습니다.' }, { status: 500 });
  }
}