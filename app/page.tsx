// AI-AGENT-DEMO/app/page.tsx

export default function Home() {
  return (
    <main style={{ 
      padding: 'clamp(1rem, 4vw, 20px)', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      textAlign: 'center'
    }}>
      <h1 style={{
        fontSize: 'clamp(1.5rem, 6vw, 2.5rem)',
        marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
        color: '#1F2937',
        fontWeight: 700,
        lineHeight: 1.2
      }}>
        우리 회사 AI 챗봇 데모
      </h1>
      <p style={{
        fontSize: 'clamp(1rem, 3vw, 1.25rem)',
        marginBottom: 'clamp(1.5rem, 4vw, 2rem)',
        color: '#4B5563',
        lineHeight: 1.6,
        maxWidth: 'clamp(280px, 90vw, 600px)'
      }}>
        궁금한 점이 있으면 챗봇에게 물어보세요!
      </p>
      
      {/* 챗봇 위젯 제거됨 */}
      
      <p style={{
        fontSize: 'clamp(0.875rem, 2.5vw, 1rem)',
        color: '#6B7280',
        marginTop: 'clamp(2rem, 6vw, 3rem)'
      }}>
        Powered by OpenAI
      </p>
    </main>
  );
}