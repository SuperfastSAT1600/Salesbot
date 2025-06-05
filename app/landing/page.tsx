// app/landing/page.tsx (극단적 단순화 테스트용)
'use client';

import React from 'react';
// ★★★ 경로 확인: app/landing/에서 app/components/로 가려면 '../components/FAQSection'이 맞습니다. ★★★
import FAQSection from '../components/FAQSection'; // 디버깅용 FAQSection을 가져옵니다.

export default function LandingPage() {
  console.log("!!! [LandingPage DEBUG] Vercel에서 랜딩 페이지 렌더링 시도 !!!");

  return (
    <div style={{ padding: '20px', border: '5px solid blue', backgroundColor: 'lightblue' }}>
      <h1 style={{ textAlign: 'center', color: 'darkblue' }}>랜딩 페이지 테스트 영역</h1>
      <p style={{ textAlign: 'center' }}>아래에 FAQ 섹션(빨간 점선 박스)이 보여야 합니다.</p>
      
      <FAQSection /> {/* 디버깅용 FAQSection 컴포넌트만 렌더링 */}

      <p style={{ textAlign: 'center', marginTop: '20px' }}>FAQ 섹션 테스트 종료.</p>
    </div>
  );
}
