// 파일 경로: app/landing/page.tsx (브랜드 컬러 #071BE9 기반 Fancy 디자인)

'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import KakaoTalkButton from '../components/KakaoTalkButton';

export default function LandingPage() {
  // 자동 이미지 전환을 위한 useEffect
  useEffect(() => {
    let currentImageIndex = 0;
    const totalImages = 2;
    let isPaused = false;
    
    // 전역 변수 초기화
    (window as any).pauseConfidenceAutoChange = false;
    
    const autoChangeImage = () => {
      if (isPaused || (window as any).pauseConfidenceAutoChange) return;
      
      const images = document.querySelectorAll('.confidence-image') as NodeListOf<HTMLElement>;
      const buttons = document.querySelectorAll('.confidence-button') as NodeListOf<HTMLElement>;
      
      // 현재 이미지 숨기기
      if (images[currentImageIndex]) {
        images[currentImageIndex].style.opacity = '0';
      }
      if (buttons[currentImageIndex]) {
        buttons[currentImageIndex].style.backgroundColor = '#E5E7EB';
        buttons[currentImageIndex].style.transform = 'scale(1)';
      }
      
      // 다음 이미지로 이동
      currentImageIndex = (currentImageIndex + 1) % totalImages;
      
      // 새 이미지 보이기
      if (images[currentImageIndex]) {
        images[currentImageIndex].style.opacity = '1';
      }
      if (buttons[currentImageIndex]) {
        buttons[currentImageIndex].style.backgroundColor = '#071BE9';
        buttons[currentImageIndex].style.transform = 'scale(1.2)';
      }
    };
    
    // 3초마다 이미지 자동 전환
    const interval = setInterval(autoChangeImage, 3000);
    
    // 이미지 전환 버튼 클릭 시 자동 전환 일시 중지
    const pauseAutoChange = () => {
      isPaused = true;
      // 5초 후 자동 전환 재개
      setTimeout(() => {
        isPaused = false;
      }, 5000);
    };
    
    // 버튼에 이벤트 리스너 추가
    const buttons = document.querySelectorAll('.confidence-button');
    buttons.forEach(button => {
      button.addEventListener('click', pauseAutoChange);
    });
    
    return () => {
      clearInterval(interval);
      buttons.forEach(button => {
        button.removeEventListener('click', pauseAutoChange);
      });
    };
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#ffffff',
      fontFamily: '"Inter", "Pretendard", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    }}>
      {/* 헤더 네비게이션 */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: 'rgba(255, 255, 255, 0.98)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(7, 27, 233, 0.1)',
        padding: 'clamp(1rem, 3vw, 1.25rem) 0',
        boxShadow: '0 4px 20px rgba(7, 27, 233, 0.08)'
      }}>
        <nav style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 clamp(1rem, 4vw, 2rem)',
        display: 'flex',
          justifyContent: 'space-between',
        alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{
        display: 'flex',
        alignItems: 'center',
            gap: 'clamp(1rem, 3vw, 2rem)',
            flexWrap: 'wrap'
          }}>
          <Image
            src="/images/color-logo.png"
            alt="SuperfastSAT 로고"
              width={140}
              height={45}
            style={{
              height: 'auto',
                width: 'clamp(100px, 25vw, 140px)'
            }}
            priority
          />
            <a
              href="https://blog.naver.com/superfastsat"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#071BE9',
                textDecoration: 'none',
                fontSize: 'clamp(0.875rem, 2.5vw, 1rem)',
                fontWeight: '500',
                fontFamily: '"Inter", sans-serif',
                letterSpacing: '0.025em',
                transition: 'all 0.3s ease',
                padding: 'clamp(0.375rem, 2vw, 0.5rem) clamp(0.75rem, 2.5vw, 1rem)',
                borderRadius: '8px',
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = '#1E40AF';
                e.currentTarget.style.backgroundColor = 'rgba(7, 27, 233, 0.05)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = '#071BE9';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              공식 블로그
            </a>
        </div>
                      <a 
              href="https://kakao-redirect-three.vercel.app/?src=instagram_세일즈페이지오픈카톡방"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: 'none',
                display: 'inline-block'
              }}
            >
              <button style={{
                background: 'linear-gradient(135deg, #071BE9 0%, #1E40AF 100%)',
                color: 'white',
                border: 'none',
                padding: 'clamp(0.75rem, 2.5vw, 0.875rem) clamp(1.5rem, 4vw, 2rem)',
                borderRadius: '12px',
                fontSize: 'clamp(0.875rem, 2.5vw, 1rem)',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontFamily: '"Inter", sans-serif',
                letterSpacing: '0.025em',
                boxShadow: '0 8px 25px rgba(7, 27, 233, 0.3)',
                position: 'relative',
                overflow: 'hidden',
                whiteSpace: 'nowrap'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 35px rgba(7, 27, 233, 0.4)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(7, 27, 233, 0.3)';
              }}>
                상담 신청
              </button>
            </a>
        </nav>
      </header>
      
      {/* 히어로 섹션 */}
      <section style={{
        paddingTop: 'clamp(120px, 20vw, 140px)',
        paddingBottom: 'clamp(4rem, 10vw, 6rem)',
        background: 'linear-gradient(135deg, #071BE9 0%, #1E40AF 50%, #3B82F6 100%)',
        color: 'white',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* 영상 배경 - 데스크톱용 */}
        <video
          autoPlay
          muted
          loop
          playsInline
        style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            minWidth: '100%',
            minHeight: '100%',
            width: 'auto',
            height: 'auto',
            transform: 'translate(-50%, -50%)',
            objectFit: 'cover',
            filter: 'blur(8px) brightness(0.3)',
            zIndex: 0
          }}
          className="desktop-video"
        >
          <source src="/images/video/by test_2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* 영상 배경 - 모바일용 */}
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            minWidth: '100%',
            minHeight: '100%',
            width: 'auto',
            height: 'auto',
            transform: 'translate(-50%, -50%)',
            objectFit: 'cover',
            filter: 'blur(8px) brightness(0.3)',
            zIndex: 0
          }}
          className="mobile-video"
        >
          <source src="/images/video/by test_3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* 어두운 오버레이 */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, rgba(7, 27, 233, 0.03) 0%, rgba(30, 64, 175, 0.03) 50%, rgba(59, 130, 246, 0.03) 100%)',
          zIndex: 1
        }} />
        
        {/* 배경 장식 요소 */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: 'clamp(100px, 25vw, 200px)',
          height: 'clamp(100px, 25vw, 200px)',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite',
          zIndex: 1
        }} />
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: 'clamp(75px, 20vw, 150px)',
          height: 'clamp(75px, 20vw, 150px)',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite reverse',
          zIndex: 1
        }} />
        
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 clamp(1rem, 4vw, 2rem)',
          position: 'relative',
          zIndex: 2
        }}>
          <div style={{
            fontSize: 'clamp(2.5rem, 7vw, 5rem)',
            fontWeight: '900',
            marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
            lineHeight: 1.1,
            fontFamily: '"Inter", sans-serif',
            letterSpacing: '-0.03em',
            background: 'linear-gradient(135deg, #FFFFFF 0%, #FCD34D 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            SAT <span style={{ 
              background: 'linear-gradient(135deg, #FCD34D 0%, #F59E0B 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>국가대표</span>
          </div>
          <h1 style={{
            fontSize: 'clamp(1.8rem, 5vw, 3rem)',
            fontWeight: '700',
            marginBottom: 'clamp(2rem, 5vw, 2.5rem)',
            lineHeight: 1.2,
            fontFamily: '"Inter", sans-serif',
            letterSpacing: '-0.02em',
            textShadow: '0 2px 20px rgba(0, 0, 0, 0.1)'
          }}>
            SuperfastSAT가 만든<br />
            <span style={{ color: '#FCD34D', fontWeight: '800' }}>1:1 맞춤수업</span>
          </h1>
          <p style={{
            fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
            marginBottom: 'clamp(3rem, 8vw, 4rem)',
            opacity: 0.95,
            maxWidth: '700px',
            marginLeft: 'auto',
            marginRight: 'auto',
            fontFamily: '"Inter", sans-serif',
            fontWeight: '400',
            letterSpacing: '0.02em',
            lineHeight: 1.6
          }}>
            SAT 고득점자들이 '진짜로' 선택한 수업
          </p>
          
          {/* 통계 카드들 */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(2rem, 5vw, 3rem)',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.15)',
              padding: 'clamp(2rem, 5vw, 3rem) clamp(1.5rem, 4vw, 2rem)',
              borderRadius: '24px',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: 'clamp(180px, 40vw, 200px)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
            }}>
              <div style={{ 
                fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', 
                fontWeight: '900', 
                marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
                fontFamily: '"Inter", sans-serif',
                letterSpacing: '-0.03em',
                color: '#FCD34D',
                lineHeight: 1.1,
                whiteSpace: 'nowrap'
              }}>
                총 8,724명
              </div>
              <div style={{ 
                fontSize: 'clamp(1rem, 2vw, 1.2rem)', 
                opacity: 0.95,
                fontFamily: '"Inter", sans-serif',
                fontWeight: '500',
                letterSpacing: '0.02em',
                lineHeight: 1.4
              }}>
                SuperfastSAT로<br />공부한 학생
              </div>
            </div>
            <div style={{
              background: 'rgba(255, 255, 255, 0.15)',
              padding: 'clamp(2rem, 5vw, 3rem) clamp(1.5rem, 4vw, 2rem)',
              borderRadius: '24px',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: 'clamp(180px, 40vw, 200px)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
            }}>
              <div style={{ 
                fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', 
                fontWeight: '900', 
                marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
                fontFamily: '"Inter", sans-serif',
                letterSpacing: '-0.03em',
                color: '#FCD34D',
                lineHeight: 1.1,
                whiteSpace: 'nowrap'
              }}>
                총 1,750명
              </div>
              <div style={{ 
                fontSize: 'clamp(1rem, 2vw, 1.2rem)', 
                opacity: 0.95,
                fontFamily: '"Inter", sans-serif',
                fontWeight: '500',
                letterSpacing: '0.02em',
                lineHeight: 1.4
              }}>
                1500점 이상<br />달성한 학생
              </div>
            </div>
            <div style={{
              background: 'rgba(255, 255, 255, 0.15)',
              padding: 'clamp(2rem, 5vw, 3rem) clamp(1.5rem, 4vw, 2rem)',
              borderRadius: '24px',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: 'clamp(180px, 40vw, 200px)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
            }}>
              <div style={{ 
                fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', 
                fontWeight: '900', 
                marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
                fontFamily: '"Inter", sans-serif',
                letterSpacing: '-0.03em',
                color: '#FCD34D',
                lineHeight: 1.1,
                whiteSpace: 'nowrap'
              }}>
                94%
              </div>
              <div style={{ 
                fontSize: 'clamp(1rem, 2vw, 1.2rem)', 
                opacity: 0.95,
                fontFamily: '"Inter", sans-serif',
                fontWeight: '500',
                letterSpacing: '0.02em',
                lineHeight: 1.4
              }}>
                SAT 시험 문제<br />적중률
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 성과 섹션 */}
      <section style={{
        padding: '6rem 0',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* 배경 장식 */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(7, 27, 233, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          width: '150px',
          height: '150px',
          background: 'radial-gradient(circle, rgba(7, 27, 233, 0.06) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite reverse'
        }} />
        
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 2.5rem)',
            fontWeight: '700',
            color: '#071BE9',
            marginBottom: 'clamp(1rem, 3vw, 1rem)',
            fontFamily: '"Inter", sans-serif',
            letterSpacing: '0.025em',
            textAlign: 'center'
          }}>
            SuperfastSAT가 하면 SAT 성적이 올라요
        </h2>
          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
            color: '#64748B',
            fontFamily: '"Inter", sans-serif',
            letterSpacing: '0.01em',
            textAlign: 'center',
            marginBottom: 'clamp(2rem, 5vw, 3rem)',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto',
            padding: '0 clamp(1rem, 4vw, 0)'
          }}>
            체계적인 커리큘럼과 전문가의 일대일 지도로<br />
            학생들의 SAT 점수를 향상시킵니다
          </p>
          
          {/* 성과 카드들 */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(2rem, 5vw, 2.5rem)',
            padding: '0 clamp(1rem, 4vw, 0)'
          }}>
            {/* 카드 1: 10명 중 9명의 점수가 올랐습니다 */}
            <div style={{
              background: 'linear-gradient(135deg, #071BE9 0%, #1E40AF 100%)',
              padding: 'clamp(2.5rem, 5vw, 3rem) clamp(1.5rem, 4vw, 2rem)',
              borderRadius: '24px',
              color: 'white',
              textAlign: 'center',
              transition: 'all 0.4s ease',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(7, 27, 233, 0.15)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              minHeight: 'clamp(280px, 50vw, 320px)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 25px 50px rgba(7, 27, 233, 0.25)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(7, 27, 233, 0.15)';
            }}>
              {/* 상단 장식선 */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, #FCD34D 0%, #F59E0B 100%)'
              }} />
              
              <div style={{ 
                fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', 
                fontWeight: '700', 
                marginBottom: 'clamp(1.5rem, 4vw, 2rem)',
                fontFamily: '"Inter", sans-serif',
                letterSpacing: '0.02em',
                opacity: 1,
                lineHeight: 1.3,
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
              }}>
                10명 중 9명의<br />점수가 올랐습니다
              </div>
              <div style={{ 
                fontSize: 'clamp(3.5rem, 8vw, 4.5rem)', 
                fontWeight: '900', 
                color: '#FCD34D', 
                marginBottom: 'clamp(0.5rem, 2vw, 1rem)',
                fontFamily: '"Inter", sans-serif',
                letterSpacing: '-0.03em',
                textShadow: '0 4px 20px rgba(252, 211, 77, 0.3)',
                lineHeight: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 'clamp(0.5rem, 2vw, 1rem)'
              }}>
                <span>91%</span>
                <span style={{
                  fontSize: 'clamp(3.5rem, 8vw, 4.5rem)',
                  fontWeight: '900',
                  color: '#FCD34D',
                  fontFamily: '"Inter", sans-serif',
                  letterSpacing: '-0.03em',
                  textShadow: '0 4px 20px rgba(252, 211, 77, 0.3)'
                }}>
                  상승
                </span>
              </div>
            </div>
            
            {/* 카드 2: 일대일 맞춤 수업을 하기 때문입니다 */}
            <div style={{
              background: 'linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%)',
              padding: 'clamp(2.5rem, 5vw, 3rem) clamp(1.5rem, 4vw, 2rem)',
              borderRadius: '24px',
              color: 'white',
              textAlign: 'center',
              transition: 'all 0.4s ease',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(30, 64, 175, 0.15)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              minHeight: 'clamp(280px, 50vw, 320px)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 25px 50px rgba(30, 64, 175, 0.25)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(30, 64, 175, 0.15)';
            }}>
              {/* 상단 장식선 */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, #FCD34D 0%, #F59E0B 100%)'
              }} />
              
              <div style={{ 
                fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', 
                fontWeight: '700', 
                marginBottom: 'clamp(2rem, 5vw, 2.5rem)',
                fontFamily: '"Inter", sans-serif',
                letterSpacing: '0.02em',
                opacity: 1,
                lineHeight: 1.3,
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
              }}>
                일대일 맞춤 수업을<br />하기 때문입니다
              </div>
              {/* 3가지 수업 타입 */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'clamp(0.75rem, 2vw, 1rem)',
                alignItems: 'center'
              }}>
                <div style={{
                  padding: 'clamp(0.75rem, 2vw, 1rem)',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  borderRadius: '12px',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  width: '100%',
                  maxWidth: '200px'
                }}>
                  <span style={{ 
                    fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', 
                    fontWeight: '700',
                    color: '#FCD34D',
                    fontFamily: '"Inter", sans-serif',
                    letterSpacing: '0.02em',
                    textShadow: '0 2px 8px rgba(252, 211, 77, 0.3)'
                  }}>
                    개념 수업
                  </span>
                </div>
                <div style={{
                  padding: 'clamp(0.75rem, 2vw, 1rem)',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  borderRadius: '12px',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  width: '100%',
                  maxWidth: '200px'
                }}>
                  <span style={{ 
                    fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', 
                    fontWeight: '700',
                    color: '#FCD34D',
                    fontFamily: '"Inter", sans-serif',
                    letterSpacing: '0.02em',
                    textShadow: '0 2px 8px rgba(252, 211, 77, 0.3)'
                  }}>
                    문제 풀이 수업
                  </span>
                </div>
                <div style={{
                  padding: 'clamp(0.75rem, 2vw, 1rem)',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  borderRadius: '12px',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  width: '100%',
                  maxWidth: '200px'
                }}>
                  <span style={{ 
                    fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', 
                    fontWeight: '700',
                    color: '#FCD34D',
                    fontFamily: '"Inter", sans-serif',
                    letterSpacing: '0.02em',
                    textShadow: '0 2px 8px rgba(252, 211, 77, 0.3)'
                  }}>
                    Final Touch 수업
                  </span>
                </div>
              </div>
            </div>
            
            {/* 카드 3: SAT 수업, 저희가 제일 잘 알아요 */}
            <div style={{
              background: 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)',
              padding: 'clamp(2.5rem, 5vw, 3rem) clamp(1.5rem, 4vw, 2rem)',
              borderRadius: '24px',
              color: 'white',
              textAlign: 'center',
              transition: 'all 0.4s ease',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(59, 130, 246, 0.15)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: 'clamp(280px, 50vw, 320px)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 25px 50px rgba(59, 130, 246, 0.25)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(59, 130, 246, 0.15)';
            }}>
              {/* 상단 장식선 */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, #FCD34D 0%, #F59E0B 100%)'
              }} />
              
              <div style={{ 
                fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', 
                fontWeight: '700', 
                marginBottom: 'clamp(1.5rem, 4vw, 2rem)',
                fontFamily: '"Inter", sans-serif',
                letterSpacing: '0.02em',
                opacity: 1,
                lineHeight: 1.3,
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
              }}>
                SAT 수업,<br />저희가 제일 잘 알아요
              </div>
              <div style={{ 
                fontSize: 'clamp(0.9rem, 2.5vw, 1rem)', 
                fontWeight: '600', 
                color: '#FCD34D', 
                marginBottom: 'clamp(0.75rem, 2vw, 1rem)',
                fontFamily: '"Inter", sans-serif',
                letterSpacing: '0.01em',
                textShadow: '0 2px 10px rgba(252, 211, 77, 0.3)'
              }}>
                누적 수업 시간
              </div>
              <div style={{ 
                fontSize: 'clamp(2.5rem, 6vw, 3rem)', 
                fontWeight: '900', 
                color: '#FCD34D', 
                marginBottom: 'clamp(1.5rem, 4vw, 2rem)',
                fontFamily: '"Inter", sans-serif',
                letterSpacing: '-0.03em',
                textShadow: '0 4px 20px rgba(252, 211, 77, 0.3)',
                lineHeight: 1,
                whiteSpace: 'nowrap',
                textAlign: 'center'
              }}>
                +12,562,560분
              </div>
              {/* 간단한 성장 아이콘 */}
              <div style={{
                fontSize: 'clamp(2rem, 5vw, 2.5rem)',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
              }}>
                📈
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 맞춤수업 섹션 - 원래 테이블 형태로 복원 */}
      <section style={{
        padding: 'clamp(4rem, 10vw, 6rem) 0',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)',
        position: 'relative'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 clamp(1rem, 4vw, 2rem)'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '900',
            marginBottom: 'clamp(2.5rem, 6vw, 4rem)',
            color: '#071BE9',
            fontFamily: '"Inter", sans-serif',
            letterSpacing: '-0.03em',
            textAlign: 'center'
          }}>
            SuperfastSAT에만 있는<br />
            <span style={{ color: '#1F2937' }}>두 가지 맞춤수업</span>
          </h2>
          
          {/* 맞춤수업 섹션 - 원래 테이블 형태로 복원 */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '0',
            border: '1px solid #D1D5DB',
            borderRadius: '12px',
            overflow: 'hidden',
            marginBottom: '4rem',
            boxShadow: '0 4px 20px rgba(7, 27, 233, 0.08)'
          }}>
            {/* 헤더 행 */}
            <div style={{
              background: 'linear-gradient(135deg, #071BE9 0%, #1E40AF 100%)',
              color: 'white',
              padding: 'clamp(1rem, 3vw, 1.25rem)',
              fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
              fontWeight: '700',
              fontFamily: '"Inter", sans-serif',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              구분
            </div>
            <div style={{
              background: 'linear-gradient(135deg, #071BE9 0%, #1E40AF 100%)',
              color: 'white',
              padding: 'clamp(1rem, 3vw, 1.25rem)',
              fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
              fontWeight: '700',
              fontFamily: '"Inter", sans-serif',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              1:1 수업
            </div>
            <div style={{
              background: 'linear-gradient(135deg, #071BE9 0%, #1E40AF 100%)',
              color: 'white',
              padding: 'clamp(1rem, 3vw, 1.25rem)',
              fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
              fontWeight: '700',
              fontFamily: '"Inter", sans-serif',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              1:1 압구정 수업
            </div>
            
            {/* 수강 과목 행 */}
            <div style={{
              backgroundColor: '#EBF4FF',
              padding: 'clamp(1rem, 3vw, 1.25rem)',
              fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
              fontWeight: '600',
              fontFamily: '"Inter", sans-serif',
              color: '#071BE9',
              borderRight: '1px solid #D1D5DB',
              borderBottom: '1px solid #D1D5DB',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              수강 과목
            </div>
            <div style={{
              backgroundColor: 'white',
              padding: 'clamp(1rem, 3vw, 1.25rem)',
              fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
              fontFamily: '"Inter", sans-serif',
              color: '#1F2937',
              borderRight: '1px solid #D1D5DB',
              borderBottom: '1px solid #D1D5DB',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              RW / Math
            </div>
            <div style={{
              backgroundColor: 'white',
              padding: 'clamp(1rem, 3vw, 1.25rem)',
              fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
              fontFamily: '"Inter", sans-serif',
              color: '#1F2937',
              borderBottom: '1px solid #D1D5DB',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              RW / Math
            </div>
            
            {/* 선생님/학습코치 행 */}
            <div style={{
              backgroundColor: '#EBF4FF',
              padding: 'clamp(1rem, 3vw, 1.25rem)',
              fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
              fontWeight: '600',
              fontFamily: '"Inter", sans-serif',
              color: '#071BE9',
              borderRight: '1px solid #D1D5DB',
              borderBottom: '1px solid #D1D5DB',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              선생님
            </div>
            <div style={{
              backgroundColor: 'white',
              padding: 'clamp(1rem, 3vw, 1.25rem)',
              fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
              fontFamily: '"Inter", sans-serif',
              color: '#1F2937',
              borderRight: '1px solid #D1D5DB',
              borderBottom: '1px solid #D1D5DB',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              맞춤형 드림스쿨<br />선생님 배정
            </div>
            <div style={{
              backgroundColor: 'white',
              padding: 'clamp(1rem, 3vw, 1.25rem)',
              fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
              fontFamily: '"Inter", sans-serif',
              color: '#1F2937',
              borderBottom: '1px solid #D1D5DB',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              드림스쿨 명문대<br />학습코치
            </div>
            
            {/* 수업 진행 방식 행 */}
            <div style={{
              backgroundColor: '#EBF4FF',
              padding: 'clamp(1rem, 3vw, 1.25rem)',
              fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
              fontWeight: '600',
              fontFamily: '"Inter", sans-serif',
              color: '#071BE9',
              borderRight: '1px solid #D1D5DB',
              borderBottom: '1px solid #D1D5DB',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              수업 진행 방식
            </div>
            <div style={{
              backgroundColor: 'white',
              padding: 'clamp(1rem, 3vw, 1.25rem)',
              fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
              fontFamily: '"Inter", sans-serif',
              color: '#1F2937',
              borderRight: '1px solid #D1D5DB',
              borderBottom: '1px solid #D1D5DB',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              일대일 맞춤형 수업
            </div>
            <div style={{
              backgroundColor: 'white',
              padding: 'clamp(1rem, 3vw, 1.25rem)',
              fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
              fontFamily: '"Inter", sans-serif',
              color: '#1F2937',
              borderBottom: '1px solid #D1D5DB',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              문제 풀이로<br />빈틈 채우기
            </div>
            
            {/* 추천 학년 행 */}
            <div style={{
              backgroundColor: '#EBF4FF',
              padding: 'clamp(1rem, 3vw, 1.25rem)',
              fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
              fontWeight: '600',
              fontFamily: '"Inter", sans-serif',
              color: '#071BE9',
              borderRight: '1px solid #D1D5DB',
              borderBottom: '1px solid #D1D5DB',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              추천 학년
            </div>
            <div style={{
              backgroundColor: 'white',
              padding: 'clamp(1rem, 3vw, 1.25rem)',
              fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
              fontFamily: '"Inter", sans-serif',
              color: '#1F2937',
              borderRight: '1px solid #D1D5DB',
              borderBottom: '1px solid #D1D5DB',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              G9 ~ G12
            </div>
            <div style={{
              backgroundColor: 'white',
              padding: 'clamp(1rem, 3vw, 1.25rem)',
              fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
              fontFamily: '"Inter", sans-serif',
              color: '#1F2937',
              borderBottom: '1px solid #D1D5DB',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              G10 ~ G12
            </div>
            
            {/* 추천 성적대 행 */}
            <div style={{
              backgroundColor: '#EBF4FF',
              padding: 'clamp(1rem, 3vw, 1.25rem)',
              fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
              fontWeight: '600',
              fontFamily: '"Inter", sans-serif',
              color: '#071BE9',
              borderRight: '1px solid #D1D5DB',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              추천 성적대
            </div>
            <div style={{
              backgroundColor: 'white',
              padding: 'clamp(1rem, 3vw, 1.25rem)',
              fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
              fontFamily: '"Inter", sans-serif',
              color: '#1F2937',
              borderRight: '1px solid #D1D5DB',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              모든 성적대
            </div>
            <div style={{
              backgroundColor: 'white',
              padding: 'clamp(1rem, 3vw, 1.25rem)',
              fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
              fontFamily: '"Inter", sans-serif',
              color: '#1F2937',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              1300점 이상
            </div>
          </div>

          {/* CTA 버튼 - 맞춤 학습 섹션 내부로 이동 */}

        </div>
      </section>

      {/* 진단 테스트 섹션 */}
      <section style={{
        padding: 'clamp(6rem, 15vw, 10rem) 0',
        background: 'linear-gradient(135deg, #071BE9 0%, #1E40AF 50%, #3B82F6 100%)',
        color: 'white',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* 영상 배경 */}
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            minWidth: '100%',
            minHeight: '100%',
            width: 'auto',
            height: 'auto',
            transform: 'translate(-50%, -50%)',
            objectFit: 'cover',
            zIndex: 0
          }}
        >
          <source src="/images/video/Diag3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* 배경 장식 요소 */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: 'clamp(100px, 25vw, 200px)',
          height: 'clamp(100px, 25vw, 200px)',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite',
          zIndex: 1
        }} />
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: 'clamp(75px, 20vw, 150px)',
          height: 'clamp(75px, 20vw, 150px)',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite reverse',
          zIndex: 1
        }} />
        
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 clamp(1rem, 4vw, 2rem)',
          position: 'relative',
          zIndex: 2
        }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: '800',
            marginBottom: 'clamp(1.5rem, 4vw, 2.5rem)',
            fontFamily: '"Inter", sans-serif',
            letterSpacing: '-0.02em',
            textShadow: '0 4px 20px rgba(0, 0, 0, 0.9), 0 0 40px rgba(255, 255, 255, 0.8), 0 0 60px rgba(255, 255, 255, 0.6)',
            color: '#FFFFFF',
            filter: 'drop-shadow(0 0 25px rgba(255, 255, 255, 0.9))',
            position: 'relative',
            zIndex: 3
          }}>
            학습 진단 테스트
          </h2>
          <p style={{
            fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
            marginBottom: 'clamp(2.5rem, 6vw, 3.5rem)',
            opacity: 1,
            fontFamily: '"Inter", sans-serif',
            fontWeight: '600',
            letterSpacing: '0.02em',
            lineHeight: 1.6,
            maxWidth: '700px',
            marginLeft: 'auto',
            marginRight: 'auto',
            textShadow: '0 2px 15px rgba(0, 0, 0, 0.9), 0 0 30px rgba(255, 255, 255, 0.5), 0 0 50px rgba(255, 255, 255, 0.3)',
            color: '#FFFFFF',
            filter: 'drop-shadow(0 0 15px rgba(255, 255, 255, 0.6))',
            position: 'relative',
            zIndex: 3
          }}>
            <span style={{
              position: 'relative',
              zIndex: 3
            }}>
              당신만의 학습 패턴을 파악하고<br />
              맞춤형 SAT 학습 전략을 제시해드립니다
            </span>
          </p>
          
          {/* CTA 버튼 */}
          <a 
            href="https://diagnostictest.superfastsat.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: 'none',
              display: 'inline-block'
            }}
          >
            <button style={{
              background: 'linear-gradient(135deg, #FCD34D 0%, #F59E0B 100%)',
              color: '#1F2937',
              border: 'none',
              padding: 'clamp(1rem, 3vw, 1.25rem) clamp(2rem, 5vw, 2.5rem)',
              borderRadius: '16px',
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 32px rgba(252, 211, 77, 0.4)',
              fontFamily: '"Inter", sans-serif',
              letterSpacing: '0.025em',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(252, 211, 77, 0.5)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(252, 211, 77, 0.4)';
            }}>
              학습 진단 테스트 시작하기
            </button>
          </a>
        </div>
      </section>

      {/* 수업 방식 소개 섹션 */}
      <section style={{
        padding: 'clamp(4rem, 10vw, 6rem) 0',
        background: 'linear-gradient(135deg, #F8FAFF 0%, #F1F5FF 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* 배경 장식 요소 */}
        <div style={{
          position: 'absolute',
          top: '-30px',
          left: '-30px',
          width: 'clamp(100px, 25vw, 200px)',
          height: 'clamp(100px, 25vw, 200px)',
          background: 'radial-gradient(circle, rgba(7, 27, 233, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          zIndex: 0
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-20px',
          right: '-20px',
          width: 'clamp(75px, 20vw, 150px)',
          height: 'clamp(75px, 20vw, 150px)',
          background: 'radial-gradient(circle, rgba(7, 27, 233, 0.06) 0%, transparent 70%)',
          borderRadius: '50%',
          zIndex: 0
        }} />
        
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 clamp(1rem, 4vw, 2rem)',
          position: 'relative',
          zIndex: 1
        }}>
          {/* 섹션 제목 */}
          <div style={{
            textAlign: 'center',
            marginBottom: 'clamp(3rem, 8vw, 4rem)'
          }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: '800',
              color: '#071BE9',
              marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
              fontFamily: '"Inter", sans-serif',
              letterSpacing: '-0.02em'
            }}>
              이렇게 수업합니다
            </h2>
            <p style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
              color: '#64748B',
              fontFamily: '"Inter", sans-serif',
              fontWeight: '500',
              letterSpacing: '0.02em',
              lineHeight: 1.6,
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              SuperfastSAT만의 특별한 수업 방식을 직접 확인해보세요
            </p>
          </div>

          {/* 수업 방식 이미지 */}
          <div style={{
            textAlign: 'center',
            position: 'relative'
          }}>
            <Image
              src="/images/reviews/SSS.png"
              alt="SuperfastSAT 수업 방식"
              width={800}
              height={600}
              style={{
                width: 'clamp(300px, 90vw, 800px)',
                height: 'auto',
                borderRadius: 'clamp(16px, 3vw, 24px)',
                boxShadow: '0 20px 60px rgba(7, 27, 233, 0.15)',
                border: '3px solid rgba(7, 27, 233, 0.1)',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.boxShadow = '0 25px 80px rgba(7, 27, 233, 0.25)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(7, 27, 233, 0.15)';
              }}
            />
            
            {/* 이미지 하단 설명 */}
            <div style={{
              marginTop: 'clamp(2rem, 5vw, 3rem)',
              padding: 'clamp(1.5rem, 4vw, 2rem)',
              background: 'rgba(255, 255, 255, 0.8)',
              borderRadius: 'clamp(12px, 2vw, 16px)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(7, 27, 233, 0.1)',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              <p style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
                color: '#374151',
                fontFamily: '"Inter", sans-serif',
                fontWeight: '500',
                letterSpacing: '0.02em',
                lineHeight: 1.6,
                margin: 0
              }}>
                <span style={{ color: '#071BE9', fontWeight: '700' }}>1:1 맞춤형 수업</span>부터 
                <span style={{ color: '#071BE9', fontWeight: '700' }}>문제 풀이 중심</span>까지, 
                학생 개개인의 수준과 목표에 맞춘 체계적인 학습 시스템을 제공합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Confidence Rating 기반 세일즈 섹션 */}
      <section style={{
        padding: 'clamp(4rem, 10vw, 6rem) 0',
        backgroundColor: '#ffffff',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* 배경 장식 요소 */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '-100px',
          width: 'clamp(150px, 30vw, 300px)',
          height: 'clamp(150px, 30vw, 300px)',
          background: 'radial-gradient(circle, rgba(7, 27, 233, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          zIndex: 0
        }} />
        <div style={{
          position: 'absolute',
          bottom: '20%',
          right: '-80px',
          width: 'clamp(120px, 25vw, 250px)',
          height: 'clamp(120px, 25vw, 250px)',
          background: 'radial-gradient(circle, rgba(7, 27, 233, 0.06) 0%, transparent 70%)',
          borderRadius: '50%',
          zIndex: 0
        }} />
        
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 clamp(1rem, 4vw, 2rem)',
          position: 'relative',
          zIndex: 1
        }}>
          {/* 섹션 제목 */}
          <div style={{
            textAlign: 'center',
            marginBottom: 'clamp(3rem, 6vw, 4rem)'
          }}>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
              fontWeight: '800',
              color: '#071BE9',
              marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
              fontFamily: '"Inter", sans-serif',
              letterSpacing: '-0.02em',
              lineHeight: 1.2
            }}>
              왜 우리는<br />
              <span style={{ color: '#FCD34D' }}>고득점을 만들어 낼 수 있을까요?</span>
            </h2>
            <p style={{
              fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
              color: '#64748B',
              fontFamily: '"Inter", sans-serif',
              fontWeight: '500',
              letterSpacing: '0.02em',
              lineHeight: 1.6,
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              문제를 풀 때 느낀 <span style={{ color: '#071BE9', fontWeight: '600' }}>확신</span>까지 데이터화합니다.<br />
              <span style={{ color: '#071BE9', fontWeight: '600' }}>데이터</span>를 바탕으로 <span style={{ color: '#071BE9', fontWeight: '600' }}>목표</span>까지 <span style={{ color: '#071BE9', fontWeight: '600' }}>오차없이</span> 나아갑니다.
            </p>
          </div>

          {/* Confidence Rating 이미지 전환 섹션 */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 'clamp(2rem, 4vw, 3rem)'
          }}>
            {/* 이미지 전환 컨테이너 */}
            <div style={{
              position: 'relative',
              width: 'clamp(300px, 85vw, 800px)',
              height: 'clamp(200px, 60vw, 500px)',
              borderRadius: 'clamp(16px, 3vw, 20px)',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(7, 27, 233, 0.15)',
              border: '3px solid rgba(7, 27, 233, 0.1)',
              backgroundColor: '#ffffff',
              margin: '0 auto'
            }}>
              {/* 이미지들 */}
              <div style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}>
                <Image
                  src="/images/Confidence 1.png"
                  alt="Confidence Rating 시스템 1"
                  width={800}
                  height={500}
                  style={{
                    maxWidth: 'calc(100% - clamp(1rem, 4vw, 2rem))',
                    maxHeight: 'calc(100% - clamp(1rem, 4vw, 2rem))',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'scale-down',
                    objectPosition: 'center',
                    padding: 'clamp(1rem, 4vw, 2rem)',
                    opacity: 1,
                    transition: 'all 0.6s ease-in-out',
                    display: 'block',
                    margin: 'auto'
                  }}
                  className="confidence-image active"
                />
                <Image
                  src="/images/Confidence 2.png"
                  alt="Confidence Rating 시스템 2"
                  width={800}
                  height={500}
                  style={{
                    maxWidth: 'calc(100% - clamp(1rem, 4vw, 2rem))',
                    maxHeight: 'calc(100% - clamp(1rem, 4vw, 2rem))',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'scale-down',
                    objectPosition: 'center',
                    padding: 'clamp(1rem, 4vw, 2rem)',
                    opacity: 0,
                    transition: 'all 0.6s ease-in-out',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    display: 'block'
                  }}
                  className="confidence-image"
                />


              </div>
            </div>

            {/* 이미지 전환 버튼들 */}
            <div style={{
              display: 'flex',
              gap: 'clamp(0.75rem, 2.5vw, 1.25rem)',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginTop: 'clamp(1rem, 3vw, 1.5rem)'
            }}>
              {[1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => {
                    const images = document.querySelectorAll('.confidence-image') as NodeListOf<HTMLElement>;
                    const buttons = document.querySelectorAll('.confidence-button') as NodeListOf<HTMLElement>;
                    
                    // 이미지 전환
                    images.forEach((img, i) => {
                      if (i === index - 1) {
                        img.style.opacity = '1';
                      } else {
                        img.style.opacity = '0';
                      }
                    });
                    
                    // 버튼 상태 업데이트
                    buttons.forEach((btn, i) => {
                      if (i === index - 1) {
                        btn.style.backgroundColor = '#071BE9';
                        btn.style.transform = 'scale(1.3)';
                      } else {
                        btn.style.backgroundColor = '#E5E7EB';
                        btn.style.transform = 'scale(1)';
                      }
                    });
                    
                    // 자동 전환 일시 중지 (전역 변수로 제어)
                    (window as any).pauseConfidenceAutoChange = true;
                    setTimeout(() => {
                      (window as any).pauseConfidenceAutoChange = false;
                    }, 5000);
                  }}
                  className="confidence-button"
                  style={{
                    width: 'clamp(14px, 3.5vw, 18px)',
                    height: 'clamp(14px, 3.5vw, 18px)',
                    borderRadius: '50%',
                    border: '2px solid rgba(7, 27, 233, 0.2)',
                    backgroundColor: index === 1 ? '#071BE9' : '#F8FAFF',
                    cursor: 'pointer',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: index === 1 ? 'scale(1.3)' : 'scale(1)',
                    boxShadow: index === 1 ? '0 4px 12px rgba(7, 27, 233, 0.3)' : '0 2px 8px rgba(0, 0, 0, 0.1)'
                  }}
                  onMouseOver={(e) => {
                    if (index !== 1) {
                      e.currentTarget.style.backgroundColor = '#E0E7FF';
                      e.currentTarget.style.borderColor = 'rgba(7, 27, 233, 0.4)';
                      e.currentTarget.style.transform = 'scale(1.1)';
                    }
                  }}
                  onMouseOut={(e) => {
                    if (index !== 1) {
                      e.currentTarget.style.backgroundColor = '#F8FAFF';
                      e.currentTarget.style.borderColor = 'rgba(7, 27, 233, 0.2)';
                      e.currentTarget.style.transform = 'scale(1)';
                    }
                  }}
                />
              ))}
            </div>

            {/* 설명 텍스트 */}
            <div style={{
              textAlign: 'center',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              <p style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
                color: '#374151',
                fontFamily: '"Inter", sans-serif',
                fontWeight: '500',
                letterSpacing: '0.02em',
                lineHeight: 1.7,
                margin: 0
              }}>
                <span style={{ color: '#071BE9', fontWeight: '700' }}>Confidence Rating 데이터</span>를 기반으로 
                학생의 <span style={{ color: '#071BE9', fontWeight: '700' }}>취약점을 정확히 파악</span>하고, 
                <br />개인별 맞춤 학습 계획을 수립하여 <span style={{ color: '#FCD34D', fontWeight: '700' }}>효율적으로 SAT 점수를 향상</span>시킵니다.
              </p>
            </div>
          </div>

          {/* 핵심 장점 3가지 */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(2rem, 4vw, 3rem)',
            marginTop: 'clamp(3rem, 6vw, 4rem)'
          }}>
            {/* 장점 1 */}
            <div style={{
              padding: 'clamp(2rem, 4vw, 2.5rem)',
              backgroundColor: '#F8FAFF',
              borderRadius: 'clamp(16px, 3vw, 20px)',
              border: '2px solid rgba(7, 27, 233, 0.1)',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(7, 27, 233, 0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <div style={{
                width: 'clamp(60px, 8vw, 80px)',
                height: 'clamp(60px, 8vw, 80px)',
                backgroundColor: '#071BE9',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto clamp(1.5rem, 3vw, 2rem)',
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                color: 'white',
                fontWeight: '700'
              }}>
                1
              </div>
              <h3 style={{
                fontSize: 'clamp(1.3rem, 3vw, 1.5rem)',
                fontWeight: '700',
                color: '#071BE9',
                marginBottom: 'clamp(1rem, 2vw, 1.25rem)',
                fontFamily: '"Inter", sans-serif'
              }}>
                정확한 진단
              </h3>
              <p style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
                color: '#64748B',
                lineHeight: 1.6,
                margin: 0,
                fontFamily: '"Inter", sans-serif'
              }}>
                Confidence Rating을 통해 학생의 실제 이해도를 정확히 파악하여 맞춤형 학습 방향을 제시합니다
              </p>
            </div>

            {/* 장점 2 */}
            <div style={{
              padding: 'clamp(2rem, 4vw, 2.5rem)',
              backgroundColor: '#F8FAFF',
              borderRadius: 'clamp(16px, 3vw, 20px)',
              border: '2px solid rgba(7, 27, 233, 0.1)',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(7, 27, 233, 0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <div style={{
                width: 'clamp(60px, 8vw, 80px)',
                height: 'clamp(60px, 8vw, 80px)',
                backgroundColor: '#071BE9',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto clamp(1.5rem, 3vw, 2rem)',
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                color: 'white',
                fontWeight: '700'
              }}>
                2
              </div>
              <h3 style={{
                fontSize: 'clamp(1.3rem, 3vw, 1.5rem)',
                fontWeight: '700',
                color: '#071BE9',
                marginBottom: 'clamp(1rem, 2vw, 1.25rem)',
                fontFamily: '"Inter", sans-serif'
              }}>
                체계적 학습
              </h3>
              <p style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
                color: '#64748B',
                lineHeight: 1.6,
                margin: 0,
                fontFamily: '"Inter", sans-serif'
              }}>
                데이터 기반으로 취약점을 체계적으로 보완하여 놓치는 부분 없이 완벽한 SAT 준비를 할 수 있습니다
              </p>
            </div>

            {/* 장점 3 */}
            <div style={{
              padding: 'clamp(2rem, 4vw, 2.5rem)',
              backgroundColor: '#F8FAFF',
              borderRadius: 'clamp(16px, 3vw, 20px)',
              border: '2px solid rgba(7, 27, 233, 0.1)',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(7, 27, 233, 0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <div style={{
                width: 'clamp(60px, 8vw, 80px)',
                height: 'clamp(60px, 8vw, 80px)',
                backgroundColor: '#071BE9',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto clamp(1.5rem, 3vw, 2rem)',
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                color: 'white',
                fontWeight: '700'
              }}>
                3
              </div>
              <h3 style={{
                fontSize: 'clamp(1.3rem, 3vw, 1.5rem)',
                fontWeight: '700',
                color: '#071BE9',
                marginBottom: 'clamp(1rem, 2vw, 1.25rem)',
                fontFamily: '"Inter", sans-serif'
              }}>
                빠른 점수 향상
              </h3>
              <p style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
                color: '#64748B',
                lineHeight: 1.6,
                margin: 0,
                fontFamily: '"Inter", sans-serif'
              }}>
                개인 맞춤형 학습으로 불필요한 반복을 줄이고 핵심에 집중하여 빠르게 목표 점수를 달성합니다
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 후기 섹션 */}
      <section style={{
        padding: 'clamp(3rem, 8vw, 4rem) 0',
        backgroundColor: 'linear-gradient(135deg, #F8FAFF 0%, #F1F5FF 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* 배경 장식 요소 */}
        <div style={{
          position: 'absolute',
          top: '-50px',
          right: '-50px',
          width: 'clamp(100px, 25vw, 200px)',
          height: 'clamp(100px, 25vw, 200px)',
          background: 'radial-gradient(circle, rgba(7, 27, 233, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          zIndex: 0
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-30px',
          left: '-30px',
          width: 'clamp(75px, 20vw, 150px)',
          height: 'clamp(75px, 20vw, 150px)',
          background: 'radial-gradient(circle, rgba(7, 27, 233, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          zIndex: 0
        }} />
        
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 clamp(1rem, 4vw, 2rem)',
          position: 'relative',
          zIndex: 1
        }}>
          {/* 섹션 제목 */}
          <div style={{
            textAlign: 'center',
            marginBottom: 'clamp(2rem, 5vw, 3rem)'
          }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 2.5rem)',
              fontWeight: '700',
              color: '#071BE9',
              marginBottom: 'clamp(0.75rem, 2vw, 1rem)',
              fontFamily: '"Inter", sans-serif',
              letterSpacing: '0.025em'
            }}>
              학생들의 생생한 후기
            </h2>
            <p style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
              color: '#64748B',
              fontFamily: '"Inter", sans-serif',
              letterSpacing: '0.01em'
            }}>
              SuperfastSAT와 함께한 학생들의 진솔한 경험담을 들어보세요
            </p>
          </div>

          {/* 이미지 슬라이더 컨테이너 */}
          <div style={{
            position: 'relative',
            overflow: 'hidden',
            marginBottom: 'clamp(2rem, 5vw, 3rem)',
            padding: '0 clamp(1rem, 4vw, 0)'
          }}>
            {/* 슬라이더 트랙 */}
            <div 
              className="review-slider"
              style={{
                display: 'flex',
                gap: 'clamp(1rem, 3vw, 2rem)',
                animation: 'slideLeft 20s linear infinite',
                width: 'fit-content'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.animationPlayState = 'paused';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.animationPlayState = 'running';
              }}
            >
              {/* 첫 번째 세트 */}
              <Image
                src="/images/reviews/1.png"
                alt="후기 1"
                width={400}
                height={300}
                style={{
                  width: 'clamp(280px, 80vw, 400px)',
                  height: 'auto',
                  borderRadius: 'clamp(12px, 2vw, 16px)',
                  boxShadow: '0 8px 32px rgba(7, 27, 233, 0.15)',
                  border: '2px solid rgba(7, 27, 233, 0.1)',
                  flexShrink: 0
                }}
              />
              <Image
                src="/images/reviews/2.png"
                alt="후기 2"
                width={400}
                height={300}
                style={{
                  width: 'clamp(280px, 80vw, 400px)',
                  height: 'auto',
                  borderRadius: 'clamp(12px, 2vw, 16px)',
                  boxShadow: '0 8px 32px rgba(7, 27, 233, 0.15)',
                  border: '2px solid rgba(7, 27, 233, 0.1)',
                  flexShrink: 0
                }}
              />
              <Image
                src="/images/reviews/3.png"
                alt="후기 3"
                width={400}
                height={300}
                style={{
                  width: 'clamp(280px, 80vw, 400px)',
                  height: 'auto',
                  borderRadius: 'clamp(12px, 2vw, 16px)',
                  boxShadow: '0 8px 32px rgba(7, 27, 233, 0.15)',
                  border: '2px solid rgba(7, 27, 233, 0.1)',
                  flexShrink: 0
                }}
              />
              <Image
                src="/images/reviews/4.png"
                alt="후기 4"
                width={400}
                height={300}
                style={{
                  width: 'clamp(280px, 80vw, 400px)',
                  height: 'auto',
                  borderRadius: 'clamp(12px, 2vw, 16px)',
                  boxShadow: '0 8px 32px rgba(7, 27, 233, 0.15)',
                  border: '2px solid rgba(7, 27, 233, 0.1)',
                  flexShrink: 0
                }}
              />
              <Image
                src="/images/reviews/5.png"
                alt="후기 5"
                width={400}
                height={300}
                style={{
                  width: 'clamp(280px, 80vw, 400px)',
                  height: 'auto',
                  borderRadius: 'clamp(12px, 2vw, 16px)',
                  boxShadow: '0 8px 32px rgba(7, 27, 233, 0.15)',
                  border: '2px solid rgba(7, 27, 233, 0.1)',
                  flexShrink: 0
                }}
              />
              <Image
                src="/images/reviews/6.png"
                alt="후기 6"
                width={400}
                height={300}
                style={{
                  width: 'clamp(280px, 80vw, 400px)',
                  height: 'auto',
                  borderRadius: 'clamp(12px, 2vw, 16px)',
                  boxShadow: '0 8px 32px rgba(7, 27, 233, 0.15)',
                  border: '2px solid rgba(7, 27, 233, 0.1)',
                  flexShrink: 0
                }}
              />
              
              {/* 두 번째 세트 (무한 루프용) */}
              <Image
                src="/images/reviews/1.png"
                alt="후기 1"
                width={400}
                height={300}
                style={{
                  width: 'clamp(280px, 80vw, 400px)',
                  height: 'auto',
                  borderRadius: 'clamp(12px, 2vw, 16px)',
                  boxShadow: '0 8px 32px rgba(7, 27, 233, 0.15)',
                  border: '2px solid rgba(7, 27, 233, 0.1)',
                  flexShrink: 0
                }}
              />
              <Image
                src="/images/reviews/2.png"
                alt="후기 2"
                width={400}
                height={300}
                style={{
                  width: 'clamp(280px, 80vw, 400px)',
                  height: 'auto',
                  borderRadius: 'clamp(12px, 2vw, 16px)',
                  boxShadow: '0 8px 32px rgba(7, 27, 233, 0.15)',
                  border: '2px solid rgba(7, 27, 233, 0.1)',
                  flexShrink: 0
                }}
              />
              <Image
                src="/images/reviews/3.png"
                alt="후기 3"
                width={400}
                height={300}
                style={{
                  width: 'clamp(280px, 80vw, 400px)',
                  height: 'auto',
                  borderRadius: 'clamp(12px, 2vw, 16px)',
                  boxShadow: '0 8px 32px rgba(7, 27, 233, 0.15)',
                  border: '2px solid rgba(7, 27, 233, 0.1)',
                  flexShrink: 0
                }}
              />
              <Image
                src="/images/reviews/4.png"
                alt="후기 4"
                width={400}
                height={300}
                style={{
                  width: 'clamp(280px, 80vw, 400px)',
                  height: 'auto',
                  borderRadius: 'clamp(12px, 2vw, 16px)',
                  boxShadow: '0 8px 32px rgba(7, 27, 233, 0.15)',
                  border: '2px solid rgba(7, 27, 233, 0.1)',
                  flexShrink: 0
                }}
              />
              <Image
                src="/images/reviews/5.png"
                alt="후기 5"
                width={400}
                height={300}
                style={{
                  width: 'clamp(280px, 80vw, 400px)',
                  height: 'auto',
                  borderRadius: 'clamp(12px, 2vw, 16px)',
                  boxShadow: '0 8px 32px rgba(7, 27, 233, 0.15)',
                  border: '2px solid rgba(7, 27, 233, 0.1)',
                  flexShrink: 0
                }}
              />
              <Image
                src="/images/reviews/6.png"
                alt="후기 6"
                width={400}
                height={300}
                style={{
                  width: 'clamp(280px, 80vw, 400px)',
                  height: 'auto',
                  borderRadius: 'clamp(12px, 2vw, 16px)',
                  boxShadow: '0 8px 32px rgba(7, 27, 233, 0.15)',
                  border: '2px solid rgba(7, 27, 233, 0.1)',
                  flexShrink: 0
                }}
              />
            </div>
          </div>

          {/* 더 많은 후기 보기 버튼 */}
          <div style={{
            textAlign: 'center'
          }}>
            <a
              href="https://blog.naver.com/superfastsat/223938556808"
              target="_blank"
              rel="noopener noreferrer"
        style={{
                textDecoration: 'none',
                display: 'inline-block'
              }}
            >
              <button style={{
                background: 'transparent',
                color: '#071BE9',
                border: '2px solid #071BE9',
                padding: 'clamp(0.875rem, 2.5vw, 1rem) clamp(1.5rem, 4vw, 2rem)',
                borderRadius: '12px',
                fontSize: 'clamp(0.875rem, 2.5vw, 1rem)',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontFamily: '"Inter", sans-serif',
                letterSpacing: '0.025em'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#071BE9';
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#071BE9';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                더 많은 후기 보기
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section style={{
        padding: '6rem 0',
        background: 'linear-gradient(135deg, #071BE9 0%, #1E40AF 50%, #3B82F6 100%)',
        color: 'white',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* 배경 장식 요소 */}
        <div style={{
          position: 'absolute',
          top: '15%',
          left: '10%',
          width: '180px',
          height: '180px',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
          borderRadius: '50%'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '20%',
          right: '15%',
          width: '120px',
          height: '120px',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%)',
          borderRadius: '50%'
        }} />
        
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: '800',
            marginBottom: '2.5rem',
            fontFamily: '"Inter", sans-serif',
            letterSpacing: '-0.02em',
            textShadow: '0 2px 20px rgba(0, 0, 0, 0.1)'
          }}>
            첫 수업, 들어보고 결정하세요
          </h2>
          <p style={{
            fontSize: '1.3rem',
            marginBottom: '3rem',
            opacity: 0.95,
            fontFamily: '"Inter", sans-serif',
            fontWeight: '500',
            letterSpacing: '0.02em',
            lineHeight: 1.6
          }}>
            안 맞다면 전액 환불해 드려요
          </p>
                                    <a 
                    href="https://kakao-redirect-three.vercel.app/?src=instagram_세일즈페이지오픈카톡방"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: 'none',
                      display: 'inline-block'
                    }}
                  >
                    <button style={{
                      background: 'linear-gradient(135deg, #FCD34D 0%, #F59E0B 100%)',
                      color: '#1F2937',
                      border: 'none',
                      padding: '1rem 2rem',
                      borderRadius: '12px',
                      fontSize: '1.1rem',
                      fontWeight: '700',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 8px 25px rgba(252, 211, 77, 0.4)',
                      fontFamily: '"Inter", sans-serif',
                      letterSpacing: '0.025em',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'translateY(-3px)';
                      e.currentTarget.style.boxShadow = '0 12px 35px rgba(252, 211, 77, 0.5)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(252, 211, 77, 0.4)';
                    }}>
                      첫 수업 지금 바로 시작하기
                    </button>
                  </a>
        </div>
      </section>

      {/* 푸터 */}
      <footer style={{
        background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
        color: '#9CA3AF',
        padding: '2rem 0',
        textAlign: 'center'
      }}>
        <div style={{
          fontSize: '0.85rem',
          fontFamily: '"Inter", sans-serif',
          fontWeight: '400',
          letterSpacing: '0.01em'
        }}>
          © {new Date().getFullYear()} SuperfastSAT. All rights reserved.
        </div>
      </footer>

      <KakaoTalkButton />
      
      {/* CSS 애니메이션 스타일 */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        
        /* 데스크톱과 모바일 영상 분기 */
        .desktop-video {
          display: block;
        }
        
        .mobile-video {
          display: none;
        }
        
        @media (max-width: 768px) {
          .desktop-video {
            display: none;
          }
          
          .mobile-video {
            display: block;
          }
        }
      `}</style>
    </div>
  );
}