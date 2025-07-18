export const metadata = {
  title: '문의하기 | TestEvery',
  description: 'TestEvery에 대한 궁금한 점이나 제안사항이 있으시면 언제든 문의해주세요. 빠른 시일 내에 답변드리겠습니다.',
  keywords: ['문의', '연락처', '피드백', '제안', '고객지원'],
  openGraph: {
    title: '문의하기 | TestEvery',
    description: 'TestEvery에 대한 궁금한 점이나 제안사항이 있으시면 언제든 문의해주세요.',
    url: 'https://www.testevery.com/contact/',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 섹션 */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            문의하기
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            궁금한 점이나 제안사항이 있으시면 언제든 연락주세요.
            빠른 시일 내에 답변드리겠습니다.
          </p>
        </div>
      </section>

      {/* 문의 양식 섹션 */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8">
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="이메일을 입력해주세요"
                />
              </div>
              
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                  문의 유형 *
                </label>
                <select
                  id="category"
                  name="category"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">문의 유형을 선택해주세요</option>
                  <option value="general">일반 문의</option>
                  <option value="test-request">새로운 테스트 요청</option>
                  <option value="bug-report">버그 신고</option>
                  <option value="feedback">피드백 및 제안</option>
                  <option value="partnership">파트너십 문의</option>
                  <option value="other">기타</option>
                </select>
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="문의 제목을 입력해주세요"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  내용 *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                  placeholder="문의 내용을 상세히 입력해주세요"
                ></textarea>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="privacy"
                  name="privacy"
                  required
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                  <a href="/privacy/" className="text-blue-600 hover:text-blue-800">개인정보처리방침</a>에 동의합니다 *
                </label>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  문의하기
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 연락처 정보 섹션 */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            다른 연락 방법
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl">📧</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                이메일
              </h3>
              <p className="text-gray-600 mb-4">
                일반적인 문의는 이메일로 보내주세요
              </p>
              <a
                href="mailto:contact@testevery.com"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                contact@testevery.com
              </a>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">💬</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                카카오톡
              </h3>
              <p className="text-gray-600 mb-4">
                빠른 답변을 원하시면 카카오톡으로 문의해주세요
              </p>
              <a
                href="http://pf.kakao.com/_testevery"
                className="text-blue-600 hover:text-blue-800 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                @testevery
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ 섹션 */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            자주 묻는 질문
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                테스트 결과는 얼마나 정확한가요?
              </h3>
              <p className="text-gray-600">
                모든 테스트는 심리학적 연구와 통계적 검증을 거친 신뢰할 수 있는 도구입니다. 
                다만, 심리테스트는 참고용으로 활용하시고, 전문적인 상담이 필요한 경우에는 
                전문가와 상담하시기 바랍니다.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                테스트는 정말 무료인가요?
              </h3>
              <p className="text-gray-600">
                네, 모든 테스트는 완전히 무료로 제공됩니다. 회원가입도 필요없고, 
                숨겨진 비용도 없습니다. 언제든지 자유롭게 이용하실 수 있습니다.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                개인정보는 안전한가요?
              </h3>
              <p className="text-gray-600">
                사용자의 개인정보 보호를 최우선으로 생각합니다. 테스트 결과는 
                사용자의 브라우저에만 저장되며, 서버에는 저장되지 않습니다. 
                자세한 내용은 개인정보처리방침을 참고해주세요.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                새로운 테스트는 언제 추가되나요?
              </h3>
              <p className="text-gray-600">
                정기적으로 새로운 테스트를 추가하고 있습니다. 원하시는 테스트가 있으시면 
                문의 양식을 통해 요청해주세요. 많은 분들이 요청하신 테스트를 우선적으로 
                개발하고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 응답 시간 안내 */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            응답 시간 안내
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl mb-2">🟢</div>
              <h3 className="font-semibold text-gray-900 mb-2">일반 문의</h3>
              <p className="text-gray-600">1-2 영업일 내 답변</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl mb-2">🟡</div>
              <h3 className="font-semibold text-gray-900 mb-2">기술 문의</h3>
              <p className="text-gray-600">2-3 영업일 내 답변</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl mb-2">🔴</div>
              <h3 className="font-semibold text-gray-900 mb-2">긴급 문의</h3>
              <p className="text-gray-600">24시간 내 답변</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}