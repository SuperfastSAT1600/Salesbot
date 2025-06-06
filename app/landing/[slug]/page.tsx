// app/landing/[slug]/page.tsx
import Image from 'next/image';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
// ★★★ 경로 확인: app/landing/[slug]/에서 app/lib/faqs.ts로 가려면 '../../lib/faqs'가 정확해야 합니다. ★★★
// (사용자님의 VS Code 탐색기 이미지 기준: app 폴더 내부에 lib 폴더 존재)
import { faqs, FAQItem } from '../../lib/faqs';

interface PageProps {
  // ★★★ Vercel 빌드 오류 해결을 위해 params 타입을 Promise로 지정합니다. ★★★
  params: Promise<{ slug: string }>;
  // searchParams는 현재 사용하지 않으므로 제거합니다.
}

export default async function FAQDetailPage({ params: paramsPromise }: PageProps) {
  // ★★★ Promise 형태의 params를 await으로 실제 객체로 변환합니다. ★★★
  const params = await paramsPromise;
  const slug = params.slug;

  console.log(`[FAQDetailPage DEBUG] Vercel - 상세 페이지 요청 slug: ${slug}`);

  const item: FAQItem | undefined = faqs.find(f => f.slug === slug);
  
  if (!item) {
    console.log(`[FAQDetailPage DEBUG] Vercel - slug '${slug}' 아이템 없음. notFound() 호출.`);
    return notFound();
  }

  console.log(`[FAQDetailPage DEBUG] Vercel - '${slug}' 아이템 로드 완료: ${item.title}`);

  const mainImageUrl = `/images/${slug}.png`; // 대표 이미지 경로

  return (
    <div style={{
      maxWidth: 800,
      margin: '2rem auto',
      padding: '2rem 1rem',
      fontFamily: '"Helvetica Neue", Arial, sans-serif',
    }}>
      <h1 style={{
        fontSize: '2.25rem',
        fontWeight: 700,
        marginBottom: '1.5rem',
        textAlign: 'center',
        color: '#111827',
      }}>
        {item.title}
      </h1>
      {item.description && (
        <p style={{
          color: '#374151',
          marginBottom: '2.5rem',
          textAlign: 'center',
          fontSize: '1.15rem',
          lineHeight: 1.65
        }}>
          {item.description}
        </p>
      )}
      
      {/* 페이지 상단 메인 이미지 */}
      <div style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '16 / 9',
        marginBottom: '2.5rem',
        backgroundColor: '#e9ecef',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      }}>
        <Image
          src={mainImageUrl}
          alt={`${item.title} 대표 이미지`}
          fill
          style={{ objectFit: 'contain' }}
          priority
          sizes="(max-width: 768px) 100vw, 800px"
          onError={(e) => {
            console.error(`[FAQDetailPage DEBUG] Vercel - 메인 이미지 로드 실패: ${mainImageUrl}`);
          }}
        />
      </div>

      {/* 마크다운 본문 */}
      <div style={{
        textAlign: 'left',
        lineHeight: 1.75,
        color: '#1F2937',
        fontSize: '1rem',
      }}>
        {/* ReactMarkdown의 components prop을 일단 비워두어 문제 범위를 좁힙니다. */}
        <ReactMarkdown>{item.content}</ReactMarkdown>
      </div>
    </div>
  );
}
