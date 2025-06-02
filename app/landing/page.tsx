// app/landing/page.tsx (수정된 코드)
'use client';

// import { useState } from 'react'; // ChatbotWidget에서 자체적으로 상태 관리하므로 여기서 필요 X
import ChatbotWidget from '../components/ChatbotWidget'; // ★★★ ChatbotWidget 가져오기 ★★★

const faqItems = [
  {
    icon: '⚡',
    title: '시작하기',
    desc: 'SuperastSAT에 처음 오셨나요? 여기부터 시작하면 됩니다!',
    count: '1 articles',
    slug: 'getting-started',
  },
  {
    icon: '🪄',
    title: '맞춤형 수업',
    desc: '맞춤형 수업으로 제대로 점수 만드세요',
    count: '1 articles',
    slug: 'features',
  },
  {
    icon: '🧑‍🎓',
    title: '수업 후기',
    desc: 'Superfast 수업 후기',
    count: '1 articles',
    slug: 'app-guide',
  },
  {
    icon: '📖',
    title: '입시 필독서',
    desc: 'SAT 공부의 판을 바꾸다',
    count: '1 articles',
    slug: 'faqs',
  },
    {
    icon: '👨‍💻',
    title: 'SAT 전문가와 상담 연결',
    desc: '빠르게 SAT 고민을 해결해 보세요',
    count: '1 articles',
    slug: 'pricing',
  },
];

export default function LandingPage() {
  // ▼▼▼ 기존의 간단한 챗봇 관련 useState와 send 함수는 삭제합니다 ▼▼▼
  // const [chat, setChat] = useState([
  //   { from: 'ai', text: '안녕하세요! SuperfastSAT AI 챗봇입니다. 무엇을 도와드릴까요?' },
  // ]);
  // const [input, setInput] = useState('');

  // const send = () => {
  //   if (!input.trim()) return;
  //   setChat((c) => [...c, { from: 'me', text: input }]);
  //   setInput('');
  // };
  // ▲▲▲ 여기까지 삭제 ▲▲▲

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start', // 페이지 상단부터 보이도록 변경
        minHeight: '100vh',
        padding: '2rem',
        background: '#fcfdff',
      }}
    >
      {/* 1. 제목 & 부제 */}
      <h1 style={{ fontSize: '2.5rem', margin: 0, textAlign: 'center' }}>
        SuperfastSAT
      </h1>
      <p style={{ margin: '0.5rem 0 2rem', color: '#555', textAlign: 'center' }}>
        무엇이든 물어보세요! SAT 고민을 단숨에 해결해 드립니다.
      </p>

      {/* 2. 챗봇 박스 (ChatbotWidget으로 교체) */}
      <div
        style={{
          width: '100%',
          maxWidth: 450, // 챗봇 위젯 크기에 맞춰 살짝 조정 가능
          // background: '#fff', // ChatbotWidget 자체 배경 사용
          // borderRadius: 16, // ChatbotWidget 자체 borderRadius 사용
          // boxShadow: '0 4px 12px rgba(0,0,0,0.05)', // ChatbotWidget 자체 boxShadow 사용
          // padding: '1.5rem', // ChatbotWidget 자체 padding 사용
          marginBottom: '2rem',
          // border: '2px solid #3b82f6', // 필요시 유지 또는 ChatbotWidget 내부 스타일로 이동
        }}
      >
        {/* ▼▼▼ 기존의 간단한 챗봇 UI 대신 ChatbotWidget 컴포넌트를 사용합니다 ▼▼▼ */}
        <ChatbotWidget />
        {/* ▲▲▲ ChatbotWidget 컴포넌트 사용 ▲▲▲ */}
      </div>

      {/* 3. FAQ 카드 */}
      <div
        style={{
          width: '100%',
          maxWidth: 800,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1rem',
        }}
      >
        {faqItems.map((f) => (
          <a
            key={f.slug}
            href={`/landing/${f.slug}`} // 실제 링크가 있다면 Next/Link 사용 권장
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.75rem',
              background: '#fff',
              borderRadius: 12,
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              padding: '1rem',
              textDecoration: 'none',
              color: 'inherit',
              border: '2px solid #d1d5db',
            }}
          >
            <div style={{ fontSize: '1.5rem' }}>{f.icon}</div>
            <div>
              <div style={{ fontWeight: 600, fontSize: '1rem', marginBottom: '0.25rem' }}>
                {f.title}
              </div>
              <div style={{ fontSize: '0.875rem', color: '#555', marginBottom: '0.5rem' }}>
                {f.desc}
              </div>
              <div style={{ fontSize: '0.75rem', color: '#888' }}>{f.count}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}