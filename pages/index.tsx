import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import { GetStaticProps } from 'next'

interface HomeProps {
  popularTests: Array<{
    id: string
    title: string
    description: string
    participants: number
    emoji: string
  }>
  recentPosts: Array<{
    id: string
    title: string
    excerpt: string
    date: string
  }>
}

export default function Home({ popularTests, recentPosts }: HomeProps) {
  return (
    <Layout>
      <Head>
        <title>심리학 교육센터 | 전문 심리학 이론과 과학적 성격 분석 플랫폼</title>
        <meta
          name="description"
          content="MBTI 심리유형론부터 인지심리학까지 체계적인 교육과 검증된 심리 테스트를 제공합니다. 심리학의 과학적 근거와 실용적 적용법을 학습하고 자신의 성격을 정확히 분석해보세요."
        />
        <meta
          name="keywords"
          content="심리학교육, 심리학이론, MBTI이론, 인지심리학, 성격심리학, 사회심리학, 발달심리학, 임상심리학, 심리학연구, 성격분석, 심리테스트, 융심리유형론, 빅파이브모델, 심리측정학"
        />
        <meta property="og:title" content="심리학 교육센터 | 전문 심리학 이론과 과학적 성격 분석" />
        <meta property="og:description" content="MBTI 심리유형론부터 인지심리학까지 체계적인 교육과 검증된 심리 테스트를 제공합니다." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://testevery.com" />
        <link rel="canonical" href="https://testevery.com" />
        
        {/* JSON-LD 구조화 데이터 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "심리학 교육센터",
              "description": "전문적인 심리학 교육과 과학적 성격 분석을 제공하는 종합 플랫폼",
              "url": "https://testevery.com",
              "sameAs": ["https://testevery.com"],
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://testevery.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </Head>

      {/* 히어로 섹션 */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg p-8 mb-8">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            과학적 근거를 바탕으로 한 심리학 교육센터
          </h1>
          <p className="text-xl mb-6 opacity-90">
            MBTI 심리유형론부터 인지심리학까지, 전문적인 심리학 이론을 체계적으로 학습하고 
            검증된 심리 테스트를 통해 자신을 깊이 이해해보세요.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/psychology"
              className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              심리학 교육 시작하기
            </Link>
            <Link
              href="/tests"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              성격 테스트 체험하기
            </Link>
          </div>
        </div>
      </section>

      {/* 인기 테스트 섹션 */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">인기 심리 테스트</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularTests.map((test) => (
            <div key={test.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{test.emoji}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{test.title}</h3>
              <p className="text-gray-600 mb-4">{test.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{test.participants.toLocaleString()}명 참여</span>
                <Link
                  href={`/tests/${test.id}`}
                  className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors"
                >
                  테스트 시작
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 광고 위치 (승인 후 활성화) */}
      <div className="adsense-inline">
        {/* <ins className="adsbygoogle" style={{display: 'block'}} data-ad-client="ca-pub-9110596823822061" data-ad-slot="1234567892" data-ad-format="auto" data-full-width-responsive="true"></ins> */}
      </div>

      {/* 심리학 교육 콘텐츠 섹션 */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">전문 심리학 교육 과정</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">MBTI 심리유형 이론</h3>
            <p className="text-gray-600 mb-4">
              칼 융의 심리유형론부터 현대 MBTI 이론까지, 성격 심리학의 과학적 근거와 
              실제 활용법을 체계적으로 학습합니다. 16가지 성격 유형의 특성과 
              인지 기능 이론을 깊이 있게 다룹니다.
            </p>
            <Link href="/psychology/mbti-theory" className="text-purple-600 hover:text-purple-800 font-semibold">
              자세히 보기 →
            </Link>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">인지 심리학</h3>
            <p className="text-gray-600 mb-4">
              기억, 주의, 학습, 언어 처리 등 인간의 인지 과정을 과학적으로 분석합니다. 
              정보 처리 관점과 실험적 방법론을 통해 마음의 작동 원리를 이해하고 
              일상생활에 적용하는 방법을 배웁니다.
            </p>
            <Link href="/psychology/cognitive-psychology" className="text-purple-600 hover:text-purple-800 font-semibold">
              자세히 보기 →
            </Link>
          </div>
        </div>
      </section>

      {/* 최신 블로그 포스트 */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">최신 심리학 연구 & 교육 자료</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                <Link href={`/blog/${post.id}`} className="hover:text-purple-600">
                  {post.title}
                </Link>
              </h3>
              <p className="text-gray-600 mb-3">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{post.date}</span>
                <Link href={`/blog/${post.id}`} className="text-purple-600 hover:text-purple-800 text-sm font-semibold">
                  읽기 →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 기능 소개 섹션 */}
      <section className="bg-gray-100 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          왜 심리학 교육센터를 선택해야 할까요?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎓</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">전문적인 교육 과정</h3>
            <p className="text-gray-600">
              대학원 수준의 심리학 이론을 일반인도 이해할 수 있게 체계적으로 구성했습니다.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔬</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">과학적 근거</h3>
            <p className="text-gray-600">
              모든 내용은 최신 심리학 연구와 검증된 이론을 바탕으로 구성되었습니다.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💡</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">실용적 적용</h3>
            <p className="text-gray-600">
              이론적 지식을 실생활에 적용할 수 있는 구체적인 방법과 예시를 제공합니다.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // 실제 데이터는 API나 데이터베이스에서 가져오지만, 여기서는 정적 데이터 사용
  const popularTests = [
    {
      id: 'mbti',
      title: 'MBTI 성격유형 검사',
      description: '16가지 성격 유형 중 나의 타입을 찾아보세요. 과학적 근거를 바탕으로 한 정확한 분석을 제공합니다.',
      participants: 487291,
      emoji: '🧠'
    },
    {
      id: 'big-five',
      title: '빅파이브 성격 검사',
      description: '5가지 주요 성격 차원에서 나의 특성을 분석합니다. 학술적으로 가장 신뢰받는 성격 이론입니다.',
      participants: 234567,
      emoji: '⭐'
    },
    {
      id: 'stress-level',
      title: '스트레스 수준 진단',
      description: '현재 나의 스트레스 상태를 점검하고 효과적인 관리 방법을 제시합니다.',
      participants: 156789,
      emoji: '💪'
    }
  ]

  const recentPosts = [
    {
      id: 'psychology-basics',
      title: '심리학 기초 이론 완전 정복',
      excerpt: '심리학의 주요 이론들과 연구 방법론에 대한 종합적인 가이드입니다. 초보자도 쉽게 이해할 수 있도록 구성했습니다.',
      date: '2024년 12월 20일'
    },
    {
      id: 'personality-development',
      title: '성격 발달과 환경의 영향',
      excerpt: '인간의 성격이 어떻게 형성되고 발달하는지, 유전과 환경이 미치는 영향을 과학적으로 분석합니다.',
      date: '2024년 12월 18일'
    },
    {
      id: 'cognitive-psychology-applications',
      title: '인지심리학의 실생활 적용법',
      excerpt: '기억력 향상, 집중력 개선, 학습 효율성 증대 등 인지심리학 원리를 활용한 실용적인 방법들을 소개합니다.',
      date: '2024년 12월 15일'
    }
  ]

  return {
    props: {
      popularTests,
      recentPosts
    },
    // 매일 재생성 (ISR - Incremental Static Regeneration)
    revalidate: 86400
  }
}