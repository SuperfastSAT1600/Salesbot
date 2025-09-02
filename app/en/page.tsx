// AI-AGENT-DEMO/app/en/page.tsx

'use client';

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
        Our Company AI Chatbot Demo
      </h1>
      <p style={{
        fontSize: 'clamp(1rem, 3vw, 1.25rem)',
        marginBottom: 'clamp(1.5rem, 4vw, 2rem)',
        color: '#4B5563',
        lineHeight: 1.6,
        maxWidth: 'clamp(280px, 90vw, 600px)'
      }}>
        Ask our chatbot anything you're curious about!
      </p>
      
      {/* Language Switcher */}
      <div style={{
        marginTop: 'clamp(2rem, 6vw, 3rem)',
        display: 'flex',
        gap: '1rem',
        alignItems: 'center'
      }}>
        <a 
          href="/"
          style={{
            color: '#6B7280',
            textDecoration: 'none',
            fontSize: 'clamp(0.875rem, 2.5vw, 1rem)',
            padding: '0.5rem 1rem',
            border: '1px solid #D1D5DB',
            borderRadius: '8px',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#F3F4F6';
            e.currentTarget.style.color = '#374151';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = '#6B7280';
          }}
        >
          한국어
        </a>
        <span style={{
          color: '#071BE9',
          fontSize: 'clamp(0.875rem, 2.5vw, 1rem)',
          fontWeight: '600',
          padding: '0.5rem 1rem',
          border: '1px solid #071BE9',
          borderRadius: '8px',
          backgroundColor: '#EBF4FF'
        }}>
          English
        </span>
      </div>
      
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
