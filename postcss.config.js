// 파일 경로: postcss.config.js (프로젝트 루트에 위치)
module.exports = {
  plugins: {
    // 'tailwindcss' 대신 '@tailwindcss/postcss'를 사용하도록 시도
    '@tailwindcss/postcss': {}, 
    'autoprefixer': {},
  },
};