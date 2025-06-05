// app/landing/page.tsx
'use client';

import ChatbotWidget from '../components/ChatbotWidget';
// ★★★ 경로 확인: app/landing/에서 app/components/로 가려면 ../components/ 가 맞습니다. ★★★
import FAQSection from '../components/FAQSection'; 

export default function LandingPage() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start', // 상단부터 시작하도록
        minHeight: '100vh',
        padding: '2rem',
        background: '#f9fafb', // 약간 다른 배경색으로 변경 (선택 사항)
      }}
    >
      {/* 1. 제목 & 부제 */}
      <div style={{ marginBottom: '3rem', width: '100%', maxWidth: '800px' }}> {/* 제목 섹션 너비 제한 */}
        <h1 style={{ fontSize: '2.75rem', margin: '0 0 0.75rem', textAlign: 'center', color: '#1F2937', fontWeight: 700 }}>
          SuperfastSAT
        </h1>
        <p style={{ margin: '0', color: '#4B5563', textAlign: 'center', fontSize: '1.15rem', lineHeight: 1.7 }}>
          무엇이든 물어보세요! SAT 고민을 단숨에 해결해 드립니다.
        </p>
      </div>

      {/* 2. 챗봇 박스 */}
      <div
        style={{
          width: '100%',
          maxWidth: 480, // 챗봇 너비 살짝 증가
          marginBottom: '3.5rem', // FAQ 섹션과의 간격 증가
        }}
      >
        <ChatbotWidget />
      </div>

      {/* 3. FAQ 섹션 */}
      <div
        style={{
          width: '100%',
          maxWidth: 960, // FAQ 카드 컨테이너 너비 살짝 증가
        }}
      >
        <h2 style={{ textAlign: 'center', fontSize: '2.25rem', marginBottom: '2rem', color: '#1F2937', fontWeight: 600 }}>
          자주 묻는 질문 및 안내
        </h2>
        <FAQSection /> {/* FAQSection 컴포넌트를 사용합니다. */}
      </div>
    </div>
  );
}
