// File path: app/en/landing/page.tsx (English version - Brand color #071BE9 based Fancy design)

'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import KakaoTalkButton from '../../components/KakaoTalkButton';

export default function LandingPage() {
  // Add CSS animations
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes slideLeft {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }
      
      @keyframes float {
        0%, 100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-20px);
        }
      }
      
      .review-slider {
        animation: slideLeft 20s linear infinite;
      }
      
      .review-slider:hover {
        animation-play-state: paused;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  // Auto image switching useEffect
  useEffect(() => {
    let currentImageIndex = 0;
    const totalImages = 2;
    let isPaused = false;
    
    // Initialize global variable
    (window as any).pauseConfidenceAutoChange = false;
    
    const autoChangeImage = () => {
      if (isPaused || (window as any).pauseConfidenceAutoChange) return;
      
      const images = document.querySelectorAll('.confidence-image') as NodeListOf<HTMLElement>;
      const buttons = document.querySelectorAll('.confidence-button') as NodeListOf<HTMLElement>;
      
      // Hide current image
      if (images[currentImageIndex]) {
        images[currentImageIndex].style.opacity = '0';
      }
      if (buttons[currentImageIndex]) {
        buttons[currentImageIndex].style.backgroundColor = '#E5E7EB';
        buttons[currentImageIndex].style.transform = 'scale(1)';
      }
      
      // Move to next image
      currentImageIndex = (currentImageIndex + 1) % totalImages;
      
      // Show new image
      if (images[currentImageIndex]) {
        images[currentImageIndex].style.opacity = '1';
      }
      if (buttons[currentImageIndex]) {
        buttons[currentImageIndex].style.backgroundColor = '#071BE9';
        buttons[currentImageIndex].style.transform = 'scale(1.2)';
      }
    };
    
    // Auto switch images every 3 seconds
    const interval = setInterval(autoChangeImage, 3000);
    
    // Pause auto switching when image switch button is clicked
    const pauseAutoChange = () => {
      isPaused = true;
      // Resume auto switching after 5 seconds
      setTimeout(() => {
        isPaused = false;
      }, 5000);
    };
    
    // Add event listeners to buttons
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
      {/* Header Navigation */}
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
            alt="SuperfastSAT Logo"
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
              Official Blog
            </a>
            <a
              href="/landing"
              style={{
                color: '#6B7280',
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
                e.currentTarget.style.color = '#374151';
                e.currentTarget.style.backgroundColor = '#F3F4F6';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = '#6B7280';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              한국어
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
                Apply for Consultation
              </button>
            </a>
        </nav>
      </header>
      
      {/* Hero Section */}
      <section style={{
        paddingTop: 'clamp(120px, 20vw, 140px)',
        paddingBottom: 'clamp(4rem, 10vw, 6rem)',
        background: 'linear-gradient(135deg, #071BE9 0%, #1E40AF 50%, #3B82F6 100%)',
        color: 'white',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Video Background - Desktop */}
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
        
        {/* Video Background - Mobile */}
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
        
        {/* Dark Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, rgba(7, 27, 233, 0.03) 0%, rgba(30, 64, 175, 0.03) 50%, rgba(59, 130, 246, 0.03) 100%)',
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
            }}>National Team</span>
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
            Created by SuperfastSAT<br />
            <span style={{ color: '#FCD34D', fontWeight: '800' }}>1:1 Personalized Classes</span>
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
            The classes that SAT high scorers 'really' choose
          </p>
          
          {/* Statistics Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(2rem, 5vw, 3rem)',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.15)',
              padding: 'clamp(2.5rem, 5vw, 3.5rem) clamp(1.5rem, 4vw, 2rem)',
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
              minHeight: 'clamp(220px, 45vw, 260px)'
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
                fontSize: 'clamp(2.2rem, 4.5vw, 3rem)', 
                fontWeight: '900', 
                marginBottom: 'clamp(1.25rem, 3vw, 1.75rem)',
                fontFamily: '"Inter", sans-serif',
                letterSpacing: '-0.02em',
                color: '#FCD34D',
                lineHeight: 1.1
              }}>
                Total 8,724
              </div>
              <div style={{ 
                fontSize: 'clamp(1rem, 2.2vw, 1.1rem)', 
                opacity: 0.95,
                fontFamily: '"Inter", sans-serif',
                fontWeight: '500',
                letterSpacing: '0.02em',
                lineHeight: 1.5
              }}>
                Students who studied<br />with SuperfastSAT
              </div>
            </div>
            <div style={{
              background: 'rgba(255, 255, 255, 0.15)',
              padding: 'clamp(2.5rem, 5vw, 3.5rem) clamp(1.5rem, 4vw, 2rem)',
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
              minHeight: 'clamp(220px, 45vw, 260px)'
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
                fontSize: 'clamp(2.2rem, 4.5vw, 3rem)', 
                fontWeight: '900', 
                marginBottom: 'clamp(1.25rem, 3vw, 1.75rem)',
                fontFamily: '"Inter", sans-serif',
                letterSpacing: '-0.02em',
                color: '#FCD34D',
                lineHeight: 1.1
              }}>
                Total 1,750
              </div>
              <div style={{ 
                fontSize: 'clamp(1rem, 2.2vw, 1.1rem)', 
                opacity: 0.95,
                fontFamily: '"Inter", sans-serif',
                fontWeight: '500',
                letterSpacing: '0.02em',
                lineHeight: 1.5
              }}>
                Students who achieved<br />1500+ points
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
                SAT Test Question<br />Accuracy Rate
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section style={{
        padding: '6rem 0',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Decorations */}
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
            SuperfastSAT improves SAT scores
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
            We improve students' SAT scores through<br />
            systematic curriculum and expert one-on-one guidance
          </p>
          
          {/* Results Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(2rem, 5vw, 2.5rem)',
            padding: '0 clamp(1rem, 4vw, 0)'
          }}>
            {/* Card 1: 9 out of 10 students improved their scores */}
            <div style={{
              background: 'linear-gradient(135deg, #071BE9 0%, #1E40AF 100%)',
              padding: 'clamp(2rem, 4vw, 2.5rem) clamp(1.5rem, 4vw, 2rem)',
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
              minHeight: 'clamp(320px, 55vw, 380px)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 25px 50px rgba(7, 27, 233, 0.25)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(7, 27, 233, 0.15)';
            }}>
              {/* Top Decorative Line */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, #FCD34D 0%, #F59E0B 100%)'
              }} />
              
              <div style={{ 
                fontSize: 'clamp(1.2rem, 3vw, 1.4rem)', 
                fontWeight: '700', 
                marginBottom: 'clamp(1.5rem, 4vw, 2rem)',
                fontFamily: '"Inter", sans-serif',
                letterSpacing: '0.02em',
                opacity: 1,
                lineHeight: 1.3,
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
              }}>
                9 out of 10 students<br />improved their scores
              </div>
              <div style={{ 
                fontSize: 'clamp(2.8rem, 6vw, 3.2rem)', 
                fontWeight: '900', 
                color: '#FCD34D', 
                marginBottom: 'clamp(0.5rem, 2vw, 1rem)',
                fontFamily: '"Inter", sans-serif',
                letterSpacing: '-0.02em',
                textShadow: '0 4px 20px rgba(252, 211, 77, 0.3)',
                lineHeight: 1.1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 'clamp(0.25rem, 1vw, 0.5rem)'
              }}>
                <span>91%</span>
                <span style={{
                  fontSize: 'clamp(1.8rem, 4vw, 2.2rem)',
                  fontWeight: '900',
                  color: '#FCD34D',
                  fontFamily: '"Inter", sans-serif',
                  letterSpacing: '-0.02em',
                  textShadow: '0 4px 20px rgba(252, 211, 77, 0.3)',
                  lineHeight: 1.1
                }}>
                  Improvement
                </span>
              </div>
            </div>
            
            {/* Card 2: Because we do one-on-one personalized classes */}
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
              {/* Top Decorative Line */}
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
                Because we do<br />one-on-one personalized classes
              </div>
              {/* 3 Types of Classes */}
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
                    Concept Classes
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
                    Problem-Solving Classes
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
                    Final Touch Classes
                  </span>
                </div>
              </div>
            </div>
            
            {/* Card 3: We know SAT classes best */}
            <div style={{
              background: 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)',
              padding: 'clamp(2rem, 4vw, 2.5rem) clamp(1.5rem, 4vw, 2rem)',
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
              minHeight: 'clamp(320px, 55vw, 380px)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 25px 50px rgba(59, 130, 246, 0.25)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(59, 130, 246, 0.15)';
            }}>
              {/* Top Decorative Line */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, #FCD34D 0%, #F59E0B 100%)'
              }} />
              
              <div style={{ 
                fontSize: 'clamp(1.2rem, 3vw, 1.4rem)', 
                fontWeight: '700', 
                marginBottom: 'clamp(1.5rem, 4vw, 2rem)',
                fontFamily: '"Inter", sans-serif',
                letterSpacing: '0.02em',
                opacity: 1,
                lineHeight: 1.3,
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
              }}>
                We know<br />SAT classes best
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
                Cumulative Class Hours
              </div>
              <div style={{ 
                fontSize: 'clamp(2rem, 5vw, 2.5rem)', 
                fontWeight: '900', 
                color: '#FCD34D', 
                marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
                fontFamily: '"Inter", sans-serif',
                letterSpacing: '-0.02em',
                textShadow: '0 4px 20px rgba(252, 211, 77, 0.3)',
                lineHeight: 1.1,
                textAlign: 'center',
                wordBreak: 'break-word'
              }}>
                +12,562,560<br />minutes
              </div>
              {/* Simple Growth Icon */}
              <div style={{
                fontSize: 'clamp(1.8rem, 4vw, 2.2rem)',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
              }}>
                📈
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personalized Classes Section */}
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
            Two unique personalized classes<br />
            <span style={{ color: '#1F2937' }}>only available at SuperfastSAT</span>
          </h2>
          
          {/* Personalized Classes Table */}
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
            {/* Header Row */}
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
              Category
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
              1:1 Classes
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
              1:1 Apgujeong Classes
            </div>
            
            {/* Subjects Row */}
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
              Subjects
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
            
            {/* Teacher Row */}
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
              Teacher
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
              Custom Dream School<br />Teacher Assignment
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
              Dream School Elite<br />Learning Coach
            </div>
            
            {/* Teaching Method Row */}
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
              Teaching Method
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
              One-on-one personalized classes
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
              Problem-solving to<br />fill knowledge gaps
            </div>
            
            {/* Recommended Grade Row */}
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
              Recommended Grade
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
            
            {/* Recommended Score Range Row */}
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
              Recommended Score Range
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
              All score ranges
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
              1300+ points
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostic Test Section */}
      <section style={{
        padding: 'clamp(6rem, 15vw, 10rem) 0',
        background: 'linear-gradient(135deg, #071BE9 0%, #1E40AF 50%, #3B82F6 100%)',
        color: 'white',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Video Background */}
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
            Learning Diagnostic Test
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
              Identify your unique learning patterns and<br />
              receive personalized SAT learning strategies
            </span>
          </p>
          
          {/* CTA Button */}
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
              Start Learning Diagnostic Test
            </button>
          </a>
        </div>
      </section>

      {/* Teaching Method Introduction Section */}
      <section style={{
        padding: 'clamp(4rem, 10vw, 6rem) 0',
        background: 'linear-gradient(135deg, #F8FAFF 0%, #F1F5FF 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Decorative Elements */}
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
          {/* Section Title */}
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
              This is how we teach
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
              Experience SuperfastSAT's unique teaching methods firsthand
            </p>
          </div>

          {/* Teaching Method Image */}
          <div style={{
            textAlign: 'center',
            position: 'relative'
          }}>
            <Image
              src="/images/reviews/SSS.png"
              alt="SuperfastSAT Teaching Method"
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
            
            {/* Image Bottom Description */}
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
                From <span style={{ color: '#071BE9', fontWeight: '700' }}>1:1 personalized classes</span> to 
                <span style={{ color: '#071BE9', fontWeight: '700' }}> problem-solving focused</span> approach, 
                we provide a systematic learning system tailored to each student's level and goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '6rem 0',
        background: 'linear-gradient(135deg, #071BE9 0%, #1E40AF 50%, #3B82F6 100%)',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: '800',
            marginBottom: '2.5rem',
            fontFamily: '"Inter", sans-serif'
          }}>
            Try the first class, then decide
          </h2>
          <p style={{
            fontSize: '1.3rem',
            marginBottom: '3rem',
            opacity: 0.95,
            fontFamily: '"Inter", sans-serif'
          }}>
            Full refund if it doesn't work for you
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
              fontFamily: '"Inter", sans-serif'
            }}>
              Start Your First Class Now
            </button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
        color: '#9CA3AF',
        padding: '2rem 0',
        textAlign: 'center'
      }}>
        <div style={{
          fontSize: '0.85rem',
          fontFamily: '"Inter", sans-serif'
        }}>
          © {new Date().getFullYear()} SuperfastSAT. All rights reserved.
        </div>
      </footer>

      <KakaoTalkButton />
      
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
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