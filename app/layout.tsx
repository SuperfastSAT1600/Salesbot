// 파일 경로: app/layout.tsx
import "./globals.css"; // Tailwind CSS 포함한 전역 스타일
import { Inter } from 'next/font/google'; // Next.js에서 Google Font 사용 예시 (선택 사항)
import Script from 'next/script';

// Inter 폰트 사용 예시 (다른 폰트를 원하시면 변경 가능)
// 만약 특정 폰트를 사용하지 않고 시스템 기본 sans-serif를 원하시면 이 부분은 생략해도 됩니다.
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "SAT 국가대표 SuperfastSAT",
  description: "무엇이든 물어보세요! SAT 고민을 단숨에 해결해 드립니다.",
  openGraph: {
    title: "SAT 국가대표 SuperfastSAT",
    description: "무엇이든 물어보세요! SAT 고민을 단숨에 해결해 드립니다.",
    type: "website",
    locale: "ko_KR",
    siteName: "SuperfastSAT",
  },
  twitter: {
    card: "summary_large_image",
    title: "SAT 국가대표 SuperfastSAT",
    description: "무엇이든 물어보세요! SAT 고민을 단숨에 해결해 드립니다.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1186644429932797');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{display: 'none'}}
            src="https://www.facebook.com/tr?id=1186644429932797&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
        {/* Google Analytics 4 (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CP4LY9P144"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CP4LY9P144');
          `}
        </Script>
      </head>
      
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