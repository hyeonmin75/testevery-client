import { motion } from "framer-motion";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-gradient-korean">
      <div className="max-w-4xl mx-auto p-6 py-12">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-8xl mb-8">🔍</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            페이지를 찾을 수 없습니다
          </h1>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다. 
            아래의 도움말을 참고하여 원하시는 콘텐츠를 찾아보세요.
          </p>
        </motion.div>

        {/* 도움말 섹션 */}
        <motion.div
          className="bg-white rounded-2xl p-8 shadow-lg mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            이런 상황일 수 있습니다
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-xl p-6">
              <div className="text-3xl mb-4">🔗</div>
              <h3 className="text-lg font-semibold text-blue-800 mb-3">잘못된 링크</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                입력하신 주소에 오타가 있거나 더 이상 사용되지 않는 링크일 수 있습니다. 
                주소를 다시 확인해보시거나 홈페이지에서 원하시는 콘텐츠를 찾아보세요.
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-6">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-lg font-semibold text-green-800 mb-3">임시적 문제</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                서버 점검이나 임시적인 기술적 문제로 인해 페이지에 접근할 수 없을 수 있습니다. 
                잠시 후에 다시 시도해보시거나 홈페이지를 통해 접근해보세요.
              </p>
            </div>

            <div className="bg-purple-50 rounded-xl p-6">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-lg font-semibold text-purple-800 mb-3">새로운 기능</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                해당 기능이 아직 개발 중이거나 곧 출시될 예정일 수 있습니다. 
                최신 심리 테스트와 콘텐츠는 지속적으로 업데이트되고 있습니다.
              </p>
            </div>

            <div className="bg-orange-50 rounded-xl p-6">
              <div className="text-3xl mb-4">📧</div>
              <h3 className="text-lg font-semibold text-orange-800 mb-3">문의 사항</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                지속적으로 문제가 발생한다면 고객 지원팀에 문의해주세요. 
                더 나은 서비스 제공을 위해 귀하의 피드백을 소중히 여깁니다.
              </p>
            </div>
          </div>
        </motion.div>

        {/* 추천 콘텐츠 */}
        <motion.div
          className="bg-white rounded-2xl p-8 shadow-lg mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            인기 심리 테스트
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <button
              onClick={() => setLocation('/test/career')}
              className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl p-6 hover:shadow-lg transition-all duration-200 text-left"
            >
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">MBTI 성격유형</h3>
              <p className="text-gray-600 text-sm">16가지 성격유형으로 나를 알아보기</p>
            </button>

            <button
              onClick={() => setLocation('/test/animal')}
              className="bg-gradient-to-br from-orange-100 to-pink-100 rounded-xl p-6 hover:shadow-lg transition-all duration-200 text-left"
            >
              <div className="text-4xl mb-4">🐾</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">동물 성격 테스트</h3>
              <p className="text-gray-600 text-sm">나와 닮은 동물의 특성 발견하기</p>
            </button>

            <button
              onClick={() => setLocation('/test/burnout-risk')}
              className="bg-gradient-to-br from-red-100 to-pink-100 rounded-xl p-6 hover:shadow-lg transition-all duration-200 text-left"
            >
              <div className="text-4xl mb-4">🔥</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">번아웃 위험도</h3>
              <p className="text-gray-600 text-sm">현재 스트레스 수준 체크하기</p>
            </button>
          </div>
        </motion.div>

        {/* 사이트 정보 */}
        <motion.div
          className="bg-white rounded-2xl p-8 shadow-lg mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            TestEvery 소개
          </h2>
          
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-700 leading-relaxed mb-6">
              TestEvery는 과학적으로 검증된 심리 테스트를 통해 자신을 더 깊이 이해할 수 있도록 도와드리는 플랫폼입니다. 
              MBTI 성격유형 검사부터 스트레스 진단, 집중력 측정까지 다양한 심리학적 도구를 제공합니다.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="text-2xl font-bold text-blue-600 mb-2">15+</div>
                <p className="text-gray-600 text-sm">다양한 심리 테스트</p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="text-2xl font-bold text-green-600 mb-2">100K+</div>
                <p className="text-gray-600 text-sm">월간 이용자 수</p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="text-2xl font-bold text-purple-600 mb-2">98%</div>
                <p className="text-gray-600 text-sm">사용자 만족도</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 액션 버튼 */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setLocation('/')}
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-purple-600 hover:to-blue-600 transition-all transform hover:scale-105 shadow-lg"
            >
              홈페이지로 돌아가기
            </button>
            
            <button
              onClick={() => setLocation('/blog')}
              className="bg-white text-gray-800 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg border-2 border-gray-200"
            >
              심리학 블로그 보기
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
