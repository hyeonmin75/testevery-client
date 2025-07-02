import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';

interface HomeProps {
  posts: Array<{
    id: string;
    title: string;
    excerpt: string;
    date: string;
  }>;
  tests: Array<{
    id: string;
    title: string;
    description: string;
    emoji: string;
    participants: number;
  }>;
}

export default function Home({ posts, tests }: HomeProps) {
  return (
    <>
      <Head>
        <title>심리학 교육 센터 | MBTI 이론부터 인지심리학까지 전문 학습 플랫폼</title>
        <meta
          name="description"
          content="전문적인 심리학 교육과 과학적 성격 분석을 제공하는 종합 플랫폼입니다. MBTI 심리유형론, 인지심리학, 사회심리학 등 체계적인 학습 과정과 신뢰성 높은 심리 테스트를 통해 자신을 깊이 이해하고 성장할 수 있습니다."
        />
        <meta
          name="keywords"
          content="심리학교육, 심리학이론, MBTI이론, 인지심리학, 성격심리학, 사회심리학, 발달심리학, 임상심리학, 심리학연구, 성격분석, 심리테스트, 융심리유형론, 빅파이브모델, 심리측정학"
        />
        <meta property="og:title" content="심리학 교육 센터 | 전문 심리학 이론과 과학적 성격 분석" />
        <meta property="og:description" content="MBTI 심리유형론부터 인지심리학까지 체계적인 교육과 검증된 심리 테스트를 제공합니다." />
        <meta property="og:url" content="https://testevery.com" />
        <link rel="canonical" href="https://testevery.com" />
      </Head>

      <div className="min-h-screen bg-gradient-korean">
        {/* Header */}
        <header className="bg-white/10 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <nav className="flex justify-between items-center">
              <div className="text-2xl font-bold text-white">
                🧠 모두의 테스트
              </div>
              <div className="hidden md:flex space-x-6">
                <Link href="/about" className="text-white hover:text-purple-200 transition-colors">
                  소개
                </Link>
                <Link href="/tests" className="text-white hover:text-purple-200 transition-colors">
                  테스트
                </Link>
                <Link href="/blog" className="text-white hover:text-purple-200 transition-colors">
                  블로그
                </Link>
                <Link href="/contact" className="text-white hover:text-purple-200 transition-colors">
                  문의
                </Link>
              </div>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              과학적 심리학 교육의 새로운 기준
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto">
              전문적인 심리학 이론부터 실용적인 성격 분석까지, 
              검증된 과학적 방법론으로 자신을 깊이 이해하고 성장하세요
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/tests"
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-50 transition-colors inline-block"
              >
                심리 테스트 시작하기
              </Link>
              <Link
                href="/education"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors inline-block"
              >
                교육 과정 탐색하기
              </Link>
            </div>
          </div>
        </section>

        {/* 주요 특징 */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
              왜 우리 플랫폼을 선택해야 할까요?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <span className="text-3xl">🔬</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">과학적 검증</h3>
                <p className="text-gray-600">
                  국제적으로 인정받은 심리측정학 기준에 따라 개발된 신뢰성 높은 테스트와 
                  10,000명 이상의 표본을 통한 표준화 연구 결과를 제공합니다.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <span className="text-3xl">📚</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">체계적 교육</h3>
                <p className="text-gray-600">
                  융의 심리유형론부터 현대 인지과학까지, 심리학의 핵심 이론을 
                  단계별로 학습할 수 있는 종합적인 교육 프로그램을 제공합니다.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">실용적 적용</h3>
                <p className="text-gray-600">
                  개인 성장, 진로 선택, 인간관계 개선 등 실생활에 직접 적용할 수 있는 
                  구체적이고 실용적인 가이드를 제공합니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 인기 테스트 */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
              인기 심리 테스트
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {tests.map((test) => (
                <div key={test.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4 text-center">{test.emoji}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{test.title}</h3>
                  <p className="text-gray-600 mb-4 text-center">{test.description}</p>
                  <div className="text-center text-sm text-purple-600 mb-4">
                    {test.participants.toLocaleString()}명 참여
                  </div>
                  <Link
                    href={`/test/${test.id}`}
                    className="block w-full bg-purple-500 text-white text-center py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors"
                  >
                    테스트 시작하기
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 최신 게시물 */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
              심리학 연구 및 교육 자료
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article key={post.id} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">
                    <Link href={`/post/${post.id}`} className="hover:text-purple-600 transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="text-sm text-gray-500">{post.date}</div>
                </article>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/blog"
                className="inline-block bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors"
              >
                더 많은 글 보기
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h4 className="text-lg font-bold mb-4">모두의 테스트</h4>
                <p className="text-gray-300">
                  과학적 심리학 교육과 신뢰성 높은 성격 분석을 제공하는 전문 플랫폼입니다.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4">서비스</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><Link href="/tests" className="hover:text-white transition-colors">심리 테스트</Link></li>
                  <li><Link href="/education" className="hover:text-white transition-colors">교육 과정</Link></li>
                  <li><Link href="/blog" className="hover:text-white transition-colors">연구 자료</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4">정보</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><Link href="/about" className="hover:text-white transition-colors">소개</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">문의</Link></li>
                  <li><Link href="/privacy" className="hover:text-white transition-colors">개인정보처리방침</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4">연락처</h4>
                <div className="text-gray-300">
                  <p>이메일: info@testevery.com</p>
                  <p>전화: 02-1234-5678</p>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
              <p>&copy; 2024 모두의 테스트. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // 실제 데이터는 API나 CMS에서 가져와야 합니다
  const posts = [
    {
      id: '1',
      title: 'MBTI 심리유형론의 과학적 근거와 한계',
      excerpt: '칼 융의 심리유형론부터 현대 MBTI까지, 성격 심리학의 발전사와 과학적 타당성을 종합적으로 분석합니다.',
      date: '2024년 1월 15일'
    },
    {
      id: '2',
      title: '인지 심리학의 기본 원리와 실생활 적용',
      excerpt: '기억, 주의, 학습 등 인간의 인지 과정을 이해하고 일상에서 활용할 수 있는 실용적 방법을 제시합니다.',
      date: '2024년 1월 12일'
    },
    {
      id: '3',
      title: '성격 측정의 역사와 현대적 접근법',
      excerpt: '고대 그리스의 4체액설부터 빅파이브 모델까지, 성격 측정 방법의 진화를 탐구합니다.',
      date: '2024년 1월 10일'
    },
    {
      id: '4',
      title: '사회심리학의 핵심 이론과 사례 연구',
      excerpt: '집단 심리, 사회적 영향, 편견과 차별 등 사회심리학의 주요 주제들을 실제 사례를 통해 분석합니다.',
      date: '2024년 1월 8일'
    },
    {
      id: '5',
      title: '발달심리학: 생애 전반의 성장과 변화',
      excerpt: '태아기부터 노년기까지 인간의 심리적 발달 과정과 각 단계별 특성을 과학적으로 설명합니다.',
      date: '2024년 1월 5일'
    },
    {
      id: '6',
      title: '임상심리학과 정신건강의 이해',
      excerpt: '정신질환의 진단과 치료, 상담 기법 등 임상심리학의 기본 개념과 최신 동향을 소개합니다.',
      date: '2024년 1월 3일'
    }
  ];

  const tests = [
    {
      id: 'mbti',
      title: 'MBTI 성격유형 검사',
      description: '16가지 성격 유형으로 나누어 개인의 선호 경향을 파악하는 세계적으로 널리 사용되는 성격 검사입니다.',
      emoji: '🧠',
      participants: 152340
    },
    {
      id: 'big-five',
      title: '빅파이브 성격 검사',
      description: '개방성, 성실성, 외향성, 친화성, 신경증성의 5가지 차원으로 성격을 측정하는 과학적 검사입니다.',
      emoji: '🌟',
      participants: 98756
    },
    {
      id: 'emotional-intelligence',
      title: '감정지능 검사',
      description: '자신과 타인의 감정을 인식하고 관리하는 능력을 측정하여 인간관계 역량을 평가합니다.',
      emoji: '💝',
      participants: 67890
    }
  ];

  return {
    props: {
      posts,
      tests,
    },
    // 24시간마다 재생성
    revalidate: 86400,
  };
};