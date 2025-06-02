/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Tailwind가 클래스 이름을 스캔할 디렉토리 경로
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // <div className="aspect-w-16 aspect-h-9">…</div> 같은
    // 비율 유지 유틸리티를 쓰고 싶으면 이 플러그인을 추가합니다.
    require('@tailwindcss/aspect-ratio'),
  ],
};
