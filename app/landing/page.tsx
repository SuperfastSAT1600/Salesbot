// 파일 경로: app/landing/page.tsx (브랜드 컬러 #071BE9 기반 Fancy 디자인)

'use client';

import Image from 'next/image';
import KakaoTalkButton from '../components/KakaoTalkButton';

export default function LandingPage() {
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
                lineHeight: 1
              }}>
                +307,200분
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
            학습 DNA 진단 테스트
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
              학습 DNA 테스트 시작하기
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
        padding: '4rem 0 2rem 0',
        position: 'relative'
      }}>
        {/* 상단 장식선 */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'linear-gradient(90deg, #071BE9 0%, #3B82F6 100%)'
        }} />
        
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            <div>
              <h4 style={{ 
                color: 'white', 
                marginBottom: '1rem', 
                fontSize: '1.1rem',
                fontFamily: '"Inter", sans-serif',
                fontWeight: '600',
                letterSpacing: '0.01em'
              }}>고객센터</h4>
              <div style={{ 
                fontSize: '0.9rem', 
                lineHeight: 1.6,
                fontFamily: '"Inter", sans-serif',
                fontWeight: '400',
                letterSpacing: '0.01em'
              }}>
                <div>채팅문의</div>
                <div>평일 : 오전 10시 ~ 오후 10시</div>
                <div>주말/공휴일 : 오전 10시 ~ 오후 6시</div>
              </div>
            </div>
            <div>
              <h4 style={{ 
                color: 'white', 
                marginBottom: '1rem', 
                fontSize: '1.1rem',
                fontFamily: '"Inter", sans-serif',
                fontWeight: '600',
                letterSpacing: '0.01em'
              }}>서비스</h4>
              <div style={{ 
                fontSize: '0.9rem', 
                lineHeight: '1.6',
                fontFamily: '"Inter", sans-serif',
                fontWeight: '400',
                letterSpacing: '0.01em'
              }}>
                <div>회사소개</div>
                <div>공지사항</div>
                <div>자주 묻는 질문</div>
              </div>
            </div>
            <div>
              <h4 style={{ 
                color: 'white', 
                marginBottom: '1rem', 
                fontSize: '1.1rem',
                fontFamily: '"Inter", sans-serif',
                fontWeight: '600',
                letterSpacing: '0.01em'
              }}>SNS</h4>
              <div style={{ 
                fontSize: '0.9rem', 
                lineHeight: '1.6',
                fontFamily: '"Inter", sans-serif',
                fontWeight: '400',
                letterSpacing: '0.01em'
              }}>
                <div>유튜브</div>
                <div>인스타그램</div>
                <div>네이버</div>
              </div>
            </div>
          </div>
          
          <div style={{
            borderTop: '1px solid #374151',
            paddingTop: '2rem',
            textAlign: 'center',
            fontSize: '0.85rem',
            fontFamily: '"Inter", sans-serif',
            fontWeight: '400',
            letterSpacing: '0.01em'
          }}>
            © {new Date().getFullYear()} SuperfastSAT. All rights reserved.
          </div>
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