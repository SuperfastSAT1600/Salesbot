    // 파일 경로: app/superuniquetestpage/page.tsx
    'use client'; // 간단한 테스트를 위해 클라이언트 컴포넌트로 명시

    import React from 'react';

    export default function SuperUniqueTestPage() {
      console.log("!!! VERCEL SUPER UNIQUE TEST PAGE RENDER !!!");
      return (
        <div style={{
          backgroundColor: '#FFD700', // 아주 눈에 띄는 금색 배경
          color: '#D2042D',           // 아주 눈에 띄는 진홍색 글씨
          padding: '100px',
          textAlign: 'center',
          border: '10px dashed #0000FF', // 파란색 점선 테두리
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Comic Sans MS, cursive, sans-serif', // 눈에 띄는 폰트
        }}>
          <h1 style={{ fontSize: '5rem', marginBottom: '30px' }}>🎉 VERCEL 새 경로 테스트 성공! 🎉</h1>
          <p style={{ fontSize: '2.5rem' }}>이 화면이 보인다면, Vercel은 새 파일을 올바르게 배포하고 있습니다!</p>
          <p style={{ fontSize: '1.5rem', marginTop: '30px' }}>이전 /landing 페이지 문제는 다른 원인일 가능성이 높습니다.</p>
        </div>
      );
    }
    