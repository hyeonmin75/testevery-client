import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // 실제 구현에서는 API 엔드포인트로 전송
      await new Promise(resolve => setTimeout(resolve, 1000)); // 시뮬레이션
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>문의 | 모두의 테스트 - 심리학 교육 및 상담</title>
        <meta
          name="description"
          content="모두의 테스트에 대한 궁금한 점이나 제안사항이 있으시면 언제든 문의해 주세요. 심리학 교육, 테스트 관련 문의를 환영합니다."
        />
        <meta
          name="keywords"
          content="문의, 상담, 심리학교육문의, 테스트문의, 고객지원, 피드백"
        />
        <meta property="og:title" content="문의 | 모두의 테스트" />
        <meta property="og:description" content="심리학 교육과 테스트에 대한 궁금한 점을 문의해 주세요." />
        <meta property="og:url" content="https://testevery.com/contact" />
        <link rel="canonical" href="https://testevery.com/contact" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <nav className="flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold text-purple-600">
                🧠 모두의 테스트
              </Link>
              <div className="hidden md:flex space-x-6">
                <Link href="/" className="text-gray-600 hover:text-purple-600 transition-colors">
                  홈
                </Link>
                <Link href="/about" className="text-gray-600 hover:text-purple-600 transition-colors">
                  소개
                </Link>
                <Link href="/tests" className="text-gray-600 hover:text-purple-600 transition-colors">
                  테스트
                </Link>
                <Link href="/blog" className="text-gray-600 hover:text-purple-600 transition-colors">
                  블로그
                </Link>
              </div>
            </nav>
          </div>
        </header>

        <main>
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16 px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">문의하기</h1>
              <p className="text-xl md:text-2xl opacity-90">
                궁금한 점이나 제안사항이 있으시면 언제든 연락해 주세요
              </p>
            </div>
          </section>

          {/* Contact Form */}
          <section className="py-16 px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">메시지 보내기</h2>
                  
                  {submitStatus === 'success' && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                      <p className="text-green-800">메시지가 성공적으로 전송되었습니다. 빠른 시일 내에 답변드리겠습니다.</p>
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                      <p className="text-red-800">메시지 전송 중 오류가 발생했습니다. 다시 시도해 주세요.</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        이름 *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="성함을 입력해 주세요"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        이메일 *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="이메일 주소를 입력해 주세요"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        제목 *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="문의 제목을 입력해 주세요"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        메시지 *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="문의하실 내용을 자세히 작성해 주세요"
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? '전송 중...' : '메시지 보내기'}
                    </button>
                  </form>
                </div>

                {/* Contact Information */}
                <div className="space-y-8">
                  <div className="bg-white rounded-xl shadow-lg p-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-6">연락처 정보</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="bg-purple-100 rounded-full p-3 mr-4">
                          <span className="text-purple-600">📧</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">이메일</h4>
                          <p className="text-gray-600">info@testevery.com</p>
                          <p className="text-sm text-gray-500">일반 문의 및 제안사항</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-blue-100 rounded-full p-3 mr-4">
                          <span className="text-blue-600">📞</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">전화</h4>
                          <p className="text-gray-600">02-1234-5678</p>
                          <p className="text-sm text-gray-500">평일 09:00 - 18:00</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-green-100 rounded-full p-3 mr-4">
                          <span className="text-green-600">🏢</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">주소</h4>
                          <p className="text-gray-600">서울시 강남구 테헤란로 123</p>
                          <p className="text-sm text-gray-500">모두의 테스트 본사</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-50 rounded-xl p-8">
                    <h3 className="text-xl font-bold text-purple-800 mb-4">자주 문의하시는 내용</h3>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-purple-700">테스트 결과가 정확한가요?</h4>
                        <p className="text-purple-600 text-sm">
                          모든 테스트는 국제적 표준에 따라 검증된 도구를 사용하며, 
                          지속적인 연구를 통해 정확도를 높이고 있습니다.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple-700">개인정보는 안전한가요?</h4>
                        <p className="text-purple-600 text-sm">
                          모든 개인정보는 암호화되어 저장되며, 
                          개인정보보호법에 따라 엄격히 관리됩니다.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple-700">교육 프로그램은 어떻게 참여하나요?</h4>
                        <p className="text-purple-600 text-sm">
                          웹사이트의 교육 섹션에서 온라인 강의를 수강하실 수 있으며, 
                          오프라인 워크샵도 정기적으로 개최됩니다.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Additional Support */}
          <section className="bg-white py-16 px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">추가 지원</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-6">
                  <div className="bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">📚</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">도움말 센터</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    자주 묻는 질문과 사용법을 확인하세요
                  </p>
                  <Link href="/help" className="text-purple-600 hover:text-purple-700 font-semibold">
                    도움말 보기 →
                  </Link>
                </div>
                
                <div className="p-6">
                  <div className="bg-green-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">💬</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">실시간 채팅</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    즉시 답변이 필요한 경우 실시간 상담을 이용하세요
                  </p>
                  <button className="text-purple-600 hover:text-purple-700 font-semibold">
                    채팅 시작 →
                  </button>
                </div>
                
                <div className="p-6">
                  <div className="bg-purple-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">📖</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">사용자 가이드</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    상세한 사용법과 팁을 제공하는 가이드입니다
                  </p>
                  <Link href="/guide" className="text-purple-600 hover:text-purple-700 font-semibold">
                    가이드 보기 →
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h4 className="text-lg font-bold mb-4">모두의 테스트</h4>
                <p className="text-gray-300 text-sm">
                  과학적 심리학 교육과 신뢰성 높은 성격 분석을 제공하는 전문 플랫폼입니다.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4">서비스</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li><Link href="/tests" className="hover:text-white transition-colors">심리 테스트</Link></li>
                  <li><Link href="/education" className="hover:text-white transition-colors">교육 과정</Link></li>
                  <li><Link href="/blog" className="hover:text-white transition-colors">연구 자료</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4">정보</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li><Link href="/about" className="hover:text-white transition-colors">소개</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">문의</Link></li>
                  <li><Link href="/privacy" className="hover:text-white transition-colors">개인정보처리방침</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4">연락처</h4>
                <div className="text-gray-300 text-sm">
                  <p>이메일: info@testevery.com</p>
                  <p>전화: 02-1234-5678</p>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300 text-sm">
              <p>&copy; 2024 모두의 테스트. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}