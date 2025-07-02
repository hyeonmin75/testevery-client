import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { useState } from "react";

export default function Contact() {
  const [, setLocation] = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 폼 제출 로직은 나중에 구현
    alert('문의사항이 접수되었습니다. 빠른 시일 내에 답변드리겠습니다.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-korean">
      <div className="max-w-4xl mx-auto p-6 py-12">
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
              문의하기
            </h1>
            <p className="text-gray-600 text-lg">
              궁금한 점이나 제안사항이 있으시면 언제든 연락해주세요
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">연락처 정보</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <span className="text-purple-600 text-xl">📧</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">이메일</h3>
                      <p className="text-gray-600">contact@testevery.com</p>
                      <p className="text-gray-500 text-sm">일반 문의 및 제안사항</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <span className="text-blue-600 text-xl">🏢</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">운영진</h3>
                      <p className="text-gray-600">모두의 테스트 개발팀</p>
                      <p className="text-gray-500 text-sm">심리학 전문가 및 개발자 그룹</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <span className="text-green-600 text-xl">⏰</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">응답 시간</h3>
                      <p className="text-gray-600">평일 1-2일 이내</p>
                      <p className="text-gray-500 text-sm">주말 및 공휴일 제외</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">자주 묻는 질문</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">테스트 결과의 정확성과 신뢰성</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      모든 심리 검사는 표준화된 심리학적 이론과 통계적 검증을 거쳐 개발되었습니다. 
                      MBTI는 칼 융의 심리유형론을 기반으로 하며, 수십 년간의 연구를 통해 신뢰성과 타당성이 검증되었습니다. 
                      다만 개인의 복잡한 성격을 완전히 설명하기보다는 자기 이해의 도구로 활용하시기 바랍니다.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">개인정보 보호 정책</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      TestEvery는 사용자의 개인정보를 최우선으로 보호합니다. 
                      모든 테스트 응답과 결과는 브라우저 로컬 스토리지에만 저장되며, 서버로 전송되지 않습니다. 
                      이름, 이메일, 전화번호 등의 개인 식별 정보는 일체 수집하지 않으며, 
                      쿠키 사용도 최소한으로 제한하고 있습니다.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">심리 검사의 윤리적 사용</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      심리 검사 결과는 개인의 성장과 자기 이해를 위한 참고 자료로만 사용되어야 합니다. 
                      채용, 승진, 인사 평가 등의 중요한 결정에는 전문 심리학자의 종합적 평가가 필요합니다. 
                      또한 타인에 대한 편견이나 선입견을 형성하는 도구로 사용되어서는 안 됩니다.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">새로운 테스트 개발과 제안</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      새로운 심리 검사 아이디어나 기존 테스트의 개선사항은 언제든 환영합니다. 
                      제안해주신 아이디어는 심리학 전문가와 개발팀이 검토하여 과학적 타당성과 실용성을 평가한 후 
                      개발 여부를 결정합니다. 사용자 피드백은 더 나은 서비스 제공의 원동력입니다.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">테스트 결과 해석 및 활용</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      테스트 결과는 현재 상태의 스냅샷일 뿐, 고정불변의 특성이 아닙니다. 
                      개인의 성격과 심리상태는 경험, 학습, 환경 변화에 따라 발달할 수 있습니다. 
                      결과에 대한 궁금증이나 더 깊은 해석이 필요한 경우, 전문 상담사나 심리학자와 상담하실 것을 권장합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">문의 양식</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    이름 *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="이름을 입력해주세요"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    이메일 *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="이메일을 입력해주세요"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    제목 *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="문의 제목을 입력해주세요"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    메시지 *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                    placeholder="문의내용을 자세히 작성해주세요"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105"
                >
                  문의 전송
                </button>
              </form>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-blue-800 text-sm">
                  <strong>알림:</strong> 문의사항은 평일 기준 1-2일 이내에 답변드립니다. 
                  긴급한 사항의 경우 이메일로 직접 연락해주세요.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}