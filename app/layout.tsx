import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: '모두의 테스트 | 심리테스트 전문 플랫폼',
    template: '%s | 모두의 테스트'
  },
  description: '과학적으로 검증된 심리테스트로 나를 더 깊이 이해해보세요. MBTI, 창의력 진단, 집중력 테스트 등 다양한 심리 진단 도구를 제공합니다.',
  keywords: ['심리테스트', 'MBTI', '성격테스트', '창의력진단', '집중력테스트', '심리진단'],
  authors: [{ name: '모두의 테스트' }],
  creator: '모두의 테스트',
  publisher: '모두의 테스트',
  
  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://www.testevery.com',
    siteName: '모두의 테스트',
    title: '모두의 테스트 | 심리테스트 전문 플랫폼',
    description: '과학적으로 검증된 심리테스트로 나를 더 깊이 이해해보세요.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '모두의 테스트',
      },
    ],
  },
  
  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: '모두의 테스트 | 심리테스트 전문 플랫폼',
    description: '과학적으로 검증된 심리테스트로 나를 더 깊이 이해해보세요.',
    images: ['/og-image.png'],
  },
  
  // Verification
  verification: {
    google: 'your-google-verification-code',
    other: {
      'naver-site-verification': 'your-naver-verification-code',
    },
  },
  
  // Additional metadata
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Canonical URL
  alternates: {
    canonical: 'https://www.testevery.com',
  },
  
  // Category
  category: 'psychology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "모두의 테스트",
              "url": "https://www.testevery.com",
              "description": "과학적으로 검증된 심리테스트 플랫폼",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.testevery.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}