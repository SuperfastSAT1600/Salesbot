// app/landing/[slug]/page.tsx
import Image from 'next/image';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
// 경로 확인: app/landing/[slug]/에서 app/lib/faqs.ts로 가려면 '../../lib/faqs'가 맞습니다.
import { faqs, FAQItem } from '../../lib/faqs';

interface PageProps {
  // ★★★ params 타입을 표준적인 Next.js App Router 방식으로 변경합니다. ★★★
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined }; // searchParams도 필요할 수 있으므로 추가 (선택 사항)
}

// ★★★ 페이지 컴포넌트는 async를 유지하고, params를 직접 받습니다. ★★★
export default async function FAQDetailPage({ params }: PageProps) {
  const slug = params.slug; // params 객체에서 slug를 직접 사용합니다.

  console.log(`[FAQDetailPage] 상세 페이지 요청 slug: ${slug}`);

  // FAQ 아이템을 찾는 로직 (동기적이지만, 페이지 컴포넌트가 async이므로 여기서 데이터 페칭 등 비동기 작업 가능)
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
      fontFamily: 'Arial, sans-serif',
    }}>
      <h1 style={{
        fontSize: '2.25rem',
        fontWeight: 700,
        marginBottom: '1rem',
        textAlign: 'center',
      }}>
        {item.title}
      </h1>
      {item.description && (
        <p style={{
          color: '#4B5563',
          marginBottom: '2rem',
          textAlign: 'center',
          fontSize: '1.15rem',
          lineHeight: 1.6
        }}>
          {item.description}
        </p>
      )}
      
      <div style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '16 / 9',
        marginBottom: '2rem',
        backgroundColor: '#f0f0f0',
        borderRadius: '8px',
        overflow: 'hidden',
      }}>
        <Image
          src={`/images/${item.slug}.png`} // 이미지는 public/images/ 폴더에 slug 이름으로 있어야 합니다.
          alt={item.title}
          fill
          style={{ objectFit: 'contain' }}
          priority
          sizes="(max-width: 768px) 100vw, 800px" // fill 사용 시 sizes 속성 권장
        />
      </div>

      <div style={{
        textAlign: 'left',
        lineHeight: 1.8,
        color: '#374151',
        fontSize: '1.05rem',
      }}>
        <ReactMarkdown
          components={{
            img: ({ node, src, alt, ...props }) => {
              const imageSrc = src as string | undefined;
              const imageAlt = alt as string | undefined;
              if (imageSrc) {
                return (
                  <div style={{ margin: '1.5rem 0', textAlign: 'center' }}>
                    <Image
                      src={imageSrc} // 마크다운 내 이미지 경로 (예: /images/reviews/...)
                      alt={imageAlt || '상세 내용 이미지'}
                      width={600} 
                      height={450}
                      style={{
                        maxWidth: '100%', 
                        height: 'auto',    
                        borderRadius: '8px',
                      }}
                    />
                  </div>
                );
              }
              return null;
            },
            h2: ({node, ...props}) => <h2 style={{fontSize: '2rem', marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem', fontWeight: 600}} {...props} />,
            h3: ({node, ...props}) => <h3 style={{fontSize: '1.6rem', marginTop: '2rem', marginBottom: '0.8rem', fontWeight: 600}} {...props} />,
            p: ({node, ...props}) => <p style={{marginBottom: '1.2rem'}} {...props} />,
            a: ({node, ...props}) => <a style={{color: '#2563EB', textDecoration: 'underline'}} {...props} />,
            ul: ({node, ...props}) => <ul style={{paddingLeft: '25px', marginBottom: '1.2rem', listStyleType: 'disc'}} {...props} />,
            ol: ({node, ...props}) => <ol style={{paddingLeft: '25px', marginBottom: '1.2rem', listStyleType: 'decimal'}} {...props} />,
            li: ({node, ...props}) => <li style={{marginBottom: '0.6rem'}} {...props} />,
            code: ({node, inline, className, children, ...props}) => {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <pre style={{background: '#F3F4F6', padding: '1rem', borderRadius: '6px', overflowX: 'auto', fontSize: '0.9rem', lineHeight: 1.6, margin: '1.5rem 0'}}><code className={`language-${match[1]}`} {...props}>{children}</code></pre>
              ) : (
                <code style={{background: '#E5E7EB', padding: '0.2em 0.4em', borderRadius: '4px', fontSize: '90%'}} {...props}>{children}</code>
              )
            },
            blockquote: ({node, ...props}) => <blockquote style={{borderLeft: '4px solid #D1D5DB', paddingLeft: '1rem', margin: '1.5rem 0', color: '#4B5563', fontStyle: 'italic'}} {...props} />,
            hr: ({node, ...props}) => <hr style={{margin: '2rem 0', borderColor: '#E5E7EB'}} {...props} />
          }}
        >
          {item.content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
