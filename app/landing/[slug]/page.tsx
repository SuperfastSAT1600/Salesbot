// app/landing/[slug]/page.tsx
import Image, { ImageProps } from 'next/image';
import { notFound } from 'next/navigation';
import ReactMarkdown, { Options as ReactMarkdownOptions } from 'react-markdown';
import { faqs, FAQItem } from '../../lib/faqs'; // app/lib/faqs.ts 가정

interface PageProps {
  params: Promise<{ slug: string }>;
  // searchParams?: Promise<{ [key: string]: string | string[] | undefined }>; // 현재 사용 안 함
}

export default async function FAQDetailPage({ params: paramsPromise }: PageProps) {
  console.log("[FAQDetailPage Vercel Debug] 함수 시작");

  let slug: string | undefined;
  let item: FAQItem | undefined;

  try {
    console.log("[FAQDetailPage Vercel Debug] paramsPromise 타입:", typeof paramsPromise, "값:", paramsPromise);
    if (typeof paramsPromise?.then !== 'function') {
      console.error("[FAQDetailPage Vercel Debug] CRITICAL: paramsPromise가 Promise 객체가 아닙니다!");
      // 이 경우, paramsPromise가 예상과 다른 형태로 들어오고 있을 수 있습니다.
      // 임시로 paramsPromise를 직접 params로 사용해봅니다 (타입 오류가 발생할 수 있음).
      // 이 부분은 Vercel 로그를 보고 원인을 파악한 후 수정해야 합니다.
      // const tempParams = paramsPromise as any; // 강제 타입 변환 (주의!)
      // slug = tempParams.slug;
      // console.log("[FAQDetailPage Vercel Debug] paramsPromise를 직접 사용한 slug:", slug);
      // 여기서는 일단 오류를 발생시키기보다 notFound로 유도합니다.
      return notFound();
    }

    const params = await paramsPromise;
    console.log("[FAQDetailPage Vercel Debug] await paramsPromise 후 params 객체:", params);

    if (!params || typeof params.slug !== 'string') {
      console.error("[FAQDetailPage Vercel Debug] CRITICAL: params 객체 또는 params.slug가 유효하지 않습니다. params:", params);
      return notFound();
    }
    slug = params.slug;
    console.log(`[FAQDetailPage Vercel Debug] 상세 페이지 요청 slug: ${slug}`);

    if (!faqs || !Array.isArray(faqs)) {
      console.error("[FAQDetailPage Vercel Debug] CRITICAL: faqs 데이터가 배열이 아닙니다. app/lib/faqs.ts 확인 필요.");
      return notFound();
    }
    
    item = faqs.find(f => f.slug === slug);
    console.log(`[FAQDetailPage Vercel Debug] faqs.find 결과 item:`, item ? item.title : "찾지 못함");
    
    if (!item) {
      console.log(`[FAQDetailPage Vercel Debug] slug '${slug}'에 해당하는 아이템을 찾을 수 없습니다. notFound() 호출.`);
      return notFound();
    }

    console.log(`[FAQDetailPage Vercel Debug] '${slug}'에 해당하는 아이템 로드 완료: ${item.title}`);

  } catch (error) {
    console.error("[FAQDetailPage Vercel Debug] params 처리 또는 데이터 조회 중 예외 발생:", error);
    // 에러 발생 시에도 사용자에게 적절한 페이지를 보여주기 위해 notFound() 또는 에러 페이지로 리디렉션
    return notFound(); 
  }

  // item이 여기서 undefined가 아니어야 합니다.
  if (!item || !slug) {
    console.error("[FAQDetailPage Vercel Debug] CRITICAL: item 또는 slug가 최종적으로 정의되지 않았습니다. 로직 오류.");
    return notFound();
  }

  const customMarkdownComponents: ReactMarkdownOptions['components'] = {
    img: ({ node, src, alt, ...props }) => {
      const imageSrc = src as string | undefined;
      const imageAlt = alt as string | undefined;
      if (imageSrc) {
        return (
          <div style={{ margin: '2rem auto', textAlign: 'center', maxWidth: '100%' }}>
            <Image
              src={imageSrc}
              alt={imageAlt || '상세 내용 이미지'}
              width={700} 
              height={525} 
              style={{
                maxWidth: '100%', 
                height: 'auto',    
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}
              onError={(e) => {
                console.error(`[FAQDetailPage Vercel Debug] 마크다운 내 이미지 로드 실패: ${imageSrc}`);
              }}
            />
          </div>
        );
      }
      return null;
    },
    h2: ({node, ...props}) => <h2 style={{fontSize: '1.75rem', marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '1px solid #dee2e6', paddingBottom: '0.5rem', fontWeight: 600}} {...props} />,
    h3: ({node, ...props}) => <h3 style={{fontSize: '1.4rem', marginTop: '2rem', marginBottom: '0.8rem', fontWeight: 600}} {...props} />,
    // ... (기타 마크다운 컴포넌트 스타일 유지)
  };

  const mainImageUrl = `/images/${slug}.png`;
  console.log(`[FAQDetailPage Vercel Debug] 최종 렌더링할 메인 이미지 경로: ${mainImageUrl}`);


  return (
    <div style={{
      maxWidth: 800,
      margin: '2rem auto',
      padding: '2rem 1rem',
      fontFamily: '"Helvetica Neue", Arial, sans-serif',
    }}>
      <h1 style={{
        fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
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
          fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
          lineHeight: 1.65
        }}>
          {item.description}
        </p>
      )}
      
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
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
          onError={(e) => {
            console.error(`[FAQDetailPage Vercel Debug] 메인 이미지 로드 실패: ${mainImageUrl}. 파일 존재 및 대소문자 확인 필요.`);
          }}
        />
      </div>

      <div style={{
        textAlign: 'left',
        lineHeight: 1.75,
        color: '#1F2937',
        fontSize: '1rem',
      }}>
        <ReactMarkdown components={customMarkdownComponents}>
          {item.content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
