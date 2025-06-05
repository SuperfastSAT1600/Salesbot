// 파일 경로: components/ChatbotWidget.tsx
'use client';

import React, { useState, useEffect, useRef, FormEvent, KeyboardEvent } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string | null;
}

const initialGreetingMessage: Message = {
  role: 'assistant',
  content: '무엇이든 물어보세요!' // 이 메시지는 프론트엔드에서만 표시
};

const ChatbotWidget: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([initialGreetingMessage]);
  const [inputMessage, setInputMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [threadId, setThreadId] = useState<string | null>(null); // 스레드 ID 상태

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages]);

  const sendMessage = async (event?: FormEvent<HTMLFormElement>) => {
    if (event) {
      event.preventDefault();
    }
    const trimmedInput = inputMessage.trim();
    console.log('[ChatbotWidget] sendMessage 시작. 입력:', `"${trimmedInput}"`, 'Thread ID:', threadId, '로딩상태:', isLoading);


    if (trimmedInput === '' || isLoading) {
      console.log('[ChatbotWidget] 메시지가 비었거나 로딩 중, 중단.');
      return;
    }

    const newUserMessage: Message = { role: 'user', content: trimmedInput };
    setMessages(prev => [...prev, newUserMessage]);
    
    const currentMessageContent = trimmedInput;
    setInputMessage('');
    setIsLoading(true);

    console.log('[ChatbotWidget] API 요청 전송. 메시지:', currentMessageContent, 'Thread ID:', threadId);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: currentMessageContent,
          threadId: threadId,
        }),
      });

      console.log('[ChatbotWidget] fetch 응답 상태:', response.status, response.statusText);

      if (!response.ok) {
        let errorData = { error: '알 수 없는 서버 오류 (상태: ' + response.status + ')' };
        try {
          if (response.headers.get('Content-Type')?.includes('application/json')) {
            errorData = await response.json();
          } else {
            errorData.error = await response.text() || errorData.error;
          }
        } catch (e) {
          console.error('[ChatbotWidget] 서버 에러 응답 파싱 실패:', e);
        }
        console.error('[ChatbotWidget] API 요청 실패 응답 본문:', errorData);
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: `오류: ${errorData.error || '알 수 없는 문제'}`
        }]);
        throw new Error(`API 요청 실패: ${response.status}`);
      }

      const data = await response.json();
      console.log('[ChatbotWidget] API로부터 받은 데이터:', data);

      if (data.error) {
        console.error('[ChatbotWidget] 백엔드 API 에러:', data.error);
        setMessages(prev => [...prev, { role: 'assistant', content: `오류: ${data.error}` }]);
      } else if (data.role === 'assistant' && typeof data.content === 'string') {
        setMessages(prev => [...prev, { role: 'assistant', content: data.content }]);
        if (data.threadId && data.threadId !== threadId) {
          setThreadId(data.threadId);
          console.log('[ChatbotWidget] Thread ID 업데이트됨:', data.threadId);
        }
      } else {
        console.error('[ChatbotWidget] AI로부터 유효하지 않은 응답 형식:', data);
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: 'AI 응답 형식이 올바르지 않습니다.'
        }]);
      }

    } catch (error) {
      console.error('[ChatbotWidget] 메시지 전송/응답 처리 중 예외 발생:', error);
      if (!messages.some(msg => msg.role === 'assistant' && msg.content?.includes('오류:'))) {
         setMessages(prev => [...prev, {
          role: 'assistant',
          content: '메시지 처리 중 오류가 발생했습니다. 네트워크 연결을 확인해주세요.'
        }]);
      }
    } finally {
      setIsLoading(false);
      console.log('[ChatbotWidget] sendMessage 완료. 로딩상태 false.');
    }
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      console.log('[ChatbotWidget] Enter 키 입력으로 sendMessage 호출.');
      sendMessage();
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '400px', border: '1px solid #ccc', borderRadius: '8px', fontFamily: 'Arial, sans-serif', backgroundColor: '#fff' }}>
      <div style={{ flexGrow: 1, overflowY: 'auto', padding: '10px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
              backgroundColor: msg.role === 'user' ? '#007bff' : '#e9ecef',
              color: msg.role === 'user' ? 'white' : 'black',
              padding: '8px 12px',
              borderRadius: '15px',
              maxWidth: '70%',
              wordWrap: 'break-word',
            }}
          >
            {msg.role === 'assistant' ? (
              msg.content === null ? '(AI가 생각 중이거나 기능을 사용 중입니다...)' : msg.content.split('\n').map((line, i) => (
                <p key={i} style={{ margin: 0 }}>{line}</p>
              ))
            ) : (
              msg.content
            )}
          </div>
        ))}
        {isLoading && (
          <div style={{ alignSelf: 'flex-start', color: '#666', padding: '8px 12px' }}>
            AI가 답변을 생성 중입니다...
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={sendMessage} style={{ display: 'flex', padding: '10px', borderTop: '1px solid #ccc' }}>
        <textarea
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="메시지를 입력하세요..."
          disabled={isLoading}
          style={{
            flexGrow: 1,
            padding: '10px',
            border: '1px solid #ddd',
            borderRadius: '20px',
            marginRight: '10px',
            resize: 'none',
            minHeight: '24px',
            maxHeight: '100px',
            overflowY: 'auto',
            fontFamily: 'inherit',
            fontSize: '1em',
            lineHeight: '1.4',
          }}
          rows={1}
        />
        <button
          type="submit"
          disabled={isLoading || inputMessage.trim() === ''}
          style={{
            padding: '10px 15px',
            backgroundColor: (isLoading || inputMessage.trim() === '') ? '#ccc' : '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '20px',
            cursor: (isLoading || inputMessage.trim() === '') ? 'not-allowed' : 'pointer',
            fontSize: '1em',
          }}
        >
          전송
        </button>
      </form>
    </div>
  );
};

// ★★★ 이 export default ChatbotWidget; 줄이 파일의 맨 마지막에 있는지 다시 한번 확인해주세요! ★★★
export default ChatbotWidget;