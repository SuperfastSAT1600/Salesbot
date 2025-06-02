// app/components/FAQSection.tsx
'use client';

import Link from 'next/link';

export interface FAQItem {
  title: string;
  description: string;
  count: number;
  icon: string;
  slug: string;
}

export const faqs: FAQItem[] = [
  { title: '시작하기',      description: 'SuperfastSAT를 처음 오셨나요? 여기부터 시작하면 됩니다!',      count: 2, icon: '⚡️', slug: 'getting-started' },
  { title: '주요 기능',      description: '노트를 활용하고 관리해보세요',                           count: 7, icon: '✨', slug: 'features' },
  { title: '요금제·결제 안내', description: 'SuperfastSAT의 요금제와 결제 방식에 대해 알아보세요.',    count: 2, icon: '💳', slug: 'pricing' },
  { title: '앱 사용법 안내',   description: '디바이스별 기능과 앱에 대해 알아보세요.',                count: 3, icon: '💬', slug: 'app-guide' },
  { title: '자주 묻는 질문',   description: '궁금한 사항을 빠르게 해결해 드립니다.',               count: 6, icon: '❓', slug: 'faqs' },
];

export default function FAQSection() {
  return (
    <div className="faq-grid">
      {faqs.map(faq => (
        <Link
          key={faq.slug}
          href={`/landing/${faq.slug}`}
          className="faq-card"
        >
          <div className="faq-icon">{faq.icon}</div>
          <div className="faq-title">{faq.title}</div>
          <div className="faq-description">{faq.description}</div>
          <div className="faq-count">{faq.count} articles</div>
        </Link>
      ))}
    </div>
  );
}
