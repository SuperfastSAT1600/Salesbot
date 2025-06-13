// 파일 경로: app/api/chat/route.ts (Vercel Postgres DB 저장 최종 버전)

import OpenAI from 'openai';
import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres'; // ★★★ Vercel Postgres 라이브러리 추가 ★★★

// OpenAI API 클라이언트 초기화
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// .env.local 파일에서 어시스턴트 ID 가져오기
const assistantIdFromEnv = process.env.ASSISTANT_ID;

// 비동기 작업을 위한 간단한 sleep 함수
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// ★★★ Vercel Postgres DB에 로그를 저장하는 함수 ★★★
async function logConversationToDB(threadId: string, userInput: string, assistantResponse: string) {
  try {
    // SQL 쿼리를 사용해 'conversations' 테이블에 데이터를 삽입합니다.
    await sql`
      INSERT INTO conversations (thread_id, user_message, bot_response)
      VALUES (${threadId}, ${userInput}, ${assistantResponse});
    `;
    console.log('[DB Logger] 대화 로그를 데이터베이스에 저장했습니다.');
  } catch (error) {
    console.error('[DB Logger] 데이터베이스에 로그 저장 중 오류 발생:', error);
  }
}
// ★★★ 여기까지 데이터베이스 저장 함수 ★★★


export async function POST(req: Request) {
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

        // ★★★ 데이터베이스 저장 함수 호출로 변경 ★★★
        await logConversationToDB(threadId, userInput, responseContent);

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