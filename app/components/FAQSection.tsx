// 파일 경로: app/components/FAQSection.tsx
'use client'
import Link from 'next/link'
// ★★★ 경로 수정: app/components/ 에서 app/lib/ 로 가려면 ../lib/ 가 맞습니다. ★★★
// 사용자님이 보내주신 이미지의 폴더 구조를 기반으로 경로를 수정합니다.
// 이전 경로: ../../lib/faqs
import { faqs, FAQItem } from '../lib/faqs'

export default function FAQSection() {
  // 데이터 로드 확인을 위한 console.log 추가 (Vercel 로그에서도 확인 가능)
  if (!faqs || faqs.length === 0) {
    console.error("[FAQSection] CRITICAL: faqs 데이터가 비어있거나 로드되지 않았습니다. app/lib/faqs.ts 파일과 import 경로를 확인해주세요.");
    // 사용자에게도 오류 메시지를 보여주는 것이 좋습니다.
    return <p style={{textAlign: 'center', color: '#D92D20', fontWeight: 'bold', padding: '2rem', border: '2px dashed #D92D20'}}>FAQ 정보를 불러오는 데 심각한 오류가 발생했습니다. 관리자에게 즉시 문의해주세요.</p>;
  }
  // 로컬 개발 시에는 이 로그가 브라우저 콘솔에, Vercel 배포 시에는 빌드 로그 또는 함수 로그에 나타날 수 있습니다.
  console.log("[FAQSection] faqs 데이터 로드 완료. 항목 개수:", faqs.length);

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: '1.5rem', // 카드 사이 간격
    }}>
      {faqs.map((faq: FAQItem) => (
        <Link
          key={faq.slug}
          href={`/landing/${faq.slug}`} // 상세 페이지로 연결
          style={{
            display: 'block',
            padding: '1.5rem',
            border: '1px solid #E5E7EB', // 테두리 색
            borderRadius: 12, // 모서리 둥글게
            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)', // Tailwind CSS shadow-md 유사
            textDecoration: 'none',
            color: 'inherit',
            backgroundColor: '#ffffff', // 카드 배경색
            transition: 'box-shadow .2s ease-in-out, transform .2s ease-in-out',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'; }}
        >
          <div style={{
            fontSize: '2.25rem', // 아이콘 크기 살짝 증가
            marginBottom: '1rem',
            lineHeight: 1,
            color: '#4B5563', // 아이콘 색상 (선택 사항)
          }}>
            {faq.icon}
          </div>
          <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.25rem', fontWeight: 600, color: '#111827' }}> {/* 제목 스타일 */}
            {faq.title}
          </h3>
          <p style={{ margin: '0 0 0.75rem', color: '#374151', fontSize: '0.95rem', lineHeight: 1.6 }}>{faq.description}</p> {/* 설명 스타일 */}
          <p style={{ margin: '0', color: '#6B7280', fontSize: '0.875rem' }}>
            {typeof faq.count === 'number' ? `${faq.count} articles` : faq.count}
          </p>
        </Link>
      ))}
    </div>
  );
}
