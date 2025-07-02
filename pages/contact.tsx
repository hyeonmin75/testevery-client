import React, { useState } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // 실제 구현에서는 여기에 API 호출 로직을 추가
      // 현재는 시뮬레이션
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Layout>
      <Head>
        <title>문의하기 | 심리학 교육센터</title>
        <meta
          name="description"
          content="심리학 교육센터에 궁금한 점이나 제안사항이 있으시면 언제든지 문의해 주세요. 빠르고 정확한 답변을 드리겠습니다."
        />
        <meta
          name="keywords"
          content="문의, 연락처, 고객지원, 심리학상담, 질문, 피드백"
        />
        <meta property="og:title" content="문의하기 | 심리학 교육센터" />
        <meta property="og:description" content="심리학 교육센터에 궁금한 점이나 제안사항이 있으시면 언제든지 문의해 주세요." />
        <link rel="canonical" href="https://testevery.com/contact" />
      </Head>

      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">문의하기</h1>
          <p className="text-xl text-gray-600">
            궁금한 점이나 제안사항이 있으시면 언제든지 연락해 주세요
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 연락처 정보 */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">연락처 정보</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">이메일</h3>
                  <p className="text-gray-600">contact@testevery.com</p>
                  <p className="text-sm text-gray-500">일반 문의 및 제안사항</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">전화</h3>
                  <p className="text-gray-600">02-1234-5678</p>
                  <p className="text-sm text-gray-500">평일 09:00 - 18:00</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">주소</h3>
                  <p className="text-gray-600">서울특별시 강남구 테헤란로 123</p>
                  <p className="text-sm text-gray-500">심리학 교육센터 빌딩 10층</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">운영시간</h3>
                  <p className="text-gray-600">평일: 09:00 - 18:00</p>
                  <p className="text-gray-600">주말: 10:00 - 16:00</p>
                  <p className="text-sm text-gray-500">공휴일 휴무</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-purple-900 mb-3">자주 묻는 질문</h3>
              <ul className="space-y-2 text-purple-800">
                <li>• 테스트 결과가 정확한가요?</li>
                <li>• 개인정보는 어떻게 보호되나요?</li>
                <li>• 상업적 이용이 가능한가요?</li>
                <li>• 오프라인 교육 과정이 있나요?</li>
              </ul>
              <p className="mt-3 text-sm text-purple-700">
                더 자세한 FAQ는 <a href="/faq" className="underline">여기</a>에서 확인하세요.
              </p>
            </div>
          </div>

          {/* 문의 폼 */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">온라인 문의</h2>
            
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
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  placeholder="이름을 입력해 주세요"
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
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  placeholder="이메일을 입력해 주세요"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  문의 유형 *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                >
                  <option value="">문의 유형을 선택해 주세요</option>
                  <option value="general">일반 문의</option>
                  <option value="test">테스트 관련</option>
                  <option value="education">교육 과정 문의</option>
                  <option value="technical">기술적 문제</option>
                  <option value="partnership">파트너십 제안</option>
                  <option value="feedback">피드백 및 제안</option>
                  <option value="other">기타</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  문의 내용 *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  placeholder="문의하실 내용을 자세히 적어주세요"
                />
              </div>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                  <p className="text-green-800">문의가 성공적으로 전송되었습니다. 빠른 시일 내에 답변드리겠습니다.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-red-800">문의 전송 중 오류가 발생했습니다. 다시 시도해 주세요.</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-purple-600 text-white py-3 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? '전송 중...' : '문의 보내기'}
              </button>
            </form>

            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>개인정보 수집 및 이용 안내:</strong> 
                입력하신 개인정보는 문의 응답 목적으로만 사용되며, 
                답변 완료 후 즉시 삭제됩니다. 자세한 내용은 
                <a href="/privacy" className="text-purple-600 underline"> 개인정보처리방침</a>을 참조하세요.
              </p>
            </div>
          </div>
        </div>

        {/* 추가 지원 정보 */}
        <section className="mt-16 bg-gray-100 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">다른 방법으로 도움받기</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">FAQ 페이지</h3>
              <p className="text-gray-600 text-sm">자주 묻는 질문과 답변을 확인하세요</p>
              <a href="/faq" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                FAQ 보기 →
              </a>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">사용자 가이드</h3>
              <p className="text-gray-600 text-sm">플랫폼 사용 방법을 단계별로 안내합니다</p>
              <a href="/guide" className="text-green-600 hover:text-green-800 text-sm font-medium">
                가이드 보기 →
              </a>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">블로그</h3>
              <p className="text-gray-600 text-sm">심리학 관련 최신 정보와 팁을 확인하세요</p>
              <a href="/blog" className="text-purple-600 hover:text-purple-800 text-sm font-medium">
                블로그 보기 →
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}