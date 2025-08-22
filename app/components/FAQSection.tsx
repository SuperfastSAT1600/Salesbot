// 파일 경로: app/components/FAQSection.tsx (반응형 최적화 버전)

'use client';

import ReactMarkdown from 'react-markdown';
import { faqs, FAQItem } from '../lib/faqs';

export default function FAQSection() {
  // 기존의 faqs 데이터 로드 실패 시 에러 메시지 표시는 그대로 유지합니다.
  if (!faqs || faqs.length === 0) {
    return (
      <div style={{ 
        padding: 'clamp(1rem, 4vw, 20px)', 
        border: '2px dashed red', 
        textAlign: 'center',
        margin: '0 clamp(0.5rem, 2vw, 1rem)'
      }}>
        <p style={{ color: 'red', fontWeight: 'bold', fontSize: 'clamp(0.875rem, 3vw, 1rem)' }}>
          FAQ 데이터를 불러오지 못했습니다.
        </p>
        <p style={{ fontSize: 'clamp(0.75rem, 2.5vw, 0.875rem)' }}>
          app/components/FAQSection.tsx에서 app/lib/faqs.ts 경로를 확인해주세요.
        </p>
        <p style={{ fontSize: 'clamp(0.75rem, 2.5vw, 0.875rem)' }}>
          현재 설정된 경로: ../lib/faqs
        </p>
      </div>
    );
  }

  // 반응형 목록 형태로 변경
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'clamp(1rem, 3vw, 1.5rem)',
      width: '100%',
      maxWidth: 'clamp(320px, 95vw, 800px)',
      margin: '0 auto',
      padding: '0 clamp(0.5rem, 2vw, 1rem)'
    }}>
      {faqs.map((faq: FAQItem) => (
        <div key={faq.slug} style={{
          border: '1px solid #e5e7eb',
          borderRadius: 'clamp(8px, 2vw, 12px)',
          backgroundColor: '#ffffff',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          padding: 'clamp(1rem, 3vw, 1.5rem)',
        }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 'clamp(0.5rem, 2vw, 1rem)', 
            marginBottom: 'clamp(0.75rem, 2vw, 1rem)',
            flexWrap: 'wrap'
          }}>
            <span style={{ 
              fontSize: 'clamp(1.25rem, 4vw, 1.5rem)',
              flexShrink: 0
            }}>
              {faq.icon}
            </span>
            <h3 style={{ 
              margin: 0, 
              fontSize: 'clamp(1rem, 3vw, 1.1rem)', 
              fontWeight: 600, 
              color: '#111827',
              lineHeight: 1.3
            }}>
              {faq.title}
            </h3>
          </div>
          
          <div style={{
            color: '#374151',
            lineHeight: 1.7,
          }}>
            <p style={{ 
              marginTop: 'clamp(0.25rem, 1vw, 0.5rem)', 
              fontSize: 'clamp(0.875rem, 2.5vw, 0.95rem)', 
              marginBottom: 'clamp(0.75rem, 2vw, 1rem)',
              lineHeight: 1.6
            }}>
              {faq.description}
            </p>
            <ReactMarkdown
              components={{
                // 마크다운 내부의 링크(a 태그)는 새 탭에서 열리도록 설정
                a: ({node, ...props}) => <a {...props} target="_blank" rel="noopener noreferrer" style={{
                  color: '#007bff', 
                  textDecoration: 'underline',
                  fontSize: 'clamp(0.875rem, 2.5vw, 0.95rem)'
                }} />,
                // 마크다운 내부의 이미지(img 태그) 스타일 설정
                img: ({node, ...props}) => <img {...props} style={{
                  maxWidth: '100%', 
                  height: 'auto', 
                  borderRadius: 'clamp(6px, 1.5vw, 8px)', 
                  marginTop: 'clamp(0.75rem, 2vw, 1rem)'
                }} />,
                h3: ({node, ...props}) => <h3 {...props} style={{
                  fontSize: 'clamp(1.1rem, 3vw, 1.2rem)', 
                  marginTop: 'clamp(1.25rem, 3vw, 1.5rem)',
                  lineHeight: 1.3
                }} />,
                p: ({node, ...props}) => <p {...props} style={{
                  fontSize: 'clamp(0.875rem, 2.5vw, 0.95rem)',
                  lineHeight: 1.6,
                  marginBottom: 'clamp(0.5rem, 1.5vw, 0.75rem)'
                }} />
              }}
            >
              {faq.content}
            </ReactMarkdown>
          </div>
        </div>
      ))}
    </div>
  );
}