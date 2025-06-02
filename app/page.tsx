// AI-AGENT-DEMO/app/page.tsx

// ChatbotWidget 컴포넌트를 임포트합니다.
// 현재 파일(page.tsx)이 'app' 폴더에 있고, ChatbotWidget은 'app/components' 폴더에 있으므로 경로는 './components/ChatbotWidget'입니다.
import ChatbotWidget from './components/ChatbotWidget';

// Next.js의 메인 페이지 컴포넌트입니다.
export default function Home() {
  return (
    // <main> 태그는 페이지의 주요 콘텐츠를 담습니다.
    // 여기서는 챗봇 위젯을 중앙에 배치하기 위한 간단한 스타일을 추가했습니다.
    <main style={{ padding: '20px', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1>우리 회사 AI 챗봇 데모</h1>
      <p>궁금한 점이 있으면 챗봇에게 물어보세요!</p>
      <br/>

      {/* ----- 여기에 챗봇 위젯이 표시됩니다. ----- */}
      {/* 이 태그 하나로 ChatbotWidget 컴포넌트의 모든 UI와 로직이 페이지에 포함됩니다. */}
      <ChatbotWidget />
      {/* ------------------------------------------- */}

      <br/>
      <p>Powered by OpenAI</p>
    </main>
  );
}