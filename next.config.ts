// 파일 경로: next.config.ts

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // images 설정을 추가합니다.
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co', // 이 도메인의 이미지를 허용합니다.
        port: '',
        pathname: '/**', // 이 도메인의 모든 경로에 있는 이미지를 허용합니다.
      },
    ],
  },
};

export default nextConfig;