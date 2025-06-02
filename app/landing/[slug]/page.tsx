// app/landing/[slug]/page.tsx
import Image from 'next/image' // 이미 Image 컴포넌트를 가져오고 계십니다.
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import { faqs, FAQItem } from '../../lib/faqs'

interface Props {
  params: { slug: string }
}

export default function FAQDetailPage({ params }: Props) { // 현재는 동기 함수입니다.
  const item: FAQItem | undefined = faqs.find(f => f.slug === params.slug)
  if (!item) return notFound()

  return (
    <div style={{
      maxWidth: 800,
      margin: '0 auto',
      padding: '2rem 1rem',
      // textAlign: 'center', // 본문 내용에 따라 이 부분은 조정될 수 있습니다.
      fontFamily: 'Arial, sans-serif',
    }}>
      <h1 style={{
        fontSize: '2.25rem',
        fontWeight: 700,
        marginBottom: '1rem',
        textAlign: 'center', // 제목은 가운데 정렬
      }}>
        {item.title}
      </h1>
      {item.description && ( // 설명이 있을 경우에만 표시 (기존 코드에 없었지만 추가하면 좋음)
        <p style={{
          color: '#4B5563',
          marginBottom: '2rem',
          textAlign: 'center', // 설명도 가운데 정렬
        }}>
          {item.description}
        </p>
      )}
      
      {/* 페이지 상단 메인 이미지 */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: 0, // fill을 사용하므로 height: 0, paddingBottom으로 비율 유지
        paddingBottom: '56.25%', // 16:9 비율 예시
        marginBottom: '2rem'
      }}>
        <Image
          src={`/images/${item.slug}.png`}
          alt={item.title}
          fill
          style={{ objectFit: 'contain' }}
          priority
          // sizes 속성을 추가하면 fill 이미지의 성능을 더 최적화할 수 있습니다.
          // 예: sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* 마크다운으로 렌더링되는 본문 내용 */}
      <div style={{
        textAlign: 'left', // 본문은 왼쪽 정렬
        // maxWidth: 700, // 부모 div에서 이미 maxWidth: 800 으로 제한됨
        // margin: '0 auto', // 부모 div에서 이미 margin: '0 auto' 로 가운데 정렬됨
        lineHeight: 1.6,
        color: '#333'
      }}>
        <ReactMarkdown
          components={{
            // ★★★ 마크다운의 img 태그를 Next.js Image 컴포넌트로 렌더링하고 크기 조절 ★★★
            img: ({ node, src, alt, ...props }) => {
              // src나 alt 타입이 확실하지 않을 경우를 대비한 타입 단언 또는 확인
              const imageSrc = src as string | undefined;
              const imageAlt = alt as string | undefined;

              if (imageSrc) {
                return (
                  <div style={{ margin: '1.5rem 0', textAlign: 'center' }}> {/* 이미지 가운데 정렬 및 상하 여백 */}
                    <Image
                      src={imageSrc}
                      alt={imageAlt || '상세 내용 이미지'}
                      width={600}  // ★ 표시할 이미지의 기본 너비 (픽셀) - 원하는 크기로 조절하세요.
                      height={450} // ★ 표시할 이미지의 기본 높이 (픽셀) - 원본 비율에 맞춰 조절하세요.
                                   // 이 width와 height는 Next.js가 이미지를 최적화하고
                                   // 레이아웃 쉬프트(CLS)를 방지하기 위해 사용합니다.
                      style={{
                        maxWidth: '100%', // 실제 화면에서는 컨테이너 너비를 넘지 않도록 합니다.
                        height: 'auto',    // 너비에 맞춰 높이가 자동으로 조절되어 원본 비율을 유지합니다.
                        borderRadius: '8px', // 이미지 모서리를 살짝 둥글게 (선택 사항)
                      }}
                    />
                  </div>
                );
              }
              return null; // src가 없다면 렌더링하지 않음
            },
            // 여기에 다른 마크다운 요소(h2, p, a 등)에 대한 커스텀 스타일도 추가할 수 있습니다.
            // 예시 (이전 답변에서 드렸던 스타일 일부):
            h2: ({node, ...props}) => <h2 style={{fontSize: '2rem', marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem', fontWeight: 600}} {...props} />,
            p: ({node, ...props}) => <p style={{marginBottom: '1.2rem'}} {...props} />,
          }}
        >
          {item.content}
        </ReactMarkdown>
      </div>
    </div>
  );
}