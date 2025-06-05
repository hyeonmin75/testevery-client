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
                      {cleanParagraph}
                    </h4>
                  );
                }
                
                if (paragraph.startsWith('- ')) {
                  return (
                    <li key={index} className="text-gray-600 leading-relaxed ml-4">
                      {cleanParagraph.replace('- ', '')}
                    </li>
                  );
                }

                // 반응속도 테스트 블로그에서 특정 문구 뒤에 테스트 버튼 추가
                if (post.id === "reaction-speed-psychology" && paragraph.includes("지금 바로 테스트해보고, 당신만의 기록을 세워보세요!")) {
                  return (
                    <div key={index}>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {paragraph}
                      </p>
                      <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-xl p-6 text-center my-8">
                        <div className="text-2xl mb-3">⚡</div>
                        <h3 className="text-xl font-bold text-red-800 mb-3">반응속도 테스트 바로가기</h3>
                        <p className="text-red-600 mb-4">정확한 밀리초 측정 • 5라운드 평균 • 등급 분석</p>
                        <button
                          onClick={() => setLocation('/test/reaction_speed')}
                          className="bg-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors shadow-lg"
                        >
                          🚀 지금 바로 테스트하기
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