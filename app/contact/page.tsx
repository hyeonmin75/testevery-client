import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '문의하기 | 모두의 테스트',
  description: '모두의 테스트에 대한 문의사항이 있으시면 언제든지 연락해주세요. 빠른 시일 내에 답변드리겠습니다.',
  keywords: ['문의', '연락처', '고객지원', '피드백'],
  openGraph: {
    title: '문의하기 | 모두의 테스트',
    description: '모두의 테스트에 대한 문의사항이 있으시면 언제든지 연락해주세요.',
    url: 'https://www.testevery.com/contact',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.testevery.com/contact',
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            홈
          </Link>
          <span className="mx-2 text-gray-500">/</span>
          <span className="text-gray-700">문의하기</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            문의하기
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            모두의 테스트에 대한 궁금한 점이나 제안사항이 있으시면 언제든지 연락해주세요.
            빠른 시일 내에 답변드리겠습니다.
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow-lg">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                이름 *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="이름을 입력해주세요"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                이메일 *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="이메일을 입력해주세요"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                제목 *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="문의 제목을 입력해주세요"
              />
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                문의 유형
              </label>
              <select
                id="category"
                name="category"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">문의 유형을 선택해주세요</option>
                <option value="test">테스트 관련</option>
                <option value="technical">기술적 문제</option>
                <option value="content">콘텐츠 제안</option>
                <option value="business">사업 제휴</option>
                <option value="other">기타</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                문의 내용 *
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                placeholder="문의 내용을 상세히 입력해주세요"
              ></textarea>
            </div>

            <div className="flex items-center">
              <input
                id="privacy"
                name="privacy"
                type="checkbox"
                required
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                개인정보 처리방침에 동의합니다 *
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              문의 보내기
            </button>
          </form>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            자주 묻는 질문
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Q. 테스트 결과는 얼마나 정확한가요?
              </h3>
              <p className="text-gray-600">
                모든 테스트는 과학적으로 검증된 심리학 이론을 바탕으로 개발되었습니다. 
                다만 온라인 테스트의 특성상 참고용으로 활용하시기 바랍니다.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Q. 개인정보는 안전하게 보호되나요?
              </h3>
              <p className="text-gray-600">
                사용자의 개인정보와 테스트 결과는 엄격히 보호되며, 
                외부에 공유되지 않습니다.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Q. 새로운 테스트 추가 요청이 가능한가요?
              </h3>
              <p className="text-gray-600">
                언제든지 새로운 테스트에 대한 제안을 보내주세요. 
                검토 후 추가 가능한 테스트는 개발하여 제공하겠습니다.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "문의하기",
            "url": "https://www.testevery.com/contact",
            "mainEntity": {
              "@type": "Organization",
              "name": "모두의 테스트",
              "url": "https://www.testevery.com",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": "Korean"
              }
            }
          })
        }}
      />
    </main>
  )
}