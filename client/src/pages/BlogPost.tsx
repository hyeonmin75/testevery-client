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

                // MBTI 블로그에서 특정 문구 뒤에 테스트 버튼 추가
                if (post.id === "mbti-workplace-dynamics" && paragraph.includes("자신이 어떤 유형인지 정확히 알고 싶다면, MBTI 성격유형 테스트를 통해 확인해보세요.")) {
                  return (
                    <div key={index}>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {paragraph}
                      </p>
                      <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-purple-200 rounded-xl p-6 text-center my-8">
                        <div className="text-3xl mb-3">🧠</div>
                        <h3 className="text-xl font-bold text-purple-800 mb-3">MBTI 성격유형 테스트</h3>
                        <p className="text-purple-600 mb-4">16가지 성격유형 분석 • 상세한 직업 추천 • 궁합 분석</p>
                        <button
                          onClick={() => setLocation('/test/mbti')}
                          className="bg-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors shadow-lg"
                        >
                          지금 바로 테스트하기
                        </button>
                      </div>
                    </div>
                  );
                }

                // 집중력 블로그에서 특정 문구 뒤에 테스트 버튼 추가
                if (post.id === "attention-span-digital-age" && paragraph.includes("본인의 현재 집중력 수준이 궁금하다면 집중력 관련 심리테스트를 통해 측정해보세요.")) {
                  return (
                    <div key={index}>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {paragraph}
                      </p>
                      <div className="bg-gradient-to-r from-green-50 to-teal-50 border-2 border-green-200 rounded-xl p-6 text-center my-8">
                        <div className="text-3xl mb-3">🎯</div>
                        <h3 className="text-xl font-bold text-green-800 mb-3">직감력 테스트</h3>
                        <p className="text-green-600 mb-4">좌우 선택 직관력 • 반응속도 측정 • 집중력 분석</p>
                        <button
                          onClick={() => setLocation('/test/intuition_test')}
                          className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors shadow-lg"
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