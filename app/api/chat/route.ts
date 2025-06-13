// 파일 경로: app/api/chat/route.ts (데이터 확인용 최종 버전)

import OpenAI from 'openai';
import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

// ... (OpenAI, sleep 함수 등 다른 코드는 모두 동일합니다)
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const assistantIdFromEnv = process.env.ASSISTANT_ID;
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// ★★★ 디버깅 로그가 추가된 함수 ★★★
async function logConversationToDB(threadId: string, userInput: string, assistantResponse: string) {
  // --- 데이터베이스에 저장하기 직전, 실제 데이터를 터미널에 출력 ---
  console.log("--- [DB DEBUG] 저장 시도할 데이터 ---");
  console.log("[DB DEBUG] Thread ID:", threadId);
  console.log("[DB DEBUG] User Message:", userInput);
  console.log("[DB DEBUG] Bot Response:", assistantResponse);
  console.log("------------------------------------");
  // --- 여기까지 데이터 확인용 로그 ---

  try {
    await sql`
      INSERT INTO "conversations" ("thread_id", "user_message", "bot_response")
      VALUES (${threadId}, ${userInput}, ${assistantResponse});
    `;
    console.log('[DB Logger] 대화 로그를 데이터베이스에 저장했습니다.');
  } catch (error) {
    console.error('[DB Logger] 데이터베이스에 로그 저장 중 오류 발생:', error);
  }
}

export async function POST(req: Request) {
  // 이 아래의 코드는 이전과 동일하며, 수정할 필요가 없습니다.
  // ... (이전과 동일한 전체 POST 함수 로직) ...

  try {
    const body = await req.json();
    const userInput: string = body.message;
    let threadId: string | null = body.threadId;

    if (!userInput) { return NextResponse.json({ error: '메시지를 입력해주세요.' }, { status: 400 }); }
    if (!threadId) {
      const thread = await openai.beta.threads.create();
      threadId = thread.id;
    }

    await openai.beta.threads.messages.create(threadId!, { role: "user", content: userInput });
    let run = await openai.beta.threads.runs.create(threadId!, { assistant_id: assistantIdFromEnv! });

    let attempts = 0;
    while (['queued', 'in_progress'].includes(run.status) && attempts < 35) {
        await sleep(1000);
        run = await openai.beta.threads.runs.retrieve(threadId!, run.id);
        attempts++;
    }

    if (run.status === 'completed') {
        const messagesPage = await openai.beta.threads.messages.list(threadId!, { limit: 1, order: 'desc' });
        const assistantMessage = messagesPage.data.find(msg => msg.role === 'assistant');

        if (assistantMessage && assistantMessage.content[0].type === 'text') {
            const responseContent = assistantMessage.content[0].text.value.replace(/【.*?】/g, '').trim().replace(/\*\*/g, '');
            await logConversationToDB(threadId!, userInput, responseContent);
            return NextResponse.json({ role: "assistant", content: responseContent, threadId: threadId });
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