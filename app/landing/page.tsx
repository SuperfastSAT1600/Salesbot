// app/landing/page.tsx (라우팅 확인용 초간단 테스트)

export default function LandingPage() {
  console.log("!!! VERCEL LANDING PAGE VERY SIMPLE RENDER TEST !!!");
  return (
    <div style={{backgroundColor: 'yellow', padding: '50px', textAlign: 'center', border: '10px solid orange'}}>
      <h1 style={{fontSize: '4rem', color: 'red'}}>!!! LANDING PAGE TEST SUCCESSFUL !!!</h1>
      <p style={{fontSize: '2rem'}}>이 메시지가 보이면 /landing 라우트는 작동합니다.</p>
    </div>
  );
}
