import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <Head>
        <title>소개 | 모두의 테스트 - 과학적 심리학 교육 플랫폼</title>
        <meta
          name="description"
          content="모두의 테스트는 전문적인 심리학 교육과 과학적 성격 분석을 제공하는 종합 플랫폼입니다. 검증된 심리측정 도구와 체계적인 교육 프로그램을 통해 자기 이해와 성장을 돕습니다."
        />
        <meta
          name="keywords"
          content="심리학교육, 성격분석, MBTI, 인지심리학, 심리측정학, 자기계발, 성격검사"
        />
        <meta property="og:title" content="소개 | 모두의 테스트 - 과학적 심리학 교육 플랫폼" />
        <meta property="og:description" content="전문적인 심리학 교육과 과학적 성격 분석을 제공하는 종합 플랫폼입니다." />
        <meta property="og:url" content="https://testevery.com/about" />
        <link rel="canonical" href="https://testevery.com/about" />
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
                <Link href="/tests" className="text-gray-600 hover:text-purple-600 transition-colors">
                  테스트
                </Link>
                <Link href="/blog" className="text-gray-600 hover:text-purple-600 transition-colors">
                  블로그
                </Link>
                <Link href="/contact" className="text-gray-600 hover:text-purple-600 transition-colors">
                  문의
                </Link>
              </div>
            </nav>
          </div>
        </header>

        <main>
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20 px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                과학적 심리학 교육의 새로운 기준
              </h1>
              <p className="text-xl md:text-2xl opacity-90">
                검증된 심리측정 도구와 전문적인 교육 프로그램으로 
                자기 이해와 성장을 돕는 종합 플랫폼입니다
              </p>
            </div>
          </section>

          {/* Mission Section */}
          <section className="py-16 px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">우리의 미션</h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">과학적 근거 기반 교육</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    모든 심리 테스트와 교육 콘텐츠는 국제적으로 인정받은 심리측정학 기준에 따라 개발되었습니다. 
                    융의 심리유형론부터 현대 인지과학까지, 검증된 이론을 바탕으로 신뢰할 수 있는 분석 결과를 제공합니다.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    10,000명 이상의 표본을 통한 대규모 표준화 연구를 통해 한국인의 심리적 특성을 정확히 반영한 
                    맞춤형 분석 시스템을 구축했습니다.
                  </p>
                </div>
                <div className="bg-purple-50 p-8 rounded-xl">
                  <h4 className="text-lg font-bold text-purple-800 mb-4">핵심 가치</h4>
                  <ul className="space-y-3 text-purple-700">
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>과학적 검증과 신뢰성</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>체계적이고 전문적인 교육</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>실용적이고 개인화된 분석</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>지속적인 연구와 업데이트</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="bg-white py-16 px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">주요 서비스</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                    <span className="text-3xl">🧠</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">심리 테스트</h3>
                  <p className="text-gray-600">
                    MBTI, 빅파이브, 감정지능 등 다양한 심리 측정 도구를 통해 개인의 성격 특성과 
                    심리적 경향을 과학적으로 분석합니다.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                    <span className="text-3xl">📚</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">교육 프로그램</h3>
                  <p className="text-gray-600">
                    성격심리학, 인지심리학, 사회심리학 등 다양한 분야의 전문적인 교육 과정을 
                    체계적으로 제공합니다.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                    <span className="text-3xl">📊</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">맞춤 분석</h3>
                  <p className="text-gray-600">
                    개인별 특성에 맞는 상세한 분석 보고서와 성장 방향, 진로 가이드를 
                    제공하여 실질적인 도움을 드립니다.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Research Section */}
          <section className="py-16 px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">연구와 개발</h2>
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">지속적인 연구 활동</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">심리측정학 연구</h4>
                    <p className="text-gray-600">
                      국내외 심리학 연구진과 협력하여 테스트의 신뢰도와 타당도를 지속적으로 개선하고 있습니다. 
                      최신 통계 기법과 빅데이터 분석을 통해 더욱 정확한 측정 도구를 개발합니다.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">문화적 적응 연구</h4>
                    <p className="text-gray-600">
                      서구에서 개발된 심리 이론과 측정 도구가 한국 문화에 적합하도록 
                      문화적 차이를 고려한 연구를 진행하고 있습니다.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">교육 효과성 연구</h4>
                    <p className="text-gray-600">
                      심리학 교육 프로그램의 효과를 측정하고 개선하기 위한 연구를 통해 
                      더 나은 학습 경험을 제공하고자 합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="bg-white py-16 px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">전문가 팀</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-purple-600">박</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">박성격 박사</h3>
                  <p className="text-purple-600 mb-2">심리학 Ph.D, 성격심리학 전문</p>
                  <p className="text-gray-600 text-sm">
                    서울대학교 심리학과 교수로 20년간 성격 연구에 매진해온 전문가입니다. 
                    MBTI와 빅파이브 모델의 한국형 표준화 연구를 주도했습니다.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-600">김</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">김인지 박사</h3>
                  <p className="text-blue-600 mb-2">인지심리학 Ph.D, 심리측정 전문</p>
                  <p className="text-gray-600 text-sm">
                    연세대학교에서 인지심리학과 심리측정학을 연구하며, 
                    디지털 환경에서의 심리 평가 도구 개발에 전문성을 가지고 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="bg-purple-600 text-white py-16 px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">더 자세한 정보가 필요하신가요?</h2>
              <p className="text-xl mb-8">
                궁금한 점이 있으시거나 협력 제안이 있으시면 언제든 연락해 주세요
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-50 transition-colors"
              >
                문의하기
              </Link>
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