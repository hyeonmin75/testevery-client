import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'

export default function About() {
  return (
    <Layout>
      <Head>
        <title>소개 | 심리학 교육센터</title>
        <meta
          name="description"
          content="심리학 교육센터는 과학적 근거를 바탕으로 한 심리학 교육과 신뢰성 높은 성격 분석을 제공하는 전문 플랫폼입니다. 우리의 미션과 비전을 소개합니다."
        />
        <meta
          name="keywords"
          content="심리학교육, 소개, 미션, 비전, 심리학플랫폼, 교육기관"
        />
        <meta property="og:title" content="소개 | 심리학 교육센터" />
        <meta property="og:description" content="과학적 근거를 바탕으로 한 심리학 교육과 신뢰성 높은 성격 분석을 제공하는 전문 플랫폼" />
        <link rel="canonical" href="https://testevery.com/about" />
      </Head>

      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">심리학 교육센터 소개</h1>
          <p className="text-xl text-gray-600">
            과학적 근거를 바탕으로 한 심리학 교육과 신뢰성 높은 성격 분석의 새로운 기준
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">우리의 미션</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              심리학 교육센터는 복잡하고 어려워 보이는 심리학 이론을 누구나 쉽게 이해하고 
              실생활에 적용할 수 있도록 돕는 것을 목표로 합니다. 과학적 근거를 바탕으로 한 
              정확한 정보와 검증된 심리 테스트를 통해 개인의 성장과 자기 이해를 지원합니다.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• 전문적이고 신뢰할 수 있는 심리학 교육 제공</li>
              <li>• 개인의 성격과 특성에 대한 과학적 분석</li>
              <li>• 일상생활에서 활용 가능한 실용적 지식 전달</li>
              <li>• 심리학에 대한 대중의 관심과 이해 증진</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">우리의 비전</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              모든 사람이 자신의 마음을 이해하고, 타인과의 관계를 개선하며, 
              더 나은 삶을 살아갈 수 있도록 돕는 심리학 교육의 선도 기관이 되고자 합니다.
            </p>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-900 mb-3">핵심 가치</h3>
              <ul className="space-y-2 text-purple-800">
                <li><strong>과학성:</strong> 검증된 연구와 이론 기반</li>
                <li><strong>접근성:</strong> 누구나 이해하기 쉬운 설명</li>
                <li><strong>실용성:</strong> 일상에 적용 가능한 지식</li>
                <li><strong>신뢰성:</strong> 정확하고 객관적인 정보</li>
              </ul>
            </div>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">우리가 제공하는 서비스</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">전문 교육 과정</h3>
              <p className="text-gray-600">
                MBTI 이론부터 인지심리학까지, 체계적이고 전문적인 심리학 교육 과정을 제공합니다.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">과학적 성격 분석</h3>
              <p className="text-gray-600">
                검증된 심리 측정 도구를 활용한 정확하고 신뢰성 높은 성격 분석을 제공합니다.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">실생활 적용 가이드</h3>
              <p className="text-gray-600">
                심리학 이론을 실제 생활에서 활용할 수 있는 구체적이고 실용적인 방법을 안내합니다.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">우리의 강점</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">학술적 전문성</h3>
              <p className="text-blue-800">
                대학원 수준의 심리학 이론을 일반인도 이해할 수 있게 체계적으로 구성했습니다. 
                모든 내용은 최신 학술 연구와 검증된 이론을 바탕으로 합니다.
              </p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-900 mb-3">실용적 접근</h3>
              <p className="text-green-800">
                이론적 지식을 실생활에 적용할 수 있는 구체적인 방법과 예시를 제공합니다. 
                개인의 성장과 관계 개선에 직접적으로 도움이 되는 내용에 중점을 둡니다.
              </p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-900 mb-3">개인 맞춤형 분석</h3>
              <p className="text-purple-800">
                획일적인 결과가 아닌, 개인의 특성과 상황을 고려한 맞춤형 분석과 조언을 제공합니다. 
                각자의 성장 방향에 맞는 구체적인 실천 방안을 제시합니다.
              </p>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-orange-900 mb-3">지속적인 업데이트</h3>
              <p className="text-orange-800">
                심리학은 끊임없이 발전하는 학문입니다. 최신 연구 동향과 새로운 발견을 
                지속적으로 반영하여 항상 최신의 정보를 제공합니다.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">함께 성장하는 심리학 커뮤니티</h2>
          <p className="text-gray-600 text-lg mb-6">
            심리학 교육센터는 단순한 정보 제공을 넘어, 함께 배우고 성장하는 커뮤니티를 만들어갑니다. 
            여러분의 피드백과 경험이 더 나은 콘텐츠를 만드는 원동력이 됩니다.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white px-6 py-3 rounded-lg shadow">
              <span className="text-2xl font-bold text-purple-600">50,000+</span>
              <p className="text-gray-600">월간 학습자</p>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow">
              <span className="text-2xl font-bold text-blue-600">500,000+</span>
              <p className="text-gray-600">테스트 참여자</p>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow">
              <span className="text-2xl font-bold text-green-600">95%</span>
              <p className="text-gray-600">만족도</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}