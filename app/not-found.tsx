import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '페이지를 찾을 수 없습니다 (404) | 모두의 테스트',
  description: '요청하신 페이지를 찾을 수 없습니다. 홈페이지로 돌아가서 다른 페이지를 탐색해보세요.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center bg-white rounded-2xl p-12 shadow-lg max-w-md mx-4">
        <div className="text-6xl mb-6">🔍</div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          페이지를 찾을 수 없습니다
        </h1>
        
        <p className="text-gray-600 mb-8 leading-relaxed">
          요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
          아래 링크를 통해 다른 페이지로 이동해주세요.
        </p>
        
        <div className="space-y-4">
          <Link
            href="/"
            className="block w-full bg-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-200"
          >
            홈페이지로 돌아가기
          </Link>
          
          <Link
            href="/blog"
            className="block w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-xl font-semibold hover:bg-gray-200 transition-colors duration-200"
          >
            블로그 둘러보기
          </Link>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            문제가 지속될 경우{' '}
            <Link href="/contact" className="text-blue-600 hover:text-blue-800">
              문의하기
            </Link>
          </p>
        </div>
      </div>

      {/* Structured Data for 404 Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "페이지를 찾을 수 없습니다",
            "description": "요청하신 페이지를 찾을 수 없습니다.",
            "url": "https://www.testevery.com/404",
            "isPartOf": {
              "@type": "WebSite",
              "name": "모두의 테스트",
              "url": "https://www.testevery.com"
            }
          })
        }}
      />
    </main>
  )
}