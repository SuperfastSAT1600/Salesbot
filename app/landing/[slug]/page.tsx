// app/landing/[slug]/page.tsx
import Image from 'next/image';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
// ★★★ 경로 확인: app/landing/[slug]/ 에서 app/lib/ 로 가려면 '../../lib/faqs' 입니다. ★★★
// (사용자님의 VS Code 탐색기 스크린샷 image_e100ba.png 기준: app 폴더 내부에 lib 폴더 존재)
import { faqs, FAQItem } from '../../lib/faqs'; 

interface PageProps {
  params: { slug: string }; // 표준 Next.js params 타입
  // searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function FAQDetailPage({ params }: PageProps) {
  // Vercel의 "params should be awaited" 런타임 오류 방지용 (이전 빌드 오류 참고)
  await Promise.resolve(); 

  const slug = params.slug;
  console.log(`[FAQDetailPage] 상세 페이지 요청 slug: ${slug}`);

  const item: FAQItem | undefined = faqs.find(f => f.slug === slug);
  
  if (!item) {
    console.log(`[FAQDetailPage] slug '${slug}'에 해당하는 아이템을 찾을 수 없습니다. notFound() 호출.`);
    return notFound();
  }

  console.log(`[FAQDetailPage] '${slug}'에 해당하는 아이템 로드 완료: ${item.title}`);

  return (
    <div style={{
      maxWidth: 800,
      margin: '2rem auto',
      padding: '2rem 1rem',
      fontFamily: '"Helvetica Neue", Arial, sans-serif', // 폰트 변경 예시
    }}>
      <h1 style={{
        fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', // 반응형 폰트 크기
        fontWeight: 700,
        marginBottom: '1.5rem',
        textAlign: 'center',
        color: '#111827', // 제목 색상 변경
      }}>
        {item.title}
      </h1>
      {item.description && (
        <p style={{
          color: '#374151', // 설명 텍스트 색상 변경
          marginBottom: '2.5rem',
          textAlign: 'center',
          fontSize: 'clamp(1rem, 2.5vw, 1.15rem)', // 반응형 폰트 크기
          lineHeight: 1.65
        }}>
          {item.description}
        </p>
      )}
      
      {/* 페이지 상단 메인 이미지 (public/images 폴더에 slug이름.png 파일 필요) */}
      <div style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '16 / 9',
        marginBottom: '2.5rem',
        backgroundColor: '#e9ecef', // 이미지 로딩 중 배경색 살짝 변경
        borderRadius: '12px', // 모서리 둥글게 증가
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)', // 그림자 추가
      }}>
        <Image
          src={`/images/${item.slug}.png`}
          alt={item.title}
          fill
          style={{ objectFit: 'contain' }} // 또는 'cover'
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px" // sizes 속성 구체화
        />
      </div>

      {/* 마크다운 본문 */}
      <div style={{
        textAlign: 'left',
        lineHeight: 1.75, // 줄간격 살짝 넓힘
        color: '#1F2937', // 본문 텍스트 색상
        fontSize: '1rem',   // 기본 폰트 크기
      }}>
        <ReactMarkdown
          components={{
            img: ({ node, src, alt, ...props }) => {
              const imageSrc = src as string | undefined;
              const imageAlt = alt as string | undefined;
              if (imageSrc) {
                return (
                  <div style={{ margin: '2rem auto', textAlign: 'center', maxWidth: '100%' }}>
                    <Image
                      src={imageSrc} // 예: /images/reviews/review1.png
                      alt={imageAlt || '상세 내용 이미지'}
                      width={700}  // 표시 너비 (원본 비율에 맞춰 height 자동)
                      height={525} // 예시 높이 (700px 너비에 4:3 비율 가정)
                                   // 실제 이미지 원본 비율에 맞춰 조절
                      style={{
                        maxWidth: '100%', 
                        height: 'auto',    
                        borderRadius: '8px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
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
            // ★★★ code 렌더러 수정: inline prop 제거 ★★★
            code: ({ node, className, children, ...props }: any) => { // props 타입 임시로 any로 하여 inline 제거
              const match = /language-(\w+)/.exec(className || '');
              // 인라인 코드와 블록 코드를 className 유무 또는 다른 방식으로 구분해야 할 수 있습니다.
              // 여기서는 className에 language-가 있으면 블록 코드로 간주합니다.
              return match ? ( 
                <pre style={{background: '#f8f9fa', border: '1px solid #e9ecef', padding: '1rem', borderRadius: '6px', overflowX: 'auto', fontSize: '0.9rem', lineHeight: 1.6, margin: '1.5rem 0'}}><code className={`language-${match[1]}`} {...props}>{children}</code></pre>
              ) : (
                <code style={{background: '#e9ecef', color: '#c92a2a', padding: '0.2em 0.4em', borderRadius: '4px', fontSize: '90%'}} {...props}>{children}</code>
              );
            },
            blockquote: ({node, ...props}) => <blockquote style={{borderLeft: '5px solid #adb5bd', paddingLeft: '1.5rem', margin: '2rem 0', color: '#495057', fontStyle: 'italic', fontSize: '1.05rem'}} {...props} />,
            hr: ({node, ...props}) => <hr style={{margin: '2.5rem 0', borderColor: '#dee2e6'}} {...props} />
          }}
        >
          {item.content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
