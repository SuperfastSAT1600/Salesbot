// app/landing/page.tsx
'use client';

import ChatbotWidget from '../components/ChatbotWidget';
// ★★★ 경로 확인: app/landing/ 에서 app/components/ 로 가려면 '../components/FAQSection' 입니다. ★★★
import FAQSection from '../components/FAQSection'; 

export default function LandingPage() {
  console.log("[LandingPage] 렌더링 시작 (Vercel에서 이 로그가 보여야 함)");
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        minHeight: '100vh',
        padding: '2rem 1rem', // 좌우 패딩 추가
        background: '#f9fafb',
      }}
    >
      {/* 1. 제목 & 부제 */}
      <div style={{ marginBottom: '3rem', width: '100%', maxWidth: '800px', padding: '0 1rem' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.75rem)', margin: '0 0 0.75rem', textAlign: 'center', color: '#1F2937', fontWeight: 700 }}>
          SuperfastSAT
        </h1>
        <p style={{ margin: '0', color: '#4B5563', textAlign: 'center', fontSize: 'clamp(1rem, 2.5vw, 1.15rem)', lineHeight: 1.7 }}>
          SAT 무엇이든 물어보세요!
        </p>
      </div>

      {/* 2. 챗봇 박스 */}
      <div
        style={{
          width: '100%',
          maxWidth: 480,
          marginBottom: '3.5rem',
        }}
      >
        <ChatbotWidget />
      </div>

      {/* 3. FAQ 섹션 */}
      <div
        style={{
          width: '100%',
          maxWidth: 960, // FAQ 카드들이 너무 좁게 나오지 않도록 너비 확보
        }}
      >

        <FAQSection /> {/* FAQSection 컴포넌트를 사용합니다. */}
      </div>
    </div>
  );
}
