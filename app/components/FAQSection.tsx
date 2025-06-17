// 파일 경로: app/components/FAQSection.tsx (수정 후 최종 코드)

'use client';

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { faqs, FAQItem } from '../lib/faqs'; // 기존 경로를 그대로 사용합니다.

export default function FAQSection() {
  // 어떤 FAQ 항목이 열려있는지 slug를 통해 관리합니다. null이면 모두 닫힌 상태입니다.
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  // FAQ 항목을 클릭했을 때 실행될 함수
  const handleToggle = (slug: string) => {
    // 이미 열려있는 항목을 다시 클릭하면 닫고 (null로 설정),
    // 닫혀있는 항목을 클릭하면 해당 항목의 slug로 상태를 업데이트합니다.
    setOpenSlug(openSlug === slug ? null : slug);
  };

  // 기존의 faqs 데이터 로드 실패 시 에러 메시지 표시는 그대로 유지합니다.
  if (!faqs || faqs.length === 0) {
    return (
      <div style={{ padding: '20px', border: '2px dashed red', textAlign: 'center' }}>
        <p style={{ color: 'red', fontWeight: 'bold' }}>FAQ 데이터를 불러오지 못했습니다.</p>
        <p>app/components/FAQSection.tsx에서 app/lib/faqs.ts 경로를 확인해주세요.</p>
        <p>현재 설정된 경로: ../lib/faqs</p>
      </div>
    );
  }

  // 아코디언 목록을 감싸는 전체 컨테이너
  return (
    <div style={{
      display: 'flex',       // Grid 대신 Flexbox Column 형태로 변경
      flexDirection: 'column',
      gap: '1rem',           // 아이템 간의 간격
      width: '100%',
      maxWidth: '800px',     // 적절한 최대 너비 설정
      margin: '0 auto'       // 가운데 정렬
    }}>
      {faqs.map((faq: FAQItem) => {
        // 현재 map으로 순회 중인 faq의 slug가 openSlug와 일치하는지 확인 (true/false)
        const isOpen = openSlug === faq.slug;

        return (
          // 각 FAQ 아이템을 감싸는 div
          <div key={faq.slug} style={{
            border: '1px solid #071BE9',
            borderRadius: '12px',
            backgroundColor: '#ffffff',
            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
            transition: 'all .3s ease-in-out',
            overflow: 'hidden' // 내용이 펼쳐질 때 부드럽게 보이기 위함
          }}>
            {/* 질문 헤더 (클릭 가능한 부분) - 기존 Link 컴포넌트를 div로 변경 */}
            <div
              onClick={() => handleToggle(faq.slug)}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem 1.5rem',
                cursor: 'pointer',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ fontSize: '1.5rem' }}>{faq.icon}</span>
                <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600, color: '#111827' }}>
                  {faq.title}
                </h3>
              </div>
              {/* isOpen 상태에 따라 화살표 아이콘이 회전합니다. */}
              <span style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s', fontSize: '1.2rem' }}>
                ▼
              </span>
            </div>

            {/* 답변 내용 (isOpen이 true일 때만 렌더링됩니다) */}
            {isOpen && (
              <div style={{
                padding: '0 1.5rem 1.5rem 1.5rem',
                borderTop: '1px solid #e5e7eb',
                color: '#374151',
                lineHeight: 1.7,
                animation: 'fadeIn 0.5s ease-in-out' // 간단한 페이드인 애니메이션
              }}>
                {/* CSS 애니메이션을 위한 @keyframes 추가 */}
                <style>{`
                  @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                  }
                `}</style>
                <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>{faq.description}</p>
                <ReactMarkdown
                  components={{
                    // 마크다운 내부의 링크(a 태그)는 새 탭에서 열리도록 설정
                    a: ({node, ...props}) => <a {...props} target="_blank" rel="noopener noreferrer" style={{color: '#007bff', textDecoration: 'underline'}} />,
                    // 마크다운 내부의 이미지(img 태그) 스타일 설정
                    img: ({node, ...props}) => <img {...props} style={{maxWidth: '100%', height: 'auto', borderRadius: '8px', marginTop: '1rem'}} />,
                    h3: ({node, ...props}) => <h3 {...props} style={{fontSize: '1.2rem', marginTop: '1.5rem'}} />
                  }}
                >
                  {faq.content}
                </ReactMarkdown>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}