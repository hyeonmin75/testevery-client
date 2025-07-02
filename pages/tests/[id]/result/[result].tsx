import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps, GetStaticPaths } from 'next'
import { Test, TestResult, generateSEOMeta, generateShareText, trackEvent, getRandomTest } from '../../../../utils/testUtils'
import testsData from '../../../../data/tests.json'

interface ResultPageProps {
  test: Test
  result: TestResult
  resultKey: string
  nextTest: Test
}

export default function ResultPage({ test, result, resultKey, nextTest }: ResultPageProps) {
  const [shareImage, setShareImage] = useState<string>('')
  const seoMeta = generateSEOMeta(test, resultKey)
  const shareText = generateShareText(test, resultKey)

  useEffect(() => {
    // 결과 페이지 방문 트래킹
    trackEvent('result_viewed', {
      test_id: test.id,
      result: resultKey,
      result_title: result.title
    })

    // 결과 이미지 생성 (클라이언트에서)
    if (typeof window !== 'undefined') {
      import('../../../../utils/testUtils').then(({ generateResultImage }) => {
        generateResultImage(result, test.title).then(setShareImage)
      })
    }
  }, [test, result, resultKey])

  const handleShare = (platform: string) => {
    const url = `https://www.testevery.com/tests/${test.id}`
    const text = `${shareText} ${url}`
    
    trackEvent('result_shared', {
      test_id: test.id,
      result: resultKey,
      platform: platform
    })

    switch (platform) {
      case 'threads':
        window.open(`https://threads.net/intent/post?text=${encodeURIComponent(text)}`, '_blank')
        break
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank')
        break
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank')
        break
      case 'kakao':
        // 카카오톡 공유 (실제 구현시 Kakao SDK 필요)
        navigator.share?.({
          title: result.title,
          text: shareText,
          url: url
        })
        break
      case 'copy':
        navigator.clipboard.writeText(text).then(() => {
          alert('링크가 복사되었습니다!')
        })
        break
    }
  }

  const handleRetry = () => {
    trackEvent('test_retried', { test_id: test.id, from_result: resultKey })
  }

  const handleNextTest = () => {
    trackEvent('next_test_clicked', { 
      current_test: test.id, 
      next_test: nextTest.id,
      from_result: resultKey
    })
  }

  return (
    <>
      <Head>
        <title>{seoMeta.title}</title>
        <meta name="description" content={seoMeta.description} />
        <meta name="keywords" content={seoMeta.keywords} />
        <meta property="og:title" content={seoMeta.ogTitle} />
        <meta property="og:description" content={seoMeta.ogDescription} />
        <meta property="og:image" content={seoMeta.ogImage} />
        <meta property="og:url" content={seoMeta.url} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoMeta.ogTitle} />
        <meta name="twitter:description" content={seoMeta.ogDescription} />
        <meta name="twitter:image" content={seoMeta.ogImage} />
        <link rel="canonical" href={seoMeta.url} />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* 결과 카드 */}
          <div className="text-center mb-8">
            <div 
              className="result-card mx-auto max-w-2xl animate-fade-in"
              style={{ 
                background: `linear-gradient(135deg, ${result.color} 0%, ${adjustBrightness(result.color, -20)} 100%)` 
              }}
            >
              <div className="relative z-10">
                {/* 이모지 */}
                <div className="text-6xl mb-4 animate-bounce-slow">
                  {test.emoji}
                </div>
                
                {/* 결과 제목 */}
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  {result.title}
                </h1>
                
                {/* 퍼센티지 */}
                <div className="text-6xl font-bold mb-6">
                  {result.percentage}%
                </div>
                
                {/* 결과 설명 */}
                <p className="text-xl md:text-2xl leading-relaxed mb-8">
                  {result.description}
                </p>
                
                {/* 특성 태그 */}
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                  {result.traits.map((trait, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium"
                    >
                      #{trait}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 광고 */}
          <div className="adsense-banner mb-8">
            <p className="text-gray-400 text-sm">광고</p>
          </div>

          {/* 조언 섹션 */}
          <div className="bg-white rounded-3xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              💡 당신을 위한 조언
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              {result.advice}
            </p>
          </div>

          {/* 공유 버튼 */}
          <div className="bg-white rounded-3xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              🔥 친구들과 공유해보세요!
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
              <button
                onClick={() => handleShare('threads')}
                className="btn-touch flex flex-col items-center p-4 rounded-2xl bg-threads-600 text-white hover:bg-threads-700 transition-colors"
              >
                <span className="text-2xl mb-2">🧵</span>
                <span className="text-sm font-medium">Threads</span>
              </button>
              
              <button
                onClick={() => handleShare('twitter')}
                className="btn-touch flex flex-col items-center p-4 rounded-2xl bg-blue-500 text-white hover:bg-blue-600 transition-colors"
              >
                <span className="text-2xl mb-2">🐦</span>
                <span className="text-sm font-medium">Twitter</span>
              </button>
              
              <button
                onClick={() => handleShare('facebook')}
                className="btn-touch flex flex-col items-center p-4 rounded-2xl bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                <span className="text-2xl mb-2">📘</span>
                <span className="text-sm font-medium">Facebook</span>
              </button>
              
              <button
                onClick={() => handleShare('kakao')}
                className="btn-touch flex flex-col items-center p-4 rounded-2xl bg-yellow-400 text-gray-900 hover:bg-yellow-500 transition-colors"
              >
                <span className="text-2xl mb-2">💬</span>
                <span className="text-sm font-medium">카카오톡</span>
              </button>
              
              <button
                onClick={() => handleShare('copy')}
                className="btn-touch flex flex-col items-center p-4 rounded-2xl bg-gray-600 text-white hover:bg-gray-700 transition-colors"
              >
                <span className="text-2xl mb-2">📋</span>
                <span className="text-sm font-medium">링크 복사</span>
              </button>
            </div>
            
            {/* 공유 텍스트 미리보기 */}
            <div className="bg-gray-50 rounded-2xl p-4 text-center">
              <p className="text-sm text-gray-600 mb-2">공유될 내용:</p>
              <p className="text-gray-800 font-medium">
                "{shareText}"
              </p>
            </div>
          </div>

          {/* 인라인 광고 */}
          <div className="adsense-inline mb-8">
            <p className="text-gray-400 text-sm">광고</p>
          </div>

          {/* 액션 버튼 */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <Link 
              href={`/tests/${test.id}`}
              onClick={handleRetry}
              className="btn-touch flex-1 bg-gray-100 text-gray-900 rounded-2xl py-4 px-6 font-semibold text-center hover:bg-gray-200 transition-colors"
            >
              🔄 다시 테스트하기
            </Link>
            
            <Link 
              href={`/tests/${nextTest.id}`}
              onClick={handleNextTest}
              className="btn-touch flex-1 bg-threads-600 text-white rounded-2xl py-4 px-6 font-semibold text-center hover:bg-threads-700 transition-colors gradient-threads"
            >
              ✨ 다른 테스트 하기
            </Link>
          </div>

          {/* 다른 테스트 추천 */}
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              🎯 이런 테스트는 어때요?
            </h2>
            
            <Link href={`/tests/${nextTest.id}`}>
              <div className="group bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6 hover:from-threads-50 hover:to-primary-50 transition-all duration-200 card-hover">
                <div className="flex items-center">
                  <div className="text-4xl mr-4 group-hover:animate-bounce">
                    {nextTest.emoji}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {nextTest.title}
                    </h3>
                    <p className="text-gray-600 mb-2">
                      {nextTest.description}
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="mr-4">⏱ {nextTest.estimatedTime}</span>
                      <span>👥 {nextTest.popularity}% 참여</span>
                    </div>
                  </div>
                  <div className="text-threads-600 group-hover:translate-x-1 transition-transform">
                    →
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* 홈으로 돌아가기 */}
          <div className="text-center mt-8">
            <Link 
              href="/"
              className="inline-block text-gray-600 hover:text-gray-900 transition-colors"
            >
              ← 홈으로 돌아가기
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const tests: Test[] = Object.values(testsData)
  const paths: { params: { id: string; result: string } }[] = []

  tests.forEach(test => {
    Object.keys(test.results).forEach(resultKey => {
      paths.push({
        params: { id: test.id, result: resultKey }
      })
    })
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<ResultPageProps> = async ({ params }) => {
  const testId = params?.id as string
  const resultKey = params?.result as string
  
  const test = testsData[testId as keyof typeof testsData] as Test
  
  if (!test || !test.results[resultKey]) {
    return {
      notFound: true
    }
  }

  const result = test.results[resultKey]
  const tests: Test[] = Object.values(testsData)
  const nextTest = getRandomTest(tests, test.id)

  return {
    props: {
      test,
      result,
      resultKey,
      nextTest
    }
  }
}

// 색상 밝기 조절 함수
function adjustBrightness(color: string, amount: number): string {
  const usePound = color[0] === '#'
  const col = usePound ? color.slice(1) : color
  
  const num = parseInt(col, 16)
  let r = (num >> 16) + amount
  let g = (num >> 8 & 0x00FF) + amount
  let b = (num & 0x0000FF) + amount
  
  r = r > 255 ? 255 : r < 0 ? 0 : r
  g = g > 255 ? 255 : g < 0 ? 0 : g
  b = b > 255 ? 255 : b < 0 ? 0 : b
  
  return (usePound ? '#' : '') + (r << 16 | g << 8 | b).toString(16).padStart(6, '0')
}