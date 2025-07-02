import Head from 'next/head'
import { GetStaticProps } from 'next'
import TestCard from '../components/TestCard'
import { Test, sortTestsByPopularity, filterTestsByCategory, getRandomTest } from '../utils/testUtils'
import testsData from '../data/tests.json'

interface HomeProps {
  featuredTest: Test
  popularTests: Test[]
  todaysTest: Test
  categories: Array<{
    name: string
    emoji: string
    count: number
    tests: Test[]
  }>
}

export default function Home({ featuredTest, popularTests, todaysTest, categories }: HomeProps) {
  return (
    <>
      <Head>
        <title>TestEvery - Threads에서 화제인 바이럴 감성 테스트 🔥</title>
        <meta name="description" content="Threads에서 인기 폭발! 나의 감정 색깔, 감정 동물 등 재미있는 감성 테스트를 해보고 친구들과 공유해보세요. 1분만에 나를 알아가는 특별한 경험!" />
        <meta name="keywords" content="Threads 테스트, 바이럴 테스트, 감성 테스트, 심리 테스트, 감정 테스트, 성격 테스트, 공유하기" />
        
        {/* Open Graph */}
        <meta property="og:title" content="TestEvery - Threads 바이럴 감성 테스트 🔥" />
        <meta property="og:description" content="나의 감정 색깔은? 감정 동물은? 1분만에 알아보고 친구들과 공유해요!" />
        <meta property="og:image" content="https://www.testevery.com/og-image.png" />
        <meta property="og:url" content="https://www.testevery.com" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TestEvery - Threads 바이럴 감성 테스트" />
        <meta name="twitter:description" content="나의 감정 색깔은? 감정 동물은? 1분만에 알아보고 친구들과 공유해요!" />
        <meta name="twitter:image" content="https://www.testevery.com/og-image.png" />
        
        <link rel="canonical" href="https://www.testevery.com" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* 헤더 */}
        <header className="relative overflow-hidden bg-white/80 backdrop-blur-sm border-b border-gray-200/50">
          <div className="absolute inset-0 bg-gradient-to-r from-threads-100 to-primary-100 opacity-30" />
          
          <div className="relative max-w-6xl mx-auto px-4 py-6">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-threads-600 to-primary-600 bg-clip-text text-transparent mb-4">
                TestEvery
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-2">
                Threads에서 화제인 바이럴 감성 테스트 🔥
              </p>
              <p className="text-sm text-gray-500">
                1분만에 나를 알아가고 친구들과 공유해보세요
              </p>
            </div>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-4 py-8">
          {/* 오늘의 추천 테스트 */}
          <section className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                🎯 오늘의 추천 테스트
              </h2>
              <p className="text-gray-600">
                지금 가장 많이 하고 있는 인기 테스트예요!
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <TestCard test={featuredTest} featured={true} />
            </div>
          </section>

          {/* 광고 배너 */}
          <div className="adsense-banner mb-12">
            <p className="text-gray-400 text-sm">광고</p>
          </div>

          {/* 인기 테스트 */}
          <section className="mb-12">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                🔥 지금 인기 있는 테스트
              </h2>
              <span className="text-sm text-gray-500">
                실시간 인기순
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularTests.map((test) => (
                <TestCard key={test.id} test={test} />
              ))}
            </div>
          </section>

          {/* 카테고리별 테스트 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              💫 카테고리별 테스트
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
              {categories.map((category) => (
                <div
                  key={category.name}
                  className="group p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 card-hover cursor-pointer"
                >
                  <div className="text-center">
                    <div className="text-3xl mb-2 group-hover:animate-bounce">
                      {category.emoji}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {category.name}
                    </h3>
                    <p className="text-xs text-gray-500">
                      {category.count}개 테스트
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 인라인 광고 */}
          <div className="adsense-inline mb-12">
            <p className="text-gray-400 text-sm">광고</p>
          </div>

          {/* 심심풀이 테스트 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              😊 심심할 때 하는 테스트
            </h2>
            
            <div className="bg-gradient-to-r from-yellow-50to-orange-50 rounded-3xl p-8">
              <div className="max-w-lg mx-auto">
                <TestCard test={todaysTest} />
              </div>
            </div>
          </section>

          {/* CTA 섹션 */}
          <section className="text-center py-16">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                🎉 친구들과 함께 해보세요!
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                테스트 결과를 Threads에 공유하고<br />
                친구들의 결과도 궁금하다면?
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-touch px-8 py-4 bg-threads-600 text-white rounded-2xl font-semibold hover:bg-threads-700 transition-colors duration-200 gradient-threads">
                  🧵 Threads로 공유하기
                </button>
                <button className="btn-touch px-8 py-4 bg-gray-100 text-gray-900 rounded-2xl font-semibold hover:bg-gray-200 transition-colors duration-200">
                  📱 다른 SNS 공유하기
                </button>
              </div>
            </div>
          </section>
        </main>

        {/* 푸터 */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">TestEvery</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Threads에서 화제인 바이럴 감성 테스트 플랫폼<br />
                  재미있는 테스트로 나를 알아가고 친구들과 공유해보세요
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">인기 테스트</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>🎨 감정 색깔 테스트</li>
                  <li>🦊 감정 동물 테스트</li>
                  <li>😊 이모지 상태 테스트</li>
                  <li>🔋 감정 충전 테스트</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">소셜 미디어</h4>
                <div className="flex space-x-4">
                  <button className="w-10 h-10 bg-threads-600 rounded-lg flex items-center justify-center hover:bg-threads-700 transition-colors">
                    🧵
                  </button>
                  <button className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                    📘
                  </button>
                  <button className="w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center hover:bg-pink-700 transition-colors">
                    📷
                  </button>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
              <p>&copy; 2024 TestEvery. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  // 테스트 데이터 변환
  const tests: Test[] = Object.values(testsData);
  
  // 인기순 정렬
  const sortedTests = sortTestsByPopularity(tests);
  
  // 특별 추천 테스트 (가장 인기 있는 테스트)
  const featuredTest = sortedTests[0];
  
  // 인기 테스트 (상위 6개)
  const popularTests = sortedTests.slice(0, 6);
  
  // 오늘의 테스트 (랜덤)
  const todaysTest = getRandomTest(tests, featuredTest.id);
  
  // 카테고리별 분류
  const categoryMap = new Map<string, Test[]>();
  tests.forEach(test => {
    if (!categoryMap.has(test.category)) {
      categoryMap.set(test.category, []);
    }
    categoryMap.get(test.category)!.push(test);
  });
  
  const categories = Array.from(categoryMap.entries()).map(([name, tests]) => ({
    name,
    emoji: getEmojiForCategory(name),
    count: tests.length,
    tests: tests.slice(0, 3) // 각 카테고리당 3개만
  }));

  return {
    props: {
      featuredTest,
      popularTests,
      todaysTest,
      categories
    },
    revalidate: 3600 // 1시간마다 재생성
  };
}

function getEmojiForCategory(category: string): string {
  const emojiMap: Record<string, string> = {
    '감정': '💝',
    '성격': '🌟',
    '색깔': '🎨',
    '동물': '🦄',
    '이모지': '😊',
    '충전': '🔋',
    '캐릭터': '🎬',
    '문장': '💬'
  };
  
  return emojiMap[category] || '✨';
}