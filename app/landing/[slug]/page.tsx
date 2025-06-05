// app/landing/[slug]/page.tsx
import Image, { ImageProps } from 'next/image';
import { notFound } from 'next/navigation';
import ReactMarkdown, { Options as ReactMarkdownOptions } from 'react-markdown';
// 경로 확인: app/landing/[slug]/에서 app/lib/faqs.ts로 가려면 '../../lib/faqs'가 맞습니다.
// (사용자님의 VS Code 탐색기 이미지 기준: app 폴더 내부에 lib 폴더 존재)
import { faqs, FAQItem } from '../../lib/faqs';

interface PageProps {
  // Vercel 빌드 오류에 대응하기 위해 params 타입을 Promise로 감쌉니다.
  params: Promise<{ slug: string }>;
  // searchParams는 현재 사용하지 않으므로, 타입 정의에서 제거하여 오류 가능성을 줄입니다.
  // searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

// 함수 시그니처에서 params를 paramsPromise로 받고, searchParams는 제거합니다.
export default async function FAQDetailPage({ params: paramsPromise }: PageProps) {
  // Promise 형태의 params를 await으로 실제 객체로 변환합니다.
  const params = await paramsPromise;
  const slug = params.slug;

  console.log(`[FAQDetailPage] 상세 페이지 요청 slug: ${slug}`);

  const item: FAQItem | undefined = faqs.find(f => f.slug === slug);
  
  if (!item) {
    console.log(`[FAQDetailPage] slug '${slug}'에 해당하는 아이템을 찾을 수 없습니다. notFound() 호출.`);
    return notFound(); // notFound()는 반드시 반환(return)해야 합니다.
  }

  console.log(`[FAQDetailPage] '${slug}'에 해당하는 아이템 로드 완료: ${item.title}`);

  const customMarkdownComponents: ReactMarkdownOptions['components'] = {
    img: ({ node, src, alt, ...props }) => {
      const imageSrc = src as string | undefined;
      const imageAlt = alt as string | undefined;
      if (imageSrc) {
        // Markdown 내 이미지를 Next/Image로 렌더링합니다.
        return (
          <div style={{ margin: '2rem auto', textAlign: 'center', maxWidth: '100%' }}>
            <Image
              src={imageSrc}
              alt={imageAlt || '상세 내용 이미지'}
              width={700} // 이미지의 기본 렌더링 너비 (레이아웃 확보용)
              height={525} // 이미지의 기본 렌더링 높이 (700px 너비에 4:3 비율 가정)
                           // 실제 표시 크기는 아래 style로 제어됩니다.
              style={{
                maxWidth: '100%', // 컨테이너 너비에 맞춤
                height: 'auto',    // 원본 비율 유지
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}
              onError={(e) => {
                console.error(`마크다운 내 이미지 로드 실패: ${imageSrc}`);
                // (e.target as HTMLImageElement).style.display = 'none'; // 로드 실패 시 이미지 숨기기 (선택)
              }}
            />
          </div>
        );
      }
      return null;
    },
    h2: ({node, ...props}) => <h2 style={{fontSize: '1.75rem', marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '1px solid #dee2e6', paddingBottom: '0.5rem', fontWeight: 600}} {...props} />,
    h3: ({node, ...props}) => <h3 style={{fontSize: '1.4rem', marginTop: '2rem', marginBottom: '0.8rem', fontWeight: 600}} {...props} />,
    p: ({node, ...props}) => <p style={{marginBottom: '1.25rem'}} {...props} />,
    a: ({node, ...props}) => <a style={{color: '#007bff', textDecoration: 'underline', fontWeight: 500}} {...props} />,
    ul: ({node, ...props}) => <ul style={{paddingLeft: '30px', marginBottom: '1.25rem', listStyleType: 'disc'}} {...props} />,
    ol: ({node, ...props}) => <ol style={{paddingLeft: '30px', marginBottom: '1.25rem', listStyleType: 'decimal'}} {...props} />,
    li: ({node, ...props}) => <li style={{marginBottom: '0.65rem'}} {...props} />,
    code: ({ node, className, children, ...props }) => { // inline prop을 사용하지 않고 className으로 구분
      const match = /language-(\w+)/.exec(className || '');
      return match ? ( 
        <pre style={{background: '#f8f9fa', border: '1px solid #e9ecef', padding: '1rem', borderRadius: '6px', overflowX: 'auto', fontSize: '0.9rem', lineHeight: 1.6, margin: '1.5rem 0'}}><code className={`language-${match[1]}`} {...props}>{children}</code></pre>
      ) : (
        <code style={{background: '#e9ecef', color: '#c92a2a', padding: '0.2em 0.4em', borderRadius: '4px', fontSize: '90%'}} {...props}>{children}</code>
      );
    },
    blockquote: ({node, ...props}) => <blockquote style={{borderLeft: '5px solid #adb5bd', paddingLeft: '1.5rem', margin: '2rem 0', color: '#495057', fontStyle: 'italic', fontSize: '1.05rem'}} {...props} />,
    hr: ({node, ...props}) => <hr style={{margin: '2.5rem 0', borderColor: '#dee2e6'}} {...props} />
  };

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
          src={`/images/${item.slug}.png`} // 이미지는 public/images/ 폴더에 slug 이름으로 있어야 합니다.
          alt={item.title}
          fill
          style={{ objectFit: 'contain' }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
          onError={(e) => {
            console.error(`메인 이미지 로드 실패: /images/${item.slug}.png. 파일 존재 및 대소문자 확인 필요.`);
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
        <ReactMarkdown components={customMarkdownComponents}>
          {item.content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
