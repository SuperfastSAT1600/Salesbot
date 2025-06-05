// app/landing/[slug]/page.tsx
import Image from 'next/image' // 이미 Image 컴포넌트를 가져오고 계십니다.
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import { faqs, FAQItem } from '../../lib/faqs' // lib 폴더 경로는 프로젝트 구조에 맞게 확인해주세요.

interface Props {
  // ★★★ params 타입을 Promise로 감싸줍니다. ★★★
  params: Promise<{ slug: string }> 
}

// ★★★ 페이지 컴포넌트를 async 함수로 변경하고, params를 paramsPromise로 받습니다. ★★★
export default async function FAQDetailPage({ params: paramsPromise }: Props) {
  // ★★★ props로 받은 paramsPromise를 await 하여 실제 params 객체를 가져옵니다. ★★★
  const params = await paramsPromise;
  const slug = params.slug; // 이제 params는 실제 { slug: string } 객체입니다.

  // params.slug를 사용하기 전에 console.log로 확인 (디버깅용)
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
      margin: '2rem auto', // 위아래 여백 추가
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
        }}>
          {item.description}
        </p>
      )}
      
      {/* 페이지 상단 메인 이미지 */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: 0, 
        paddingBottom: '56.25%', // 16:9 비율
        marginBottom: '2rem'
      }}>
        <Image
          src={`/images/${item.slug}.png`} // public 폴더 내 /images/ 폴더에 이미지가 있어야 합니다.
          alt={item.title}
          fill
          style={{ objectFit: 'contain' }}
          priority
          // Vercel 빌드 시 Image 경고 해결을 위해 sizes 속성을 추가하는 것이 좋습니다.
          // 예: sizes="(max-width: 768px) 100vw, 800px" (페이지 너비에 맞게 조절)
        />
      </div>

      {/* 마크다운으로 렌더링되는 본문 내용 */}
      <div style={{
        textAlign: 'left',
        lineHeight: 1.6,
        color: '#333'
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
                      src={imageSrc}
                      alt={imageAlt || '상세 내용 이미지'}
                      width={600}  // 표시할 이미지의 기본 너비 (픽셀)
                      height={450} // 표시할 이미지의 기본 높이 (픽셀) - 원본 비율에 맞춰 조절
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
            p: ({node, ...props}) => <p style={{marginBottom: '1.2rem'}} {...props} />,
            // 필요에 따라 다른 마크다운 요소(a, ul, li 등)에 대한 스타일도 여기에 추가할 수 있습니다.
          }}
        >
          {item.content}
        </ReactMarkdown>
      </div>
    </div>
  );
}

// generateStaticParams는 선택 사항이므로 주석 처리된 상태로 둡니다.
// export async function generateStaticParams() {
//   return faqs.map((faq) => ({
//     slug: faq.slug,
//   }))
// }
