// 파일 경로: app/landing/page.tsx (챗봇 위치 변경 후)

'use client';

import ChatbotWidget from '../components/ChatbotWidget';
import FAQSection from '../components/FAQSection';
import Image from 'next/image';

export default function LandingPage() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        minHeight: '100vh',
        padding: '2rem 1rem',
        background: '#f9fafb',
      }}
    >
      {/* 1. 페이지 헤더 (로고와 제목) - 순서 변경 없음 */}
      <header style={{ marginBottom: '0.01rem', width: '100%', maxWidth: '800px', padding: '0 1rem', textAlign: 'center' }}>
        <div style={{ marginBottom: '0.75rem', display: 'inline-block' }}>
          <Image
            src="/images/logo.png"
            alt="SuperfastSAT 로고"
            width={300}
            height={60}
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
            priority
          />
        </div>
        <p style={{ margin: '0', color: '#4B5563', fontSize: 'clamp(1rem, 2.5vw, 1.15rem)', lineHeight: 1.7 }}>
          목표 점수에 가장 빠르게
        </p>
      </header>
      
      {/* ★★★ 2. FAQ 아코디언 섹션 (위치가 위로 변경됨) ★★★ */}
      <section
        style={{
          width: '100%',
          maxWidth: '800px',
          marginBottom: '1.5rem', // 챗봇과의 간격을 위해 여백 추가
        }}
      >
        <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.8rem, 4vw, 2.25rem)', marginBottom: '2rem', color: '#1F2937', fontWeight: 600 }}>
          자주 묻는 질문 및 안내
        </h2>
        <FAQSection />
      </section>

      {/* ★★★ 3. 챗봇 위젯 섹션 (위치가 아래로 변경됨) ★★★ */}
      <section
        style={{
          width: '100%',
          maxWidth: 480,
        }}
      >
        <ChatbotWidget />
      </section>


      {/* 4. 페이지 푸터 (선택 사항) - 순서 변경 없음 */}
      <footer style={{ marginTop: '4rem', color: '#9CA3AF', fontSize: '0.875rem' }}>
        © {new Date().getFullYear()} SuperfastSAT. All rights reserved.
      </footer>
    </div>
  );
}