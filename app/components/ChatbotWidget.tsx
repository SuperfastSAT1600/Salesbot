// 파일 경로: components/ChatbotWidget.tsx
'use client';

import React, { useState, useEffect, useRef, FormEvent, KeyboardEvent } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string | null;
}

const initialGreetingMessage: Message = {
  role: 'assistant',
  content: 'SuperfastSAT 무엇이든 물어보세요!'
};

const ChatbotWidget: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([initialGreetingMessage]);
  const [inputMessage, setInputMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ★★★ scrollIntoView 옵션 수정 ★★★
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages]);

  const sendMessage = async (event?: FormEvent<HTMLFormElement>) => {
    if (event) {
      event.preventDefault();
    }
    console.log('[ChatbotWidget] sendMessage 시작됨. 입력값:', `"${inputMessage.trim()}"`, '로딩상태:', isLoading);

    const trimmedInput = inputMessage.trim();
    if (trimmedInput === '' || isLoading) {
      console.log('[ChatbotWidget] 메시지가 비었거나 로딩 중이라서 중단.');
      return;
    }

    const newUserMessage: Message = { role: 'user', content: trimmedInput };
    const messagesForApi = [...messages, newUserMessage];

    setMessages(messagesForApi);
    setInputMessage('');
    setIsLoading(true);
    console.log('[ChatbotWidget] API로 보낼 메시지 목록:', messagesForApi);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: messagesForApi }),
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
          content: `서버 오류: ${errorData.error || '알 수 없는 문제'}`
        }]);
        throw new Error(`API 요청 실패: ${response.status}`);
      }

      const data: Message = await response.json();
      console.log('[ChatbotWidget] API로부터 받은 데이터:', data);

      if (data && data.role === 'assistant') {
        if (typeof data.content === 'string') {
          setMessages(prev => [...prev, data]);
        } else if (data.content === null && (data as any).tool_calls) {
          console.log('[ChatbotWidget] AI가 tool_calls를 요청:', (data as any).tool_calls);
          const toolCallDisplayMessage: Message = {
            role: 'assistant',
            content: `(AI가 기능을 사용하려고 합니다: ${(data as any).tool_calls[0]?.function?.name})`
          };
          setMessages(prev => [...prev, toolCallDisplayMessage]);
        } else {
          console.error('[ChatbotWidget] AI 응답 content 형식이 예상과 다름:', data.content);
          setMessages(prev => [...prev, {
            role: 'assistant',
            content: 'AI 응답을 받았으나 내용을 표시할 수 없습니다 (형식 오류).'
          }]);
        }
      } else {
        console.error('[ChatbotWidget] AI로부터 유효하지 않은 응답 (role 또는 데이터 없음):', data);
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: 'AI 응답 형식이 올바르지 않습니다.'
        }]);
      }

    } catch (error) {
      console.error('[ChatbotWidget] 메시지 전송/응답 처리 중 예외 발생:', error);
      if (!messages.find(msg => msg.role === 'assistant' && msg.content?.startsWith('서버 오류:'))) {
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
      console.log('[ChatbotWidget] Enter 키 눌림 (handleKeyPress). sendMessage 직접 호출 시도.');
      sendMessage();
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '400px', border: '1px solid #ccc', borderRadius: '8px', fontFamily: 'Arial, sans-serif' }}>
      {/* 메시지 표시 영역 */}
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
              msg.content === null ? '(AI 기능 호출 중...)' : msg.content.split('\n').map((line, i) => (
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
      {/* 메시지 입력 form */}
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

export default ChatbotWidget;