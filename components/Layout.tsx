import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter()

  const navigation = [
    { name: '홈', href: '/' },
    { name: '심리학 교육', href: '/psychology' },
    { name: '테스트', href: '/tests' },
    { name: '블로그', href: '/blog' },
    { name: '소개', href: '/about' },
    { name: '문의', href: '/contact' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/" className="text-2xl font-bold text-purple-600">
                  심리학 교육센터
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`${
                      router.pathname === item.href
                        ? 'border-purple-500 text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* 광고 배너 위치 (승인 후 활성화) */}
        <div className="adsense-banner">
          {/* <ins className="adsbygoogle" style={{display: 'block'}} data-ad-client="ca-pub-9110596823822061" data-ad-slot="1234567890" data-ad-format="auto" data-full-width-responsive="true"></ins> */}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* 메인 콘텐츠 */}
          <div className="flex-1">
            {children}
          </div>

          {/* 사이드바 */}
          <aside className="w-full lg:w-80">
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">인기 테스트</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/tests/mbti" className="text-purple-600 hover:text-purple-800">
                    MBTI 성격유형 검사
                  </Link>
                </li>
                <li>
                  <Link href="/tests/big-five" className="text-purple-600 hover:text-purple-800">
                    빅파이브 성격 검사
                  </Link>
                </li>
                <li>
                  <Link href="/tests/stress-level" className="text-purple-600 hover:text-purple-800">
                    스트레스 지수 테스트
                  </Link>
                </li>
              </ul>
            </div>

            {/* 사이드바 광고 위치 (승인 후 활성화) */}
            <div className="adsense-sidebar">
              {/* <ins className="adsbygoogle" style={{display: 'block'}} data-ad-client="ca-pub-9110596823822061" data-ad-slot="1234567891" data-ad-format="rectangle"></ins> */}
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">최신 글</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/blog/psychology-basics" className="text-gray-600 hover:text-gray-800">
                    심리학 기초 이론 이해하기
                  </Link>
                </li>
                <li>
                  <Link href="/blog/personality-development" className="text-gray-600 hover:text-gray-800">
                    성격 발달과 환경의 영향
                  </Link>
                </li>
                <li>
                  <Link href="/blog/cognitive-psychology" className="text-gray-600 hover:text-gray-800">
                    인지심리학의 실생활 적용
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </main>

      {/* 푸터 */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-white text-lg font-semibold mb-4">심리학 교육센터</h3>
              <p className="text-gray-300 text-sm">
                과학적 근거를 바탕으로 한 심리학 교육과 신뢰성 높은 성격 분석을 제공합니다.
                전문적인 심리학 지식과 실용적인 자기 이해를 통해 더 나은 삶을 살아가세요.
              </p>
            </div>
            <div>
              <h3 className="text-white text-sm font-semibold mb-4">사이트 정보</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-gray-300 hover:text-white text-sm">
                    개인정보처리방침
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-300 hover:text-white text-sm">
                    이용약관
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-white text-sm">
                    문의하기
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-sm font-semibold mb-4">연락처</h3>
              <p className="text-gray-300 text-sm">
                이메일: contact@testevery.com<br />
                전화: 02-1234-5678
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700">
            <p className="text-gray-300 text-sm text-center">
              © 2024 심리학 교육센터. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}