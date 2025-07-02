import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  tags: string[];
  readTime: string;
}

interface BlogProps {
  posts: BlogPost[];
  categories: string[];
}

export default function Blog({ posts, categories }: BlogProps) {
  return (
    <>
      <Head>
        <title>심리학 연구 블로그 | 모두의 테스트 - 최신 심리학 이론과 연구</title>
        <meta
          name="description"
          content="심리학의 최신 연구 동향, 이론 해설, 실생활 적용법을 다루는 전문 블로그입니다. MBTI, 인지심리학, 사회심리학 등 다양한 분야의 깊이 있는 콘텐츠를 제공합니다."
        />
        <meta
          name="keywords"
          content="심리학블로그, 심리학연구, MBTI이론, 인지심리학, 성격심리학, 사회심리학, 심리학교육, 최신연구동향"
        />
        <meta property="og:title" content="심리학 연구 블로그 | 모두의 테스트" />
        <meta property="og:description" content="심리학의 최신 연구 동향과 이론을 다루는 전문 블로그입니다." />
        <meta property="og:url" content="https://testevery.com/blog" />
        <link rel="canonical" href="https://testevery.com/blog" />
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
                <Link href="/contact" className="text-gray-600 hover:text-purple-600 transition-colors">
                  문의
                </Link>
              </div>
            </nav>
          </div>
        </header>

        <main>
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16 px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">심리학 연구 블로그</h1>
              <p className="text-xl md:text-2xl opacity-90">
                최신 심리학 이론과 연구 동향을 전문가의 시각으로 분석합니다
              </p>
            </div>
          </section>

          {/* Categories */}
          <section className="py-8 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-wrap gap-3 justify-center">
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                  전체
                </span>
                {categories.map((category) => (
                  <span
                    key={category}
                    className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-100 hover:text-purple-800 transition-colors cursor-pointer"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Featured Post */}
          <section className="py-12 px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-800 mb-8">추천 게시물</h2>
              {posts.length > 0 && (
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3 bg-purple-100 p-8 flex items-center justify-center">
                      <div className="text-6xl">🧠</div>
                    </div>
                    <div className="md:w-2/3 p-8">
                      <div className="flex items-center mb-3">
                        <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mr-3">
                          {posts[0].category}
                        </span>
                        <span className="text-gray-500 text-sm">{posts[0].readTime}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        <Link href={`/post/${posts[0].id}`} className="hover:text-purple-600 transition-colors">
                          {posts[0].title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {posts[0].excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {posts[0].tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="text-gray-500 text-sm">#{tag}</span>
                          ))}
                        </div>
                        <span className="text-gray-500 text-sm">{posts[0].date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Blog Posts Grid */}
          <section className="py-12 px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-800 mb-8">최신 게시물</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.slice(1).map((post) => (
                  <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-6 text-center">
                      <div className="text-3xl mb-2">📚</div>
                      <span className="bg-white px-3 py-1 rounded-full text-sm font-medium text-purple-600">
                        {post.category}
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-800 mb-3">
                        <Link href={`/post/${post.id}`} className="hover:text-purple-600 transition-colors">
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{post.readTime}</span>
                        <span>{post.date}</span>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="text-gray-400 text-xs">#{tag}</span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Newsletter Signup */}
          <section className="bg-purple-600 text-white py-16 px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">최신 연구 소식을 받아보세요</h2>
              <p className="text-xl mb-8 opacity-90">
                심리학의 최신 연구 동향과 흥미로운 발견을 이메일로 전해드립니다
              </p>
              <div className="max-w-md mx-auto">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="이메일 주소를 입력하세요"
                    className="flex-1 px-4 py-3 rounded-l-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  />
                  <button className="bg-purple-800 px-6 py-3 rounded-r-lg font-semibold hover:bg-purple-900 transition-colors">
                    구독하기
                  </button>
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

export const getStaticProps: GetStaticProps = async () => {
  // 실제 환경에서는 CMS나 데이터베이스에서 가져와야 합니다
  const posts: BlogPost[] = [
    {
      id: '1',
      title: 'MBTI 심리유형론의 과학적 근거와 현대적 해석',
      excerpt: '칼 융의 심리유형론부터 현대 MBTI까지, 성격 심리학의 발전사와 과학적 타당성을 종합적으로 분석합니다. 16가지 성격 유형의 이론적 배경과 실증 연구 결과를 통해 MBTI의 신뢰성과 활용 방안을 탐구합니다.',
      content: '...',
      date: '2024년 1월 15일',
      category: '성격심리학',
      tags: ['MBTI', '성격유형', '융', '심리측정'],
      readTime: '8분 읽기'
    },
    {
      id: '2',
      title: '인지 심리학의 핵심 원리와 실생활 적용 방법',
      excerpt: '기억, 주의, 학습 등 인간의 인지 과정을 이해하고 일상에서 활용할 수 있는 실용적 방법을 제시합니다. 최신 뇌과학 연구 결과를 바탕으로 한 효과적인 학습법과 기억 향상 기법을 소개합니다.',
      content: '...',
      date: '2024년 1월 12일',
      category: '인지심리학',
      tags: ['기억', '주의', '학습', '뇌과학'],
      readTime: '6분 읽기'
    },
    {
      id: '3',
      title: '빅파이브 성격 모델의 통계적 검증과 문화적 적용',
      excerpt: '개방성, 성실성, 외향성, 친화성, 신경증성의 5가지 차원으로 성격을 측정하는 빅파이브 모델의 과학적 근거와 한국 문화에서의 적용 가능성을 분석합니다.',
      content: '...',
      date: '2024년 1월 10일',
      category: '성격심리학',
      tags: ['빅파이브', '성격측정', '통계', '문화심리학'],
      readTime: '7분 읽기'
    },
    {
      id: '4',
      title: '사회심리학의 편견과 고정관념 연구 동향',
      excerpt: '인간의 사회적 인지 과정에서 나타나는 편견과 고정관념의 형성 메커니즘을 분석하고, 이를 극복하기 위한 심리학적 접근법을 제시합니다.',
      content: '...',
      date: '2024년 1월 8일',
      category: '사회심리학',
      tags: ['편견', '고정관념', '사회인지', '차별'],
      readTime: '9분 읽기'
    },
    {
      id: '5',
      title: '발달심리학의 생애 전반 접근법과 현대적 이해',
      excerpt: '태아기부터 노년기까지 인간의 심리적 발달 과정을 살펴보고, 각 발달 단계의 특성과 현대 사회에서의 새로운 도전들을 분석합니다.',
      content: '...',
      date: '2024년 1월 5일',
      category: '발달심리학',
      tags: ['발달단계', '생애발달', '아동심리', '노년심리'],
      readTime: '10분 읽기'
    },
    {
      id: '6',
      title: '감정 조절의 신경과학적 메커니즘과 실천 방법',
      excerpt: '감정 조절 능력의 신경과학적 기반을 이해하고, 일상에서 실천할 수 있는 감정 관리 기법들을 과학적 근거와 함께 제시합니다.',
      content: '...',
      date: '2024년 1월 3일',
      category: '신경심리학',
      tags: ['감정조절', '신경과학', '정서', '자기조절'],
      readTime: '8분 읽기'
    },
    {
      id: '7',
      title: '스트레스와 대처 방식의 개인차에 대한 연구',
      excerpt: '스트레스에 대한 개인의 대처 방식이 어떻게 다르며, 효과적인 스트레스 관리를 위한 심리학적 전략들을 실증 연구를 바탕으로 소개합니다.',
      content: '...',
      date: '2024년 1월 1일',
      category: '건강심리학',
      tags: ['스트레스', '대처', '건강', '회복탄력성'],
      readTime: '7분 읽기'
    },
    {
      id: '8',
      title: '창의성 심리학: 창의적 사고의 인지적 과정',
      excerpt: '창의성의 심리학적 정의부터 창의적 사고 과정의 인지적 메커니즘까지, 창의성 연구의 최신 동향과 창의력 증진 방법을 탐구합니다.',
      content: '...',
      date: '2023년 12월 28일',
      category: '인지심리학',
      tags: ['창의성', '창의적사고', '문제해결', '혁신'],
      readTime: '9분 읽기'
    },
    {
      id: '9',
      title: '동기와 목표 설정의 심리학적 원리',
      excerpt: '인간의 동기 체계와 목표 설정이 행동과 성과에 미치는 영향을 분석하고, 효과적인 목표 달성을 위한 심리학적 전략을 제시합니다.',
      content: '...',
      date: '2023년 12월 25일',
      category: '동기심리학',
      tags: ['동기', '목표설정', '성취', '자기효능감'],
      readTime: '8분 읽기'
    },
    {
      id: '10',
      title: '디지털 시대의 주의집중력과 멀티태스킹의 한계',
      excerpt: '스마트폰과 소셜미디어가 인간의 주의력에 미치는 영향을 분석하고, 디지털 시대에 적응하기 위한 인지적 전략들을 제시합니다.',
      content: '...',
      date: '2023년 12월 22일',
      category: '인지심리학',
      tags: ['주의력', '멀티태스킹', '디지털', '집중력'],
      readTime: '6분 읽기'
    }
  ];

  const categories = ['성격심리학', '인지심리학', '사회심리학', '발달심리학', '신경심리학', '건강심리학', '동기심리학'];

  return {
    props: {
      posts,
      categories,
    },
    revalidate: 3600, // 1시간마다 재생성
  };
};