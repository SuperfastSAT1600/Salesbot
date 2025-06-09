// app/landing/page.tsx
'use client';

import Image from 'next/image'; // ★★★ Image 컴포넌트를 import 합니다. ★★★
import ChatbotWidget from '../components/ChatbotWidget';
import FAQSection from '../components/FAQSection'; 

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
      {/* 1. 제목 & 부제 */}
      <div style={{ marginBottom: '3rem', width: '100%', maxWidth: '800px', padding: '0 1rem', textAlign: 'center' }}>
        
        {/* ▼▼▼ 기존 h1 태그를 Image 컴포넌트로 교체합니다. ▼▼▼ */}
        <div style={{ marginBottom: '0.75rem', display: 'inline-block' }}> {/* 로고를 가운데 정렬하고 하단 여백을 줍니다. */}
          <Image
            src="/images/logo.png" // ★★★ public/images/logo.png를 가리킵니다. 파일명이 다르면 이 부분을 수정해주세요. ★★★
            alt="SuperfastSAT 로고"
            width={300} // ★ 이미지의 원본 너비에 가까운 값 또는 원하는 기본 너비 (픽셀)
            height={60}  // ★ 이미지의 원본 높이에 가까운 값 또는 원하는 기본 높이 (픽셀)
            style={{
              maxWidth: '100%', // 화면이 줄어들 때 컨테이너 너비를 넘지 않도록 합니다.
              height: 'auto',    // 너비에 맞춰 높이가 자동으로 조절되어 원본 비율을 유지합니다.
            }}
            priority // 페이지 상단의 중요한 이미지이므로 priority 속성 추가
          />
        </div>
        {/* ▲▲▲ Image 컴포넌트로 교체 완료 ▲▲▲ */}

        <p style={{ margin: '0', color: '#4B5563', fontSize: 'clamp(1rem, 2.5vw, 1.15rem)', lineHeight: 1.7 }}>
          {/* 부제 텍스트가 비어있어서 공백으로 나옵니다. 필요하시면 여기에 내용을 추가하세요. */}
            {/* 예시 부제 */}
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
          maxWidth: 960,
        }}
      >
        <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.8rem, 4vw, 2.25rem)', marginBottom: '2rem', color: '#1F2937', fontWeight: 600 }}>
          자주 묻는 질문 및 안내
        </h2>
        <FAQSection />
      </div>
    </div>
  );
}
