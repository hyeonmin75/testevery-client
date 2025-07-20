import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { blogPosts } from "../data/blogPosts";

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
            {["전체", "직장 심리학", "인지 심리학", "환경 심리학", "사회 심리학"].map((category) => (
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
                    <button 
                      onClick={() => setLocation(`/blog/${post.id}`)}
                      className="text-purple-600 hover:text-purple-800 text-sm font-semibold"
                    >
                      자세히 읽기 →
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center mb-12">
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
          <div className="bg-white rounded-2xl shadow-lg p-8">
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
                onClick={() => setLocation('/test/burnout_risk_test')}
              >
                <div className="text-4xl mb-3">😰</div>
                <h3 className="font-bold text-gray-800 mb-2">번아웃 위험도</h3>
                <p className="text-gray-600 text-sm">스트레스 수준 분석</p>
              </div>
              
              <div
                className="text-center p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setLocation('/test/intuition_test')}
              >
                <div className="text-4xl mb-3">🎯</div>
                <h3 className="font-bold text-gray-800 mb-2">직감력 테스트</h3>
                <p className="text-gray-600 text-sm">좌우 선택 직관력</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}