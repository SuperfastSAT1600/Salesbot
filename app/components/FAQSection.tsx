// 파일 경로: app/components/FAQSection.tsx (사용자님이 보내주신 코드 - 이대로 사용)
'use client'
import Link from 'next/link'
// lib/faqs.ts 경로 확인: 현재 파일 위치(app/components/)에서 lib 폴더까지의 상대 경로
// app 폴더와 lib 폴더가 같은 레벨에 있다면 ../lib/faqs가 맞습니다.
import { faqs, FAQItem } from '../lib/faqs'

export default function FAQSection() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: '1.5rem', // 간격 살짝 증가
      // marginTop: '2rem', // 부모 컴포넌트(LandingPage)에서 전체 섹션 마진 관리
      // padding: '0 1rem' // 부모 컴포넌트(LandingPage)에서 전체 섹션 패딩 관리
    }}>
      {faqs.map((faq: FAQItem) => (
        <Link
          key={faq.slug}
          href={`/landing/${faq.slug}`}
          style={{
            display: 'block',
            padding: '1.5rem', // 패딩 증가
            border: '1px solid #E5E7EB',
            borderRadius: 12,
            boxShadow: '0 4px 8px rgba(0,0,0,0.05)', // 그림자 살짝 조정
            textDecoration: 'none',
            color: 'inherit',
            backgroundColor: '#ffffff', // 카드 배경색 명시
            transition: 'box-shadow .2s, transform .2s',
          }}
          // 간단한 hover 효과 (선택 사항, CSS 클래스로 관리하는 것이 더 좋음)
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,0,0,0.1)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.05)'; }}
        >
          <div style={{
            fontSize: '2rem', // 아이콘 크기
            marginBottom: '1rem', // 아이콘과 제목 사이 간격
            lineHeight: 1, // 아이콘이 너무 크면 line-height 조절
          }}>
            {faq.icon}
          </div>
          <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.125rem', fontWeight: 600, color: '#1F2937' }}>
            {faq.title}
          </h3>
          <p style={{ margin: '0 0 0.75rem', color: '#4B5563', fontSize: '0.9rem' }}>{faq.description}</p> {/* 설명 글씨 크기 약간 조정 */}
          <p style={{ margin: '0', color: '#6B7280', fontSize: '0.875rem' }}> {/* count 글씨 색상 변경 */}
            {faq.count} articles
          </p>
        </Link>
      ))}
    </div>
  )
}