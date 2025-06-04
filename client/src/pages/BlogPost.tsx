import { motion } from "framer-motion";
import { useLocation, useRoute } from "wouter";
import { useState, useEffect } from "react";

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

## 실제 적용 사례

### 프로젝트 팀 구성 시

효과적인 팀은 다양한 성격유형이 균형있게 구성되어야 합니다:
- **ENTJ/ESTJ**: 프로젝트 리더십과 일정 관리
- **INFP/ISFP**: 창의적 아이디어와 팀 화합
- **INTJ/ISTJ**: 체계적 분석과 품질 관리
- **ENFP/ESFP**: 팀 분위기와 외부 커뮤니케이션

### 갈등 해결 전략

MBTI 유형별 갈등 해결 접근법:
1. **사고형(T)**: 논리적 분석과 객관적 해결책 제시
2. **감정형(F)**: 감정 인정과 관계 회복 우선
3. **외향형(E)**: 오픈된 대화와 즉시 해결
4. **내향형(I)**: 충분한 사고 시간과 단계적 접근

## 결론

MBTI를 활용한 팀워크는 개인의 강점을 최대화하고 약점을 보완할 수 있는 효과적인 방법입니다. 중요한 것은 유형의 차이를 이해하고 존중하며, 각자의 특성을 살린 역할 분담과 커뮤니케이션 방식을 적용하는 것입니다.
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

## 실생활 적용 방법

### 작업 환경 최적화
- 스마트폰을 시야에서 제거
- 단일 작업에 집중할 수 있는 환경 조성
- 방해 요소 최소화

### 의식적인 사용 습관
- 스마트폰 사용 시간 추적 앱 활용
- 목적이 명확하지 않은 사용 줄이기
- 휴식 시간에도 의식적으로 스마트폰 대신 다른 활동 선택

## 연구 결과와 전망

최근 연구들은 디지털 기기 사용과 집중력 감소 사이의 명확한 상관관계를 보여주고 있습니다. 하지만 적절한 관리와 훈련을 통해 집중력을 회복할 수 있다는 희망적인 결과들도 나오고 있습니다.

중요한 것은 디지털 기술을 완전히 거부하는 것이 아니라, 의식적이고 균형 잡힌 사용을 통해 우리의 인지 능력을 보호하고 향상시키는 것입니다.
    `,
    tags: ["집중력", "디지털디톡스", "뇌과학", "스마트폰중독"]
  }
];

export default function BlogPost() {
  const [, setLocation] = useLocation();
  const [, params] = useRoute("/blog/:id");
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    if (params?.id) {
      const foundPost = blogPosts.find(p => p.id === params.id);
      setPost(foundPost || null);
    }
  }, [params?.id]);

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-korean flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">게시글을 찾을 수 없습니다</h1>
          <button
            onClick={() => setLocation('/blog')}
            className="text-purple-600 hover:text-purple-800 font-semibold"
          >
            블로그로 돌아가기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-korean">
      <div className="max-w-4xl mx-auto p-6 py-12">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="mb-8">
            <button
              onClick={() => setLocation('/blog')}
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 transition-colors mb-6"
            >
              ← 블로그로 돌아가기
            </button>
            
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold">
                  {post.category}
                </span>
                <span className="text-gray-500 text-sm">
                  {post.readTime} 읽기
                </span>
                <span className="text-gray-500 text-sm">
                  {new Date(post.date).toLocaleDateString('ko-KR')}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                {post.title}
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {post.excerpt}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="prose prose-lg max-w-none">
              {post.content.split('\n').map((paragraph, index) => {
                if (paragraph.trim() === '') return null;
                
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={index} className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                }
                
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={index} className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                }
                
                if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return (
                    <h4 key={index} className="text-lg font-semibold text-gray-800 mt-4 mb-2">
                      {paragraph.replace(/\*\*/g, '')}
                    </h4>
                  );
                }
                
                if (paragraph.startsWith('- ')) {
                  return (
                    <li key={index} className="text-gray-600 leading-relaxed ml-4">
                      {paragraph.replace('- ', '')}
                    </li>
                  );
                }
                
                return (
                  <p key={index} className="text-gray-600 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">관련 글</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts
                .filter(p => p.id !== post.id)
                .slice(0, 2)
                .map((relatedPost) => (
                  <div
                    key={relatedPost.id}
                    className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => setLocation(`/blog/${relatedPost.id}`)}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-semibold">
                        {relatedPost.category}
                      </span>
                      <span className="text-gray-500 text-xs">
                        {relatedPost.readTime}
                      </span>
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">심리테스트로 나를 더 알아보기</h2>
            <p className="mb-6 opacity-90">
              이론을 넘어 실제로 자신의 성격과 특성을 발견해보세요
            </p>
            <button
              onClick={() => setLocation('/')}
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              테스트 하러 가기
            </button>
          </div>
        </motion.article>
      </div>
    </div>
  );
}