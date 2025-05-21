'use client';
import { useState } from 'react';

export default function Home() {
  const [messages, setMessages] = useState<{ who: string; text: string }[]>([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
  if (!input) return;
  setMessages([...messages, { who: '나', text: input }]);
  setInput('');
  // AI API 호출
  const res = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: input })
  });
  const data = await res.json();
  setMessages(msgs => [...msgs, { who: 'AI', text: data.reply }]);
};


  return (
    <main style={{ maxWidth: 400, margin: '30px auto' }}>
      <div style={{ height: 350, border: '1px solid #ccc', padding: 12, overflowY: 'auto', background: '#f9f9f9' }}>
        {messages.map((m, i) => (
          <div key={i}><b>{m.who}:</b> {m.text}</div>
        ))}
      </div>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        style={{ width: '80%', marginTop: 10 }}
        onKeyDown={e => e.key === 'Enter' && sendMessage()}
        placeholder="메시지를 입력하세요"
      />
      <button onClick={sendMessage}>전송</button>
    </main>
  );
}
