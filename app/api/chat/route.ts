// 파일 경로: app/api/chat/route.ts

import OpenAI from 'openai';

import { NextResponse } from 'next/server';



// OpenAI API 클라이언트 초기화

const openai = new OpenAI({

  apiKey: process.env.OPENAI_API_KEY, // .env.local 파일에 API 키가 올바르게 설정되어 있어야 합니다.

});



// .env.local 파일에서 어시스턴트 ID 가져오기

const assistantIdFromEnv = process.env.ASSISTANT_ID;



// 비동기 작업을 위한 간단한 sleep 함수

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));



export async function POST(req: Request) {

  console.log('[API Route /api/chat - Assistants 최종] POST 요청 수신');



  if (!assistantIdFromEnv) {

    console.error("[API Route /api/chat - Assistants 최종] 심각한 오류: ASSISTANT_ID가 환경 변수에 설정되지 않았습니다. .env.local 파일을 확인하고 서버를 재시작해주세요.");

    return NextResponse.json({ error: '서버 설정 오류: 어시스턴트 ID가 구성되지 않았습니다.' }, { status: 500 });

  }



  try {

    const body = await req.json();

    const userInput: string = body.message;

    let threadId: string | undefined | null = body.threadId;



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

    console.log(`[API Route /api/chat - Assistants 최종] Run 생성됨 (ID: ${run.id}), 스레드 ID: ${threadId}, 상태: ${run.status}`);



    const pollingInterval = 1000;

    const maxAttempts = 35;

    let attempts = 0;



    while (['queued', 'in_progress', 'requires_action'].includes(run.status) && attempts < maxAttempts) {

      await sleep(pollingInterval);

      run = await openai.beta.threads.runs.retrieve(threadId, run.id);

      console.log(`[API Route /api/chat - Assistants 최종] Run 상태 폴링 (ID: ${run.id}): ${run.status}`);

      attempts++;



      if (run.status === 'requires_action') {

        console.log('[API Route /api/chat - Assistants 최종] Run requires action:', run.required_action);

      }

    }



    if (run.status === 'completed') {

      console.log(`[API Route /api/chat - Assistants 최종] Run 완료 (ID: ${run.id})`);

      const messagesPage = await openai.beta.threads.messages.list(threadId, {

        limit: 1,

        order: 'desc',

      });



      const assistantMessage = messagesPage.data.find(msg => msg.role === 'assistant' && msg.run_id === run.id);



      if (assistantMessage && assistantMessage.content.length > 0) {

        let responseContent = assistantMessage.content

          .filter((contentPart: any) => contentPart.type === 'text')

          .map((textContentPart: any) => textContentPart.text.value)

          .join('\n');

       

        // 응답 내용에서 주석(citation) 제거

        responseContent = responseContent.replace(/【\d+:\d+†.*?】|【\d+†.*?】/g, '').trim();

       

        // ★★★ 추가된 부분: 마크다운 볼드체(**) 제거 ★★★

        responseContent = responseContent.replace(/\*\*(.*?)\*\*/g, '$1').trim();

        // 만약 단순하게 모든 '**'를 제거하고 싶다면 아래 코드를 사용하세요.

        // responseContent = responseContent.replace(/\*\*/g, '').trim();





        console.log('[API Route /api/chat - Assistants 최종] 어시스턴트 응답 내용 (마크다운 정리 후):', responseContent);

        return NextResponse.json({

          role: "assistant",

          content: responseContent,

          threadId: threadId,

        });

      } else {

        console.warn('[API Route /api/chat - Assistants 최종] Run 완료 후 어시스턴트 메시지를 찾을 수 없거나 내용이 비어있음.');

        return NextResponse.json({ error: 'AI가 응답을 생성했지만, 내용을 가져올 수 없습니다.' }, { status: 500 });

      }

    } else {

      console.error(`[API Route /api/chat - Assistants 최종] Run 최종 상태가 completed가 아님 (ID: ${run.id}): ${run.status}`, run);

      const runError = run.last_error ? `(에러 코드: ${run.last_error.code}, 메시지: ${run.last_error.message})` : '(상세 에러 정보 없음)';

      return NextResponse.json({ error: `AI 응답 처리 실패 (상태: ${run.status}) ${runError}` }, { status: 500 });

    }



  } catch (error: any) {

    console.error('[API Route /api/chat - Assistants 최종] 처리 중 예외 발생:', error);

    let errorMessage = 'AI 챗봇 처리 중 알 수 없는 오류가 발생했습니다.';

    if (error.response && error.response.data && error.response.data.error && error.response.data.error.message) {

      errorMessage = error.response.data.error.message;

    } else if (error.message) {

      errorMessage = error.message;

    }

    return NextResponse.json({ error: errorMessage }, { status: 500 });

  }

}