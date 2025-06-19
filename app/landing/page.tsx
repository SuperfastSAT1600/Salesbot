// 파일 경로: app/landing/page.tsx (수정된 버전)

'use client';

import ChatbotWidget from '../components/ChatbotWidget';
import FAQSection from '../components/FAQSection';
import Image from 'next/image';
// ★★★ 바로 이 부분! 중괄호를 제거합니다. ★★★
import KakaoTalkButton from '../components/KakaoTalkButton';

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
      {/* (이하 내용은 수정할 필요 없습니다) */}
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
      
      <section
        style={{
          width: '100%',
          maxWidth: '800px',
          marginBottom: '1.5rem',
        }}
      >
        <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.8rem, 4vw, 2.25rem)', marginBottom: '2rem', color: '#1F2937', fontWeight: 600 }}>
          자주 묻는 질문 및 안내
        </h2>
        <FAQSection />
      </section>

      <section
        style={{
          width: '100%',
          maxWidth: 480,
        }}
      >
        <ChatbotWidget />
      </section>

      <footer style={{ marginTop: '4rem', color: '#9CA3AF', fontSize: '0.875rem' }}>
        © {new Date().getFullYear()} SuperfastSAT. All rights reserved.
      </footer>

      <KakaoTalkButton />
    </div>
  );
}