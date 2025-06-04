import { motion } from "framer-motion";
import { useLocation } from "wouter";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  content: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: "mbti-workplace-dynamics",
    title: "직장에서의 MBTI 활용법: 팀워크 향상을 위한 성격유형 이해",
    excerpt: "각 MBTI 유형별 업무 스타일과 커뮤니케이션 방법을 알아보고, 효과적인 팀 협업 전략을 제시합니다.",
    date: "2024-12-15",
    category: "직장 심리학",
    readTime: "8분",
    content: `
직장에서 동료들과의 관계는 업무 효율성과 직접적으로 연결됩니다. MBTI 성격유형을 이해하면 더 효과적인 커뮤니케이션과 협업이 가능합니다.

## 외향형(E) vs 내향형(I) 팀원과의 협업

**외향형 팀원과 일할 때:**
- 브레인스토밍 세션을 적극 활용하세요
- 즉석 회의나 대화를 통한 의견 교환을 선호합니다
- 프로젝트 진행 상황을 자주 공유하고 피드백을 주고받으세요

**내향형 팀원과 일할 때:**
- 회의 안건을 미리 공유하여 준비할 시간을 제공하세요
- 일대일 대화나 서면 커뮤니케이션을 활용하세요
- 깊이 있는 분석이나 집중이 필요한 업무를 맡기는 것이 효과적입니다

## 감각형(S) vs 직관형(N) 업무 스타일

**감각형 직원의 특징:**
- 구체적이고 실용적인 해결책을 선호
- 단계별로 체계적인 접근을 중시
- 기존 경험과 데이터를 바탕으로 한 의사결정

**직관형 직원의 특징:**
- 창새로운 아이디어와 가능성을 탐구
- 전체적인 비전과 패턴을 중시
- 혁신적이고 창의적인 접근을 선호

## 사고형(T) vs 감정형(F) 의사결정

**사고형과의 논의 시:**
- 논리적 근거와 객관적 데이터를 제시하세요
- 장단점을 명확히 분석하여 설명하세요
- 감정적 호소보다는 합리적 설득을 활용하세요

**감정형과의 논의 시:**
- 사람들에게 미치는 영향을 고려하여 설명하세요
- 팀의 화합과 개인의 가치를 존중하는 접근을 보여주세요
- 따뜻하고 개인적인 커뮤니케이션을 활용하세요
    `,
    tags: ["MBTI", "팀워크", "커뮤니케이션", "직장생활"]
  },
  {
    id: "attention-span-digital-age",
    title: "디지털 시대의 집중력: 스마트폰이 우리 뇌에 미치는 영향",
    excerpt: "현대인의 집중력 감소 원인과 디지털 기기 사용이 인지 능력에 미치는 영향을 과학적으로 분석합니다.",
    date: "2024-12-10",
    category: "인지 심리학",
    readTime: "10분",
    content: `
스마트폰과 디지털 기기의 보편화로 현대인의 집중력이 급격히 감소하고 있다는 연구 결과가 계속해서 발표되고 있습니다.

## 디지털 기기가 집중력에 미치는 영향

**주의력 분산 효과:**
Microsoft의 연구에 따르면, 인간의 평균 집중력 지속시간이 2000년 12초에서 2015년 8초로 감소했습니다. 이는 금붕어의 집중력(9초)보다도 짧은 수준입니다.

**멀티태스킹의 착각:**
뇌과학 연구에 따르면, 인간의 뇌는 실제로 멀티태스킹을 할 수 없습니다. 우리가 멀티태스킹이라고 생각하는 것은 사실 빠른 작업 전환(task switching)입니다.

## 스마트폰 중독과 뇌의 변화

**도파민 중독 사이클:**
스마트폰 알림은 도파민 분비를 촉진합니다. 이는 중독성 물질과 유사한 신경학적 반응을 일으켜 지속적인 자극을 갈구하게 만듭니다.

**전전두엽 기능 저하:**
장시간 디지털 기기 사용은 전전두엽의 기능을 저하시킵니다. 전전두엽은 집중력, 판단력, 충동 조절을 담당하는 뇌 영역입니다.

## 집중력 회복을 위한 전략

**디지털 디톡스:**
- 하루 중 특정 시간을 '디지털 프리' 시간으로 설정
- 침실에서 스마트폰 사용 금지
- 알림 기능을 최소화하여 방해 요소 제거

**마음챙김 명상:**
정기적인 명상은 전전두엽을 강화하고 집중력을 향상시킵니다. 하루 10분의 명상만으로도 현저한 개선 효과를 볼 수 있습니다.

**포모도로 기법:**
25분 집중 + 5분 휴식의 사이클을 반복하여 집중력을 체계적으로 훈련할 수 있습니다.
    `,
    tags: ["집중력", "디지털디톡스", "뇌과학", "스마트폰중독"]
  },
  {
    id: "psychology-color-emotions",
    title: "색채 심리학: 색깔이 감정과 행동에 미치는 과학적 영향",
    excerpt: "색깔이 인간의 심리와 행동에 미치는 영향을 과학적 연구를 바탕으로 심층 분석합니다.",
    date: "2024-12-05",
    category: "환경 심리학",
    readTime: "7분",
    content: `
색깔은 단순한 시각적 자극이 아닙니다. 신경과학과 심리학 연구에 따르면, 색깔은 우리의 감정, 인지 능력, 그리고 행동에 직접적인 영향을 미칩니다.

## 색깔과 뇌의 반응 메커니즘

**시각 피질과 감정 중추의 연결:**
색깔 정보는 시각 피질에서 처리된 후 편도체와 해마로 전달되어 감정적 반응을 유발합니다. 이는 진화적으로 생존에 필요한 반응이었습니다.

## 주요 색깔별 심리적 효과

**빨간색 (Red):**
- 교감신경계를 자극하여 심박수와 혈압을 상승시킵니다
- 주의력을 집중시키고 긴급성을 느끼게 합니다
- 스포츠에서 빨간 유니폼을 입은 팀이 승률이 높다는 연구 결과가 있습니다

**파란색 (Blue):**
- 부교감신경계를 활성화하여 진정 효과를 가져옵니다
- 창의적 사고를 촉진하고 신뢰감을 증진시킵니다
- 많은 기업이 파란색을 로고에 사용하는 이유입니다

**초록색 (Green):**
- 눈의 피로를 감소시키고 정신적 안정감을 제공합니다
- 자연과의 연관성으로 인해 회복과 치유의 느낌을 줍니다
- 병원에서 수술복으로 초록색을 사용하는 과학적 근거입니다

**노란색 (Yellow):**
- 세로토닌 분비를 촉진하여 기분을 좋게 만듭니다
- 주의력을 끌고 기억력을 향상시킵니다
- 하지만 과도한 노란색은 불안감을 유발할 수 있습니다

## 일상생활에서의 색채 심리학 활용

**업무 환경:**
- 집중이 필요한 공간: 파란색 계열
- 창의적 작업 공간: 초록색과 노란색 조합
- 회의실: 따뜻한 베이지나 연한 회색

**학습 환경:**
- 기억력 향상: 연한 파란색 배경
- 집중력 증진: 자연스러운 초록색 요소
- 동기 부여: 적절한 빨간색 포인트

## 개인차와 문화적 차이

색깔에 대한 반응은 개인의 경험과 문화적 배경에 따라 달라집니다. 서양에서 흰색은 순수함을 상징하지만, 일부 동양 문화에서는 애도를 의미합니다.
    `,
    tags: ["색채심리학", "환경심리", "감정조절", "뇌과학"]
  }
];

export default function Blog() {
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
              심리학 인사이트 블로그
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              최신 심리학 연구와 일상생활에서 활용할 수 있는 심리학적 통찰을 제공합니다
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["전체", "직장 심리학", "인지 심리학", "환경 심리학", "발달 심리학"].map((category) => (
              <button
                key={category}
                className="px-6 py-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow text-gray-700 hover:text-purple-600"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-xs">
                      {post.readTime} 읽기
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-xs">
                      {new Date(post.date).toLocaleDateString('ko-KR')}
                    </span>
                    <button className="text-purple-600 hover:text-purple-800 text-sm font-semibold">
                      자세히 읽기 →
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">심리학 뉴스레터 구독</h2>
            <p className="mb-6 opacity-90">
              최신 심리학 연구와 실생활 활용 팁을 주간으로 받아보세요
            </p>
            <div className="max-w-md mx-auto flex gap-3">
              <input
                type="email"
                placeholder="이메일 주소를 입력하세요"
                className="flex-1 px-4 py-2 rounded-lg text-gray-800"
              />
              <button className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                구독하기
              </button>
            </div>
          </div>

          {/* Related Tests */}
          <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              관련 심리테스트 체험해보기
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div
                className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setLocation('/test/mbti')}
              >
                <div className="text-4xl mb-3">🧠</div>
                <h3 className="font-bold text-gray-800 mb-2">MBTI 성격유형</h3>
                <p className="text-gray-600 text-sm">16가지 성격유형 분석</p>
              </div>
              <div
                className="text-center p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setLocation('/test/reaction_speed')}
              >
                <div className="text-4xl mb-3">⚡</div>
                <h3 className="font-bold text-gray-800 mb-2">반응속도 테스트</h3>
                <p className="text-gray-600 text-sm">인지 능력과 반응속도 측정</p>
              </div>
              <div
                className="text-center p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setLocation('/test/color')}
              >
                <div className="text-4xl mb-3">🌈</div>
                <h3 className="font-bold text-gray-800 mb-2">색깔 성격 테스트</h3>
                <p className="text-gray-600 text-sm">색채 심리학 기반 성격 분석</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}