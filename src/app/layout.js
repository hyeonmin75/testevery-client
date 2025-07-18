import Link from 'next/link';
import './globals.css';

export const metadata = {
  metadataBase: new URL('https://www.testevery.com'),
  title: {
    default: 'TestEvery - 모든 심리테스트의 시작',
    template: '%s | TestEvery'
  },
  description: '과학적 기반의 심리테스트와 성격 분석을 제공하는 전문 플랫폼입니다.',
  keywords: ['심리테스트', '성격검사', 'MBTI', '빅5', '에니어그램', '창의력검사'],
  authors: [{ name: 'TestEvery' }],
  creator: 'TestEvery',
  publisher: 'TestEvery',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'TestEvery',
  },
  applicationName: 'TestEvery',
  referrer: 'origin-when-cross-origin',
  category: 'psychology',
  classification: 'psychology tests',
  verification: {
    google: 'verification_token_here',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2563eb" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-korean antialiased">
        <div className="min-h-screen bg-gray-50">
          {/* 네비게이션 */}
          <nav className="bg-white shadow-sm border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <div className="flex items-center">
                  <Link href="/" className="text-2xl font-bold text-blue-600">
                    TestEvery
                  </Link>
                </div>
                <div className="hidden md:flex items-center space-x-8">
                  <Link
                    href="/tests/"
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    테스트
                  </Link>
                  <Link
                    href="/about/"
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    소개
                  </Link>
                  <Link
                    href="/contact/"
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    문의
                  </Link>
                </div>
                <div className="flex items-center">
                  <Link
                    href="/tests/"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                  >
                    테스트 시작
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          {/* 메인 콘텐츠 */}
          <main>
            {children}
          </main>

          {/* 푸터 */}
          <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">TestEvery</h3>
                  <p className="text-gray-400 text-sm">
                    과학적 기반의 심리테스트와 성격 분석을 제공하는 전문 플랫폼
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4">서비스</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link href="/tests/" className="text-gray-400 hover:text-white transition-colors">
                        테스트 목록
                      </Link>
                    </li>
                    <li>
                      <Link href="/test/mbti-personality-test/" className="text-gray-400 hover:text-white transition-colors">
                        MBTI 테스트
                      </Link>
                    </li>
                    <li>
                      <Link href="/test/big5-personality-test/" className="text-gray-400 hover:text-white transition-colors">
                        빅5 테스트
                      </Link>
                    </li>
                    <li>
                      <Link href="/test/enneagram-personality-test/" className="text-gray-400 hover:text-white transition-colors">
                        에니어그램 테스트
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4">정보</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link href="/about/" className="text-gray-400 hover:text-white transition-colors">
                        소개
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact/" className="text-gray-400 hover:text-white transition-colors">
                        문의하기
                      </Link>
                    </li>
                    <li>
                      <Link href="/privacy/" className="text-gray-400 hover:text-white transition-colors">
                        개인정보처리방침
                      </Link>
                    </li>
                    <li>
                      <Link href="/terms/" className="text-gray-400 hover:text-white transition-colors">
                        이용약관
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4">연락처</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>이메일: contact@testevery.com</li>
                    <li>웹사이트: www.testevery.com</li>
                    <li>운영시간: 24시간 자동 서비스</li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
                <p>&copy; 2025 TestEvery. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}