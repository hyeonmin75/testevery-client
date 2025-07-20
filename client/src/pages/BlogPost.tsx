import { motion } from "framer-motion";
import { useLocation, useRoute } from "wouter";
import { useState, useEffect } from "react";
import { blogPosts, BlogPost } from "../data/blogPosts";

export default function BlogPostPage() {
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

                // HTML 버튼이 포함된 단락 처리
                if (paragraph.includes('<button onclick="window.location.href=')) {
                  const buttonMatch = paragraph.match(/<button[^>]*onclick="window\.location\.href='([^']*)'[^>]*>(.*?)<\/button>/);
                  if (buttonMatch) {
                    const [, url, buttonText] = buttonMatch;
                    const textBeforeButton = paragraph.substring(0, paragraph.indexOf('<button'));
                    
                    return (
                      <div key={index}>
                        {textBeforeButton && (
                          <p className="text-gray-600 leading-relaxed mb-6">
                            {textBeforeButton}
                          </p>
                        )}
                        <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-purple-200 rounded-xl p-6 text-center my-8">
                          <div className="text-3xl mb-3">🧠</div>
                          <h3 className="text-xl font-bold text-purple-800 mb-3">관련 테스트 체험하기</h3>
                          <p className="text-purple-600 mb-4">과학적으로 검증된 심리 검사를 통해 자신을 더 깊이 이해해보세요</p>
                          <button
                            onClick={() => setLocation(url)}
                            className="bg-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors shadow-lg"
                          >
                            {buttonText.replace(/[🔥⚡🎯🐾🏢📊]/g, '').trim()}
                          </button>
                        </div>
                      </div>
                    );
                  }
                }

                // MBTI 블로그에서 특정 문구 뒤에 테스트 버튼 추가
                if (post.id === "career-mbti-workplace" && paragraph.includes("본인의 성격유형과 직장 내 역할이 궁금하다면 MBTI 테스트를 통해 확인해보세요.")) {
                  return (
                    <div key={index}>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {paragraph}
                      </p>
                      <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-purple-200 rounded-xl p-6 text-center my-8">
                        <div className="text-3xl mb-3">🧠</div>
                        <h3 className="text-xl font-bold text-purple-800 mb-3">MBTI 직업 성격 테스트</h3>
                        <p className="text-purple-600 mb-4">16가지 성격유형 분석 • 직업 적성 진단 • 팀워크 스타일 분석</p>
                        <button
                          onClick={() => setLocation('/test/career')}
                          className="bg-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors shadow-lg"
                        >
                          지금 바로 테스트하기
                        </button>
                      </div>
                    </div>
                  );
                }

                // 동물 심리학 블로그 테스트 버튼
                if (post.id === "animal-psychology-metaphor" && paragraph.includes("본인과 닮은 동물이 궁금하다면 동물 성격 테스트를 통해 확인해보세요.")) {
                  return (
                    <div key={index}>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {paragraph}
                      </p>
                      <div className="bg-gradient-to-r from-orange-50 to-pink-50 border-2 border-orange-200 rounded-xl p-6 text-center my-8">
                        <div className="text-3xl mb-3">🐾</div>
                        <h3 className="text-xl font-bold text-orange-800 mb-3">동물 성격 테스트</h3>
                        <p className="text-orange-600 mb-4">나와 닮은 동물 찾기 • 성격 특성 분석 • 심리적 상징 해석</p>
                        <button
                          onClick={() => setLocation('/test/animal')}
                          className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors shadow-lg"
                        >
                          지금 바로 테스트하기
                        </button>
                      </div>
                    </div>
                  );
                }

                // 번아웃 블로그 테스트 버튼
                if (post.id === "burnout-prevention-psychology" && paragraph.includes("본인의 번아웃 위험도가 궁금하다면 번아웃 위험도 테스트를 통해 확인해보세요.")) {
                  return (
                    <div key={index}>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {paragraph}
                      </p>
                      <div className="bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 rounded-xl p-6 text-center my-8">
                        <div className="text-3xl mb-3">🔥</div>
                        <h3 className="text-xl font-bold text-red-800 mb-3">번아웃 위험도 테스트</h3>
                        <p className="text-red-600 mb-4">스트레스 수준 진단 • 번아웃 위험 평가 • 예방 전략 제시</p>
                        <button
                          onClick={() => setLocation('/test/burnout-risk')}
                          className="bg-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors shadow-lg"
                        >
                          지금 바로 테스트하기
                        </button>
                      </div>
                    </div>
                  );
                }

                // 집중력 블로그에서 특정 문구 뒤에 테스트 버튼 추가
                if (post.id === "concentration-focus-psychology" && paragraph.includes("본인의 집중력과 주의력 수준이 궁금하다면 집중력 테스트를 통해 확인해보세요.")) {
                  return (
                    <div key={index}>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {paragraph}
                      </p>
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-6 text-center my-8">
                        <div className="text-3xl mb-3">🎯</div>
                        <h3 className="text-xl font-bold text-blue-800 mb-3">집중력 측정 테스트</h3>
                        <p className="text-blue-600 mb-4">주의력 분석 • 집중 지속 능력 • 반응속도 측정</p>
                        <button
                          onClick={() => setLocation('/test?category=concentration')}
                          className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors shadow-lg"
                        >
                          지금 바로 테스트하기
                        </button>
                      </div>
                    </div>
                  );
                }

                // 반응속도 블로그 테스트 버튼
                if (post.id === "reaction-speed-cognitive-psychology" && paragraph.includes("본인의 반응속도와 집중력이 궁금하다면 관련 테스트를 통해 확인해보세요.")) {
                  return (
                    <div key={index}>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {paragraph}
                      </p>
                      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-xl p-6 text-center my-8">
                        <div className="text-3xl mb-3">⚡</div>
                        <h3 className="text-xl font-bold text-yellow-800 mb-3">반응속도 테스트</h3>
                        <p className="text-yellow-600 mb-4">순간 반응력 • 인지 처리 속도 • 집중력 측정</p>
                        <button
                          onClick={() => setLocation('/test?category=cognitive')}
                          className="bg-yellow-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors shadow-lg"
                        >
                          지금 바로 테스트하기
                        </button>
                      </div>
                    </div>
                  );
                }

                // 직감 블로그 테스트 버튼
                if (post.id === "intuition-psychology-decision" && paragraph.includes("본인의 직감 능력과 의사결정 스타일이 궁금하다면 직감 테스트를 통해 확인해보세요.")) {
                  return (
                    <div key={index}>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {paragraph}
                      </p>
                      <div className="bg-gradient-to-r from-pink-50 to-purple-50 border-2 border-pink-200 rounded-xl p-6 text-center my-8">
                        <div className="text-3xl mb-3">🎯</div>
                        <h3 className="text-xl font-bold text-pink-800 mb-3">직감 능력 테스트</h3>
                        <p className="text-pink-600 mb-4">직관적 판단력 • 좌우 선택 테스트 • 무의식적 인식</p>
                        <button
                          onClick={() => setLocation('/test?category=intuition')}
                          className="bg-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-600 transition-colors shadow-lg"
                        >
                          지금 바로 테스트하기
                        </button>
                      </div>
                    </div>
                  );
                }

                // 번아웃 관련 문구 뒤에 테스트 버튼 추가
                if (post.id === "attention-span-digital-age" && paragraph.includes("집중력과 관련된 스트레스나 번아웃이 걱정된다면, 번아웃 위험도 테스트를 통해 현재 상태를 점검해보세요.")) {
                  return (
                    <div key={index}>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {paragraph}
                      </p>
                      <div className="bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-200 rounded-xl p-6 text-center my-8">
                        <div className="text-3xl mb-3">😰</div>
                        <h3 className="text-xl font-bold text-orange-800 mb-3">번아웃 위험도 테스트</h3>
                        <p className="text-orange-600 mb-4">스트레스 수준 분석 • 번아웃 단계 진단 • 개선 방법 제시</p>
                        <button
                          onClick={() => setLocation('/test/burnout_risk_test')}
                          className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors shadow-lg"
                        >
                          지금 바로 테스트하기
                        </button>
                      </div>
                    </div>
                  );
                }

                // 색깔 테스트 버튼 추가
                if (post.id === "psychology-color-emotions" && paragraph.includes("색깔에 대한 개인의 선호도나 반응을 알고 싶다면, 색깔 성격 테스트를 통해 확인해보세요.")) {
                  return (
                    <div key={index}>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {paragraph}
                      </p>
                      <div className="bg-gradient-to-r from-pink-50 to-purple-50 border-2 border-pink-200 rounded-xl p-6 text-center my-8">
                        <div className="text-3xl mb-3">🌈</div>
                        <h3 className="text-xl font-bold text-pink-800 mb-3">색깔 성격 테스트</h3>
                        <p className="text-pink-600 mb-4">색깔 선호도 분석 • 성격 특성 진단 • 심리상태 파악</p>
                        <button
                          onClick={() => setLocation('/test/color')}
                          className="bg-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-600 transition-colors shadow-lg"
                        >
                          지금 바로 테스트하기
                        </button>
                      </div>
                    </div>
                  );
                }

                // 감정지능 블로그에서 테스트 버튼 추가
                if (post.id === "emotional-intelligence-development" && paragraph.includes("본인의 감정지능 수준이나 대인관계 스타일이 궁금하다면 MBTI 성격유형 테스트나 동물 성격 테스트를 통해 알아보세요.")) {
                  return (
                    <div key={index}>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {paragraph}
                      </p>
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-6 text-center my-8">
                        <div className="text-3xl mb-3">💙</div>
                        <h3 className="text-xl font-bold text-blue-800 mb-3">감정지능 관련 테스트</h3>
                        <p className="text-blue-600 mb-4">성격 유형 분석 • 대인관계 스타일 • 동물 성격 진단</p>
                        <div className="flex gap-3 justify-center">
                          <button
                            onClick={() => setLocation('/test/mbti')}
                            className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors shadow-lg"
                          >
                            MBTI 테스트
                          </button>
                          <button
                            onClick={() => setLocation('/test/animal')}
                            className="bg-indigo-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-600 transition-colors shadow-lg"
                          >
                            동물 성격 테스트
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                }

                // 학습 블로그에서 테스트 버튼 추가
                if (post.id === "memory-learning-psychology" && paragraph.includes("본인의 학습 방식이나 성격 유형이 궁금하다면 MBTI 성격유형 테스트나 색깔 테스트를 통해 확인해보세요.")) {
                  return (
                    <div key={index}>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {paragraph}
                      </p>
                      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-xl p-6 text-center my-8">
                        <div className="text-3xl mb-3">📚</div>
                        <h3 className="text-xl font-bold text-yellow-800 mb-3">학습 성향 관련 테스트</h3>
                        <p className="text-yellow-600 mb-4">성격 유형 분석 • 학습 스타일 진단 • 개인 특성 파악</p>
                        <div className="flex gap-3 justify-center">
                          <button
                            onClick={() => setLocation('/test/mbti')}
                            className="bg-yellow-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition-colors shadow-lg"
                          >
                            MBTI 테스트
                          </button>
                          <button
                            onClick={() => setLocation('/test/color')}
                            className="bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors shadow-lg"
                          >
                            색깔 테스트
                          </button>
                        </div>
                      </div>
                    </div>
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
          {post.id === "reaction-speed-psychology" ? (
            <div className="mt-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-8 text-white text-center">
              <h2 className="text-2xl font-bold mb-4">🚀 지금 바로 반응속도 테스트해보세요!</h2>
              <p className="mb-6 opacity-90">
                당신의 반응속도는 몇 ms인가요? 정확한 측정과 상세 분석을 제공합니다
              </p>
              <button
                onClick={() => setLocation('/test/reaction_speed')}
                className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors mr-4"
              >
                ⚡ 반응속도 테스트 시작
              </button>
              <button
                onClick={() => setLocation('/')}
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
              >
                다른 테스트 보기
              </button>
            </div>
          ) : (
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
          )}
        </motion.article>
      </div>
    </div>
  );
}