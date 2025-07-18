import Link from 'next/link';

export const metadata = {
  title: '페이지를 찾을 수 없습니다 | TestEvery',
  description: '요청하신 페이지를 찾을 수 없습니다. 다른 페이지를 이용해보세요.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <div className="text-9xl mb-4">🔍</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            페이지를 찾을 수 없습니다
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              홈으로 돌아가기
            </Link>
            <Link
              href="/tests/"
              className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors duration-200"
            >
              테스트 목록 보기
            </Link>
          </div>
        </div>
      </div>
      
      <div className="mt-12 sm:mx-auto sm:w-full sm:max-w-2xl">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            인기 테스트 바로가기
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/test/mbti-personality-test/"
              className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center">
                <span className="text-2xl mr-3">🧠</span>
                <div>
                  <h3 className="font-semibold text-gray-900">MBTI 테스트</h3>
                  <p className="text-sm text-gray-600">16가지 성격 유형 분석</p>
                </div>
              </div>
            </Link>
            <Link
              href="/test/big5-personality-test/"
              className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center">
                <span className="text-2xl mr-3">📊</span>
                <div>
                  <h3 className="font-semibold text-gray-900">빅5 테스트</h3>
                  <p className="text-sm text-gray-600">과학적 성격 분석</p>
                </div>
              </div>
            </Link>
            <Link
              href="/test/enneagram-personality-test/"
              className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center">
                <span className="text-2xl mr-3">🎯</span>
                <div>
                  <h3 className="font-semibold text-gray-900">에니어그램</h3>
                  <p className="text-sm text-gray-600">9가지 성격 유형</p>
                </div>
              </div>
            </Link>
            <Link
              href="/test/creativity-assessment-test/"
              className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center">
                <span className="text-2xl mr-3">💡</span>
                <div>
                  <h3 className="font-semibold text-gray-900">창의력 테스트</h3>
                  <p className="text-sm text-gray-600">창의적 사고 능력 측정</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}