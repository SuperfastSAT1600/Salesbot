// 파일 경로: app/layout.tsx
import "./globals.css"; // Tailwind CSS 포함한 전역 스타일
import { Inter } from 'next/font/google'; // Next.js에서 Google Font 사용 예시 (선택 사항)

// Inter 폰트 사용 예시 (다른 폰트를 원하시면 변경 가능)
// 만약 특정 폰트를 사용하지 않고 시스템 기본 sans-serif를 원하시면 이 부분은 생략해도 됩니다.
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "SuperfastSAT 고객센터",
  description: "무엇이든 물어보세요! SAT 고민을 단숨에 해결해 드립니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      {/* body 태그에 직접 스타일을 주는 것보다, 
        Tailwind CSS를 사용하신다면 className을 활용하거나,
        globals.css에서 body에 대한 기본 스타일을 정의하는 것이 일반적입니다.
        여기서는 Next/font를 사용하는 예시를 보여드립니다.
      */}
      <body 
        className={`${inter.className} antialiased`}
        style={{ 
          fontFamily: 'var(--font-inter), system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
          margin: 0, // 기본 마진 제거
          padding: 0, // 기본 패딩 제거
          boxSizing: 'border-box', // 박스 모델 표준화
          WebkitFontSmoothing: 'antialiased', // 폰트 안티앨리어싱 (macOS)
          MozOsxFontSmoothing: 'grayscale',  // 폰트 안티앨리어싱 (Firefox)
        }}
      >
        {children}
      </body>
    </html>
  );
}