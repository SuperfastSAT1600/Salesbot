// 파일 경로: app/components/FAQSection.tsx (임시 디버깅용 코드)
'use client'

import React from 'react'; // Link와 faqs 임포트 제거

export default function FAQSection() {
  console.log("[FAQSection DEBUG] Vercel에서 이 컴포넌트가 렌더링되는지 테스트 중입니다!");

  return (
    <div style={{
      padding: '2rem',
      border: '3px dashed red', // 눈에 잘 띄도록 임시 스타일
      backgroundColor: 'lightyellow',
      textAlign: 'center',
      margin: '2rem 0'
    }}>
      <h2 style={{ color: 'red', fontSize: '1.5rem' }}>--- FAQ 섹션 테스트 ---</h2>
      <p style={{ fontSize: '1.2rem', color: 'blue' }}>
        이 메시지가 Vercel 배포 사이트에 보이면, FAQSection 컴포넌트 자체는 잘 로드된 것입니다.
      </p>
      <p>그렇다면 문제는 app/lib/faqs.ts 데이터 로딩이나 처리 과정에 있을 가능성이 높습니다.</p>
    </div>
  );
}
