// 파일 경로: app/api/chat/route.ts

import OpenAI from 'openai';
import { NextResponse } from 'next/server';
import * as fs from 'fs/promises'; // ★★★ 변경/추가된 부분 ★★★
import path from 'path'; // ★★★ 변경/추가된 부분 ★★★

// OpenAI API 클라이언트 초기화
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// .env.local 파일에서 어시스턴트 ID 가져오기
const assistantIdFromEnv = process.env.ASSISTANT_ID;

// 비동기 작업을 위한 간단한 sleep 함수
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));


// ★★★ 로그 저장을 위한 비동기 함수 (디버깅 로그 포함) ★★★
async function logConversationToFile(threadId: string, userInput: string, assistantResponse: string) {
  // 디버깅용 로그 1: 이 함수가 호출되었는지 확인
  console.log('>>> [실행 확인] logConversationToFile 함수가 호출되었습니다!');

  const logData = {
    timestamp: new Date().toISOString(),
    threadId: threadId,
    userMessage: userInput,
    botResponse: assistantResponse,
  };

  const logEntry = JSON.stringify(logData, null, 2);
  
  const logDir = path.join(process.cwd(), 'logs');
  const logFilePath = path.join(logDir, 'chat_logs.jsonl');

  try {
    await fs.mkdir(logDir, { recursive: true });
    await fs.appendFile(logFilePath, logEntry + ',\n', 'utf-8');
    console.log(`[Logger] 대화 로그 저장 성공: ${logFilePath}`);
  } catch (error) {
    console.error('[Logger] 파일에 로그 저장 중 오류 발생:', error);
  }
}
// ★★★ 여기까지 로그 저장 함수 ★★★


export async function POST(req: Request) {
  // ★★★ 디버깅용 로그: 현재 작업 디렉토리 경로 확인 ★★★
  console.log('현재 작업 디렉토리 (cwd):', process.cwd());

  console.log('[API Route /api/chat - Assistants 최종] POST 요청 수신');

  if (!assistantIdFromEnv) {
    console.error("[API Route /api/chat - Assistants 최종] 심각한 오류: ASSISTANT_ID가 환경 변수에 설정되지 않았습니다.");
    return NextResponse.json({ error: '서버 설정 오류: 어시스턴트 ID가 구성되지 않았습니다.' }, { status: 500 });
  }

  try {
    const body = await req.json();
    const userInput: string = body.message;
    let threadId: string | null = body.threadId;

    console.log('[API Route /api/chat - Assistants 최종] 수신된 사용자 입력:', userInput);
    console.log('[API Route /api/chat - Assistants 최종] 수신된 스레드 ID:', threadId);

    if (!userInput) {
      console.log('[API Route /api/chat - Assistants 최종] 오류: 사용자 메시지가 비어있습니다.');
      return NextResponse.json({ error: '메시지를 입력해주세요.' }, { status: 400 });
    }

    if (!threadId) {
      const thread = await openai.beta.threads.create();
      threadId = thread.id;
      console.log('[API Route /api/chat - Assistants 최종] 새 스레드 생성됨, ID:', threadId);
    } else {
      console.log('[API Route /api/chat - Assistants 최종] 기존 스레드 사용, ID:', threadId);
    }

    await openai.beta.threads.messages.create(threadId, {
      role: "user",
      content: userInput,
    });
    console.log(`[API Route /api/chat - Assistants 최종] 스레드(${threadId})에 사용자 메시지 추가: "${userInput}"`);

    let run = await openai.beta.threads.runs.create(threadId, {
      assistant_id: assistantIdFromEnv,
    });
    console.log(`[API Route /api/chat - Assistants 최종] Run 생성됨 (ID: ${run.id}), 상태: ${run.status}`);

    const pollingInterval = 1000;
    const maxAttempts = 35;
    let attempts = 0;

    while (['queued', 'in_progress'].includes(run.status) && attempts < maxAttempts) {
      await sleep(pollingInterval);
      run = await openai.beta.threads.runs.retrieve(threadId, run.id);
      console.log(`[API Route /api/chat - Assistants 최종] Run 상태 폴링 (ID: ${run.id}): ${run.status}`);
      attempts++;
    }

    if (run.status === 'completed') {
      console.log(`[API Route /api/chat - Assistants 최종] Run 완료 (ID: ${run.id})`);
      const messagesPage = await openai.beta.threads.messages.list(threadId, {
        limit: 1,
        order: 'desc',
      });

      const assistantMessage = messagesPage.data.find(msg => msg.role === 'assistant' && msg.run_id === run.id);

      if (assistantMessage && assistantMessage.content[0].type === 'text') {
        const responseContent = assistantMessage.content[0].text.value
            .replace(/【\d+:\d+†.*?】|【\d+†.*?】/g, '').trim()
            .replace(/\*\*(.*?)\*\*/g, '$1').trim();

        console.log('[API Route /api/chat - Assistants 최종] 어시스턴트 응답 내용:', responseContent);
        
        // ★★★ 디버깅용 로그: 로그 함수 호출 직전인지 확인 ★★★
        console.log('>>> [실행 확인] 이제 로그 저장 함수를 호출하려고 합니다.');

        // 로그 저장 함수 호출
        await logConversationToFile(threadId, userInput, responseContent);

        return NextResponse.json({
          role: "assistant",
          content: responseContent,
          threadId: threadId,
        });
      } else {
        console.warn('[API Route /api/chat - Assistants 최종] Run 완료 후 어시스턴트 메시지를 찾을 수 없거나 텍스트가 아님.');
        return NextResponse.json({ error: 'AI 응답 내용을 가져올 수 없습니다.' }, { status: 500 });
      }
    } else {
      console.error(`[API Route /api/chat - Assistants 최종] Run 최종 상태가 completed가 아님 (ID: ${run.id}): ${run.status}`);
      const runError = run.last_error ? `(에러 코드: ${run.last_error.code}, 메시지: ${run.last_error.message})` : '(상세 에러 정보 없음)';
      return NextResponse.json({ error: `AI 응답 처리 실패 (상태: ${run.status}) ${runError}` }, { status: 500 });
    }

  } catch (error: any) {
    console.error('[API Route /api/chat - Assistants 최종] 처리 중 예외 발생:', error);
    let errorMessage = 'AI 챗봇 처리 중 알 수 없는 오류가 발생했습니다.';
    if (error.response?.data?.error?.message) {
      errorMessage = error.response.data.error.message;
    } else if (error.message) {
      errorMessage = error.message;
    }
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}