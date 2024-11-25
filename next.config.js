 /** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',  // 정적 내보내기 설정
    images: {
      unoptimized: true  // GitHub Pages에서는 이미지 최적화가 지원되지 않음
    },
    basePath: process.env.NODE_ENV === 'production' ? '/ToyVenture' : '', 
  }
  
  module.exports = nextConfig 