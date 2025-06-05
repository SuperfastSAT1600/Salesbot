// 파일 경로: app/components/FAQSection.tsx
'use client'
import Link from 'next/link'
// 경로 확인: app/components/ 에서 app/lib/ 로 가려면 '../lib/faqs' 입니다.
import { faqs, FAQItem } from '../lib/faqs' // lib 폴더가 app 폴더 내부에 있다고 가정

export default function FAQSection() {
  if (!faqs || faqs.length === 0) {
    console.error("[FAQSection Vercel Debug] CRITICAL: faqs 데이터가 비어있거나 로드되지 않았습니다. 경로 및 파일 내용을 확인하세요.");
    return (
      <div style={{ padding: '20px', border: '2px dashed red', textAlign: 'center' }}>
        <p style={{ color: 'red', fontWeight: 'bold' }}>FAQ 데이터를 불러오지 못했습니다.</p>
        <p>app/components/FAQSection.tsx에서 app/lib/faqs.ts 경로를 확인해주세요.</p>
        <p>현재 설정된 경로: ../lib/faqs</p>
      </div>
    );
  }
  console.log(`[FAQSection Vercel Debug] faqs 데이터 로드 성공. 항목 수: ${faqs.length}`);

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: '1.5rem',
    }}>
      {faqs.map((faq: FAQItem) => (
        <Link
          key={faq.slug}
          href={`/landing/${faq.slug}`}
          style={{
            display: 'block',
            padding: '1rem',
            // ★★★ 테두리 색상 변경 ★★★
            border: '1px solid #071BE9', 
            borderRadius: 12,
            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
            textDecoration: 'none',
            color: 'inherit',
            backgroundColor: '#ffffff',
            transition: 'box-shadow .2s ease-in-out, transform .2s ease-in-out',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'; }}
        >
          <div style={{
            fontSize: '2.25rem',
            marginBottom: '0.7rem',
            lineHeight: 1,
            color: '#4B5563',
          }}>
            {faq.icon}
          </div>
          <h3 style={{ margin: '0 0 0.5rem', fontSize: '1rem', fontWeight: 600, color: '#111827' }}>
            {faq.title}
          </h3>
          <p style={{ margin: '0 0 0.75rem', color: '#374151', fontSize: '0.8rem', lineHeight: 1.6 }}>{faq.description}</p>
          <p style={{ margin: '0', color: '#6B7280', fontSize: '0.875rem' }}>
            {typeof faq.count === 'number' ? `${faq.count} articles` : faq.count}
          </p>
        </Link>
      ))}
    </div>
  );
}
