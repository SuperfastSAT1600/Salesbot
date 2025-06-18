// 파일 경로: components/ChatbotWidget.tsx (디자인 통일성 개선 후)

'use client';

import React, { useState, useEffect, useRef, FormEvent, KeyboardEvent } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string | null;
}

const initialGreetingMessage: Message = {
  role: 'assistant',
  content: '반가워요! 저희에게 궁금한 게 있다면 물어봐 주세요.'
};

const ChatbotWidget: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([initialGreetingMessage]);
  const [inputMessage, setInputMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [threadId, setThreadId] = useState<string | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages]);

  const sendMessage = async (event?: FormEvent<HTMLFormElement>) => {
    if (event) {
      event.preventDefault();
    }
    const trimmedInput = inputMessage.trim();
    if (trimmedInput === '' || isLoading) {
      return;
    }

    const newUserMessage: Message = { role: 'user', content: trimmedInput };
    setMessages(prev => [...prev, newUserMessage]);
    
    const currentMessageContent = trimmedInput;
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: currentMessageContent,
          threadId: threadId,
        }),
      });

      if (!response.ok) {
        // 에러 처리를 간소화하여, 어떤 오류든 일관된 메시지를 보여줍니다.
        throw new Error(`API 요청 실패: ${response.status}`);
      }

      const data = await response.json();

      if (data.error) {
        setMessages(prev => [...prev, { role: 'assistant', content: `오류: ${data.error}` }]);
      } else if (data.role === 'assistant' && typeof data.content === 'string') {
        setMessages(prev => [...prev, { role: 'assistant', content: data.content }]);
        if (data.threadId && data.threadId !== threadId) {
          setThreadId(data.threadId);
        }
      }
    } catch (error) {
      console.error('[ChatbotWidget] 메시지 전송/응답 처리 중 예외 발생:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: '메시지 처리 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  return (
    // ★★★ 챗봇 전체 컨테이너 스타일 수정 ★★★
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '400px', // 대화창 높이를 조금 더 여유있게
      border: '1px solid #071BE9', // 테두리 색상을 FAQ와 통일
      borderRadius: '12px',       // 모서리 둥글기를 FAQ와 통일
      fontFamily: 'inherit',      // 페이지 전체 폰트를 상속받도록 수정
      backgroundColor: '#fff',
      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)', // FAQ와 유사한 그림자 효과 추가
      overflow: 'hidden'          // 내부 요소가 모서리를 벗어나지 않도록 설정
    }}>
      {/* 메시지 표시 영역 */}
      <div style={{ flexGrow: 1, overflowY: 'auto', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px', backgroundColor: '#f9fafb' }}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
              // ★★★ 말풍선 색상 수정 ★★★
              backgroundColor: msg.role === 'user' ? '#071BE9' : '#e5e7eb', // 사용자 말풍선 색상 통일
              color: msg.role === 'user' ? 'white' : 'black',
              padding: '10px 14px',
              borderRadius: '18px', // 좀 더 둥근 말풍선
              maxWidth: '80%',      // 말풍선 최대 너비
              wordWrap: 'break-word',
            }}
          >
            {msg.content?.split('\n').map((line, i) => (
              <p key={i} style={{ margin: 0 }}>{line}</p>
            ))}
          </div>
        ))}
        {isLoading && (
          <div style={{ alignSelf: 'flex-start', color: '#666', padding: '8px 12px' }}>
            잠시만 기다려 주세요!
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      {/* 메시지 입력 영역 */}
      <form onSubmit={sendMessage} style={{ display: 'flex', padding: '12px', borderTop: '1px solid #e5e7eb', backgroundColor: '#fff' }}>
        <textarea
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="메시지를 입력하세요..."
          disabled={isLoading}
          style={{
            flexGrow: 1,
            padding: '10px 16px',
            border: '1px solid #ddd',
            borderRadius: '20px',
            marginRight: '10px',
            resize: 'none',
            minHeight: '24px',
            maxHeight: '100px',
            overflowY: 'auto',
            fontFamily: 'inherit',
            fontSize: '1rem',
            lineHeight: 1.5,
          }}
          rows={1}
        />
        <button
          type="submit"
          disabled={isLoading || inputMessage.trim() === ''}
          style={{
            padding: '10px 16px',
            // ★★★ 버튼 색상 수정 ★★★
            backgroundColor: (isLoading || inputMessage.trim() === '') ? '#ccc' : '#071BE9', // 버튼 색상 통일
            color: 'white',
            border: 'none',
            borderRadius: '20px',
            cursor: (isLoading || inputMessage.trim() === '') ? 'not-allowed' : 'pointer',
            fontSize: '1rem',
            fontWeight: 600
          }}
        >
          전송
        </button>
      </form>
    </div>
  );
};

export default ChatbotWidget;
