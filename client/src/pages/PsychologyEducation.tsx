import { motion } from "framer-motion";
import { useLocation } from "wouter";

export default function PsychologyEducation() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-gradient-korean">
      <div className="max-w-6xl mx-auto p-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <button
              onClick={() => setLocation('/')}
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 transition-colors mb-6"
            >
              ← 홈으로 돌아가기
            </button>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              심리학 교육 센터
            </h1>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              체계적인 심리학 지식과 최신 연구 동향을 통해 인간의 마음과 행동을 과학적으로 이해해보세요
            </p>
          </div>

          {/* 교육 과정 카테고리 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <motion.div 
              className="bg-white rounded-2xl shadow-lg p-6 cursor-pointer hover:shadow-xl transition-all duration-300"
              onClick={() => setLocation('/psychology/mbti-theory')}
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">성격 심리학</h3>
              <p className="text-gray-600 mb-4">
                MBTI, 빅파이브 모델, 융의 심리유형론 등 성격 이론의 과학적 근거와 실제 활용법을 학습합니다.
              </p>
              <div className="flex items-center text-purple-600 text-sm font-semibold">
                학습하기 →
              </div>
            </motion.div>

            <motion.div 
              className="bg-white rounded-2xl shadow-lg p-6 cursor-pointer hover:shadow-xl transition-all duration-300"
              onClick={() => setLocation('/psychology/cognitive-psychology')}
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">인지 심리학</h3>
              <p className="text-gray-600 mb-4">
                기억, 주의, 사고, 학습 등 인간의 인지 과정을 과학적으로 탐구하고 일상 적용법을 배웁니다.
              </p>
              <div className="flex items-center text-blue-600 text-sm font-semibold">
                학습하기 →
              </div>
            </motion.div>

            <motion.div 
              className="bg-white rounded-2xl shadow-lg p-6 cursor-pointer hover:shadow-xl transition-all duration-300"
              onClick={() => setLocation('/psychology/social-psychology')}
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">사회 심리학</h3>
              <p className="text-gray-600 mb-4">
                대인관계, 집단 역학, 사회적 영향 등 사회적 맥락에서의 인간 행동을 분석합니다.
              </p>
              <div className="flex items-center text-green-600 text-sm font-semibold">
                학습하기 →
              </div>
            </motion.div>

            <motion.div 
              className="bg-white rounded-2xl shadow-lg p-6 cursor-pointer hover:shadow-xl transition-all duration-300"
              onClick={() => setLocation('/psychology/developmental-psychology')}
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">발달 심리학</h3>
              <p className="text-gray-600 mb-4">
                생애 전반에 걸친 인간의 성장과 변화 과정을 이해하고 각 단계별 특성을 학습합니다.
              </p>
              <div className="flex items-center text-orange-600 text-sm font-semibold">
                학습하기 →
              </div>
            </motion.div>

            <motion.div 
              className="bg-white rounded-2xl shadow-lg p-6 cursor-pointer hover:shadow-xl transition-all duration-300"
              onClick={() => setLocation('/psychology/clinical-psychology')}
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">임상 심리학</h3>
              <p className="text-gray-600 mb-4">
                정신건강, 스트레스 관리, 치료적 접근법 등 실용적인 심리학 지식을 습득합니다.
              </p>
              <div className="flex items-center text-red-600 text-sm font-semibold">
                학습하기 →
              </div>
            </motion.div>

            <motion.div 
              className="bg-white rounded-2xl shadow-lg p-6 cursor-pointer hover:shadow-xl transition-all duration-300"
              onClick={() => setLocation('/psychology/research-methods')}
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">연구 방법론</h3>
              <p className="text-gray-600 mb-4">
                심리학 연구의 과학적 방법론과 통계적 분석을 통해 객관적 사고력을 기릅니다.
              </p>
              <div className="flex items-center text-purple-600 text-sm font-semibold">
                학습하기 →
              </div>
            </motion.div>
          </div>

          {/* 주요 특징 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">교육 센터의 특징</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">학술적 깊이</h3>
                <p className="text-gray-600 text-sm">
                  대학원 수준의 전문적 내용을 일반인도 이해할 수 있도록 체계적으로 구성했습니다
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🔬</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">최신 연구</h3>
                <p className="text-gray-600 text-sm">
                  국내외 최신 연구 결과와 동향을 지속적으로 업데이트하여 제공합니다
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">실용적 적용</h3>
                <p className="text-gray-600 text-sm">
                  이론적 지식을 일상생활과 직장에서 활용할 수 있는 실용적 가이드를 제공합니다
                </p>
              </div>
            </div>
          </div>

          {/* 최신 콘텐츠 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">최신 업데이트 콘텐츠</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">신경가소성과 학습 능력</h3>
                <p className="text-gray-600 text-sm mb-2">2024년 12월 10일 업데이트</p>
                <p className="text-gray-600">
                  최신 뇌과학 연구를 통해 밝혀진 성인의 학습 능력 향상 방법과 뇌 훈련 기법을 소개합니다.
                </p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">디지털 시대의 주의력 변화</h3>
                <p className="text-gray-600 text-sm mb-2">2024년 12월 8일 업데이트</p>
                <p className="text-gray-600">
                  스마트폰과 소셜미디어가 인간의 주의력과 집중력에 미치는 영향에 대한 종합 분석입니다.
                </p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">원격 근무 시대의 조직 심리학</h3>
                <p className="text-gray-600 text-sm mb-2">2024년 12월 5일 업데이트</p>
                <p className="text-gray-600">
                  코로나19 이후 변화된 근무 환경에서의 팀워크와 조직 문화 형성 방안을 제시합니다.
                </p>
              </div>
            </div>
          </div>

          {/* 전문가 추천 도서 */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">전문가 추천 도서</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">심리학 입문서</h3>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• 심리학의 이해 (데이비드 마이어스)</li>
                  <li>• 인간 본성의 법칙 (로버트 그린)</li>
                  <li>• 사피엔스 (유발 하라리)</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">성격 심리학</h3>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• 심리유형 (칼 구스타프 융)</li>
                  <li>• 성격의 과학 (브라이언 리틀)</li>
                  <li>• 16가지 성격유형 (이사벨 마이어스)</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">인지 심리학</h3>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• 생각에 관한 생각 (대니얼 카너먼)</li>
                  <li>• 인지편향 사전 (라밀 버그만)</li>
                  <li>• 뇌과학의 이해 (에릭 캔델)</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}