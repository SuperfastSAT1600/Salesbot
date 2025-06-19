// 파일 경로: app/components/KakaoTalkButton.tsx (인라인 스타일 최종 버전)

'use client';

const KakaoTalkButton = () => {
  // 개발자님의 실제 카카오톡 상담 링크
  const kakaoChatUrl = `https://kakao-redirect-three.vercel.app/?src=instagram_인스타그램카카오톡`;

  return (
    <a
      href={kakaoChatUrl}
      target="_blank"
      rel="noopener noreferrer"
      // Tailwind className을 모두 지우고, React의 style prop을 직접 사용합니다.
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 1000,
        
        // 버튼 모양
        width: '68px',   // 텍스트를 포함하기 위해 크기를 조금 키웠습니다.
        height: '68px',
        borderRadius: '50%',
        backgroundColor: '#FEE500', // 카카오톡 노란색
        
        // 그림자 효과
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        
        // 내부 컨텐츠 정렬
        display: 'flex',
        flexDirection: 'column', // 아이콘과 텍스트를 세로로 배열
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2px', // 아이콘과 텍스트 사이 간격
        
        // 텍스트 스타일
        color: '#3C1E1E', // 카카오톡 공식 텍스트 색상
        fontSize: '11px',
        fontWeight: 'bold',
        textAlign: 'center',
        textDecoration: 'none',
        
        // 애니메이션 효과
        transition: 'transform 0.2s ease-in-out',
      }}
      // 마우스 오버 효과
      onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
      onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
    >
      {/* 아이콘 SVG */}
      <svg width="24" height="24" viewBox="0 0 24 24" role="img" aria-hidden="true">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 3C7.029 3 3 6.582 3 11.023c0 2.446 1.114 4.634 2.912 6.177L5 21l4.636-2.203c.875.258 1.803.398 2.756.398 4.971 0 9-3.582 9-8.023C21 6.582 16.971 3 12 3z" fill="#3C1E1E" />
      </svg>

      {/* 텍스트 */}
      <div style={{ lineHeight: 1 }}>즉시</div>
      <div style={{ lineHeight: 1 }}>카톡 상담</div>
    </a>
  );
};

export default KakaoTalkButton;